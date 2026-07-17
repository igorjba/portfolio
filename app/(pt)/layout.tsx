import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootHtml } from "@/components/root-html";
import { metadataFor } from "@/lib/site";

export const metadata: Metadata = metadataFor("pt");

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function PtLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="pt">{children}</RootHtml>;
}
