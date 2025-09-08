import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Dumbbell, 
  Waves, 
  Sparkles, 
  Users, 
  Calendar, 
  Mountain,
  Star,
  Crown,
  CheckCircle,
  Phone,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const facilities = [
  {
    title: "Legacy European Spa",
    description: "Relax your mind and rejuvenate your body with a wide selection of luxury massage and wellness treatments at the hotel spa. Treat yourself with a hammam or get glammed up with the salon treatments to feel reinvigorated and renewed.",
    image: "https://donatellodubai.com/wp-content/uploads/2023/06/Legacy-SPA-1.jpg",
    icon: Sparkles,
    hours: "10:00 AM - 01:00 AM",
    features: ["Luxury Massages", "Hammam Treatments", "Salon Services", "Wellness Therapies", "Aromatherapy", "Couples Spa"],
    tier: "premium"
  },
  {
    title: "Rooftop Swimming Pool",
    description: "Bask in the sunlight and take a dip in our outdoor, rooftop swimming pool that is temperature-controlled for your comfort. Adults and children alike can enjoy a refreshing, fun time at the pool.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/swimming_pool_img.jpg",
    icon: Waves,
    hours: "07:00 AM - 07:00 PM",
    features: ["Temperature-Controlled", "Rooftop Location", "Pool Bar Service", "Family-Friendly", "Skyline Views", "Poolside Dining"],
    tier: "premium"
  },
  {
    title: "State-of-the-Art Gym",
    description: "Keep up with your routine workouts at our well-equipped hotel gym. A variety of cardio and strength-training equipment are provided to ensure that our guests have the means to stay fit and healthy.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/health_club_img.jpg",
    icon: Dumbbell,
    hours: "24/7 Access",
    features: ["Cardio Equipment", "Strength Training", "Modern Facilities", "Personal Training", "Group Classes", "Towel Service"],
    tier: "classic"
  },
  {
    title: "Concierge & Tours",
    description: "Discover the attractions of Dubai and explore the different Emirates with a wide selection of exciting tours and activities arranged by our helpful concierge team.",
    icon: Users,
    features: ["Desert Safaris", "City Tours", "Excursions", "Activity Booking", "Cultural Experiences", "Adventure Sports"],
    tier: "classic"
  }
];

const experiences = [
  {
    title: "Desert Safari Adventure",
    description: "Experience the magic of the Arabian desert with dune bashing, camel riding, and traditional Bedouin entertainment",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d35690?w=800&h=600&fit=crop",
    duration: "6 hours",
    includes: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"]
  },
  {
    title: "Dubai City Tour",
    description: "Explore Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and traditional souks",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    duration: "8 hours",
    includes: ["Burj Khalifa", "Dubai Mall", "Gold Souk", "Spice Market"]
  },
  {
    title: "Luxury Yacht Charter",
    description: "Cruise along Dubai's stunning coastline aboard a private luxury yacht with premium amenities",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&h=600&fit=crop",
    duration: "4 hours",
    includes: ["Private Yacht", "Crew Service", "Refreshments", "Water Sports"]
  }
];

const Leisure = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://donatellodubai.com/wp-content/uploads/2023/06/Legacy-SPA-1.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon rounded-full animate-pulse opacity-50" />
        
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon/20 backdrop-blur-sm rounded-full text-neon text-sm font-medium border border-neon/30">
                ★ ★ ★ ★ ★ Wellness & Recreation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                LEISURE
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                & Fitness
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Rejuvenate your body and mind with world-class wellness facilities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Spa Treatment
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <Mountain className="w-5 h-5 mr-2" />
                Dubai Adventures
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              PREMIUM WELLNESS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Luxury 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience comprehensive wellness and recreation facilities designed for the discerning traveler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Facility Image */}
                  {facility.image && (
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Tier Badge */}
                      <Badge className={cn(
                        "absolute top-4 left-4 text-white border-0",
                        facility.tier === "premium" ? "bg-gradient-to-r from-neon to-neon-glow" :
                        "bg-gradient-to-r from-secondary to-secondary/80"
                      )}>
                        {facility.tier === "premium" && <Crown className="w-3 h-3 mr-1" />}
                        {facility.tier === "premium" ? "Premium Experience" : "Essential Wellness"}
                      </Badge>

                      {/* Facility Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Facility Details */}
                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {!facility.image && (
                          <div className="w-12 h-12 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center">
                            <facility.icon className="w-6 h-6 text-neon-foreground" />
                          </div>
                        )}
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-neon transition-colors">
                          {facility.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                    </div>

                    {/* Operating Hours */}
                    {facility.hours && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
                        <Clock className="w-4 h-4 text-neon" />
                        <span>{facility.hours}</span>
                      </div>
                    )}

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-neon" />
                        Available Services
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-border">
                      <Button 
                        className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground transition-all duration-300 hover:scale-105"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {facility.title.includes("Spa") ? "Book Treatment" : 
                         facility.title.includes("Pool") ? "Reserve Pool Time" :
                         facility.title.includes("Gym") ? "Schedule Training" : "Book Experience"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Experiences */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              SIGNATURE EXPERIENCES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dubai Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the magic of Dubai with our curated experiences and tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-neon text-neon-foreground">
                      {experience.duration}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-foreground text-sm">Includes:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {experience.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 text-neon" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground transition-all duration-300"
                    >
                      Book Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-hover to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Relax & Explore?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your wellness treatments and Dubai adventures for an unforgettable experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Concierge
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leisure;