import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Utensils, Coffee, Wine, Users } from "lucide-react";

const restaurants = [
  {
    id: "d-roof",
    title: "The D ROOF",
    category: "Rooftop Dining",
    description: "Located at the Rooftop level of the Donatello Hotel in Al Barsha, Dubai, The D Roof offers you the fun and frolic with a wide selection of beverages. Unwind in the sunshine or dine beneath the moonlit sky on elevated platforms overlooking the glistening pool and a view of the Dubai skyline with iconic landmarks – Burj Al Arab and Burj Khalifa. Take a break and chill with a variety of shisha flavours. The D Roof sets a high mood for any occasion!",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/125.jpg",
    hours: "Open from 12:00 PM to 3:00 AM",
    cuisine: "International Cuisine & Beverages",
    highlights: ["Dubai Skyline Views", "Burj Al Arab & Burj Khalifa Views", "Shisha Varieties", "Pool Overlooking Terrace"],
    icon: Utensils,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com"
  },
  {
    id: "butterfly-cafe",
    title: "Butterfly Cafe",
    category: "All-Day Dining",
    description: "Start your day with an energizing breakfast buffet before heading out for your meetings or sightseeing trips, and indulge in a wide variety of mouth-watering starters to irresistible main course dishes for lunch or dinner in our all-day-dining restaurant. Serving international cuisine, ala carte or buffet, our chefs take great care in selecting the best quality ingredients in preparing delectable dishes for you to enjoy.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/08/Butterfly-4.jpg",
    hours: "Open from 06:00 AM to 11:00 PM",
    cuisine: "International Cuisine",
    highlights: ["Breakfast Buffet", "International Cuisine", "Ala Carte & Buffet", "Quality Ingredients"],
    icon: Utensils,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com"
  },
  {
    id: "lobby-lounge",
    title: "Lobby Lounge",
    category: "Café & Lounge",
    description: "A comfortable seating area beneath a bright hotel atrium view, this lobby lounge is the perfect place to meet up for business travellers and a welcome rest point as you return from exploring the city. Enjoy the international branded coffee comes with different flavors, sandwiches, pastries, chocolates, tea, juices and mocktails for dine-in or take-away.",
    image: "https://donatellodubai.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-12-at-11.12.33-AM.jpeg",
    hours: "Open from 9:00 AM to 10:00 PM",
    cuisine: "Coffee, Pastries & Light Meals",
    highlights: ["International Coffee", "Business Friendly", "Pastries & Chocolates", "Dine-in & Take-away"],
    icon: Coffee,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com"
  },
  {
    id: "nexa-lounge",
    title: "Nexa Lounge",
    category: "Bar & Nightclub",
    description: "Nexa Lounge, a premier bar and nightclub, offers an unforgettable nightlife experience. With its vibrant atmosphere, world-class DJs, and captivating ambiance, Nexa Lounge offers an electrifying night out. Sip on expertly crafted cocktails, dance to the latest beats, and enjoy the company of a diverse and lively crowd. Immerse yourself in a world of pulsating beats, stylish ambiance, and top-notch entertainment.",
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/71.jpg",
    hours: "Open from 12:00 PM to 3:00 AM",
    cuisine: "Cocktails & Entertainment",
    highlights: ["World-Class DJs", "Expert Cocktails", "Vibrant Atmosphere", "Top-notch Entertainment"],
    icon: Wine,
    reservationEmail: "fnbmanager@donatello-hoteldubai.com"
  }
];

const specialOffers = [
  {
    title: "Happy Hour",
    description: "Enjoy 20% OFF on selected beverages",
    time: "Daily 5:00 PM - 7:00 PM",
    location: "DHP & The D ROOF"
  },
  {
    title: "Business Lunch",
    description: "Special lunch menu for corporate guests",
    time: "Monday - Friday 12:00 PM - 3:00 PM",
    location: "Coffee Shop"
  },
  {
    title: "Weekend Brunch",
    description: "Extended brunch menu with live cooking stations",
    time: "Friday & Saturday 10:00 AM - 3:00 PM",
    location: "The D ROOF"
  }
];

const Dining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-donatello-gold/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Restaurants & <span className="text-donatello-gold">Bars</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Indulge in delectable food and drinks in our restaurants & bars. Experience rooftop dining 
              with stunning Dubai skyline views featuring Burj Al Arab and Burj Khalifa, or enjoy the 
              authentic British pub atmosphere at DHP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="neon">
                <a href="tel:+97143409040">Reservations: +971 4 340 9040</a>
              </Button>
              <Badge variant="secondary" className="bg-donatello-gold/20 text-donatello-gold">
                20% OFF F&B for In-House Guests
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Restaurant Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-donatello-gold text-white">
                      {restaurant.category}
                    </Badge>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <restaurant.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Restaurant Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.title}</h3>
                      <p className="text-muted-foreground mb-3">{restaurant.description}</p>
                      <p className="text-sm font-semibold text-donatello-gold">{restaurant.cuisine}</p>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {restaurant.hours}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {restaurant.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-donatello-gold rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Menu
                      </Button>
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 bg-donatello-gold hover:bg-donatello-gold/90 text-white"
                      >
                        <a href={`mailto:${restaurant.reservationEmail || 'fnbmanager@donatello-hoteldubai.com'}`}>
                          Make Reservation
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special <span className="text-donatello-gold">Offers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Enjoy exclusive dining deals and promotions at our restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{offer.title}</h3>
                  <p className="text-muted-foreground">{offer.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-donatello-gold font-semibold">
                      <Clock className="w-4 h-4" />
                      {offer.time}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {offer.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Dine?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Make a reservation at any of our restaurants or contact us for special dining arrangements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-donatello-gold hover:bg-donatello-gold/90 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call +971 4 340 9040
            </Button>
            <Button size="lg" variant="outline">
              Email Reservations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;