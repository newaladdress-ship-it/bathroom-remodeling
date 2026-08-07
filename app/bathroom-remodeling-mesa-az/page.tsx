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
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Mesa AZ | Custom Bathroom Remodels",
  description:
    "Bathroom remodeling in Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling Mesa AZ",
    "bathroom remodel Mesa AZ",
    "bathroom renovation Mesa",
    "Mesa bathroom remodeling",
    "walk-in shower remodeling Mesa",
    "tub-to-shower conversion Mesa",
    "primary bathroom remodel Mesa",
    "guest bathroom remodel Mesa",
    "small bathroom remodeling Mesa",
    "accessible bathroom remodeling Mesa",
    "bathroom tile installation Mesa",
    "bathroom flooring Mesa"
  ],
  openGraph: {
    title: "Bathroom Remodeling Mesa AZ | Custom Bathroom Remodels",
    description:
      "Bathroom remodeling in Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-mesa-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-mesa.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Mesa Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Mesa AZ | Custom Bathroom Remodels",
    description:
      "Bathroom remodeling in Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-mesa.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-mesa-az/`,
  },
};

const mesaFaqs = [
  {
    question: "Do you need a permit for a bathroom remodel in Mesa, AZ?",
    answer:
      "Permit requirements depend on the scope of the renovation. Plumbing, electrical, structural, and other substantial modifications may require permits and inspections. We can help determine the requirements for your project.",
  },
  {
    question: "How much does a tub-to-shower conversion cost in Mesa?",
    answer:
      "The price depends on the existing tub, shower dimensions, plumbing requirements, tile selection, waterproofing, glass, fixtures, and other project details. A consultation is the best way to establish an accurate project price.",
  },
  {
    question: "How long does a bathroom remodel take in Mesa?",
    answer:
      "The timeline depends on the size and complexity of the project. A focused shower renovation will generally require less time than a complete bathroom gut remodel involving multiple trades.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not necessarily require replacing the entire room. We can focus the project on the shower area when that best fits your goals and budget.",
  },
  {
    question: "Do you install curbless walk-in showers?",
    answer:
      "Yes. Where the existing structure and drainage conditions allow, we can design low-threshold or curbless shower configurations.",
  },
  {
    question: "Do you serve Dobson Ranch and East Mesa?",
    answer:
      "Yes. Our Mesa service area includes Dobson Ranch, Las Sendas, Eastmark, Red Mountain Ranch, Alta Mesa, Augusta Ranch, and surrounding areas.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and functional walk-in shower.",
    detail:
      "Options include custom tile walls, frameless glass enclosures, built-in niches, shower benches, handheld fixtures, and low-threshold entries.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "A tub-to-shower conversion can make better use of an underused bathroom footprint.",
    detail:
      "We remove the existing tub, prepare and waterproof the shower area, install the selected tile and fixtures, and finish the space with a custom enclosure.",
    cta: "Learn More →",
  },
  {
    title: "Complete Primary Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Upgrade multiple elements of your primary bathroom through one coordinated renovation.",
    detail:
      "Depending on the project, this can include the shower, vanity, flooring, lighting, plumbing fixtures, storage, and other finishes.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Refresh your bathroom with porcelain, ceramic, or other suitable tile materials.",
    detail:
      "We install wall tile, shower tile, floor tile, and decorative features according to the project's layout and design.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Vanity & Countertop Upgrades",
    href: "/cabinet-countertop-installation/",
    description:
      "Improve storage and functionality with a new vanity and countertop.",
    detail:
      "Options can include single or double-sink configurations, quartz surfaces, modern cabinetry, and upgraded hardware.",
    cta: "Learn More →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "For homeowners who want improved accessibility, we can incorporate features designed around comfort and safety.",
    detail:
      "Includes low-threshold showers, handheld shower fixtures, shower seating, grab-bar preparation, and easier-to-navigate layouts.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Phone Consultation",
    body: "Tell us about your bathroom, what you want to change, and the type of renovation you have in mind.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We evaluate the existing bathroom, take measurements, discuss layout options, and review your project requirements.",
  },
  {
    step: "3",
    title: "Written Project Proposal",
    body: "You receive a detailed proposal based on the agreed scope of work.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Choose tile, cabinetry, countertops, fixtures, glass, lighting, and other finishes for your renovation.",
  },
  {
    step: "5",
    title: "Construction",
    body: "The project moves through demolition, preparation, plumbing and electrical coordination, waterproofing, installation, and finishing.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed work with you and address any remaining project details.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Local Mesa Remodeling Experience",
    body: "Our service area includes established and newer Mesa communities, allowing us to work with a variety of home layouts.",
  },
  {
    title: "Detailed Written Proposals",
    body: "Before construction begins, we provide a written project proposal outlining the planned scope so you understand what is included.",
  },
  {
    title: "Dedicated Project Oversight",
    body: "Your project is coordinated throughout the remodeling process, from initial planning through installation and final walkthrough.",
  },
  {
    title: "Durable Materials",
    body: "We help homeowners select materials suited to bathroom environments, including porcelain tile, quartz surfaces, and quality fixtures.",
  },
  {
    title: "Custom Design",
    body: "Every bathroom has different dimensions and priorities. We design the project around your available space.",
  },
  {
    title: "Clean, Organized Construction",
    body: "We take steps to protect surrounding areas and maintain an organized work environment throughout the renovation.",
  },
];

const mesaNeighborhoods = [
  {
    name: "Dobson Ranch & Established Mesa",
    desc: "Older homes may have dated bathroom layouts, aging fixtures, smaller shower areas, or worn tile surfaces. We can update these spaces while working within the home's existing structure and plumbing where practical.",
  },
  {
    name: "Las Sendas & Red Mountain Ranch",
    desc: "Homes in these communities often feature larger layouts and more contemporary finishes. Popular upgrades include spacious walk-in showers, large-format porcelain tile, double vanities, frameless glass, and improved storage.",
  },
  {
    name: "Eastmark & Cadence",
    desc: "Newer homes can still benefit from personalized upgrades. Homeowners may choose to replace builder-grade finishes with upgraded tile, custom vanities, quartz countertops, modern lighting, and more functional shower layouts.",
  },
];

const costTypes = [
  {
    title: "Guest Bathroom Update",
    desc: "A focused update may include a vanity, fixtures, paint, lighting, and other cosmetic improvements.",
    est: "Free Custom Estimate",
  },
  {
    title: "Full Guest Bathroom Remodel",
    desc: "A larger renovation may include shower or tub work, tile, flooring, vanity, fixtures, and lighting.",
    est: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "Includes tub removal, shower preparation, waterproofing, tile, fixtures, and enclosure options.",
    est: "Free Custom Estimate",
  },
  {
    title: "Primary Bathroom Remodel",
    desc: "A complete renovation can combine shower construction, vanity replacement, flooring, lighting, fixtures, and other improvements.",
    est: "Free Custom Estimate",
  },
];

const mesaAreasList = [
  "Dobson Ranch", "Las Sendas", "Eastmark", "Red Mountain Ranch", "Alta Mesa", "Augusta Ranch", "Mulberry", "Falcon Field", "Central Mesa", "East Mesa", "West Mesa"
];

const mesaZipCodes = ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85212", "85213"];

export default function MesaBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Mesa AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-mesa-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Mesa, Arizona"
        serviceDescription="Bathroom remodeling in Mesa, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-mesa-az/`}
      />
      <FAQSchema faqs={mesaFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Mesa AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-mesa-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Expert Bathroom Remodeling in Mesa, AZ"
          subtitle="Custom Bathroom Remodeling for Mesa Homes"
          description="Create a bathroom that fits your home, lifestyle, and everyday needs. ARZ Home Remodeling provides custom bathroom renovations in Mesa, AZ, including walk-in showers, tub-to-shower conversions, tile installation, vanity upgrades, and complete bathroom remodels."
          image="/images/bathroom-remodeling-mesa.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Mesa", url: `${siteConfig.url}/bathroom-remodeling-mesa-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Designed Around Your Mesa Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mesa has a wide range of homes, from established properties in Dobson Ranch and central Mesa to newer communities such as Eastmark and Cadence. As homes age or families&apos; needs change, bathrooms often become one of the first areas homeowners want to improve.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Outdated tubs, worn flooring, inefficient layouts, aging fixtures, and limited storage can make an otherwise comfortable home feel dated. A well-planned renovation can improve the appearance of the room while making it easier and more comfortable to use every day.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At <strong className="font-semibold text-foreground">ARZ Home Remodeling</strong>, we provide complete bathroom remodeling services tailored to the existing layout and goals of each Mesa home. Whether you are replacing a dated hall bathroom, converting a rarely used tub into a walk-in shower, or creating a larger primary bathroom, we coordinate the project from planning through installation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach focuses on practical layouts, durable materials, careful waterproofing, and clean finishing details.
            </p>

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

        {/* SECTION 4: LOCAL AREAS & NEIGHBORHOODS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Local Bathroom Remodeling Throughout Mesa
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Mesa covers a large and diverse area, so remodeling requirements can vary depending on the home&apos;s age, neighborhood, existing plumbing, and planned improvements. We work with homeowners throughout communities such as Dobson Ranch, Las Sendas, Eastmark, Red Mountain Ranch, Alta Mesa, Augusta Ranch, and surrounding Mesa neighborhoods.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mesaNeighborhoods.map((nh) => (
                <div key={nh.name} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{nh.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{nh.desc}</p>
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
                Mesa Bathroom Remodeling Services
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

        {/* SECTION 6: PROJECTS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-8">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Showcase</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Mesa Bathroom Remodeling Projects
              </h2>
              <h3 className="text-lg font-medium text-muted-foreground mt-2">
                From Outdated Bathrooms to Functional Modern Spaces
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom renovation can range from a focused shower upgrade to a complete gut remodel. The right scope depends on the home&apos;s existing condition, layout, plumbing, and your goals for the space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For example, a typical primary bathroom transformation may replace a large unused tub with a spacious walk-in shower, update the shower and bathroom flooring, install a double vanity, and improve lighting and storage.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For homeowners who want a more substantial transformation, we can coordinate demolition, plumbing adjustments, waterproofing, tile installation, cabinetry, countertops, fixtures, glass, and finishing work as part of one remodeling project.
            </p>
          </div>
        </section>

        {/* SECTION 7: WATERPROOFING & SHOWER CONSTRUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Waterproofing & Shower Construction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A beautiful tiled shower also needs a properly prepared waterproofing system behind the finished surfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For applicable tiled shower projects, we use established waterproofing methods and products such as <strong className="font-semibold text-foreground">Schluter-KERDI systems</strong> to help protect the shower assembly from moisture intrusion.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Our shower installations can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofed shower walls and floors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly prepared shower substrates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Built-in seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Linear or traditional drains</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Large-format porcelain tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-resistant shower flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Frameless glass enclosures</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Handheld and overhead shower fixtures</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The exact materials and construction method are selected according to the project&apos;s design, substrate, and installation requirements.
            </p>
          </div>
        </section>

        {/* SECTION 8: KITCHEN & HOME REMODELING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Beyond Bathrooms</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Mesa Kitchen & Home Remodeling
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Although bathroom renovations are a major part of our work, homeowners sometimes want to coordinate several interior improvements during the same project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-2xl border border-border flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center gap-2 justify-center mb-4 text-primary">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Kitchen Remodeling</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Upgrade an outdated kitchen with new cabinetry, countertops, backsplashes, lighting, storage, and other improvements designed around the existing space.
                  </p>
                </div>
                <Link href="/kitchen-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1.5">
                  Explore Kitchen Remodeling →
                </Link>
              </div>

              <div className="bg-background p-8 rounded-2xl border border-border flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center gap-2 justify-center mb-4 text-primary">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Home Renovation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    For larger interior projects, we can coordinate improvements such as flooring, interior finishes, fireplace updates, storage improvements, and other remodeling work.
                  </p>
                </div>
                <Link href="/home-renovation-chandler-az/" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1.5">
                  Explore Whole Home Remodeling →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Mesa Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 10: DESERT ENVIRONMENT & HARD WATER */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Designing Bathrooms for Mesa&apos;s Desert Environment
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Arizona homes have their own considerations when selecting bathroom materials and finishes. Mineral deposits, frequent water exposure, strong sunlight, and everyday wear can affect how surfaces look and perform over time.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We can recommend materials that are easier to maintain and appropriate for the conditions found in Mesa homes.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Epoxy Grout Options</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Where appropriate for the project, epoxy grout can provide a less porous alternative to traditional cement-based grout and can help simplify maintenance.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Easy-Care Shower Surfaces</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Large-format porcelain tile can reduce the number of grout joints compared with smaller tile formats, creating a clean appearance while reducing routine cleaning.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Glass Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Homeowners can also consider protective treatments for shower glass to make routine cleaning easier and reduce water spotting.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Quartz Countertops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quartz is a popular choice for bathroom vanities because it provides a durable, low-maintenance countertop surface with a wide range of available designs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Mesa" />

        {/* SECTION 11: COST SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Mesa Bathroom Remodel Cost
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every bathroom renovation is different, so the total project price depends on the scope rather than a single standard rate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {costTypes.map((c) => (
                <div key={c.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
                  </div>
                  <span className="text-primary font-semibold text-sm pt-3 border-t border-border/60">{c.est}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Factors that can influence the cost include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom size</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower or tub configuration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Amount of demolition</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Plumbing relocation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Electrical work</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile selection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Vanity and countertop selection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass enclosure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Accessibility modifications</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing requirements & custom storage</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Mesa Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 12: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Mesa Bathroom Remodeling Process
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

        {/* SECTION 13: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Mesa, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Mesa, including:
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
              {mesaAreasList.map((area) => (
                <span key={area} className="bg-secondary px-3 py-1 rounded-full border border-border font-medium text-foreground">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-xs mb-8">
              {mesaZipCodes.map((zip) => (
                <span key={zip} className="bg-secondary/60 px-2.5 py-0.5 rounded text-muted-foreground">
                  {zip}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve nearby communities through our broader East Valley service area.
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

        {/* SECTION 14: TECHNICAL CONSIDERATIONS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-foreground text-center">
              Technical Remodeling Considerations
            </h2>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Waterproofing & Moisture Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tiled shower installations require proper substrate preparation, waterproofing, drainage, and tile installation. For applicable projects, we use waterproofing systems such as Schluter-KERDI and follow the manufacturer&apos;s installation requirements. The specific waterproofing assembly depends on the shower design and existing construction.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Tile & Grout Selection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Porcelain and ceramic tile can provide durable surfaces for bathroom floors and walls. Tile size, slip resistance, grout selection, and installation method are considered according to the location where each material will be installed.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Plumbing & Electrical</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bathroom renovations may require plumbing or electrical modifications when fixtures, lighting, outlets, or shower configurations are changed. Where permits or inspections are required, the project is planned around the applicable requirements for the property and scope of work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 15: FAQ SECTION */}
        <ServiceFAQ faqs={mesaFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Mesa Bathroom?"
          description="Create a bathroom that fits your home, lifestyle, and everyday needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
