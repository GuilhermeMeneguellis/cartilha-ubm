"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { playFlip } from "./flipSound";

// PDF page dimensions from the extraction step: 1986 × 3167 (ratio ≈ 1.594 tall).
const PDF_RATIO = 3167 / 1986;
const TOTAL = 17;

const PDF_PAGES = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/pages/page-${n}.png`;
});

export default function SinglePageViewer() {
  const [page, setPage] = useState(0);
  const [muted, setMuted] = useState(false);
  const [dims, setDims] = useState({ width: 420, height: 670 });
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Reserve room for header (~120px) and controls (~80px)
      const maxH = h - 220;
      const maxW = w - 40;
      let pageH = Math.floor(maxH);
      let pageW = Math.floor(pageH / PDF_RATIO);
      if (pageW > maxW) {
        pageW = Math.floor(maxW);
        pageH = Math.floor(pageW * PDF_RATIO);
      }
      pageW = Math.max(260, pageW);
      pageH = Math.max(420, pageH);
      setDims({ width: pageW, height: pageH });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setPage((p) => {
        const next = Math.min(TOTAL - 1, Math.max(0, p + delta));
        if (next !== p) {
          setDirection(delta > 0 ? 1 : -1);
          if (!muted) playFlip();
        }
        return next;
      });
    },
    [muted],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        setPage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setPage(TOTAL - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Swipe support (mobile)
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let tracking = false;
    function onStart(e: TouchEvent) {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    }
    function onEnd(e: TouchEvent) {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        go(dx < 0 ? 1 : -1);
      }
    }
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [go]);

  const atStart = page === 0;
  const atEnd = page === TOTAL - 1;

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="relative single-page-shadow"
        style={{ width: dims.width, height: dims.height }}
      >
        {PDF_PAGES.map((src, i) => {
          const isCurrent = i === page;
          const isPrev = i === page - 1;
          const isNext = i === page + 1;
          // Only render current + immediate neighbors to keep it light
          if (!isCurrent && !isPrev && !isNext) return null;

          let translate = "0%";
          let opacity = 1;
          let scale = 1;
          if (isPrev) {
            translate = direction === -1 ? "-110%" : "-110%";
            opacity = 0;
            scale = 0.96;
          } else if (isNext) {
            translate = "110%";
            opacity = 0;
            scale = 0.96;
          }

          return (
            <div
              key={src}
              className="absolute inset-0 single-page-sheet"
              style={{
                transform: `translateX(${translate}) scale(${scale})`,
                opacity,
                transition:
                  "transform 550ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 350ms ease",
                zIndex: isCurrent ? 2 : 1,
              }}
              aria-hidden={!isCurrent}
            >
              <Image
                src={src}
                alt={`Página ${i + 1} da cartilha`}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                priority={Math.abs(i - page) <= 1}
                draggable={false}
                className="object-contain select-none pointer-events-none"
              />
            </div>
          );
        })}

        {/* Side click zones for desktop */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={atStart}
          aria-label="Página anterior"
          className="hidden md:block absolute top-0 left-0 h-full w-1/4 z-10 cursor-w-resize disabled:cursor-default disabled:opacity-0"
        />
        <button
          type="button"
          onClick={() => go(1)}
          disabled={atEnd}
          aria-label="Próxima página"
          className="hidden md:block absolute top-0 right-0 h-full w-1/4 z-10 cursor-e-resize disabled:cursor-default disabled:opacity-0"
        />
      </div>

      <div className="flex items-center gap-3 text-[var(--ubm-cream)]">
        <button
          onClick={() => go(-1)}
          disabled={atStart}
          className="px-4 py-2 rounded-full border border-[var(--ubm-cream)]/40 hover:bg-[var(--ubm-cream)]/10 transition text-sm disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Página anterior"
        >
          ← Anterior
        </button>
        <div className="text-sm tabular-nums opacity-80 min-w-[5.5rem] text-center">
          {page + 1} / {TOTAL}
        </div>
        <button
          onClick={() => go(1)}
          disabled={atEnd}
          className="px-4 py-2 rounded-full border border-[var(--ubm-cream)]/40 hover:bg-[var(--ubm-cream)]/10 transition text-sm disabled:opacity-30 disabled:cursor-not-allowed"
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
