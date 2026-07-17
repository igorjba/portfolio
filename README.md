# Portfólio — Igor Bahia

Site pessoal de [Igor Bahia](https://www.linkedin.com/in/igor-bahia-31b7b06b), engenheiro de software full stack. Bilíngue (PT/EN), dark-first, com estética editorial e um fio condutor de telemetria que liga a origem industrial à engenharia de software.

Produção: **[portfolio-igorjba.vercel.app](https://portfolio-igorjba.vercel.app)** · English: **[/en](https://portfolio-igorjba.vercel.app/en)**

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, saída estática) + **React 19**
- **TypeScript** em modo estrito
- **[Tailwind CSS v4](https://tailwindcss.com)** (config via CSS, sem `tailwind.config`)
- **`next/og`** para as imagens de Open Graph geradas por rota
- **`next/font`** (Fraunces, Geist, Geist Mono) auto-hospedadas
- Deploy na **[Vercel](https://vercel.com)**

Sem biblioteca de animação: os reveals são CSS + um `IntersectionObserver` mínimo, e degradam para conteúdo totalmente visível quando não há JavaScript.

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros scripts:

```bash
npm run build     # build de produção
npm run start     # serve o build
npm run lint      # eslint
npm run typecheck # tsc --noEmit
```

## Estrutura

```
app/
  (pt)/            rota PT na raiz  (/)
  (en)/en/         rota EN          (/en)
  sitemap.ts, robots.ts, icon.svg
components/        secoes e UI (server components + ilhas client)
content/site.ts   TODO o conteudo, tipado e bilingue — fonte unica de verdade
lib/               fontes, metadata/SEO, gerador de OG
public/            imagens (screenshots dos projetos, foto)
assets/fonts/      TTFs usados apenas na geracao das imagens de OG
```

Para editar textos, projetos ou experiência, mexa só em [`content/site.ts`](content/site.ts) — cada campo tem as variantes `pt` e `en`.

## Idioma

PT vive na raiz (`/`) e EN em `/en`, cada um com seu próprio `<html lang>`, `canonical` e `hreflang`. O toggle no header troca de rota preservando o contexto. Nada de i18n no cliente: são duas páginas estáticas de verdade, ambas indexáveis.

## Configuração

`NEXT_PUBLIC_SITE_URL` (opcional) fixa a URL base usada em metadata, sitemap e OG. Na Vercel, cai automaticamente para o domínio de produção; em dev, para `localhost`.

---

Feito com Next.js e Tailwind. Sem template.
