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

const footerSections = [
  {
    title: "Hotel",
    links: [
      { label: "Our Property", href: "/property" },
      { label: "Rooms & Suites", href: "/rooms" },
      { label: "Amenities", href: "/amenities" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Dining", href: "/dining" },
      { label: "Wellness & Spa", href: "/wellness" },
      { label: "Local Experiences", href: "/experiences" },
      { label: "Events & Meetings", href: "/events" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Concierge", href: "/concierge" },
      { label: "Business Center", href: "/business" },
      { label: "Valet Parking", href: "/parking" },
      { label: "Transportation", href: "/transport" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Press & Awards", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Sustainability", href: "/sustainability" },
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
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-foreground" />
                </div>
                <span className="font-display font-bold text-2xl">Urban Sparkle</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed">
                Where urban energy meets refined comfort. Experience the pulse of the city 
                from your sophisticated sanctuary in the heart of downtown.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neon flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    123 Urban Avenue, Downtown District, NY 10001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-neon flex-shrink-0" />
                  <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-neon flex-shrink-0" />
                  <span className="text-primary-foreground/80">hello@urbansparkle.com</span>
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
                Get exclusive offers and city insights delivered to your inbox.
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
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-neon">
                    <Linkedin className="w-5 h-5" />
                  </Button>
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
              <span>© 2024 Urban Sparkle Hotel. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#privacy" className="hover:text-neon transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-neon transition-colors">Terms of Service</a>
                <a href="#accessibility" className="hover:text-neon transition-colors">Accessibility</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <Globe className="w-4 h-4" />
              <span>Available in English & Español</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}