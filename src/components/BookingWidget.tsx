import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  return (
    <div className={cn("w-full relative z-50", className)}>
      {/* Embedded RateGain Booking Widget via static file */}
      <div className="relative z-50 overflow-visible">
        <iframe
          src="/rg-widget.html"
          title="Booking Engine Widget"
          width="100%"
          style={{ 
            border: "none", 
            overflow: "visible", 
            height: "120px", 
            width: "100%",
            zIndex: 9999
          }}
          id="rg-booking-iframe"
          allow="same-origin"
          scrolling="no"
        />
      </div>
    </div>
  );
}
