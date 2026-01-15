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
      <main className="pb-32" style={{ paddingTop: "160px" }}>
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

            {/* Content - espaçamento generoso entre seções */}
            <div className="[&>section]:mb-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-8 [&_h3]:text-xl [&_h3]:mt-10 [&_h3]:mb-6 [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-6 [&_ul]:my-6 [&_ul]:space-y-4 [&_li]:text-base [&_li]:leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
