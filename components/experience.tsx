import { education, experience, experienceSection, type Lang } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { TimelineRail } from "@/components/timeline-rail";

export function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="trajetoria" className="border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={experienceSection.eyebrow[lang]}
          title={experienceSection.title[lang]}
          lead={experienceSection.lead[lang]}
          index="02"
        />

        <ol className="relative mt-16 space-y-14">
          <TimelineRail className="absolute inset-y-0 left-[7px] w-px bg-line md:left-[calc(9rem+7px)]" />

          {experience.map((role, index) => (
            <li key={role.company} className="relative pl-8 md:pl-[calc(9rem+2rem)]">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 left-0 size-[15px] rounded-full border-2 md:left-36 ${
                  role.current ? "border-signal bg-signal" : "border-line bg-ink"
                }`}
              >
                {role.current ? (
                  <span className="absolute inset-0 rounded-full bg-signal [animation:signal-pulse_2.4s_ease-in-out_infinite]" />
                ) : null}
              </span>

              <Reveal delay={index * 0.05}>
                {/* Alinhada a direita numa coluna fixa, com respiro ate o trilho; quebra em 2 linhas se longa. */}
                <p className="label absolute top-1 left-0 hidden w-32 pr-5 text-right leading-snug md:block">
                  {role.period[lang]}
                </p>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl leading-tight text-bone">{role.company}</h3>
                  {role.current ? (
                    <span className="rounded-full border border-signal/40 px-2 py-0.5 font-mono text-[10px] tracking-widest text-signal uppercase">
                      {lang === "pt" ? "em curso" : "current"}
                    </span>
                  ) : null}
                </div>

                <p className="mt-1 text-sm text-dust">
                  {role.title[lang]} · {role.place[lang]}
                </p>
                <p className="label mt-2 block md:hidden">{role.period[lang]}</p>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bone/90 italic">{role.summary[lang]}</p>

                <ul className="mt-5 max-w-2xl space-y-3">
                  {role.bullets.map((bullet) => (
                    <li key={bullet.en} className="flex gap-3 text-sm leading-relaxed text-dust">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-signal-dim" />
                      <span>{bullet[lang]}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {role.tags.map((tag) => (
                    <Tag key={tag} className="bg-ink-2">
                      {tag}
                    </Tag>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-20 block">
          <h3 className="label !text-dust-2">{experienceSection.educationTitle[lang]}</h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line/60 bg-line/60 sm:grid-cols-3">
            {education.map((item) => (
              <li key={item.school} className="bg-ink p-5">
                <p className="font-mono text-xs text-signal-dim">{item.period}</p>
                <p className="mt-2 leading-snug text-bone">{item.course[lang]}</p>
                <p className="mt-1 text-sm text-dust-2">{item.school}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
