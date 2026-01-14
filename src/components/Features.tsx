"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Globe,
  MessageSquare,
  Lightbulb,
  Database,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    titleKey: "Opera em Escala",
    descKey: "Atenda milhares de conversas simultaneamente sem perder qualidade.",
  },
  {
    icon: MessageSquare,
    titleKey: "Todo Canal",
    descKey: "WhatsApp, e-mail, chat, telefone - seus agentes estão em todos os lugares.",
  },
  {
    icon: Lightbulb,
    titleKey: "Aprende Sempre",
    descKey: "Melhora a cada interação, adaptando-se ao seu tom de voz e regras.",
  },
  {
    icon: Database,
    titleKey: "Integração Profunda",
    descKey: "Conecta com Salesforce, HubSpot, Pipedrive e +20 ferramentas.",
  },
  {
    icon: Shield,
    titleKey: "Enterprise Ready",
    descKey: "SOC 2 Type II, LGPD, criptografia de ponta a ponta.",
  },
  {
    icon: Clock,
    titleKey: "24/7 Sempre On",
    descKey: "Nunca para. Fins de semana, feriados, madrugada - sempre disponível.",
  },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper bg-[#F5F0EB]">
      <div className="container-main">
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center mb-16">
          <motion.span
            className="label-tag mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Por que Kodda
          </motion.span>
          <motion.h2
            className="heading-section text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("features.title")}
          </motion.h2>
          <motion.p
            className="body-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("features.subtitle")}
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="feature-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon Container */}
                <div className="icon-container mb-6">
                  <Icon className="w-6 h-6 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="heading-card text-black mb-3">
                  {feature.titleKey}
                </h3>
                <p className="body-default">
                  {feature.descKey}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
