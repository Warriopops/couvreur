import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "couvreur Coutras",
    "pose de toiture Coutras",
    "entretien toiture Coutras",
    "nettoyage toiture Coutras",
    "taille de haies Coutras",
    "terrassement Coutras",
    "couvreur Libourne",
    "couvreur-bdx",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={localBusinessJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
