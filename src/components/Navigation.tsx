import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Moon, Sun, Globe, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Our Property", href: "#property" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Wellness", href: "#wellness" },
  { label: "Amenities", href: "#amenities" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-neon-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Urban Sparkle
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-neon transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* More dropdown - simplified for now */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-neon transition-colors">
                More
              </button>
            </div>
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
            <Button variant="neon" size="sm" className="hidden sm:flex">
              <Calendar className="w-4 h-4" />
              Book Now
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
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
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-neon transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <Button variant="neon" size="lg" className="w-full">
                    <Calendar className="w-5 h-5" />
                    Book Your Stay
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