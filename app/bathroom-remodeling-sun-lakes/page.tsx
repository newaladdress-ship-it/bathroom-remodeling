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
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Sun Lakes AZ | Walk-In Showers",
  description:
    "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub conversions, accessible upgrades, tile, vanities, and safer bathrooms.",
  keywords: [
    "bathroom remodeling Sun Lakes AZ",
    "bathroom remodel Sun Lakes",
    "walk-in shower Sun Lakes",
    "tub-to-shower conversion Sun Lakes",
    "accessible bathroom remodeling Sun Lakes",
    "bathroom tile installation Sun Lakes",
    "bathroom vanity Sun Lakes",
    "bathroom remodel cost Sun Lakes"
  ],
  openGraph: {
    title: "Bathroom Remodeling Sun Lakes AZ | Walk-In Showers",
    description:
      "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub conversions, accessible upgrades, tile, vanities, and safer bathrooms.",
    url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Sun Lakes AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Sun Lakes AZ | Walk-In Showers",
    description:
      "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub conversions, accessible upgrades, tile, vanities, and safer bathrooms.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
  },
};

const sunLakesFaqs = [
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower designed around the available space and your preferred features.",
  },
  {
    question: "Can you make my bathroom easier to use without remodeling everything?",
    answer:
      "In many cases, yes. Depending on the existing bathroom, targeted improvements such as a shower conversion, grab bars, better lighting, a new vanity, or improved flooring may address specific concerns without a complete renovation.",
  },
  {
    question: "Can you build a curbless shower in Sun Lakes?",
    answer:
      "A curbless shower may be possible depending on the existing floor structure, drainage, available space, and project requirements. The bathroom should be evaluated before determining the appropriate design.",
  },
  {
    question: "Can you add a shower seat?",
    answer:
      "Yes. Shower seating can be incorporated into the design when the available space and shower layout support it.",
  },
  {
    question: "What communities in Sun Lakes do you serve?",
    answer:
      "We serve homeowners throughout Sun Lakes, including areas such as Oakwood, Cottonwood, IronOaks, Palo Verde, and Sun Lakes Country Club.",
  },
  {
    question: "How much does an accessible bathroom remodel cost?",
    answer:
      "The cost depends on the existing bathroom and the accessibility improvements required. A focused shower conversion will have a different scope from a complete accessible bathroom renovation.",
  },
  {
    question: "Do I need a permit for a bathroom remodel in Sun Lakes?",
    answer:
      "Permit requirements depend on the specific work being performed. Plumbing, electrical, structural, and other modifications may have different requirements, so the project scope should be reviewed before construction.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more accessible bathing area.",
    detail:
      "Options can include low-threshold or curbless entries, tile walls, built-in niches, seating, handheld showerheads, and glass enclosures.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Turn an underused bathtub into a practical walk-in shower.",
    detail:
      "We work with the existing bathroom footprint while considering shower size, entry height, storage, seating, fixtures, and finishes.",
    cta: "Learn More →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "Improve bathroom usability with features designed around long-term comfort and safety.",
    detail:
      "Includes features such as easier shower entry, shower seating, grab bars, accessible controls, improved clearances, and slip-conscious materials.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Update shower walls, shower floors, bathroom floors, backsplashes, and other surfaces.",
    detail:
      "Tile is selected and installed specifically for the intended application and maintenance preferences.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "Replace an outdated vanity with a configuration that provides better storage and counter space.",
    detail:
      "Options include single or double vanities, quartz countertops, accessible configurations, and additional storage.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    body: "Tell us what you want to change, what isn't working, and what you want your remodeled bathroom to accomplish.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We review the existing bathroom, measurements, plumbing, surfaces, storage, shower or tub configuration, and other relevant conditions.",
  },
  {
    step: "3",
    title: "Project Scope",
    body: "We determine which improvements make sense for your bathroom and discuss available design options.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "Choose tile, flooring, vanity, countertop, fixtures, glass, colors, and other finishes.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "The project moves through demolition, preparation, plumbing or electrical work where needed, waterproofing, tile installation, cabinetry, fixtures, and finishing.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the finished bathroom with you and address remaining project details.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Practical Design",
    body: "We focus on how you use the bathroom instead of simply replacing old finishes with new ones.",
  },
  {
    title: "Clear Project Scope",
    body: "Before construction begins, we discuss the proposed work, materials, layout, and features included in the project.",
  },
  {
    title: "Accessibility Options",
    body: "If easier access is important, accessibility features can be incorporated into the design from the start.",
  },
  {
    title: "Material Guidance",
    body: "We help compare tile, flooring, vanities, countertops, fixtures, glass, and other finishes according to appearance and maintenance requirements.",
  },
  {
    title: "Attention to Waterproofing",
    body: "For tiled shower projects, appropriate waterproofing and moisture-management details are considered before finished tile is installed.",
  },
  {
    title: "Clean, Organized Work",
    body: "We plan the remodeling process to keep the work area organized and minimize disruption to your home.",
  },
];

const sunLakesProblems = [
  {
    title: "High Tub Walls",
    desc: "Stepping over a tall bathtub wall can become inconvenient or uncomfortable.",
    sol: "Replace the tub with a low-threshold or curbless walk-in shower.",
  },
  {
    title: "Slippery Bathroom Floors",
    desc: "Smooth surfaces can become difficult to manage when wet.",
    sol: "Select flooring and shower surfaces with appropriate slip-resistance for the space.",
  },
  {
    title: "Limited Shower Seating",
    desc: "Standing for an extended period isn't comfortable for everyone.",
    sol: "Add a built-in or appropriately designed shower seat during the renovation.",
  },
  {
    title: "Hard-to-Reach Controls",
    desc: "Shower controls or accessories may not be positioned where they are easiest to use.",
    sol: "Plan the shower layout around comfortable access to controls, handheld showerheads, niches, and other accessories.",
  },
  {
    title: "Limited Storage",
    desc: "Older bathrooms may lack convenient places for towels, toiletries, and everyday items.",
    sol: "Add vanity storage, recessed niches, shelving, or other storage features where the layout allows.",
  },
  {
    title: "Outdated Bathroom Finishes",
    desc: "Older tile, countertops, fixtures, and cabinetry can make the room feel dated.",
    sol: "Combine targeted finish updates or complete the room with new materials selected around your preferred style and maintenance needs.",
  },
];

const communities = [
  {
    name: "Oakwood",
    desc: "Bathroom updates can focus on easier shower access, improved storage, updated tile, and low-maintenance finishes.",
  },
  {
    name: "Cottonwood",
    desc: "Homeowners may choose focused shower renovations, tub conversions, vanity replacements, or complete bathroom updates.",
  },
  {
    name: "IronOaks",
    desc: "A bathroom renovation can combine accessibility improvements with modern finishes, better lighting, and updated fixtures.",
  },
  {
    name: "Palo Verde",
    desc: "Projects can range from replacing an outdated tub or shower to renovating the entire bathroom.",
  },
  {
    name: "Sun Lakes Country Club",
    desc: "We can tailor the project around the home's existing footprint, whether the goal is improved accessibility, updated finishes, or a more functional layout.",
  },
];

export default function SunLakesBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Sun Lakes",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-sun-lakes/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Sun Lakes"
        serviceDescription="Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub conversions, accessible upgrades, tile, vanities, and safer bathrooms."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <FAQSchema faqs={sunLakesFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Sun Lakes"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Sun Lakes, AZ"
          subtitle="Walk-In Showers & Safer Bathroom Updates"
          description="Make your bathroom easier and safer to use with a renovation designed around your needs. We remodel showers, tubs, vanities, tile, flooring, and complete bathrooms throughout Sun Lakes."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Sun Lakes", url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Sun Lakes Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom renovation in Sun Lakes can be about much more than changing the appearance of the room. For many homeowners, the priority is making the bathroom easier to enter, easier to move around in, and simpler to maintain.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An existing bathtub may be difficult to step over. A slippery shower floor can be uncomfortable to use. Limited storage or poor lighting can make everyday routines frustrating. In other bathrooms, the fixtures and finishes simply need an update after years of use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              ARZ Home Remodeling helps homeowners address these problems with practical bathroom improvements designed around the existing space.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Common projects include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low-threshold and walk-in showers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tub-to-shower conversions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Curbless shower designs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grab-bar preparation and installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-resistant flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom vanity replacement</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower and bathroom tile installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improved lighting and fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Complete bathroom renovations</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The right solution depends on the homeowner, the existing bathroom, and how the space needs to function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Request a Sun Lakes Bathroom Remodeling Consultation
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
              Bathroom Remodeling in Sun Lakes, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sun Lakes is an established residential community with several neighborhoods and communities, including <strong className="font-semibold text-foreground">Oakwood, Cottonwood, IronOaks, Palo Verde, and Sun Lakes Country Club</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Because many homes in the area have been lived in for years, bathroom remodeling projects can range from simple updates to complete renovations. Some homeowners want to replace an older tub, while others are looking for a more accessible shower or a bathroom layout that better suits their current needs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We design bathroom improvements around the existing conditions of the home rather than assuming every property requires the same solution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For example, a bathroom with a large unused tub may be a good candidate for a <strong className="font-semibold text-foreground">tub-to-shower conversion</strong>. A bathroom that already has a suitable layout may only need a new shower, vanity, flooring, and fixtures.
            </p>
          </div>
        </section>

        {/* SECTION 5: PROBLEM → SOLUTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Common Bathroom Problems We Solve in Sun Lakes
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sunLakesProblems.map((item) => (
                <div key={item.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-border/60">
                    <span className="text-xs font-bold uppercase text-primary tracking-wider">Possible solution:</span>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-1">{item.sol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: ACCESSIBILITY SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Accessible & Aging-in-Place Bathroom Options
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              You don&apos;t have to completely redesign your bathroom to make it easier to use.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Depending on the existing layout, accessibility-focused improvements can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low-threshold shower entries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Curbless shower designs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Handheld showerheads</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Strategically positioned grab bars</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Wider clearances where practical</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-reach shower controls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-resistant flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improved bathroom lighting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Accessible vanity configurations</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
              If you&apos;re planning for long-term use, these features can be incorporated into the design from the beginning rather than added as an afterthought.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              For projects requiring specific accessibility standards, the appropriate dimensions and requirements should be reviewed according to the actual use of the bathroom and applicable building requirements.
            </p>

            <div className="text-center">
              <Link href="/handicap-accessible-bathroom/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Accessible Bathroom Options →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: LOCAL COMMUNITIES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Neighborhoods</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Updates Throughout Sun Lakes Communities
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Different homes within Sun Lakes can have different layouts, ages, and remodeling requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((comm) => (
                <div key={comm.name} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{comm.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{comm.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Bathroom Remodeling Services in Sun Lakes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((svc) => (
                <div key={svc.title} className="bg-background rounded-2xl p-8 border border-border flex flex-col justify-between shadow-sm hover:border-primary/50 transition-all">
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

        {/* SECTION 9: SHOWER DESIGN SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Designing a Safer Walk-In Shower
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              A walk-in shower can be designed around how you actually use the bathroom.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Depending on the available space, the shower may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low or zero-threshold entry</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Built-in shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Handheld showerhead</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Adjustable shower controls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Recessed storage niche</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-conscious shower flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Frameless or semi-frameless glass</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Large-format or smaller-format tile</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Linear or traditional drain configurations</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The goal isn&apos;t to add features simply because they are available. We help determine which features make sense for your bathroom, your daily routine, and your preferred level of accessibility.
            </p>
          </div>
        </section>

        {/* SECTION 10: WATERPROOFING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              When a tiled shower is remodeled, the tile itself is only the visible portion of the installation. Proper preparation and waterproofing behind the tile are important for managing moisture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For appropriate shower projects, we can use systems such as <strong className="font-semibold text-foreground">Schluter-KERDI</strong> as part of the waterproofing assembly.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our shower preparation can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproof shower walls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproof shower floors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly treated corners and transitions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Sealed penetrations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate shower drainage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly prepared surfaces before tile installation</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The objective is to create a shower assembly where water is directed toward the drainage system rather than allowed to migrate into surrounding construction.
            </p>
          </div>
        </section>

        {/* SECTION 11: LOW-MAINTENANCE SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Low-Maintenance Bathroom Design for Sun Lakes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                A bathroom should be comfortable to use without creating unnecessary cleaning work. When selecting materials, we consider how the surfaces will perform during everyday use.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Easier-to-Clean Tile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Porcelain and other suitable tile options can provide durable surfaces while reducing the maintenance associated with some highly porous materials.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Grout Selection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The right grout depends on the application, color, tile type, and maintenance expectations. We can help homeowners compare available options.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Glass</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Glass treatments can be considered when the homeowner wants to make routine water-spot cleaning easier.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Quartz Vanity Tops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quartz can provide a durable, low-maintenance countertop surface for many bathroom applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Sun Lakes" />

        {/* SECTION 12: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                A Bathroom Remodeling Approach Built Around Your Needs
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

        {/* SECTION 13: COST SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does Bathroom Remodeling Cost in Sun Lakes?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                There isn&apos;t one price that applies to every bathroom in Sun Lakes. A simple tub-to-shower conversion has a different scope from a complete accessible bathroom renovation.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Your total project cost can be affected by:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom size</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Existing shower or tub</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Demolition requirements</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Plumbing changes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Electrical work</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower configuration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile selection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Vanity and countertop</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower glass</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Accessibility features</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Flooring & fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom storage & layout modifications</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              We evaluate the existing space and your goals before developing the project scope and estimate.
            </p>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Sun Lakes Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 14: PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Sun Lakes Bathroom Remodeling Process
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

        {/* SECTION 15: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Near Sun Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Sun Lakes and nearby communities, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8">
              Sun Lakes · Oakwood · Cottonwood · IronOaks · Palo Verde · Sun Lakes Country Club · Chandler · Ocotillo · Fulton Ranch · Layton Lakes
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-ocotillo/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Ocotillo →
              </Link>
              <Link href="/bathroom-remodeling-fulton-ranch/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Fulton Ranch →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 16: FAQ */}
        <ServiceFAQ faqs={sunLakesFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Sun Lakes Bathroom?"
          description="Make your bathroom easier and safer to use with a renovation designed around your needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
