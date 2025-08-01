import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { DonatelloHero } from "@/components/DonatelloHero";
import { BookingWidget } from "@/components/BookingWidget";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoomsPreview } from "@/components/RoomsPreview";
import { DonatelloOffers } from "@/components/DonatelloOffers";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <DonatelloHero language={language} />
      
      {/* Persistent Booking Widget - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-40 hidden lg:block">
        <BookingWidget className="w-80" />
      </div>
      
      {/* Mobile Booking Widget - Integrated */}
      <section className="py-8 bg-muted lg:hidden">
        <div className="max-w-lg mx-auto px-4">
          <BookingWidget />
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Rooms Preview */}
      <RoomsPreview />
      
      {/* Offers Section */}
      <DonatelloOffers language={language} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
