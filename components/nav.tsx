"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile, ui, type Lang } from "@/content/site";
import { PulseDot } from "@/components/pulse-dot";
import { ThemeToggle } from "@/components/theme-toggle";
import { pathFor } from "@/lib/site";

export function Nav({ lang }: { lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const other: Lang = lang === "pt" ? "en" : "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // A faixa estreita no topo evita que duas secoes disputem o estado "ativo".
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line/60 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={pathFor(lang)}
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-bone"
        >
          <PulseDot />
          <span className="font-medium">igor bahia</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={ui.menu[lang]}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                active === item.id ? "text-bone" : "text-dust hover:text-bone"
              }`}
            >
              {item.label[lang]}
              <span
                className={`mx-auto mt-1 block h-px bg-signal transition-all duration-300 ${
                  active === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle lang={lang} />

          <Link
            href={pathFor(other)}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            aria-label={ui.langSwitchLabel[lang]}
            className="rounded-full border border-line px-3 py-1.5 font-mono text-xs tracking-widest text-dust transition-colors duration-300 hover:border-signal hover:text-signal"
          >
            {ui.langSwitch[lang]}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? ui.close[lang] : ui.menu[lang]}
            className="flex size-9 items-center justify-center rounded-full border border-line text-dust transition-colors duration-300 hover:text-bone md:hidden"
          >
            <span className="sr-only">{open ? ui.close[lang] : ui.menu[lang]}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d={open ? "M3 3 L13 13 M13 3 L3 13" : "M2 5 H14 M2 11 H14"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cobre o resto da pagina enquanto o menu esta aberto e fecha ao toque fora. */}
      <button
        type="button"
        hidden={!open}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 top-16 -z-10 w-full cursor-default bg-ink/85 backdrop-blur-sm md:hidden"
      />

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line/60 bg-ink/95 backdrop-blur-xl md:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label={ui.menu[lang]}>
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/40 py-3.5 text-base text-dust last:border-0 hover:text-bone"
            >
              {item.label[lang]}
              <span className="label">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 rounded-full bg-signal px-4 py-2.5 text-center text-sm font-medium text-ink"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
