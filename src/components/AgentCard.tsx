"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  href: string;
  videoUrl: string;
  reversed?: boolean;
}

export default function AgentCard({
  name,
  role,
  description,
  href,
  videoUrl,
  reversed = false,
}: AgentCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center`}
      style={{ paddingBottom: "60px" }}
    >
      {/* Content */}
      <div className={`text-center lg:text-left ${reversed ? "lg:order-2" : "lg:order-1"}`} style={{ order: -1 }}>
        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">{name}</h2>

        {/* Role */}
        <p className="text-sm text-black/50 mb-3">
          {role}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-black/70 leading-relaxed mb-5 text-pretty">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className="link-arrow inline-flex justify-center lg:justify-start"
        >
          {t("agents.hire")} {name}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Video */}
      <div className={`${reversed ? "lg:order-1" : "lg:order-2"} mb-6 lg:mb-0`} style={{ order: 1 }}>
        <div className="relative">
          {/* Elemento decorativo de fundo */}
          <div
            className={`absolute w-full h-full bg-neutral-100 rounded-2xl ${
              reversed ? "-bottom-4 -left-4" : "-bottom-4 -right-4"
            }`}
          />

          {/* Video principal */}
          <div className="relative z-10 video-container aspect-[4/3] rounded-xl border border-black/5 overflow-hidden bg-[#EBE7E0]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
