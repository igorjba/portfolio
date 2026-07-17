import { buildTracePath } from "@/lib/trace";

const WIDTH = 1200;
const HEIGHT = 64;

const TRACE = buildTracePath({ width: WIDTH, height: HEIGHT });

export function SignalTrace({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={TRACE} fill="none" stroke="var(--color-line)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      <path
        d={TRACE}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="1.75"
        vectorEffect="non-scaling-stroke"
        className="[animation:trace-scan_7s_linear_infinite] [stroke-dasharray:90_4000]"
        style={{ filter: "drop-shadow(0 0 4px color-mix(in oklch, var(--color-signal) 55%, transparent))" }}
      />
      <style>{`@keyframes trace-scan { from { stroke-dashoffset: 4090 } to { stroke-dashoffset: 0 } }`}</style>
    </svg>
  );
}
