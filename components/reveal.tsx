import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos, para escalonar itens de uma mesma lista. */
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * Marca o elemento para o observer global. Sem JS o conteudo simplesmente aparece:
 * o estado escondido vive atras da classe .js (ver globals.css).
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
