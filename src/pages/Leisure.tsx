import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Dumbbell, Waves, Sparkles, Users, Calendar, Mountain } from "lucide-react";

const Leisure = () => {
  const facilities = [
    {
      title: "Health Club",
      description: "The hotel boasts of a splendid fitness center, a world class spa and a romantic roof-top swimming pool. The helpful concierge can arrange desert safaris, excursions, guided tours and more for a complete Arabic experience.",
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/health_club_img.jpg",
      icon: <Dumbbell className="w-6 h-6" />,
      features: ["State-of-the-art equipment", "Personal training", "Group classes"]
    },
    {
      title: "Legacy European Spa",
      description: "Relax your mind and rejuvenate your body with a wide selection of luxury massage and wellness treatments at the hotel spa. Treat yourself with a hammam or get glammed up with the salon treatments to feel reinvigorated and renewed.",
      image: "https://donatellodubai.com/wp-content/uploads/2023/06/Legacy-SPA-1.jpg",
      icon: <Sparkles className="w-6 h-6" />,
      hours: "10:00 AM to 01:00 AM",
      features: ["Luxury massages", "Hammam treatments", "Salon services", "Wellness therapies"]
    },
    {
      title: "Swimming Pool",
      description: "Bask in the sunlight and take a dip in our outdoor, rooftop swimming pool that is temperature-controlled for your comfort. Adults and children alike can enjoy a refreshing, fun time at the pool and indulge in delicious dishes and refreshing drinks served at the The D ROOF pool bar.",
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/swimming_pool_img.jpg",
      icon: <Waves className="w-6 h-6" />,
      hours: "07:00 AM to 07:00 PM",
      features: ["Temperature-controlled", "Rooftop location", "Pool bar service", "Family-friendly"]
    },
    {
      title: "Gym",
      description: "Keep up with your routine workouts at our well-equipped hotel gym. A variety of cardio and strength-training equipment are provided to ensure that our guests have the means to stay fit and healthy.",
      icon: <Dumbbell className="w-6 h-6" />,
      hours: "07:00 AM to 10:00 PM",
      features: ["Cardio equipment", "Strength training", "Modern facilities", "24/7 access"]
    },
    {
      title: "Concierge Services",
      description: "Discover the attractions of Dubai and explore the different Emirates with a wide selection of exciting tours and activities arranged by our helpful concierge team.",
      icon: <Users className="w-6 h-6" />,
      features: ["Desert safaris", "City tours", "Excursions", "Activity booking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://donatellodubai.com/wp-content/uploads/2022/07/health_club_img.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Leisure & Fitness
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Rejuvenate your body and mind with our world-class wellness facilities
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Book Your Experience
          </Button>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Premium Wellness Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience luxury and relaxation with our comprehensive range of leisure and fitness amenities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {facility.image && (
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {facility.icon}
                    </div>
                    <CardTitle className="text-2xl">{facility.title}</CardTitle>
                  </div>
                  {facility.hours && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{facility.hours}</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {facility.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Relax and Rejuvenate?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Book your spa treatment, reserve pool time, or schedule a personal training session
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book Spa Treatment
            </Button>
            <Button size="lg" variant="outline">
              <Mountain className="w-4 h-4 mr-2" />
              Arrange Desert Safari
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leisure;