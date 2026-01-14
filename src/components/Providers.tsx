"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";
import CookieConsent from "./CookieConsent";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <CookieConsent />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
