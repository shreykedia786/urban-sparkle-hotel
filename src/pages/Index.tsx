import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { BookingWidget } from "@/components/BookingWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { 
  MapPin, 
  Star, 
  Quote, 
  ChevronRight, 
  Wifi, 
  Car, 
  Users, 
  Shield, 
  Building2, 
  Utensils, 
  Waves, 
  Heart, 
  Coffee,
  Award,
  Crown,
  Sparkles,
  Clock,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import heroHotelImage from "@/assets/hero-hotel-exterior.jpg";

const Index = () => {
  const [language, setLanguage] = useState("EN");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const luxuryFeatures = [
    { icon: Crown, title: "5-Star Service", desc: "Personalized attention to every detail" },
    { icon: Sparkles, title: "Premium Amenities", desc: "World-class facilities and services" },
    { icon: Award, title: "Award Winning", desc: "Recognized for excellence in hospitality" },
    { icon: MapPin, title: "Prime Location", desc: "Heart of Dubai's business district" }
  ];

  const accommodations = [
    {
      title: "Presidential Suite",
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg",
      size: "120 sqm",
      price: "From AED 2,500",
      features: ["City View", "Balcony", "Separate Living Area"]
    },
    {
      title: "Executive Suite", 
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-suit.jpg",
      size: "85 sqm",
      price: "From AED 1,800",
      features: ["Panoramic View", "Work Desk", "Premium Amenities"]
    },
    {
      title: "Deluxe Room",
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/king-room.jpg",
      size: "45 sqm", 
      price: "From AED 950",
      features: ["Modern Design", "Smart TV", "Mini Bar"]
    }
  ];

  const experiences = [
    {
      title: "D ROOF Skybar",
      image: "https://donatellodubai.com/wp-content/uploads/2022/07/img2.jpg",
      desc: "Rooftop dining with stunning city views"
    },
    {
      title: "Wellness Spa",
      image: "https://donatellodubai.com/wp-content/uploads/2022/08/img1.jpg", 
      desc: "Rejuvenating treatments and therapies"
    },
    {
      title: "Business Center",
      image: "https://donatellodubai.com/wp-content/uploads/elementor/thumbs/Deluxe-triple-room-qgikb00f97d580iounvw2msp6ytii4o36nl1ji1vtw.jpg",
      desc: "State-of-the-art meeting facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
        {/* Animated Background - Hotel Ambiance */}
        <div className="absolute inset-0">
          {/* Base hotel image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-fade-in"
            style={{
              backgroundImage: `url(${heroHotelImage})`
            }}
          />
          
          {/* Animated overlay effects for luxury ambiance */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-neon/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[slide-across_8s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Try to load video if available */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroHotelImage}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ zIndex: 1 }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => {
              console.log('Video error:', e);
              // Hide video if it fails to load
              e.currentTarget.style.display = 'none';
            }}
          >
            {/* Multiple video sources for best compatibility */}
            <source src="/hotel-hero-video.mp4" type="video/mp4" />
            {/* Working luxury hotel video from Internet Archive */}
            <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
            {/* Simple color gradient fallback if videos fail */}
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon rounded-full animate-pulse opacity-50" />
        
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] md:min-h-[80vh] lg:min-h-screen px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon/20 backdrop-blur-sm rounded-full text-neon text-sm font-medium border border-neon/30">
                ★ ★ ★ ★ ★ Luxury Experience
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                EMIRAD
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                Hotel Dubai
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Where luxury meets sophistication in the heart of Dubai
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Discover Luxury
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Virtual Tour
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Al Barsha, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+971 4 340 9040</span>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Overlapping Booking Widget Section */}
      <section className="relative -mt-16 md:-mt-32 z-30 pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* World-class booking widget card */}
          <div className="relative">
            {/* Luxury glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon/10 via-neon-glow/20 to-neon/10 rounded-3xl blur-2xl opacity-60"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-neon/15 via-transparent to-neon/15 rounded-3xl blur-xl"></div>
            
            {/* Main card */}
            <div className="relative bg-card/95 backdrop-blur-xl border border-border/40 rounded-3xl shadow-card overflow-visible">
              {/* Premium glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/30 to-card/10 pointer-events-none"></div>
              
              {/* Luxury accent borders */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"></div>
              
              <div className="relative z-10 p-2 sm:p-4 md:p-8 lg:p-12">
                {/* Removed duplicate title - it's now in the BookingWidget */}

                {/* Enhanced booking widget */}
                <div className="relative z-40">
                  <BookingWidget className="w-full" />
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16 mt-8 pt-8 border-t border-border/50 pb-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-neon" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">Secure Booking</div>
                      <div className="text-sm">SSL encrypted</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-neon" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">Instant Confirmation</div>
                      <div className="text-sm">Real-time booking</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-neon" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">Best Rate Guarantee</div>
                      <div className="text-sm">Price match promise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              EXCELLENCE REDEFINED
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Unparalleled 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Luxury</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every detail crafted for the discerning traveler seeking the extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryFeatures.map((feature, index) => (
              <Card key={index} className="group bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-neon-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              PREMIUM ACCOMMODATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exquisite Rooms & Suites
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in elegantly appointed spaces designed for comfort and luxury
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <Card key={index} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-neon text-neon-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {room.size}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{room.title}</h3>
                  <p className="text-neon text-xl font-bold mb-4">{room.price}</p>
                  
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Star className="w-4 h-4 text-neon" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105">
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              SIGNATURE EXPERIENCES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Curated Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80">
                  <img 
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-white/90 mb-4">{exp.desc}</p>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              GUEST TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Voices of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "An absolutely stunning hotel with impeccable service. The staff went above and beyond to make our stay memorable. The rooms are luxurious and the location is perfect.",
                name: "Sarah Mitchell",
                title: "Business Executive"
              },
              {
                text: "From the moment we arrived, we were treated like royalty. The attention to detail is extraordinary. This is what luxury hospitality should be.",
                name: "Michael Rodriguez", 
                title: "Travel Blogger"
              },
              {
                text: "Outstanding experience from start to finish. The D ROOF restaurant offers incredible views and the spa is world-class. Will definitely return.",
                name: "Emma Thompson",
                title: "Lifestyle Consultant"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border shadow-card hover:shadow-neon transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-neon mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.text}</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon text-neon" />
                    ))}
                  </div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
            Begin Your Luxury Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of hospitality in Dubai's most prestigious hotel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Your Stay
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              +971 4 340 9040
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
