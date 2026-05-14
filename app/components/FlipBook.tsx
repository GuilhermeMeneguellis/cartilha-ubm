"use client";

import Image from "next/image";
import { forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { playFlip } from "./flipSound";

type FlipApi = {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getPageCount: () => number;
  };
};

// PDF page dimensions from the extraction step: 1986 × 3167 (ratio ≈ 1.594).
const PDF_RATIO = 3167 / 1986;

const PDF_PAGES = Array.from({ length: 17 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/pages/page-${n}.png`;
});

type SheetProps = { src: string; alt: string; priority?: boolean };
const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  { src, alt, priority },
  ref,
) {
  return (
    <div ref={ref} className="pdf-sheet">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        priority={priority}
        draggable={false}
        className="object-contain select-none pointer-events-none"
      />
    </div>
  );
});

const BackPage = forwardRef<HTMLDivElement, { children?: ReactNode }>(
  function BackPage(_, ref) {
    return (
      <div ref={ref} className="back-cover h-full w-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-8">
          <div className="text-xl tracking-[0.3em] uppercase opacity-80">
            Nova UBM
          </div>
          <div className="w-24 h-1 bg-[var(--ubm-cream)] opacity-60" />
          <p className="font-serif italic text-base md:text-lg leading-snug">
            &ldquo;A pesquisa e a iniciação científica como instrumento de
            construção da autonomia intelectual e postura crítica.&rdquo;
          </p>
          <div className="mt-auto text-[0.65rem] tracking-widest opacity-70">
            Coordenação de Pesquisa e Pós-Graduação · 2026
          </div>
        </div>
      </div>
    );
  },
);

export default function FlipBook() {
  const bookRef = useRef<FlipApi | null>(null);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [muted, setMuted] = useState(false);
  const [dims, setDims] = useState({ width: 420, height: 670 });

  useEffect(() => {
    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxSpreadW = Math.min(w - 60, 1200);
      const maxH = h - 170;
      let pageW = Math.floor(maxSpreadW / 2);
      let pageH = Math.floor(pageW * PDF_RATIO);
      if (pageH > maxH) {
        pageH = Math.floor(maxH);
        pageW = Math.floor(pageH / PDF_RATIO);
      }
      pageW = Math.max(280, pageW);
      pageH = Math.max(440, pageH);
      setDims({ width: pageW, height: pageH });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  function onFlip(e: { data: number }) {
    setPage(e.data);
    if (!muted) playFlip();
  }
  function onInit() {
    const t = bookRef.current?.pageFlip()?.getPageCount();
    if (typeof t === "number") setTotal(t);
  }
  function next() {
    bookRef.current?.pageFlip()?.flipNext();
  }
  function prev() {
    bookRef.current?.pageFlip()?.flipPrev();
  }

  const showingCover = page === 0;
  const showingBack = total > 0 && page === total - 1;
  const shift = showingCover
    ? -dims.width / 2
    : showingBack
      ? dims.width / 2
      : 0;

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        style={{
          width: dims.width * 2,
          height: dims.height,
          transform: `translateX(${shift}px)`,
          transition: "transform 750ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        }}
        className="select-none flipbook-shadow"
      >
        <HTMLFlipBook
          ref={bookRef}
          width={dims.width}
          height={dims.height}
          size="stretch"
          minWidth={280}
          maxWidth={760}
          minHeight={440}
          maxHeight={1200}
          drawShadow
          flippingTime={750}
          usePortrait={false}
          maxShadowOpacity={0.55}
          showCover
          mobileScrollSupport
          onFlip={onFlip}
          onInit={onInit}
          className="cartilha-book"
          style={{}}
          startPage={0}
          startZIndex={0}
          autoSize
          clickEventForward
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          disableFlipByClick={false}
        >
          {PDF_PAGES.map((src, i) => (
            <Sheet
              key={src}
              src={src}
              alt={`Página ${i + 1} da cartilha`}
              priority={i < 4}
            />
          ))}
          <BackPage />
        </HTMLFlipBook>
      </div>

      <div className="flex items-center gap-3 text-[var(--ubm-cream)]">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-full border border-[var(--ubm-cream)]/40 hover:bg-[var(--ubm-cream)]/10 transition text-sm"
          aria-label="Página anterior"
        >
          ← Anterior
        </button>
        <div className="text-sm tabular-nums opacity-80 min-w-[5.5rem] text-center">
          {page + 1} / {total || "—"}
        </div>
        <button
          onClick={next}
          className="px-4 py-2 rounded-full border border-[var(--ubm-cream)]/40 hover:bg-[var(--ubm-cream)]/10 transition text-sm"
          aria-label="Próxima página"
        >
          Próxima →
        </button>
        <button
          onClick={() => setMuted((m) => !m)}
          className="ml-3 px-3 py-2 rounded-full border border-[var(--ubm-cream)]/30 hover:bg-[var(--ubm-cream)]/10 transition text-sm"
          aria-label={muted ? "Ativar som" : "Silenciar"}
          title={muted ? "Som desligado" : "Som ligado"}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
}
