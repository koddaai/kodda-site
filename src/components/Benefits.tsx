const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sempre aprendendo",
    description: "Nossos agentes melhoram continuamente com cada interação, adaptando-se ao seu negócio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Customizado para você",
    description: "Configurados especificamente para seu tom de voz, processos e regras de negócio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Integração profunda",
    description: "Conecta com seu CRM, WhatsApp, e-mail e todas as ferramentas que você já usa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Inteligência autônoma",
    description: "Tomam decisões inteligentes sem intervenção humana, escalando quando necessário.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Pronto para enterprise",
    description: "Segurança de nível empresarial com SOC 2 e conformidade LGPD garantida.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Eficiência operacional",
    description: "Reduza custos em até 70% enquanto aumenta a capacidade de atendimento.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4d65ff]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a <span className="gradient-text">Kodda</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossos agentes combinam inteligência artificial de ponta com
            simplicidade de uso.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-[#4d65ff]/50 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#4d65ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#4d65ff] group-hover:bg-[#4d65ff]/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4d65ff] mb-2">
              500+
            </div>
            <div className="text-gray-400">Empresas ativas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4d65ff] mb-2">
              2M+
            </div>
            <div className="text-gray-400">Interações/mês</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4d65ff] mb-2">
              98%
            </div>
            <div className="text-gray-400">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#4d65ff] mb-2">
              &lt;2s
            </div>
            <div className="text-gray-400">Tempo de resposta</div>
          </div>
        </div>
      </div>
    </section>
  );
}
