"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kodda.ai"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#maria"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Maria
            </Link>
            <Link
              href="#lara"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Lara
            </Link>
            <Link
              href="#leo"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Léo
            </Link>
            <Link
              href="#beneficios"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Benefícios
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contato"
              className="bg-[#4d65ff] hover:bg-[#3d51cc] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            >
              Começar agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#maria"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Maria
              </Link>
              <Link
                href="#lara"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Lara
              </Link>
              <Link
                href="#leo"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Léo
              </Link>
              <Link
                href="#beneficios"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
              <Link
                href="#contato"
                className="bg-[#4d65ff] hover:bg-[#3d51cc] text-white px-6 py-2.5 rounded-full text-sm font-medium text-center transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
