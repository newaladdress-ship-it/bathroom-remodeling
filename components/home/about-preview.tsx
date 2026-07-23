import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="pt-10 pb-20 lg:pt-14 lg:pb-32 bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/optimized/bathroom-remodeling-licensed-crew.avif"
                alt="ARZ Home Remodeling professional crew performing custom bathroom remodeling in Chandler, AZ"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-accent text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-3 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Your Local <span className="text-primary">Bathroom Remodeling</span> Team in Chandler, AZ
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              We help Chandler homeowners transform outdated bathrooms into modern, functional spaces designed for everyday living. Every project is completed with meticulous attention to detail, clear communication, and quality workmanship.
            </p>
            
            {/* Value Props Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">Custom Showers & Tile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">Vanity & Plumbing Upgrades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">Tub-to-Shower Conversions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">Complete Renovations</span>
              </div>
            </div>

            <div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 duration-200">
                <Link href="/about/">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
