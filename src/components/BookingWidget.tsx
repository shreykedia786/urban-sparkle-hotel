import { useState } from "react";
import { CalendarDays, MapPin, Users, ChevronDown } from "lucide-react";
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
    <div className={cn("w-full max-w-full", className)}>
      {/* Booking Widget Structure - matching uploaded image */}
      <div className="bg-slate-800 rounded-lg flex flex-col xl:flex-row items-stretch min-h-[80px]">
        
        {/* DESTINATION */}
        <div className="flex-1 p-4 border-r border-slate-600 last:border-r-0">
          <div className="text-white text-xs font-medium uppercase tracking-wider mb-2">DESTINATION</div>
          <div className="flex items-center text-white">
            <MapPin className="w-4 h-4 mr-2 text-slate-300" />
            <span className="font-medium">Donatello Hotel</span>
          </div>
        </div>

        {/* CHECK-IN */}
        <div className="flex-1 p-4 border-r border-slate-600 last:border-r-0">
          <div className="text-white text-xs font-medium uppercase tracking-wider mb-2">CHECK-IN</div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center text-white w-full text-left">
                <CalendarDays className="w-4 h-4 mr-2 text-slate-300" />
                <span className="font-medium">
                  {checkIn ? format(checkIn, "dd MMM, yy") : "08 SEP, 25"}
                </span>
              </button>
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

        {/* CHECK-OUT */}
        <div className="flex-1 p-4 border-r border-slate-600 last:border-r-0">
          <div className="text-white text-xs font-medium uppercase tracking-wider mb-2">CHECK-OUT</div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center text-white w-full text-left">
                <CalendarDays className="w-4 h-4 mr-2 text-slate-300" />
                <span className="font-medium">
                  {checkOut ? format(checkOut, "dd MMM, yy") : "09 SEP, 25"}
                </span>
              </button>
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

        {/* GUESTS */}
        <div className="flex-1 p-4 border-r border-slate-600 last:border-r-0">
          <div className="text-white text-xs font-medium uppercase tracking-wider mb-2">GUESTS</div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center text-white w-full text-left">
                <Users className="w-4 h-4 mr-2 text-slate-300" />
                <span className="font-medium">{rooms} ROOM, {adults} GUESTS</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 bg-popover border-0 shadow-card rounded-lg z-[9999]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">Rooms</span>
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
                  <span className="text-base font-medium text-foreground">Adults</span>
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
                  <span className="text-base font-medium text-foreground">Children</span>
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

        {/* SELECTED RATE */}
        <div className="flex-1 p-4 border-r border-slate-600 last:border-r-0">
          <div className="text-white text-xs font-medium uppercase tracking-wider mb-2">SELECTED RATE</div>
          <div className="text-white">
            <span className="font-medium">Regular Rate</span>
          </div>
        </div>

        {/* BOOK NOW Button */}
        <div className="p-2">
          <Button className="h-full px-8 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-sm uppercase tracking-wider rounded-md">
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
}