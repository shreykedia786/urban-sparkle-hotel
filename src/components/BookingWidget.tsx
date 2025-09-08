import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      {/* Embedded RateGain Booking Widget via static file to avoid srcDoc/CSP issues */}
      <iframe
        src="/rg-widget.html"
        title="Booking Engine Widget"
        width="100%"
        style={{ border: "none", overflow: "hidden", height: "100px", width: "100%" }}
        id="rg-booking-iframe"
      />
    </div>
  );
}
