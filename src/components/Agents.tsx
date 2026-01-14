"use client";

import AgentCard from "./AgentCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Agents() {
  const { t } = useLanguage();

  const agents = [
    {
      name: "Maria",
      role: t("agent.maria.role"),
      description: t("agent.maria.description"),
      href: "/maria",
      videoUrl: "/images/Maria.mp4",
    },
    {
      name: "Lara",
      role: t("agent.lara.role"),
      description: t("agent.lara.description"),
      href: "/lara",
      videoUrl: "/images/Lara.mp4",
    },
    {
      name: "Léo",
      role: t("agent.leo.role"),
      description: t("agent.leo.description"),
      href: "/leo",
      videoUrl: "/images/Léo.mp4",
    },
  ];

  return (
    <section id="agents" className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black [text-wrap:balance]">
            {t("agents.title")}
          </h2>
          <p className="text-base md:text-lg text-black/50 [text-wrap:balance]">
            {t("agents.subtitle")}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.name}
              {...agent}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
