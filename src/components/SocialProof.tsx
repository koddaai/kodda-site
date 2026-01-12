const testimonials = [
  {
    quote:
      "A Maria transformou nosso atendimento. Antes demorávamos horas para responder, agora é instantâneo e os clientes amam.",
    author: "Ricardo Silva",
    role: "CEO, TechStore",
    metric: "85% redução no tempo de resposta",
  },
  {
    quote:
      "A Lara qualifica leads melhor que muito SDR humano. Nossa taxa de conversão subiu 40% no primeiro mês.",
    author: "Fernanda Costa",
    role: "Head de Vendas, SaaS Corp",
    metric: "40% mais conversões",
  },
  {
    quote:
      "O Léo transcreve todas nossas reuniões automaticamente. Economizamos dezenas de horas por semana.",
    author: "Marcos Oliveira",
    role: "COO, Consulting Pro",
    metric: "30h economizadas por semana",
  },
];

const logos = [
  "TechCorp",
  "SaaSify",
  "GrowthLabs",
  "ScaleUp",
  "InnovateCo",
  "FutureTech",
];

export default function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empresas que <span className="gradient-text">confiam</span> na Kodda
          </h2>
          <p className="text-gray-400 text-lg">
            Resultados reais de quem já usa nossos agentes.
          </p>
        </div>

        {/* Logos carousel */}
        <div className="flex justify-center items-center gap-12 mb-20 flex-wrap opacity-50">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-[#4d65ff]/30 transition-all"
            >
              {/* Metric badge */}
              <div className="inline-block bg-[#4d65ff]/10 text-[#4d65ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
                {testimonial.metric}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4d65ff] to-[#4d65ff]/50 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          id="contato"
          className="mt-24 bg-gradient-to-r from-[#4d65ff]/20 via-[#4d65ff]/10 to-[#4d65ff]/20 border border-[#4d65ff]/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como Maria, Lara e Léo podem
            trabalhar para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4d65ff] hover:bg-[#3d51cc] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@kodda.ai"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
