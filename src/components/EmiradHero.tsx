import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Star, Wifi, Car, Coffee } from "lucide-react";
import grandSuiteImg from "@/assets/grand-suite.jpg";
import dRoofImg from "@/assets/d-roof.jpg";
import deluxeTripleImg from "@/assets/deluxe-triple.jpg";

const heroSlides = [
  {
    image: grandSuiteImg,
    title: { 
      en: "Genuine Hospitality Outstanding Comfort", 
      es: "Hospitalidad Genuina Comodidad Excepcional" 
    },
    subtitle: { 
      en: "Experience the perfect blend of innovative design and classic refinement", 
      es: "Experimenta la mezcla perfecta de diseño innovador y refinamiento clásico" 
    },
    description: { 
      en: "Visit the vibrant city of Dubai and experience the perfect blend of innovative design, classic refinement and personalized service that is Emirad Hotel!", 
      es: "¡Visita la vibrante ciudad de Dubai y experimenta la mezcla perfecta de diseño innovador, refinamiento clásico y servicio personalizado que es el Hotel Emirad!"
    },
    cta: { en: "Book Direct", es: "Reservar Directo" }
  },
  {
    image: dRoofImg,
    title: { 
      en: "The D ROOF Experience", 
      es: "La Experiencia D ROOF" 
    },
    subtitle: { 
      en: "Rooftop dining with spectacular city views", 
      es: "Cena en la azotea con vistas espectaculares de la ciudad" 
    },
    description: { 
      en: "Indulge in delectable food and drinks in our rooftop restaurant, and share your golden moments online with free Wi-Fi internet.", 
      es: "Disfruta de deliciosa comida y bebidas en nuestro restaurante en la azotea, y comparte tus momentos dorados en línea con internet Wi-Fi gratuito." 
    },
    cta: { en: "Explore Dining", es: "Explorar Restaurantes" }
  },
  {
    image: deluxeTripleImg,
    title: { 
      en: "Spacious Accommodations", 
      es: "Alojamientos Espaciosos" 
    },
    subtitle: { 
      en: "Choose from 132 well-appointed rooms and suites", 
      es: "Elige entre 132 habitaciones y suites bien equipadas" 
    },
    description: { 
      en: "Whether traveling for business or leisure, staying at the Emirad Hotel Dubai is sure to be more comfortable, productive and enjoyable than ever before.", 
      es: "Ya sea que viajes por negocios o placer, alojarte en el Hotel Emirad Dubai será más cómodo, productivo y agradable que nunca."
    },
    cta: { en: "View Rooms", es: "Ver Habitaciones" }
  }
];

interface EmiradHeroProps {
  language?: string;
}

export function EmiradHero({ language = "EN" }: EmiradHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = heroSlides[currentSlide];
  const lang = language.toLowerCase() as 'en' | 'es';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title[lang]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary-foreground border-primary/20 backdrop-blur-sm"
          >
            {language === "EN" ? "Al Barsha District • Dubai Metro Nearby" : "Distrito Al Barsha • Metro de Dubai Cerca"}
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              {currentContent.title[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              {currentContent.subtitle[lang]}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {currentContent.description[lang]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" variant="neon" className="min-w-[180px]">
              <Calendar className="w-5 h-5" />
              {language === "EN" ? "BOOK NOW" : "RESERVAR AHORA"}
            </Button>
            <Button size="lg" variant="outline" className="min-w-[180px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              {currentContent.cta[lang]}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-neon">132</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                {language === "EN" ? "Rooms & Suites" : "Habitaciones y Suites"}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-neon">6</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                {language === "EN" ? "Restaurants & Bars" : "Restaurantes y Bares"}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-neon">24/7</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                {language === "EN" ? "Concierge Service" : "Servicio de Conserjería"}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-neon">★★★★</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                {language === "EN" ? "Hotel Rating" : "Calificación del Hotel"}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-neon shadow-neon"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center space-y-2 text-primary-foreground/60">
            <span className="text-xs uppercase tracking-wider rotate-90 origin-center transform">
              {language === "EN" ? "Scroll" : "Desplazar"}
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Hotel Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{language === "EN" ? "Al Barsha District, Dubai" : "Distrito Al Barsha, Dubai"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4" />
                <span>{language === "EN" ? "Free WiFi" : "WiFi Gratis"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4" />
                <span>{language === "EN" ? "Free Parking" : "Estacionamiento Gratuito"}</span>
              </div>
            </div>
            <div className="text-primary-foreground/80 text-sm">
              {language === "EN" ? "Check-in: 14:00 | Check-out: 12:00" : "Check-in: 14:00 | Check-out: 12:00"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}