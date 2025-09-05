import { useState } from "react";
import { CalendarDays, MapPin, Users, Tag, Search, ChevronDown } from "lucide-react";
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
    <div className={cn("w-full max-w-7xl mx-auto", className)}>
      <div className="relative">
        {/* Main booking form - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Destination */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Label htmlFor="destination" className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2 tracking-wide",
              isLuxury ? "text-foreground/90" : "text-white/90"
            )}>
              <MapPin className="w-4 h-4 text-neon" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className={cn(
                "h-16 backdrop-blur-md border-2 transition-all duration-300 rounded-2xl text-base font-medium shadow-lg hover:shadow-xl",
                isLuxury 
                  ? "bg-white/80 border-muted/40 hover:border-neon/60 focus:border-neon text-foreground shadow-lg hover:bg-white/90" 
                  : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon text-white placeholder:text-white/60"
              )}>
                <SelectValue placeholder="Select your destination" />
              </SelectTrigger>
              <SelectContent className={cn(
                "backdrop-blur-xl border rounded-2xl shadow-2xl z-50",
                isLuxury ? "bg-white/95 border-border/40" : "bg-black/90 border-white/20"
              )}>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className={cn(
                    "rounded-xl text-base font-medium py-3 px-4",
                    isLuxury 
                      ? "text-foreground hover:bg-neon/15 focus:bg-neon/25" 
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
              "text-sm font-semibold mb-3 flex items-center gap-2 tracking-wide",
              isLuxury ? "text-foreground/90" : "text-white/90"
            )}>
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-in
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-16 w-full justify-start text-left font-medium backdrop-blur-md border-2 transition-all duration-300 rounded-2xl text-base shadow-lg hover:shadow-xl",
                    isLuxury 
                      ? "bg-white/80 border-muted/40 hover:border-neon/60 focus:border-neon text-foreground hover:bg-white/90" 
                      : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon text-white",
                    !checkIn && (isLuxury ? "text-muted-foreground" : "text-white/60")
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select check-in date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-auto p-0 backdrop-blur-xl border rounded-2xl shadow-2xl z-50",
                isLuxury ? "bg-white/95 border-border/40" : "bg-black/90 border-white/20"
              )} align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn(
                    "p-4 pointer-events-auto",
                    isLuxury ? "text-foreground" : "text-white"
                  )}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="lg:col-span-1">
            <Label className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2 tracking-wide",
              isLuxury ? "text-foreground/90" : "text-white/90"
            )}>
              <CalendarDays className="w-4 h-4 text-neon" />
              Check-out
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-16 w-full justify-start text-left font-medium backdrop-blur-md border-2 transition-all duration-300 rounded-2xl text-base shadow-lg hover:shadow-xl",
                    isLuxury 
                      ? "bg-white/80 border-muted/40 hover:border-neon/60 focus:border-neon text-foreground hover:bg-white/90" 
                      : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon text-white",
                    !checkOut && (isLuxury ? "text-muted-foreground" : "text-white/60")
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select check-out date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-auto p-0 backdrop-blur-xl border rounded-2xl shadow-2xl z-50",
                isLuxury ? "bg-white/95 border-border/40" : "bg-black/90 border-white/20"
              )} align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className={cn(
                    "p-4 pointer-events-auto",
                    isLuxury ? "text-foreground" : "text-white"
                  )}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Rooms & Guests */}
          <div className="lg:col-span-1">
            <Label className={cn(
              "text-sm font-semibold mb-3 flex items-center gap-2 tracking-wide",
              isLuxury ? "text-foreground/90" : "text-white/90"
            )}>
              <Users className="w-4 h-4 text-neon" />
              Rooms & Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-16 w-full justify-between text-left font-medium backdrop-blur-md border-2 transition-all duration-300 rounded-2xl text-base shadow-lg hover:shadow-xl",
                    isLuxury 
                      ? "bg-white/80 border-muted/40 hover:border-neon/60 focus:border-neon text-foreground hover:bg-white/90" 
                      : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon text-white"
                  )}
                >
                  <span className="truncate pr-2">{rooms} Room{parseInt(rooms) > 1 ? 's' : ''}, {adults} Adult{parseInt(adults) > 1 ? 's' : ''}{parseInt(children) > 0 ? `, ${children} Child${parseInt(children) > 1 ? 'ren' : ''}` : ''}</span>
                  <ChevronDown className="w-4 h-4 text-neon flex-shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={cn(
                "w-96 p-6 backdrop-blur-xl border rounded-2xl shadow-2xl z-50",
                isLuxury ? "bg-white/95 border-border/40" : "bg-black/90 border-white/20"
              )}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label className={cn(
                      "font-semibold text-base",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-24 h-12 text-base font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-3">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className={cn(
                      "font-semibold text-base",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-24 h-12 text-base font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-3">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className={cn(
                      "font-semibold text-base",
                      isLuxury ? "text-foreground" : "text-white"
                    )}>Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-24 h-12 text-base font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-base py-3">
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

          {/* Search Button - Full Width on Mobile */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-end">
            <Button 
              size="lg"
              className={cn(
                "h-16 font-bold rounded-2xl transition-all duration-500 hover:scale-[1.02] border-2 relative overflow-hidden group shadow-xl hover:shadow-2xl",
                isLuxury 
                  ? "bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground border-neon/40 hover:border-neon/70 hover:shadow-[0_25px_50px_-12px_rgba(147,126,39,0.5)]"
                  : "bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground border-neon/40 hover:border-neon/70 hover:shadow-[0_20px_40px_-12px_rgba(147,126,39,0.6)]"
              )}
            >
              {/* Premium shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
              <Search className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10 text-lg lg:text-xl tracking-wide font-bold whitespace-nowrap">
                Search Luxury Stays
              </span>
            </Button>
          </div>
        </div>

        {/* Enhanced Promo Code Section */}
        <div className={cn(
          "relative z-10 mt-10 pt-8 border-t-2",
          isLuxury ? "border-gradient-to-r from-transparent via-border to-transparent" : "border-white/25"
        )}>
          <div className="flex flex-col sm:flex-row gap-6 items-end">
            <div className="flex-1 max-w-md">
              <Label htmlFor="promo" className={cn(
                "text-sm font-semibold mb-4 flex items-center gap-2 tracking-wide",
                isLuxury ? "text-foreground/90" : "text-white/90"
              )}>
                <Tag className="w-4 h-4 text-neon" />
                Promo Code (Optional)
              </Label>
              <Input
                id="promo"
                placeholder="Enter your promotional code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className={cn(
                  "h-14 backdrop-blur-md border-2 transition-all duration-300 rounded-2xl font-medium text-base shadow-lg hover:shadow-xl",
                  isLuxury 
                    ? "bg-white/80 border-muted/40 hover:border-neon/60 focus:border-neon text-foreground placeholder:text-muted-foreground hover:bg-white/90"
                    : "bg-white/15 border-white/30 hover:border-neon/50 focus:border-neon text-white placeholder:text-white/60"
                )}
              />
            </div>
            <Button 
              variant="outline"
              className={cn(
                "h-14 px-8 backdrop-blur-md border-2 transition-all duration-300 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl",
                isLuxury 
                  ? "bg-white/60 border-neon/50 text-neon hover:bg-neon/15 hover:border-neon hover:bg-white/80"
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