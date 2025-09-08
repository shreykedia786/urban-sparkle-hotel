import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Gift, 
  Percent, 
  Star,
  Crown,
  Sparkles,
  Clock,
  MapPin,
  CheckCircle,
  Award,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const promotions = [
  {
    title: "Cocktail Promotion",
    description: "Enjoy special cocktail offers at our premium bars and lounges with expertly crafted drinks",
    image: "https://donatellodubai.com/wp-content/uploads/2025/03/Coctail-Promotion.png",
    type: "Food & Beverage",
    status: "Limited Time",
    details: "Experience our signature cocktails at special prices during happy hours",
    discount: "20% OFF",
    tier: "premium"
  },
  {
    title: "Special Transfer Rates", 
    description: "Avail our luxury transfers during your stay with exclusive rates for hotel guests",
    image: "https://donatellodubai.com/wp-content/uploads/2022/11/Yam1-2.jpeg",
    type: "Transportation",
    status: "Available",
    details: "Contact our reception for more information about our premium transfer services",
    discount: "Special Rates",
    tier: "classic"
  },
  {
    title: "Early Bird Booking",
    description: "Book 30 days in advance and save significantly on your luxury stay",
    image: "/src/assets/deluxe-triple.jpg",
    type: "Accommodation",
    status: "Year Round",
    details: "Plan ahead and enjoy substantial savings on our luxury rooms and suites",
    discount: "Up to 25% OFF",
    tier: "premium"
  },
  {
    title: "Extended Stay Package",
    description: "Stay 3 nights or more and enjoy complimentary benefits and exclusive amenities",
    image: "/src/assets/grand-suite.jpg",
    type: "Accommodation", 
    status: "Available",
    details: "Includes complimentary breakfast, late checkout, and spa credit",
    discount: "Value Package",
    tier: "premium"
  },
  {
    title: "Business Traveler Special",
    description: "Exclusive rates and benefits designed specifically for corporate guests",
    image: "/src/assets/room-cityview.jpg",
    type: "Corporate",
    status: "Available",
    details: "Includes high-speed WiFi, meeting room access, and business center services",
    discount: "Corporate Rates",
    tier: "classic"
  },
  {
    title: "Weekend Getaway",
    description: "Perfect package for weekend leisure stays in the heart of Dubai",
    image: "/src/assets/lobby-interior.jpg",
    type: "Leisure",
    status: "Weekends",
    details: "Includes breakfast, pool access, and complimentary minibar",
    discount: "Weekend Special",
    tier: "classic"
  }
];

const loyaltyBenefits = [
  "Exclusive member rates and early access to promotions",
  "Complimentary room upgrades (subject to availability)",
  "Priority reservations and late checkout privileges",
  "Personalized concierge services and recommendations",
  "Spa treatment discounts and wellness credits",
  "Dining discounts at all hotel restaurants and bars"
];

const typeColors = {
  "Food & Beverage": "bg-neon/10 text-neon",
  "Transportation": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
  "Accommodation": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  "Corporate": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
  "Leisure": "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300"
};

const Promotions = () => {
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
            backgroundImage: `url('https://donatellodubai.com/wp-content/uploads/2025/03/Coctail-Promotion.png')`
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
                ★ ★ ★ ★ ★ Exclusive Offers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                OFFERS &
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                Promotions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Discover exclusive deals for an unforgettable Dubai experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Gift className="w-5 h-5 mr-2" />
                View All Offers
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              CURRENT PROMOTIONS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Exclusive 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Deals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take advantage of our special offers designed to enhance your stay and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-0">
                  {promo.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={promo.image} 
                        alt={promo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Tier Badge */}
                      <Badge className={cn(
                        "absolute top-4 left-4 text-white border-0",
                        promo.tier === "premium" ? "bg-gradient-to-r from-neon to-neon-glow" :
                        "bg-gradient-to-r from-secondary to-secondary/80"
                      )}>
                        {promo.tier === "premium" && <Crown className="w-3 h-3 mr-1" />}
                        {promo.tier === "premium" ? "Premium Offer" : "Special Deal"}
                      </Badge>

                      {/* Discount Badge */}
                      <Badge className="absolute top-4 right-4 bg-neon text-neon-foreground">
                        {promo.discount}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                        {promo.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Badge variant="secondary" className={typeColors[promo.type] || "bg-muted text-muted-foreground"}>
                          {promo.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-border">
                          {promo.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {promo.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                      {promo.details}
                    </p>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-hover to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Percent className="w-8 h-8 mr-3 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Limited Time Offers
            </h2>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on our exclusive seasonal promotions and member benefits
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: +971 56 408 5283
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +971 4 340 9050
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
                LOYALTY PROGRAM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Rewards 
                <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Program</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our exclusive loyalty program and unlock special benefits, exclusive rates, and personalized services designed for our valued returning guests.
              </p>
              
              <div className="space-y-4 mb-8">
                {loyaltyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Join Loyalty Program
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-neon/30 text-neon hover:bg-neon/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl border border-border shadow-card p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-neon-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Save?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Contact us directly to learn about current promotions and customize a package that suits your needs perfectly.
                </p>
                
                <div className="grid gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-neon/30 hover:border-neon text-neon hover:bg-neon/10 font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02]" 
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-neon/30 hover:border-neon text-neon hover:bg-neon/10 font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02]" 
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Reception
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Check Availability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;