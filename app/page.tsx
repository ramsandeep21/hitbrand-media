import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
