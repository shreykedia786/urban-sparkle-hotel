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
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Destination */}
          <div className="lg:col-span-1">
            <Label htmlFor="destination" className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neon" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-14 bg-white/15 backdrop-blur-md border border-white/30 hover:border-neon/50 focus:border-neon/70 transition-all duration-300 rounded-2xl shadow-inner text-white placeholder:text-white/60">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className="text-white hover:bg-neon/20 focus:bg-neon/30 rounded-xl">
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in Date */}
          <div className="lg:col-span-1">
            <Label className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-in
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full justify-start text-left font-normal bg-white/15 backdrop-blur-md border border-white/30 hover:border-neon/50 focus:border-neon/70 transition-all duration-300 rounded-2xl shadow-inner text-white",
                    !checkIn && "text-white/60"
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="lg:col-span-1">
            <Label className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-out
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full justify-start text-left font-normal bg-white/15 backdrop-blur-md border border-white/30 hover:border-neon/50 focus:border-neon/70 transition-all duration-300 rounded-2xl shadow-inner text-white",
                    !checkOut && "text-white/60"
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto text-white"
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
                  className="h-12 w-full justify-between bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 focus:border-neon/60 transition-all duration-300 rounded-xl shadow-inner"
                >
                  <span>{rooms} Room{parseInt(rooms) > 1 ? 's' : ''}, {adults} Adult{parseInt(adults) > 1 ? 's' : ''}{parseInt(children) > 0 ? `, ${children} Child${parseInt(children) > 1 ? 'ren' : ''}` : ''}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white/90 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl">
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
              className="h-14 bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_-12px_rgba(147,126,39,0.8)] border border-neon/30 hover:border-neon/60 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
              <Search className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10 text-lg tracking-wide font-bold">Search</span>
            </Button>
          </div>
        </div>

        {/* Promo Code Row */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row gap-6 items-end">
            <div className="flex-1 max-w-xs">
              <Label htmlFor="promo" className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-neon" />
                Promo Code
              </Label>
              <Input
                id="promo"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-12 bg-white/15 backdrop-blur-md border border-white/30 hover:border-neon/50 focus:border-neon/70 transition-all duration-300 rounded-2xl shadow-inner placeholder:text-white/50 text-white"
              />
            </div>
            <Button 
              variant="outline"
              className="h-12 px-8 bg-white/10 backdrop-blur-md border border-neon/60 text-neon hover:bg-neon/20 hover:border-neon transition-all duration-300 rounded-2xl shadow-inner font-semibold"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}