import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  index: string;
  lead?: string;
};

export function SectionHeading({ eyebrow, title, index, lead }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="label !text-signal-dim">{index}</span>
        <span className="label">{eyebrow}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <h2 className="mt-5 max-w-3xl text-[length:var(--text-title)] leading-[1.05]">{title}</h2>
      {lead ? <p className="mt-5 max-w-2xl leading-relaxed text-dust">{lead}</p> : null}
    </Reveal>
  );
}
