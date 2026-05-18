"use client";

import dynamic from "next/dynamic";

const SinglePageViewer = dynamic(() => import("./SinglePageViewer"), {
  ssr: false,
  loading: () => (
    <div className="text-[var(--ubm-cream)]/70 text-sm tracking-widest uppercase animate-pulse">
      Abrindo a cartilha…
    </div>
  ),
});

export default function BookViewer() {
  return <SinglePageViewer />;
}
