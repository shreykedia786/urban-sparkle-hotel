import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-5xl mb-6">
              Contact Us
              <span className="block text-neon text-4xl mt-2">Get In Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our concierge team is available 24/7 to assist with reservations, 
              special requests, and local recommendations.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Experience the perfect blend of innovative design, relaxing inspiration and gracious hospitality that is Donatello Hotel Dubai!
                </p>
                
                {/* Quick Contact Actions */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <a href="tel:+97143409040" className="flex items-center p-6 bg-card rounded-lg border hover:shadow-md transition-shadow">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Reception</h3>
                      <p className="text-muted-foreground">+971 4 340 9040</p>
                    </div>
                  </a>
                  
                  <a href="mailto:info@donatello-hoteldubai.com" className="flex items-center p-6 bg-card rounded-lg border hover:shadow-md transition-shadow">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">info@donatello-hoteldubai.com</p>
                    </div>
                  </a>
                </div>

                {/* Department Contacts */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Department Contacts</h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-foreground">Reservations</h4>
                        <p className="text-muted-foreground">Tel: +971 4 314 6810</p>
                        <p className="text-muted-foreground">Email: reservations@donatello-hoteldubai.com</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-foreground">Sales & Marketing</h4>
                        <p className="text-muted-foreground">Tel: +971 504 740 622 / +971 4 314 6810</p>
                        <p className="text-muted-foreground">Email: sales@donatello-hoteldubai.com</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-foreground">F&B Services</h4>
                        <p className="text-muted-foreground">Tel: +974 05 0481 6822</p>
                        <p className="text-muted-foreground">Email: asstfnbmanager@donatello-hoteldubai.com</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-foreground">Lost & Found</h4>
                        <p className="text-muted-foreground">Tel: +971 4 340 6760</p>
                        <p className="text-muted-foreground">Email: info@donatello-hoteldubai.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card p-8 rounded-lg border">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+971 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="group">Group Booking</option>
                        <option value="dining">Dining Reservation</option>
                        <option value="events">Events & Meetings</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Please share your message or inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                {/* WhatsApp Contact */}
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 dark:bg-green-800/30 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Start a WhatsApp Chat</h4>
                      <p className="text-green-600 dark:text-green-300 text-sm">Get instant assistance from our team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Location</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Donatello Hotel is a 5-minute walk to/from the Mall of the Emirates & Ski Dubai. 
                The Mall of Emirates Metro Stop is less than 450 metres from the hotel, and the Mashreq Metro Station is just 200 metres away.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Getting Here</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Hotel Address</h4>
                      <p className="text-muted-foreground">Al Barsha 1, Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Metro Access</h4>
                      <p className="text-muted-foreground">Mall of Emirates Metro (450m) • Mashreq Metro (200m)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Shopping</h4>
                      <p className="text-muted-foreground">Mall of the Emirates & Ski Dubai (5-minute walk)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    <p className="text-sm text-muted-foreground mt-2">Google Maps integration in development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}