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
  UtensilsCrossed,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Layton Lakes | Chandler AZ",
  description:
    "Bathroom remodeling in Layton Lakes, AZ for walk-in showers, tub conversions, tile, vanities, and complete renovations.",
  keywords: [
    "bathroom remodeling Layton Lakes",
    "bathroom remodel Layton Lakes",
    "bathroom renovation Layton Lakes",
    "Layton Lakes bathroom remodeling",
    "master bathroom remodel Layton Lakes",
    "walk-in shower Layton Lakes",
    "tub-to-shower conversion Layton Lakes",
    "bathroom tile installation Layton Lakes",
    "small bathroom remodeling Layton Lakes",
    "accessible bathroom remodeling Layton Lakes",
    "bathroom remodel cost Layton Lakes",
    "bathroom remodeling Chandler AZ",
    "bathroom remodeling Gilbert AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling Layton Lakes | Chandler AZ",
    description:
      "Bathroom remodeling in Layton Lakes, AZ for walk-in showers, tub conversions, tile, vanities, and complete renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-layton-lakes/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Layton Lakes Chandler & Gilbert AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Layton Lakes | Chandler AZ",
    description:
      "Bathroom remodeling in Layton Lakes, AZ for walk-in showers, tub conversions, tile, vanities, and complete renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-layton-lakes/`,
  },
};

const laytonLakesFaqs = [
  {
    question: "How much does a bathroom remodel cost in Layton Lakes?",
    answer:
      "The cost depends on the bathroom size, existing conditions, materials, shower or tub configuration, tile, flooring, vanity, fixtures, glass, demolition, plumbing changes, and overall project scope.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline varies depending on the size and complexity of the project. Demolition, material availability, tile work, plumbing, electrical work, inspections, and other requirements can affect the schedule.",
  },
  {
    question: "Can you convert a bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower when the existing space and project scope allow.",
  },
  {
    question: "Do you remodel primary bathrooms in Layton Lakes?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, flooring, tile, lighting, fixtures, storage, and other improvements.",
  },
  {
    question: "Do you remodel guest bathrooms?",
    answer:
      "Yes. Guest bathroom renovations can include tubs, showers, vanities, flooring, tile, fixtures, lighting, and other finishes.",
  },
  {
    question: "Can you remodel a small bathroom?",
    answer:
      "Yes. Small bathroom remodeling can focus on efficient fixture placement, storage, shower configuration, vanity size, lighting, and other space-conscious improvements.",
  },
  {
    question: "Can you make a bathroom more accessible?",
    answer:
      "Yes. Depending on the existing space, accessibility-focused improvements can include low-threshold showers, curbless entries, shower seating, handheld fixtures, and other practical features.",
  },
  {
    question: "Do bathroom remodels in Layton Lakes require permits?",
    answer:
      "Permit requirements depend on the property and the type of work being performed. Plumbing, electrical, structural, and other regulated modifications may have different requirements from cosmetic updates.",
  },
  {
    question: "Do you also remodel kitchens in Layton Lakes?",
    answer:
      "Yes. Kitchen remodeling is available as a separate service and can include cabinets, countertops, backsplashes, islands, storage, lighting, flooring, and other improvements.",
  },
  {
    question: "Do you provide whole-home remodeling?",
    answer:
      "Home renovation services are also available for homeowners who want to update multiple interior areas.",
  },
];

const mainServices = [
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Transform your primary bathroom into a more comfortable and functional space.",
    detail:
      "A primary bathroom remodel in Layton Lakes can focus on a few key improvements or combine several upgrades into one coordinated renovation, including a redesigned shower, vanity, countertop, flooring, tile, lighting, fixtures, and storage.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "A walk-in shower can make a bathroom feel more open while providing a practical alternative to an outdated tub.",
    detail:
      "Our walk-in shower remodeling options can include custom shower tile, low-threshold entries, curbless shower designs, built-in niches, shower seating, handheld fixtures, fixed showerheads, and glass shower enclosures.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can make better use of the available space.",
    detail:
      "A tub-to-shower conversion in Layton Lakes may include tub removal, shower preparation, waterproofing, tile, fixtures, storage, flooring, and glass. When the existing layout allows, the new shower can be designed within or around the current footprint.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest bathrooms often need to balance appearance, storage, and efficient use of space.",
    detail:
      "A guest bathroom remodel in Layton Lakes can include a new tub or shower, vanity, countertop, flooring, tile, lighting, fixtures, and other finishes.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "A smaller bathroom benefits from careful planning.",
    detail:
      "Space-conscious solutions can include compact vanities, walk-in showers, recessed shower niches, efficient storage, appropriate tile sizes, better fixture placement, and improved lighting.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "A bathroom can also be redesigned to make everyday bathing easier.",
    detail:
      "Depending on the space and project requirements, accessibility-focused improvements can include low-threshold or curbless showers, shower seating, handheld fixtures, grab-bar preparation, improved lighting, and practical bathroom clearances.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    body: "We discuss what you want to change, how the bathroom is currently used, and what type of renovation you're considering.",
  },
  {
    step: "2",
    title: "Bathroom Evaluation",
    body: "We review the existing shower or tub, vanity, flooring, storage, fixtures, layout, and other conditions that may affect the project.",
  },
  {
    step: "3",
    title: "Remodeling Plan",
    body: "The project scope is organized around your priorities, available space, design preferences, and desired improvements.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "Tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes are selected for the planned design.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "Existing materials are removed as needed, the bathroom is prepared, and the planned improvements are installed.",
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
    body: "We provide bathroom remodeling solutions ranging from focused shower upgrades to complete bathroom renovations.",
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
    title: "Local East Valley Service",
    body: "Layton Lakes is part of our local service area, allowing us to work with homeowners throughout the surrounding communities.",
  },
  {
    title: "Attention to Finishing Details",
    body: "Tile layout, shower transitions, storage, vanities, fixtures, glass, and other finishing details all contribute to the completed bathroom.",
  },
];

const projectExamples = [
  {
    title: "Walk-In Shower Transformation",
    description: "An existing bathing area redesigned around a more open shower configuration with updated tile, storage, fixtures, and glass.",
  },
  {
    title: "Primary Bathroom Update",
    description: "A primary bathroom refreshed with coordinated improvements to the shower, vanity, countertop, flooring, lighting, and finishes.",
  },
  {
    title: "Bathroom Finish Update",
    description: "An existing bathroom updated with new tile, flooring, vanity, fixtures, and other coordinated finishes.",
  },
];

const laytonLakesChanges = [
  {
    title: "Replace an Unused Bathtub",
    desc: "Convert an underused tub into a walk-in shower that better fits your daily routine.",
  },
  {
    title: "Update Builder-Grade Finishes",
    desc: "Replace outdated tile, flooring, vanity, fixtures, and other finishes with a coordinated design.",
  },
  {
    title: "Improve Bathroom Storage",
    desc: "Add vanity storage, recessed niches, and other practical storage solutions.",
  },
  {
    title: "Create a More Open Shower",
    desc: "A walk-in or curbless shower can visually open up the bathing area.",
  },
  {
    title: "Modernize a Primary Bathroom",
    desc: "Combine a new shower, vanity, flooring, tile, lighting, fixtures, and storage into one coordinated renovation.",
  },
  {
    title: "Improve Accessibility",
    desc: "Consider a low-threshold shower, seating, handheld fixtures, and other features designed around easier bathroom use.",
  },
];

export default function LaytonLakesBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Layton Lakes",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-layton-lakes/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Layton Lakes"
        serviceDescription="Bathroom remodeling in Layton Lakes, AZ for walk-in showers, tub conversions, tile, vanities, and complete renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-layton-lakes/`}
      />
      <FAQSchema faqs={laytonLakesFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Layton Lakes"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-layton-lakes/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO */}
        <ServiceHero
          title="Bathroom Remodeling in Layton Lakes"
          subtitle="Bathroom Remodeling in Layton Lakes, AZ"
          description="Create a bathroom that fits the way you live. ARZ Home Remodeling helps homeowners in Layton Lakes update bathrooms with walk-in showers, tub-to-shower conversions, custom tile, vanities, flooring, storage, and complete bathroom renovations. Whether you're updating a primary bathroom, refreshing a guest bath, or replacing an outdated tub, we plan the remodeling work around your existing space and your goals."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Layton Lakes", url: `${siteConfig.url}/bathroom-remodeling-layton-lakes/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Layton Lakes Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom can look outdated even when the rest of the home still works well.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Builder-grade finishes, underused bathtubs, limited storage, older tile, or an inefficient shower configuration can make an otherwise comfortable bathroom feel less practical.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">Layton Lakes bathroom remodel</strong> gives you the opportunity to improve the parts of the room that matter most.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some homeowners want a new walk-in shower or tub-to-shower conversion. Others need a larger vanity, better storage, updated flooring, new tile, or a complete bathroom renovation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we approach each project according to the existing bathroom layout, the available space, and the improvements you want to make.
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

        {/* SECTION 4: LOCAL SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations in Layton Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Layton Lakes includes homes with different layouts, bathroom sizes, finishes, and remodeling requirements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              That means there isn&apos;t one bathroom design that works for every property.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A primary bathroom may need a more functional shower and additional storage, while a guest bathroom may benefit from a compact vanity and updated tile. A homeowner who rarely uses a bathtub may prefer converting it into a walk-in shower.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our approach is to identify what isn&apos;t working in the existing bathroom and build the remodeling plan around those priorities.
            </p>
          </div>
        </section>

        {/* SECTION 5: MAIN SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Layton Lakes Bathroom Remodeling Services
              </h2>
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
              Bathroom Tile & Flooring in Layton Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tile and flooring can completely change the appearance of a bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We can coordinate tile across shower walls, bathroom floors, niches, backsplashes, and accent areas to create a consistent design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom flooring can also be selected to complement the shower, vanity, walls, fixtures, and other finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you prefer a simple, clean design or a more distinctive tile pattern, material selection should consider both appearance and everyday maintenance.
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

        {/* SECTION 7: VANITY & STORAGE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanities, Countertops & Storage
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Changing the vanity can improve both the appearance and functionality of a bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A new vanity can provide additional cabinet storage, countertop space, updated hardware, and a better fit for the room.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For primary bathrooms, homeowners may prefer larger vanities with additional storage and countertop space. Smaller bathrooms may benefit from compact designs that leave more room around the shower and other fixtures.
            </p>
            <div>
              <Link href="/cabinet-countertop-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: PROBLEM → SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can You Change With a Layton Lakes Bathroom Remodel?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {laytonLakesChanges.map((item) => (
                <div key={item.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: DESIGN IDEAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Ideas for Layton Lakes Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The best design depends on the existing bathroom and how you use it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Walk-In Shower Instead of a Tub</h3>
                <p className="text-muted-foreground text-sm">An underused bathtub can be replaced with a more practical shower configuration.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Double Vanity Upgrade</h3>
                <p className="text-muted-foreground text-sm">A larger primary bathroom may benefit from additional counter and storage space.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Built-In Shower Niche</h3>
                <p className="text-muted-foreground text-sm">A recessed niche keeps everyday shower products organized without taking up floor space.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coordinated Tile Design</h3>
                <p className="text-muted-foreground text-sm">Wall and floor tile can be selected together to create a more cohesive appearance.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Updated Bathroom Lighting</h3>
                <p className="text-muted-foreground text-sm">Improved vanity and bathroom lighting can make the room more functional and change its overall appearance.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Better Bathroom Storage</h3>
                <p className="text-muted-foreground text-sm">A combination of vanity cabinetry, recessed niches, and carefully planned storage can help keep the bathroom organized.</p>
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
                How Much Does a Bathroom Remodel Cost in Layton Lakes?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Layton Lakes</strong> depends on the bathroom size, existing conditions, materials, shower or tub configuration, tile, flooring, vanity, fixtures, glass, demolition, plumbing changes, and overall project scope.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused shower renovation will have different requirements from a complete primary bathroom remodel.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Walk-In Shower Remodel</h3>
                <p className="text-muted-foreground text-sm">May include shower preparation, waterproofing, tile, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">May include tub removal, shower preparation, tile, fixtures, flooring, storage, and an enclosure.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">Can combine shower, vanity, countertop, tile, flooring, fixtures, lighting, and storage improvements.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Complete Bathroom Renovation</h3>
                <p className="text-muted-foreground text-sm">May address multiple areas of the bathroom at once, including surfaces, fixtures, storage, and layout.</p>
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
                Our Layton Lakes Bathroom Remodeling Process
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

        {/* SECTION 12: TECHNICAL SHOWER SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Proper Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              The tile you see on the finished shower is only part of the shower system. Before the visible tile is installed, the shower area needs appropriate substrate preparation, moisture protection, drainage, and installation of the selected shower system.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the project, the work can involve:
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
                  <span>Shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile-setting materials</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grout and sealant</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass enclosure installation</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              The specific installation approach depends on the shower design and existing conditions.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Waterproofing →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: KITCHEN & HOME REMODELING */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Additional Services</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Other Remodeling Services in Layton Lakes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Bathroom remodeling is one part of the services available to homeowners in Layton Lakes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Kitchen Remodeling</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Kitchen renovations can include cabinets, countertops, backsplashes, islands, lighting, storage, flooring, and other improvements.
                  </p>
                </div>
                <Link href="/kitchen-remodeling-chandler-az/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Explore Kitchen Remodeling →
                </Link>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Home Renovation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Home renovation projects can address multiple interior spaces and may include flooring, room updates, storage improvements, and other interior improvements.
                  </p>
                </div>
                <Link href="/home-renovation-chandler-az/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  Explore Home Renovation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 14: LOCAL SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Throughout Layton Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners in <strong className="font-semibold text-foreground">Layton Lakes and surrounding East Valley communities</strong> for bathroom renovation projects ranging from focused updates to complete bathroom transformations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you&apos;re looking to replace an outdated bathtub, redesign a primary bathroom, update a guest bathroom, or improve the functionality of a smaller space, the project can be planned around your existing bathroom.
            </p>
            <div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="inline-flex items-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
                  Get a Free Bathroom Remodeling Estimate →
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 15: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Layton Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Layton Lakes is associated with both Chandler and Gilbert areas, so the applicable permitting requirements depend on the <strong className="font-semibold text-foreground">specific property and scope of work</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic bathroom updates can have different requirements from projects involving plumbing, electrical work, structural modifications, or other regulated changes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Before beginning work, the applicable requirements should be confirmed for the specific property and remodeling scope.
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
        <LocalTrust cityName="Layton Lakes" />

        {/* SECTION 16: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Layton Lakes Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 17: PROJECTS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Projects in Layton Lakes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every bathroom has different dimensions, layouts, finishes, and remodeling requirements. Our project work can include shower transformations, tub-to-shower conversions, vanity updates, tile installation, flooring, storage improvements, and complete bathroom renovations.
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
        <ServiceFAQ faqs={laytonLakesFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 19: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Layton Lakes Bathroom?"
          description="Whether you're replacing an outdated tub, creating a walk-in shower, updating your primary bathroom, or planning a complete renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
