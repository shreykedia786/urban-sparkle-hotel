import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, MapPin, Gift, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [promoCode, setPromoCode] = useState("");
  const [rooms, setRooms] = useState("1");

  const handleBooking = () => {
    // Handle booking logic
    console.log("Booking:", { checkIn, checkOut, guests, rooms, promoCode });
  };

  return (
    <Card className={cn("bg-card/95 backdrop-blur-sm shadow-card border-border/50", className)}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-5 h-5 text-neon" />
          <h3 className="text-lg font-semibold text-foreground">Book Your Stay</h3>
        </div>

        <div className="space-y-4">
          {/* Check-in & Check-out */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-sm font-medium text-foreground">
                Check-in
              </Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-sm font-medium text-foreground">
                Check-out
              </Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-background border-border"
              />
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-sm font-medium text-foreground">
                Guests
              </Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rooms" className="text-sm font-medium text-foreground">
                Rooms
              </Label>
              <Select value={rooms} onValueChange={setRooms}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select rooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Room</SelectItem>
                  <SelectItem value="2">2 Rooms</SelectItem>
                  <SelectItem value="3">3 Rooms</SelectItem>
                  <SelectItem value="4">4+ Rooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Promo Code */}
          <div className="space-y-2">
            <Label htmlFor="promo" className="text-sm font-medium text-foreground">
              Promo Code (Optional)
            </Label>
            <div className="relative">
              <Gift className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="promo"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>

          {/* Book Button */}
          <Button 
            variant="booking" 
            className="w-full"
            onClick={handleBooking}
          >
            <Search className="w-5 h-5" />
            Check Availability
          </Button>

          {/* Additional Info */}
          <div className="pt-4 border-t border-border/50">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Best Rate Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
              <Users className="w-4 h-4" />
              <span>Free cancellation until 24h before arrival</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}