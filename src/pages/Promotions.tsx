import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Calendar, Gift, Percent, Star } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      title: "Cocktail Promotion",
      description: "Enjoy special cocktail offers at our premium bars and lounges",
      image: "https://donatellodubai.com/wp-content/uploads/2025/03/Coctail-Promotion.png",
      type: "Food & Beverage",
      status: "Limited Time",
      details: "Experience our signature cocktails at special prices during happy hours"
    },
    {
      title: "Special Transfer Rates", 
      description: "Avail our transfers during your stay with special rates",
      image: "https://donatellodubai.com/wp-content/uploads/2022/11/Yam1-2.jpeg",
      type: "Transportation",
      status: "Available",
      details: "Message or call our reception to know more about our transfer services"
    },
    {
      title: "Early Bird Booking",
      description: "Book 30 days in advance and save up to 25% on your stay",
      type: "Accommodation",
      status: "Year Round",
      details: "Plan ahead and enjoy significant savings on our luxury rooms and suites"
    },
    {
      title: "Extended Stay Package",
      description: "Stay 3 nights or more and enjoy complimentary benefits",
      type: "Accommodation", 
      status: "Available",
      details: "Includes complimentary breakfast, late checkout, and spa credit"
    },
    {
      title: "Business Traveler Special",
      description: "Exclusive rates for corporate guests and business travelers",
      type: "Corporate",
      status: "Available",
      details: "Includes high-speed WiFi, meeting room access, and business center services"
    },
    {
      title: "Weekend Getaway",
      description: "Perfect package for weekend leisure stays in Dubai",
      type: "Leisure",
      status: "Weekends",
      details: "Includes breakfast, pool access, and complimentary minibar"
    }
  ];

  const typeColors = {
    "Food & Beverage": "bg-orange-100 text-orange-800",
    "Transportation": "bg-blue-100 text-blue-800",
    "Accommodation": "bg-green-100 text-green-800",
    "Corporate": "bg-purple-100 text-purple-800",
    "Leisure": "bg-pink-100 text-pink-800"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://donatellodubai.com/wp-content/uploads/2025/03/Coctail-Promotion.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Offers & <span className="text-primary">Promotions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover exclusive deals and special packages for an unforgettable Dubai experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Gift className="w-4 h-4 mr-2" />
              View All Offers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Current Promotions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of our special offers designed to enhance your stay and dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {promo.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <div className="flex flex-col gap-1">
                      <Badge variant="secondary" className={typeColors[promo.type] || "bg-gray-100 text-gray-800"}>
                        {promo.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {promo.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {promo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {promo.details}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Percent className="w-8 h-8 mr-3" />
            <h3 className="text-3xl font-bold">
              Limited Time Offers
            </h3>
          </div>
          <p className="text-xl mb-8 text-white/90">
            Don't miss out on our exclusive deals and seasonal promotions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp: +971 56 408 5283
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call: +971 4 340 9050
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Loyalty Rewards Program
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our exclusive loyalty program and unlock special benefits, exclusive rates, and personalized services designed for our valued returning guests.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Exclusive member rates and early access to promotions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Complimentary room upgrades (subject to availability)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Priority reservations and late checkout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Personalized concierge services</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Join Loyalty Program
              </Button>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-foreground mb-4">Ready to Save?</h4>
                <p className="text-muted-foreground mb-6">
                  Contact us directly to learn about current promotions and customize a package that suits your needs.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Reception
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
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