"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-[1400px] mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kodda.ai"
              width={110}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/maria"
              className="text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Maria
            </Link>
            <Link
              href="/lara"
              className="text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Lara
            </Link>
            <Link
              href="/leo"
              className="text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Léo
            </Link>
            <Link
              href="#sobre"
              className="text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Sobre
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#demo"
              className="bg-[#4d65ff] hover:bg-[#3d51cc] text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-105"
            >
              Agendar demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
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
          <div className="md:hidden pb-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4">
              <Link href="/maria" className="text-zinc-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Maria
              </Link>
              <Link href="/lara" className="text-zinc-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Lara
              </Link>
              <Link href="/leo" className="text-zinc-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Léo
              </Link>
              <Link href="#sobre" className="text-zinc-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <Link
                href="#demo"
                className="bg-[#4d65ff] text-white px-6 py-3 rounded-full text-center font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
