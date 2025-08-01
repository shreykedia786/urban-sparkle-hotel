import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bed, 
  Users, 
  Maximize, 
  Wifi, 
  Coffee, 
  Car,
  ArrowRight,
  Star
} from "lucide-react";
import roomImage from "@/assets/room-cityview.jpg";

const rooms = [
  {
    id: 1,
    name: "Urban Studio",
    image: roomImage,
    price: "from $149",
    size: "28 m²",
    capacity: "1-2 guests",
    bed: "Queen bed",
    features: ["City view", "Work desk", "Mini bar", "Smart TV"],
    popular: false,
  },
  {
    id: 2,
    name: "City View Deluxe",
    image: roomImage,
    price: "from $199",
    size: "35 m²",
    capacity: "1-3 guests",
    bed: "King bed + sofa",
    features: ["Panoramic view", "Seating area", "Nespresso", "Premium WiFi"],
    popular: true,
  },
  {
    id: 3,
    name: "Executive Suite",
    image: roomImage,
    price: "from $299",
    size: "45 m²",
    capacity: "1-4 guests",
    bed: "King bed + living room",
    features: ["Corner suite", "Living area", "Kitchenette", "Balcony"],
    popular: false,
  },
];

export function RoomsPreview() {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-neon text-neon">
            <Bed className="w-4 h-4 mr-2" />
            Premium Accommodations
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Thoughtfully Designed
            <span className="block text-neon">Urban Spaces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every room tells a story of modern comfort meets urban sophistication. 
            Choose your perfect sanctuary in the heart of the city.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card 
              key={room.id}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border/50 hover:border-neon/20 overflow-hidden"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <div className="relative overflow-hidden">
                {room.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-neon text-neon-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <img
                  src={room.image}
                  alt={room.name}
                  className={`w-full h-64 object-cover transition-transform duration-500 ${
                    hoveredRoom === room.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">{room.price}</div>
                  <div className="text-sm opacity-90">per night</div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{room.name}</h3>
                  
                  {/* Room specs */}
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.bed}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities icons */}
                  <div className="flex items-center space-x-3 mb-6 text-muted-foreground">
                    <Wifi className="w-5 h-5" />
                    <Coffee className="w-5 h-5" />
                    <Car className="w-5 h-5" />
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-neon group-hover:text-neon-foreground group-hover:border-neon"
                  >
                    Book This Room
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="neon" size="lg">
            <Bed className="w-5 h-5" />
            View All Rooms & Suites
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}