import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Moon, Sun, Globe, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import donatelloLogo from "@/assets/donatello-logo.png";

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

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src={donatelloLogo} 
              alt="Donatello Hotel Dubai" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-xs xl:text-sm font-medium text-foreground hover:text-neon transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                {item.label[language.toLowerCase() as 'en' | 'es']}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language}</span>
            </Button>

            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center space-x-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <Switch checked={isDark} onCheckedChange={toggleTheme} />
              <Moon className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Book Now Button */}
            <Button 
              variant="default" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              {language === "EN" ? "BOOK NOW" : "RESERVAR"}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Controls */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="flex items-center space-x-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{language}</span>
                    </Button>
                    
                    <div className="flex items-center space-x-2">
                      <Sun className="w-4 h-4 text-muted-foreground" />
                      <Switch checked={isDark} onCheckedChange={toggleTheme} />
                      <Moon className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-neon transition-colors py-2 uppercase tracking-wide"
                      >
                        {item.label[language.toLowerCase() as 'en' | 'es']}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <Button variant="neon" size="lg" className="w-full">
                    <Calendar className="w-5 h-5" />
                    {language === "EN" ? "BOOK YOUR STAY" : "RESERVA TU ESTANCIA"}
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