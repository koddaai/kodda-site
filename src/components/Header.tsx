"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "pt" as const, label: "PT" },
  { code: "en" as const, label: "EN" },
  { code: "es" as const, label: "ES" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="container-main">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Kodda.ai"
              width={100}
              height={25}
              className="h-6 md:h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/maria"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Maria
            </Link>
            <Link
              href="/lara"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Lara
            </Link>
            <Link
              href="/leo"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Léo
            </Link>
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm text-black/60 hover:text-black transition-colors px-2 py-1"
              >
                {language.toUpperCase()}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <>
                  {/* Backdrop to close dropdown */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-1 bg-white border border-black/10 rounded-lg shadow-lg py-1 min-w-[60px] z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-1.5 text-sm transition-colors ${
                          language === lang.code
                            ? "text-black font-medium bg-black/5"
                            : "text-black/60 hover:text-black hover:bg-black/5"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="#agents"
              className="btn-primary"
            >
              {t("nav.agents")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-black/5 pt-6">
            <div className="flex flex-col gap-4">
              <Link href="/maria" className="text-black/70 hover:text-black text-sm" onClick={() => setIsMenuOpen(false)}>
                Maria
              </Link>
              <Link href="/lara" className="text-black/70 hover:text-black text-sm" onClick={() => setIsMenuOpen(false)}>
                Lara
              </Link>
              <Link href="/leo" className="text-black/70 hover:text-black text-sm" onClick={() => setIsMenuOpen(false)}>
                Léo
              </Link>

              {/* Language selector mobile */}
              <div className="flex items-center gap-2 pt-2 border-t border-black/5">
                <span className="text-xs text-black/40">Idioma:</span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      language === lang.code
                        ? "bg-black text-white"
                        : "text-black/60 hover:text-black"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <Link
                href="#agents"
                className="bg-black text-white px-5 py-2.5 rounded-full text-center text-sm font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.agents")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
