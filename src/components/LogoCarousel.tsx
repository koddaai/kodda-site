"use client";

const logos = [
  "Nubank",
  "iFood",
  "Mercado Livre",
  "Stone",
  "PagSeguro",
  "Totvs",
  "Locaweb",
  "RD Station",
  "Hotmart",
  "Gympass",
  "QuintoAndar",
  "Loft",
];

export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden py-12 border-t border-white/5">
      <div className="flex animate-marquee">
        {/* First set */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-12 text-zinc-600 text-xl font-semibold hover:text-zinc-400 transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-12 text-zinc-600 text-xl font-semibold hover:text-zinc-400 transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
