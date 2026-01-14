import AgentPageLayout from "@/components/AgentPageLayout";

const useCases = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Prospecção Inteligente",
    description: "Identifica compradores ideais com base em dados de intenção.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Outbound Personalizado",
    description: "Mensagens relevantes por e-mail e LinkedIn.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Qualificação Automática",
    description: "Leads avaliados por fit, interesse e timing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agendamento de Reuniões",
    description: "Reuniões marcadas automaticamente quando há interesse.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reativação de Leads",
    description: "Reengajamento inteligente de leads frios.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Alcance Global",
    description: "Mensagens adaptadas a idiomas e culturas diferentes.",
  },
];

const howItWorks = [
  {
    title: "Defina o ICP",
    description: "Configure seu perfil de cliente ideal: indústria, tamanho da empresa, cargo do decisor, região e outros critérios relevantes para seu negócio.",
  },
  {
    title: "Pesquise",
    description: "Lara analisa milhões de empresas e contatos para encontrar os prospects que mais se encaixam no seu ICP, usando dados de intenção de compra.",
  },
  {
    title: "Personalize",
    description: "Cada mensagem é criada sob medida: menciona a empresa, cargo, dores específicas e gatilhos de timing como mudanças de cargo ou funding.",
  },
  {
    title: "Engaje",
    description: "Lara envia sequências multicanal (e-mail + LinkedIn), faz follow-ups inteligentes e agenda reuniões automaticamente quando há interesse.",
  },
];

const metrics = [
  { value: "+30%", label: "Reuniões por vendedor" },
  { value: "+80%", label: "Taxa de qualificação" },
  { value: "-50%", label: "Custo por lead" },
  { value: "3x", label: "Pipeline gerado" },
];

const features = [
  {
    title: "Dados de Intenção",
    description: "Sinais de compra em tempo real.",
  },
  {
    title: "Enriquecimento Automático",
    description: "Dados de contato sempre atualizados.",
  },
  {
    title: "A/B Testing Contínuo",
    description: "Otimização automática para conversão.",
  },
  {
    title: "Deliverability Premium",
    description: "Alta entregabilidade garantida.",
  },
  {
    title: "Sincronização com CRM",
    description: "Dados em tempo real no seu CRM.",
  },
  {
    title: "Compliance Total",
    description: "LGPD e boas práticas de prospecção.",
  },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Pipedrive",
  "RD Station",
  "LinkedIn Sales Navigator",
  "Apollo.io",
  "ZoomInfo",
  "Calendly",
  "Google Calendar",
  "Outlook",
  "Gmail",
  "Slack",
  "Microsoft Teams",
  "Zapier",
];

export default function LaraPage() {
  return (
    <AgentPageLayout
      name="Lara"
      role="Agente SDR"
      tagline="Sua máquina de geração de pipeline."
      description="Lara prospecta, engaja e qualifica leads 24/7, agenda reuniões automaticamente e entrega oportunidades prontas para fechar."
      videoUrl="/images/Lara.mp4"
      useCases={useCases}
      howItWorks={howItWorks}
      metrics={metrics}
      features={features}
      integrations={integrations}
    />
  );
}
