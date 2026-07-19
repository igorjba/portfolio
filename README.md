Português | [English](README.en.md)

# Portfólio — Igor Bahia

Site pessoal de Igor Bahia, engenheiro de software. Apresenta a trajetória — da manutenção industrial ao software — e uma seleção de projetos, em português e inglês.

![Página inicial do portfólio](docs/hero.jpg)

[![CI](https://github.com/igorjba/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/igorjba/portfolio/actions/workflows/ci.yml)

Produção: [portfolio-igorjba.vercel.app](https://portfolio-igorjba.vercel.app) · Inglês: [/en](https://portfolio-igorjba.vercel.app/en)

## Visão geral

O site é uma aplicação Next.js gerada como conteúdo estático: cada rota é pré-renderizada no build e servida como HTML, sem função de servidor em tempo de execução. São duas versões completas — português na raiz (`/`) e inglês em `/en` —, cada uma com seu próprio `<html lang>`, `canonical` e `hreflang`, indexáveis de forma independente.

Todo o conteúdo — textos, experiência, projetos — vive tipado num único módulo, `content/site.ts`, com as variantes `pt` e `en` lado a lado. Os componentes leem desse módulo; não há texto solto no JSX. Uma alteração de conteúdo é uma alteração nesse arquivo.

O documento descreve a estrutura e as decisões que a sustentam. As escolhas não-óbvias — por que estático, por que sem biblioteca de animação, por que a política de segurança muda entre desenvolvimento e produção — estão em [Arquitetura](#arquitetura) e [Alternativas consideradas](#alternativas-consideradas).

## Como rodar

Requer Node 24.

```bash
npm install
npm run dev        # http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção (saída estática)
npm run start      # serve o build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

`NEXT_PUBLIC_SITE_URL` (opcional) fixa a URL base usada em metadata, sitemap e Open Graph. Na Vercel, cai para o domínio de produção; em desenvolvimento, para `localhost`.

## Arquitetura

```text
app/
  (pt)/            rota em português na raiz (/)
  (en)/en/         rota em inglês (/en)
  sitemap.ts, robots.ts, icon.svg
components/        seções e UI (server components + ilhas client)
content/site.ts    todo o conteúdo, tipado e bilíngue
lib/               fontes, metadata/SEO, gerador de OG, gerador do traço
public/            imagens (screenshots dos projetos, foto)
assets/fonts/      TTFs usados apenas na geração das imagens de OG
```

Pontos estruturais:

- **Bilíngue por rota, sem i18n em runtime.** Cada idioma é um *route group* com seu próprio root layout, o que permite um `<html lang>` distinto por idioma. São duas páginas estáticas reais, não uma página que troca strings no cliente.
- **Server components por padrão.** Só há JavaScript no cliente onde há interação: navegação, alternância de tema, o trilho da timeline que preenche no scroll, e o observer que revela as seções.
- **Reveals em CSS.** As animações de entrada são keyframes CSS coordenados por um único `IntersectionObserver`. O estado escondido vive atrás de uma classe aplicada quando há JavaScript; sem JavaScript, o conteúdo é servido inteiro (ver [Alternativas consideradas](#alternativas-consideradas)).
- **Tema claro e escuro.** Um script inline aplica o tema salvo antes do primeiro paint — sem flash — e a escolha é persistida em `localStorage`; o escuro é o padrão. As cores são tokens que trocam por `[data-theme]`.
- **Open Graph por rota.** As imagens de compartilhamento são geradas por `next/og` a partir das fontes locais em `assets/fonts/`, uma por idioma.
- **Cabeçalhos de segurança** em `next.config.ts`: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` e `Permissions-Policy`.

Stack: Next.js 16 (App Router), React 19, TypeScript em modo estrito, Tailwind CSS v4 (configurado por CSS, sem `tailwind.config`) e `next/font` para as fontes auto-hospedadas (Fraunces, Geist, Geist Mono). Deploy na Vercel.

## Alternativas consideradas

- **Route groups com dois root layouts, em vez de rota `[lang]` dinâmica ou i18n em runtime.** O `<html lang>` só pode ser definido num root layout, e uma rota dinâmica `app/[lang]` colocaria o português em `/pt`, não na raiz. Os route groups mantêm o português em `/` e o inglês em `/en`, cada um com seu layout e seu `lang`, ambos estáticos.
- **CSS + `IntersectionObserver`, em vez de uma biblioteca de animação.** Uma biblioteca traz JavaScript ao cliente e, se falhar ou demorar, pode deixar o conteúdo preso invisível. Aqui o estado escondido depende de uma classe que só existe com JavaScript ativo; sem ele, o texto é servido visível. A dependência de animação foi removida.
- **`next/image` sem otimização (`unoptimized`), em vez da otimização sob demanda.** A otimização sob demanda roda como função e tem cota no plano gratuito da hospedagem. Servir as imagens direto do CDN mantém o site inteiramente estático, ao custo de não gerar variantes responsivas — aceitável para poucas imagens já enxutas.
- **CSP condicional entre desenvolvimento e produção, em vez de nonce.** Em produção a política não permite `eval`; em desenvolvimento, `unsafe-eval` é liberado porque o Turbopack o usa para HMR. Um nonce por requisição exigiria middleware dinâmico e quebraria a saída estática. Como não há entrada de usuário nem conteúdo refletido, a superfície de XSS é essencialmente nula.

## Verificação

Cada push na branch principal passa por [CI](.github/workflows/ci.yml), que roda os mesmos comandos localmente disponíveis:

```bash
npm run typecheck   # tsc --noEmit, modo estrito
npm run lint        # eslint (next/core-web-vitals + next/typescript)
npm test            # vitest — funções puras (roteamento por idioma, metadata, determinismo do traço)
npm run build       # falha se qualquer rota não gerar
```

Os testes cobrem a lógica pura, não a interface: `pathFor` e `metadataFor` (mapeamento e canonical por idioma), `personJsonLd` (perfis do autor), `isLang` e o determinismo de `buildTracePath` — o que garante o mesmo traço no servidor e no cliente, sem hydration mismatch. Acessibilidade, degradação sem JavaScript e responsividade são verificadas manualmente (ver [Limitações](#limitações)).

## Limitações

- **Testes limitados à lógica pura.** Acessibilidade, degradação sem JavaScript e responsividade foram verificadas manualmente durante o desenvolvimento; não há teste de interface que as prove a cada commit.
- **Conteúdo em código.** Textos e projetos são editados em `content/site.ts`; não há CMS.
- **Imagens servidas sem redimensionamento.** Consequência da saída estática (ver [Alternativas consideradas](#alternativas-consideradas)).

## Licença

© Igor Bahia. Todos os direitos reservados.
