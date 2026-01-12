import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient - tropical feel */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#4d65ff]/20 via-[#00d4aa]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-[#00d4aa]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Main headline - exactly like 11x */}
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-tight mb-8">
            Agentes digitais,
            <br />
            <span className="text-gradient">Resultados reais.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl">
            Para times de Vendas, Atendimento e Operações.
          </p>

          {/* CTA */}
          <Link
            href="#demo"
            className="btn-primary text-lg"
          >
            Agendar demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
