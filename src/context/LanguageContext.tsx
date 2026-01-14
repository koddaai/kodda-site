"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en" | "es";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

export const translations: Translations = {
  // Header
  "nav.agents": {
    pt: "Conheça os agentes",
    en: "Meet the agents",
    es: "Conoce los agentes",
  },
  // Hero
  "hero.title1": {
    pt: "Agentes digitais,",
    en: "Digital agents,",
    es: "Agentes digitales,",
  },
  "hero.title2": {
    pt: "resultados reais.",
    en: "real results.",
    es: "resultados reales.",
  },
  "hero.subtitle1": {
    pt: "Escale sua empresa sem escalar seus custos.",
    en: "Scale your business without scaling your costs.",
    es: "Escala tu empresa sin escalar tus costos.",
  },
  "hero.subtitle2": {
    pt: "Vendas, Atendimento e Operações funcionando 24/7 com agentes inteligentes.",
    en: "Sales, Support, and Operations running 24/7 with intelligent agents.",
    es: "Ventas, Atención y Operaciones funcionando 24/7 con agentes inteligentes.",
  },
  "hero.cta": {
    pt: "Conheça os agentes",
    en: "Meet the agents",
    es: "Conoce los agentes",
  },
  // Agents section
  "agents.title": {
    pt: "Conheça nossos agentes digitais",
    en: "Meet our digital agents",
    es: "Conoce nuestros agentes digitales",
  },
  "agents.subtitle": {
    pt: "Cada agente é especialista em uma função crítica do seu negócio e trabalha 24/7 para gerar eficiência, receita e escala.",
    en: "Each agent specializes in a critical business function and works 24/7 to drive efficiency, revenue, and scale.",
    es: "Cada agente es especialista en una función crítica de tu negocio y trabaja 24/7 para generar eficiencia, ingresos y escala.",
  },
  "agents.hire": {
    pt: "Contratar",
    en: "Hire",
    es: "Contratar",
  },
  // Agent roles
  "agent.maria.role": {
    pt: "Agente de Atendimento",
    en: "Customer Support Agent",
    es: "Agente de Atención",
  },
  "agent.maria.description": {
    pt: "Atenda 100% dos seus clientes em até 30 segundos, 24/7. Maria resolve até 85% das solicitações automaticamente e aciona seu time apenas quando realmente necessário.",
    en: "Respond to 100% of your customers within 30 seconds, 24/7. Maria resolves up to 85% of requests automatically and only escalates when truly necessary.",
    es: "Atiende al 100% de tus clientes en hasta 30 segundos, 24/7. Maria resuelve hasta el 85% de las solicitudes automáticamente y escala solo cuando es realmente necesario.",
  },
  "agent.lara.role": {
    pt: "Agente SDR",
    en: "SDR Agent",
    es: "Agente SDR",
  },
  "agent.lara.description": {
    pt: "Gere um pipeline até 3x maior sem aumentar headcount. Lara prospecta, engaja e qualifica leads 24/7 com a precisão de um SDR sênior.",
    en: "Generate up to 3x more pipeline without increasing headcount. Lara prospects, engages, and qualifies leads 24/7 with senior SDR precision.",
    es: "Genera un pipeline hasta 3x mayor sin aumentar personal. Lara prospecta, involucra y califica leads 24/7 con la precisión de un SDR senior.",
  },
  "agent.leo.role": {
    pt: "Agente de Transcrição de WhatsApp",
    en: "WhatsApp Transcription Agent",
    es: "Agente de Transcripción de WhatsApp",
  },
  "agent.leo.description": {
    pt: "Pare de ouvir áudios longos e desnecessários. Léo transcreve áudios do WhatsApp em qualquer idioma, em segundos.",
    en: "Stop listening to long, unnecessary voice messages. Léo transcribes WhatsApp audios in any language, in seconds.",
    es: "Deja de escuchar audios largos e innecesarios. Léo transcribe audios de WhatsApp en cualquier idioma, en segundos.",
  },
  // Features
  "features.title": {
    pt: "Agentes digitais que transformam sua operação",
    en: "Digital agents that transform your operation",
    es: "Agentes digitales que transforman tu operación",
  },
  "features.subtitle": {
    pt: "Inteligência artificial aplicada a problemas reais de vendas, atendimento e produtividade.",
    en: "Artificial intelligence applied to real sales, support, and productivity challenges.",
    es: "Inteligencia artificial aplicada a problemas reales de ventas, atención y productividad.",
  },
  // Metrics
  "metrics.title": {
    pt: "Resultados que importam",
    en: "Results that matter",
    es: "Resultados que importan",
  },
  "metrics.subtitle": {
    pt: "Métricas reais de empresas que escalam com os agentes da Kodda.",
    en: "Real metrics from companies scaling with Kodda agents.",
    es: "Métricas reales de empresas que escalan con los agentes de Kodda.",
  },
  // CTA
  "cta.label": {
    pt: "Vamos conversar",
    en: "Let's talk",
    es: "Hablemos",
  },
  "cta.title": {
    pt: "Pronto para escalar sua operação com agentes digitais?",
    en: "Ready to scale your operation with digital agents?",
    es: "¿Listo para escalar tu operación con agentes digitales?",
  },
  "cta.subtitle": {
    pt: "Descubra como Maria, Lara e Léo podem gerar resultados reais no seu negócio.",
    en: "Discover how Maria, Lara, and Léo can drive real results for your business.",
    es: "Descubre cómo Maria, Lara y Léo pueden generar resultados reales en tu negocio.",
  },
  "cta.whatsapp": {
    pt: "Falar no WhatsApp",
    en: "Chat on WhatsApp",
    es: "Hablar por WhatsApp",
  },
  "cta.email": {
    pt: "Enviar e-mail",
    en: "Send email",
    es: "Enviar e-mail",
  },
  // Footer
  "footer.agents": {
    pt: "Agentes",
    en: "Agents",
    es: "Agentes",
  },
  "footer.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
