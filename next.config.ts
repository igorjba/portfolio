import type { NextConfig } from "next";

/*
 * CSP estatica: o site e auto-contido (scripts, estilos, fontes e imagens de self),
 * sem chamadas a terceiros. 'unsafe-inline' em script cobre os inline de hidratacao
 * do Next — a alternativa (nonce) exigiria middleware dinamico e quebraria o build
 * estatico; aceitavel aqui porque nao ha input de usuario nem conteudo refletido.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Serve as imagens direto do CDN, sem a funcao de otimizacao sob demanda:
  // mantem o site 100% estatico e dentro do plano gratuito da hospedagem.
  images: { unoptimized: true },
  headers: async () => [{ source: "/:path*", headers: securityHeaders }],
  redirects: async () => [
    // O portfolio antigo indexou /pages/*/index.html; preserva esses links.
    { source: "/pages/home/index.html", destination: "/", permanent: true },
    { source: "/pages/portfolio/index.html", destination: "/#trabalho", permanent: true },
    { source: "/pages/contato/index.html", destination: "/#contato", permanent: true },
  ],
};

export default nextConfig;
