import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Users,
  Star,
  Crown,
  Sparkles,
  Eye,
  Download,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Photos", count: 45, icon: Camera },
  { id: "rooms", label: "Rooms & Suites", count: 12, icon: Crown },
  { id: "dining", label: "Dining", count: 8, icon: Sparkles },
  { id: "exterior", label: "Exterior", count: 6, icon: Star },
  { id: "interior", label: "Interior", count: 10, icon: Sparkles },
  { id: "amenities", label: "Amenities", count: 7, icon: Star },
  { id: "events", label: "Events", count: 2, icon: Users }
];

const galleryImages = [
  {
    id: 1,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/grand-suit.jpg",
    alt: "Grand Suite Interior",
    category: "rooms",
    title: "Grand Suite",
    featured: true
  },
  {
    id: 2,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/125.jpg",
    alt: "D ROOF Rooftop Dining",
    category: "dining", 
    title: "The D ROOF",
    featured: true
  },
  {
    id: 3,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/swimming_pool_img.jpg",
    alt: "Rooftop Swimming Pool",
    category: "amenities",
    title: "Rooftop Pool",
    featured: true
  },
  {
    id: 4,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/king-room.jpg",
    alt: "Deluxe King Room",
    category: "rooms",
    title: "Deluxe King Room",
    featured: false
  },
  {
    id: 5,
    src: "https://donatellodubai.com/wp-content/uploads/2022/08/Butterfly-4.jpg",
    alt: "Butterfly Cafe", 
    category: "dining",
    title: "Butterfly Cafe",
    featured: true
  },
  {
    id: 6,
    src: "https://donatellodubai.com/wp-content/uploads/2023/06/Legacy-SPA-1.jpg",
    alt: "Legacy European Spa",
    category: "amenities",
    title: "Legacy Spa",
    featured: false
  },
  {
    id: 7,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/img12.jpg",
    alt: "Meeting Room",
    category: "events",
    title: "Executive Meeting Room",
    featured: false
  },
  {
    id: 8,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/excetive-suit.jpg",
    alt: "Executive Suite",
    category: "rooms",
    title: "Executive Suite",
    featured: false
  },
  {
    id: 9,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/71.jpg",
    alt: "Nexa Lounge",
    category: "dining",
    title: "Nexa Lounge",
    featured: false
  },
  {
    id: 10,
    src: "https://donatellodubai.com/wp-content/uploads/2022/07/img13.jpg",
    alt: "Conference Room",
    category: "events",
    title: "Conference Facility",
    featured: false
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredImages = galleryImages.filter(img => img.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[80vh] overflow-hidden">
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
        
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon/20 backdrop-blur-sm rounded-full text-neon text-sm font-medium border border-neon/30">
                ★ ★ ★ ★ ★ Visual Experience
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-neon bg-clip-text text-transparent">
                PHOTO
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
                Gallery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Discover the elegance and luxury through our curated collection
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-white/70 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span>45+ Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated Daily</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Camera className="w-5 h-5 mr-2" />
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              FEATURED VIEWS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Signature 
              <span className="bg-gradient-to-r from-neon to-neon-glow bg-clip-text text-transparent"> Moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the most captivating views and spaces of our luxury hotel
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {featuredImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-neon transition-all duration-300 group overflow-hidden">
                        <CardContent className="p-0">
                          <AspectRatio ratio={4/3}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            
                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                                <Eye className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-semibold text-lg">{image.title}</h3>
                              <Badge className="mt-1 bg-neon text-neon-foreground">
                                {categories.find(cat => cat.id === image.category)?.label}
                              </Badge>
                            </div>
                          </AspectRatio>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl p-0">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-black/50 text-white border-0 hover:bg-black/70">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-black/50 text-white border-0 hover:bg-black/70">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Gallery with Categories */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-full mb-4">
              COMPLETE COLLECTION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Photo Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete collection organized by category
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-neon text-neon-foreground shadow-neon"
                    : "bg-card text-muted-foreground hover:bg-neon/10 hover:text-neon border border-border"
                )}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
                <Badge variant="secondary" className="ml-1 text-xs bg-transparent">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-neon transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                            <Eye className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="font-medium text-sm">{image.title}</h3>
                          {image.featured && (
                            <Badge className="mt-1 bg-neon/20 text-neon text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-xl mb-1">{image.title}</h3>
                      <Badge className="bg-neon text-neon-foreground">
                        {categories.find(cat => cat.id === image.category)?.label}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-black/50 text-white border-0 hover:bg-black/70">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/50 text-white border-0 hover:bg-black/70">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
            Experience it Yourself
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your stay and create your own memorable moments at Emirad Hotel Dubai
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon hover:bg-neon-glow text-neon-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Stay
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;