import type { CSSProperties } from "react";
import { hero, profile, telemetry, type Lang } from "@/content/site";
import { PulseDot } from "@/components/pulse-dot";
import { SignalTrace } from "@/components/signal-trace";

const rise = (delay: number) => ({ "--rise-delay": `${delay}ms` }) as CSSProperties;

export function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Halo frio no topo: separa o hero do resto sem usar borda. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-1/3 h-[70vh] opacity-70 [background:radial-gradient(60%_50%_at_50%_50%,color-mix(in_oklch,var(--color-signal)_9%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="rise flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="label !text-dust">
            {profile.name} — {profile.role[lang]}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${hero.status[lang]} — LinkedIn`}
            className="flex items-center gap-2 font-mono text-xs text-dust [animation:status-pulse_4.5s_ease-in-out_infinite] hover:text-signal hover:[animation:none]"
          >
            <PulseDot />
            {hero.status[lang]}
          </a>
        </div>

        <h1 className="rise mt-8 text-[length:var(--text-display)] leading-[0.92] font-normal" style={rise(80)}>
          {hero.headlineLead[lang]}{" "}
          <span className="relative inline-block text-signal italic">
            {hero.headlineEmphasis[lang]}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-px w-full origin-left bg-signal/50 [animation:underline-in_1.1s_var(--ease-out-quint)_0.7s_backwards]"
            />
          </span>
        </h1>

        <div className="rise mt-10" style={rise(160)} aria-hidden="true">
          <SignalTrace className="h-12 w-full opacity-60" />
        </div>

        <div className="rise mt-10 grid gap-6 md:grid-cols-2 md:gap-12" style={rise(240)}>
          <p className="max-w-prose text-lg leading-relaxed text-balance text-bone/90">{hero.intro[lang]}</p>
          <p className="max-w-prose leading-relaxed text-dust">{hero.now[lang]}</p>
        </div>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={rise(320)}>
          <a
            href="#trabalho"
            className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-signal"
          >
            {hero.ctaWork[lang]}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              <path
                d="M7 2 V11 M3 7.5 L7 11.5 L11 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-bone transition-colors duration-300 hover:border-signal hover:text-signal"
          >
            {hero.ctaTalk[lang]}
          </a>
        </div>

        <dl
          className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line/60 bg-line/60 sm:grid-cols-4"
          style={rise(400)}
        >
          {telemetry.map((item) => (
            <div key={item.label.en} className="bg-ink px-4 py-4">
              <dt className="font-mono text-sm text-signal">{item.value[lang]}</dt>
              <dd className="mt-1 text-xs leading-snug text-dust-2">{item.label[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
