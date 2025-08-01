import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, Mail, Users, Projector, Wifi, Coffee, Calendar, MapPin } from "lucide-react";

const Meetings = () => {
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
      }
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
      }
    }
  ];

  const facilities = [
    {
      title: "Food & Beverage Services",
      description: "Coffee Break / International Lunch or Dinner Buffet / Customizable Catering Menu",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: "Meeting Room",
      description: "Meeting Room with natural day-light and customizable set up as per your specifications (U-Shape, Boardroom, Cabaret, Classroom or Theater Style). Standard amenities include Office Stationery, Flip Chart with Markers, Mineral Water and assorted Candies.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Audio Visual",
      description: "Complimentary usage of conference equipment including pull-down ceiling mounted projection screen, microphone, and wireless internet connection.",
      icon: <Projector className="w-6 h-6" />
    }
  ];

  const eventTypes = [
    "Boardroom meetings",
    "Product launches", 
    "Corporate trainings",
    "Intimate gatherings",
    "Business conferences",
    "Team building events"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://donatellodubai.com/wp-content/uploads/2022/07/img12.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Productive Meetings<br />
            <span className="text-primary">Successful Events</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            The perfect location for boardroom meetings, product launches, corporate trainings, and intimate gatherings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Book Meeting Room
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call +971 4 340 9040
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Professional Meeting Facilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Donatello Hotel is the perfect location to hold boardroom meetings, product launches, corporate trainings, intimate gatherings and other functions. Modular seating set-up in rooms with natural day-light and conventional audio visual facilities, coupled with professional, unobtrusive service and delectable food, make every event a success.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {eventTypes.map((event, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{event}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Request Quote
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img 
                src="https://donatellodubai.com/wp-content/uploads/2022/07/img13.jpg" 
                alt="Meeting Room Setup"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://donatellodubai.com/wp-content/uploads/2022/07/img14.jpg" 
                alt="Conference Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Rooms Capacity */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Meeting Room Capacities
            </h3>
            <p className="text-lg text-muted-foreground">
              Flexible seating arrangements to accommodate your specific needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Room</TableHead>
                  <TableHead className="font-semibold">Size</TableHead>
                  <TableHead className="font-semibold">U-Shape</TableHead>
                  <TableHead className="font-semibold">Board Room</TableHead>
                  <TableHead className="font-semibold">Class Room</TableHead>
                  <TableHead className="font-semibold">Theater</TableHead>
                  <TableHead className="font-semibold">Cabaret</TableHead>
                  <TableHead className="font-semibold">Banquet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {meetingRooms.map((room, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{room.name}</TableCell>
                    <TableCell>{room.size}</TableCell>
                    <TableCell>{room.capacity.uShape}</TableCell>
                    <TableCell>{room.capacity.boardRoom}</TableCell>
                    <TableCell>{room.capacity.classRoom}</TableCell>
                    <TableCell>{room.capacity.theater}</TableCell>
                    <TableCell>{room.capacity.cabaret}</TableCell>
                    <TableCell>{room.capacity.banquet}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Conference Facilities & Services
            </h3>
            <p className="text-lg text-muted-foreground">
              Everything you need for a successful event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg text-primary w-fit mb-4">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Plan Your Event?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            For availability and pricing information, contact us and we'll customize it based on your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">+971 4 340 9040</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-semibold">reservations@donatellodubai.com</span>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Submit Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meetings;