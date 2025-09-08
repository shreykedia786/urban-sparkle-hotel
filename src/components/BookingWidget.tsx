import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  useEffect(() => {
    // Expose the height change function expected by RateGain
    (window as any).changeIframeHeight = (newHeight: number) => {
      const iframe = document.getElementById(
        "86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
      ) as HTMLIFrameElement | null;
      if (iframe) iframe.style.height = `${Math.max(newHeight, 120)}px`;
    };

    return () => {
      try { delete (window as any).changeIframeHeight; } catch {}
    };
  }, []);

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
            height: "80px", 
            width: "100%",
            zIndex: 9999
          }}
          id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
          allow="same-origin"
          scrolling="no"
        />
      </div>
    </div>
  );
}

