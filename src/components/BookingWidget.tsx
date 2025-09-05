import { useState } from "react";
import { CalendarDays, MapPin, Users, Tag, Search } from "lucide-react";
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
    <div className={cn("w-full", className)}>
      <div className="bg-gradient-to-r from-white via-white to-white/95 p-6 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <div className="lg:col-span-1">
            <Label htmlFor="destination" className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neon" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-12 bg-white border-2 border-muted hover:border-neon/50 focus:border-neon transition-colors">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-muted">
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className="hover:bg-neon/10">
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in Date */}
          <div className="lg:col-span-1">
            <Label className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-in
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full justify-start text-left font-normal bg-white border-2 border-muted hover:border-neon/50 focus:border-neon transition-colors",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-2 border-muted" align="start">
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

          {/* Check-out Date */}
          <div className="lg:col-span-1">
            <Label className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-out
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full justify-start text-left font-normal bg-white border-2 border-muted hover:border-neon/50 focus:border-neon transition-colors",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-2 border-muted" align="start">
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

          {/* Rooms & Guests */}
          <div className="lg:col-span-1">
            <Label className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-neon" />
              Rooms & Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 w-full justify-between bg-white border-2 border-muted hover:border-neon/50 focus:border-neon transition-colors"
                >
                  <span>{rooms} Room{parseInt(rooms) > 1 ? 's' : ''}, {adults} Adult{parseInt(adults) > 1 ? 's' : ''}{parseInt(children) > 0 ? `, ${children} Child${parseInt(children) > 1 ? 'ren' : ''}` : ''}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white border-2 border-muted">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
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
          <div className="lg:col-span-1 flex flex-col justify-end">
            <Button 
              size="lg"
              className="h-12 bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Promo Code Row */}
        <div className="mt-4 pt-4 border-t border-muted/30">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 max-w-xs">
              <Label htmlFor="promo" className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4 text-neon" />
                Promo Code
              </Label>
              <Input
                id="promo"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-10 bg-white border-2 border-muted hover:border-neon/50 focus:border-neon transition-colors"
              />
            </div>
            <Button 
              variant="outline"
              className="h-10 px-6 border-2 border-neon text-neon hover:bg-neon hover:text-neon-foreground transition-all duration-300"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}