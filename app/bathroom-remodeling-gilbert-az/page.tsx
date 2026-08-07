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
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Gilbert AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Gilbert, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
  keywords: [
    "bathroom remodeling Gilbert AZ",
    "bathroom remodel Gilbert AZ",
    "bathroom renovation Gilbert",
    "Gilbert bathroom remodeling",
    "walk-in shower remodeling Gilbert",
    "tub-to-shower conversion Gilbert",
    "primary bathroom remodel Gilbert",
    "guest bathroom remodel Gilbert",
    "small bathroom remodeling Gilbert",
    "accessible bathroom remodeling Gilbert",
    "bathroom tile installation Gilbert",
    "bathroom flooring Gilbert"
  ],
  openGraph: {
    title: "Bathroom Remodeling Gilbert AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Gilbert, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    url: `${siteConfig.url}/bathroom-remodeling-gilbert-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-gilbert.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Gilbert Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Gilbert AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Gilbert, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-gilbert.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-gilbert-az/`,
  },
};

const gilbertFaqs = [
  {
    question: "How much does a bathroom remodel cost in Gilbert, AZ?",
    answer:
      "The cost depends on the bathroom size, existing conditions, materials, shower or tub configuration, tile, flooring, vanity, fixtures, glass, demolition, plumbing, electrical work, and overall project scope.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline varies according to the project's size and complexity. Demolition, material availability, tile work, plumbing, electrical work, inspections, and other requirements can affect the schedule.",
  },
  {
    question: "Can you convert a bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower when the existing layout and project scope allow.",
  },
  {
    question: "Do you remodel primary bathrooms in Gilbert?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, tile, flooring, fixtures, lighting, storage, and other improvements.",
  },
  {
    question: "Do you remodel guest bathrooms?",
    answer:
      "Yes. Guest bathroom renovations can include tubs, showers, vanities, flooring, tile, fixtures, lighting, storage, and finishing updates.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Small bathroom remodeling focuses on efficient use of space through appropriate shower configurations, vanity sizes, storage, lighting, and fixture placement.",
  },
  {
    question: "Can you make my bathroom more accessible?",
    answer:
      "Depending on the existing space, accessibility-focused improvements may include low-threshold showers, curbless entries, shower seating, handheld fixtures, improved lighting, and other practical features.",
  },
  {
    question: "Do bathroom remodels in Gilbert require permits?",
    answer:
      "Permit requirements depend on the specific work being performed. Plumbing, electrical, structural, and other regulated modifications may have different requirements from cosmetic updates.",
  },
  {
    question: "What areas of Gilbert do you serve?",
    answer:
      "We serve homeowners throughout Gilbert, including communities such as Power Ranch, Morrison Ranch, Val Vista Lakes, Agritopia, Seville, Adora Trails, Lyons Gate, and Finley Farms.",
  },
  {
    question: "Do you also remodel kitchens?",
    answer:
      "Yes. Kitchen remodeling is available as a separate service for homeowners who want to update cabinets, countertops, backsplashes, islands, storage, lighting, flooring, and other kitchen features.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and practical bathing area.",
    detail:
      "A walk-in shower remodel in Gilbert can include custom wall tile, shower niches, seating, low-threshold or curbless entry, modern fixtures, and glass enclosures. The shower is planned around the available space and the way you want to use it.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a shower can make better use of the existing bathroom footprint.",
    detail:
      "A tub-to-shower conversion in Gilbert, AZ may include tub removal, shower preparation, waterproofing, tile, fixtures, storage, flooring, and glass. When the layout allows, the new shower can be designed around the existing tub area.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Your primary bathroom should provide comfortable bathing space, practical storage, and finishes that fit your home.",
    detail:
      "A primary bathroom remodel in Gilbert can include a walk-in shower, double vanity, countertop, bathroom flooring, custom tile, shower storage, lighting, plumbing fixtures, glass enclosure, and freestanding tub. The scope can be focused on specific areas or expanded into a complete primary bathroom renovation.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "A guest bathroom often needs to make efficient use of limited space while remaining comfortable and attractive.",
    detail:
      "A guest bathroom remodel in Gilbert can include a new vanity, shower or tub, tile, flooring, fixtures, lighting, storage, and other finishes.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "Small bathrooms require careful planning because every fixture and storage element affects the available space.",
    detail:
      "Our small bathroom remodeling options can include compact vanities, walk-in showers, recessed niches, space-conscious storage, better fixture placement, coordinated tile, and improved lighting.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "If entering or using your shower has become difficult, the bathroom can be redesigned around easier everyday use.",
    detail:
      "Depending on the existing space, accessibility-focused improvements can include low-threshold showers, curbless shower entries, shower seating, handheld fixtures, grab-bar preparation, slip-conscious flooring, improved lighting, and practical bathroom clearances.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    body: "We discuss your bathroom, the problems you want to solve, your preferred design, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "The existing bathroom layout, shower or tub, vanity, flooring, storage, fixtures, and other relevant conditions are reviewed.",
  },
  {
    step: "3",
    title: "Remodeling Plan",
    body: "We organize the project around your priorities, available space, desired improvements, and selected design direction.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "Tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes are selected for the planned renovation.",
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
    body: "We specialize in bathroom renovation projects ranging from focused shower updates to complete bathroom transformations.",
  },
  {
    title: "Practical Design",
    body: "We consider how the bathroom will actually be used when planning showers, storage, vanities, flooring, fixtures, and other improvements.",
  },
  {
    title: "Clear Project Scope",
    body: "The remodeling plan is organized around the work you want completed and the existing conditions of the bathroom.",
  },
  {
    title: "Local Gilbert Service",
    body: "We serve homeowners throughout Gilbert and surrounding East Valley communities.",
  },
  {
    title: "Attention to Details",
    body: "Tile layout, shower transitions, storage, vanities, fixtures, glass, and finishing details all contribute to the completed bathroom.",
  },
];

const projectExamples = [
  {
    title: "Walk-In Shower Transformation",
    description: "Replacing an outdated bathing area with a more open shower configuration, updated tile, storage, fixtures, and glass.",
  },
  {
    title: "Tub-to-Shower Conversion",
    description: "Removing an existing tub and creating a new shower designed around the available bathroom space.",
  },
  {
    title: "Primary Bathroom Update",
    description: "Combining improvements to the shower, vanity, flooring, tile, fixtures, lighting, and storage.",
  },
  {
    title: "Guest Bathroom Refresh",
    description: "Updating the vanity, tile, flooring, fixtures, shower or tub, and other finishes.",
  },
];

const gilbertProblems = [
  {
    title: "An Unused Bathtub",
    desc: "Convert an underused tub into a walk-in shower that better matches your daily routine.",
  },
  {
    title: "An Outdated Shower",
    desc: "Replace an old shower with updated tile, storage, fixtures, and glass.",
  },
  {
    title: "Limited Bathroom Storage",
    desc: "Add vanity storage, recessed niches, and other practical organization solutions.",
  },
  {
    title: "An Old Vanity",
    desc: "Replace an outdated vanity with a configuration that provides better counter and storage space.",
  },
  {
    title: "Dated Tile & Flooring",
    desc: "Refresh the room with coordinated wall tile, shower tile, flooring, and finishes.",
  },
  {
    title: "Poor Use of Space",
    desc: "Reconsider the shower, vanity, storage, and fixture arrangement to make better use of the existing bathroom.",
  },
  {
    title: "Difficult Bathroom Access",
    desc: "Consider low-threshold showers, seating, handheld fixtures, and other accessibility-focused improvements.",
  },
];

const gilbertNeighborhoods = [
  {
    name: "Power Ranch",
    desc: "Bathroom renovations can focus on practical upgrades such as walk-in showers, tub-to-shower conversions, vanities, tile, and storage.",
  },
  {
    name: "Morrison Ranch",
    desc: "Larger bathrooms can accommodate upgrades such as expanded vanities, custom showers, tile features, and additional storage.",
  },
  {
    name: "Val Vista Lakes",
    desc: "Bathroom renovations can combine updated finishes with practical improvements to showers, vanities, flooring, and storage.",
  },
  {
    name: "Agritopia",
    desc: "Smaller or efficiently planned bathrooms can benefit from space-conscious vanities, showers, storage, and coordinated finishes.",
  },
  {
    name: "Seville",
    desc: "Bathroom renovations can incorporate updated showers, tile, vanities, flooring, fixtures, and other contemporary finishes.",
  },
  {
    name: "Adora Trails",
    desc: "Homeowners can update primary and guest bathrooms with modern showers, tile, flooring, vanities, and storage.",
  },
];

export default function GilbertBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Gilbert AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-gilbert-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Gilbert, Arizona"
        serviceDescription="Bathroom remodeling in Gilbert, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-gilbert-az/`}
      />
      <FAQSchema faqs={gilbertFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Gilbert AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-gilbert-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO */}
        <ServiceHero
          title="Bathroom Remodeling in Gilbert, AZ"
          subtitle="Bathroom Remodeling in Gilbert, AZ"
          description="Upgrade your bathroom with a layout, finishes, and features designed around the way you use the space. ARZ Home Remodeling provides bathroom remodeling in Gilbert including walk-in showers, tub-to-shower conversions, primary bathroom renovations, guest bathrooms, tile, flooring, vanities, and complete bathroom updates. Whether your bathroom needs a focused upgrade or a complete transformation, we can help you plan the remodeling work around your existing space."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Gilbert", url: `${siteConfig.url}/bathroom-remodeling-gilbert-az/` },
          ]}
        />

        {/* SECTION 3: MAIN INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Gilbert Homeowners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An outdated bathroom can affect much more than appearance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An oversized bathtub may take up space you rarely use. An older shower may have limited storage. A small vanity can leave you without enough counter space, while dated flooring and tile can make the entire room feel old.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">bathroom remodel in Gilbert, AZ</strong> gives you the opportunity to address those problems while creating a bathroom that better fits your daily routine.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling works with homeowners on projects ranging from focused shower upgrades and tub-to-shower conversions to primary bathroom renovations and complete bathroom remodels.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The remodeling plan is based on the existing bathroom, the available space, and the improvements you want to make.
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

        {/* SECTION 4: LOCAL GILBERT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations Throughout Gilbert, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gilbert includes a wide range of established neighborhoods and residential communities, with bathrooms that vary in size, layout, age, and design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some homeowners are looking to modernize a primary bathroom. Others want to replace an unused bathtub, update a guest bathroom, improve storage, or make a smaller bathroom more functional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach is simple: identify what isn&apos;t working in your existing bathroom and build the renovation around those priorities.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                We serve homeowners throughout Gilbert, including areas such as:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-muted-foreground text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Power Ranch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Morrison Ranch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Val Vista Lakes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Agritopia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Seville</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Adora Trails</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Lyons Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Finley Farms</span>
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
                Our Gilbert Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                From individual bathroom improvements to complete renovations, we provide remodeling options for different spaces and budgets.
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

        {/* SECTION 6: TILE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Tile Installation in Gilbert
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tile is one of the most visible parts of a bathroom remodel and can completely change the character of the space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We can use tile throughout shower walls, floors, niches, backsplashes, and accent areas. Homeowners can choose from different tile sizes, patterns, textures, and finishes depending on the look and maintenance level they want.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A coordinated tile plan can also help connect the shower, floor, vanity, and other bathroom elements.
            </p>
            <div>
              <Link href="/bathroom-tile-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Tile Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: FLOORING SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Flooring in Gilbert
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom flooring needs to work with the rest of the room while providing a practical surface for everyday use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Flooring options can be coordinated with shower tile, wall finishes, vanity colors, countertops, and fixtures.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Depending on the design, bathroom flooring can become a subtle background element or a major visual feature of the renovation.
            </p>
            <div>
              <Link href="/bathroom-flooring-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Flooring Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: VANITY SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanity & Countertop Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A vanity affects storage, counter space, and the overall appearance of the bathroom.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Replacing an outdated vanity can provide:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Additional cabinet storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>More usable counter space</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated sinks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>New hardware</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>A better fit for the bathroom</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>A refreshed overall appearance</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Primary bathrooms may benefit from larger double-vanity configurations, while smaller bathrooms often require more compact designs.
            </p>
            <div>
              <Link href="/cabinet-countertop-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: PROBLEM → SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can a Gilbert Bathroom Remodel Solve?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gilbertProblems.map((item) => (
                <div key={item.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: BATHROOM DESIGN IDEAS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Ideas for Gilbert Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A successful bathroom renovation doesn&apos;t necessarily require changing everything.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Convert the Tub to a Walk-In Shower</h3>
                <p className="text-muted-foreground text-sm">An unused tub can be replaced with a shower designed around the existing footprint.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Add a Shower Niche</h3>
                <p className="text-muted-foreground text-sm">Built-in shower storage keeps everyday products organized without taking up floor space.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Upgrade the Vanity</h3>
                <p className="text-muted-foreground text-sm">A new vanity can dramatically change the appearance while improving storage and counter space.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Use Large-Format Tile</h3>
                <p className="text-muted-foreground text-sm">Larger tiles can create a clean, contemporary appearance and reduce the number of visible grout joints.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Create a Coordinated Tile Design</h3>
                <p className="text-muted-foreground text-sm">Wall, shower, and floor tile can be selected together to give the bathroom a cohesive appearance.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Improve Lighting</h3>
                <p className="text-muted-foreground text-sm">Updated vanity, ceiling, and shower-area lighting can make the bathroom more comfortable to use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: COST SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Gilbert, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Gilbert</strong> depends on several factors, including bathroom size, existing condition, material choices, shower layout, vanity, plumbing, and electrical scope.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused shower renovation will have different requirements from a complete primary bathroom remodel.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Walk-In Shower Remodel</h3>
                <p className="text-muted-foreground text-sm">Shower preparation, waterproofing, tile, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">Tub removal, shower preparation, tile, fixtures, storage, flooring, and enclosure.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Guest Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">Vanity, shower or tub, flooring, tile, fixtures, and finishing updates.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A larger renovation combining shower, vanity, flooring, tile, fixtures, lighting, and storage improvements.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Get a Custom Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 12: PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Gilbert Bathroom Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border flex flex-col justify-between shadow-sm">
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

        {/* SECTION 13: TECHNICAL AUTHORITY */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Bathroom Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A finished tiled shower depends on more than the visible tile. Before tile installation, the shower area needs appropriate substrate preparation, waterproofing, drainage, and installation of the selected shower system.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the project, bathroom remodeling can involve:
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Substrate preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower waterproofing</span>
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
                  <span>Tile-setting materials</span>
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
              The exact installation method depends on the shower design, selected materials, and existing bathroom conditions.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Waterproofing →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 14: GILBERT HARD-WATER SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Choosing Bathroom Materials for Gilbert Homes
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Bathroom materials should be selected according to the appearance, maintenance preferences, and everyday use of the space.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For shower areas, homeowners can consider tile, grout, glass, fixtures, and countertop materials based on how easy they are to clean and maintain.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Practical considerations include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-clean shower surfaces</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate grout selection</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Durable flooring</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Suitable shower glass</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Practical countertop materials</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Convenient storage</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixtures that fit the bathroom&apos;s intended use</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              The right material combination depends on your bathroom design and maintenance preferences.
            </p>
          </div>
        </section>

        {/* SECTION 15: LOCAL COMMUNITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling in Gilbert Neighborhoods
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Different Gilbert communities can have different home layouts and bathroom configurations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gilbertNeighborhoods.map((n) => (
                <div key={n.name} className="bg-secondary p-6 rounded-2xl border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{n.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 16: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Gilbert
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Permit requirements depend on the type of bathroom work being performed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic updates can have different requirements from projects involving plumbing, electrical work, structural changes, or other regulated modifications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For a specific remodeling project, the applicable requirements should be confirmed based on the property and proposed scope of work.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Gilbert Bathroom Remodeling Requirements →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Gilbert" />

        {/* SECTION 17: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Gilbert Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 18: PROJECT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Gilbert Bathroom Remodeling Projects
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every bathroom has different dimensions, layouts, materials, and remodeling requirements.
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
                View Our Bathroom Remodeling Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE PREVIEW */}
        <GalleryPreview />

        {/* SECTION 19: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Homeowners Throughout Gilbert, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides bathroom remodeling services throughout Gilbert, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8">
              Morrison Ranch · Power Ranch · Val Vista Lakes · Agritopia · Seville · Lyons Gate · Adora Trails · Finley Farms
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve surrounding East Valley communities, including Chandler, Mesa, and Tempe.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Chandler Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Mesa Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-tempe-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Tempe Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 20: FAQ */}
        <ServiceFAQ faqs={gilbertFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 21: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Gilbert Bathroom?"
          description="Whether you want to replace an outdated tub, create a walk-in shower, update a primary bathroom, improve a guest bathroom, or complete a full renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
