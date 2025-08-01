import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Gift, 
  Users, 
  Briefcase, 
  Clock,
  ArrowRight,
  Percent
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Early Bird Special",
    description: "Book 30 days in advance and save up to 25% on your stay",
    discount: "Save 25%",
    validUntil: "Limited Time",
    icon: Calendar,
    color: "neon",
    features: ["Free WiFi", "Late checkout", "Welcome drink"],
  },
  {
    id: 2,
    title: "City Explorer Package",
    description: "Urban experience with museum passes, dining credits, and local tours",
    discount: "From $199",
    validUntil: "All Season",
    icon: Gift,
    color: "primary",
    features: ["2-night minimum", "City pass included", "$50 dining credit"],
  },
  {
    id: 3,
    title: "Business Traveler",
    description: "Perfect for corporate stays with meeting room access and express services",
    discount: "Corporate Rate",
    validUntil: "Year Round",
    icon: Briefcase,
    color: "secondary",
    features: ["Priority check-in", "Business center", "Express laundry"],
  },
];

export function OffersSection() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-neon text-neon">
            <Percent className="w-4 h-4 mr-2" />
            Exclusive Offers
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Exceptional Value
            <span className="block text-neon">For Every Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated packages designed to enhance your urban experience. 
            From spontaneous getaways to business essentials.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card 
              key={offer.id}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border/50 hover:border-neon/20 overflow-hidden relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant={offer.color === "neon" ? "default" : "secondary"}
                  className={offer.color === "neon" ? "bg-neon text-neon-foreground" : ""}
                >
                  {offer.discount}
                </Badge>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                    <offer.icon className="w-6 h-6 text-neon-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>

                  {/* Valid Until */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{offer.validUntil}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {offer.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-neon group-hover:text-neon-foreground group-hover:border-neon transition-all duration-300"
                  >
                    Book This Offer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary rounded-2xl p-8 sm:p-12">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground mb-4">
              Can't find the perfect offer?
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              Our concierge team is here to create a personalized package just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="neon" size="lg">
                <Users className="w-5 h-5" />
                Speak with Concierge
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View All Offers
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}