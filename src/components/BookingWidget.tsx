import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  useEffect(() => {
    const existing = document.querySelector(
      "script[data-rg-widget]"
    ) as HTMLScriptElement | null;

    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://ibe.rategain.com/widget/index.js";
      s.async = true;
      s.setAttribute("data-rg-widget", "true");
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <div id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" className="w-full">
        <div
          id="rg-booking-widget"
          data-brandid="937bf5e9-7f12-4e04-be25-5e3e823242b7"
          data-chainid="d9c3cc24-da05-4697-a759-3bcea2872153"
          data-backgroundprimarycolor="#937e27"
          data-backgroundsecondarycolor="#937e27"
          data-widgetfontcolor="#fff"
          data-widgetsearchfontcolorbutton="#100d0d"
          data-widgetsearchcolorbutton="#dcd135"
          data-widgetsearchfontcolorhoverstate="null"
          data-widgetsearchcolorhoverstate="#896551"
          style={{ minHeight: 120 }}
        />
      </div>
    </div>
  );
}
