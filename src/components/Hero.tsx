import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4d65ff]/10 via-transparent to-transparent" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4d65ff]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4d65ff]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">3 agentes disponíveis 24/7</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Agentes digitais,{" "}
            <span className="gradient-text">resultados reais</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Para times de Vendas, Atendimento e Operações que querem escalar
            sem aumentar custos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#contato"
              className="bg-[#4d65ff] hover:bg-[#3d51cc] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 animate-pulse-glow"
            >
              Começar agora
            </Link>
            <Link
              href="#maria"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Conhecer agentes
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-500">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">3x</div>
              <div className="text-sm text-gray-500">Mais produtivo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">-70%</div>
              <div className="text-sm text-gray-500">Custo operacional</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
