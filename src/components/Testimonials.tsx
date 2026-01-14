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
    <section id="sobre" className="section-padding bg-[#EBE7E0]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
            O que nossos clientes dizem
          </h2>
          <p className="text-base md:text-lg text-black/50">
            Empresas que confiam na Kodda.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card"
            >
              {/* Quote */}
              <p className="text-sm md:text-base text-black/70 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-medium text-sm shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm text-black">{testimonial.author}</div>
                  <div className="text-xs text-black/50">
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
