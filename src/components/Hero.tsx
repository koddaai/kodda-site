"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden pt-16 md:pt-20 bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container-main py-16 md:py-24 relative z-10">
        <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-black [text-wrap:balance]">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>

          {/* Subheadline */}
          <div className="text-base md:text-lg text-black/60 mx-auto md:mx-0">
            <p className="mb-1">{t("hero.subtitle1")}</p>
            <p className="whitespace-nowrap">{t("hero.subtitle2")}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start" style={{ marginTop: '1.5rem' }}>
            <Link href="#agents" className="btn-primary">
              {t("hero.cta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
