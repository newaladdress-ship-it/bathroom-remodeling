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
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Queen Creek AZ | Custom Remodels",
  description:
    "Bathroom remodeling in Queen Creek, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling Queen Creek AZ",
    "bathroom remodel Queen Creek AZ",
    "bathroom renovation Queen Creek",
    "Queen Creek bathroom remodeling",
    "walk-in shower remodeling Queen Creek",
    "tub-to-shower conversion Queen Creek",
    "primary bathroom remodel Queen Creek",
    "guest bathroom remodel Queen Creek",
    "small bathroom remodeling Queen Creek",
    "accessible bathroom remodeling Queen Creek",
    "bathroom tile installation Queen Creek",
    "bathroom flooring Queen Creek"
  ],
  openGraph: {
    title: "Bathroom Remodeling Queen Creek AZ | Custom Remodels",
    description:
      "Bathroom remodeling in Queen Creek, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Queen Creek Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Queen Creek AZ | Custom Remodels",
    description:
      "Bathroom remodeling in Queen Creek, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
  },
};

const queenCreekFaqs = [
  {
    question: "How long does a bathroom remodel take in Queen Creek, AZ?",
    answer:
      "The timeline depends on the project's size, material availability, plumbing changes, and permitting requirements. A smaller update generally takes less time than a complete renovation.",
  },
  {
    question: "Do you serve San Tan Valley as well?",
    answer:
      "Yes. We can serve qualifying homeowners in nearby San Tan Valley and surrounding Queen Creek-area communities.",
  },
  {
    question: "What is the most popular bathroom upgrade in Queen Creek?",
    answer:
      "Walk-in shower and tub-to-shower conversions are practical options for homeowners who want more usable shower space and a more modern bathroom layout.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not necessarily require replacing the entire room. Shower-only projects can include demolition, waterproofing, tile, glass, fixtures, and finishing.",
  },
  {
    question: "Can you remodel a newer Queen Creek home?",
    answer:
      "Yes. Newer homes can benefit from targeted upgrades such as better shower systems, custom tile, improved storage, upgraded vanities, lighting, and more personalized finishes.",
  },
  {
    question: "How much does bathroom remodeling cost in Queen Creek?",
    answer:
      "The cost depends on the scope, existing conditions, materials, plumbing requirements, and selected finishes. A project-specific estimate provides a more useful figure than a generic starting price.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated shower or tub enclosure with a more open walk-in shower.",
    detail:
      "Options can include custom tile, frameless glass, built-in niches, shower seating, handheld fixtures, and low-threshold or curbless entries.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Turn an underused bathtub into a practical shower designed around your available space.",
    detail:
      "We handle demolition, surface preparation, waterproofing, tile installation, fixtures, and finishing.",
    cta: "Learn More →",
  },
  {
    title: "Complete Primary Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Refresh the entire primary bathroom with a coordinated combination of improvements.",
    detail:
      "Includes shower improvements, vanity replacement, flooring, lighting, plumbing fixtures, storage, and finish upgrades.",
    cta: "Learn More →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Improve a smaller bathroom with space-conscious fixtures and functional updates.",
    detail:
      "Features updated tile, better storage, modern lighting, and a layout designed for everyday family and guest use.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile & Flooring",
    href: "/bathroom-tile-installation/",
    description:
      "Upgrade worn surfaces with porcelain, ceramic, or other suitable tile selections.",
    detail:
      "We help coordinate wall tile, shower surfaces, flooring, grout, and transitions for a cohesive finish.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Phone Consultation",
    body: "Discuss your bathroom, goals, preferred style, approximate budget, and desired timeline.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We review the existing layout, plumbing, surfaces, measurements, and potential remodeling requirements.",
  },
  {
    step: "3",
    title: "Written Proposal",
    body: "You receive a detailed proposal outlining the planned scope and expected project cost.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Select tile, fixtures, vanity finishes, countertops, glass, lighting, and other details.",
  },
  {
    step: "5",
    title: "Construction",
    body: "The project moves through demolition, preparation, waterproofing, installation, plumbing, finishing, and cleanup.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed work with you and address qualifying punch-list items before project completion.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Full Insurance & Coverage",
    body: "Our projects are handled with complete insurance coverage and professional standards for quality remodeling work.",
  },
  {
    title: "Workmanship Warranty",
    body: "We stand behind our installation work and address qualifying workmanship issues according to the terms of your project agreement.",
  },
  {
    title: "Queen Creek Service",
    body: "We understand the layouts and design preferences commonly found throughout Queen Creek's residential communities.",
  },
  {
    title: "Fixed Written Pricing",
    body: "You receive a written project proposal before construction begins so the scope and expected costs are clearly defined.",
  },
  {
    title: "Durable Material Selection",
    body: "We recommend practical tile, grout, glass, countertop, and fixture options suited to the demands of everyday bathroom use.",
  },
  {
    title: "Organized Project Management",
    body: "Your project is coordinated from the initial consultation through material selection, construction, and final walkthrough.",
  },
];

const costTypes = [
  {
    title: "Guest Bathroom Update",
    desc: "Vanity, fixtures, paint, lighting, and selected finish upgrades.",
    est: "Free Custom Estimate",
  },
  {
    title: "Guest Bathroom Full Remodel",
    desc: "Shower or tub area, tile, vanity, flooring, fixtures, and coordinated finishes.",
    est: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "Demolition, preparation, waterproofing, shower construction, tile, glass, and fixtures.",
    est: "Free Custom Estimate",
  },
  {
    title: "Primary Bathroom Remodel",
    desc: "A broader renovation including shower, vanity, flooring, lighting, fixtures, and other selected improvements.",
    est: "Free Custom Estimate",
  },
];

const queenCreekAreasList = [
  "Queen Creek", "Queen Creek Station", "San Tan Valley", "Ellsworth Road", "Queen Creek Road", "San Tan Mountain Area"
];

const queenCreekZipCodes = ["85142", "85140"];

export default function QueenCreekBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Queen Creek AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-queen-creek-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Queen Creek, Arizona"
        serviceDescription="Bathroom remodeling in Queen Creek, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <FAQSchema faqs={queenCreekFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Queen Creek AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Queen Creek Bathroom Remodeling Experts"
          subtitle="Quality Craftsmanship for Queen Creek Families"
          description="Upgrade your Queen Creek home with a bathroom designed around your family's needs, lifestyle, and existing space. From practical guest bathroom updates to custom primary suite renovations, ARZ Home Remodeling provides professional design, installation, and project coordination throughout Queen Creek, AZ."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Queen Creek", url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION / LOCAL STORY */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Custom Bathroom Renovations in Queen Creek, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Queen Creek has grown rapidly with a mix of newer subdivisions, custom homes, and established residential communities. As homes evolve, bathrooms often need updates that improve storage, accessibility, shower space, lighting, and everyday functionality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we provide complete bathroom renovations throughout Queen Creek. Our work includes <strong className="font-semibold text-foreground">walk-in shower installations, tub-to-shower conversions, tile and flooring upgrades, vanity replacements, lighting improvements, and full bathroom renovations</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you are updating a family bathroom in a newer subdivision or creating a more comfortable primary bathroom, we plan the remodel around your home&apos;s existing layout and your priorities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We serve homeowners throughout <strong className="font-semibold text-foreground">85142 and 85140</strong>, including areas surrounding Queen Creek and nearby San Tan Valley.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Speak to a Project Supervisor — {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOCAL COMMUNITY & PERMITS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Queen Creek Community & Local Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Queen Creek is surrounded by distinctive desert scenery and popular destinations such as <strong className="font-semibold text-foreground">San Tan Mountain Regional Park</strong> and <strong className="font-semibold text-foreground">Queen Creek Olive Mill</strong>. The community also includes a wide range of residential developments, from newer family neighborhoods to custom homes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bathroom designs in Queen Creek often benefit from durable surfaces, practical storage, efficient layouts, and finishes that are easy to maintain. Our approach is to combine those practical considerations with a design that fits the character of your home.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Recent Queen Creek Remodeling Example
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A recent bathroom renovation involved updating a family guest bathroom in a newer Queen Creek home. The project included a custom double-sink vanity with a quartz countertop, soft-close storage, a tub-to-shower conversion, slip-resistant flooring, and upgraded grout.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The result created more usable shower space while improving storage and making the bathroom easier for the family to maintain.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Queen Creek Permitting & Building Safety
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bathroom projects involving plumbing relocation, structural changes, electrical modifications, or other regulated work may require permits and inspections. We coordinate the applicable planning and inspection requirements for the project and make sure the work is planned around current safety requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Queen Creek Bathroom Remodeling Services
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

        {/* SECTION 6: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Queen Creek Homeowners Choose ARZ
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

        {/* SECTION 7: DESIGNING FOR QUEEN CREEK HOMES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Designing Bathrooms for Queen Creek Homes
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Arizona bathrooms need to balance appearance with long-term practicality. Heat, frequent water exposure, mineral deposits, and everyday family use can all affect bathroom finishes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For shower and wet-area renovations, we focus on proper substrate preparation, waterproofing, drainage, tile installation, and appropriate material selection.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Easy-to-Maintain Surfaces</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Large-format porcelain tile can reduce the number of grout joints while creating a clean, contemporary appearance.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Durable Grout Options</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For suitable applications, epoxy grout can provide a low-porosity surface that is easier to maintain than traditional cement-based grout.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Glass Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Protective treatments can help reduce water spotting and make routine shower-glass cleaning easier.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Practical Storage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built-in niches, vanity drawers, linen storage, and other space-efficient features can make family bathrooms significantly easier to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Queen Creek" />

        {/* SECTION 8: COST GUIDE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Queen Creek Bathroom Remodel Cost Guide
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Bathroom remodeling costs depend heavily on the existing layout, selected materials, plumbing requirements, shower configuration, and overall project scope.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {costTypes.map((c) => (
                <div key={c.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
                  </div>
                  <span className="text-primary font-semibold text-sm pt-3 border-t border-border/60">{c.est}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center mb-8">
              For an accurate price, an in-home evaluation is preferable to using a generic square-foot estimate because every existing bathroom has different conditions.
            </p>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Queen Creek Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Queen Creek Remodeling Process
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

        {/* PORTFOLIO SHOWCASE PREVIEW */}
        <GalleryPreview />

        {/* SECTION 10: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Queen Creek, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We provide bathroom remodeling services throughout Queen Creek and nearby residential areas, including:
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
              {queenCreekAreasList.map((area) => (
                <span key={area} className="bg-background px-3 py-1 rounded-full border border-border font-medium text-foreground">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-xs mb-8">
              {queenCreekZipCodes.map((zip) => (
                <span key={zip} className="bg-background/60 px-2.5 py-0.5 rounded text-muted-foreground">
                  {zip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Gilbert AZ →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Mesa AZ →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ SECTION */}
        <ServiceFAQ faqs={queenCreekFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Queen Creek Bathroom?"
          description="Upgrade your Queen Creek home with a bathroom designed around your family's needs, lifestyle, and existing space. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
