import { AlertTriangle, Droplets, Trash2, TrendingDown, Layers, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export default function PainPoints() {
  const points = [
    {
      text: "Fiberglass tub surround turning yellow and brittle",
      icon: Layers,
    },
    {
      text: "Grout stains from Chandler's hard water that scrubbing won't fix",
      icon: Droplets,
    },
    {
      text: "Mold creeping in behind cheap acrylic shower panels",
      icon: AlertTriangle,
    },
    {
      text: "A garden tub nobody uses, just collecting dust",
      icon: Trash2,
    },
    {
      text: "Builder-grade vanity from the 90s that's hurting your home's value",
      icon: TrendingDown,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden" aria-label="Bathroom Problem Identifier">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-primary/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Column: Pain Points */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3 block">Daily Frustrations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Is Your Bathroom Doing This?
            </h2>
            <div className="space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 items-start bg-background p-4 rounded-xl border border-border/50 hover:border-accent/40 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                    <point.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-muted-foreground self-center">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Professional Solution Card */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col">
            <div className="flex-1 bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between border border-primary/20 relative overflow-hidden">
              {/* Decorative design elements */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-accent-foreground text-[11px] font-bold tracking-widest uppercase rounded-full mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  The ARZ Standard
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-white leading-tight">
                  Waterproof, Lifetime Showers
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-relaxed font-light mb-8">
                  We build real tile showers with Schluter-Kerdi waterproofing - not the cheap one-day acrylic installs that trap moisture and mold behind the walls.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-xs md:text-sm text-accent font-semibold">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span>Schluter-KERDI waterproofing certified</span>
                </div>
                
                <div className="flex items-center gap-3 text-xs md:text-sm text-accent font-semibold">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span>Custom tiling & built-in storage solutions</span>
                </div>
                
                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-5 rounded-xl shadow-lg w-full sm:w-auto">
                    <a href={`tel:${siteConfig.phoneClean}`}>
                      Call {siteConfig.phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="!bg-transparent border-white/30 !text-white hover:!bg-white/10 hover:!text-white font-bold px-6 py-5 rounded-xl w-full sm:w-auto">
                    <Link href="/contact/">
                      Get Free Quote →
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
