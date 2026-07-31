// ✅ SERVER COMPONENT - footer has no client-side state
// GoogleMap is isolated in its own client wrapper below to avoid making the whole footer a client component
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Only the map is client-side
// By keeping it in a dynamic import here, the footer itself stays a Server Component
const GoogleMap = dynamic(() => import("@/components/google-map"), {
  loading: () => <div className="mt-8 h-[220px] bg-background/10 animate-pulse rounded-xl" aria-label="Loading map" />,
});

const serviceAreaLinks: Record<string, string> = {
  "Chandler": "/bathroom-remodeling-chandler-az/",
  "Ahwatukee": "/bathroom-remodeling-ahwatukee-az/",
  "Sun Lakes": "/bathroom-remodeling-sun-lakes/",
  "Ocotillo": "/bathroom-remodeling-ocotillo/",
  "Dobson Ranch": "/bathroom-remodeling-dobson-ranch/",
  "Fulton Ranch": "/bathroom-remodeling-fulton-ranch/",
  "Queen Creek": "/bathroom-remodeling-queen-creek-az/",
  "Apache Junction": "/bathroom-remodeling-apache-junction-az/",
  "Chandler Heights": "/bathroom-remodeling-chandler-heights/",
  "Andersen Springs": "/bathroom-remodeling-andersen-springs/",
  "Layton Lakes": "/bathroom-remodeling-layton-lakes/",
  "The Islands": "/bathroom-remodeling-the-islands/",
  "Pecos Ranch": "/bathroom-remodeling-pecos-ranch/",
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* Main Footer */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-6 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg"
              aria-label="ARZ Home Remodeling - Home"
            >
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden shadow-md ring-2 ring-primary/20 bg-white">
                <Image
                  src="/images/arzhomeremodeling-web-logo.webp"
                  alt="ARZ Home Remodeling"
                  fill
                  sizes="64px"
                  className="object-cover rounded-full"
                />
              </div>
            </Link>
            {siteConfig.googleReviewsCount > 0 && (
              <div className="mb-6">
                <a 
                  href={siteConfig.googleBusinessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-background hover:text-accent transition-colors no-underline"
                  aria-label={`View our ${siteConfig.googleRating} star rating with ${siteConfig.googleReviewsCount} Google Reviews`}
                >
                  <span className="text-accent">★</span>
                  <span>{siteConfig.googleRating} · {siteConfig.googleReviewsCount} Google Reviews</span>
                </a>
              </div>
            )}
            <div className="text-background/70 text-sm leading-relaxed mb-6 space-y-1">
              <p className="font-semibold text-background text-base">ARZ Home Remodeling</p>
              <p>6710 W Chicago St, Chandler, AZ 85226</p>
              <p>Phone: <a href={`tel:${siteConfig.phoneClean}`} className="text-background/80 hover:text-primary transition-colors no-underline">{siteConfig.phone}</a></p>
            </div>

            <ul className="flex gap-3" role="list" aria-label="Social media links">
              {siteConfig.social.facebook && (
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Follow ARZ Home Remodeling on Facebook"
                  >
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Follow ARZ Home Remodeling on Instagram"
                  >
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.youtube && (
                <li>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Watch our bathroom remodeling projects on YouTube"
                  >
                    <Youtube className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Connect with ARZ Home Remodeling on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services Column */}
          <nav aria-label="Footer services navigation">
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Bathroom Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/shower-remodeling/", label: "Shower Remodeling" },
                { href: "/tub-to-shower-conversion/", label: "Tub-to-Shower Conversion" },
                { href: "/master-bathroom-remodel/", label: "Master Bathroom Remodel" },
                { href: "/small-bathroom-remodeling/", label: "Small Bathroom Remodeling" },
                { href: "/bathroom-tile-installation/", label: "Bathroom Tile Installation" },
                { href: "/bathroom-vanity-installation/", label: "Bathroom Vanity Installation" },
                { href: "/ada-bathroom-remodeling/", label: "ADA Bathroom Remodeling" },
                { href: "/luxury-bathroom-remodeling/", label: "Luxury Bathroom Remodeling" },
                { href: "/guest-bathroom-remodeling/", label: "Guest Bathroom Remodeling" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations Column */}
          <nav aria-label="Footer locations navigation">
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Service Locations</h3>
            <ul className="space-y-3">
              {[
                { href: "/bathroom-remodeling-phoenix-az/", label: "Remodeling Phoenix, AZ" },
                { href: "/bathroom-remodeling-scottsdale-az/", label: "Remodeling Scottsdale, AZ" },
                { href: "/bathroom-remodeling-gilbert-az/", label: "Remodeling Gilbert, AZ" },
                { href: "/bathroom-remodeling-mesa-az/", label: "Remodeling Mesa, AZ" },
                { href: "/bathroom-remodeling-tempe-az/", label: "Remodeling Tempe, AZ" },
                { href: "/bathroom-remodeling-queen-creek-az/", label: "Remodeling Queen Creek" },
                { href: "/bathroom-remodeling-ahwatukee-az/", label: "Remodeling Ahwatukee" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-sm font-semibold mt-6 mb-3 text-background uppercase tracking-wider">Mesa Design Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/bathroom-design-trends-mesa-az/"
                  className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                >
                  Mesa Bathroom Design Trends
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/hoa-bathroom-remodeling-mesa-az/"
                  className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                >
                  Mesa HOA Bathroom Remodeling Rules
                </Link>
              </li>
            </ul>
            <h4 className="font-serif text-sm font-semibold mt-6 mb-3 text-background uppercase tracking-wider">Queen Creek Design Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/family-friendly-bathroom-design-queen-creek/"
                  className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                >
                  Family-Friendly Bathroom Design
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/new-construction-bathroom-upgrades-queen-creek/"
                  className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                >
                  Upgrading Builder-Grade Bathrooms
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-background/80 text-sm leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                    aria-label={`Call us at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-background/80 text-sm">
                    {siteConfig.hours.weekdays.includes("24/7") ? (
                      <p>Open 24/7 (24 Hours / 7 Days)</p>
                    ) : (
                      <>
                        <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                        <p>Sat: {siteConfig.hours.saturday}</p>
                        <p>Sun: {siteConfig.hours.sunday}</p>
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </address>

            {/* Embedded Map - Lazy Loaded Client Component */}
            <GoogleMap />
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-sm font-medium text-background/70 mb-3 uppercase tracking-wider">Service Areas</h4>
              <p className="text-background/80 text-sm leading-relaxed flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
                {siteConfig.serviceAreas.map((area, i) => {
                  const href = serviceAreaLinks[area];
                  return (
                    <span key={area} className="flex items-center">
                      {i > 0 && <span className="mr-2 text-background/40">•</span>}
                      {href ? (
                        <Link href={href} className="hover:text-primary transition-colors text-background/80 hover:underline">
                          {area}
                        </Link>
                      ) : (
                        <span>{area}</span>
                      )}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-sm font-medium text-background/70 mb-3 uppercase tracking-wider">Chandler Zip Codes</h4>
              <p className="text-background/80 text-sm leading-relaxed flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1">
                {(siteConfig as any).zipCodes?.map((zip: string, i: number) => (
                  <span key={zip} className="flex items-center">
                    {i > 0 && <span className="mr-2 text-background/40">•</span>}
                    <Link href={`/chandler-az-${zip}/`} className="hover:text-primary transition-colors text-background/80 hover:underline">
                      {zip}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>





      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm">
              © 2026 {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex items-center gap-6">
              <Link href="/privacy-policy/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Terms of Service
              </Link>
              <Link href="/warranty/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Warranty
              </Link>
              <a href="/sitemap.xml" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
