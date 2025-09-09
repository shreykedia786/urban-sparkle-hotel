import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  const [isNarrow, setIsNarrow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mqlTablet = window.matchMedia('(max-width: 1023px)');
    const mqlMobile = window.matchMedia('(max-width: 767px)');
    
    const onChange = () => {
      setIsNarrow(mqlTablet.matches);
      setIsMobile(mqlMobile.matches);
    };
    
    onChange();
    mqlTablet.addEventListener('change', onChange);
    mqlMobile.addEventListener('change', onChange);
    
    return () => {
      mqlTablet.removeEventListener('change', onChange);
      mqlMobile.removeEventListener('change', onChange);
    };
  }, []);

  const defaultHeight = isMobile ? 450 : isNarrow ? 520 : 200;
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Vertical layout for tablets and mobiles (<1024px)
  const useVerticalLayout = isNarrow;

  useEffect(() => {
    // Expose the height change function expected by RateGain
    (window as any).changeIframeHeight = (newHeight: number) => {
      const iframe = document.getElementById(
        "86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
      ) as HTMLIFrameElement | null;
      if (iframe) {
        // Add extra padding for mobile dropdowns
        const extraHeight = isMobile ? 100 : 50;
        iframe.style.height = `${Math.max(newHeight + extraHeight, defaultHeight)}px`;
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
        <div className={`absolute -inset-4 bg-gradient-to-r from-neon/10 via-neon-glow/20 to-neon/10 rounded-3xl blur-2xl opacity-60 pointer-events-none ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
        <div className={`absolute -inset-2 bg-gradient-to-r from-neon/15 via-transparent to-neon/15 rounded-3xl blur-xl pointer-events-none ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
        
        {/* Premium glass container - responsive design */}
        <div className={`relative ${useVerticalLayout ? 'bg-transparent' : 'bg-card/95 backdrop-blur-xl border border-neon/20 rounded-3xl shadow-2xl'} overflow-visible`}>
          {/* Luxury accent borders - hidden on mobile */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent ${useVerticalLayout ? 'hidden' : 'block'}`}></div>
          
          <div className={`relative ${useVerticalLayout ? 'z-0' : 'z-10'} ${isMobile ? 'p-2' : isNarrow ? 'p-4' : 'p-6 md:p-8'}`} style={{ minHeight: defaultHeight }}>
            {/* Header - responsive */}
            <div className={`text-center ${useVerticalLayout ? 'mb-3' : 'mb-6'}`}>
              <div className={`flex justify-center gap-1 mb-2 ${isMobile ? 'hidden' : 'block'}`}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-neon text-sm">★</span>
                ))}
              </div>
              <h3 className={`${isMobile ? 'text-lg' : isNarrow ? 'text-xl' : 'text-2xl'} font-bold text-foreground mb-2`}>
                Reserve Your <span className="text-neon">Luxury Stay</span>
              </h3>
              <p className={`text-muted-foreground ${isMobile ? 'text-xs px-1' : isNarrow ? 'text-sm px-2' : ''}`}>
                Experience unparalleled luxury with instant confirmation
              </p>
            </div>

            {/* RateGain Widget Container */}
            <div 
              id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" 
              className="relative z-[9999] overflow-visible w-full"
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
                          touch-action: manipulation !important;
                          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                        }
                        
                        /* Premium Widget Container */
                        #rg-booking-widget {
                          z-index: 9999 !important;
                          position: relative !important;
                          overflow: hidden !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          max-width: 100% !important;
                          background: linear-gradient(135deg, rgba(147, 126, 39, 0.05) 0%, rgba(184, 159, 42, 0.1) 100%) !important;
                          border-radius: 16px !important;
                          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
                          backdrop-filter: blur(8px) !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          ${isMobile ? 'font-size: 14px !important; box-sizing: border-box !important;' : ''}
                        }
                        
                        /* Premium Form Styling */
                        .rg-form, .rg-booking-form, [class*="form"] {
                          background: transparent !important;
                          padding: ${isMobile ? '16px' : '24px'} !important;
                          border-radius: 12px !important;
                        }
                        
                        /* Luxury Input Fields */
                        .rg-input, .rg-select, input, select {
                          background: rgba(255, 255, 255, 0.95) !important;
                          border: 2px solid rgba(147, 126, 39, 0.3) !important;
                          border-radius: 12px !important;
                          padding: ${isMobile ? '12px 16px' : '16px 20px'} !important;
                          font-size: ${isMobile ? '14px' : '16px'} !important;
                          font-weight: 500 !important;
                          color: #1a1a1a !important;
                          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                          box-shadow: 0 2px 8px rgba(147, 126, 39, 0.1) !important;
                          min-height: ${isMobile ? '48px' : '56px'} !important;
                          width: 100% !important;
                          max-width: 100% !important;
                        }
                        
                        .rg-input:focus, .rg-select:focus, input:focus, select:focus {
                          outline: none !important;
                          border-color: #937e27 !important;
                          box-shadow: 0 0 0 4px rgba(147, 126, 39, 0.2), 0 4px 16px rgba(147, 126, 39, 0.3) !important;
                          transform: translateY(-2px) !important;
                        }
                        
                        .rg-input:hover, .rg-select:hover, input:hover, select:hover {
                          border-color: rgba(147, 126, 39, 0.5) !important;
                          box-shadow: 0 4px 12px rgba(147, 126, 39, 0.2) !important;
                        }
                        
                        /* World-Class Dropdown Styling */
                        .rg-dropdown, .rg-dropdown-menu, .rg-select-menu, .rg-calendar, .rg-popover, 
                        [class*="dropdown"], [class*="menu"], [class*="calendar"], [role="listbox"], 
                        [aria-haspopup="listbox"], .rg-options, [class*="options"] {
                          z-index: 2147483647 !important;
                          overflow: visible !important;
                          position: ${isNarrow ? 'fixed' : 'absolute'} !important;
                          background: rgba(255, 255, 255, 0.98) !important;
                          backdrop-filter: blur(20px) !important;
                          border: 2px solid rgba(147, 126, 39, 0.2) !important;
                          border-radius: 16px !important;
                          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(147, 126, 39, 0.2) !important;
                          margin-top: 8px !important;
                          animation: dropdownSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                          ${isMobile ? 'left: 10px !important; right: 10px !important; width: auto !important; max-height: 250px !important;' : 'min-width: 250px !important;'}
                        }
                        
                        /* Dropdown Items */
                        .rg-dropdown-item, .rg-option, [class*="option"], [role="option"] {
                          padding: ${isMobile ? '12px 16px' : '16px 20px'} !important;
                          color: #1a1a1a !important;
                          font-weight: 500 !important;
                          border-bottom: 1px solid rgba(147, 126, 39, 0.1) !important;
                          transition: all 0.2s ease !important;
                          cursor: pointer !important;
                        }
                        
                        .rg-dropdown-item:hover, .rg-option:hover, [class*="option"]:hover, [role="option"]:hover {
                          background: linear-gradient(135deg, rgba(147, 126, 39, 0.1) 0%, rgba(184, 159, 42, 0.15) 100%) !important;
                          color: #937e27 !important;
                          transform: translateX(4px) !important;
                        }
                        
                        .rg-dropdown-item:last-child, .rg-option:last-child {
                          border-bottom: none !important;
                        }
                        
                        /* Premium Button Styling */
                        .rg-button, .rg-submit, button, [type="submit"] {
                          background: linear-gradient(135deg, #937e27 0%, #b89f2a 100%) !important;
                          border: none !important;
                          border-radius: 12px !important;
                          color: white !important;
                          font-weight: 600 !important;
                          font-size: ${isMobile ? '16px' : '18px'} !important;
                          padding: ${isMobile ? '14px 24px' : '18px 32px'} !important;
                          cursor: pointer !important;
                          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                          box-shadow: 0 4px 16px rgba(147, 126, 39, 0.3) !important;
                          text-transform: uppercase !important;
                          letter-spacing: 0.5px !important;
                          min-height: ${isMobile ? '52px' : '60px'} !important;
                        }
                        
                        .rg-button:hover, .rg-submit:hover, button:hover, [type="submit"]:hover {
                          background: linear-gradient(135deg, #b89f2a 0%, #937e27 100%) !important;
                          transform: translateY(-3px) !important;
                          box-shadow: 0 8px 24px rgba(147, 126, 39, 0.4) !important;
                        }
                        
                        .rg-button:active, .rg-submit:active, button:active, [type="submit"]:active {
                          transform: translateY(-1px) !important;
                          box-shadow: 0 4px 12px rgba(147, 126, 39, 0.3) !important;
                        }
                        
                        /* Form Groups & Layout */
                        .rg-form-group, .rg-input-group, [class*="form-group"], [class*="input-group"] {
                          margin-bottom: ${isMobile ? '16px' : '20px'} !important;
                          width: 100% !important;
                        }
                        
                        /* Labels */
                        .rg-label, label {
                          color: #2d3748 !important;
                          font-weight: 600 !important;
                          font-size: ${isMobile ? '14px' : '16px'} !important;
                          margin-bottom: 8px !important;
                          display: block !important;
                        }
                        
                        /* Premium Calendar Styling */
                        .rg-calendar {
                          background: rgba(255, 255, 255, 0.98) !important;
                          border-radius: 20px !important;
                          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
                          border: 2px solid rgba(147, 126, 39, 0.2) !important;
                          padding: 20px !important;
                        }
                        
                        .rg-calendar-day, [class*="day"] {
                          border-radius: 8px !important;
                          transition: all 0.2s ease !important;
                        }
                        
                        .rg-calendar-day:hover, [class*="day"]:hover {
                          background: rgba(147, 126, 39, 0.1) !important;
                          transform: scale(1.05) !important;
                        }
                        
                        /* Animation Keyframes */
                        @keyframes dropdownSlideIn {
                          0% {
                            opacity: 0;
                            transform: translateY(-10px) scale(0.95);
                          }
                          100% {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                          }
                        }
                        
                        /* Responsive Optimizations */
                        ${isMobile ? `
                          * { box-sizing: border-box !important; }
                          .rg-form-row, [class*="row"] {
                            flex-direction: column !important;
                            gap: 16px !important;
                          }
                          .rg-dropdown-menu {
                            max-height: 200px !important;
                            overflow-y: auto !important;
                          }
                        ` : ''}
                        
                        /* Tablet optimizations */
                        ${isNarrow && !isMobile ? `
                          .rg-input, .rg-select, .rg-button {
                            min-height: 52px !important;
                          }
                        ` : ''}
                        
                        /* Loading States */
                        .rg-loading, [class*="loading"] {
                          background: linear-gradient(90deg, rgba(147, 126, 39, 0.1) 0%, rgba(184, 159, 42, 0.2) 50%, rgba(147, 126, 39, 0.1) 100%) !important;
                          background-size: 200% 100% !important;
                          animation: loading 1.5s ease-in-out infinite !important;
                        }
                        
                        @keyframes loading {
                          0% { background-position: 200% 0; }
                          100% { background-position: -200% 0; }
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
                      <script>
                        (function(){
                          function send(){
                            var root=document.getElementById('rg-booking-widget');
                            var h=Math.max(
                              root?root.scrollHeight:0,
                              document.body.scrollHeight,
                              document.documentElement.scrollHeight
                            );
                            try{ parent.postMessage({ newHeight: h+16 }, '*'); }catch(e){}
                          }
                          var ro=new ResizeObserver(send);
                          ro.observe(document.body);
                          var mo=new MutationObserver(send);
                          mo.observe(document.body,{childList:true,subtree:true,attributes:true});
                          window.addEventListener('load',send);
                          setInterval(send,1200);
                          send();
                        })();
                      </script>
                    </body>
                  </html>
                `}
                width="100%" 
                style={{
                  border: 'none', 
                  overflow: 'hidden', 
                  height: defaultHeight, 
                  width: '100%',
                  maxWidth: '100%',
                  zIndex: 9999,
                  background: 'transparent',
                  minHeight: defaultHeight,
                  touchAction: 'manipulation'
                }}
                id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
                allow="same-origin"
                scrolling={isMobile ? "yes" : "no"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

