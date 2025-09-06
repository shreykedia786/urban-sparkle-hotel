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
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* 5-Star Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your <span className="text-amber-500">Luxury Stay</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 font-medium">
            Experience unparalleled luxury with instant confirmation and our best rate guarantee
          </p>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Destination */}
          <div className="space-y-3">
            <Label className="text-amber-600 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-16 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-medium hover:border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all">
                <SelectValue placeholder="Donatello Hot..." className="text-gray-900" />
              </SelectTrigger>
              <SelectContent className="bg-white border-0 shadow-xl rounded-xl z-[9999]">
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest} className="text-lg py-3 px-4 hover:bg-amber-50 focus:bg-amber-50">
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Check-in */}
          <div className="space-y-3">
            <Label className="text-amber-600 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Arrival
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-16 w-full bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-medium hover:border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all justify-start text-left",
                    !checkIn && "text-gray-500"
                  )}
                >
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-0 shadow-xl rounded-xl z-[9999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-4 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out */}
          <div className="space-y-3">
            <Label className="text-amber-600 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Departure
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-16 w-full bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-medium hover:border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all justify-start text-left",
                    !checkOut && "text-gray-500"
                  )}
                >
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-0 shadow-xl rounded-xl z-[9999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-4 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-3">
            <Label className="text-amber-600 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guests
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-16 w-full bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-medium hover:border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all justify-between"
                >
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{rooms} Room</div>
                    <div className="text-sm text-gray-600">{adults} Adults</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6 bg-white border-0 shadow-xl rounded-xl z-[9999]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium text-gray-900">Rooms</Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-lg z-[9999]">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-lg py-3">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium text-gray-900">Adults</Label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-lg z-[9999]">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-lg py-3">
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium text-gray-900">Children</Label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-20 h-12 text-lg font-medium rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-lg z-[9999]">
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

        {/* Search Button */}
        <div className="mb-8">
          <Button 
            size="lg"
            className="w-64 h-16 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mx-auto block"
          >
            <Search className="w-5 h-5 mr-3" />
            SEARCH
          </Button>
        </div>

        {/* Promo Code Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end max-w-4xl mx-auto">
            <div className="flex-1">
              <Label className="text-amber-600 text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4" />
                Promotional Code (Optional)
              </Label>
              <Input
                placeholder="Enter your promotional code for exclusive offers"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-14 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg font-medium hover:border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all"
              />
            </div>
            <Button 
              variant="outline"
              className="h-14 px-8 bg-amber-50 border-2 border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-300 font-semibold text-lg rounded-xl transition-all"
            >
              APPLY CODE
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Secure Booking</h3>
              <p className="text-gray-600">SSL encrypted</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Instant Confirmation</h3>
              <p className="text-gray-600">Real-time booking</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Best Rate Guarantee</h3>
              <p className="text-gray-600">Price match promise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}