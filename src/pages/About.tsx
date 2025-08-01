import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-5xl mb-6">
              About Us
              <span className="block text-neon text-4xl mt-2">Our Story</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn about our commitment to sustainable hospitality, our team's passion for service, 
              and the vision behind Urban Sparkle Hotel.
            </p>
          </div>
        </section>
        
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              We're crafting our brand story, showcasing our team, sustainability initiatives, and awards.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}