import AgentPageLayout from "@/components/AgentPageLayout";

const useCases = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Transcrição Instantânea",
    description: "Qualquer áudio vira texto claro e legível.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Resumos de Áudios Longos",
    description: "Minutos de áudio resumidos em poucas linhas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Grupos de WhatsApp",
    description: "Leia tudo sem ouvir dezenas de mensagens de voz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Busca em Conversas",
    description: "Encontre informações antigas rapidamente.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
      </svg>
    ),
    title: "Multilíngue",
    description: "Transcrição automática em todos os idiomas.",
  },
];

const howItWorks = [
  {
    title: "Envie",
    description: "Envie ou encaminhe o áudio do WhatsApp.",
  },
  {
    title: "Transcreva",
    description: "Léo transcreve em segundos.",
  },
  {
    title: "Resuma",
    description: "Opcionalmente gera um resumo.",
  },
  {
    title: "Leia",
    description: "Leia e siga em frente.",
  },
];

const metrics = [
  { value: "-90%", label: "Tempo gasto com áudios" },
  { value: "Todos", label: "Idiomas suportados" },
  { value: "Segundos", label: "Para transcrever" },
  { value: "100%", label: "Leitura silenciosa" },
];

const features = [
  {
    title: "Foco em WhatsApp",
    description: "Otimizado para áudios de mensagens.",
  },
  {
    title: "Alta Precisão",
    description: "Funciona com áudios informais.",
  },
  {
    title: "Resumos Automáticos",
    description: "Áudios longos em poucas linhas.",
  },
  {
    title: "Busca em Texto",
    description: "Encontre qualquer informação.",
  },
  {
    title: "Multilíngue Nativo",
    description: "Todos os idiomas suportados.",
  },
  {
    title: "Privacidade e Segurança",
    description: "Seus dados protegidos.",
  },
];

const integrations = [
  "WhatsApp",
  "WhatsApp Business",
  "Telegram",
  "Slack",
  "Notion",
  "Google Docs",
  "Zapier",
];

export default function LeoPage() {
  return (
    <AgentPageLayout
      name="Léo"
      role="Agente de Transcrição de WhatsApp"
      tagline="Pare de ouvir áudios. Leia em segundos."
      description="Léo transcreve áudios do WhatsApp em qualquer idioma, em segundos. Ideal para quem não quer perder tempo ouvindo áudios longos, confusos ou desnecessários — aquele áudio de 3 minutos que poderia ser uma linha."
      videoUrl="/images/Léo.mp4"
      useCases={useCases}
      howItWorks={howItWorks}
      metrics={metrics}
      features={features}
      integrations={integrations}
    />
  );
}
