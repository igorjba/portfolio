import type { Lang } from "@/content/site";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Stack } from "@/components/stack";
import { Work } from "@/components/work";

export function Portfolio({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main id="conteudo">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Work lang={lang} />
        <Stack lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
