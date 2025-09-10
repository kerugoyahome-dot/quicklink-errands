import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import MarketplaceSection from "@/components/MarketplaceSection";
import FoodDeliverySection from "@/components/FoodDeliverySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesGrid />
      <MarketplaceSection />
      <FoodDeliverySection />
      <WhyChooseUs />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Index;
