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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 md:pt-28 lg:pt-32" aria-label="Hero section">
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={base64MobileHero || "/images/hero/luxury-shower-remodel-chandler-640.avif"} media="(max-width: 640px)" type="image/avif" />
          <source srcSet="/images/hero/luxury-shower-remodel-chandler-828.avif" media="(max-width: 828px)" type="image/avif" />
          <img
            src="/images/hero/luxury-shower-remodel-chandler.avif"
            alt="Custom walk-in shower and tile bathroom remodel in Chandler AZ by ARZ Home Remodeling"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* High-contrast overlay: centered layout utilizes a deep all-over navy tint overlay for peak readability */}
        <div className="absolute inset-0 bg-primary/75 lg:bg-primary/70 hero-overlay" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-2 pb-4 lg:pt-4 lg:pb-6 flex justify-center hero-container">
        <div className="max-w-5xl mx-auto text-center text-white flex flex-col items-center hero-content">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-white text-xs md:text-sm font-semibold tracking-wide uppercase hero-badges">
            <span className="bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full shadow-sm badge-gold">✓ Licensed ROC #338304</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 badge-glass">✓ Bonded & Insured</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 badge-glass">✓ Free In-Home Estimate</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight hero-title">
            Chandler&apos;s Local Bathroom Remodeling Experts Built for Arizona&apos;s Hard Water
          </h1>

          {/* Subhead / Main Copy */}
          <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 leading-relaxed font-light max-w-4xl hero-description">
            Yellowed tub surround. Grout stains from Chandler&apos;s hard water. A vanity that&apos;s been dated since the 90s. If your bathroom is working against you every morning, we fix it - with fixed pricing, a licensed crew, and a 2-year warranty.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto items-center hero-buttons">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hero-btn-primary"
              aria-label={`Call us at ${siteConfig.phone} for a free estimate`}
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                Call {siteConfig.phone} - Free Estimate
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
