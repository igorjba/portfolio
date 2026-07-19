import { describe, expect, it } from "vitest";
import { metadataFor, pathFor, personJsonLd } from "@/lib/site";
import { profile } from "@/content/site";

describe("pathFor", () => {
  it("mapeia pt para a raiz e en para /en", () => {
    expect(pathFor("pt")).toBe("/");
    expect(pathFor("en")).toBe("/en");
  });
});

describe("metadataFor", () => {
  it("define o canonical do idioma e os alternates de idioma", () => {
    expect(metadataFor("pt").alternates?.canonical).toBe("/");
    expect(metadataFor("en").alternates?.canonical).toBe("/en");
    expect(metadataFor("pt").alternates?.languages).toMatchObject({
      "pt-BR": "/",
      en: "/en",
    });
  });

  it("declara o locale de Open Graph por idioma", () => {
    expect(metadataFor("pt").openGraph?.locale).toBe("pt_BR");
    expect(metadataFor("en").openGraph?.locale).toBe("en_US");
  });
});

describe("personJsonLd", () => {
  it("aponta para os perfis do autor", () => {
    const ld = personJsonLd("pt");
    expect(ld.sameAs).toContain(profile.linkedin);
    expect(ld.sameAs).toContain(profile.github);
  });
});
