import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Tv, 
  Car, 
  Coffee, 
  Utensils, 
  Bath, 
  BedDouble, 
  Users, 
  Maximize, 
  Star,
  CheckCircle,
  Crown,
  Sparkles,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const roomTypes = [
  {
    id: "deluxe-king",
    title: "Deluxe Room – King",
    subtitle: "City View • 32 sqm",
    description: "Deluxe King rooms are inviting and perfect for relaxing after a long day. Whether you're traveling on business or on leisure, you'll find everything you need for a relaxing and enjoyable stay.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/king-room.jpg",
    features: ["King Size Bed", "City View", "Free WiFi", "Mini Bar", "Safe", "32 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath],
    bookingCode: "DLXK",
    price: "From AED 450",
    category: "classic"
  },
  {
    id: "deluxe-twin", 
    title: "Deluxe Room – Twin",
    subtitle: "City View • 32 sqm",
    description: "Deluxe Twin rooms are inviting and perfect for relaxing after a long day. Whether you're traveling on business or on leisure, you'll find everything you need for a relaxing and enjoyable stay.",
    image: "https://donatellodubai.com/ar/wp-content/uploads/2022/07/twin-room.jpg",
    features: ["Twin Beds", "City View", "Free WiFi", "Mini Bar", "Safe", "32 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath],
    bookingCode: "DLXT",
    price: "From AED 420",
    category: "classic"
  },
  {
    id: "deluxe-triple",
    title: "Deluxe Triple Room", 
    subtitle: "City View • 40 sqm",
    description: "Deluxe Triple rooms are the perfect choice for families and groups. Equipped with three single beds, high-speed internet, work desk and minibar.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Deluxe-Triple-Room.jpg",
    features: ["Three Single Beds", "High-Speed Internet", "Work Desk", "Mini Bar", "Safe", "40 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Users],
    bookingCode: "DLX3",
    price: "From AED 650",
    category: "family"
  },
  {
    id: "executive-room",
    title: "Executive Room",
    subtitle: "Premium View • 35 sqm", 
    description: "Executive rooms are spacious and elegantly designed for maximum comfort. This well appointed rooms come with a separate seating area, including king beds, 42\" screen TV and fully equipped bathrooms.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-room.jpg",
    features: ["King Size Bed", "Separate Seating Area", "42\" TV", "Premium View", "Mini Bar", "35 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Utensils],
    bookingCode: "EXEK",
    price: "From AED 750",
    category: "premium"
  },
  {
    id: "junior-suite",
    title: "Junior Suites",
    subtitle: "Spacious Suite • 45 sqm",
    description: "Combining luxury with comfort, our junior suites are well designed to offer relaxing experience perfect for all travelers. Junior Suite has a spacious living area with a coffee table, arm chair and comfortable sofa.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/junior-suits.jpg", 
    features: ["Spacious Living Area", "Coffee Table", "Arm Chair", "Comfortable Sofa", "King Size Bed", "45 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble],
    bookingCode: "JRSK",
    price: "From AED 950",
    category: "suite"
  },
  {
    id: "executive-suite",
    title: "Executive Suites",
    subtitle: "Luxury Suite • 55 sqm",
    description: "Our executive suite offers spacious living room with luxury furniture, separate dining area, well designed bathroom with amenities and a separate bath for guest use.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-suit.jpg",
    features: ["Spacious Living Room", "Luxury Furniture", "Separate Dining", "Guest Bathroom", "Kitchenette", "55 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble, Utensils],
    bookingCode: "EXSK",
    price: "From AED 1,250",
    category: "suite"
  },
  {
    id: "executive-family",
    title: "Executive Family Suites", 
    subtitle: "Family Suite • 65 sqm",
    description: "Perfect for families with children, featuring spacious accommodation with separate bedrooms and family-friendly amenities throughout.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Exe-Family-Suite.jpg",
    features: ["Separate Bedrooms", "Living Area", "Family Amenities", "Free WiFi", "Kitchenette", "65 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Users, Utensils],
    bookingCode: "EXSF",
    price: "From AED 1,650",
    category: "family"
  },
  {
    id: "grand-suite",
    title: "Grand Suites",
    subtitle: "Presidential Suite • 85 sqm", 
    description: "Experience luxury and exclusivity in the elegantly appointed Grand Suites. Grand Suites features separate living room, in-room private Jacuzzi and marble topped bathroom.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg",
    features: ["Separate Living Room", "Private Jacuzzi", "Marble Bathroom", "Premium Service", "Full Kitchen", "85 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble, Utensils, Maximize],
    bookingCode: "GRSK",
    price: "From AED 2,500",
    category: "presidential"
  }
];

const categories = [
  { id: "all", label: "All Rooms", count: roomTypes.length },
  { id: "classic", label: "Classic Rooms", count: roomTypes.filter(r => r.category === "classic").length },
  { id: "premium", label: "Premium Rooms", count: roomTypes.filter(r => r.category === "premium").length },
  { id: "suite", label: "Suites", count: roomTypes.filter(r => r.category === "suite").length },
  { id: "family", label: "Family Rooms", count: roomTypes.filter(r => r.category === "family").length },
  { id: "presidential", label: "Presidential", count: roomTypes.filter(r => r.category === "presidential").length }
];

const amenitiesList = [
  { icon: Wifi, title: "Complimentary Wi-Fi", desc: "High-speed internet throughout" },
  { icon: Tv, title: "Smart Entertainment", desc: "55\" 4K TV with streaming" },
  { icon: Coffee, title: "Premium Minibar", desc: "Curated selection of beverages" },
  { icon: Bath, title: "Luxury Bathroom", desc: "Marble finishes & premium amenities" },
  { icon: Car, title: "Valet Parking", desc: "Complimentary valet service" },
  { icon: BedDouble, title: "Premium Bedding", desc: "Egyptian cotton & luxury linens" },
  { icon: Utensils, title: "24/7 Room Service", desc: "Gourmet dining to your room" },
  { icon: Crown, title: "Concierge Service", desc: "Personal assistance & recommendations" }
];

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const filteredRooms = selectedCategory === "all" 
    ? roomTypes 
    : roomTypes.filter(room => room.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Matching homepage style */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon rounded-full animate-pulse opacity-50" />
        
        <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon/20 backdrop-blur-sm rounded-full text-neon text-sm font-medium border border-neon/30">
                ★ ★ ★ ★ ★ Luxury Accommodations
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                ROOMS &
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                Suites
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Choose from 132 meticulously designed rooms and suites
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-4 h-4" />
                <span>Check-in: 14:00 • Check-out: 12:00</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+971 4 340 9040</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/95 backdrop-blur-xl border border-border/40 rounded-2xl shadow-card p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                    selectedCategory === category.id
                      ? "bg-neon text-neon-foreground shadow-neon"
                      : "bg-muted text-muted-foreground hover:bg-neon/10 hover:text-neon"
                  )}
                >
                  {category.label}
                  <span className="ml-2 opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room, index) => (
              <Card key={room.id} className="group overflow-hidden bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Room Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <Badge className={cn(
                      "absolute top-4 left-4 text-white border-0",
                      room.category === "presidential" ? "bg-gradient-to-r from-neon to-neon-glow" :
                      room.category === "suite" ? "bg-gradient-to-r from-neon/80 to-neon" :
                      room.category === "premium" ? "bg-gradient-to-r from-secondary to-secondary/80" :
                      "bg-muted/80"
                    )}>
                      {room.category === "presidential" && <Crown className="w-3 h-3 mr-1" />}
                      {room.category === "suite" && <Sparkles className="w-3 h-3 mr-1" />}
                      {room.subtitle}
                    </Badge>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-neon font-bold text-lg">{room.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">/ night</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-neon transition-colors">
                        {room.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{room.description}</p>
                    </div>

                    {/* Features Grid */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-neon" />
                        Room Features
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex gap-4 py-3 border-t border-border">
                      {room.amenities.slice(0, 6).map((Icon, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-neon" />
                        </div>
                      ))}
                      {room.amenities.length > 6 && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          +{room.amenities.length - 6} more
                        </div>
                      )}
                    </div>

                    {/* Booking Button */}
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-semibold rounded-xl py-3 text-base transition-all duration-300 hover:scale-105 hover:shadow-neon"
                    >
                      <a 
                        href={`https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=${room.bookingCode}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Reserve This Room
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Amenities Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              WORLD-CLASS AMENITIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Luxury 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Amenities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every room features premium amenities designed for the modern luxury traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenitiesList.map((amenity, index) => (
              <Card key={index} className="group bg-card border border-border shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon to-neon-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="w-8 h-8 text-neon-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.desc}</p>
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
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your perfect room at Donatello Hotel Dubai and discover unparalleled comfort
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Your Stay
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

export default Rooms;