import type { ReactNode } from "react";

/** Chip de tecnologia usado nas listas de stack (trajetoria e projetos). Renderiza um <li>. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li
      className={`rounded border border-line/70 px-2 py-1 font-mono text-[11px] text-dust-2${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </li>
  );
}
