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
  title: "Bathroom Remodeling Phoenix AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Phoenix, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
  keywords: [
    "bathroom remodeling Phoenix AZ",
    "bathroom remodel Phoenix AZ",
    "bathroom renovation Phoenix",
    "Phoenix bathroom remodeling",
    "walk-in shower remodeling Phoenix",
    "tub-to-shower conversion Phoenix",
    "primary bathroom remodel Phoenix",
    "guest bathroom remodel Phoenix",
    "small bathroom remodeling Phoenix",
    "accessible bathroom remodeling Phoenix",
    "bathroom tile installation Phoenix",
    "bathroom flooring Phoenix"
  ],
  openGraph: {
    title: "Bathroom Remodeling Phoenix AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Phoenix, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    url: `${siteConfig.url}/bathroom-remodeling-phoenix-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero/luxury-shower-remodel-chandler.webp`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Phoenix Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Phoenix AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Phoenix, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    images: [`${siteConfig.url}/images/hero/luxury-shower-remodel-chandler.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-phoenix-az/`,
  },
};

const phoenixFaqs = [
  {
    question: "How much does a bathroom remodel cost in Phoenix, AZ?",
    answer:
      "The cost depends on bathroom size, existing conditions, demolition, shower or tub configuration, tile, flooring, vanity, fixtures, glass, plumbing, electrical work, and the overall project scope.",
  },
  {
    question: "How long does a bathroom remodel take in Phoenix?",
    answer:
      "The timeline varies according to the size and complexity of the project, materials, demolition, installation requirements, and other project conditions.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower when the existing layout and project requirements allow.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom project can focus specifically on the shower instead of remodeling the entire bathroom.",
  },
  {
    question: "Do you remodel primary bathrooms in Phoenix?",
    answer:
      "Yes. Primary bathroom renovations can include showers, vanities, countertops, tile, flooring, fixtures, lighting, storage, and other improvements.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Small bathroom remodeling focuses on using the available space efficiently through appropriate shower, vanity, storage, fixture, and lighting choices.",
  },
  {
    question: "Do you serve Ahwatukee and Arcadia?",
    answer:
      "Yes. We serve homeowners throughout Phoenix, including Ahwatukee, Arcadia, Biltmore, Desert Ridge, and other local areas.",
  },
  {
    question: "Do Phoenix bathroom remodels require permits?",
    answer:
      "Permit requirements depend on the work being performed. Plumbing, electrical, structural, and other regulated modifications may have different requirements from cosmetic updates.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Replace an outdated bathtub or enclosed shower with a more open bathing area.",
    detail:
      "A walk-in shower remodel in Phoenix can include custom tile, built-in niches, shower seating, low-threshold or curbless entry, modern fixtures, and glass enclosures.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a shower can make the existing bathroom footprint more useful.",
    detail:
      "A tub-to-shower conversion in Phoenix, AZ may include tub removal, shower preparation, waterproofing, tile, fixtures, storage, flooring, and a glass enclosure.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Your primary bathroom should provide comfortable bathing space, practical storage, and finishes that suit your home.",
    detail:
      "A primary bathroom remodel in Phoenix can include a walk-in shower, double vanity, countertop, bathroom flooring, custom tile, shower niche, shower seating, glass enclosure, lighting, plumbing fixtures, and freestanding tub.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "A guest bathroom can be updated without necessarily changing everything.",
    detail:
      "A guest bathroom remodel in Phoenix can include a new vanity, shower or tub, tile, flooring, fixtures, lighting, storage, and coordinated finishes.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "Small bathrooms require careful use of available floor space.",
    detail:
      "Our small bathroom remodeling options can include compact vanities, walk-in showers, recessed niches, space-efficient storage, updated fixtures, coordinated tile, and improved lighting.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "Accessibility-focused remodeling can make everyday bathroom use easier and more comfortable.",
    detail:
      "Depending on the existing space, improvements can include low-threshold shower entries, curbless showers, shower seating, handheld fixtures, grab-bar preparation, slip-conscious flooring, and improved lighting.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    body: "We discuss what you want to change, your priorities, preferred style, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "The existing bathroom layout, shower or tub, vanity, flooring, fixtures, storage, and other relevant conditions are reviewed.",
  },
  {
    step: "3",
    title: "Remodeling Plan",
    body: "We organize the project around your priorities and the improvements that make sense for the existing space.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "Tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes are selected for the planned design.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "The existing materials are removed as needed, the space is prepared, and the planned improvements are installed.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "The completed bathroom is reviewed after the remodeling work is finished.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Bathroom-Focused Remodeling",
    body: "We focus on bathroom projects ranging from individual shower upgrades to complete bathroom renovations.",
  },
  {
    title: "Practical Design",
    body: "We plan the bathroom around everyday use, available space, storage needs, and your priorities.",
  },
  {
    title: "Clear Project Scope",
    body: "The remodeling plan is organized around the work you want completed and the existing conditions of the bathroom.",
  },
  {
    title: "Local Phoenix Service",
    body: "We serve homeowners throughout Phoenix and surrounding East Valley communities.",
  },
  {
    title: "Attention to Detail",
    body: "Tile layout, shower transitions, storage, vanity installation, fixtures, glass, and finishing details all contribute to the final result.",
  },
];

const projectExamples = [
  {
    title: "Walk-In Shower Transformation",
    description: "Update an outdated bathing area with a new shower configuration, tile, storage, fixtures, and glass.",
  },
  {
    title: "Tub-to-Shower Conversion",
    description: "Replace an existing bathtub with a shower designed around the available footprint.",
  },
  {
    title: "Primary Bathroom Update",
    description: "Combine improvements to the shower, vanity, tile, flooring, fixtures, lighting, and storage.",
  },
  {
    title: "Guest Bathroom Refresh",
    description: "Update the vanity, shower or tub, tile, flooring, fixtures, lighting, and finishes.",
  },
];

const phoenixProblems = [
  {
    title: "Unused Bathtub",
    desc: "Replace a bathtub you rarely use with a walk-in shower designed around your daily routine.",
  },
  {
    title: "Outdated Shower",
    desc: "Update the shower with new tile, waterproofing, storage, fixtures, and glass.",
  },
  {
    title: "Limited Storage",
    desc: "Add vanity storage, recessed shower niches, and other practical organization features.",
  },
  {
    title: "Old Vanity",
    desc: "Replace an outdated vanity with a configuration that provides better storage and counter space.",
  },
  {
    title: "Dated Bathroom Tile",
    desc: "Refresh shower walls, floors, backsplashes, and accent areas with new tile.",
  },
  {
    title: "Poor Bathroom Layout",
    desc: "Review the placement of the shower, vanity, fixtures, and storage to make better use of the existing space.",
  },
  {
    title: "Difficult Shower Access",
    desc: "Consider a low-threshold or curbless shower, seating, handheld fixtures, and other accessibility-focused improvements.",
  },
];

const phoenixNeighborhoods = [
  {
    name: "Arcadia",
    desc: "Homeowners can update older bathroom layouts with walk-in showers, new tile, vanities, flooring, and improved storage.",
  },
  {
    name: "Biltmore",
    desc: "Bathroom renovations can focus on updated finishes, larger shower areas, custom vanities, tile, lighting, and modern fixtures.",
  },
  {
    name: "Ahwatukee",
    desc: "Bathroom remodeling can include shower conversions, primary bathroom updates, guest bathrooms, flooring, tile, and vanity improvements.",
  },
  {
    name: "Desert Ridge",
    desc: "Homeowners can update newer bathrooms with modern showers, tile, vanities, fixtures, storage, and coordinated finishes.",
  },
];

export default function PhoenixBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Phoenix AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-phoenix-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Phoenix, Arizona"
        serviceDescription="Bathroom remodeling in Phoenix, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-phoenix-az/`}
      />
      <FAQSchema faqs={phoenixFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Phoenix AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-phoenix-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO */}
        <ServiceHero
          title="Bathroom Remodeling in Phoenix, AZ"
          subtitle="Bathroom Remodeling in Phoenix, AZ"
          description="Make your Phoenix bathroom more comfortable, functional, and suited to your home. ARZ Home Remodeling provides bathroom remodeling in Phoenix including walk-in showers, tub-to-shower conversions, primary bathroom renovations, guest bathrooms, tile, flooring, vanities, and complete bathroom updates. Whether you need a focused shower upgrade or want to rethink the entire bathroom, we can help you plan the right improvements for your space."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Phoenix", url: `${siteConfig.url}/bathroom-remodeling-phoenix-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Phoenix Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Phoenix homes come in many different styles and layouts, from established neighborhoods with older bathrooms to newer properties with builder-grade finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Over time, bathrooms can develop problems that affect both appearance and everyday use. An outdated tub may take up valuable space, the vanity may provide inadequate storage, or old tile and fixtures may no longer fit the way you want to use the room.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">bathroom remodel in Phoenix, AZ</strong> can address one specific problem or combine several improvements into a complete renovation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling works with homeowners on shower remodeling, tub-to-shower conversions, primary and guest bathroom renovations, tile installation, flooring, vanity upgrades, accessibility improvements, and complete bathroom transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Get a Free Bathroom Remodeling Estimate
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

        {/* SECTION 4: LOCAL PHOENIX SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations Throughout Phoenix, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Phoenix is a large and diverse city, so remodeling requirements can vary significantly between homes and neighborhoods.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An older bathroom may need a different approach from a newer bathroom that simply needs updated finishes. Some homeowners want to preserve their existing layout, while others want to change the shower, vanity, storage, or overall configuration.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We plan each project around the existing space and the improvements that matter most to the homeowner.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our Phoenix service area includes communities and neighborhoods such as:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-muted-foreground text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Arcadia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Biltmore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Ahwatukee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Desert Ridge</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>North Phoenix</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Central Phoenix</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>South Phoenix</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Downtown Phoenix</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Sunnyslope</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2 lg:col-span-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Paradise Valley Village</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: MAIN SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Phoenix Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Whether you need one part of your bathroom updated or want a complete renovation, the project can be planned around your space, priorities, and desired design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* SECTION 6: SHOWER SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Shower Features</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Walk-In Shower Remodeling in Phoenix
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The shower is often the most noticeable part of a bathroom renovation. An outdated shower can be redesigned with new tile, better storage, modern fixtures, seating, and a glass enclosure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Curbless Walk-In Showers</h3>
                <p className="text-muted-foreground text-sm">A low or zero-threshold entry can create a more open appearance while making shower access easier.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Custom-Tiled Showers</h3>
                <p className="text-muted-foreground text-sm">Tile gives you flexibility in size, pattern, texture, and accent design.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Built-In Shower Niches</h3>
                <p className="text-muted-foreground text-sm">A recessed niche creates dedicated storage for everyday shower products.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Shower Seating</h3>
                <p className="text-muted-foreground text-sm">A built-in bench or seat can provide additional comfort and functionality.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm sm:col-span-2 lg:col-span-2">
                <h3 className="font-semibold text-foreground mb-2">Frameless Glass Enclosures</h3>
                <p className="text-muted-foreground text-sm">Glass can visually open the shower area while keeping the tile design visible from the rest of the bathroom.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TILE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Tile Installation in Phoenix
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tile can completely change the appearance of a bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We can coordinate tile across shower walls, bathroom floors, niches, backsplashes, and accent areas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Homeowners can choose from different tile sizes, patterns, textures, and finishes to create a bathroom that fits the style of their home.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The right combination of shower tile and flooring can also make a smaller bathroom feel more visually connected.
            </p>
            <div>
              <Link href="/bathroom-tile-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Tile Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: FLOORING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Flooring in Phoenix
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom flooring needs to work with the rest of the room while providing a practical surface for everyday use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Flooring can be coordinated with the shower tile, vanity, countertop, fixtures, and other finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you prefer a simple floor that keeps attention on the shower or a more distinctive tile pattern, the flooring becomes part of the overall bathroom design.
            </p>
            <div>
              <Link href="/bathroom-flooring-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Flooring Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: VANITY */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanity & Countertop Installation in Phoenix
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The vanity is one of the most frequently used parts of the bathroom.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Replacing an outdated vanity can provide:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Additional storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Counter space</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated sinks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>New hardware</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>A more appropriate configuration for the room</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Larger primary bathrooms may accommodate double vanities, while smaller Phoenix bathrooms may benefit from compact designs that preserve usable floor space.
            </p>
            <div>
              <Link href="/cabinet-countertop-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: PROBLEM → SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can a Phoenix Bathroom Remodel Improve?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phoenixProblems.map((item) => (
                <div key={item.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: BATHROOM DESIGN IDEAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Ideas for Phoenix Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A successful bathroom renovation doesn&apos;t always require moving every fixture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Replace a Tub With a Walk-In Shower</h3>
                <p className="text-muted-foreground text-sm">An unused bathtub can become a more practical shower area.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Add a Shower Niche</h3>
                <p className="text-muted-foreground text-sm">Built-in storage keeps everyday products organized without taking up floor space.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Upgrade the Vanity</h3>
                <p className="text-muted-foreground text-sm">A new vanity can improve both bathroom storage and appearance.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coordinate Shower & Floor Tile</h3>
                <p className="text-muted-foreground text-sm">Complementary tile selections create a more cohesive bathroom design.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Improve Lighting</h3>
                <p className="text-muted-foreground text-sm">Updated vanity and ceiling lighting can make the room more comfortable and functional.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Add Glass to Open the Shower</h3>
                <p className="text-muted-foreground text-sm">A glass enclosure can help create a more open visual connection between the shower and bathroom.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: COST SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Phoenix, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Phoenix</strong> depends on the size and condition of the existing bathroom and the scope of the renovation.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A tub-to-shower conversion has different requirements from a complete primary bathroom renovation.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-1">Walk-In Shower Remodel</h3>
                <p className="text-muted-foreground text-sm">Shower preparation, waterproofing, tile, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">Tub removal, shower preparation, tile, fixtures, storage, flooring, and enclosure.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-1">Guest Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">Vanity, shower or tub, tile, flooring, fixtures, and finishing updates.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A broader renovation combining shower, vanity, flooring, tile, lighting, fixtures, and storage improvements.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Custom Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: PROCESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Phoenix Bathroom Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-secondary rounded-2xl p-6 border border-border flex flex-col justify-between">
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

        {/* SECTION 14: WATERPROOFING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Bathroom Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              Tile is only the visible portion of a shower system. Proper shower preparation can involve substrate preparation, waterproofing, drainage, tile installation, grout, sealants, fixtures, and glass.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the design, a Phoenix shower remodel may include:
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower substrate preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Drainage preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grout and sealant</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass enclosure installation</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              The appropriate installation approach depends on the existing bathroom and the selected shower system.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Waterproofing →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 15: PHOENIX MATERIALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Choosing Bathroom Materials for Phoenix Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom materials should be selected according to the design, maintenance preferences, and everyday use of the space.
            </p>

            <div className="bg-secondary rounded-2xl p-8 border border-border mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                For shower and bathroom areas, homeowners can consider:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-maintain tile surfaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate grout options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Durable flooring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Practical shower glass</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Suitable countertop materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-access storage</span>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixtures that fit the intended use</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Material selection is part of the overall design process, helping the shower, vanity, flooring, fixtures, and other finishes work together.
            </p>
          </div>
        </section>

        {/* SECTION 16: NEIGHBORHOOD SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling in Phoenix Neighborhoods
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Phoenix contains many different residential areas, and bathroom remodeling needs can vary between them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {phoenixNeighborhoods.map((n) => (
                <div key={n.name} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{n.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 17: PHOENIX LOCAL CONTEXT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Home className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Remodeling for Different Phoenix Home Styles
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Phoenix homes can have very different bathroom layouts depending on when they were built and how the property has been updated.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Older bathrooms may benefit from replacing dated tubs, tile, vanities, flooring, and fixtures. More recently built homes may need targeted improvements such as a shower upgrade, new vanity, improved storage, or updated finishes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  For homeowners who like their existing layout, a renovation can focus on the surfaces and fixtures that need improvement. When the layout no longer works, the project can be planned around larger changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 18: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Phoenix
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Permit requirements depend on the type and scope of remodeling work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic updates can have different requirements from projects involving plumbing, electrical, structural changes, or other regulated work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For a specific Phoenix bathroom remodeling project, applicable requirements should be confirmed according to the property and proposed scope of work.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Local Bathroom Remodeling Requirements →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Phoenix" />

        {/* SECTION 19: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Phoenix Homeowners Choose ARZ Home Remodeling
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((pt) => (
                <div key={pt.title} className="p-6 bg-secondary rounded-2xl border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 20: PROJECT TYPES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Phoenix Bathroom Remodeling Projects
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Bathroom remodeling can take many forms depending on the property and homeowner&apos;s goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {projectExamples.map((proj) => (
                <div key={proj.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/gallery/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                View Bathroom Remodeling Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE PREVIEW */}
        <GalleryPreview />

        {/* SECTION 21: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Homeowners Throughout Phoenix, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Phoenix, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8">
              Arcadia · Biltmore · Ahwatukee · Desert Ridge · North Phoenix · Central Phoenix · South Phoenix · Downtown Phoenix · Sunnyslope · Paradise Valley Village
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve surrounding communities throughout the East Valley.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Mesa AZ →
              </Link>
              <Link href="/bathroom-remodeling-tempe-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Tempe AZ →
              </Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Gilbert AZ →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 22: FAQ */}
        <ServiceFAQ faqs={phoenixFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 23: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Phoenix Bathroom?"
          description="Whether you need a focused shower upgrade or want to rethink the entire bathroom, we can help you plan the right improvements for your space."
        />
      </main>
      <Footer />
    </>
  );
}
