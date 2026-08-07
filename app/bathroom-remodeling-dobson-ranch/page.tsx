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
  title: "Bathroom Remodeling Dobson Ranch | Mesa AZ",
  description:
    "Bathroom remodeling in Dobson Ranch, Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
  keywords: [
    "bathroom remodeling Dobson Ranch",
    "bathroom remodel Dobson Ranch",
    "bathroom renovation Dobson Ranch",
    "Dobson Ranch bathroom remodeling",
    "master bathroom remodel Dobson Ranch",
    "walk-in shower Dobson Ranch",
    "tub-to-shower conversion Dobson Ranch",
    "bathroom tile installation Dobson Ranch",
    "small bathroom remodeling Dobson Ranch",
    "accessible bathroom remodeling Dobson Ranch",
    "bathroom remodel cost Dobson Ranch",
    "bathroom remodeling Mesa AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling Dobson Ranch | Mesa AZ",
    description:
      "Bathroom remodeling in Dobson Ranch, Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
    url: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Dobson Ranch Mesa AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Dobson Ranch | Mesa AZ",
    description:
      "Bathroom remodeling in Dobson Ranch, Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/`,
  },
};

const dobsonRanchFaqs = [
  {
    question: "How much does a bathroom remodel cost in Dobson Ranch?",
    answer:
      "The cost depends on the bathroom size, existing conditions, materials, shower or bathtub configuration, tile, vanity, flooring, fixtures, glass, demolition, plumbing changes, and overall project scope.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline depends on the size and complexity of the renovation. Demolition, material availability, tile work, plumbing, electrical work, inspections, and other project requirements can affect the schedule.",
  },
  {
    question: "Can I replace my bathtub with a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower when the bathroom layout and project scope allow it.",
  },
  {
    question: "Do you remodel small bathrooms in Dobson Ranch?",
    answer:
      "Yes. Small bathroom remodeling can focus on better storage, fixture placement, shower configuration, vanity size, lighting, and other space-efficient improvements.",
  },
  {
    question: "Do you remodel primary bathrooms?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, tile, flooring, fixtures, lighting, storage, and other improvements.",
  },
  {
    question: "Do you remodel guest bathrooms?",
    answer:
      "Yes. Guest bathroom renovations can include tubs, showers, vanities, flooring, tile, fixtures, lighting, and other finishes.",
  },
  {
    question: "Can you make an older bathroom easier to use?",
    answer:
      "Yes. Depending on the existing layout, options may include walk-in showers, low-threshold entries, shower seating, handheld fixtures, improved storage, and other accessibility-focused improvements.",
  },
  {
    question: "What bathroom remodeling services do you provide in Dobson Ranch?",
    answer:
      "Services include walk-in shower remodeling, tub-to-shower conversions, primary bathroom remodeling, guest bathroom remodeling, small bathroom remodeling, accessible bathroom improvements, tile, flooring, vanities, countertops, and complete bathroom renovations.",
  },
  {
    question: "Do bathroom remodels in Dobson Ranch require permits?",
    answer:
      "It depends on the work being performed. Plumbing, electrical, structural, and other regulated modifications can have different requirements from cosmetic bathroom updates.",
  },
  {
    question: "Do you serve other areas of Mesa?",
    answer:
      "Yes, subject to your actual service coverage. ARZ Home Remodeling also serves homeowners in Chandler and other surrounding East Valley communities.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replacing an outdated tub or enclosed shower can make the bathroom feel more open and easier to use.",
    detail:
      "A walk-in shower remodel in Dobson Ranch can include custom wall tile, shower niches, seating, modern fixtures, low-threshold entry, curbless designs, and glass enclosures. The shower configuration is selected according to the existing space and the way you want to use it.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a shower can give you more practical bathing space.",
    detail:
      "A tub-to-shower conversion in Dobson Ranch may include tub removal, shower preparation, waterproofing, tile, shower fixtures, storage, flooring, and glass. When the existing layout allows it, the new shower can be designed around the current footprint.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "A primary bathroom should provide enough storage, comfortable bathing space, and a layout that works with your daily routine.",
    detail:
      "A primary bathroom remodel in Dobson Ranch can include a new walk-in shower, vanity, countertop, flooring, tile, lighting, fixtures, storage, and other improvements. The scope can be focused on specific problem areas or expanded into a complete bathroom renovation.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest bathrooms often need to make efficient use of limited space.",
    detail:
      "A guest bathroom remodel in Dobson Ranch can include an updated tub or shower, vanity, flooring, tile, fixtures, lighting, and other finishes. The goal is to create a clean, practical bathroom without adding unnecessary complexity to the project.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "Small bathrooms require careful planning because every part of the room affects how spacious and functional it feels.",
    detail:
      "Our small bathroom remodeling approach can include compact vanities, walk-in showers, recessed storage niches, better fixture placement, improved lighting, space-conscious storage, and coordinated wall and floor tile.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "If entering or using the shower has become difficult, remodeling can make the bathroom easier and more comfortable to use.",
    detail:
      "Depending on the existing space, options can include low-threshold shower entries, curbless showers, shower seating, handheld shower fixtures, grab-bar preparation, slip-conscious flooring, improved lighting, and more practical clearances.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    body: "We discuss your existing bathroom, the problems you want to solve, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "Bathroom Evaluation",
    body: "We look at the existing layout, shower or tub, vanity, flooring, storage, fixtures, and other parts of the room that may affect the project.",
  },
  {
    step: "3",
    title: "Remodeling Plan",
    body: "The project scope is organized around your priorities, available space, design preferences, and desired improvements.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "Tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes are selected according to the planned design.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "The existing materials are removed as needed, the space is prepared, and the planned improvements are installed.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "After the work is completed, we review the finished bathroom and the completed project scope.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Bathroom-Focused Remodeling",
    body: "Our services are centered around bathroom renovations, from shower improvements to complete bathroom transformations.",
  },
  {
    title: "Practical Design",
    body: "We focus on how the bathroom will actually be used rather than selecting features simply because they look good.",
  },
  {
    title: "Clear Project Scope",
    body: "The remodeling plan is organized around the work you want completed and the condition of the existing space.",
  },
  {
    title: "Local Mesa Service",
    body: "Dobson Ranch is part of our Mesa service area, allowing us to focus on the needs of homeowners in the local community.",
  },
  {
    title: "Attention to Details",
    body: "Tile layout, shower transitions, storage, vanities, fixtures, glass, and finishing details all contribute to the final result.",
  },
];

const projectExamples = [
  {
    title: "Walk-In Shower Transformation",
    description: "An outdated bathing area redesigned around a more open shower configuration, updated surfaces, storage, fixtures, and glass.",
  },
  {
    title: "Bathroom Vanity Update",
    description: "An existing bathroom refreshed with a new vanity, countertop, hardware, and coordinated finishes.",
  },
  {
    title: "Complete Bathroom Renovation",
    description: "A larger bathroom renovation combining multiple improvements into one coordinated design.",
  },
];

const dobsonRanchImprovements = [
  {
    title: "Outdated Bathtub",
    desc: "If the bathtub is rarely used, a tub-to-shower conversion can create a more practical bathing area.",
  },
  {
    title: "Limited Storage",
    desc: "A new vanity, recessed niche, or better cabinet configuration can provide more usable storage.",
  },
  {
    title: "Small Shower",
    desc: "A redesigned shower layout can improve how the available space is used.",
  },
  {
    title: "Worn Tile & Flooring",
    desc: "New tile and flooring can refresh the appearance while coordinating the different surfaces of the room.",
  },
  {
    title: "Difficult-to-Use Bathroom",
    desc: "Low-threshold showers, seating, handheld fixtures, and other accessibility-focused improvements can make daily routines easier.",
  },
  {
    title: "Outdated Overall Appearance",
    desc: "A complete bathroom renovation can bring together new tile, flooring, vanity, fixtures, lighting, storage, and shower design.",
  },
];

export default function DobsonRanchBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Dobson Ranch",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-dobson-ranch/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Dobson Ranch"
        serviceDescription="Bathroom remodeling in Dobson Ranch, Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and flooring."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-dobson-ranch/`}
      />
      <FAQSchema faqs={dobsonRanchFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Dobson Ranch"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-dobson-ranch/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO */}
        <ServiceHero
          title="Bathroom Remodeling in Dobson Ranch"
          subtitle="Bathroom Remodeling in Dobson Ranch, Mesa, AZ"
          description="Update an outdated bathroom with a design that makes better use of your existing space. ARZ Home Remodeling helps homeowners in Dobson Ranch, Mesa with walk-in showers, tub-to-shower conversions, bathroom tile, flooring, vanities, storage, accessible bathroom improvements, and complete bathroom renovations. Whether you're improving a compact guest bathroom or redesigning your primary bathroom, we can help you plan the remodeling work around your home's layout and your everyday needs."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Dobson Ranch", url: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Dobson Ranch Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An established bathroom may have a layout that worked well when the home was built but no longer fits the way your household uses the space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              You may have an oversized bathtub that rarely gets used, a small vanity with limited storage, dated tile, an enclosed shower, or a bathroom layout that simply feels inefficient.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">bathroom remodel in Dobson Ranch</strong> can address those problems without automatically turning the project into a complete redesign.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some homeowners need a focused shower upgrade or tub-to-shower conversion. Others want new flooring, a vanity, tile, lighting, storage, and fixtures throughout the room.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we plan the renovation around the existing bathroom, the condition of the space, and the improvements you want to make.
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

        {/* SECTION 4: LOCAL-SPECIFIC SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations in Dobson Ranch, Mesa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dobson Ranch is an established residential community in Mesa, and homes within the area can have very different bathroom layouts and renovation requirements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An older bathroom may benefit from better storage, a more practical shower configuration, updated surfaces, or a new vanity. In other cases, homeowners may want to completely change the appearance and functionality of the room.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              That&apos;s why we don&apos;t treat every <strong className="font-semibold text-foreground">Dobson Ranch bathroom remodel</strong> as the same project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The right approach depends on the existing layout, the condition of the bathroom, the available space, and how you want to use the finished room.
            </p>
          </div>
        </section>

        {/* SECTION 5: SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Dobson Ranch Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                From individual bathroom upgrades to complete renovations, we provide solutions for different bathroom layouts and remodeling goals.
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

        {/* SECTION 6: TILE & FLOORING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Tile & Flooring in Dobson Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tile and flooring have a major impact on both the appearance and usability of a remodeled bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom tile can be used throughout shower walls, floors, backsplashes, niches, and accent areas. Different tile sizes, patterns, textures, and finishes can be combined to create anything from a simple updated bathroom to a more distinctive custom design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bathroom flooring can also be selected to coordinate with the shower, vanity, walls, and other finishes.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/bathroom-tile-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Tile Installation →
              </Link>
              <Link href="/bathroom-flooring-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Flooring →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: VANITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanity & Countertop Remodeling
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An outdated vanity can limit both storage and usable counter space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Replacing the vanity gives you an opportunity to reconsider cabinet size, countertop space, sink configuration, hardware, and overall appearance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For smaller Dobson Ranch bathrooms, the vanity should be sized carefully so it provides useful storage without making the room feel crowded. For larger primary bathrooms, homeowners may prefer more countertop and storage space.
            </p>
            <div>
              <Link href="/cabinet-countertop-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: LOCAL PROBLEM/SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Problem & Solutions</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can You Improve With a Dobson Ranch Bathroom Remodel?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A bathroom renovation can solve different problems depending on the existing room.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dobsonRanchImprovements.map((item) => (
                <div key={item.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: DESIGN SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Ideas for Dobson Ranch Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The best bathroom design depends on the space you already have and what isn&apos;t working for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Replace a Tub With a Walk-In Shower</h3>
                <p className="text-muted-foreground text-sm">An underused bathtub can be converted into a more accessible and practical shower area.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Add Built-In Shower Storage</h3>
                <p className="text-muted-foreground text-sm">A recessed niche can keep shampoo, soap, and other everyday items organized.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Update the Vanity</h3>
                <p className="text-muted-foreground text-sm">A new vanity can improve storage while giving the bathroom a completely different appearance.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Use Coordinated Tile</h3>
                <p className="text-muted-foreground text-sm">Matching or complementary wall and floor tile can make the bathroom feel more cohesive.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Improve Lighting</h3>
                <p className="text-muted-foreground text-sm">Updated vanity and bathroom lighting can improve visibility while changing the overall atmosphere of the room.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Make Better Use of Small Spaces</h3>
                <p className="text-muted-foreground text-sm">A compact vanity, appropriately sized shower, and carefully planned storage can make a smaller bathroom feel more functional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: COST SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Dobson Ranch?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Dobson Ranch</strong> depends on the size and condition of the bathroom, material selections, shower or bathtub configuration, tile, vanity, flooring, fixtures, glass, demolition, plumbing changes, and overall project scope.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused shower renovation will have different requirements from a complete bathroom renovation.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Shower Remodel</h3>
                <p className="text-muted-foreground text-sm">A focused shower project may include new tile, waterproofing, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">This can involve tub removal, shower preparation, tile, fixtures, storage, flooring, and an enclosure.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A larger project may combine a new shower, vanity, flooring, tile, lighting, fixtures, and storage.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Complete Bathroom Renovation</h3>
                <p className="text-muted-foreground text-sm">A full renovation may address several areas of the bathroom at once, including surfaces, fixtures, storage, layout, and finishes.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                View Our Bathroom Remodeling Cost Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: PROCESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Dobson Ranch Bathroom Remodeling Process
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

        {/* SECTION 12: WATERPROOFING / TECHNICAL AUTHORITY */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Proper Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A shower&apos;s finished tile is only one part of the overall construction. Before tile is installed, the shower area needs appropriate preparation and moisture protection for the specific system being used.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the project, this can involve:
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
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
                  <span>Tile-setting materials</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper transitions</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grout and sealant</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The exact approach depends on the bathroom design and existing conditions.
            </p>
          </div>
        </section>

        {/* SECTION 13: MATERIALS / MAINTENANCE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Choosing Bathroom Materials for Everyday Use
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The materials selected for your bathroom affect its appearance and how much maintenance it requires.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For shower areas, homeowners can consider different tile types, grout options, glass configurations, fixtures, and storage solutions based on the desired appearance and maintenance preferences.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 border border-border shadow-sm mb-6">
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
                  <span>Appropriate tile and grout selection</span>
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
                  <span>Convenient storage</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixtures that fit the bathroom&apos;s intended use</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Finishes that coordinate with the overall design</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A successful renovation should look good when completed and remain practical for everyday use.
            </p>
          </div>
        </section>

        {/* SECTION 14: DOBSON RANCH LOCAL SERVICE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Homeowners Throughout Dobson Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides bathroom remodeling services for homeowners throughout <strong className="font-semibold text-foreground">Dobson Ranch in Mesa, Arizona</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you&apos;re near the community&apos;s established residential areas, lakes, parks, or golf course, the remodeling process begins with the bathroom itself.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                We can help with projects ranging from:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Walk-in showers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tub-to-shower conversions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Primary bathrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Guest bathrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Small bathrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Accessible bathroom improvements</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Vanities and countertops</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Complete bathroom renovations</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              If you&apos;re not sure which type of remodeling project is right for your bathroom, we can discuss the available options based on the existing space.
            </p>
          </div>
        </section>

        {/* SECTION 15: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Dobson Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dobson Ranch is located within the City of Mesa, and permit requirements depend on the scope of bathroom work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic updates can have different requirements from projects involving plumbing, electrical work, structural modifications, or other regulated changes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Before starting a remodeling project, the applicable requirements should be confirmed for the specific work being planned.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Mesa Bathroom Remodeling Requirements →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Dobson Ranch" />

        {/* SECTION 16: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Dobson Ranch Homeowners Choose ARZ Home Remodeling
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((pt) => (
                <div key={pt.title} className="p-6 bg-background rounded-2xl border border-border flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 17: PROJECT SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Projects in Dobson Ranch
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every bathroom has different dimensions, layouts, and remodeling requirements. Our completed projects can demonstrate how different spaces can be updated through changes to showers, tile, flooring, vanities, storage, fixtures, and other finishes.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {projectExamples.map((proj) => (
                <div key={proj.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
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

        {/* SECTION 18: FAQ */}
        <ServiceFAQ faqs={dobsonRanchFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 19: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Dobson Ranch Bathroom?"
          description="Whether you're replacing an outdated tub, creating a walk-in shower, updating a guest bathroom, or planning a complete primary bathroom renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
