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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Ahwatukee AZ | Custom Bathroom Remodels",
  description:
    "Bathroom remodeling in Ahwatukee, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling Ahwatukee AZ",
    "bathroom remodel Ahwatukee AZ",
    "bathroom renovation Ahwatukee",
    "Ahwatukee bathroom remodeling",
    "walk-in shower remodeling Ahwatukee",
    "tub-to-shower conversion Ahwatukee",
    "primary bathroom remodel Ahwatukee",
    "guest bathroom remodel Ahwatukee",
    "small bathroom remodeling Ahwatukee",
    "accessible bathroom remodeling Ahwatukee",
    "bathroom tile installation Ahwatukee",
    "bathroom flooring Ahwatukee"
  ],
  openGraph: {
    title: "Bathroom Remodeling Ahwatukee AZ | Custom Bathroom Remodels",
    description:
      "Bathroom remodeling in Ahwatukee, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-ahwatukee.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Ahwatukee Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Ahwatukee AZ | Custom Bathroom Remodels",
    description:
      "Bathroom remodeling in Ahwatukee, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-ahwatukee.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`,
  },
};

const ahwatukeeFaqs = [
  {
    question: "How long does a bathroom remodel take in Ahwatukee, AZ?",
    answer:
      "The timeline depends on the size and scope of the project. A focused shower renovation generally requires less work than a complete bathroom renovation involving multiple trades.",
  },
  {
    question: "Do you need a permit for bathroom remodeling in Ahwatukee?",
    answer:
      "Permit requirements depend on the scope of work. Plumbing, electrical, structural, and other substantial modifications may require permits and inspections.",
  },
  {
    question: "How much does a bathroom remodel cost in Ahwatukee, AZ?",
    answer:
      "The cost depends on the bathroom size, demolition, plumbing changes, tile, fixtures, vanity, glass, and other selections. An in-home evaluation provides a more accurate project estimate.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A complete bathroom renovation isn't always necessary. We can focus the project on the shower when that is the best solution for the space.",
  },
  {
    question: "Do you install curbless walk-in showers?",
    answer:
      "Yes. Low-threshold and curbless shower designs can be considered when the existing structure and drainage conditions allow.",
  },
  {
    question: "Do you serve the Ahwatukee Foothills?",
    answer:
      "Yes. We serve homeowners throughout The Foothills and surrounding Ahwatukee communities, including Club West, Mountain Park Ranch, Lakewood, Canyon Estates, and Pecos Vistas.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and accessible walk-in shower.",
    detail:
      "Options include low-threshold entry, custom tile walls, frameless glass, built-in niches, shower benches, handheld fixtures, rainfall heads, and slip-resistant flooring.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a walk-in shower can make better use of the available bathroom space.",
    detail:
      "Our process includes tub removal, substrate preparation, waterproofing, tile installation, shower fixtures, glass enclosure installation, and finishing.",
    cta: "Learn More →",
  },
  {
    title: "Complete Primary Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "A complete primary bathroom renovation can combine several improvements into one coordinated project.",
    detail:
      "Includes shower replacement, tub removal, vanity replacement, quartz countertops, flooring, lighting, fixtures, custom storage, and glass enclosures.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "New tile can dramatically change the appearance and maintenance requirements of a bathroom.",
    detail:
      "We install porcelain and ceramic tile for shower walls, shower floors, bathroom floors, vanity backsplashes, accent walls, and niches.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Vanity & Countertop Upgrades",
    href: "/cabinet-countertop-installation/",
    description:
      "Replace an outdated vanity with a configuration that provides better storage and functionality.",
    detail:
      "Options include single or double sinks, custom or semi-custom cabinetry, quartz countertops, modern hardware, and upgraded mirrors.",
    cta: "Learn More →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "For homeowners who want a safer and easier-to-use bathroom, we incorporate features designed for comfort.",
    detail:
      "Features include low-threshold showers, handheld fixtures, shower seating, grab-bar preparation, and improved circulation.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Phone Consultation",
    body: "Tell us about your bathroom, the problems you want to solve, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We evaluate the existing space, take measurements, discuss layout options, and review your project requirements.",
  },
  {
    step: "3",
    title: "Written Project Proposal",
    body: "We prepare a project proposal based on the agreed scope of work.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Select tile, cabinetry, countertops, fixtures, glass, lighting, and other finishes.",
  },
  {
    step: "5",
    title: "Construction",
    body: "The project progresses through demolition, preparation, plumbing and electrical coordination, waterproofing, installation, and finishing.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed renovation with you and address any remaining project details.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Custom Remodeling Plans",
    body: "Every bathroom has different dimensions, plumbing locations, and storage goals. We plan the renovation around your space.",
  },
  {
    title: "Detailed Written Proposals",
    body: "You receive a written project scope before construction begins so you understand what work is included.",
  },
  {
    title: "Local Service",
    body: "Our service area includes Ahwatukee communities such as The Foothills, Club West, Mountain Park Ranch, Lakewood, Canyon Estates, and Pecos Vistas.",
  },
  {
    title: "Durable Material Options",
    body: "We help homeowners select appropriate tile, grout, countertops, fixtures, glass, and other materials based on the needs of the space.",
  },
  {
    title: "Project Coordination",
    body: "We coordinate the major stages of the renovation from initial planning and preparation through installation and final walkthrough.",
  },
  {
    title: "Clean Construction",
    body: "We take reasonable measures to protect surrounding areas and maintain an organized worksite throughout the project.",
  },
];

const ahwatukeeCommunities = [
  {
    name: "The Foothills",
    desc: "Homes in The Foothills can benefit from spacious shower layouts, upgraded tile, custom vanities, improved storage, and modern fixtures. We can design around the existing footprint or explore layout improvements where appropriate.",
  },
  {
    name: "Club West",
    desc: "For Club West homes, popular bathroom updates include tub-to-shower conversions, frameless glass shower enclosures, porcelain tile, double vanities, and improved lighting.",
  },
  {
    name: "Mountain Park Ranch",
    desc: "Established family homes in Mountain Park Ranch may benefit from replacing dated bathroom finishes, improving storage, updating showers, or creating a more functional primary bathroom layout.",
  },
  {
    name: "Lakewood",
    desc: "Homeowners in Lakewood can choose focused improvements such as shower renovations and vanity replacements or combine multiple upgrades into a complete bathroom renovation.",
  },
  {
    name: "Canyon Estates & Pecos Vistas",
    desc: "We also serve surrounding Ahwatukee communities with custom shower installations, tile work, fixture upgrades, and complete bathroom remodeling.",
  },
];

const costTypes = [
  {
    title: "Guest Bathroom Update",
    desc: "Vanity, fixtures, paint, lighting, and other focused improvements.",
    est: "Free Custom Estimate",
  },
  {
    title: "Full Guest Bathroom Remodel",
    desc: "Shower or tub work, tile, flooring, vanity, fixtures, and other finishes.",
    est: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "Tub removal, shower preparation, waterproofing, tile, fixtures, and enclosure options.",
    est: "Free Custom Estimate",
  },
  {
    title: "Primary Bathroom Remodel",
    desc: "A complete renovation involving the shower, vanity, flooring, lighting, fixtures, and other selected improvements.",
    est: "Free Custom Estimate",
  },
];

const benefitsList = [
  {
    title: "Custom Primary Bathroom Renovations",
    desc: "Create a bathroom designed around your daily routine, storage requirements, and preferred finishes.",
  },
  {
    title: "Tub-to-Shower Conversions",
    desc: "Replace an underused tub with a more practical shower configuration.",
  },
  {
    title: "Walk-In Shower Systems",
    desc: "Build an open shower with tile, glass, niches, seating, and selected fixtures.",
  },
  {
    title: "Tile & Surface Installation",
    desc: "Update floors, shower walls, backsplashes, and other bathroom surfaces.",
  },
  {
    title: "Accessible Bathroom Features",
    desc: "Incorporate features that can make the bathroom easier and safer to use.",
  },
  {
    title: "Complete Bathroom Renovations",
    desc: "Coordinate multiple bathroom improvements as part of one project.",
  },
];

const ahwatukeeAreasList = [
  "The Foothills", "Mountain Park Ranch", "Club West", "Lakewood", "Canyon Estates", "Pecos Vistas", "Desert Foothills"
];

const ahwatukeeZipCodes = ["85044", "85045", "85048"];

export default function AhwatukeeBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Ahwatukee AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-ahwatukee-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Ahwatukee, Arizona"
        serviceDescription="Bathroom remodeling in Ahwatukee, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`}
      />
      <FAQSchema faqs={ahwatukeeFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Ahwatukee AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Local Bathroom Remodeling in Ahwatukee, AZ"
          subtitle="Custom Bathroom Remodeling for Ahwatukee Homes"
          description="Upgrade an outdated bathroom with a design that fits your home, lifestyle, and everyday needs. ARZ Home Remodeling provides custom bathroom renovations in Ahwatukee, AZ, including walk-in showers, tub-to-shower conversions, tile installation, vanity upgrades, and complete bathroom remodels."
          image="/images/bathroom-remodeling-ahwatukee.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Ahwatukee", url: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations Designed for Ahwatukee Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ahwatukee offers a mix of established neighborhoods, family homes, and properties throughout the Foothills. As these homes age or homeowners&apos; needs change, bathrooms can become outdated, difficult to maintain, or inefficiently arranged.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Common improvements include replacing older tub and shower combinations, increasing shower space, updating worn tile and flooring, adding storage, and replacing outdated vanities and fixtures.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At <strong className="font-semibold text-foreground">ARZ Home Remodeling</strong>, we tailor each renovation to the existing space rather than relying on a one-size-fits-all design. Whether you&apos;re updating a guest bathroom, converting a rarely used tub, or planning a complete primary bathroom renovation, we coordinate the remodeling work around your goals and the home&apos;s existing conditions.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our services include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Walk-in shower installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tub-to-shower conversions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Primary bathroom remodeling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Guest bathroom renovations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom tile installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Vanity and countertop upgrades</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Accessible bathroom improvements</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower and bath fixture upgrades</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for a Free In-Home Consultation — {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOCAL NEIGHBORHOODS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Throughout Ahwatukee
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Ahwatukee includes several distinct residential communities, each with different home layouts and design preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ahwatukeeCommunities.map((comm) => (
                <div key={comm.name} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{comm.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{comm.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Ahwatukee Bathroom Remodeling Services
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

        {/* SECTION 6: LOCAL DESIGN & PLANNING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Ahwatukee Bathroom Remodeling & Local Design
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A successful bathroom renovation should balance appearance with everyday functionality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For example, a primary bathroom with a large unused tub may benefit from replacing that footprint with a spacious walk-in shower and additional storage.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A smaller guest bathroom may require a different approach, such as a compact vanity, efficient shower configuration, lighter tile, and improved lighting.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We consider the existing plumbing, room dimensions, storage needs, ventilation, lighting, and desired finishes when planning the renovation.
            </p>
          </div>
        </section>

        {/* SECTION 7: WATERPROOFING & DURABLE MATERIALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Durable Materials
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              The finished tile is only one part of a properly constructed shower. The underlying assembly also needs appropriate preparation and waterproofing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For applicable tiled shower projects, we use established waterproofing systems such as <strong className="font-semibold text-foreground">Schluter-KERDI</strong> according to the manufacturer&apos;s installation requirements.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our shower projects can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproof shower walls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly prepared shower floors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Built-in seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Linear or standard drains</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Porcelain wall tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-resistant shower flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Frameless glass</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Handheld shower fixtures</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Material selection depends on the design, existing construction, and requirements of the individual project.
            </p>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Ahwatukee Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 9: MATERIALS FOR ARIZONA HOMES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Materials for Arizona Homes
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Bathrooms in the Phoenix area are exposed to frequent water use and mineral deposits. Selecting appropriate materials can make ongoing maintenance easier.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Epoxy Grout Options</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Where appropriate, epoxy grout can provide a less porous alternative to traditional cement grout and can help resist staining.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Large-Format Porcelain Tile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Larger tiles can reduce the number of grout joints while providing a clean, contemporary appearance.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Glass Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Optional glass treatments can make shower doors easier to maintain and help reduce water spotting.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Quartz Vanity Tops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quartz provides a durable, low-maintenance countertop surface and is available in many colors and patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Ahwatukee" />

        {/* SECTION 10: COST GUIDE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Ahwatukee Bathroom Remodel Cost Guide
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                There is no single price for a bathroom renovation because project costs depend on the size, condition, materials, and scope of work.
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

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request an Ahwatukee Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Ahwatukee Remodeling Process
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

        {/* SECTION 12: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Ahwatukee, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout:
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
              {ahwatukeeAreasList.map((area) => (
                <span key={area} className="bg-background px-3 py-1 rounded-full border border-border font-medium text-foreground">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-xs mb-8">
              {ahwatukeeZipCodes.map((zip) => (
                <span key={zip} className="bg-background/60 px-2.5 py-0.5 rounded text-muted-foreground">
                  {zip}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve nearby East Valley communities.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Gilbert AZ →
              </Link>
              <Link href="/bathroom-remodeling-tempe-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Tempe AZ →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: BENEFITS SUMMARY */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Benefits</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsList.map((b) => (
                <div key={b.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14: FAQ SECTION */}
        <ServiceFAQ faqs={ahwatukeeFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Ahwatukee Bathroom?"
          description="Upgrade an outdated bathroom with a design that fits your home, lifestyle, and everyday needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
