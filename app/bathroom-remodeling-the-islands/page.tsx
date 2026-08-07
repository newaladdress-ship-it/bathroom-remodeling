import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import GalleryPreview from "@/components/home/gallery-preview";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
  Check,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling The Islands | Chandler AZ",
  description:
    "Bathroom remodeling in The Islands, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling The Islands",
    "bathroom remodel The Islands",
    "bathroom renovation The Islands",
    "The Islands bathroom remodeling",
    "walk-in shower The Islands",
    "tub-to-shower conversion The Islands",
    "bathroom tile installation The Islands",
    "bathroom remodeling Chandler AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling The Islands | Chandler AZ",
    description:
      "Bathroom remodeling in The Islands, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-the-islands/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling The Islands Chandler AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling The Islands | Chandler AZ",
    description:
      "Bathroom remodeling in The Islands, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-the-islands/`,
  },
};

const islandsFaqs = [
  {
    question: "Do I need a permit for a bathroom remodel in The Islands?",
    answer:
      "Permit requirements depend on the scope of work. Plumbing, electrical, structural, and other regulated modifications may require permits or inspections through the City of Chandler.",
  },
  {
    question: "How long does a bathroom remodel take in The Islands?",
    answer:
      "The timeline depends on the bathroom size, scope, materials, demolition requirements, and whether plumbing or electrical work is involved. A project-specific schedule can be provided after the initial evaluation.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a custom walk-in shower while making efficient use of the existing bathroom footprint.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A complete bathroom renovation isn't always necessary. If the rest of the bathroom is in good condition, a focused shower renovation may be a better option.",
  },
  {
    question: "What tile works well for a Chandler bathroom?",
    answer:
      "Porcelain is a popular option because it is durable and has low water absorption. The appropriate tile depends on the installation location, design, maintenance requirements, and budget.",
  },
  {
    question: "Do you remodel older bathrooms in The Islands?",
    answer:
      "Yes. Existing bathrooms can be evaluated for layout, finishes, storage, lighting, plumbing, waterproofing, and accessibility improvements before deciding which upgrades are worthwhile.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and functional walk-in design.",
    detail:
      "Options include custom tile, frameless glass, built-in niches, shower seating, handheld fixtures, and lower-entry configurations.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Turn an underused bathtub into a custom walk-in shower designed around the existing bathroom footprint.",
    detail:
      "We coordinate demolition, preparation, waterproofing, tile, fixtures, and glass installation.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Update shower walls, bathroom floors, backsplashes, and other surfaces with porcelain, ceramic, or other suitable tile options.",
    detail:
      "We focus on proper preparation, layout, grout joints, and finishing details for a lasting result.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    body: "We discuss your bathroom, remodeling goals, preferred style, budget considerations, and the problems you want to solve.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We measure the space, review the existing layout, inspect visible conditions, and identify potential plumbing, electrical, or structural considerations.",
  },
  {
    step: "3",
    title: "Written Project Proposal",
    body: "You receive a clear outline of the planned work, materials, and project requirements.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Select your tile, vanity, countertop, fixtures, glass, flooring, lighting, and other finishes.",
  },
  {
    step: "5",
    title: "Construction",
    body: "The project moves through demolition, preparation, waterproofing where required, installation, finishing, and cleanup.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed work with you and address remaining project details before completion.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Local Remodeling Experience",
    body: "We work with homeowners in The Islands and surrounding Chandler communities, adapting bathroom designs to the existing home.",
  },
  {
    title: "Clear Project Scope",
    body: "You receive a written description of the planned work and selected materials before construction begins.",
  },
  {
    title: "Complete Project Coordination",
    body: "We coordinate the major stages of the renovation, including demolition, preparation, waterproofing, tile, fixtures, vanities, and finishing.",
  },
  {
    title: "Quality-Focused Installation",
    body: "We pay attention to important details that may not be visible after completion, including waterproofing, substrate preparation, drainage, and tile layout.",
  },
  {
    title: "Practical Material Recommendations",
    body: "We help you select materials based on appearance, durability, maintenance requirements, and how your bathroom will be used.",
  },
  {
    title: "Consistent Communication",
    body: "We keep the project organized and communicate important decisions and construction stages throughout the renovation.",
  },
];

const broaderTypes = [
  {
    title: "Primary Bathroom Remodeling",
    desc: "Create a more functional primary bathroom with a new walk-in shower, vanity, countertop, flooring, lighting, plumbing fixtures, and storage.",
  },
  {
    title: "Guest Bathroom Remodeling",
    desc: "Refresh an older guest bathroom with updated tile, flooring, vanity storage, fixtures, lighting, and shower or tub finishes.",
  },
  {
    title: "Small Bathroom Improvements",
    desc: "Smart fixture selection can make an established bathroom feel more spacious. Compact vanities, recessed niches, glass shower enclosures, and appropriately scaled tile improve both storage and visual space.",
  },
];

export default function TheIslandsBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling The Islands",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-the-islands/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling The Islands"
        serviceDescription="Bathroom remodeling in The Islands, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-the-islands/`}
      />
      <FAQSchema faqs={islandsFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling The Islands"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-the-islands/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in The Islands, Chandler AZ"
          subtitle="Bathroom Remodeling for The Islands Homes"
          description="Update your The Islands bathroom with a design that fits your home's layout, style, and everyday needs. From walk-in showers and tub-to-shower conversions to custom tile, vanities, and complete renovations, ARZ Home Remodeling provides practical remodeling solutions for Chandler homeowners."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "The Islands", url: `${siteConfig.url}/bathroom-remodeling-the-islands/` },
          ]}
        />

        {/* SECTION 3: LOCAL INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations for Homes in The Islands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Islands is a distinctive Chandler community known for its interconnected lakes, walking paths, mature landscaping, and established homes. Many properties were built during the late 1980s and 1990s, which means some bathrooms now have dated finishes, older fixtures, limited storage, or layouts that no longer suit modern needs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides <strong className="font-semibold text-foreground">bathroom remodeling in The Islands</strong> with an emphasis on practical design and quality installation. Depending on the condition of the existing bathroom, an update may include a new shower, tub conversion, tile and flooring, vanity replacement, lighting improvements, or a complete renovation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For tiled shower projects, we focus on proper preparation, waterproofing, drainage, tile installation, and finish details. Material selections can include porcelain tile, quartz surfaces, durable plumbing fixtures, and easy-to-maintain shower finishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for a Free In-Home Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOCAL REMODELING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Remodeling Bathrooms in The Islands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Homes throughout The Islands have different layouts, architectural styles, and renovation requirements. A successful bathroom renovation starts with understanding the existing space before deciding which features should be changed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Properties around <strong className="font-semibold text-foreground">McQueen Road, Warner Road, and Elliot Road</strong> may have established layouts that require careful planning when updating showers, vanities, plumbing, flooring, or electrical components.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Common Bathroom Updates in The Islands include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replace an outdated bathtub with a walk-in shower</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Remodel an existing shower enclosure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Install new porcelain or ceramic tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replace bathroom flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Upgrade single or double vanities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Add quartz countertops</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improve bathroom storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Install recessed shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Add built-in shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Upgrade plumbing fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improve lighting and ventilation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Create a more accessible shower entry</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Complete a full bathroom renovation</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              The right combination depends on the existing layout, condition of the bathroom, design preferences, and project budget.
            </p>
          </div>
        </section>

        {/* SECTION 5: LOCAL PROJECT EXAMPLE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              The Islands Bathroom Remodeling Example
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              One bathroom renovation in The Islands involved updating an older primary bathroom with dated finishes and a cramped shower area.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The renovation included removing the existing finishes, improving the shower layout, installing a custom walk-in shower, and replacing the vanity and countertop. Large-format porcelain tile was selected for the shower walls, while smaller-format flooring was used in the shower area for improved traction.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The updated space also included a frameless glass enclosure, double vanity, quartz countertop, and improved lighting.
            </p>
          </div>
        </section>

        {/* SECTION 6: PERMITTING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              The Islands Remodeling Permits & Inspections
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Islands is located within the <strong className="font-semibold text-foreground">City of Chandler</strong>, so permit and inspection requirements depend on the scope of the remodeling work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Projects involving plumbing changes, electrical modifications, structural alterations, or other regulated construction may require permits before work begins.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When applicable, ARZ Home Remodeling can help coordinate the required project documentation and inspection process. This is particularly important when changing plumbing locations, modifying walls, altering electrical circuits, or making significant changes to the existing bathroom layout.
            </p>
          </div>
        </section>

        {/* SECTION 7: SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Bathroom Remodeling Services in The Islands
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mainServices.map((svc) => (
                <div key={svc.title} className="bg-secondary rounded-2xl p-8 border border-border flex flex-col justify-between shadow-sm hover:border-primary/50 transition-all">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{svc.detail}</p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline mt-auto pt-4 border-t border-border/60"
                  >
                    {svc.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: EXPANDED REMODELING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Custom Remodeling</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Custom Bathroom Remodeling for The Islands Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A complete bathroom remodel can combine several improvements into one coordinated renovation. Instead of replacing one feature at a time, homeowners can redesign the space around how they actually use the bathroom.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {broaderTypes.map((type) => (
                <div key={type.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: TECHNICAL QUALITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Proper Waterproofing & Shower Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A quality bathroom renovation depends on the installation beneath the visible finishes. Shower walls, floors, drains, and transitions need to be properly prepared before tile and glass are installed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For tiled shower projects, we use appropriate waterproofing systems and installation methods based on the specific shower design. <strong className="font-semibold text-foreground">Schluter-KERDI</strong> products may be used where appropriate as part of the waterproofing assembly.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our shower installation process considers:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing and moisture management</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower floor preparation and drainage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper substrate preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile layout and alignment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grout selection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower floor traction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Movement and expansion considerations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Plumbing fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass enclosure measurements</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Final sealing and finishing</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              This technical preparation helps create a bathroom that is not only visually appealing but also properly constructed.
            </p>
          </div>
        </section>

        {/* SECTION 10: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why The Islands Homeowners Choose ARZ Home Remodeling
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((pt) => (
                <div key={pt.title} className="p-6 bg-background rounded-2xl border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: HARD WATER SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Materials for Chandler&apos;s Hard Water
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Mineral deposits can accumulate on shower glass, faucets, tile, and grout when water evaporates on bathroom surfaces. Choosing materials that are practical to maintain can help reduce cleaning concerns.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For bathroom renovations in The Islands, we can recommend:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Epoxy Grout</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Used where appropriate to reduce absorption and simplify routine maintenance.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Porcelain Tile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Durable, low-absorption surfaces suitable for shower walls, floors, and surrounding bathroom tile.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Quartz Countertops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Non-porous vanity surfaces that resist water spots and everyday bathroom wear.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Glass Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Protective coatings when suitable for the shower enclosure to keep glass looking clean.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Material recommendations depend on the bathroom design, budget, and homeowner preferences.
            </p>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="The Islands" />

        {/* SECTION 12: REMODELING PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our The Islands Bathroom Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-4xl font-bold text-primary/25 font-mono">0{step.step}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-2 text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE PREVIEW */}
        <GalleryPreview />

        {/* SECTION 13: FAQ */}
        <ServiceFAQ faqs={islandsFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Bathroom in The Islands?"
          description="Update your The Islands bathroom with a design that fits your home's layout, style, and everyday needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
