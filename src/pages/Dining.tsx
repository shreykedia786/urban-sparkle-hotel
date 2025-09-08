import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Utensils, 
  Coffee, 
  Wine, 
  Users,
  Star,
  ChevronRight,
  Crown,
  Sparkles,
  MessageSquare,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const restaurants = [
  {
    id: "d-roof",
    title: "The D ROOF",
    category: "Rooftop Dining",
    description: "Located at the Rooftop level of the Donatello Hotel in Al Barsha, Dubai, The D Roof offers you the fun and frolic with a wide selection of beverages. Unwind in the sunshine or dine beneath the moonlit sky on elevated platforms overlooking the glistening pool and a view of the Dubai skyline with iconic landmarks – Burj Al Arab and Burj Khalifa.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/125.jpg",
    hours: "12:00 PM - 3:00 AM",
    cuisine: "International Cuisine & Beverages",
    highlights: ["Dubai Skyline Views", "Burj Al Arab & Burj Khalifa Views", "Shisha Varieties", "Pool Overlooking Terrace"],
    icon: Utensils,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com",
    tier: "premium"
  },
  {
    id: "butterfly-cafe",
    title: "Butterfly Cafe",
    category: "All-Day Dining",
    description: "Start your day with an energizing breakfast buffet before heading out for your meetings or sightseeing trips, and indulge in a wide variety of mouth-watering starters to irresistible main course dishes for lunch or dinner in our all-day-dining restaurant.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/08/Butterfly-4.jpg",
    hours: "06:00 AM - 11:00 PM",
    cuisine: "International Cuisine",
    highlights: ["Breakfast Buffet", "International Cuisine", "Ala Carte & Buffet", "Quality Ingredients"],
    icon: Utensils,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com",
    tier: "classic"
  },
  {
    id: "lobby-lounge",
    title: "Lobby Lounge",
    category: "Café & Lounge",
    description: "A comfortable seating area beneath a bright hotel atrium view, this lobby lounge is the perfect place to meet up for business travellers and a welcome rest point as you return from exploring the city.",
    image: "https://donatellodubai.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-12-at-11.12.33-AM.jpeg",
    hours: "09:00 AM - 10:00 PM",
    cuisine: "Coffee, Pastries & Light Meals",
    highlights: ["International Coffee", "Business Friendly", "Pastries & Chocolates", "Dine-in & Take-away"],
    icon: Coffee,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com",
    tier: "casual"
  },
  {
    id: "nexa-lounge",
    title: "Nexa Lounge",
    category: "Bar & Nightclub",
    description: "Nexa Lounge, a premier bar and nightclub, offers an unforgettable nightlife experience. With its vibrant atmosphere, world-class DJs, and captivating ambiance, Nexa Lounge offers an electrifying night out.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/71.jpg",
    hours: "12:00 PM - 3:00 AM",
    cuisine: "Cocktails & Entertainment",
    highlights: ["World-Class DJs", "Expert Cocktails", "Vibrant Atmosphere", "Top-notch Entertainment"],
    icon: Wine,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com",
    tier: "premium"
  }
];

const specialOffers = [
  {
    title: "Happy Hour",
    description: "Enjoy 20% OFF on selected beverages",
    time: "Daily 5:00 PM - 7:00 PM",
    location: "DHP & The D ROOF",
    discount: "20% OFF"
  },
  {
    title: "Business Lunch",
    description: "Special lunch menu for corporate guests",
    time: "Monday - Friday 12:00 PM - 3:00 PM",
    location: "Butterfly Cafe",
    discount: "Special Pricing"
  },
  {
    title: "Weekend Brunch",
    description: "Extended brunch menu with live cooking stations",
    time: "Friday & Saturday 10:00 AM - 3:00 PM",
    location: "The D ROOF",
    discount: "Premium Experience"
  }
];

const Dining = () => {
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
            backgroundImage: `url('https://donatellodubai.com/wp-content/uploads/2022/07/125.jpg')`
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
                ★ ★ ★ ★ ★ Culinary Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                RESTAURANTS
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                & Bars
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Indulge in exceptional dining with stunning Dubai skyline views
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Make Reservation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +971 4 340 9040
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <Badge variant="secondary" className="bg-neon/20 text-neon border-neon/30">
                20% OFF F&B for In-House Guests
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              WORLD-CLASS DINING
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Culinary 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From rooftop dining with iconic skyline views to intimate café moments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={restaurant.id} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Restaurant Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <Badge className={cn(
                      "absolute top-4 left-4 text-white border-0",
                      restaurant.tier === "premium" ? "bg-gradient-to-r from-neon to-neon-glow" :
                      restaurant.tier === "classic" ? "bg-gradient-to-r from-secondary to-secondary/80" :
                      "bg-muted/80"
                    )}>
                      {restaurant.tier === "premium" && <Crown className="w-3 h-3 mr-1" />}
                      {restaurant.tier === "classic" && <Sparkles className="w-3 h-3 mr-1" />}
                      {restaurant.category}
                    </Badge>

                    {/* Restaurant Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <restaurant.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Restaurant Details */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-neon transition-colors">
                        {restaurant.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{restaurant.description}</p>
                      <p className="text-neon font-semibold">{restaurant.cuisine}</p>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
                      <Clock className="w-4 h-4 text-neon" />
                      <span>Open {restaurant.hours}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Star className="w-4 h-4 text-neon" />
                        Experience Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {restaurant.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-3 border-t border-border">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-border hover:border-neon hover:text-neon"
                      >
                        View Menu
                      </Button>
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground transition-all duration-300"
                      >
                        <a href={`mailto:${restaurant.reservationEmail}`}>
                          Reserve Table
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              EXCLUSIVE OFFERS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Special 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Dining Deals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy exclusive dining deals and seasonal promotions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="group bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-neon-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <Badge className="bg-neon/10 text-neon border-neon/20 mb-3">
                    {offer.discount}
                  </Badge>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-neon font-semibold">
                      <Clock className="w-4 h-4" />
                      {offer.time}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {offer.location}
                    </div>
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
            Ready to Dine?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and experience exceptional cuisine in Dubai's most elegant settings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Make Reservation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;