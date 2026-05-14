// Renders every page of the source cartilha PDF into PNGs under public/pages/.
// Re-run whenever the PDF is updated:  npm run extract-pdf
//
// Uses pdfjs-dist (legacy build, Node-compatible) + @napi-rs/canvas (prebuilt
// binaries on Windows / macOS / Linux — no GTK / Cairo install needed).

import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import { createCanvas } from "@napi-rs/canvas";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "pages");

// PDF lives one folder above the Next app
const pdfPath = path.resolve(
  root,
  "..",
  "rev 2026 Conheça a Pesquisa no UBM Cartilha oficial.pdf",
);

// pdfjs legacy build works in Node when we polyfill DOMMatrix / ImageData /
// Path2D from the canvas package (versions ≥ 4 still need this).
const { DOMMatrix, ImageData, Path2D } = await import("@napi-rs/canvas");
globalThis.DOMMatrix = globalThis.DOMMatrix ?? DOMMatrix;
globalThis.ImageData = globalThis.ImageData ?? ImageData;
globalThis.Path2D = globalThis.Path2D ?? Path2D;

const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

const SCALE = 2.0; // 2× for retina-quality output

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  // Clear previous output so renaming or shorter PDFs don't leave stale files.
  for (const file of await fs.readdir(outDir).catch(() => [])) {
    if (file.startsWith("page-") && file.endsWith(".png")) {
      await fs.unlink(path.join(outDir, file));
    }
  }

  const data = new Uint8Array(await fs.readFile(pdfPath));

  const loadingTask = pdfjs.getDocument({
    data,
    disableFontFace: true,
    useSystemFonts: true,
  });
  const doc = await loadingTask.promise;

  console.log(`PDF loaded · ${doc.numPages} pages · rendering at ${SCALE}×…`);

  const manifest = { count: doc.numPages, pages: [] };

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: SCALE });

    const canvas = createCanvas(
      Math.ceil(viewport.width),
      Math.ceil(viewport.height),
    );
    const ctx = canvas.getContext("2d");

    await page.render({
      canvasContext: ctx,
      viewport,
      canvas, // pdfjs v5+ wants the canvas instance too
    }).promise;

    const fileName = `page-${String(i).padStart(2, "0")}.png`;
    const filePath = path.join(outDir, fileName);
    const png = await canvas.encode("png");
    await fs.writeFile(filePath, png);

    manifest.pages.push({
      index: i,
      file: `/pages/${fileName}`,
      width: canvas.width,
      height: canvas.height,
    });

    page.cleanup();
    process.stdout.write(`  ✓ page ${i}/${doc.numPages}\r`);
  }

  await fs.writeFile(
    path.join(outDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(`\nDone · ${doc.numPages} PNGs in public/pages/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
