import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell, 
  Briefcase, 
  Users, 
  Clock,
  Shield,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Walking distance to business district, shopping, and cultural attractions",
    badge: "Central",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary fiber-optic internet throughout the property",
    badge: "Free",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Secure underground parking with 24/7 valet service",
    badge: "Premium",
  },
  {
    icon: Coffee,
    title: "All-Day Dining",
    description: "Rooftop restaurant, lobby café, and 24-hour room service",
    badge: "24/7",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    description: "State-of-the-art gym and spa with city views",
    badge: "Wellness",
  },
  {
    icon: Briefcase,
    title: "Business Center",
    description: "Co-working spaces, meeting rooms, and conference facilities",
    badge: "Business",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-neon text-neon">
            <Shield className="w-4 h-4 mr-2" />
            Premium Amenities
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Everything You Need
            <span className="block text-neon">In One Place</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern amenities designed for today's travelers. Whether you're here for business or leisure, 
            we've thoughtfully curated everything to make your stay exceptional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-card hover:shadow-card transition-all duration-300 border-border/50 hover:border-neon/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-neon-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-neon mb-2">99%</div>
              <div className="text-primary-foreground/80">Guest Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-neon mb-2">5★</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-neon mb-2">50k+</div>
              <div className="text-primary-foreground/80">Happy Guests</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-neon mb-2">24/7</div>
              <div className="text-primary-foreground/80">Concierge Service</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Experience Urban Luxury?
            </h3>
            <Button variant="neon" size="lg" className="bg-neon hover:shadow-neon">
              <Clock className="w-5 h-5" />
              Book Your Stay Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}