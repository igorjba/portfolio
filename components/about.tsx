import Image from "next/image";
import { about, profile, type Lang } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About({ lang }: { lang: Lang }) {
  return (
    <section id="sobre" className="border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={about.eyebrow[lang]} title={about.title[lang]} index="01" />

        <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
          <div className="order-2 space-y-6 md:order-1">
            {about.body.map((paragraph, index) => (
              <Reveal key={paragraph.en} delay={index * 0.06}>
                <p
                  className={
                    index === 0
                      ? "max-w-prose text-lg leading-relaxed text-bone/90"
                      : "max-w-prose leading-relaxed text-dust"
                  }
                >
                  {paragraph[lang]}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="order-1 md:order-2">
            <figure className="sticky top-28">
              <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-line bg-ink-2">
                <Image
                  src="/igor.jpg"
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 18rem, 60vw"
                  className="object-cover object-[50%_32%] transition-transform duration-700 hover:scale-[1.03]"
                  priority={false}
                />
                {/* So um pe de sombra para assentar a foto no fundo escuro; sem tingir a cor. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-ink/70 to-transparent"
                />
              </div>
              <figcaption className="label mt-3 block">{about.photoCaption[lang]}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
