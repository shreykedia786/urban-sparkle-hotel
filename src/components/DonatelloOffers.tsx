import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Percent, Gift, Heart, Receipt } from "lucide-react";

const offers = [
  {
    id: "book-direct",
    title: { en: "Book Direct", es: "Reserva Directa" },
    subtitle: { en: "Best Rate Guarantee", es: "Garantía de Mejor Tarifa" },
    description: { 
      en: "Book Direct online and enjoy free early check-in at 10:00 AM Free Late Check-Out till 3:00 PM avail a chance to win a complimentary upgrade to the next room category.", 
      es: "Reserva directamente en línea y disfruta de check-in temprano gratuito a las 10:00 AM Check-Out tardío gratuito hasta las 3:00 PM con oportunidad de ganar una mejora gratuita a la siguiente categoría de habitación." 
    },
    icon: Gift,
    color: "bg-gradient-to-r from-neon/20 to-neon/10",
    badge: { en: "Best Deal", es: "Mejor Oferta" },
    image: "https://donatellodubai.com/wp-content/uploads/elementor/thumbs/2-r7voaj38lslemh3ponzvmc8jxziqn8zhf5ns423xps.png"
  },
  {
    id: "f-b-discount",
    title: { en: "F & B Discount", es: "Descuento F & B" },
    subtitle: { en: "20% OFF", es: "20% DE DESCUENTO" },
    description: { 
      en: "20% OFF on selected F&B Outlets for all the in-house guests!", 
      es: "¡20% DE DESCUENTO en restaurantes seleccionados para todos los huéspedes del hotel!" 
    },
    icon: Percent,
    color: "bg-gradient-to-r from-orange-500/20 to-orange-400/10",
    badge: { en: "Limited Time", es: "Tiempo Limitado" },
    image: "https://donatellodubai.com/wp-content/uploads/2022/07/offer_1st.jpg"
  },
  {
    id: "honeymoon",
    title: { en: "Honeymoon Package", es: "Paquete Luna de Miel" },
    subtitle: { en: "Romantic Getaway", es: "Escapada Romántica" },
    description: { 
      en: "Book your Honeymoon stay with us and avail the guaranteed upgrade to the next category.", 
      es: "Reserva tu estancia de luna de miel con nosotros y obtén la mejora garantizada a la siguiente categoría." 
    },
    icon: Heart,
    color: "bg-gradient-to-r from-pink-500/20 to-rose-400/10",
    badge: { en: "Special Offer", es: "Oferta Especial" },
    image: "https://donatellodubai.com/wp-content/uploads/elementor/thumbs/Yam1-2-qhrlbrlgwzq1qhr52kp9ewgyqfn41esayk6bjx00hc.jpeg"
  },
  {
    id: "voucher",
    title: { en: "Discount Voucher", es: "Cupón de Descuento" },
    subtitle: { en: "AED 20 Off", es: "AED 20 de Descuento" },
    description: { 
      en: "Avail Discount Voucher Of AED 20 from our selected F&B outlets!", 
      es: "¡Obtén un cupón de descuento de AED 20 en nuestros restaurantes seleccionados!" 
    },
    icon: Receipt,
    color: "bg-gradient-to-r from-green-500/20 to-emerald-400/10",
    badge: { en: "At Reception", es: "En Recepción" },
    image: "https://donatellodubai.com/wp-content/uploads/2022/08/2-1.jpg"
  }
];

interface DonatelloOffersProps {
  language?: string;
}

export function DonatelloOffers({ language = "EN" }: DonatelloOffersProps) {
  const lang = language.toLowerCase() as 'en' | 'es';

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {language === "EN" ? "Featured " : ""}
            <span className="text-neon">
              {language === "EN" ? "Offers" : "Ofertas Destacadas"}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "EN" 
              ? "Discover exclusive deals and packages designed to make your stay even more memorable" 
              : "Descubre ofertas exclusivas y paquetes diseñados para hacer tu estancia aún más memorable"
            }
          </p>
          <Button variant="outline" className="mt-6">
            {language === "EN" ? "View All Offers" : "Ver Todas las Ofertas"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <Card 
              key={offer.id} 
              className={`group relative overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in ${offer.color}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-neon text-neon-foreground"
                  >
                    {offer.badge[lang]}
                  </Badge>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <offer.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {offer.title[lang]}
                    </h3>
                    <p className="text-lg text-neon font-semibold mb-3">
                      {offer.subtitle[lang]}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {offer.description[lang]}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-neon group-hover:text-neon transition-colors"
                  >
                    {language === "EN" ? "Learn More" : "Saber Más"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "EN" 
                ? "Ready to Experience Donatello Hotel Dubai?" 
                : "¿Listo para Experimentar el Hotel Donatello Dubai?"
              }
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === "EN" 
                ? "Book now and enjoy our exclusive offers, world-class amenities, and exceptional service in the heart of Dubai." 
                : "Reserva ahora y disfruta de nuestras ofertas exclusivas, amenidades de clase mundial y servicio excepcional en el corazón de Dubai."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="neon">
                {language === "EN" ? "Book Your Stay" : "Reserva Tu Estancia"}
              </Button>
              <Button size="lg" variant="outline">
                {language === "EN" ? "Call +971 4 340 9040" : "Llamar +971 4 340 9040"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}