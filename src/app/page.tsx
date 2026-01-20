import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PastWorkGallery from "@/components/PastWorkGallery";
import SatisfiedCustomers from "@/components/SatisfiedCustomers";
import ProcessCards from "@/components/ProcessCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <HeroSection />
      <StatsSection />
      <PastWorkGallery />
      <SatisfiedCustomers />
      <ProcessCards />
      <ProcessTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
