"use client";

import { useLanguage } from "@/context/LanguageContext";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "Opera em Escala",
    descKey: "Atenda milhares de conversas simultaneamente sem perder qualidade.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titleKey: "Todo Canal",
    descKey: "WhatsApp, e-mail, chat, telefone - seus agentes estão em todos os lugares.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleKey: "Aprende Sempre",
    descKey: "Melhora a cada interação, adaptando-se ao seu tom de voz e regras.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    titleKey: "Integração Profunda",
    descKey: "Conecta com Salesforce, HubSpot, Pipedrive e +20 ferramentas.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titleKey: "Enterprise Ready",
    descKey: "SOC 2 Type II, LGPD, criptografia de ponta a ponta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "24/7 Sempre On",
    descKey: "Nunca para. Fins de semana, feriados, madrugada - sempre disponível.",
  },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[#EBE7E0]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black [text-wrap:balance]">
            {t("features.title")}
          </h2>
          <p className="text-base md:text-lg text-black/50 [text-wrap:balance]">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card flex flex-col p-5 md:p-6 h-full"
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-4 text-black flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-black">{feature.titleKey}</h3>
              <p className="text-sm text-black/60 leading-relaxed flex-grow">{feature.descKey}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
