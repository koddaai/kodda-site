import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Agents />
        <Features />
        <Metrics />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
