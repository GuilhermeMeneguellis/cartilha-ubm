"use client";

import { forwardRef, ReactNode } from "react";
import { HandPoint, MagIcon } from "./Icons";

type PageProps = {
  children: ReactNode;
  side?: "left" | "right";
  number?: number;
  className?: string;
  variant?: "cream" | "burgundy";
};

export const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  { children, side = "right", number, className = "", variant = "cream" },
  ref,
) {
  const bg = variant === "burgundy" ? "book-page burgundy" : "book-page";
  return (
    <div ref={ref} className="flipbook-shadow">
      <div className={`${bg} ${side} h-full w-full ${className}`}>
        {children}
        {number !== undefined && (
          <span className={`page-number ${side}`}>{number}</span>
        )}
      </div>
    </div>
  );
});

export const CoverPage = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function CoverPage({ children }, ref) {
    return (
      <div ref={ref} className="flipbook-shadow">
        <div className="cover-page h-full w-full flex flex-col">{children}</div>
      </div>
    );
  },
);

export const BackCover = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function BackCover({ children }, ref) {
    return (
      <div ref={ref} className="flipbook-shadow">
        <div className="back-cover h-full w-full flex flex-col">{children}</div>
      </div>
    );
  },
);

export function SectionHeader({
  children,
  italic = false,
}: {
  children: ReactNode;
  italic?: boolean;
}) {
  return (
    <>
      <div className="page-title-pill text-base md:text-lg">
        <MagIcon className="w-5 h-5 shrink-0" />
        <span className={italic ? "italic" : ""}>{children}</span>
        <HandPoint className="w-5 h-5 ml-1 text-[var(--ubm-burgundy)]/80" />
      </div>
      <div className="section-divider" />
    </>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong className="text-[var(--ubm-burgundy)] font-semibold">
      {children}
    </strong>
  );
}

export function InfoCard({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="p-3 rounded-md bg-[var(--ubm-cream-warm)]/60 border border-[var(--ubm-burgundy)]/30 shadow-sm">
      <div className="font-bold text-[var(--ubm-burgundy)] text-sm">
        {title}
      </div>
      {subtitle && (
        <div className="text-[0.7rem] uppercase tracking-widest opacity-70 mt-0.5">
          {subtitle}
        </div>
      )}
      <div className="mt-1.5 text-[0.82rem] leading-snug">{children}</div>
    </div>
  );
}
