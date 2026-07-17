import { stack, type Lang } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Stack({ lang }: { lang: Lang }) {
  return (
    <section id="stack" className="border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={stack.eyebrow[lang]}
          title={stack.title[lang]}
          lead={stack.lead[lang]}
          index="04"
        />

        <dl className="mt-14 divide-y divide-line/60 border-y border-line/60">
          {stack.groups.map((group, index) => (
            <Reveal
              key={group.title.en}
              delay={index * 0.05}
              className="grid gap-3 py-6 md:grid-cols-[10rem_1fr] md:gap-8"
            >
              <dt className="label pt-1">{group.title[lang]}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line/70 bg-ink-2 px-3 py-1.5 font-mono text-xs text-dust transition-colors duration-300 hover:border-signal/50 hover:text-bone"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
