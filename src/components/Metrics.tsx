"use client";

import { useLanguage } from "@/context/LanguageContext";

const metrics = [
  {
    value: "+85%",
    label: "Redução no tempo de resposta",
  },
  {
    value: "+40%",
    label: "Aumento em conversões",
  },
  {
    value: "-70%",
    label: "Custo operacional",
  },
  {
    value: "24/7",
    label: "Disponibilidade total",
  },
];

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black [text-wrap:balance]">
            {t("metrics.title")}
          </h2>
          <p className="text-base md:text-lg text-black/50 [text-wrap:balance]">
            {t("metrics.subtitle")}
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#EBE7E0] rounded-xl p-6 md:p-8 text-center h-full flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-black/50 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
