import AgentPageLayout from "@/components/AgentPageLayout";

const useCases = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Atendimento 24/7",
    description: "Respostas instantâneas a qualquer hora, sem filas ou espera.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Rastreio de Pedidos",
    description: "Clientes consultam pedidos e entregas automaticamente.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "FAQ Inteligente",
    description: "Dúvidas frequentes resolvidas sem intervenção humana.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Escalonamento Inteligente",
    description: "Encaminha para o time certo quando necessário, com histórico completo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Multicanal",
    description: "WhatsApp, Instagram, Facebook e chat do site integrados.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics em Tempo Real",
    description: "Acompanhe satisfação, tempo de resposta e principais dúvidas.",
  },
];

const howItWorks = [
  {
    title: "Conecte",
    description: "Conecte seus canais de atendimento em minutos.",
  },
  {
    title: "Treine",
    description: "Treine Maria com FAQs, políticas e tom de voz.",
  },
  {
    title: "Atenda",
    description: "Atenda clientes automaticamente ou escale para humanos.",
  },
  {
    title: "Otimize",
    description: "Otimize com base em métricas e aprendizados contínuos.",
  },
];

const metrics = [
  { value: "-85%", label: "Tempo de resposta" },
  { value: "+45%", label: "Satisfação (NPS)" },
  { value: "24/7", label: "Disponibilidade" },
  { value: "-60%", label: "Custo por atendimento" },
];

const features = [
  {
    title: "Linguagem Natural",
    description: "Entende contexto, ironia e erros de digitação.",
  },
  {
    title: "Memória de Contexto",
    description: "Lembra do histórico e retoma conversas.",
  },
  {
    title: "Personalização Total",
    description: "Adapte tom de voz e fluxos ao seu brand.",
  },
  {
    title: "Análise de Sentimento",
    description: "Detecta frustração e prioriza quando necessário.",
  },
  {
    title: "Respostas Ricas",
    description: "Envia imagens, documentos, links e vídeos.",
  },
  {
    title: "Conformidade LGPD",
    description: "Dados seguros e em conformidade.",
  },
];

const integrations = [
  "WhatsApp Business",
  "Instagram",
  "Facebook Messenger",
  "Zendesk",
  "Intercom",
  "Freshdesk",
  "Salesforce",
  "HubSpot",
  "Pipedrive",
  "Slack",
  "Microsoft Teams",
  "Shopify",
  "WooCommerce",
  "Mercado Livre",
];

export default function MariaPage() {
  return (
    <AgentPageLayout
      name="Maria"
      role="Agente de Atendimento"
      tagline="Sua equipe de atendimento que nunca dorme."
      description="Responda todos os seus clientes em até 30 segundos, 24 horas por dia. Maria resolve até 85% das solicitações sem intervenção humana, reduz filas e aumenta a satisfação do cliente."
      videoUrl="/images/Maria.mp4"
      useCases={useCases}
      howItWorks={howItWorks}
      metrics={metrics}
      features={features}
      integrations={integrations}
    />
  );
}
