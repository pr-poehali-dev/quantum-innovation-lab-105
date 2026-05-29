import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CatalogSection } from "@/components/CatalogSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DeliverySection } from "@/components/DeliverySection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <CatalogSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
    </main>
  );
};

export default Index;
