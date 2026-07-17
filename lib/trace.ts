/**
 * Gerador do "trace de telemetria" usado no site e na imagem de OG.
 * Fica num modulo unico para que as duas superficies desenhem a mesma peca —
 * mesmo PRNG, mesmo formato — em vez de duas copias que podem divergir.
 */

/** Data que virou a semente do trace: 20/08/2022, a virada para software. */
export const TRACE_SEED = 20082022;

/** PRNG com semente: deterministico, entao server e cliente geram o mesmo path. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type TraceOptions = {
  width: number;
  height: number;
  seed?: number;
  step?: number;
  /** Amplitude do ruido de base. */
  noise?: number;
  /** Probabilidade de um pico a cada ponto. */
  spikeChance?: number;
  /** Altura dos picos, como fracao da altura total. */
  spikeScale?: number;
  precision?: number;
};

/** Linha de monitor: ruido baixo constante, com picos esparsos como num trace real. */
export function buildTracePath({
  width,
  height,
  seed = TRACE_SEED,
  step = 12,
  noise = 6,
  spikeChance = 0.94,
  spikeScale = 0.85,
  precision = 2,
}: TraceOptions): string {
  const random = mulberry32(seed);
  const mid = height / 2;
  const points: string[] = [];

  for (let x = 0; x <= width; x += step) {
    const wobble = (random() - 0.5) * noise;
    const spike = random() > spikeChance ? (random() - 0.5) * height * spikeScale : 0;
    const y = Math.min(height - 2, Math.max(2, mid + wobble + spike));
    points.push(`${x},${y.toFixed(precision)}`);
  }

  return `M${points.join(" L")}`;
}
