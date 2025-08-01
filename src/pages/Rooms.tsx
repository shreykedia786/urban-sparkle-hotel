import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Tv, Car, Coffee, Utensils, Bath, BedDouble, Users, Maximize } from "lucide-react";

const roomTypes = [
  {
    id: "deluxe-king",
    title: "Deluxe Room – King",
    subtitle: "City View • 32 sqm",
    description: "Deluxe King rooms are inviting and perfect for relaxing after a long day. Whether you're traveling on business or on leisure, you'll find everything you need for a relaxing and enjoyable stay.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/king-room.jpg",
    features: ["King Size Bed", "City View", "Free WiFi", "Mini Bar", "Safe", "32 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath],
    bookingCode: "DLXK"
  },
  {
    id: "deluxe-twin", 
    title: "Deluxe Room – Twin",
    subtitle: "City View • 32 sqm",
    description: "Deluxe Twin rooms are inviting and perfect for relaxing after a long day. Whether you're traveling on business or on leisure, you'll find everything you need for a relaxing and enjoyable stay.",
    image: "https://donatellodubai.com/ar/wp-content/uploads/2022/07/twin-room.jpg",
    features: ["Twin Beds", "City View", "Free WiFi", "Mini Bar", "Safe", "32 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath],
    bookingCode: "DLXT"
  },
  {
    id: "deluxe-triple",
    title: "Deluxe Triple Room", 
    subtitle: "City View • 40 sqm",
    description: "Deluxe Triple rooms are the perfect choice for families and groups. Equipped with three single beds, high-speed internet, work desk and minibar.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Deluxe-Triple-Room.jpg",
    features: ["Three Single Beds", "High-Speed Internet", "Work Desk", "Mini Bar", "Safe", "40 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Users],
    bookingCode: "DLX3"
  },
  {
    id: "executive-room",
    title: "Executive Room",
    subtitle: "Premium View • 35 sqm", 
    description: "Executive rooms are spacious and elegantly designed for maximum comfort. This well appointed rooms come with a separate seating area, including king beds, 42\" screen TV and fully equipped bathrooms.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-room.jpg",
    features: ["King Size Bed", "Separate Seating Area", "42\" TV", "Premium View", "Mini Bar", "35 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Utensils],
    bookingCode: "EXEK"
  },
  {
    id: "junior-suite",
    title: "Junior Suites",
    subtitle: "Spacious Suite • 45 sqm",
    description: "Combining luxury with comfort, our junior suites are well designed to offer relaxing experience perfect for all travelers. Junior Suite has a spacious living area with a coffee table, arm chair and comfortable sofa.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/junior-suits.jpg", 
    features: ["Spacious Living Area", "Coffee Table", "Arm Chair", "Comfortable Sofa", "King Size Bed", "45 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble],
    bookingCode: "JRSK"
  },
  {
    id: "executive-suite",
    title: "Executive Suites",
    subtitle: "Luxury Suite • 55 sqm",
    description: "Our executive suite offers spacious living room with luxury furniture, separate dining area, well designed bathroom with amenities and a separate bath for guest use.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-suit.jpg",
    features: ["Spacious Living Room", "Luxury Furniture", "Separate Dining", "Guest Bathroom", "Kitchenette", "55 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble, Utensils],
    bookingCode: "EXSK"
  },
  {
    id: "executive-family",
    title: "Executive Family Suites", 
    subtitle: "Family Suite • 65 sqm",
    description: "Perfect for families with children, featuring spacious accommodation with separate bedrooms and family-friendly amenities throughout.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Exe-Family-Suite.jpg",
    features: ["Separate Bedrooms", "Living Area", "Family Amenities", "Free WiFi", "Kitchenette", "65 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, Users, Utensils],
    bookingCode: "EXSF"
  },
  {
    id: "grand-suite",
    title: "Grand Suites",
    subtitle: "Presidential Suite • 85 sqm", 
    description: "Experience luxury and exclusivity in the elegantly appointed Grand Suites. Grand Suites features separate living room, in-room private Jacuzzi and marble topped bathroom.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg",
    features: ["Separate Living Room", "Private Jacuzzi", "Marble Bathroom", "Premium Service", "Full Kitchen", "85 sqm"],
    amenities: [Wifi, Tv, Coffee, Bath, BedDouble, Utensils, Maximize],
    bookingCode: "GRSK"
  }
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-donatello-gold/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooms & <span className="text-donatello-gold">Suites</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from 132 well-appointed and spacious rooms that offer you the flexibility to work and comfort to rest. 
              Each room is designed with modern amenities and elegant touches to ensure your stay is memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-sm text-muted-foreground">
                Check-in: 14:00 hrs • Check-out: 12:00 hrs
              </p>
              <Button asChild variant="neon">
                <a href="tel:+97143409040">Call +971 4 340 9040</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roomTypes.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-donatello-gold text-white">
                      {room.subtitle}
                    </Badge>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{room.title}</h3>
                      <p className="text-muted-foreground">{room.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Features:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-donatello-gold rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex gap-4 py-2">
                      {room.amenities.map((Icon, idx) => (
                        <Icon key={idx} className="w-5 h-5 text-donatello-gold" />
                      ))}
                    </div>

                    {/* Booking Button */}
                    <Button 
                      asChild 
                      className="w-full bg-donatello-gold hover:bg-donatello-gold/90 text-white"
                    >
                      <a 
                        href={`https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=${room.bookingCode}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Amenities Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Room Amenities
            </h2>
            <p className="text-lg text-muted-foreground">
              Every room at Donatello Hotel Dubai is equipped with modern amenities for your comfort
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, title: "Free Wi-Fi" },
              { icon: Tv, title: "LCD TV" },
              { icon: Coffee, title: "Mini Bar" },
              { icon: Bath, title: "Private Bathroom" },
              { icon: Car, title: "Parking" },
              { icon: BedDouble, title: "Premium Bedding" }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <amenity.icon className="w-12 h-12 mx-auto mb-3 text-donatello-gold group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-foreground">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;