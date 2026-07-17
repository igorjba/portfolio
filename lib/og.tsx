import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, profile, type Lang } from "@/content/site";
import { buildTracePath } from "@/lib/trace";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#0a0b0d";
const BONE = "#f0eeea";
const DUST = "#8e939c";
const SIGNAL = "#f5a524";

const font = (name: string) => readFile(join(process.cwd(), "assets", "fonts", name));

export async function renderOg(lang: Lang) {
  const [fraunces, geist, geistMedium] = await Promise.all([
    font("Fraunces-SemiBold.ttf"),
    font("Geist-Regular.ttf"),
    font("Geist-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: "64px 72px",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -240,
            left: 240,
            width: 720,
            height: 520,
            background: `radial-gradient(circle, ${SIGNAL}22 0%, transparent 70%)`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: SIGNAL }} />
            <div style={{ fontSize: 22, color: BONE, fontFamily: "Geist", fontWeight: 500 }}>
              {profile.name.toLowerCase()}
            </div>
          </div>
          <div style={{ fontSize: 19, color: DUST, letterSpacing: 2, textTransform: "uppercase" }}>
            {profile.role[lang]}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Fraunces",
              fontSize: 82,
              lineHeight: 1.04,
              color: BONE,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {hero.headlineLead[lang]}&nbsp;<span style={{ color: SIGNAL }}>{hero.headlineEmphasis[lang]}</span>
          </div>

          <svg width="1056" height="52" viewBox="0 0 1056 52" style={{ marginTop: 34 }}>
            <path d={buildTracePath({ width: 1056, height: 52, precision: 1 })} fill="none" stroke={SIGNAL} strokeWidth="2" opacity="0.85" />
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 21, color: DUST, maxWidth: 720 }}>
            {lang === "pt"
              ? "React · Next.js · Node · Python · .NET — Salvador, Brasil"
              : "React · Next.js · Node · Python · .NET — Salvador, Brazil"}
          </div>
          <div style={{ fontSize: 20, color: BONE, fontWeight: 500 }}>
            {lang === "pt" ? "portfolio-igorjba.vercel.app" : "portfolio-igorjba.vercel.app/en"}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
      ],
    },
  );
}
