import Image from "next/image";
import { archiveProjects, featuredProjects, work, type Lang, type Project } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
      <path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeaturedCard({ project, lang, index }: { project: Project; lang: Lang; index: number }) {
  return (
    <Reveal as="li" delay={index * 0.06}>
      <article className="group grid gap-6 overflow-hidden rounded-xl border border-line/60 bg-ink-2/40 p-4 transition-colors duration-500 hover:border-line md:grid-cols-2 md:gap-8 md:p-5">
        <a
          href={project.live ?? project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-16/10 overflow-hidden rounded-lg border border-line/60 bg-ink"
          tabIndex={-1}
          aria-hidden="true"
        >
          {project.image ? (
            /* Screenshots vem em claro e escuro; o filtro nivela as duas ate o hover devolver a cor. */
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 768px) 32rem, 92vw"
              className="object-cover object-top brightness-[0.68] grayscale-[0.6] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:grayscale-0"
            />
          ) : null}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-700 group-hover:opacity-40"
          />
        </a>

        <div className="flex flex-col md:py-2">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl text-bone">{project.name}</h3>
            <span className="label">{project.year}</span>
          </div>

          <p className="mt-3 leading-relaxed text-dust">{project.blurb[lang]}</p>

          {project.note ? (
            <p className="mt-4 border-l-2 border-signal/40 pl-4 text-sm leading-relaxed text-bone/75 italic">
              {project.note[lang]}
            </p>
          ) : null}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors duration-300 hover:text-signal"
              >
                {work.live[lang]}
                <ArrowUpRight />
                <span className="sr-only">— {project.name}</span>
              </a>
            ) : null}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm text-dust transition-colors duration-300 hover:text-bone"
            >
              {work.code[lang]}
              <ArrowUpRight />
              <span className="sr-only">— {project.name}</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work({ lang }: { lang: Lang }) {
  return (
    <section id="trabalho" className="border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={work.eyebrow[lang]} title={work.title[lang]} index="03" />

        <Reveal className="mt-8">
          <p className="max-w-2xl border-l-2 border-line pl-5 leading-relaxed text-dust">
            {work.disclaimer[lang]}
          </p>
        </Reveal>

        <ul className="mt-14 space-y-5">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.slug} project={project} lang={lang} index={index} />
          ))}
        </ul>

        <Reveal className="mt-20">
          <div className="flex items-baseline gap-4">
            <h3 className="label !text-dust-2">{work.archiveTitle[lang]}</h3>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-dust-2">{work.archiveNote[lang]}</p>
        </Reveal>

        <ul className="mt-6 divide-y divide-line/60 border-y border-line/60">
          {archiveProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 0.04}>
              <a
                href={project.live ?? project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 transition-colors duration-300 hover:bg-ink-2/40"
              >
                <span className="label w-10 shrink-0">{project.year}</span>
                <span className="font-medium text-bone transition-colors duration-300 group-hover/link:text-signal">
                  {project.name}
                </span>
                <span className="hidden flex-1 text-sm text-dust-2 sm:block">{project.blurb[lang]}</span>
                <span className="font-mono text-[11px] text-dust-2">{project.stack.join(" · ")}</span>
                <span className="text-dust-2 transition-colors duration-300 group-hover/link:text-signal">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
