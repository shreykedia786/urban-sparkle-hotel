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
                      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' rel='stylesheet'/>
                    <style>
                        /* === LUXURY BOOKING WIDGET DESIGN SYSTEM === */
                        :root {
                          --bg-primary: #1e293b;
                          --bg-secondary: #334155;
                          --bg-card: rgba(255, 255, 255, 0.95);
                          --bg-glass: rgba(255, 255, 255, 0.1);
                          --border-color: rgba(147, 126, 39, 0.2);
                          --text-primary: #1e293b;
                          --text-secondary: #64748b;
                          --text-inverse: #ffffff;
                          --gold: #937e27;
                          --gold-light: #d4c342;
                          --gold-glow: rgba(147, 126, 39, 0.3);
                          --shadow-luxury: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                          --shadow-glow: 0 0 20px rgba(147, 126, 39, 0.2);
                          --border-radius: 16px;
                          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        }

                        html, body { 
                          margin: 0; 
                          padding: 0; 
                          background: transparent; 
                          overflow: visible !important;
                          height: auto !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
                          font-weight: 400;
                          line-height: 1.5;
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;
                        }

                        /* === MAIN WIDGET CONTAINER === */
                        #rg-booking-widget {
                          z-index: 9999 !important;
                          position: relative !important;
                          overflow: visible !important;
                          min-height: ${defaultHeight}px !important;
                          width: 100% !important;
                          max-width: 100% !important;
                          background: var(--bg-card) !important;
                          backdrop-filter: blur(20px) !important;
                          border-radius: var(--border-radius) !important;
                          border: 1px solid var(--border-color) !important;
                          box-shadow: var(--shadow-luxury) !important;
                          padding: ${isMobile ? '16px' : '24px'} !important;
                          ${isMobile ? 'font-size: 14px !important; box-sizing: border-box !important;' : ''}
                        }

                        /* === LUXURY FORM STYLING === */
                        .rg-form, .rg-widget-form, [class*="form"] {
                          display: grid !important;
                          gap: ${isMobile ? '12px' : '16px'} !important;
                          ${useVerticalLayout ? 'grid-template-columns: 1fr !important;' : 'grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;'}
                          align-items: end !important;
                        }

                        /* === LUXURY INPUT FIELDS === */
                        .rg-input, .rg-select, input, select, [class*="input"], [class*="select"] {
                          background: rgba(255, 255, 255, 0.9) !important;
                          border: 2px solid rgba(147, 126, 39, 0.15) !important;
                          border-radius: 12px !important;
                          padding: ${isMobile ? '14px 16px' : '16px 20px'} !important;
                          font-size: ${isMobile ? '14px' : '15px'} !important;
                          font-weight: 500 !important;
                          color: var(--text-primary) !important;
                          transition: var(--transition) !important;
                          min-height: ${isMobile ? '48px' : '56px'} !important;
                          width: 100% !important;
                          max-width: 100% !important;
                          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02) !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        .rg-input:focus, .rg-select:focus, input:focus, select:focus {
                          outline: none !important;
                          border-color: var(--gold) !important;
                          box-shadow: 0 0 0 3px var(--gold-glow), 0 4px 12px rgba(0, 0, 0, 0.08) !important;
                          transform: translateY(-1px) !important;
                        }

                        .rg-input:hover, .rg-select:hover, input:hover, select:hover {
                          border-color: rgba(147, 126, 39, 0.3) !important;
                          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04) !important;
                        }

                        /* === LUXURY LABELS === */
                        .rg-label, label, [class*="label"] {
                          font-size: ${isMobile ? '12px' : '13px'} !important;
                          font-weight: 600 !important;
                          color: var(--text-secondary) !important;
                          text-transform: uppercase !important;
                          letter-spacing: 0.5px !important;
                          margin-bottom: 8px !important;
                          display: block !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        /* === LUXURY SEARCH BUTTON === */
                        .rg-button, .rg-search-button, button, [class*="button"], [class*="search"] {
                          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%) !important;
                          border: 2px solid var(--gold) !important;
                          border-radius: 12px !important;
                          padding: ${isMobile ? '14px 24px' : '16px 32px'} !important;
                          font-size: ${isMobile ? '14px' : '16px'} !important;
                          font-weight: 600 !important;
                          color: var(--text-inverse) !important;
                          text-transform: uppercase !important;
                          letter-spacing: 0.5px !important;
                          cursor: pointer !important;
                          transition: var(--transition) !important;
                          min-height: ${isMobile ? '48px' : '56px'} !important;
                          box-shadow: 0 4px 12px rgba(147, 126, 39, 0.25) !important;
                          font-family: 'Inter', sans-serif !important;
                          position: relative !important;
                          overflow: hidden !important;
                        }

                        .rg-button::before, .rg-search-button::before, button::before {
                          content: '' !important;
                          position: absolute !important;
                          top: 0 !important;
                          left: -100% !important;
                          width: 100% !important;
                          height: 100% !important;
                          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
                          transition: left 0.5s !important;
                        }

                        .rg-button:hover, .rg-search-button:hover, button:hover {
                          transform: translateY(-2px) !important;
                          box-shadow: 0 8px 20px rgba(147, 126, 39, 0.35) !important;
                          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%) !important;
                        }

                        .rg-button:hover::before, .rg-search-button:hover::before, button:hover::before {
                          left: 100% !important;
                        }

                        .rg-button:active, .rg-search-button:active, button:active {
                          transform: translateY(0) !important;
                          box-shadow: 0 4px 12px rgba(147, 126, 39, 0.25) !important;
                        }

                        /* === WORLD-CLASS DROPDOWNS === */
                        .rg-dropdown, .rg-dropdown-menu, .rg-select-menu, .rg-calendar, .rg-popover, 
                        [class*="dropdown"], [class*="menu"], [class*="calendar"], [role="listbox"], [aria-haspopup="listbox"] {
                          z-index: 2147483647 !important;
                          overflow: visible !important;
                          position: absolute !important;
                          transform: translateZ(0) !important;
                          background: rgba(255, 255, 255, 0.98) !important;
                          backdrop-filter: blur(20px) !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          border-radius: 16px !important;
                          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px rgba(147, 126, 39, 0.1) !important;
                          padding: 8px !important;
                          margin-top: 4px !important;
                          animation: dropdownSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                          ${isMobile ? 'left: 10px !important; right: 10px !important; width: auto !important; max-width: calc(100vw - 20px) !important;' : 'min-width: 200px !important;'}
                        }

                        @keyframes dropdownSlideIn {
                          from {
                            opacity: 0;
                            transform: translateY(-8px) scale(0.95);
                          }
                          to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                          }
                        }

                        /* === DROPDOWN ITEMS === */
                        .rg-dropdown-item, .rg-menu-item, .rg-option, 
                        [class*="dropdown"] [class*="item"], [class*="menu"] [class*="item"], [class*="option"] {
                          padding: 12px 16px !important;
                          border-radius: 8px !important;
                          transition: var(--transition) !important;
                          cursor: pointer !important;
                          font-size: 14px !important;
                          font-weight: 500 !important;
                          color: var(--text-primary) !important;
                          margin: 2px 0 !important;
                          font-family: 'Inter', sans-serif !important;
                        }

                        .rg-dropdown-item:hover, .rg-menu-item:hover, .rg-option:hover {
                          background: linear-gradient(135deg, rgba(147, 126, 39, 0.1) 0%, rgba(147, 126, 39, 0.05) 100%) !important;
                          color: var(--gold) !important;
                          transform: translateX(4px) !important;
                        }

                        .rg-dropdown-item:active, .rg-menu-item:active, .rg-option:active,
                        .rg-dropdown-item.selected, .rg-menu-item.selected, .rg-option.selected {
                          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%) !important;
                          color: var(--text-inverse) !important;
                          box-shadow: 0 2px 8px rgba(147, 126, 39, 0.3) !important;
                        }

                        /* === LUXURY CALENDAR === */
                        .rg-calendar {
                          min-width: ${isMobile ? 'calc(100vw - 20px)' : '320px'} !important;
                          padding: 20px !important;
                        }

                        .rg-calendar-header, [class*="calendar"] [class*="header"] {
                          display: flex !important;
                          justify-content: space-between !important;
                          align-items: center !important;
                          margin-bottom: 16px !important;
                          padding-bottom: 16px !important;
                          border-bottom: 1px solid rgba(147, 126, 39, 0.15) !important;
                        }

                        .rg-calendar-nav, .rg-calendar-nav-button, [class*="calendar"] [class*="nav"] {
                          background: rgba(147, 126, 39, 0.1) !important;
                          border: 1px solid rgba(147, 126, 39, 0.2) !important;
                          border-radius: 8px !important;
                          padding: 8px 12px !important;
                          color: var(--gold) !important;
                          font-weight: 600 !important;
                          transition: var(--transition) !important;
                          cursor: pointer !important;
                        }

                        .rg-calendar-nav:hover, .rg-calendar-nav-button:hover {
                          background: var(--gold) !important;
                          color: var(--text-inverse) !important;
                          transform: scale(1.05) !important;
                        }

                        .rg-calendar-title, [class*="calendar"] [class*="title"] {
                          font-size: 18px !important;
                          font-weight: 700 !important;
                          color: var(--text-primary) !important;
                        }

                        .rg-calendar-grid, .rg-calendar-days, [class*="calendar"] [class*="grid"], [class*="calendar"] [class*="days"] {
                          display: grid !important;
                          grid-template-columns: repeat(7, 1fr) !important;
                          gap: 4px !important;
                          margin-top: 12px !important;
                        }

                        .rg-calendar-day, [class*="calendar"] [class*="day"] {
                          padding: 12px !important;
                          border-radius: 8px !important;
                          text-align: center !important;
                          font-weight: 500 !important;
                          cursor: pointer !important;
                          transition: var(--transition) !important;
                          min-height: 40px !important;
                          display: flex !important;
                          align-items: center !important;
                          justify-content: center !important;
                        }

                        .rg-calendar-day:hover, [class*="calendar"] [class*="day"]:hover {
                          background: rgba(147, 126, 39, 0.1) !important;
                          color: var(--gold) !important;
                          transform: scale(1.1) !important;
                        }

                        .rg-calendar-day.selected, .rg-calendar-day.active, [class*="calendar"] [class*="day"].selected {
                          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%) !important;
                          color: var(--text-inverse) !important;
                          box-shadow: 0 4px 12px rgba(147, 126, 39, 0.3) !important;
                          transform: scale(1.05) !important;
                        }

                        /* === RESPONSIVE OPTIMIZATIONS === */
                        ${isMobile ? `
                          * { box-sizing: border-box !important; }
                          
                          .rg-form-group, .rg-input-group {
                            margin-bottom: 12px !important;
                            width: 100% !important;
                          }

                          .rg-dropdown-menu {
                            max-height: 240px !important;
                            overflow-y: auto !important;
                          }

                          .rg-dropdown-menu::-webkit-scrollbar {
                            width: 6px !important;
                          }

                          .rg-dropdown-menu::-webkit-scrollbar-track {
                            background: rgba(147, 126, 39, 0.1) !important;
                            border-radius: 3px !important;
                          }

                          .rg-dropdown-menu::-webkit-scrollbar-thumb {
                            background: var(--gold) !important;
                            border-radius: 3px !important;
                          }
                        ` : ''}

                        /* === TABLET OPTIMIZATIONS === */
                        ${isNarrow && !isMobile ? `
                          .rg-form {
                            grid-template-columns: repeat(2, 1fr) !important;
                          }
                          
                          .rg-button {
                            grid-column: 1 / -1 !important;
                          }
                        ` : ''}

                        /* === LOADING STATES === */
                        .rg-loading, [class*="loading"] {
                          background: linear-gradient(90deg, rgba(147, 126, 39, 0.1) 25%, rgba(147, 126, 39, 0.2) 50%, rgba(147, 126, 39, 0.1) 75%) !important;
                          background-size: 200% 100% !important;
                          animation: shimmer 2s infinite !important;
                        }

                        @keyframes shimmer {
                          0% { background-position: -200% 0; }
                          100% { background-position: 200% 0; }
                        }

                        /* === ERROR STATES === */
                        .rg-error, [class*="error"] {
                          border-color: #ef4444 !important;
                          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
                        }

                        /* === SUCCESS STATES === */
                        .rg-success, [class*="success"] {
                          border-color: #10b981 !important;
                          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
                        }

                        /* === GLASS MORPHISM EFFECTS === */
                        .rg-glass-effect {
                          background: rgba(255, 255, 255, 0.1) !important;
                          backdrop-filter: blur(10px) !important;
                          border: 1px solid rgba(255, 255, 255, 0.2) !important;
                        }

                        /* === LUXURY ANIMATIONS === */
                        @keyframes luxuryPulse {
                          0%, 100% { 
                            box-shadow: 0 0 20px rgba(147, 126, 39, 0.2);
                          }
                          50% { 
                            box-shadow: 0 0 30px rgba(147, 126, 39, 0.4);
                          }
                        }

                        .rg-luxury-pulse {
                          animation: luxuryPulse 2s ease-in-out infinite !important;
                        }
                    </style>
                    </head>
                    <body>            
                      <div 
                        data-brandID='937bf5e9-7f12-4e04-be25-5e3e823242b7'  
                        data-chainID='d9c3cc24-da05-4697-a759-3bcea2872153'  
                        data-backgroundprimarycolor='#1e293b' 
                        data-backgroundsecondarycolor='#334155'   
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

                            // Include absolutely/fixed-positioned dropdowns, calendars, popovers
                            var selectors = '.rg-dropdown, .rg-dropdown-menu, .rg-select-menu, .rg-calendar, .rg-popover, [class*="dropdown"], [class*="menu"], [class*="calendar"], [role="listbox"], [aria-haspopup="listbox"]';
                            var maxBottom = 0;
                            try {
                              var nodes = document.querySelectorAll(selectors);
                              nodes.forEach(function(el){
                                // Consider only visible elements
                                var rects = el.getClientRects();
                                if (rects.length) {
                                  var rect = el.getBoundingClientRect();
                                  var bottom = rect.bottom + (window.scrollY || window.pageYOffset || 0);
                                  if (bottom > maxBottom) maxBottom = bottom;
                                }
                              });
                            } catch(e) {}

                            return Math.max(base, Math.ceil(maxBottom));
                          }

                          function send(){
                            var h = computeDocumentHeight() + 4;
                            try { parent.postMessage({ newHeight: h }, '*'); } catch(e){}
                          }

                          var ro = new ResizeObserver(send);
                          ro.observe(document.body);
                          var mo = new MutationObserver(send);
                          mo.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
                          ;['load','click','pointerdown','pointerup','keydown','keyup','input','focusin','focusout','transitionend','animationend','scroll','resize'].forEach(function(ev){
                            window.addEventListener(ev, send, true);
                          });
                          setInterval(send, 200);
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

