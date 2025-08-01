import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BookingWidget } from "@/components/BookingWidget";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoomsPreview } from "@/components/RoomsPreview";
import { OffersSection } from "@/components/OffersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
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
      <OffersSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
