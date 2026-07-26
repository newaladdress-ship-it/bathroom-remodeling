import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import fs from "fs";
import path from "path";

export default function Hero() {
  // Inline the mobile 640px hero image as base64 to eliminate the network request round-trip on mobile
  let base64MobileHero = "";
  try {
    const filePath = path.join(process.cwd(), "public/images/hero/luxury-shower-remodel-chandler-640.avif");
    base64MobileHero = `data:image/avif;base64,${fs.readFileSync(filePath).toString("base64")}`;
  } catch (err) {
    console.error("Failed to inline mobile hero image:", err);
  }

  return (
    <section className="relative min-h-[70vh] lg:min-h-[calc(100vh-184px)] flex items-center overflow-hidden pt-24 md:pt-28 lg:pt-32" aria-label="Hero section">
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={base64MobileHero || "/images/hero/luxury-shower-remodel-chandler-640.avif"} media="(max-width: 640px)" type="image/avif" />
          <source srcSet="/images/hero/luxury-shower-remodel-chandler-828.avif" media="(max-width: 828px)" type="image/avif" />
          <img
            src="/images/hero/luxury-shower-remodel-chandler.avif"
            alt="Professional bathroom remodeling in chandler, AZ - custom walk-in shower by ARZ Home Remodeling"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* High-contrast overlay: centered layout utilizes a deep all-over navy tint overlay for peak readability */}
        <div className="absolute inset-0 bg-primary/75 lg:bg-primary/70 hero-overlay" aria-hidden="true" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10 pt-2 pb-4 lg:pt-4 lg:pb-6 flex justify-center hero-container">
        <div className="max-w-5xl mx-auto text-center text-white flex flex-col items-center hero-content">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">
            Bathroom Remodeling in Chandler, AZ
          </h1>

          {/* Subhead / Main Copy */}
          <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 leading-relaxed font-light max-w-4xl hero-description">
            Your bathroom should be comfortable, functional, and built to fit your lifestyle. We provide custom bathroom remodeling in Chandler, AZ, including walk-in showers, bathroom tile installation, bathroom vanity installation, tub-to-shower conversions, and complete bathroom renovations. Schedule your free consultation today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto items-center hero-buttons">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hero-btn-primary"
              aria-label="Call now"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                Call Now
              </a>
            </Button>
            <Link 
              href="/contact/" 
              className="text-white hover:text-accent font-semibold text-base underline transition-colors py-2 px-4 hero-btn-secondary"
            >
              Get a Free Written Quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
