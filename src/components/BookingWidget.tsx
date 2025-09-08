import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  useEffect(() => {
    // Expose the height change function expected by RateGain
    (window as any).changeIframeHeight = (newHeight: number) => {
      const iframe = document.getElementById(
        "86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
      ) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.style.height = `${Math.max(newHeight, 80)}px`;
      }
    };

    // Message listener for RateGain widget
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'GET_DLYX' && event.source) {
        (event.source as Window).postMessage({ dlyx: (window as any).dlyx }, '*');
      }
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
        {/* Luxury background effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-neon/10 via-neon-glow/20 to-neon/10 rounded-3xl blur-2xl opacity-60"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-neon/15 via-transparent to-neon/15 rounded-3xl blur-xl"></div>
        
        {/* Premium glass container */}
        <div className="relative bg-card/95 backdrop-blur-xl border border-neon/20 rounded-3xl shadow-2xl overflow-visible">
          {/* Luxury accent borders */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"></div>
          
          <div className="relative z-10 p-8">
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
              className="relative z-50 overflow-visible"
              style={{ minHeight: '80px' }}
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
                        }
                        #rg-booking-widget {
                          z-index: 9999 !important;
                          position: relative !important;
                          overflow: visible !important;
                        }
                        /* Ensure dropdowns appear above everything */
                        .rg-dropdown, .rg-calendar, .rg-popover, [class*="dropdown"], [class*="calendar"] {
                          z-index: 99999 !important;
                          position: relative !important;
                          overflow: visible !important;
                        }
                        /* Style the widget to match luxury theme */
                        .rg-widget-container {
                          border-radius: 12px !important;
                          overflow: visible !important;
                        }
                      </style>
                    </head>
                    <body>            
                      <div 
                        data-brandID='937bf5e9-7f12-4e04-be25-5e3e823242b7'  
                        data-chainID='d9c3cc24-da05-4697-a759-3bcea2872153'  
                        data-backgroundprimarycolor='#937e27' 
                        data-backgroundsecondarycolor='#937e27'   
                        data-widgetFontColor='#ffffff'   
                        data-widgetSearchFontColorButton='#1a1a1a'  
                        data-widgetSearchColorButton='#d4c342'  
                        data-widgetSearchFontColorHoverstate='#1a1a1a'   
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
                  overflow: 'visible', 
                  height: '80px', 
                  width: '100%',
                  zIndex: 9999,
                  background: 'transparent'
                }} 
                id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
                allow="same-origin"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

