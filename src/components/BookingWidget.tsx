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

  const isLuxury = className?.includes('luxury');

  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Destination */}
          <div className="lg:col-span-1">
            <Label htmlFor="destination" className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2",
              isLuxury ? "text-foreground/80" : "text-white/80"
            )}>
              <MapPin className="w-4 h-4 text-neon" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className={cn(
                "h-14 backdrop-blur-md border transition-all duration-300 rounded-2xl text-sm font-medium",
                isLuxury 
                  ? "bg-white/60 border-border/30 hover:border-neon/50 focus:border-neon/70 text-foreground shadow-sm" 
                  : "bg-white/12 border-white/25 hover:border-neon/40 focus:border-neon/60 text-white placeholder:text-white/50"
              )}>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className={cn(
                "backdrop-blur-xl border rounded-xl shadow-2xl",
                isLuxury ? "bg-white/95 border-border/30" : "bg-black/90 border-white/20"
              )}>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className={cn(
                    "rounded-lg text-sm font-medium",
                    isLuxury 
                      ? "text-foreground hover:bg-neon/10 focus:bg-neon/20" 
                      : "text-white hover:bg-neon/20 focus:bg-neon/30"
                  )}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in Date */}
          <div className="lg:col-span-1">
            <Label className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2",
              isLuxury ? "text-foreground/80" : "text-white/80"
            )}>
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-in
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full justify-start text-left font-medium backdrop-blur-md border transition-all duration-300 rounded-2xl text-sm",
                    isLuxury 
                      ? "bg-white/60 border-border/30 hover:border-neon/50 focus:border-neon/70 text-foreground shadow-sm" 
                      : "bg-white/12 border-white/25 hover:border-neon/40 focus:border-neon/60 text-white",
                    !checkIn && (isLuxury ? "text-muted-foreground" : "text-white/50")
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-auto p-0 backdrop-blur-xl border rounded-xl shadow-2xl",
                isLuxury ? "bg-white/95 border-border/30" : "bg-black/90 border-white/20"
              )} align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn(
                    "p-3 pointer-events-auto",
                    isLuxury ? "text-foreground" : "text-white"
                  )}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="lg:col-span-1">
            <Label className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2",
              isLuxury ? "text-foreground/80" : "text-white/80"
            )}>
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-out
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full justify-start text-left font-medium backdrop-blur-md border transition-all duration-300 rounded-2xl text-sm",
                    isLuxury 
                      ? "bg-white/60 border-border/30 hover:border-neon/50 focus:border-neon/70 text-foreground shadow-sm" 
                      : "bg-white/12 border-white/25 hover:border-neon/40 focus:border-neon/60 text-white",
                    !checkOut && (isLuxury ? "text-muted-foreground" : "text-white/50")
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-auto p-0 backdrop-blur-xl border rounded-xl shadow-2xl",
                isLuxury ? "bg-white/95 border-border/30" : "bg-black/90 border-white/20"
              )} align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className={cn(
                    "p-3 pointer-events-auto",
                    isLuxury ? "text-foreground" : "text-white"
                  )}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Rooms & Guests */}
          <div className="lg:col-span-1">
            <Label className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2",
              isLuxury ? "text-foreground/80" : "text-white/80"
            )}>
              <Users className="w-4 h-4 text-neon" />
              Rooms & Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-14 w-full justify-between text-left font-medium backdrop-blur-md border transition-all duration-300 rounded-2xl text-sm",
                    isLuxury 
                      ? "bg-white/60 border-border/30 hover:border-neon/50 focus:border-neon/70 text-foreground shadow-sm" 
                      : "bg-white/12 border-white/25 hover:border-neon/40 focus:border-neon/60 text-white"
                  )}
                >
                  <span>{rooms} Room{parseInt(rooms) > 1 ? 's' : ''}, {adults} Adult{parseInt(adults) > 1 ? 's' : ''}{parseInt(children) > 0 ? `, ${children} Child${parseInt(children) > 1 ? 'ren' : ''}` : ''}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-80 p-4 backdrop-blur-xl border rounded-xl shadow-2xl",
                isLuxury ? "bg-white/95 border-border/30" : "bg-black/90 border-white/20"
              )}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className={cn(
                      "font-semibold text-sm",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-20 h-10">
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
                    <Label className={cn(
                      "font-semibold text-sm",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-20 h-10">
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
                    <Label className={cn(
                      "font-semibold text-sm",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-20 h-10">
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
              className={cn(
                "h-14 font-bold rounded-2xl transition-all duration-500 hover:scale-105 border relative overflow-hidden group",
                isLuxury 
                  ? "bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground border-neon/30 hover:border-neon/60 shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(147,126,39,0.4)]"
                  : "bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground border-neon/30 hover:border-neon/60 hover:shadow-[0_15px_30px_-8px_rgba(147,126,39,0.6)]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
              <Search className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10 text-lg tracking-wide font-bold">Search Luxury Stays</span>
            </Button>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className={cn(
          "relative z-10 mt-8 pt-6 border-t",
          isLuxury ? "border-border/30" : "border-white/20"
        )}>
          <div className="flex flex-col sm:flex-row gap-6 items-end">
            <div className="flex-1 max-w-sm">
              <Label htmlFor="promo" className={cn(
                "text-sm font-semibold mb-3 flex items-center gap-2",
                isLuxury ? "text-foreground/80" : "text-white/80"
              )}>
                <Tag className="w-4 h-4 text-neon" />
                Promo Code
              </Label>
              <Input
                id="promo"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className={cn(
                  "h-12 backdrop-blur-md border transition-all duration-300 rounded-xl font-medium",
                  isLuxury 
                    ? "bg-white/60 border-border/30 hover:border-neon/50 focus:border-neon/70 text-foreground placeholder:text-muted-foreground shadow-sm"
                    : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon/70 text-white placeholder:text-white/50"
                )}
              />
            </div>
            <Button 
              variant="outline"
              className={cn(
                "h-12 px-8 backdrop-blur-md border transition-all duration-300 rounded-xl font-semibold",
                isLuxury 
                  ? "bg-white/30 border-neon/40 text-neon hover:bg-neon/10 hover:border-neon shadow-sm"
                  : "bg-white/10 border-neon/60 text-neon hover:bg-neon/20 hover:border-neon"
              )}
            >
              Apply Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}