import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MessageCircle,
  Send
} from "lucide-react";
import donatelloLogo from "@/assets/donatello-logo.png";

const footerSections = [
  {
    title: "Hotel",
    links: [
      { label: "Rooms & Suites", href: "/rooms" },
      { label: "Dining", href: "/dining" },
      { label: "Leisure & Fitness", href: "/leisure" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Meetings & Events", href: "/meetings" },
      { label: "Promotions", href: "/promotions" },
      { label: "Reservations", href: "tel:+97143146810" },
      { label: "Concierge Services", href: "/contact" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Business Center", href: "/contact" },
      { label: "Swimming Pool", href: "/leisure" },
      { label: "Healthcare & Spa", href: "/leisure" },
      { label: "Free WiFi", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms & Conditions", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={donatelloLogo} 
                  alt="Donatello Hotel Dubai" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-primary-foreground">
                    DONATELLO
                  </span>
                  <span className="text-sm text-primary-foreground/70 -mt-1">
                    Hotel Dubai
                  </span>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed">
                Experience the perfect blend of innovative design, relaxing inspiration and gracious hospitality that is Donatello Hotel Dubai!
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-neon flex-shrink-0 mt-1" />
                  <div className="text-primary-foreground/80">
                    <p>Sheikh Zayed Road, Al Barsha 1</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-neon flex-shrink-0" />
                  <a href="tel:+97143409040" className="text-primary-foreground/80 hover:text-neon transition-colors">
                    +971 4 340 9040
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-neon flex-shrink-0" />
                  <a href="mailto:info@donatello-hoteldubai.com" className="text-primary-foreground/80 hover:text-neon transition-colors">
                    info@donatello-hoteldubai.com
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button variant="neon" size="sm" className="mt-6">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Concierge
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-primary-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-primary-foreground/70 hover:text-neon transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-primary-foreground mb-4">
                Stay Connected
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Subscribe for exclusive offers and updates from Donatello Hotel Dubai.
              </p>
              
              <div className="space-y-3">
                <div className="flex">
                  <Input
                    placeholder="Your email"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Button variant="neon" size="icon" className="ml-2 flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-xs text-primary-foreground/60">
                  By subscribing, you agree to our Privacy Policy.
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-medium text-primary-foreground mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="https://instagram.com/donatellodubai" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://facebook.com/donatellodubai" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://twitter.com/donatellodubai" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/company/donatello-hotel-dubai" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-primary-foreground/70">
                <span>© 2024 Donatello Hotel Dubai. All rights reserved.</span>
                <div className="flex space-x-4">
                  <Link to="/contact" className="hover:text-neon transition-colors">Privacy Policy</Link>
                  <Link to="/contact" className="hover:text-neon transition-colors">Terms of Service</Link>
                  <Link to="/contact" className="hover:text-neon transition-colors">Accessibility</Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
                <Globe className="w-4 h-4" />
                <span>Available in English & العربية</span>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}