"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const languages = [
  { code: "pt" as const, label: "PT" },
  { code: "en" as const, label: "EN" },
  { code: "es" as const, label: "ES" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Kodda.ai"
              width={120}
              height={30}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="/maria" className="nav-link">
              Maria
            </Link>
            <Link href="/lara" className="nav-link">
              Lara
            </Link>
            <Link href="/leo" className="nav-link">
              Léo
            </Link>
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-black/60 hover:text-black transition-colors px-3 py-2 rounded-full hover:bg-black/5"
              >
                {language.toUpperCase()}
                <svg
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    isLangOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-lg py-2 min-w-[80px] z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm transition-colors",
                          language === lang.code
                            ? "text-black font-semibold bg-black/5"
                            : "text-black/60 hover:text-black hover:bg-black/5"
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link href="#agents" className="btn-primary">
              {t("nav.agents")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 -mr-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-black/5 pt-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/maria"
                className="text-black/70 hover:text-black text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Maria
              </Link>
              <Link
                href="/lara"
                className="text-black/70 hover:text-black text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lara
              </Link>
              <Link
                href="/leo"
                className="text-black/70 hover:text-black text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Léo
              </Link>

              {/* Language selector mobile */}
              <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                <span className="text-xs text-black/40 font-medium">
                  Idioma:
                </span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "text-sm px-3 py-1.5 rounded-full transition-colors font-medium",
                      language === lang.code
                        ? "bg-black text-white"
                        : "text-black/60 hover:text-black hover:bg-black/5"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <Link
                href="#agents"
                className="btn-primary mt-4 text-center"
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
