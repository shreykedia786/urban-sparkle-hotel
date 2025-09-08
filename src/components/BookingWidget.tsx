import { useState } from "react";
import { CalendarDays, MapPin, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function BookingWidget({ className }: { className?: string }) {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  return (
    <div className={cn("w-full", className)}>
      {/* World-Class Booking Widget */}
      <div className="relative">
        {/* Luxury background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-neon-glow/10 to-neon/5 rounded-3xl blur-xl"></div>
        
        {/* Main booking container */}
        <div className="relative bg-slate-800/95 backdrop-blur-xl border border-neon/20 rounded-2xl overflow-visible shadow-2xl">
          {/* Header */}
          <div className="px-8 py-4 border-b border-neon/20">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">Reserve Your Stay</h3>
              <div className="flex items-center gap-1 text-neon">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
              
              {/* DESTINATION */}
              <div className="space-y-2">
                <label className="text-neon text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  DESTINATION
                </label>
                <Select defaultValue="donatello">
                  <SelectTrigger className="h-12 bg-slate-700/50 border-slate-600 text-white hover:border-neon/50 focus:border-neon focus:ring-neon/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600 text-white">
                    <SelectItem value="donatello">Donatello Hotel Dubai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* CHECK-IN */}
              <div className="space-y-2">
                <label className="text-neon text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                  <CalendarDays className="w-3 h-3" />
                  CHECK-IN
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-12 w-full bg-slate-700/50 border-slate-600 text-white hover:border-neon/50 focus:border-neon focus:ring-neon/20 justify-start text-left",
                        !checkIn && "text-slate-300"
                      )}
                    >
                      <CalendarDays className="w-4 h-4 mr-2" />
                      {checkIn ? format(checkIn, "dd MMM, yy") : "08 SEP, 25"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-600 z-[9999]" align="start">
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

              {/* CHECK-OUT */}
              <div className="space-y-2">
                <label className="text-neon text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                  <CalendarDays className="w-3 h-3" />
                  CHECK-OUT
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-12 w-full bg-slate-700/50 border-slate-600 text-white hover:border-neon/50 focus:border-neon focus:ring-neon/20 justify-start text-left",
                        !checkOut && "text-slate-300"
                      )}
                    >
                      <CalendarDays className="w-4 h-4 mr-2" />
                      {checkOut ? format(checkOut, "dd MMM, yy") : "09 SEP, 25"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-600 z-[9999]" align="start">
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

              {/* GUESTS */}
              <div className="space-y-2">
                <label className="text-neon text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-3 h-3" />
                  GUESTS
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-12 w-full bg-slate-700/50 border-slate-600 text-white hover:border-neon/50 focus:border-neon focus:ring-neon/20 justify-start text-left"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      {rooms} ROOM, {adults} GUESTS
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 p-4 bg-slate-800 border-slate-600 text-white z-[9999]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Rooms</span>
                        <Select value={rooms} onValueChange={setRooms}>
                          <SelectTrigger className="w-16 h-8 text-sm bg-slate-700 border-slate-600">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Adults</span>
                        <Select value={adults} onValueChange={setAdults}>
                          <SelectTrigger className="w-16 h-8 text-sm bg-slate-700 border-slate-600">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Children</span>
                        <Select value={children} onValueChange={setChildren}>
                          <SelectTrigger className="w-16 h-8 text-sm bg-slate-700 border-slate-600">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600 text-white">
                            {[0, 1, 2, 3, 4].map((num) => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* BOOK NOW Button */}
              <div>
                <Button 
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-neon to-neon-glow hover:from-neon-glow hover:to-neon text-neon-foreground font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Search className="w-4 h-4 mr-2" />
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

