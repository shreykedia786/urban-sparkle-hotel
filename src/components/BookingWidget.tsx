import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023px)');
    const onChange = () => setIsNarrow(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const defaultHeight = isNarrow ? 560 : 200;
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Vertical layout for tablets and mobiles (<1024px)
  const useVerticalLayout = isNarrow;
  
  const adjustIframeToContent = () => {
    const iframe = document.getElementById("86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe") as HTMLIFrameElement | null;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;
      const body = doc.body;
      const html = doc.documentElement;
      const h = Math.ceil(Math.max(
        body?.scrollHeight || 0,
        html?.scrollHeight || 0,
        body?.getBoundingClientRect().height || 0
      ));
      if (h && h > 0) {
        iframe.style.height = `${Math.max(h, defaultHeight)}px`;
      }
    } catch {}
  };
  
  useEffect(() => {
    // Expose the height change function expected by RateGain
    (window as any).changeIframeHeight = (newHeight: number) => {
      const iframe = document.getElementById(
        "86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
      ) as HTMLIFrameElement | null;
      if (iframe && typeof newHeight === 'number' && newHeight > 0) {
        // Guard against early 0/1px messages; keep a sensible minimum to avoid collapse
        const min = defaultHeight;
        iframe.style.height = `${Math.max(newHeight, min)}px`;
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
          
          <div className={`relative ${useVerticalLayout ? 'z-0 p-2' : 'z-10 p-6 md:p-8'}`}>
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
              className="relative z-[9999] overflow-visible w-full"
              ref={containerRef}
            >
              <iframe 
                src="/rg-widget.html"
                width="100%" 
                style={{
                  border: 'none', 
                  overflow: 'hidden', 
                  height: defaultHeight, 
                  width: '100%',
                  display: 'block',
                  position: 'relative',
                  zIndex: 9999,
                  background: 'transparent'
                }}
                id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
                onLoad={() => {
                  try {
                    // initial adjust + retries
                    adjustIframeToContent();
                    setTimeout(adjustIframeToContent, 400);
                    setTimeout(adjustIframeToContent, 1200);
                  } catch {}
                }}
                scrolling="no"
                loading="eager"
                title="Booking Widget"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

