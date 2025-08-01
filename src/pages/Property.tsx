import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Property() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-5xl mb-6">
              Our Property
              <span className="block text-neon text-4xl mt-2">Prime Urban Location</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the advantages of staying in the heart of the city, with easy access to business districts, 
              cultural attractions, and the vibrant energy of downtown.
            </p>
          </div>
        </section>
        
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              This page is under development. We're crafting an immersive experience to showcase our prime downtown location.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}