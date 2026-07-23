import { Phone, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 lg:py-20 bg-secondary overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Contact Copy and Call Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Get in touch with our professional team to schedule your free in-home consultation. We&apos;ll discuss your vision, answer your questions, and provide a detailed estimate with no obligation.
            </p>

            <div className="space-y-6">
              <a 
                href={`tel:${siteConfig.phoneClean}`} 
                className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-0.5">Call Us Directly</h4>
                  <span className="text-primary hover:underline text-lg font-bold block leading-none">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    {siteConfig.hours.weekdays.includes("24/7") ? (
                      "Open 24/7 (24 Hours / 7 Days)"
                    ) : (
                      `Mon-Sat: ${siteConfig.hours.weekdays}`
                    )}
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right Column: LeadSmart Iframe Embed Form */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[600px] bg-card border border-border rounded-2xl shadow-xl overflow-hidden p-2">
              <iframe 
                src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=momran1&funnel=4&category=23&step=1&buttons=btn-warning" 
                width="100%" 
                height="545" 
                frameBorder="0"
                title="Request Free Quotes Box"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
