import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Leisure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-foreground mb-8">Leisure & Fitness</h1>
          <p className="text-muted-foreground">Discover our spa, pool, and fitness facilities - content coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leisure;