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
    <div className={cn("w-full max-w-8xl mx-auto", className)}>
      <div className="relative">
        {/* Elegant luxury frame */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon/5 via-neon/10 to-neon/5 rounded-3xl blur-xl"></div>
        
        <div className={cn(
          "relative backdrop-blur-3xl rounded-3xl overflow-hidden",
          isLuxury 
            ? "bg-white/95 border border-white/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
            : "bg-black/40 border border-white/20 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]"
        )}>
          
          {/* Premium glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>
          
          {/* Main content */}
          <div className="relative z-10 p-8 lg:p-16 xl:p-20">
            
            {/* Spacious booking form - Better proportions */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 xl:gap-16">
              
              {/* Destination - More space (3 columns) */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  <Label className={cn(
                    "text-sm font-medium tracking-[0.5px] uppercase flex items-center gap-2.5",
                    isLuxury ? "text-foreground/70" : "text-white/70"
                  )}>
                    <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-neon" />
                    </div>
                    Destination
                  </Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className={cn(
                      "h-20 rounded-2xl border-0 text-lg font-medium transition-all duration-500 group px-8",
                      isLuxury 
                        ? "bg-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)] hover:bg-white/90 text-foreground" 
                        : "bg-white/10 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.4)] hover:bg-white/15 text-white"
                    )}>
                      <SelectValue placeholder="Select your destination" className="text-left" />
                    </SelectTrigger>
                    <SelectContent className={cn(
                      "rounded-2xl border-0 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.15)] backdrop-blur-3xl min-w-[400px]",
                      isLuxury ? "bg-white/98" : "bg-black/95"
                    )}>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest} className={cn(
                          "rounded-xl text-lg font-medium py-4 px-6 my-1",
                          isLuxury 
                            ? "text-foreground hover:bg-neon/10 focus:bg-neon/15" 
                            : "text-white hover:bg-neon/15 focus:bg-neon/20"
                        )}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Check-in - Better proportions (2 columns) */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <Label className={cn(
                    "text-sm font-medium tracking-[0.5px] uppercase flex items-center gap-2.5",
                    isLuxury ? "text-foreground/70" : "text-white/70"
                  )}>
                    <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
                      <CalendarDays className="w-3 h-3 text-neon" />
                    </div>
                    Arrival
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "h-20 w-full rounded-2xl border-0 text-lg font-medium transition-all duration-500 text-left justify-start px-8",
                          isLuxury 
                            ? "bg-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)] hover:bg-white/90 text-foreground" 
                            : "bg-white/10 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.4)] hover:bg-white/15 text-white",
                          !checkIn && (isLuxury ? "text-muted-foreground" : "text-white/60")
                        )}
                      >
                        <div className="flex flex-col items-start w-full">
                          {checkIn ? (
                            <>
                              <span className="text-lg font-semibold">{format(checkIn, "MMM dd")}</span>
                              <span className="text-sm opacity-70">{format(checkIn, "yyyy")}</span>
                            </>
                          ) : (
                            <span>Select date</span>
                          )}
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={cn(
                      "w-auto p-0 rounded-2xl border-0 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.15)] backdrop-blur-3xl",
                      isLuxury ? "bg-white/98" : "bg-black/95"
                    )} align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn(
                          "p-6 pointer-events-auto",
                          isLuxury ? "text-foreground" : "text-white"
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Check-out - Better proportions (2 columns) */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <Label className={cn(
                    "text-sm font-medium tracking-[0.5px] uppercase flex items-center gap-2.5",
                    isLuxury ? "text-foreground/70" : "text-white/70"
                  )}>
                    <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
                      <CalendarDays className="w-3 h-3 text-neon" />
                    </div>
                    Departure
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "h-20 w-full rounded-2xl border-0 text-lg font-medium transition-all duration-500 text-left justify-start px-8",
                          isLuxury 
                            ? "bg-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)] hover:bg-white/90 text-foreground" 
                            : "bg-white/10 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.4)] hover:bg-white/15 text-white",
                          !checkOut && (isLuxury ? "text-muted-foreground" : "text-white/60")
                        )}
                      >
                        <div className="flex flex-col items-start w-full">
                          {checkOut ? (
                            <>
                              <span className="text-lg font-semibold">{format(checkOut, "MMM dd")}</span>
                              <span className="text-sm opacity-70">{format(checkOut, "yyyy")}</span>
                            </>
                          ) : (
                            <span>Select date</span>
                          )}
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={cn(
                      "w-auto p-0 rounded-2xl border-0 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.15)] backdrop-blur-3xl",
                      isLuxury ? "bg-white/98" : "bg-black/95"
                    )} align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        initialFocus
                        className={cn(
                          "p-6 pointer-events-auto",
                          isLuxury ? "text-foreground" : "text-white"
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests - Better proportions (2 columns) */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <Label className={cn(
                    "text-sm font-medium tracking-[0.5px] uppercase flex items-center gap-2.5",
                    isLuxury ? "text-foreground/70" : "text-white/70"
                  )}>
                    <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
                      <Users className="w-3 h-3 text-neon" />
                    </div>
                    Guests
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "h-20 w-full rounded-2xl border-0 text-lg font-medium transition-all duration-500 text-left justify-between px-8",
                          isLuxury 
                            ? "bg-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)] hover:bg-white/90 text-foreground" 
                            : "bg-white/10 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.4)] hover:bg-white/15 text-white"
                        )}
                      >
                        <div className="flex flex-col items-start flex-1">
                          <span className="text-lg font-semibold w-full">{rooms} Room{parseInt(rooms) > 1 ? 's' : ''}</span>
                          <span className="text-sm opacity-70 w-full">{adults} Adult{parseInt(adults) > 1 ? 's' : ''}{parseInt(children) > 0 ? `, ${children} Child${parseInt(children) > 1 ? 'ren' : ''}` : ''}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 opacity-50 flex-shrink-0 ml-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className={cn(
                      "w-80 p-8 rounded-2xl border-0 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.15)] backdrop-blur-3xl",
                      isLuxury ? "bg-white/98" : "bg-black/95"
                    )}>
                      <div className="space-y-8">
                        <div className="flex items-center justify-between">
                          <Label className={cn(
                            "text-lg font-medium",
                            isLuxury ? "text-foreground" : "text-white"
                          )}>Rooms</Label>
                          <Select value={rooms} onValueChange={setRooms}>
                            <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5].map((num) => (
                                <SelectItem key={num} value={num.toString()} className="text-lg py-3">
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className={cn(
                            "text-lg font-medium",
                            isLuxury ? "text-foreground" : "text-white"
                          )}>Adults</Label>
                          <Select value={adults} onValueChange={setAdults}>
                            <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6].map((num) => (
                                <SelectItem key={num} value={num.toString()} className="text-lg py-3">
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className={cn(
                            "text-lg font-medium",
                            isLuxury ? "text-foreground" : "text-white"
                          )}>Children</Label>
                          <Select value={children} onValueChange={setChildren}>
                            <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[0, 1, 2, 3, 4].map((num) => (
                                <SelectItem key={num} value={num.toString()} className="text-lg py-3">
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
              </div>

              {/* Search Button - Proper width (2 columns) */}
              <div className="lg:col-span-2">
                <div className="flex flex-col justify-end h-full">
                  <Button 
                    size="lg"
                    className="h-20 bg-gradient-to-r from-neon via-neon-glow to-neon hover:from-neon-glow hover:via-neon hover:to-neon-glow text-neon-foreground font-bold rounded-2xl transition-all duration-700 hover:scale-[1.02] shadow-[0_12px_32px_-8px_rgba(147,126,39,0.4)] hover:shadow-[0_20px_48px_-8px_rgba(147,126,39,0.6)] relative overflow-hidden group text-base xl:text-lg tracking-wide px-8"
                  >
                    {/* Luxury shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 animate-pulse"></div>
                    <Search className="w-5 h-5 mr-3 relative z-10 flex-shrink-0" />
                    <span className="relative z-10 font-bold tracking-wider">SEARCH</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Refined Promo Code Section */}
            <div className={cn(
              "mt-12 pt-8",
              "border-t border-gradient-to-r from-transparent via-border/30 to-transparent"
            )}>
              <div className="flex flex-col lg:flex-row gap-6 items-end">
                <div className="flex-1 max-w-2xl">
                  <Label className={cn(
                    "text-sm font-medium tracking-[0.5px] uppercase flex items-center gap-2.5 mb-4",
                    isLuxury ? "text-foreground/70" : "text-white/70"
                  )}>
                    <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
                      <Tag className="w-3 h-3 text-neon" />
                    </div>
                    Promotional Code (Optional)
                  </Label>
                  <Input
                    placeholder="Enter your promotional code for exclusive offers"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className={cn(
                      "h-20 rounded-2xl border-0 text-lg font-medium transition-all duration-500 px-8",
                      isLuxury 
                        ? "bg-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.12)] focus:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.15)] hover:bg-white/90 text-foreground placeholder:text-muted-foreground/70"
                        : "bg-white/10 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.4)] focus:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.5)] hover:bg-white/15 text-white placeholder:text-white/60"
                    )}
                  />
                </div>
                <Button 
                  variant="outline"
                  className={cn(
                    "h-20 px-12 rounded-2xl border-0 text-lg font-semibold transition-all duration-500 tracking-wide whitespace-nowrap",
                    isLuxury 
                      ? "bg-white/60 text-neon hover:bg-neon/15 hover:text-neon shadow-[0_8px_24px_-6px_rgba(147,126,39,0.15)] hover:shadow-[0_12px_32px_-6px_rgba(147,126,39,0.25)]"
                      : "bg-white/10 text-neon hover:bg-neon/15 hover:text-white shadow-[0_8px_24px_-6px_rgba(147,126,39,0.2)] hover:shadow-[0_12px_32px_-6px_rgba(147,126,39,0.3)]"
                  )}
                >
                  APPLY CODE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}