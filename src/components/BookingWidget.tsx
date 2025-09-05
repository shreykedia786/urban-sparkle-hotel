import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div 
        id="37316DCF-9BB6-4B80-BE26-7651D87C5F6B_outerRGdiv" 
        style={{ height: '80px' }}
      >
        <iframe 
          srcDoc={`
            <html lang='en'>
              <head>
                <title>Booking Engine Widget</title>
                <link href='https://ibe.rategain.com/widget/index.css' rel='stylesheet'/>
              </head>
              <body>            
                <div data-brandID='937bf5e9-7f12-4e04-be25-5e3e823242b7' data-chainID='d9c3cc24-da05-4697-a759-3bcea2872153' data-backgroundprimarycolor='#937e27' data-backgroundsecondarycolor='#937e27' data-widgetFontColor='#fff' data-widgetSearchFontColorButton='#100d0d' data-widgetSearchColorButton='#dcd135' data-widgetSearchFontColorHoverstate='null' data-widgetSearchColorHoverState='#896551' id='rg-booking-widget'>
                  <script src='https://ibe.rategain.com/widget/index.js'></script>
                </div>
              </body>
            </html>
          `}
          width="100%" 
          style={{ 
            border: 'none', 
            overflow: 'hidden', 
            height: '600px' 
          }} 
          id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
        />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              function changeIframeHeight(newHeight) {
                document.getElementById('86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe').style.height = newHeight + 'px';
              }
              window.addEventListener('message', (event) => {
                if (event.data === 'GET_DLYX') {
                  event.source.postMessage({ dlyx: window.dlyx }, event.origin);
                }
              });
            `
          }}
        />
      </div>
    </div>
  );
}