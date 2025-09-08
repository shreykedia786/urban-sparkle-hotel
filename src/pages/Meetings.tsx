import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Phone, 
  Mail, 
  Users, 
  Projector, 
  Wifi, 
  Coffee, 
  Calendar, 
  MapPin,
  Star,
  Crown,
  CheckCircle,
  MessageSquare,
  Building2,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const meetingRooms = [
  {
    name: "Meeting Room 1",
    size: "48 sq. m",
    capacity: {
      uShape: 12,
      boardRoom: 10,
      classRoom: 12,
      theater: 35,
      cabaret: 18,
      banquet: 24
    },
    tier: "executive"
  },
  {
    name: "Meeting Room 2", 
    size: "53 sq. m",
    capacity: {
      uShape: 20,
      boardRoom: 16,
      classRoom: 24,
      theater: 50,
      cabaret: 24,
      banquet: 32
    },
    tier: "premium"
  }
];

const facilities = [
  {
    title: "Premium Meeting Rooms",
    description: "Meeting rooms with natural daylight and customizable setup as per your specifications. Standard amenities include office stationery, flip chart with markers, mineral water and assorted candies.",
    icon: Users,
    features: ["Natural Daylight", "Flexible Layouts", "Office Stationery", "Flip Charts", "Mineral Water", "Candy Service"]
  },
  {
    title: "Audio Visual Technology",
    description: "Complimentary usage of state-of-the-art conference equipment including ceiling-mounted projection screens, wireless microphones, and high-speed internet connection.",
    icon: Projector,
    features: ["HD Projectors", "Wireless Microphones", "High-Speed WiFi", "Ceiling Screens", "Sound System", "Video Conferencing"]
  },
  {
    title: "Catering Services",
    description: "Comprehensive food and beverage services including coffee breaks, international lunch buffets, dinner options, and customizable catering menus tailored to your event.",
    icon: Coffee,
    features: ["Coffee Breaks", "International Buffets", "Custom Menus", "Dietary Options", "Premium Service", "All-Day Catering"]
  }
];

const eventTypes = [
  { type: "Boardroom Meetings", icon: Users, description: "Executive-level discussions in professional settings" },
  { type: "Product Launches", icon: Award, description: "Impactful presentations for new products and services" },
  { type: "Corporate Trainings", icon: Building2, description: "Educational sessions and skill development programs" },
  { type: "Business Conferences", icon: Projector, description: "Large-scale corporate events and seminars" },
  { type: "Team Building Events", icon: Users, description: "Collaborative activities to strengthen team dynamics" },
  { type: "Intimate Gatherings", icon: Coffee, description: "Small-scale networking and relationship building events" }
];

const Meetings = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://donatellodubai.com/wp-content/uploads/2022/07/img12.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon rounded-full animate-pulse opacity-50" />
        
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon/20 backdrop-blur-sm rounded-full text-neon text-sm font-medium border border-neon/30">
                ★ ★ ★ ★ ★ Business Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                MEETINGS
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                & Events
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Professional venues for productive meetings and successful events
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Meeting Room
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +971 4 340 9040
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              PROFESSIONAL VENUES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Event 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Host successful business events with our comprehensive meeting facilities and professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="group bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <event.icon className="w-8 h-8 text-neon-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{event.type}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Rooms Capacity */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              FLEXIBLE SPACES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meeting Room Capacities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Versatile seating arrangements to accommodate your specific requirements
            </p>
          </div>
          
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold text-foreground">Room</TableHead>
                    <TableHead className="font-bold text-foreground">Size</TableHead>
                    <TableHead className="font-bold text-foreground">U-Shape</TableHead>
                    <TableHead className="font-bold text-foreground">Board Room</TableHead>
                    <TableHead className="font-bold text-foreground">Class Room</TableHead>
                    <TableHead className="font-bold text-foreground">Theater</TableHead>
                    <TableHead className="font-bold text-foreground">Cabaret</TableHead>
                    <TableHead className="font-bold text-foreground">Banquet</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {meetingRooms.map((room, index) => (
                    <TableRow key={index} className="hover:bg-muted/30">
                      <TableCell className="font-medium text-foreground flex items-center gap-2">
                        {room.tier === "premium" && <Crown className="w-4 h-4 text-neon" />}
                        {room.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{room.size}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.uShape}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.boardRoom}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.classRoom}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.theater}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.cabaret}</TableCell>
                      <TableCell className="text-center font-medium">{room.capacity.banquet}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              COMPREHENSIVE SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conference Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for a seamless and successful business event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-8 h-8 text-neon-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{facility.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-neon" />
                      Included Services
                    </h4>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
                PROFESSIONAL EXCELLENCE
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Where Business Meets Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Emirad Hotel is the perfect location for boardroom meetings, product launches, corporate trainings, and intimate gatherings. Our modular seating arrangements in rooms with natural daylight, coupled with professional service and exceptional catering, ensure every event is a success.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-neon mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Max Capacity</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-neon mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Meeting Rooms</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-neon mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Setup Styles</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-neon mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://donatellodubai.com/wp-content/uploads/2022/07/img13.jpg" 
                  alt="Meeting Room Setup"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Executive Meeting Room</h4>
                  <p className="text-sm text-white/80">Professional boardroom setup</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://donatellodubai.com/wp-content/uploads/2022/07/img14.jpg" 
                  alt="Conference Facility"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Conference Hall</h4>
                  <p className="text-sm text-white/80">Theater-style presentations</p>
                </div>
              </div>
            </div>
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
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our events team for availability and customized packages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Submit Inquiry
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+971 4 340 9040</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>reservations@emiraddubai.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meetings;