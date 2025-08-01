import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
import lobbyImage from "@/assets/lobby-interior.jpg";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroImage,
      title: "Urban Sophistication",
      subtitle: "In the Heart of the City",
      description: "Experience modern luxury where urban energy meets refined comfort. Your gateway to the city's pulse.",
      cta: "Discover Our Story",
    },
    {
      image: lobbyImage,
      title: "Thoughtful Design",
      subtitle: "Every Detail Matters",
      description: "Contemporary spaces crafted for the modern traveler. Where business meets leisure seamlessly.",
      cta: "Explore Rooms",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <MapPin className="w-4 h-4 mr-2" />
            Downtown Location • Premium Experience
          </Badge>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {slides[currentSlide].title}
            <span className="block text-neon text-4xl sm:text-5xl lg:text-6xl mt-2">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="min-w-48">
              <Calendar className="w-5 h-5" />
              Book Your Stay
            </Button>
            
            <Button variant="outlineNeon" size="xl" className="min-w-48 bg-white/10 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              {slides[currentSlide].cta}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">150+</div>
              <div className="text-sm text-white/80">Modern Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">4.8</div>
              <div className="text-sm text-white/80">Guest Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">24/7</div>
              <div className="text-sm text-white/80">Concierge</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">100%</div>
              <div className="text-sm text-white/80">City Views</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-neon shadow-neon'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium rotate-90 origin-center whitespace-nowrap">
            Scroll to explore
          </span>
          <ArrowRight className="w-5 h-5 rotate-90 animate-pulse" />
        </div>
      </div>

    </section>
  );
}