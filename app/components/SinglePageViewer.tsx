"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { playFlip } from "./flipSound";

// PDF page dimensions from the extraction step: 1986 × 3167 (ratio ≈ 1.594 tall).
const PDF_RATIO = 3167 / 1986;
const TOTAL = 17;

const PDF_PAGES = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/pages/page-${n}.png`;
});

type Dims = { width: number; height: number; isMobile: boolean };

function computeDims(viewportW: number, viewportH: number, fullscreen: boolean): Dims {
  const isMobile = viewportW < 768;
  let reservedH: number;
  let reservedW: number;
  if (fullscreen) {
    // Fullscreen: tiny chrome — only the floating controls reserve room.
    reservedH = 92;
    reservedW = 16;
  } else if (isMobile) {
    // Mobile inline: compact header + single-row controls.
    reservedH = 140;
    reservedW = 12;
  } else {
    reservedH = 180;
    reservedW = 80;
  }
  const availW = Math.max(220, viewportW - reservedW);
  const availH = Math.max(300, viewportH - reservedH);
  let pageW = availW;
  let pageH = pageW * PDF_RATIO;
  if (pageH > availH) {
    pageH = availH;
    pageW = pageH / PDF_RATIO;
  }
  return { width: Math.floor(pageW), height: Math.floor(pageH), isMobile };
}

function Icon({
  d,
  className,
}: {
  d: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  prev: "M15 6l-6 6 6 6",
  next: "M9 6l6 6-6 6",
  expand: "M4 10V4h6 M20 10V4h-6 M4 14v6h6 M20 14v6h-6",
  contract: "M10 4v6H4 M14 4v6h6 M10 20v-6H4 M14 20v-6h6",
  sound: "M4 10v4h3l5 4V6L7 10H4z M16.5 8.5a5 5 0 010 7 M19.5 5.5a9 9 0 010 13",
  mute: "M4 10v4h3l5 4V6L7 10H4z M16 9l5 6 M21 9l-5 6",
};

export default function SinglePageViewer() {
  const [page, setPage] = useState(0);
  const [muted, setMuted] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [nativeFs, setNativeFs] = useState(false);
  const [pseudoFs, setPseudoFs] = useState(false);
  const [dims, setDims] = useState<Dims>({ width: 340, height: 542, isMobile: true });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isFullscreen = nativeFs || pseudoFs;

  useEffect(() => {
    function resize() {
      setDims(computeDims(window.innerWidth, window.innerHeight, isFullscreen));
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, [isFullscreen]);

  useEffect(() => {
    function onChange() {
      setNativeFs(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!pseudoFs) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [pseudoFs]);

  const toggleFullscreen = useCallback(async () => {
    if (isFullscreen) {
      if (document.fullscreenElement) {
        try {
          await document.exitFullscreen();
        } catch {
          /* ignore */
        }
      }
      setPseudoFs(false);
      return;
    }
    const node = wrapperRef.current;
    if (node && typeof node.requestFullscreen === "function") {
      try {
        await node.requestFullscreen();
        return;
      } catch {
        /* fall through */
      }
    }
    setPseudoFs(true);
  }, [isFullscreen]);

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
      } else if (e.key === "Escape" && pseudoFs) {
        setPseudoFs(false);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, pseudoFs, toggleFullscreen]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let tracking = false;
    function onStart(e: TouchEvent) {
      if (e.touches.length !== 1) {
        tracking = false;
        return;
      }
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
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        go(dx < 0 ? 1 : -1);
      }
    }
    const target = wrapperRef.current ?? window;
    target.addEventListener("touchstart", onStart as EventListener, { passive: true });
    target.addEventListener("touchend", onEnd as EventListener, { passive: true });
    return () => {
      target.removeEventListener("touchstart", onStart as EventListener);
      target.removeEventListener("touchend", onEnd as EventListener);
    };
  }, [go]);

  const atStart = page === 0;
  const atEnd = page === TOTAL - 1;

  return (
    <div
      ref={wrapperRef}
      className={`viewer-wrapper ${isFullscreen ? "is-fullscreen" : "is-inline"}`}
    >
      <div
        className="relative single-page-shadow viewer-stage"
        style={{ width: dims.width, height: dims.height }}
      >
        {PDF_PAGES.map((src, i) => {
          const isCurrent = i === page;
          const isPrev = i === page - 1;
          const isNext = i === page + 1;
          if (!isCurrent && !isPrev && !isNext) return null;

          let translate = "0%";
          let opacity = 1;
          let scale = 1;
          if (isPrev) {
            translate = "-110%";
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
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 600px"
                priority={Math.abs(i - page) <= 1}
                draggable={false}
                quality={92}
                className="object-contain select-none pointer-events-none"
              />
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => go(-1)}
          disabled={atStart}
          aria-label="Página anterior"
          className="absolute top-0 left-0 h-full w-1/4 z-10 cursor-w-resize disabled:cursor-default disabled:opacity-0"
        />
        <button
          type="button"
          onClick={() => go(1)}
          disabled={atEnd}
          aria-label="Próxima página"
          className="absolute top-0 right-0 h-full w-1/4 z-10 cursor-e-resize disabled:cursor-default disabled:opacity-0"
        />
      </div>

      <div className="viewer-controls" role="group" aria-label="Navegação da cartilha">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={atStart}
          className="viewer-btn viewer-btn-icon"
          aria-label="Página anterior"
          title="Anterior"
        >
          <Icon d={ICONS.prev} className="w-5 h-5" />
        </button>

        <div className="viewer-counter" aria-live="polite" aria-atomic="true">
          <span className="viewer-counter-current">{page + 1}</span>
          <span className="viewer-counter-sep">/</span>
          <span className="viewer-counter-total">{TOTAL}</span>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          disabled={atEnd}
          className="viewer-btn viewer-btn-icon"
          aria-label="Próxima página"
          title="Próxima"
        >
          <Icon d={ICONS.next} className="w-5 h-5" />
        </button>

        <div className="viewer-controls-divider" aria-hidden="true" />

        <button
          type="button"
          onClick={toggleFullscreen}
          className="viewer-btn viewer-btn-primary"
          aria-label={isFullscreen ? "Sair da tela cheia" : "Ler em tela cheia"}
          title={isFullscreen ? "Sair da tela cheia" : "Ler em tela cheia"}
        >
          <Icon
            d={isFullscreen ? ICONS.contract : ICONS.expand}
            className="w-5 h-5"
          />
          <span className="viewer-btn-label">
            {isFullscreen ? "Sair" : "Tela cheia"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="viewer-btn viewer-btn-icon"
          aria-label={muted ? "Ativar som das páginas" : "Silenciar som das páginas"}
          aria-pressed={muted}
          title={muted ? "Som desligado" : "Som ligado"}
        >
          <Icon d={muted ? ICONS.mute : ICONS.sound} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
