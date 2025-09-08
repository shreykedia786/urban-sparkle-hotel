import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Plane,
  Car,
  Train,
  MessageCircle,
  Send,
  ChevronRight,
  Star,
  Users,
  Calendar,
  Heart
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/lobby-interior.jpg')"
            }}
          />
          
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
          
          {/* Luxury floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-neon/10 to-neon-glow/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-neon-glow/10 to-neon/20 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon/10 rounded-full blur-lg animate-pulse"></div>
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Luxury badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/20 backdrop-blur-md border border-neon/20 rounded-full mb-8">
              <Star className="w-4 h-4 text-neon" />
              <span className="text-white text-sm font-medium">5-Star Luxury Service</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent leading-tight">
              Contact Our
              <span className="block text-neon">Concierge Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Available 24/7 to create exceptional experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Reception
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Al Barsha, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-24 relative">
          {/* Luxury background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 text-neon rounded-full text-sm font-medium">
                    <Heart className="w-4 h-4" />
                    Premium Service
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                    Get in <span className="text-neon">Touch</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Experience the perfect blend of innovative design, relaxing inspiration and gracious hospitality that is Emirad Hotel Dubai!
                  </p>
                </div>
                
                {/* Quick Contact Actions */}
                <div className="grid gap-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-neon/30">
                    <CardContent className="p-6">
                      <a href="tel:+97143409040" className="flex items-center">
                        <div className="p-4 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                          <Phone className="w-6 h-6 text-neon" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">Call Reception</h3>
                          <p className="text-muted-foreground font-medium">+971 4 340 9040</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-neon/30">
                    <CardContent className="p-6">
                      <a href="mailto:info@emirad-hoteldubai.com" className="flex items-center">
                        <div className="p-4 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                          <Mail className="w-6 h-6 text-neon" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">Email Us</h3>
                          <p className="text-muted-foreground font-medium">info@emirad-hoteldubai.com</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </div>

                {/* Department Contacts */}
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Users className="w-6 h-6 text-neon" />
                      Department Contacts
                    </h3>
                    <div className="space-y-6">
                      {[
                        { title: "Reservations", phone: "+971 4 314 6810", email: "reservations@emirad-hoteldubai.com" },
                        { title: "Sales & Marketing", phone: "+971 504 740 622", email: "sales@emirad-hoteldubai.com" },
                        { title: "F&B Services", phone: "+974 05 0481 6822", email: "asstfnbmanager@emirad-hoteldubai.com" },
                        { title: "Lost & Found", phone: "+971 4 340 6760", email: "info@emirad-hoteldubai.com" }
                      ].map((dept, index) => (
                        <div key={index} className="border-l-4 border-neon pl-6 py-2">
                          <h4 className="font-semibold text-foreground text-lg">{dept.title}</h4>
                          <p className="text-muted-foreground">Tel: {dept.phone}</p>
                          <p className="text-muted-foreground">Email: {dept.email}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="space-y-8">
                <Card className="border-border/50 shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-4 mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 text-neon rounded-full text-sm font-medium">
                        <Send className="w-4 h-4" />
                        Message Us
                      </div>
                      <h3 className="text-3xl font-semibold text-foreground">Send us a Message</h3>
                      <p className="text-muted-foreground">Share your inquiry and we'll respond within 24 hours</p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            className="h-12 border-border/50 focus:border-neon focus:ring-neon/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Your last name"
                            className="h-12 border-border/50 focus:border-neon focus:ring-neon/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="h-12 border-border/50 focus:border-neon focus:ring-neon/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="+971 XXX XXX XXX"
                          className="h-12 border-border/50 focus:border-neon focus:ring-neon/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                        <Select>
                          <SelectTrigger className="h-12 border-border/50 focus:border-neon focus:ring-neon/20">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reservation">Room Reservation</SelectItem>
                            <SelectItem value="group">Group Booking</SelectItem>
                            <SelectItem value="dining">Dining Reservation</SelectItem>
                            <SelectItem value="events">Events & Meetings</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Please share your message or inquiry..."
                          className="border-border/50 focus:border-neon focus:ring-neon/20 resize-none"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* WhatsApp Contact */}
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-4 bg-green-100 dark:bg-green-800/30 rounded-2xl mr-4">
                        <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200 text-lg">Start a WhatsApp Chat</h4>
                        <p className="text-green-600 dark:text-green-300">Get instant assistance from our team</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 text-neon rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Prime Location
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-neon">Location</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Emirad Hotel is a 5-minute walk to/from the Mall of the Emirates & Ski Dubai. 
                The Mall of Emirates Metro Stop is less than 450 metres from the hotel, and the Mashreq Metro Station is just 200 metres away.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-neon" />
                  Getting Here
                </h3>
                <div className="grid gap-6">
                  {[
                    { icon: MapPin, title: "Hotel Address", desc: "Al Barsha 1, Dubai, United Arab Emirates" },
                    { icon: Train, title: "Metro Access", desc: "Mall of Emirates Metro (450m) • Mashreq Metro (200m)" },
                    { icon: Car, title: "By Car", desc: "Free valet parking available for guests" },
                    { icon: Plane, title: "From Airport", desc: "25 minutes from Dubai International Airport" }
                  ].map((item, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="p-3 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5 text-neon" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-neon/20 to-neon-glow/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-10 h-10 text-neon" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h4>
                      <p className="text-muted-foreground">Google Maps integration coming soon</p>
                      <Button 
                        variant="outline" 
                        className="mt-4 border-neon/30 text-neon hover:bg-neon/10"
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}