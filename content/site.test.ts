import { describe, expect, it } from "vitest";
import { isLang, LANGS } from "@/content/site";

describe("isLang", () => {
  it("aceita os idiomas suportados", () => {
    for (const lang of LANGS) expect(isLang(lang)).toBe(true);
  });

  it("rejeita qualquer outro valor", () => {
    expect(isLang("fr")).toBe(false);
    expect(isLang("PT")).toBe(false);
    expect(isLang("")).toBe(false);
  });
});
