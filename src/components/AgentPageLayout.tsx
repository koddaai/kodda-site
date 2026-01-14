"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowItWorksStep {
  title: string;
  description: string;
}

interface Metric {
  value: string;
  label: string;
}

interface AgentPageLayoutProps {
  name: string;
  role: string;
  tagline: string;
  description: string;
  videoUrl: string;
  useCases: UseCase[];
  howItWorks: HowItWorksStep[];
  metrics: Metric[];
  features: { title: string; description: string }[];
  integrations: string[];
}

export default function AgentPageLayout({
  name,
  role,
  tagline,
  description,
  videoUrl,
  useCases,
  howItWorks,
  metrics,
  features,
  integrations,
}: AgentPageLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="flex items-center pt-24 md:pt-28 pb-12 md:pb-16 bg-white" style={{ paddingTop: '7rem' }}>
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <p className="text-xs md:text-sm text-black/50 mb-3 uppercase tracking-wider">
                  {role}
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black [text-wrap:balance]">
                  Oi, eu sou a {name}.
                </h1>

                <p className="text-lg md:text-xl text-black/70 mb-4 [text-wrap:balance]">
                  {tagline}
                </p>

                <p className="text-sm md:text-base text-black/50 max-w-md mx-auto lg:mx-0 [text-wrap:balance]">
                  {description}
                </p>

                <Link href="#demo" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                  Contratar {name}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Video */}
              <div className="relative">
                {/* Elemento decorativo de fundo */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-neutral-100 rounded-2xl" />

                {/* Video principal */}
                <div className="relative z-10 video-container aspect-square lg:aspect-[4/3] rounded-2xl border border-black/5 overflow-hidden bg-[#EBE7E0] shadow-sm">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-[#EBE7E0]">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black [text-wrap:balance]">
                O que {name} faz por você
              </h2>
              <p className="text-sm md:text-base text-black/50 [text-wrap:balance]">
                Casos de uso que transformam seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group card p-5 md:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 text-neutral-700 flex-shrink-0 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                    {useCase.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-black">{useCase.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed flex-grow">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding-sm bg-white">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black [text-wrap:balance]">
                Como {name} funciona
              </h2>
              <p className="text-sm md:text-base text-black/50 [text-wrap:balance]">
                Simples, inteligente, eficiente
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {howItWorks.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`tab-button ${activeTab === index ? "active" : ""}`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-[#EBE7E0] rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-black [text-wrap:balance]">
                {howItWorks[activeTab].title}
              </h3>
              <p className="text-sm md:text-base text-black/60 leading-relaxed [text-wrap:balance]">
                {howItWorks[activeTab].description}
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="section-padding-sm bg-[#EBE7E0]">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black [text-wrap:balance]">
                Resultados com {name}
              </h2>
              <p className="text-sm md:text-base text-black/50 [text-wrap:balance]">
                Métricas reais de clientes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="card text-center p-6 md:p-8 h-full flex flex-col justify-center min-h-[140px]">
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-black/50 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding-sm bg-white">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black [text-wrap:balance]">
                Por que escolher {name}
              </h2>
              <p className="text-sm md:text-base text-black/50 [text-wrap:balance]">
                Recursos que fazem a diferença
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200/60 rounded-xl p-5 md:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-neutral-300"
                >
                  <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0" />
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed flex-grow pl-3.5">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="section-padding bg-[#EBE7E0]">
          <div className="container-main">
            {/* CTA */}
            <div className="text-center">
              <p className="text-xs text-black/50 mb-2 uppercase tracking-wider">
                Comece agora
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black [text-wrap:balance]">
                Coloque {name} para trabalhar hoje
              </h2>
              <p className="text-sm md:text-base text-black/50 mb-6 [text-wrap:balance]">
                Converse com nosso time e veja {name} em ação. Implementação em até 48 horas.
              </p>

              <Link
                href={`https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20${name}%20da%20Kodda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
