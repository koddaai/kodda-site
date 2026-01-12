import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentSection from "@/components/AgentSection";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Maria - Atendimento */}
        <AgentSection
          id="maria"
          name="Maria"
          role="Agente de Atendimento"
          description="Maria é sua especialista em atendimento ao cliente. Ela responde instantaneamente via WhatsApp, chat e e-mail, resolve dúvidas, processa solicitações e escala para humanos apenas quando realmente necessário. Disponível 24/7, nunca perde a paciência."
          features={[
            "Atendimento multicanal (WhatsApp, chat, e-mail)",
            "Respostas instantâneas 24 horas por dia",
            "Entende contexto e histórico do cliente",
            "Escala automaticamente para humanos quando necessário",
            "Integração com seu CRM e sistemas internos",
          ]}
          videoPlaceholder="Veja a Maria atendendo em tempo real"
          color="#4d65ff"
        />

        {/* Lara - SDR */}
        <AgentSection
          id="lara"
          name="Lara"
          role="Agente SDR"
          description="Lara é sua SDR incansável. Ela prospecta, qualifica leads, agenda reuniões e nutre relacionamentos no piloto automático. Trabalha 24/7 para encher seu pipeline de oportunidades qualificadas, liberando seu time para fechar negócios."
          features={[
            "Prospecção ativa em múltiplos canais",
            "Qualificação inteligente de leads (BANT, MEDDIC)",
            "Agendamento automático de reuniões",
            "Sequências de follow-up personalizadas",
            "Enriquecimento de dados em tempo real",
          ]}
          videoPlaceholder="Veja a Lara prospectando leads"
          reversed
          color="#10b981"
        />

        {/* Léo - Transcrição */}
        <AgentSection
          id="leo"
          name="Léo"
          role="Agente de Transcrição"
          description="Léo transforma áudio em texto com precisão impressionante. Ele transcreve reuniões, calls de vendas, entrevistas e podcasts automaticamente, gerando resumos inteligentes e action items. Nunca mais perca uma informação importante."
          features={[
            "Transcrição automática de reuniões e calls",
            "Suporte a múltiplos idiomas (PT, EN, ES)",
            "Resumos executivos automáticos",
            "Extração de action items e decisões",
            "Integração com Google Meet, Zoom e Teams",
          ]}
          videoPlaceholder="Veja o Léo transcrevendo em tempo real"
          color="#f59e0b"
        />

        <Benefits />

        <SocialProof />
      </main>

      <Footer />
    </>
  );
}
