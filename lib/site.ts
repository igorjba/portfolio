import type { Metadata } from "next";
import { meta, profile, type Lang } from "@/content/site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://portfolio-igorjba.vercel.app")
).replace(/\/$/, "");

/** PT vive na raiz; EN em /en. Cada idioma tem URL propria e indexavel. */
export const pathFor = (lang: Lang) => (lang === "pt" ? "/" : "/en");

export function metadataFor(lang: Lang): Metadata {
  const path = pathFor(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title[lang],
    description: meta.description[lang],
    applicationName: `${profile.name} — portfolio`,
    authors: [{ name: profile.name, url: profile.linkedin }],
    creator: profile.name,
    keywords:
      lang === "pt"
        ? ["Igor Bahia", "engenheiro de software", "desenvolvedor full stack", "React", "Next.js", "Node.js", "Python", ".NET", "Salvador", "Bahia"]
        : ["Igor Bahia", "software engineer", "full stack developer", "React", "Next.js", "Node.js", "Python", ".NET", "Brazil", "remote"],
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      alternateLocale: lang === "pt" ? "en_US" : "pt_BR",
      url: path,
      siteName: profile.name,
      title: meta.title[lang],
      description: meta.description[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title[lang],
      description: meta.description[lang],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

/** JSON-LD: ajuda o Google a entender que a pagina descreve uma pessoa e o que ela faz. */
export function personJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${siteUrl}${pathFor(lang)}`,
    image: `${siteUrl}/igor.jpg`,
    jobTitle: profile.role[lang],
    description: meta.description[lang],
    sameAs: [profile.linkedin, profile.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    worksFor: { "@type": "Organization", name: "Lactec" },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Universidade Salvador" },
      { "@type": "EducationalOrganization", name: "Cubos Academy" },
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Django", "C#", ".NET", "PostgreSQL", "Smart Grid", "Distributed systems"],
    knowsLanguage: [
      { "@type": "Language", name: "Portuguese" },
      { "@type": "Language", name: "English" },
    ],
  };
}
