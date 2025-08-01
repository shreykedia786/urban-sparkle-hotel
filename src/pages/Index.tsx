import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { DonatelloOffers } from "@/components/DonatelloOffers";
import { BookingWidget } from "@/components/BookingWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Phone, Wifi, Car, Users, Shield, Building2, Utensils, Waves, Heart, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Booking */}
      <section className="relative min-h-screen bg-gradient-to-br from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://donatellodubai.com/wp-content/uploads/2024/12/donatello-logo-Copy.png')"
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Donatello Hotel Dubai
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of innovative design, classic refinement and personalized service
            </p>
          </div>
        </div>
        
        {/* Booking Widget Overlay */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="book-form-home" id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" style={{height:'200px', minHeight: '200px'}}>
            <iframe 
              srcDoc={`<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Booking Engine Widget</title>
    <link href='https://ibe.rategain.com/widget/index.css' rel='stylesheet'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;padding:0;overflow:hidden;">            
    <div data-brandID='51252208-2987-4e7b-a5bc-faa6c7e9d739' data-chainID='fcae71fb-0983-4ac8-b48c-f4ce8ea72d05' data-backgroundprimarycolor='#17202B' data-backgroundsecondarycolor='#17202B' data-widgetFontColor='null' data-widgetSearchFontColorButton='null' data-widgetSearchColorButton='#9b7929' data-widgetSearchFontColorHoverstate='null' data-widgetSearchColorHoverState='#7e6428' id='rg-booking-widget'>
      <script src='https://ibe.rategain.com/widget/index.js'></script>
    </div>
  </body>
</html>`}
              width="100%" 
              height="200"
              style={{
                border: 'none', 
                overflow: 'hidden', 
                minHeight: '200px',
                display: 'block',
                backgroundColor: 'transparent'
              }} 
              id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            />
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <DonatelloOffers language={language} />

      {/* Hotel Description */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Genuine <span className="text-donatello-gold">Hospitality</span><br />
              Outstanding <span className="text-donatello-gold">Comfort</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Visit the vibrant city of Dubai and experience the perfect blend of innovative design, classic refinement and personalized service that is Donatello Hotel!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Situated in the bustling Al Barsha district, stay close to popular destinations, attractions, and business areas with the Dubai Metro nearby. Choose from 132 well-appointed and spacious rooms that offer you the flexibility to work and comfort to rest. Indulge in delectable food and drinks in our six restaurants & bars, and share your golden moments online with free Wi-Fi internet. Get relaxed and rejuvenated in the hotel spa then take a dip in the rooftop pool and keep in shape at our fitness center.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8">
              We look forward to welcoming you to your home away from home: Donatello Hotel Dubai!
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src="https://donatellodubai.com/wp-content/uploads/2024/12/donatello-logo-Copy.png" 
                alt="Donatello Hotel Dubai Logo" 
                className="h-16"
              />
              <div className="text-left">
                <h6 className="text-sm font-semibold text-muted-foreground mb-1">Reservation</h6>
                <a href="tel:+97143409040" className="text-donatello-gold text-xl font-bold hover:underline">
                  +971 4 340 9040
                </a>
              </div>
            </div>
          </div>

          {/* Featured Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <img 
                src="https://donatellodubai.com/wp-content/uploads/2022/08/img1.jpg" 
                alt="Grand Suite at Donatello Hotel" 
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Grand Suite at Donatello Hotel</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://donatellodubai.com/wp-content/uploads/2022/07/img2.jpg" 
                alt="The D ROOF" 
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">The D ROOF</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://donatellodubai.com/wp-content/uploads/elementor/thumbs/Deluxe-triple-room-qgikb00f97d580iounvw2msp6ytii4o36nl1ji1vtw.jpg" 
                alt="Deluxe Triple Rooms" 
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Deluxe Triple Rooms</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business and Leisure CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Whether traveling for business or leisure, staying at the Donatello Hotel Dubai is sure to be more comfortable, productive and enjoyable than ever before.
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Rooms are equipped with deluxe features that are perfect for both short & long-term stays.
          </p>
          <p className="text-sm text-muted-foreground">
            Check in time 14:00 hrs &nbsp;|&nbsp; Check out time 12:00 hrs
          </p>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore our Accommodation and Dining options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Executive Suites",
                image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-suit.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=EXSK"
              },
              {
                title: "Grand Suites", 
                image: "https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=GRSK"
              },
              {
                title: "Deluxe Triple Room",
                image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Deluxe-Triple-Room.jpg", 
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=DLX3"
              },
              {
                title: "Executive Family Suites",
                image: "https://donatellodubai.com/wp-content/uploads/2022/11/Home-Exe-Family-Suite.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=EXSF"
              },
              {
                title: "Deluxe Room – Twin",
                image: "https://donatellodubai.com/ar/wp-content/uploads/2022/07/twin-room.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=DLXT"
              },
              {
                title: "Deluxe Room – King", 
                image: "https://donatellodubai.com/wp-content/uploads/2022/07/king-room.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=DLXK"
              },
              {
                title: "Executive Room",
                image: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-room.jpg",
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=EXEK"
              },
              {
                title: "Junior Suites",
                image: "https://donatellodubai.com/wp-content/uploads/2022/07/junior-suits.jpg", 
                link: "https://reservations.donatellodubai.com/reservation?propCode=UI-0025219&roomCode=JRSK"
              }
            ].map((room, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-3">{room.title}</h3>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={room.link} target="_blank" rel="noopener noreferrer">
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

      {/* Hotel Amenities */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hotel Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Shield, title: "Sustainability", link: "https://donatellodubai.com/wp-content/uploads/2022/08/Sustainability.jpg" },
              { icon: Utensils, title: "Restaurants", link: "/dining" },
              { icon: Waves, title: "Outdoor Pool", link: "/leisure#swmng-poop" },
              { icon: Heart, title: "Healthcare & Spa", link: "/leisure" },
              { icon: Wifi, title: "Free Wi-Fi", link: null },
              { icon: Users, title: "Meeting & Events", link: "/meetings" },
              { icon: Car, title: "Parking", link: null },
              { icon: Coffee, title: "Concierge Services", link: null },
              { icon: Building2, title: "Business Center", link: null },
              { icon: Shield, title: "Smoking & Non-Smoking Rooms", link: null }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                {amenity.link ? (
                  amenity.link.startsWith('/') ? (
                    <Link to={amenity.link} className="block">
                      <amenity.icon className="w-12 h-12 mx-auto mb-3 text-donatello-gold group-hover:scale-110 transition-transform" />
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-donatello-gold transition-colors">
                        {amenity.title}
                      </h3>
                    </Link>
                  ) : (
                    <a href={amenity.link} target="_blank" rel="noopener noreferrer" className="block">
                      <amenity.icon className="w-12 h-12 mx-auto mb-3 text-donatello-gold group-hover:scale-110 transition-transform" />
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-donatello-gold transition-colors">
                        {amenity.title}
                      </h3>
                    </a>
                  )
                ) : (
                  <div className="block">
                    <amenity.icon className="w-12 h-12 mx-auto mb-3 text-donatello-gold" />
                    <h3 className="text-sm font-semibold text-foreground">{amenity.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Happy Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Excelente servicio,buen hotel, SURESH muy buen anfitrión we aré from maxicana he came un this hotel very Good hotel and big AND clean and good was so dilliciaud wey Will recomendar yo te friendo un pues thanks Suresh.",
                name: "Gonzalo Alberto P"
              },
              {
                text: "It's a good place for drinks and food quite reasonable. It's great environment with friends and family. The food is decent and drinks are mostly in offer with great service. They take care of personal needs and great value for money. Would advice you visit",
                name: "Shivaji D"
              },
              {
                text: "حلو الاكل وحلو السيرفس 👍🏻 Very nice prown tikka i came with my friends here i like this hotel and pub here in DHP staff always helpfull and visiting this place next we will come in The D ROOF thanks suresh always best service",
                name: "Turki Alotibi"
              },
              {
                text: "Very excellent service. Thank you mr. Suresh for your good and professional services, and welcoming !!! I liked the food, the beans, scrambled eggs, apple juice and tea. Keep it up and be blessed!!!",
                name: "Zephline M"
              },
              {
                text: "Service was excellent food was amazing suresh was friendly.beer was fresh.any way need more dessert in lunch buffet.lovely staff best place to relax and to have pint of beer.so cool and chill place…..",
                name: "Danu D"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
