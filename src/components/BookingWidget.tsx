import { useState } from "react";
import { CalendarDays, MapPin, Users, Tag, Search, ChevronDown, Star, Shield, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function BookingWidget({ className }: { className?: string }) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [destination, setDestination] = useState("");
  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [promoCode, setPromoCode] = useState("");

  const destinations = [
    "Donatello Hotel Dubai",
    "Dubai Marina",
    "Downtown Dubai", 
    "Palm Jumeirah",
    "Dubai Mall Area",
    "Business Bay"
  ];

  return (
    <div className={cn("w-full max-w-[1400px] mx-auto", className)}>
      <div className="bg-card rounded-2xl shadow-card p-8 border border-border">"
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* 5-Star Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-neon text-neon" />
            ))}
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Reserve Your <span className="text-neon">Luxury Stay</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground">
            Experience unparalleled luxury with instant confirmation and our best rate guarantee
          </p>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
          
          {/* Destination */}
          <div className="space-y-2">
            <Label className="text-neon text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-14 bg-muted border-2 border-border rounded-lg text-base font-medium hover:border-neon/50 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-all">
                <SelectValue placeholder="Donatello Hotel Dubai" className="text-foreground" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-0 shadow-card rounded-lg z-[9999]">
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className="text-base py-2 px-3 hover:bg-neon/10 focus:bg-neon/10">
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in */}
          <div className="space-y-2">
            <Label className="text-neon text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Arrival
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full bg-muted border-2 border-border rounded-lg text-base font-medium hover:border-neon/50 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-all justify-start text-left",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-popover border-0 shadow-card rounded-lg z-[9999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out */}
          <div className="space-y-2">
            <Label className="text-neon text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Departure
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full bg-muted border-2 border-border rounded-lg text-base font-medium hover:border-neon/50 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-all justify-start text-left",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-popover border-0 shadow-card rounded-lg z-[9999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <Label className="text-neon text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-14 w-full bg-muted border-2 border-border rounded-lg text-base font-medium hover:border-neon/50 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-all justify-between"
                >
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{rooms} Room{rooms !== "1" ? "s" : ""}</div>
                    <div className="text-sm text-muted-foreground">{adults} Adult{adults !== "1" ? "s" : ""}</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 bg-popover border-0 shadow-card rounded-lg z-[9999]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium text-foreground">Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-16 h-10 text-base font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover shadow-card z-[9999]">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-2">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium text-foreground">Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-16 h-10 text-base font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover shadow-card z-[9999]">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-2">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium text-foreground">Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-16 h-10 text-base font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover shadow-card z-[9999]">
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-2">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button 
              size="lg"
              className="w-full h-14 bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-bold text-base rounded-lg shadow-card hover:shadow-neon transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              SEARCH
            </Button>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="border-t border-border pt-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-3 items-end max-w-4xl mx-auto">
            <div className="flex-1">
              <Label className="text-neon text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4" />
                Promotional Code (Optional)
              </Label>
              <Input
                placeholder="Enter your promotional code for exclusive offers"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-12 bg-muted border-2 border-border rounded-lg text-base font-medium hover:border-neon/50 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-all"
              />
            </div>
            <Button 
              variant="outline"
              className="h-12 px-6 bg-neon/10 border-2 border-neon/20 text-neon hover:bg-neon/20 hover:border-neon/40 font-semibold text-base rounded-lg transition-all"
            >
              APPLY CODE
            </Button>
          </div>
        </div>

        {/* Removed duplicate trust badges - they appear elsewhere on the page */}
      </div>
    </div>
  );
}