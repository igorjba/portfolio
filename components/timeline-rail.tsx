"use client";

import { useEffect, useRef } from "react";

/**
 * Preenche o trilho conforme a leitura desce. Sem JS o trilho fica cheio (estado final do CSS),
 * porque ele e decoracao — nunca esconde conteudo.
 */
export function TimelineRail({ className }: { className?: string }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const rail = fill?.parentElement;
    if (!fill || !rail) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = rail.getBoundingClientRect();
      const start = window.innerHeight * 0.65;
      const end = window.innerHeight * 0.45;
      const travel = rect.height - (start - end);
      const progress = travel > 0 ? (start - rect.top) / travel : 1;
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className={className}>
      <div
        ref={fillRef}
        className="h-full w-full origin-top bg-signal transition-transform duration-150 ease-out"
      />
    </div>
  );
}
