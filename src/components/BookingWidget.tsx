import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" className="w-full">
        <iframe
          title="Booking Engine Widget"
          src="/rg-widget.html"
          width="100%"
          height={600}
          style={{ border: "none", overflow: "hidden" }}
          loading="lazy"
          id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
        />
      </div>
    </div>
  );
}
