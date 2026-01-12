import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  description: "Transforme suas operações com agentes de IA autônomos. Maria para atendimento, Lara para vendas e Léo para transcrição.",
  keywords: ["IA", "agentes", "automação", "vendas", "atendimento", "transcrição", "SDR"],
  openGraph: {
    title: "Kodda.ai | Agentes de IA que trabalham por você 24/7",
    description: "Transforme suas operações com agentes de IA autônomos.",
    url: "https://kodda.ai",
    siteName: "Kodda.ai",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
