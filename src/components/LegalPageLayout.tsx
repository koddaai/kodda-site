"use client";

import Header from "./Header";
import Footer from "./Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                {title}
              </h1>
              <p className="text-neutral-500">
                Última atualização: {lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
