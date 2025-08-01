import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Meetings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-foreground mb-8">Meetings & Events</h1>
          <p className="text-muted-foreground">Plan your events and meetings - content coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Meetings;