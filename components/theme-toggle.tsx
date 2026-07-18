"use client";

import { ui, type Lang } from "@/content/site";

/**
 * Alterna o tema lendo/escrevendo o data-theme direto no <html> (posto pelo ThemeScript).
 * Sem estado React: os dois icones ficam no DOM e o CSS mostra o certo por [data-theme],
 * o que evita hydration mismatch e mantem o botao interativo antes mesmo de hidratar.
 */
export function ThemeToggle({ lang }: { lang: Lang }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

    root.classList.add("theme-transition");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sem localStorage (modo privado): a troca vale so para esta sessao.
    }

    window.setTimeout(() => root.classList.remove("theme-transition"), 450);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.themeToggle[lang]}
      title={ui.themeToggle[lang]}
      className="flex size-9 items-center justify-center rounded-full border border-line text-dust transition-colors duration-300 hover:border-signal hover:text-signal"
    >
      <svg className="theme-icon-dark" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <svg className="theme-icon-light" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 14.2A8 8 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
