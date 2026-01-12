const testimonials = [
  {
    quote:
      "A Maria transformou nosso atendimento. Antes demorávamos horas para responder, agora é instantâneo. NPS subiu de 45 para 78.",
    author: "Ricardo Mendes",
    role: "Head de CX",
    company: "TechStore",
  },
  {
    quote:
      "Lara qualifica leads melhor que muito SDR humano. Conseguimos testar múltiplas abordagens simultaneamente e nossa conversão subiu 40%.",
    author: "Fernanda Lima",
    role: "VP de Vendas",
    company: "SaaS Corp",
  },
  {
    quote:
      "Léo transcreve todas nossas reuniões automaticamente. Economizamos mais de 30 horas por semana que gastávamos fazendo isso manualmente.",
    author: "Marcos Oliveira",
    role: "COO",
    company: "Consulting Pro",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empresas que <span className="text-gradient">confiam</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Veja o que nossos clientes dizem.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 card-hover"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[#4d65ff]/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4d65ff] to-[#00d4aa] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
