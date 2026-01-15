"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  agentes: [
    { label: "Maria", href: "/maria" },
    { label: "Lara", href: "/lara" },
    { label: "Léo", href: "/leo" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "LGPD", href: "/lgpd" },
  ],
  contato: [
    { label: "WhatsApp", href: "https://wa.me/5511999999999" },
    { label: "contato@kodda.ai", href: "mailto:contato@kodda.ai" },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white" style={{ marginTop: "18px" }}>
      <div className="container-main py-16 md:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo e descrição */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Kodda.ai"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-600 max-w-xs mb-6">
              Agentes digitais que transformam sua operação de vendas, atendimento e produtividade.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/kodda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/kodda.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Agentes */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">{t("footer.agents")}</h4>
            <ul className="space-y-3">
              {footerLinks.agentes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-16 pt-8 border-t border-neutral-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>© 2025 Kodda Serviços de Inteligência Artificial LTDA.</p>
            <p>CNPJ: 63.644.444/0001-80</p>
            <p>Alameda Rio Negro, 503 - Alphaville, Barueri - SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
