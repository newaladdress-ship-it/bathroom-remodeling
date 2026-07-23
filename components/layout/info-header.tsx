import Link from "next/link";
import { Phone, Briefcase, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";


interface InfoHeaderProps {
  scrolled?: boolean;
}

export function InfoHeader({ scrolled = false }: InfoHeaderProps) {
  return (
    <aside 
      className={`fixed top-0 left-0 right-0 z-30 bg-foreground text-background h-[40px] flex items-center text-sm transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-label="Top contact information"
    >
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between w-full">
          {/* Address on the left */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 min-h-[40px] px-2 text-background/90">
              <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">{siteConfig.address.full}</span>
              <span className="inline md:hidden">{siteConfig.address.city}, {siteConfig.address.state}</span>
            </div>
          </div>

          {/* Phone and Careers on the right */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href={`tel:${siteConfig.phoneClean}`}
              className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>

            <Link 
              href="/careers/"
              className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
              aria-label="View career opportunities"
            >
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              <span>Careers</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
