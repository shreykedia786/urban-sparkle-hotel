import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
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
import { Camera, MapPin, Calendar, Users } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Photos", count: 45 },
    { id: "rooms", label: "Rooms", count: 12 },
    { id: "dining", label: "Dining", count: 8 },
    { id: "exterior", label: "Exterior", count: 6 },
    { id: "interior", label: "Interior", count: 10 },
    { id: "amenities", label: "Hotel Amenities", count: 7 },
    { id: "events", label: "Meeting & Events", count: 2 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      alt: "Luxury Hotel Lobby",
      category: "interior",
      title: "Grand Lobby"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: "Hotel Exterior View",
      category: "exterior", 
      title: "Hotel Exterior"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      alt: "Premium Room Interior",
      category: "rooms",
      title: "Premium Suite"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42d?w=800&h=600&fit=crop",
      alt: "Restaurant Fine Dining",
      category: "dining",
      title: "Al Fresco Restaurant"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Swimming Pool Area", 
      category: "amenities",
      title: "Rooftop Pool"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
      alt: "Spa and Wellness Center",
      category: "amenities",
      title: "Wellness Center"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
      alt: "Conference Room",
      category: "events",
      title: "Executive Meeting Room"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop",
      alt: "Deluxe Room",
      category: "rooms",
      title: "Deluxe City View"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: "Hotel Bar",
      category: "dining",
      title: "Signature Bar"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      alt: "Grand Ballroom",
      category: "events",
      title: "Grand Ballroom"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredImages = galleryImages.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-foreground">Gallery</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the elegance and luxury of Donatello Hotel through our curated collection of images
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>45+ Photos</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Views</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the most captivating views and spaces of our luxury hotel
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-0">
                          <AspectRatio ratio={4/3}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-semibold text-lg">{image.title}</h3>
                              <Badge variant="secondary" className="mt-1 bg-white/20 text-white">
                                {categories.find(cat => cat.id === image.category)?.label}
                              </Badge>
                            </div>
                          </AspectRatio>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Photo Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection organized by category
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs lg:text-sm"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-0">
                          <AspectRatio ratio={4/3}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
                            <div className="absolute bottom-3 left-3 text-white">
                              <h3 className="font-medium text-sm">{image.title}</h3>
                            </div>
                          </AspectRatio>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Virtual Tour</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take an immersive 360° virtual tour of our hotel and experience our luxury accommodations from anywhere in the world
          </p>
          <Button size="lg" className="gap-2">
            <Camera className="h-5 w-5" />
            Start Virtual Tour
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;