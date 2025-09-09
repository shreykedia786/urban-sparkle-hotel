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
        const target = Math.max(Math.ceil(newHeight) + 4, defaultHeight);
        iframe.style.height = `${target}px`;
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
          console.info('RG iframe height update', { newHeight });
          (window as any).changeIframeHeight(newHeight);
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
                      <title>Luxury Booking Engine</title>
                      <link href='https://ibe.rategain.com/widget/index.css' rel='stylesheet'/>
                      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet'/>
                    <style>
                        /* === REFINED LUXURY STYLING FOR RATEGAIN === */
                        html, body { 
                          margin: 0; 
                          padding: 0; 
                          background: transparent; 
                          overflow: visible !important;
                          height: auto !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
                          -webkit-font-smoothing: antialiased;
                        }

                        /* === MAIN WIDGET - WORK WITH RATEGAIN STRUCTURE === */
                        #rg-booking-widget {
                          z-index: 9999 !important;
                          position: relative !important;
                          overflow: visible !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          max-width: 100% !important;
                          font-family: 'Inter', sans-serif !important;
                          background: rgba(255, 255, 255, 0.95) !important;
                          backdrop-filter: blur(10px) !important;
                          border-radius: 16px !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(147, 126, 39, 0.1) !important;
                          padding: ${isMobile ? '16px' : '20px'} !important;
                          ${isMobile ? 'font-size: 14px !important;' : ''}
                        }

                        /* === ENHANCE EXISTING FORM ELEMENTS === */
                        #rg-booking-widget input[type="text"],
                        #rg-booking-widget input[type="email"], 
                        #rg-booking-widget input[type="tel"],
                        #rg-booking-widget select,
                        #rg-booking-widget .form-control {
                          background: rgba(255, 255, 255, 0.9) !important;
                          border: 2px solid rgba(147, 126, 39, 0.15) !important;
                          border-radius: 8px !important;
                          padding: ${isMobile ? '12px 14px' : '14px 16px'} !important;
                          font-size: ${isMobile ? '14px' : '15px'} !important;
                          font-weight: 500 !important;
                          color: #1e293b !important;
                          transition: all 0.2s ease !important;
                          min-height: ${isMobile ? '44px' : '48px'} !important;
                          font-family: 'Inter', sans-serif !important;
                          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
                        }

                        #rg-booking-widget input:focus,
                        #rg-booking-widget select:focus,
                        #rg-booking-widget .form-control:focus {
                          outline: none !important;
                          border-color: #937e27 !important;
                          box-shadow: 0 0 0 3px rgba(147, 126, 39, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08) !important;
                        }

                        #rg-booking-widget input:hover,
                        #rg-booking-widget select:hover,
                        #rg-booking-widget .form-control:hover {
                          border-color: rgba(147, 126, 39, 0.25) !important;
                          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06) !important;
                        }

                        /* === ENHANCE LABELS === */
                        #rg-booking-widget label,
                        #rg-booking-widget .form-label {
                          font-size: ${isMobile ? '11px' : '12px'} !important;
                          font-weight: 600 !important;
                          color: #64748b !important;
                          text-transform: uppercase !important;
                          letter-spacing: 0.5px !important;
                          margin-bottom: 6px !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        /* === LUXURY BUTTONS === */
                        #rg-booking-widget button,
                        #rg-booking-widget .btn,
                        #rg-booking-widget input[type="submit"] {
                          background: linear-gradient(135deg, #937e27 0%, #d4c342 100%) !important;
                          border: none !important;
                          border-radius: 8px !important;
                          padding: ${isMobile ? '12px 20px' : '14px 24px'} !important;
                          font-size: ${isMobile ? '14px' : '15px'} !important;
                          font-weight: 600 !important;
                          color: #ffffff !important;
                          text-transform: uppercase !important;
                          letter-spacing: 0.5px !important;
                          cursor: pointer !important;
                          transition: all 0.2s ease !important;
                          min-height: ${isMobile ? '44px' : '48px'} !important;
                          box-shadow: 0 3px 8px rgba(147, 126, 39, 0.25) !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        #rg-booking-widget button:hover,
                        #rg-booking-widget .btn:hover,
                        #rg-booking-widget input[type="submit"]:hover {
                          transform: translateY(-1px) !important;
                          box-shadow: 0 5px 12px rgba(147, 126, 39, 0.35) !important;
                          background: linear-gradient(135deg, #d4c342 0%, #937e27 100%) !important;
                        }

                        #rg-booking-widget button:active,
                        #rg-booking-widget .btn:active {
                          transform: translateY(0) !important;
                        }

                        /* === ENHANCED DROPDOWNS - WORK WITH EXISTING STRUCTURE === */
                        .ui-datepicker,
                        .ui-selectmenu-menu,
                        .ui-autocomplete,
                        [class*="dropdown"],
                        [class*="picker"],
                        [class*="menu"] {
                          z-index: 999999 !important;
                          background: rgba(255, 255, 255, 0.98) !important;
                          backdrop-filter: blur(15px) !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          border-radius: 12px !important;
                          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
                          padding: 8px !important;
                          overflow: visible !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        /* === CALENDAR STYLING === */
                        .ui-datepicker {
                          ${isMobile ? 'width: calc(100vw - 20px) !important; left: 10px !important;' : 'min-width: 280px !important;'}
                          padding: 16px !important;
                        }

                        .ui-datepicker-header {
                          background: transparent !important;
                          border: none !important;
                          padding: 8px 0 16px 0 !important;
                          text-align: center !important;
                        }

                        .ui-datepicker-title {
                          font-size: 16px !important;
                          font-weight: 700 !important;
                          color: #1e293b !important;
                        }

                        .ui-datepicker-prev,
                        .ui-datepicker-next {
                          background: rgba(147, 126, 39, 0.1) !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          border-radius: 6px !important;
                          width: 32px !important;
                          height: 32px !important;
                          cursor: pointer !important;
                        }

                        .ui-datepicker-prev:hover,
                        .ui-datepicker-next:hover {
                          background: #937e27 !important;
                          color: white !important;
                        }

                        .ui-datepicker td {
                          padding: 2px !important;
                        }

                        .ui-datepicker td a {
                          padding: 8px !important;
                          text-align: center !important;
                          border-radius: 6px !important;
                          transition: all 0.2s ease !important;
                          color: #1e293b !important;
                          text-decoration: none !important;
                          font-weight: 500 !important;
                        }

                        .ui-datepicker td a:hover {
                          background: rgba(147, 126, 39, 0.1) !important;
                          color: #937e27 !important;
                        }

                        .ui-datepicker td.ui-datepicker-today a {
                          background: rgba(147, 126, 39, 0.15) !important;
                          color: #937e27 !important;
                          font-weight: 600 !important;
                        }

                        .ui-datepicker td.ui-state-active a,
                        .ui-datepicker td a.ui-state-active {
                          background: linear-gradient(135deg, #937e27 0%, #d4c342 100%) !important;
                          color: white !important;
                          font-weight: 600 !important;
                          box-shadow: 0 2px 6px rgba(147, 126, 39, 0.3) !important;
                        }

                        /* === DROPDOWN MENU ITEMS === */
                        .ui-selectmenu-menu .ui-menu-item,
                        .ui-autocomplete .ui-menu-item,
                        [class*="dropdown"] [class*="item"],
                        [class*="menu"] [class*="item"] {
                          padding: 10px 12px !important;
                          border-radius: 6px !important;
                          margin: 2px 0 !important;
                          transition: all 0.2s ease !important;
                          cursor: pointer !important;
                          font-size: 14px !important;
                          font-weight: 500 !important;
                          color: #1e293b !important;
                        }

                        .ui-selectmenu-menu .ui-menu-item:hover,
                        .ui-autocomplete .ui-menu-item:hover,
                        .ui-state-hover {
                          background: rgba(147, 126, 39, 0.1) !important;
                          color: #937e27 !important;
                        }

                        .ui-selectmenu-menu .ui-state-active,
                        .ui-autocomplete .ui-state-active {
                          background: linear-gradient(135deg, #937e27 0%, #d4c342 100%) !important;
                          color: white !important;
                        }

                        /* === FORM LAYOUT IMPROVEMENTS === */
                        #rg-booking-widget .form-row,
                        #rg-booking-widget .row {
                          display: flex !important;
                          gap: ${isMobile ? '8px' : '12px'} !important;
                          margin-bottom: 12px !important;
                          flex-wrap: ${useVerticalLayout ? 'wrap' : 'nowrap'} !important;
                        }

                        #rg-booking-widget .form-group,
                        #rg-booking-widget .col {
                          flex: 1 !important;
                          min-width: ${useVerticalLayout ? '100%' : '120px'} !important;
                        }

                        /* === MOBILE OPTIMIZATIONS === */
                        ${isMobile ? `
                          #rg-booking-widget .form-row,
                          #rg-booking-widget .row {
                            flex-direction: column !important;
                          }
                          
                          #rg-booking-widget .form-group,
                          #rg-booking-widget .col {
                            min-width: 100% !important;
                          }

                          .ui-selectmenu-menu,
                          .ui-autocomplete {
                            max-height: 200px !important;
                            overflow-y: auto !important;
                          }
                        ` : ''}

                        /* === LOADING STATES === */
                        #rg-booking-widget .loading,
                        #rg-booking-widget [class*="loading"] {
                          background: linear-gradient(90deg, rgba(147, 126, 39, 0.1) 25%, rgba(147, 126, 39, 0.2) 50%, rgba(147, 126, 39, 0.1) 75%) !important;
                          background-size: 200% 100% !important;
                          animation: shimmer 1.5s infinite !important;
                        }

                        @keyframes shimmer {
                          0% { background-position: -200% 0; }
                          100% { background-position: 200% 0; }
                        }

                        /* === OVERRIDE RATEGAIN DEFAULT COLORS === */
                        #rg-booking-widget * {
                          font-family: 'Inter', sans-serif !important;
                        }

                        /* === ENSURE PROPER SPACING === */
                        #rg-booking-widget > * {
                          margin-bottom: 8px !important;
                        }

                        #rg-booking-widget > *:last-child {
                          margin-bottom: 0 !important;
                        }
                    </style>
                    </head>
                    <body>            
                      <div 
                        data-brandID='937bf5e9-7f12-4e04-be25-5e3e823242b7'  
                        data-chainID='d9c3cc24-da05-4697-a759-3bcea2872153'  
                        data-backgroundprimarycolor='#ffffff' 
                        data-backgroundsecondarycolor='#f8fafc'   
                        data-widgetFontColor='#1e293b'   
                        data-widgetSearchFontColorButton='#ffffff'  
                        data-widgetSearchColorButton='#937e27'  
                        data-widgetSearchFontColorHoverstate='#ffffff'   
                        data-widgetSearchColorHoverState='#d4c342'   
                        id='rg-booking-widget'
                      >
                        <script src='https://ibe.rategain.com/widget/index.js'></script>
                      </div>
                      <script>
                        (function(){
                          function computeDocumentHeight(){
                            var root = document.getElementById('rg-booking-widget');
                            var base = Math.max(
                              root ? root.scrollHeight : 0,
                              document.body.scrollHeight,
                              document.documentElement.scrollHeight
                            );

                            // Include dropdowns and calendars
                            var selectors = '.ui-datepicker, .ui-selectmenu-menu, .ui-autocomplete, [class*="dropdown"], [class*="picker"], [class*="menu"]';
                            var maxBottom = 0;
                            try {
                              var nodes = document.querySelectorAll(selectors);
                              nodes.forEach(function(el){
                                if (el.offsetParent !== null) { // visible element
                                  var rect = el.getBoundingClientRect();
                                  var bottom = rect.bottom + (window.scrollY || window.pageYOffset || 0);
                                  if (bottom > maxBottom) maxBottom = bottom;
                                }
                              });
                            } catch(e) {}

                            return Math.max(base, Math.ceil(maxBottom));
                          }

                          function send(){
                            var h = computeDocumentHeight() + 10;
                            try { parent.postMessage({ newHeight: h }, '*'); } catch(e){}
                          }

                          var ro = new ResizeObserver(send);
                          ro.observe(document.body);
                          var mo = new MutationObserver(send);
                          mo.observe(document.body, { childList: true, subtree: true, attributes: true });
                          
                          // Enhanced event listening for better responsiveness
                          ;['load','click','pointerdown','pointerup','keydown','keyup','input','focusin','focusout','change'].forEach(function(ev){
                            window.addEventListener(ev, send, true);
                          });
                          
                          setInterval(send, 300);
                          send();
                        })();
                      </script>
                    </body>
                  </html>
                `}
                width="100%" 
                style={{
                  border: 'none', 
                  overflow: 'visible', 
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

