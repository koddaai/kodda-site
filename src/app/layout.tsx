import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodda.ai | Agentes de IA que trabalham por você 24/7",
  description: "Agentes digitais, resultados reais. Para empresas que querem escalar sem aumentar custos.",
  keywords: ["IA", "agentes", "automação", "vendas", "atendimento", "transcrição", "SDR"],
  openGraph: {
    title: "Agentes digitais, resultados reais.",
    description: "Para empresas que querem escalar sem aumentar custos.",
    url: "https://kodda.ai",
    siteName: "Kodda.ai",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodda.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes digitais, resultados reais.",
    description: "Para empresas que querem escalar sem aumentar custos.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
