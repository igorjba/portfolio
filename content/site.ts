export const LANGS = ["pt", "en"] as const;

export type Lang = (typeof LANGS)[number];

/** Texto que existe nos dois idiomas. */
export type L = Record<Lang, string>;

export const isLang = (value: string): value is Lang => LANGS.includes(value as Lang);

/** Ano em que a carreira em operacao critica comecou (ajudante de mecanico, Transpetro). */
export const CAREER_START = 2008;
/** Ano da virada para software (Cubos Academy). */
export const DEV_START = 2022;

export const profile = {
  name: "Igor Bahia",
  role: {
    pt: "Engenheiro de software full stack",
    en: "Full stack software engineer",
  },
  location: { pt: "Salvador, Bahia — Brasil", en: "Salvador, Bahia — Brazil" },
  linkedin: "https://www.linkedin.com/in/igor-bahia-31b7b06b",
  github: "https://github.com/igorjba",
  githubUser: "igorjba",
} as const;

export const nav: ReadonlyArray<{ id: string; label: L }> = [
  { id: "sobre", label: { pt: "Sobre", en: "About" } },
  { id: "trajetoria", label: { pt: "Trajetória", en: "Path" } },
  { id: "trabalho", label: { pt: "Trabalho", en: "Work" } },
  { id: "stack", label: { pt: "Stack", en: "Stack" } },
  { id: "contato", label: { pt: "Contato", en: "Contact" } },
];

export const hero = {
  status: { pt: "Aberto a conversas", en: "Open to conversations" },
  headline: {
    pt: "Sistema bom é sistema que não cai.",
    en: "A good system is one that doesn't go down.",
  },
  /** Quebrado em duas partes para o titulo receber enfase tipografica no fecho. */
  headlineLead: { pt: "Sistema bom é sistema", en: "A good system is one" },
  headlineEmphasis: { pt: "que não cai.", en: "that doesn't go down." },
  intro: {
    pt: "Sou Igor Bahia, engenheiro de software full stack em Salvador. Passei oito anos numa refinaria antes de migrar para o código — primeiro desmontando bombas, depois decidindo quando milhares de equipamentos podiam parar. Trouxe a régua comigo.",
    en: "I'm Igor Bahia, a full stack software engineer based in Salvador, Brazil. I spent eight years in an oil terminal before moving into code — first taking pumps apart, later deciding when thousands of assets were allowed to stop. I brought the standard with me.",
  },
  now: {
    pt: "Hoje modernizo plataformas do setor elétrico no Lactec: interfaces novas em cima de sistemas legados, backends em .NET e Python, e integração com o ecossistema Smart Grid da Landis+Gyr.",
    en: "Today I modernize power-sector platforms at Lactec: new interfaces on top of legacy systems, .NET and Python backends, and integration with Landis+Gyr's Smart Grid ecosystem.",
  },
  ctaWork: { pt: "Ver o trabalho", en: "See the work" },
  ctaTalk: { pt: "Falar comigo", en: "Get in touch" },
  scroll: { pt: "role", en: "scroll" },
} as const;

export const telemetry: ReadonlyArray<{ value: L; label: L }> = [
  {
    value: { pt: `desde ${CAREER_START}`, en: `since ${CAREER_START}` },
    label: { pt: "em ambientes críticos", en: "in critical environments" },
  },
  {
    value: { pt: `desde ${DEV_START}`, en: `since ${DEV_START}` },
    label: { pt: "escrevendo software", en: "writing software" },
  },
  {
    value: { pt: "3 stacks", en: "3 stacks" },
    label: { pt: "node · python · .net", en: "node · python · .net" },
  },
  {
    value: { pt: "GDG", en: "GDG" },
    label: { pt: "organizador em salvador", en: "organizer in salvador" },
  },
];

export const about = {
  eyebrow: { pt: "Sobre", en: "About" },
  title: { pt: "Da bomba centrífuga ao deploy", en: "From centrifugal pumps to deploys" },
  photoCaption: { pt: "Igor Bahia, Salvador — BA", en: "Igor Bahia, Salvador — Brazil" },
  body: [
    {
      pt: "Comecei aos dezenove anos como ajudante de mecânico num terminal de petróleo em Madre de Deus, desmontando bombas centrífugas multiestágio e compressores alternativos. Depois virei planejador: passei a decidir, com anos de antecedência, quando milhares de equipamentos parariam — e a responder quando a conta não fechava.",
      en: "I started at nineteen as a mechanic's assistant at an oil terminal in Madre de Deus, taking multistage centrifugal pumps and reciprocating compressors apart. Then I moved into planning: I decided, years in advance, when thousands of assets would stop — and I answered for it when the math didn't hold.",
    },
    {
      pt: "Ninguém se machuca quando um botão desalinha. Mas a lógica é a mesma dos dois lados: ou você projeta pensando na falha, ou a falha te encontra num domingo às três da manhã. Migrei para o software em 2022 e essa é a única coisa que trouxe intacta do chão de fábrica.",
      en: "Nobody gets hurt when a button is misaligned. But the logic is the same on both sides: either you design for failure, or failure finds you at 3am on a Sunday. I moved into software in 2022, and that's the one thing I carried over intact from the plant floor.",
    },
    {
      pt: "Na prática, isso quer dizer que penso em log, timeout e caminho de erro antes de pensar em animação. Gosto de sistema legado — é onde mora o problema real, e onde dá para provar que engenharia não é reescrever tudo do zero. Fora do código, organizo o Google Developer Group em Salvador. E quando a cabeça trava, o remédio é surf ou corrida.",
      en: "In practice: I think about logs, timeouts and error paths before I think about animation. I like legacy systems — that's where the real problem lives, and where you get to prove that engineering isn't rewriting everything from scratch. Outside of code, I help organize the Google Developer Group in Salvador. And when my head jams, the fix is surfing or running.",
    },
  ],
} as const;

export type Role = {
  company: string;
  title: L;
  period: L;
  /** Ano de inicio — ancora a ordenacao e o eixo da timeline. */
  year: number;
  place: L;
  summary: L;
  bullets: ReadonlyArray<L>;
  tags: ReadonlyArray<string>;
  current?: boolean;
};

export const experience: ReadonlyArray<Role> = [
  {
    company: "Lactec",
    title: { pt: "Analista de sistemas de TI", en: "IT systems analyst" },
    period: { pt: "mai 2024 — hoje", en: "May 2024 — now" },
    year: 2024,
    place: { pt: "Salvador, BA", en: "Salvador, Brazil" },
    current: true,
    summary: {
      pt: "Modernização de plataformas críticas do setor elétrico — as legadas que ninguém pode desligar.",
      en: "Modernizing critical power-sector platforms — the legacy ones nobody is allowed to turn off.",
    },
    bullets: [
      {
        pt: "Construo interfaces novas em Next.js, React e TypeScript desacopladas de sistemas legados, para que o front possa evoluir sem esperar a reescrita do backend.",
        en: "I build new Next.js, React and TypeScript interfaces decoupled from legacy systems, so the front end can evolve without waiting on a backend rewrite.",
      },
      {
        pt: "Desenvolvo e sustento backends em C#/.NET e Python (Django/DRF), com APIs REST, autenticação federada via Keycloak/JWT e integração entre serviços que não foram feitos para conversar.",
        en: "I develop and maintain C#/.NET and Python (Django/DRF) backends, with REST APIs, federated auth through Keycloak/JWT, and integration between services that were never designed to talk to each other.",
      },
      {
        pt: "Atuo em projetos do ecossistema Smart Grid da Landis+Gyr — AMI, RF Mesh e DLMS/COSEM — com times multinacionais e aplicações em operação real fora do Brasil.",
        en: "I work on Landis+Gyr Smart Grid projects — AMI, RF Mesh and DLMS/COSEM — alongside multinational teams, on applications running in production outside Brazil.",
      },
      {
        pt: "Investigo incidente: log, payload, fluxo de integração, e a pergunta chata de \"por que isso só quebra em produção?\". Pipelines em Jenkins, troubleshooting em SQL Server, Oracle e PostgreSQL.",
        en: "I dig into incidents: logs, payloads, integration flows, and the annoying question of \"why does this only break in production?\". Jenkins pipelines, troubleshooting across SQL Server, Oracle and PostgreSQL.",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "C#/.NET", "Python", "Django/DRF", "Keycloak", "Docker", "Jenkins", "Smart Grid"],
  },
  {
    company: "Cubos Academy",
    title: { pt: "Desenvolvedor full stack", en: "Full stack developer" },
    period: { pt: "set 2023 — fev 2024", en: "Sep 2023 — Feb 2024" },
    year: 2023,
    place: { pt: "Salvador, BA", en: "Salvador, Brazil" },
    summary: {
      pt: "Rastreabilidade e monitoramento logístico para uma operação socioambiental de larga escala.",
      en: "Traceability and logistics monitoring for a large-scale environmental operation.",
    },
    bullets: [
      {
        pt: "Full stack com React, Node.js, TypeScript, Fastify, Prisma e PostgreSQL: API REST, autenticação com JWT, validação tipada com Zod e Docker no ambiente.",
        en: "Full stack with React, Node.js, TypeScript, Fastify, Prisma and PostgreSQL: REST API, JWT auth, typed validation with Zod, Docker in the environment.",
      },
      {
        pt: "O sistema acompanhou a operação de reciclagem do Carnaval de Salvador — dado chegando do campo, de vários pontos ao mesmo tempo, com gente esperando o número do outro lado.",
        en: "The system tracked the recycling operation of Salvador's Carnival — field data arriving from many points at once, with people waiting on the numbers at the other end.",
      },
      {
        pt: "A operação envolveu cerca de 140 toneladas de resíduo e milhares de catadores, e foi apresentada na Climate Week NYC.",
        en: "The operation handled around 140 tonnes of waste and thousands of waste pickers, and was presented at Climate Week NYC.",
      },
    ],
    tags: ["React", "Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zod", "Docker"],
  },
  {
    company: "Transpetro — Petrobras",
    title: { pt: "Planejamento e manutenção industrial", en: "Industrial planning & maintenance" },
    period: { pt: "2008 — 2016", en: "2008 — 2016" },
    year: 2008,
    place: { pt: "Madre de Deus e Camaçari, BA", en: "Madre de Deus & Camaçari, Brazil" },
    summary: {
      pt: "Oito anos em terminal de petróleo: da chave de grifo ao planejamento de parada de ativo crítico.",
      en: "Eight years at an oil terminal: from pipe wrench to planning shutdowns of critical assets.",
    },
    bullets: [
      {
        pt: "Manutenção mecânica em bombas centrífugas multiestágio, compressores alternativos, motores elétricos e diesel, e braços de carregamento marítimo.",
        en: "Mechanical maintenance on multistage centrifugal pumps, reciprocating compressors, electric and diesel engines, and marine loading arms.",
      },
      {
        pt: "Depois, planejamento e programação de manutenção via SAP/R3: janelas de parada definidas com anos de antecedência, análise de disponibilidade e estoque crítico.",
        en: "Later, maintenance planning and scheduling through SAP/R3: shutdown windows defined years ahead, availability analysis and critical spares.",
      },
      {
        pt: "É onde aprendi que rastreabilidade não é enfeite de auditoria: é o que separa \"sabemos o que aconteceu\" de \"achamos que foi isso\".",
        en: "This is where I learned that traceability isn't audit decoration: it's what separates \"we know what happened\" from \"we think that's what happened\".",
      },
    ],
    tags: ["SAP/R3", "Confiabilidade", "Gestão de ativos", "Manutenção preditiva"],
  },
];

export const experienceSection = {
  eyebrow: { pt: "Trajetória", en: "Path" },
  title: { pt: "Dezoito anos em coisas que não podem parar", en: "Eighteen years around things that can't stop" },
  lead: {
    pt: "Duas carreiras, uma régua só. A ordem aqui é do mais recente para o começo de tudo.",
    en: "Two careers, one standard. Listed from the most recent back to where it started.",
  },
  educationTitle: { pt: "Formação", en: "Education" },
} as const;

export const education: ReadonlyArray<{ school: string; course: L; period: string }> = [
  {
    school: "Universidade Salvador",
    course: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis & Development" },
    period: "2022 — 2025",
  },
  {
    school: "Cubos Academy",
    course: { pt: "Desenvolvimento de software", en: "Software development" },
    period: "2022 — 2023",
  },
  {
    school: "Centro de Formação Técnica da Bahia",
    course: { pt: "Técnico em mecânica", en: "Mechanical technician" },
    period: "2010 — 2011",
  },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  image?: string;
  blurb: L;
  /** O que o projeto ensinou ou resolveu — o que interessa a quem contrata. */
  note?: L;
  stack: ReadonlyArray<string>;
  live?: string;
  /** Ausente quando o repositorio e privado. */
  repo?: string;
};

export const featuredProjects: ReadonlyArray<Project> = [
  {
    slug: "meshvigil",
    name: "MeshVigil",
    year: "2025",
    image: "/work/meshvigil.jpg",
    blurb: {
      pt: "Simulador de rede mesh AMI com console de observabilidade: medidores roteando por coletores até o head-end, reconvergência da malha ao vivo, injeção de caos e painel de SLA. No coração, um codec DLMS/COSEM de verdade — HDLC, APDUs, códigos OBIS — que codifica cada leitura em bytes e decodifica de volta.",
      en: "An AMI mesh-network simulator with an observability console: meters routing through collectors up to a head-end, live mesh reconvergence, chaos injection and an SLA panel. At its core, a real DLMS/COSEM codec — HDLC, APDUs, OBIS codes — that encodes every reading to bytes and decodes it back.",
    },
    note: {
      pt: "A simulação inteira roda no navegador, de propósito: não tem backend para cair por timeout, roda de graça na Vercel, e a malha reconverge na sua frente quando você derruba um coletor. Foi como trouxe o que faço no setor elétrico para algo que dá para abrir e quebrar.",
      en: "The whole simulation runs in the browser, on purpose: no backend to time out, free to host on Vercel, and the mesh reconverges in front of you when you kill a collector. It's how I brought what I do in the power sector into something you can open and break.",
    },
    stack: ["Next.js", "TypeScript", "Zustand", "DLMS/COSEM", "OpenTelemetry", "Vitest"],
    live: "https://meshvigil.vercel.app/",
    repo: "https://github.com/igorjba/meshvigil",
  },
  {
    slug: "auscult",
    name: "Auscult",
    year: "2025",
    image: "/work/auscult.jpg",
    blurb: {
      pt: "Diagnóstico de vibração de máquinas rotativas no navegador: FFT com janelamento, envelope por Hilbert e as frequências de defeito de rolamento (BPFO, BPFI, BSF) calculadas a partir da geometria. Um motor de regras aponta a falha — pista externa, desalinhamento, folga — com a severidade classificada pela ISO 20816.",
      en: "In-browser vibration diagnostics for rotating machinery: windowed FFT, Hilbert envelope, and bearing defect frequencies (BPFO, BPFI, BSF) computed from geometry. A rule engine names the fault — outer race, misalignment, looseness — with severity graded by ISO 20816.",
    },
    note: {
      pt: "Passei anos na refinaria diagnosticando rolamento por vibração. O Auscult é esse conhecimento virado código: todo o processamento de sinal roda no navegador, e o detector é validado contra o dataset de rolamentos da Case Western — inclusive nos casos em que ele erra.",
      en: "I spent years in the refinery diagnosing bearings through vibration analysis. Auscult is that knowledge turned into code: all the signal processing runs in the browser, and the detector is validated against Case Western's bearing dataset — including the cases where it gets it wrong.",
    },
    stack: ["Next.js", "TypeScript", "DSP", "FFT", "ISO 20816", "Vitest"],
    live: "https://auscult-mu.vercel.app/",
    repo: "https://github.com/igorjba/auscult",
  },
  {
    slug: "critpath",
    name: "CritPath",
    year: "2025",
    image: "/work/critpath.jpg",
    blurb: {
      pt: "Otimizador de parada de manutenção modelado como RCPSP: milhares de ordens, precedências, equipes limitadas e janela fixa. O solver — serial SGS com simulated annealing — é compilado para WebAssembly e roda numa Web Worker, no cliente. Importa o export do SAP PM (IW39/IW49), calcula caminho crítico, risco de data por Monte Carlo, e mede o gap contra o dataset PSPLIB, que tem ótimo provado.",
      en: "A maintenance-shutdown optimizer modeled as RCPSP: thousands of orders, precedences, limited crews and a fixed window. The solver — serial SGS with simulated annealing — compiles to WebAssembly and runs in a Web Worker, on the client. It imports SAP PM exports (IW39/IW49), computes the critical path, date risk via Monte Carlo, and measures its gap against the PSPLIB dataset, which has proven optima.",
    },
    note: {
      pt: "Passei anos planejando parada de manutenção no SAP, decidindo com meses de antecedência quando cada equipamento parava. O CritPath é esse problema virado solver: lê o mesmo export do SAP que eu usava e otimiza o cronograma — com o gap medido contra ótimo provado, não declarado.",
      en: "I spent years planning maintenance shutdowns in SAP, deciding months ahead when each asset would stop. CritPath is that problem turned into a solver: it reads the same SAP export I used and optimizes the schedule — with the gap measured against proven optima, not claimed.",
    },
    stack: ["Next.js", "TypeScript", "WebAssembly", "RCPSP", "Monte Carlo", "Web Workers"],
    live: "https://critpath-two.vercel.app/",
    repo: "https://github.com/igorjba/critpath",
  },
  {
    slug: "moneyflix",
    name: "MoneyFlix",
    year: "2024",
    image: "/work/moneyflix.jpg",
    blurb: {
      pt: "Gestor financeiro pessoal completo: cadastro, transações, categorias e relatório. React na frente, Node e Express atrás, PostgreSQL embaixo.",
      en: "A complete personal finance manager: sign-up, transactions, categories and reports. React up front, Node and Express behind it, PostgreSQL underneath.",
    },
    note: {
      pt: "Foi aqui que parei de tratar autenticação como detalhe: token, expiração e rota protegida resolvidos no backend, não no if do componente.",
      en: "This is where I stopped treating auth as a detail: tokens, expiry and protected routes solved in the backend, not in a component's if statement.",
    },
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: "https://moneyflix-front.vercel.app/",
    repo: "https://github.com/igorjba/moneyflix-front",
  },
  {
    slug: "dindin",
    name: "Dindin",
    year: "2023",
    image: "/work/dindin.jpg",
    blurb: {
      pt: "Controle financeiro com resumo de entradas e saídas, filtro por categoria e ordenação por data. API REST própria com Express e Postgres.",
      en: "Finance tracker with an income/expense summary, category filters and date sorting. Its own REST API with Express and Postgres.",
    },
    note: {
      pt: "Feito antes do MoneyFlix e deixado de propósito no ar: dá para ver o que eu ainda não sabia — inclusive que responsivo não é etapa final.",
      en: "Built before MoneyFlix and deliberately left online: you can see what I didn't know yet — including that responsive isn't a final step.",
    },
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: "https://dindin-psi.vercel.app/",
    repo: "https://github.com/igorjba/dindin",
  },
];

export const archiveProjects: ReadonlyArray<Project> = [
  {
    slug: "cubos-flix",
    name: "Cubos Flix",
    year: "2023",
    blurb: {
      pt: "Catálogo de filmes e séries consumindo a API do TMDb com Axios.",
      en: "Movie and series catalog consuming the TMDb API with Axios.",
    },
    stack: ["JavaScript", "Axios", "TMDb API"],
    live: "https://igorjba.github.io/cubos-flix/",
    repo: "https://github.com/igorjba/cubos-flix",
  },
  {
    slug: "jogo-da-memoria",
    name: "Jogo da memória",
    year: "2023",
    blurb: {
      pt: "Jogo da memória responsivo, com contador de movimentos e reinício.",
      en: "Responsive memory game with a move counter and restart.",
    },
    stack: ["React", "CSS"],
    live: "https://jogo-da-memoria-chi.vercel.app",
    repo: "https://github.com/igorjba/jogo-da-memoria",
  },
  {
    slug: "moda-masculina",
    name: "Moda masculina",
    year: "2023",
    blurb: {
      pt: "Vitrine de produtos com modal de detalhe e galeria.",
      en: "Product showcase with a detail modal and gallery.",
    },
    stack: ["React", "CSS"],
    live: "https://moda-masculina.vercel.app/",
    repo: "https://github.com/igorjba/moda-masculina",
  },
];

export const work = {
  eyebrow: { pt: "Trabalho", en: "Work" },
  title: { pt: "O que dá para mostrar", en: "What I can show you" },
  disclaimer: {
    pt: "O que faço no Lactec não cabe aqui: é código de cliente, em sistema de energia, sob acordo. O que está abaixo é o laboratório — projetos pessoais onde testo ideia e ferramenta antes de levar para onde importa. São honestos sobre o que são.",
    en: "What I do at Lactec doesn't fit here: it's client code, in power systems, under agreement. What's below is the lab — personal projects where I test an idea or a tool before taking it somewhere that matters. They're honest about what they are.",
  },
  live: { pt: "Ver ao vivo", en: "Live" },
  code: { pt: "Código", en: "Code" },
  privateRepo: { pt: "Repositório privado", en: "Private repository" },
  archiveTitle: { pt: "Arquivo", en: "Archive" },
  archiveNote: {
    pt: "Estudos antigos, do começo da virada de carreira. Ficam no ar porque apagar o começo é uma forma chata de mentir.",
    en: "Older studies, from the start of the career switch. They stay online because deleting your beginnings is a boring way of lying.",
  },
} as const;

export const stack = {
  eyebrow: { pt: "Stack", en: "Stack" },
  title: { pt: "Ferramenta é meio, não identidade", en: "Tools are a means, not an identity" },
  lead: {
    pt: "Uso o que resolve o problema do time. Estas são as que uso hoje com profundidade suficiente para responder pelo que escrevo.",
    en: "I use whatever solves the team's problem. These are the ones I currently know well enough to answer for what I write.",
  },
  groups: [
    {
      title: { pt: "Frontend", en: "Front end" },
      items: ["TypeScript", "React", "Next.js", "Tailwind", "SSR"],
    },
    {
      title: { pt: "Backend", en: "Back end" },
      items: ["Node.js", "Fastify", "Express", "Python", "Django/DRF", "C#", ".NET"],
    },
    {
      title: { pt: "Dados", en: "Data" },
      items: ["PostgreSQL", "SQL Server", "Oracle", "Prisma"],
    },
    {
      title: { pt: "Infra e integração", en: "Infra & integration" },
      items: ["Docker", "Jenkins", "Keycloak", "JWT", "APIs REST", "Vercel"],
    },
    {
      title: { pt: "Domínio", en: "Domain" },
      items: ["Smart Grid", "AMI", "DLMS/COSEM", "RF Mesh", "Observabilidade", "Sistemas distribuídos"],
    },
  ],
} as const;

export const contact = {
  eyebrow: { pt: "Contato", en: "Contact" },
  title: { pt: "Vamos conversar", en: "Let's talk" },
  body: {
    pt: "O jeito mais rápido de me achar é o LinkedIn — é lá que eu respondo. Se for sobre vaga, manda o contexto do problema junto: o que quebra hoje, o que precisa existir e o que já tentaram. Isso economiza umas duas reuniões.",
    en: "The fastest way to reach me is LinkedIn — that's where I actually reply. If it's about a role, send the problem's context along: what breaks today, what needs to exist, and what's already been tried. That saves about two meetings.",
  },
  primary: { pt: "Chamar no LinkedIn", en: "Message me on LinkedIn" },
  availability: {
    pt: "Salvador, BA · remoto ou híbrido · disponível para conversas",
    en: "Salvador, Brazil · remote or hybrid · open to conversations",
  },
} as const;

export const footer = {
  built: {
    pt: "Feito por mim com Next.js e Tailwind. Sem template.",
    en: "Built by me with Next.js and Tailwind. No template.",
  },
  source: { pt: "Código deste site", en: "Source of this site" },
  top: { pt: "Topo", en: "Top" },
} as const;

export const ui = {
  langSwitch: { pt: "EN", en: "PT" },
  langSwitchLabel: { pt: "Read in English", en: "Ler em português" },
  skipToContent: { pt: "Pular para o conteúdo", en: "Skip to content" },
  menu: { pt: "Menu", en: "Menu" },
  close: { pt: "Fechar", en: "Close" },
  themeToggle: { pt: "Alternar tema claro e escuro", en: "Toggle light and dark theme" },
} as const;

export const meta = {
  title: {
    pt: "Igor Bahia — Engenheiro de software full stack",
    en: "Igor Bahia — Full stack software engineer",
  },
  description: {
    pt: "Engenheiro de software full stack em Salvador. Modernizo plataformas críticas do setor elétrico no Lactec com React, Next.js, .NET e Python. Oito anos em manutenção industrial antes do código.",
    en: "Full stack software engineer in Salvador, Brazil. I modernize critical power-sector platforms at Lactec with React, Next.js, .NET and Python. Eight years in industrial maintenance before code.",
  },
} as const;
