import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DonatelloOffers } from "@/components/DonatelloOffers";

const Promotions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-donatello-gold/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-donatello-gold">Exclusive</span> Promotions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our special offers and packages designed to enhance your stay at Donatello Hotel Dubai. 
              From dining discounts to honeymoon packages, find the perfect deal for your needs.
            </p>
          </div>
        </section>

        {/* Offers Section */}
        <DonatelloOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;