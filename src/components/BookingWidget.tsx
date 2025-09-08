import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
export function BookingWidget({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const defaultHeight = isMobile ? 420 : 160;
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Only use scaling for very small screens where horizontal layout would be unusable
  const useVerticalLayout = isMobile;

  useEffect(() => {
    // Expose the height change function expected by RateGain
    (window as any).changeIframeHeight = (newHeight: number) => {
      const iframe = document.getElementById(
        "86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
      ) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.style.height = `${Math.max(newHeight, defaultHeight)}px`;
      }
    };

    // Message listener for RateGain widget
    const handleMessage = (event: MessageEvent) => {
      // Handshake for DLYX (RateGain requirement)
      if (event.data === 'GET_DLYX' && event.source) {
        (event.source as Window).postMessage({ dlyx: (window as any).dlyx }, '*');
        return;
      }

      // Try to detect height messages from the widget and resize iframe
      try {
        const data: any = event.data;
        let newHeight: number | undefined;

        if (typeof data === 'number') newHeight = data;
        else if (typeof data === 'string') {
          const match = data.match(/(height|iframeHeight|rgHeight)[^0-9]*(\d{2,4})/i);
          if (match) newHeight = parseInt(match[2], 10);
        } else if (data && typeof data === 'object') {
          newHeight = data.height || data.iframeHeight || data.rgHeight || data.newHeight || data.h;
        }

        if (typeof newHeight === 'number' && newHeight > 0) {
          (window as any).changeIframeHeight(Math.max(newHeight, defaultHeight));
        }
      } catch {}
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      try { 
        delete (window as any).changeIframeHeight; 
      } catch {}
    };
  }, []);

  return (
    <div className={cn("w-full relative", className)}>
      {/* World-class wrapper for RateGain widget */}
      <div className="relative">
        {/* Luxury background effects - hidden on mobile */}
        <div className={`absolute -inset-4 bg-gradient-to-r from-neon/10 via-neon-glow/20 to-neon/10 rounded-3xl blur-2xl opacity-60 ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
        <div className={`absolute -inset-2 bg-gradient-to-r from-neon/15 via-transparent to-neon/15 rounded-3xl blur-xl ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
        
        {/* Premium glass container - simplified on mobile */}
        <div className={`relative ${useVerticalLayout ? 'bg-transparent' : 'bg-card/95 backdrop-blur-xl border border-neon/20 rounded-3xl shadow-2xl'} overflow-visible`}>
          {/* Luxury accent borders - hidden on mobile */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
          
          <div className={`relative ${useVerticalLayout ? 'z-0 p-2' : 'z-10 p-6 md:p-8'}`} style={{ minHeight: (useVerticalLayout ? defaultHeight + 200 : defaultHeight + 80) }}>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-neon text-sm">★</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Reserve Your <span className="text-neon">Luxury Stay</span>
              </h3>
              <p className="text-muted-foreground">
                Experience unparalleled luxury with instant confirmation
              </p>
            </div>

            {/* RateGain Widget Container */}
            <div 
              id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" 
              className="relative z-50 overflow-visible w-full"
              style={{ minHeight: defaultHeight }}
              ref={containerRef}
            >
              <iframe 
                srcDoc={`
                  <html lang='en'>
                    <head>
                      <title>Booking Engine Widget</title>
                      <link href='https://ibe.rategain.com/widget/index.css' rel='stylesheet'/>
                    <style>
                        html, body { 
                          margin: 0; 
                          padding: 0; 
                          background: transparent; 
                          overflow: visible !important;
                          height: auto !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                        }
                        #rg-booking-widget {
                          z-index: 9999 !important;
                          position: relative !important;
                          overflow: visible !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          ${useVerticalLayout ? '' : 'min-width: 1024px !important;'}
                        }
                        /* Ensure dropdowns appear above everything */
                        .rg-dropdown, .rg-calendar, .rg-popover, [class*="dropdown"], [class*="calendar"] {
                          z-index: 99999 !important;
                          position: relative !important;
                          overflow: visible !important;
                        }
                    </style>
                    </head>
                    <body>            
                      <div 
                        data-brandID='937bf5e9-7f12-4e04-be25-5e3e823242b7'  
                        data-chainID='d9c3cc24-da05-4697-a759-3bcea2872153'  
                        data-backgroundprimarycolor='#1e293b' 
                        data-backgroundsecondarycolor='#334155'   
                        data-widgetFontColor='#ffffff'   
                        data-widgetSearchFontColorButton='#ffffff'  
                        data-widgetSearchColorButton='#937e27'  
                        data-widgetSearchFontColorHoverstate='#ffffff'   
                        data-widgetSearchColorHoverState='#b89f2a'   
                        id='rg-booking-widget'
                      >
                        <script src='https://ibe.rategain.com/widget/index.js'></script>
                      </div>
                    </body>
                  </html>
                `}
                width="100%" 
                style={{
                  border: 'none', 
                  overflow: useVerticalLayout ? 'auto' : 'visible', 
                  height: defaultHeight, 
                  width: '100%',
                  zIndex: 9999,
                  background: 'transparent',
                  minHeight: defaultHeight
                }} 
                id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
                allow="same-origin"
                scrolling={useVerticalLayout ? "auto" : "no"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

