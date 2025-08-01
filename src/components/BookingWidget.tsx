import { cn } from "@/lib/utils";

export function BookingWidget({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div 
        className="book-form-home relative" 
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
                <div data-brandID='51252208-2987-4e7b-a5bc-faa6c7e9d739' data-chainID='fcae71fb-0983-4ac8-b48c-f4ce8ea72d05' data-backgroundprimarycolor='#17202B' data-backgroundsecondarycolor='#17202B' data-widgetFontColor='null' data-widgetSearchFontColorButton='null' data-widgetSearchColorButton='#9b7929' data-widgetSearchFontColorHoverstate='null' data-widgetSearchColorHoverState='#7e6428' id='rg-booking-widget'>
                  <script src='https://ibe.rategain.com/widget/index.js'></script>
                </div>
              </body>
            </html>
          `}
          width="100%" 
          style={{ 
            border: 'none', 
            overflow: 'hidden', 
            height: '110px', 
            position: 'absolute', 
            zIndex: 99 
          }} 
          id="86A3B1AA-E95E-45EE-B4E7-34B40AFAC538_Iframe"
        />
      </div>
    </div>
  );
}