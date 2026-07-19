import { describe, expect, it } from "vitest";
import { buildTracePath } from "@/lib/trace";

describe("buildTracePath", () => {
  it("é determinístico — servidor e cliente geram o mesmo path (sem hydration mismatch)", () => {
    const a = buildTracePath({ width: 1200, height: 64 });
    const b = buildTracePath({ width: 1200, height: 64 });
    expect(a).toBe(b);
  });

  it("começa em M e produz um path não vazio", () => {
    const d = buildTracePath({ width: 100, height: 20 });
    expect(d.startsWith("M")).toBe(true);
    expect(d.length).toBeGreaterThan(1);
  });

  it("respeita a precisão decimal pedida", () => {
    const d = buildTracePath({ width: 60, height: 20, precision: 1 });
    for (const n of d.match(/\d+\.\d+/g) ?? []) {
      expect(n.split(".")[1]?.length ?? 0).toBeLessThanOrEqual(1);
    }
  });

  it("mantém os pontos dentro dos limites verticais", () => {
    const height = 40;
    const d = buildTracePath({ width: 200, height });
    for (const y of d.matchAll(/,(\d+(?:\.\d+)?)/g)) {
      const value = Number(y[1]);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(height);
    }
  });
});
