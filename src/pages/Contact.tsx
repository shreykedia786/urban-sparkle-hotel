import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-5xl mb-6">
              Contact Us
              <span className="block text-neon text-4xl mt-2">Get In Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our concierge team is available 24/7 to assist with reservations, 
              special requests, and local recommendations.
            </p>
          </div>
        </section>
        
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              We're building an interactive contact page with Google Maps, multilingual forms, and WhatsApp integration.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}