import { contact, profile, type Lang } from "@/content/site";
import { PulseDot } from "@/components/pulse-dot";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SignalTrace } from "@/components/signal-trace";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-line/60 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] opacity-60 [background:radial-gradient(50%_60%_at_50%_100%,color-mix(in_oklch,var(--color-signal)_10%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={contact.eyebrow[lang]} title={contact.title[lang]} index="05" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-dust">{contact.body[lang]}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-signal px-6 py-3 font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
                {contact.primary[lang]}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="flex items-center gap-2 font-mono text-xs text-dust-2">
              <PulseDot />
              <span>{contact.availability[lang]}</span>
              <span aria-hidden="true">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${contact.availabilityCta[lang]} — LinkedIn`}
                className="[animation:status-pulse_4.5s_ease-in-out_infinite] hover:text-signal hover:[animation:none]"
              >
                {contact.availabilityCta[lang]}
              </a>
            </p>
          </Reveal>
        </div>

        <SignalTrace className="mt-20 h-10 w-full opacity-40" />
      </div>
    </section>
  );
}
