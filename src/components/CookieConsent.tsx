"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const closeBanner = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 md:p-8 bg-black/95 backdrop-blur-sm">
      <div className="container-main">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Aviso</h3>
          <button
            onClick={closeBanner}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-white/80 text-sm mb-6 max-w-4xl">
          Nós e terceiros selecionados usamos cookies ou tecnologias similares para finalidades técnicas e, com seu consentimento, para outras finalidades conforme especificado na{" "}
          <a href="/privacidade" className="underline hover:text-white">
            política de cookie
          </a>
          . Use o botão "Aceitar" ou feche este aviso para consentir.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="/privacidade"
            className="inline-flex items-center justify-center rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
            style={{ padding: '14px 32px' }}
          >
            Saber mais
          </a>
          <button
            onClick={acceptCookies}
            className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
            style={{ padding: '14px 40px' }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
