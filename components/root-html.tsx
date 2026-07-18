import type { ReactNode } from "react";
import { fontVariables } from "@/lib/fonts";
import { personJsonLd } from "@/lib/site";
import { RevealObserver } from "@/components/reveal-observer";
import { ThemeScript } from "@/components/theme-script";
import { ui, type Lang } from "@/content/site";
import "@/app/globals.css";

export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={fontVariables} suppressHydrationWarning>
      <body className="grain min-h-dvh antialiased">
        <ThemeScript />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          {ui.skipToContent[lang]}
        </a>
        {children}
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
        />
      </body>
    </html>
  );
}
