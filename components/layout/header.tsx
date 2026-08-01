"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { InfoHeader } from "@/components/layout/info-header";
import { bathroomServices } from "@/lib/bathroom-services";

const navLinkClass =
  "text-base font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 rounded px-2 py-1 flex items-center gap-1";

const ctaClass =
  "inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 xl:px-6 text-sm xl:text-base font-semibold transition-colors whitespace-nowrap";

const dropdownLocations = [
  { name: "Chandler", href: "/bathroom-remodeling-chandler-az/" },
  { name: "Ocotillo", href: "/bathroom-remodeling-ocotillo/" },
  { name: "Fulton Ranch", href: "/bathroom-remodeling-fulton-ranch/" },
  { name: "Sun Lakes", href: "/bathroom-remodeling-sun-lakes/" },
  { name: "Dobson Ranch", href: "/bathroom-remodeling-dobson-ranch/" },
  { name: "Andersen Springs", href: "/bathroom-remodeling-andersen-springs/" },
  { name: "Layton Lakes", href: "/bathroom-remodeling-layton-lakes/" },
  { name: "The Islands", href: "/bathroom-remodeling-the-islands/" },
  { name: "Gilbert", href: "/bathroom-remodeling-gilbert-az/" },
  { name: "Mesa", href: "/bathroom-remodeling-mesa-az/" },
  { name: "Tempe", href: "/bathroom-remodeling-tempe-az/" },
  { name: "Ahwatukee", href: "/bathroom-remodeling-ahwatukee-az/" },
  { name: "Phoenix", href: "/bathroom-remodeling-phoenix-az/" },
  { name: "Queen Creek", href: "/bathroom-remodeling-queen-creek-az/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>
      <InfoHeader scrolled={scrolled} />
      <header
        className={`fixed left-0 right-0 z-40 bg-background shadow-md h-[60px] lg:h-[72px] flex items-center lg:bg-background/95 lg:backdrop-blur-md transition-all duration-300 ${
          scrolled ? "top-0" : "top-[40px]"
        }`}
        role="banner"
      >
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg"
              aria-label="ARZ Home Remodeling - Home"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full overflow-hidden shadow-md ring-2 ring-primary/20 bg-white">
                <Image
                  src="/images/arzhomeremodeling-web-logo-opt.webp"
                  alt="ARZ Home Remodeling - Bathroom Remodeling Chandler AZ"
                  fill
                  sizes="(max-width: 1024px) 56px, 64px"
                  className="object-cover rounded-full"
                  priority
                  decoding="async"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main navigation">
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
              <Link href="/about/" className={navLinkClass}>
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group py-4">
                <span className={`${navLinkClass} cursor-pointer`}>
                  Services <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[580px]">
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-foreground">
                    {bathroomServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors font-medium"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group py-4">
                <span className={`${navLinkClass} cursor-pointer`}>
                  Locations <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[460px]">
                  <div className="bg-card border border-border rounded-xl shadow-xl p-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-foreground">
                    {dropdownLocations.map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.href}
                        className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors font-medium"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/blog/" className={navLinkClass}>
                Blog
              </Link>
              <Link href="/contact/" className={navLinkClass}>
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href={`tel:${siteConfig.phoneClean}`} className={ctaClass}>
                <Phone className="w-4 h-4 mr-2 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Mobile Sticky Call Button (Top) */}
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="lg:hidden flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-2 h-10 w-10 shadow-md active:scale-[0.95] transition-all ml-auto mr-2"
              aria-label={`Call local expert at ${siteConfig.phone}`}
            >
              <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>

            {/* Mobile Menu Toggle */}
            <details className="lg:hidden group relative">
              <summary className="list-none cursor-pointer p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open menu</span>
                <Menu className="w-6 h-6 group-open:hidden" aria-hidden="true" />
                <X className="w-6 h-6 hidden group-open:block" aria-hidden="true" />
              </summary>
              <nav
                className="absolute right-0 top-full mt-2 w-[min(100vw-2rem,20rem)] rounded-xl border border-border bg-background shadow-lg py-4 px-4 max-h-[80vh] overflow-y-auto"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-lg font-medium py-2 border-b border-border text-foreground block px-2 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about/"
                    className="text-lg font-medium py-2 border-b border-border text-foreground block px-2 hover:text-primary transition-colors"
                  >
                    About
                  </Link>

                  {/* Mobile Services Accordion */}
                  <details className="group/sub border-b border-border">
                    <summary className="flex items-center justify-between text-lg font-medium py-2 text-foreground cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open/sub:rotate-180" />
                    </summary>
                    <div className="pl-4 py-2 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                      {bathroomServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-sm font-medium py-1.5 text-muted-foreground hover:text-primary block"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  {/* Mobile Locations Accordion */}
                  <details className="group/sub border-b border-border">
                    <summary className="flex items-center justify-between text-lg font-medium py-2 text-foreground cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span>Locations</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open/sub:rotate-180" />
                    </summary>
                    <div className="pl-4 py-2 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                      {dropdownLocations.map((loc) => (
                        <Link
                          key={loc.name}
                          href={loc.href}
                          className="text-sm font-medium py-1.5 text-muted-foreground hover:text-primary block"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <Link
                    href="/blog/"
                    className="text-lg font-medium py-2 border-b border-border text-foreground block px-2 hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact/"
                    className="text-lg font-medium py-2 border-b border-border text-foreground block px-2 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-6 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
