import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Moon, Sun, Globe, Calendar, ChevronDown, Star, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import emiradLogo from "@/assets/emirad-logo.png";

const navigationItems = [
  { label: { en: "Home", es: "Inicio" }, href: "/" },
  { label: { en: "Rooms & Suites", es: "Habitaciones y Suites" }, href: "/rooms" },
  { label: { en: "Dining", es: "Restaurantes" }, href: "/dining" },
  { label: { en: "Leisure & Fitness", es: "Ocio y Fitness" }, href: "/leisure" },
  { label: { en: "Meetings & Events", es: "Reuniones y Eventos" }, href: "/meetings" },
  { label: { en: "Promotions", es: "Promociones" }, href: "/promotions" },
  { label: { en: "Gallery", es: "Galería" }, href: "/gallery" },
  { label: { en: "Contact", es: "Contacto" }, href: "/contact" },
];

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onWhiteBackground, setOnWhiteBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Check if we're over the white booking widget section (approximately)
      const heroHeight = window.innerHeight * 0.8; // Approximate hero height
      setOnWhiteBackground(scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)]"
    )}>
      {/* Luxury accent line */}
      
      {/* Luxury accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
      
      <div className="relative max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo with luxury frame */}
          <div className="flex items-center flex-shrink-0 min-w-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-neon-glow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:border-neon/30 transition-all duration-300">
                <img 
                  src={emiradLogo} 
                  alt="Emirad Hotel Dubai" 
                  className="h-8 w-auto max-w-[140px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Luxury brand elements */}
            <div className="hidden lg:flex items-center ml-4 space-x-2">
              <div className="flex text-neon/60">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs font-light text-white/60 tracking-[0.2em] uppercase">Dubai</span>
            </div>
          </div>

          {/* Desktop Navigation with luxury styling */}
          <div className="hidden xl:flex items-center space-x-1 flex-1 justify-center max-w-5xl">
            {navigationItems.map((item, index) => (
              <div key={item.href} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "relative block px-4 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-[0.1em] whitespace-nowrap",
                    "text-white/80 hover:text-white",
                    location.pathname === item.href && "text-white"
                  )}
                >
                  <span className="relative z-10">
                    {item.label[language.toLowerCase() as 'en' | 'es']}
                  </span>
                  
                  {/* Luxury hover background */}
                  <div className={cn(
                    "absolute inset-0 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100",
                    "bg-white/5"
                  )}></div>
                  
                  {/* Enhanced underline effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                  
                  {/* Active state indicator */}
                  {location.pathname === item.href && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent scale-x-100"></div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Premium Controls */}
          <div className="flex items-center space-x-6">
            {/* Language Toggle with luxury styling */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={cn(
                "hidden sm:flex items-center space-x-2 backdrop-blur-md border rounded-xl px-4 py-2 transition-all duration-300",
                "bg-white/10 border-white/20 hover:border-white/40 text-white hover:bg-white/15"
              )}
            >
              <Globe className="w-4 h-4 text-neon" />
              <span className="text-sm font-medium tracking-wide">{language}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Button>

            {/* Premium Theme Toggle */}
            <div className={cn(
              "hidden sm:flex items-center space-x-3 backdrop-blur-md border rounded-xl px-4 py-2",
              "bg-white/10 border-white/20"
            )}>
              <Sun className="w-4 h-4 text-white/60" />
              <Switch 
                checked={isDark} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-neon"
              />
              <Moon className="w-4 h-4 text-white/60" />
            </div>

            {/* Luxury Book Now Button */}
            <Button 
              className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground font-bold px-8 py-3 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_-12px_rgba(147,126,39,0.6)] border border-neon/30 hover:border-neon/60 relative overflow-hidden group"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 animate-pulse"></div>
              
              <Crown className="w-5 h-5 relative z-10" />
              <span className="relative z-10 tracking-wide">
                {language === "EN" ? "RESERVE NOW" : "RESERVAR"}
              </span>
            </Button>

            {/* Premium Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "xl:hidden backdrop-blur-md border rounded-xl w-12 h-12 transition-all duration-300",
                    "bg-white/10 border-white/20 hover:border-white/40 text-white hover:bg-white/15"
                  )}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-black/40 backdrop-blur-2xl border-l border-white/10 text-white"
              >
                <div className="flex flex-col space-y-8 mt-12">
                  {/* Mobile header with luxury styling */}
                  <div className="flex items-center justify-center pb-6 border-b border-white/10">
                    <div className="flex text-neon">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Mobile Controls with luxury styling */}
                  <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="flex items-center space-x-3 text-white hover:text-neon"
                    >
                      <Globe className="w-5 h-5 text-neon" />
                      <span className="font-medium">{language}</span>
                    </Button>
                    
                    <div className="flex items-center space-x-3">
                      <Sun className="w-4 h-4 text-white/60" />
                      <Switch 
                        checked={isDark} 
                        onCheckedChange={toggleTheme}
                        className="data-[state=checked]:bg-neon"
                      />
                      <Moon className="w-4 h-4 text-white/60" />
                    </div>
                  </div>

                  {/* Mobile Navigation with luxury styling */}
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item, index) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative block p-4 text-lg font-medium text-white/80 hover:text-white transition-all duration-300 uppercase tracking-[0.1em] bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20"
                      >
                        <span className="relative z-10">
                          {item.label[language.toLowerCase() as 'en' | 'es']}
                        </span>
                        <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-neon to-neon-glow group-hover:w-8 -translate-y-1/2 transition-all duration-500"></div>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Luxury CTA */}
                  <Button 
                    className="w-full bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground font-bold py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-neon/30 hover:border-neon/60 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
                    <Crown className="w-6 h-6 mr-3 relative z-10" />
                    <span className="relative z-10 text-lg tracking-wide">
                      {language === "EN" ? "RESERVE YOUR STAY" : "RESERVA TU ESTANCIA"}
                    </span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}