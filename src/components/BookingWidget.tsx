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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Label htmlFor="destination" className="text-xs font-medium text-white/80 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-neon" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-11 bg-white/12 backdrop-blur-md border border-white/25 hover:border-neon/40 focus:border-neon/60 transition-all duration-300 rounded-xl text-white placeholder:text-white/50 text-sm">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className="text-white hover:bg-neon/20 focus:bg-neon/30 rounded-lg text-sm">
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in Date */}
          <div className="col-span-1">
            <Label className="text-xs font-medium text-white/80 mb-2 flex items-center gap-1.5">
              <CalendarDays className="w-3 h-3 text-neon" />
              Check-in
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-11 w-full justify-start text-left font-normal bg-white/12 backdrop-blur-md border border-white/25 hover:border-neon/40 focus:border-neon/60 transition-all duration-300 rounded-xl text-white text-sm",
                    !checkIn && "text-white/50"
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd") : "Select"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-2 pointer-events-auto text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="col-span-1">
            <Label className="text-xs font-medium text-white/80 mb-2 flex items-center gap-1.5">
              <CalendarDays className="w-3 h-3 text-neon" />
              Check-out
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-11 w-full justify-start text-left font-normal bg-white/12 backdrop-blur-md border border-white/25 hover:border-neon/40 focus:border-neon/60 transition-all duration-300 rounded-xl text-white text-sm",
                    !checkOut && "text-white/50"
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd") : "Select"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-2 pointer-events-auto text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Rooms & Guests */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Label className="text-xs font-medium text-white/80 mb-2 flex items-center gap-1.5">
              <Users className="w-3 h-3 text-neon" />
              Rooms & Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-start text-left bg-white/12 backdrop-blur-md border border-white/25 hover:border-neon/40 focus:border-neon/60 transition-all duration-300 rounded-xl text-white text-sm"
                >
                  <span className="truncate">{rooms}R, {adults}A{parseInt(children) > 0 ? `, ${children}C` : ''}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-3 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium text-white text-sm">Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-16 h-8 text-xs">
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
                    <Label className="font-medium text-white text-sm">Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-16 h-8 text-xs">
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
                    <Label className="font-medium text-white text-sm">Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-16 h-8 text-xs">
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
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col justify-end">
            <Button 
              size="lg"
              className="h-11 bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground font-semibold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_30px_-8px_rgba(147,126,39,0.6)] border border-neon/30 hover:border-neon/60 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
              <Search className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10 text-sm tracking-wide font-semibold">Search</span>
            </Button>
          </div>
        </div>

        {/* Compact Promo Code Row */}
        <div className="relative z-10 mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex-1 max-w-xs">
              <Label htmlFor="promo" className="text-xs font-medium text-white/80 mb-2 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-neon" />
                Promo Code
              </Label>
              <Input
                id="promo"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-9 bg-white/10 backdrop-blur-md border border-white/25 hover:border-neon/40 focus:border-neon/60 transition-all duration-300 rounded-lg placeholder:text-white/40 text-white text-sm"
              />
            </div>
            <Button 
              variant="outline"
              className="h-9 px-4 bg-white/5 backdrop-blur-md border border-neon/40 text-neon hover:bg-neon/15 hover:border-neon transition-all duration-300 rounded-lg font-medium text-sm"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}