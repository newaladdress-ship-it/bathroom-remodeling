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
  title: "Bathroom Remodeling Ocotillo | Chandler AZ",
  description:
    "Bathroom remodeling in Ocotillo, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and custom bathroom renovations.",
  keywords: [
    "bathroom remodeling Ocotillo",
    "bathroom remodel Ocotillo",
    "bathroom renovation Ocotillo",
    "Ocotillo bathroom remodeling",
    "master bathroom remodel Ocotillo",
    "walk-in shower Ocotillo",
    "tub-to-shower conversion Ocotillo",
    "bathroom tile installation Ocotillo",
    "small bathroom remodeling Ocotillo",
    "accessible bathroom remodeling Ocotillo",
    "bathroom remodel cost Ocotillo",
    "bathroom remodeling Chandler AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling Ocotillo | Chandler AZ",
    description:
      "Bathroom remodeling in Ocotillo, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and custom bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-ocotillo/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Ocotillo Chandler AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Ocotillo | Chandler AZ",
    description:
      "Bathroom remodeling in Ocotillo, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and custom bathroom renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-ocotillo/`,
  },
};

const ocotilloFaqs = [
  {
    question: "How much does a bathroom remodel cost in Ocotillo?",
    answer:
      "The cost depends on the bathroom size, materials, plumbing changes, shower or tub configuration, cabinetry, tile, fixtures, and overall project scope. We evaluate the existing bathroom before preparing an estimate.",
  },
  {
    question: "How long does a bathroom remodel take in Ocotillo?",
    answer:
      "Project duration depends on the scope of work. A focused shower or vanity update can require less work than a complete bathroom renovation involving multiple trades and layout changes.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an underused bathtub with a walk-in shower designed around the existing bathroom footprint.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not necessarily require replacing every part of the room. A shower can be remodeled independently when the rest of the bathroom is still in good condition.",
  },
  {
    question: "Do you install bathroom tile in Ocotillo?",
    answer:
      "Yes. Bathroom tile can be installed on shower walls, shower floors, bathroom floors, backsplashes, and other suitable surfaces.",
  },
  {
    question: "Can you replace my bathroom vanity?",
    answer:
      "Yes. Vanity replacement can be part of a larger bathroom renovation or a focused update. Options can include single vanities, double vanities, quartz countertops, and additional storage.",
  },
  {
    question: "Do bathroom remodels in Chandler require permits?",
    answer:
      "Permit requirements depend on the scope of work. Projects involving certain plumbing, electrical, structural, or layout changes may require municipal approval. The project scope should be reviewed before construction begins.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open bathing area designed around your available space.",
    detail:
      "Walk-in showers can include custom tile, built-in niches, seating, modern shower controls, and glass enclosures.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can make better use of the existing bathroom footprint.",
    detail:
      "We can design the new shower around the room's dimensions, plumbing, storage requirements, and preferred finishes.",
    cta: "Learn More →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Update your primary bathroom with a combination of shower improvements, vanity replacement, flooring, lighting, fixtures, and storage.",
    detail:
      "Layout changes can also be considered when the existing arrangement limits how the room functions.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "New tile can change both the appearance and maintenance requirements of a bathroom.",
    detail:
      "We install tile for shower walls, shower floors, bathroom floors, backsplashes, and other surfaces using materials selected for the specific application.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "Replace an outdated vanity with a configuration that provides the storage and counter space your household actually needs.",
    detail:
      "Options can include single or double vanities, quartz countertops, wall-mounted designs, and additional bathroom storage.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    body: "We discuss what you want to change, what isn't working with the existing bathroom, and what you would like the finished space to accomplish.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We review the existing layout, measurements, plumbing locations, surfaces, storage, and other conditions that can affect the remodel.",
  },
  {
    step: "3",
    title: "Project Scope & Estimate",
    body: "We outline the proposed work, materials, and project scope so you can understand what is included before making decisions.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Choose the tile, vanity, countertop, fixtures, shower glass, colors, and other finishes that will make up the finished bathroom.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "The existing finishes are removed as needed, followed by preparation, plumbing or electrical work, waterproofing, tile installation, cabinetry, fixtures, and finishing work.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed bathroom with you and address remaining details before the project is considered complete.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Local Service",
    body: "We work with homeowners throughout Ocotillo and surrounding Chandler communities.",
  },
  {
    title: "Clear Project Scope",
    body: "Before work begins, we discuss the proposed improvements, materials, layout changes, and expected project scope.",
  },
  {
    title: "Detailed Planning",
    body: "We evaluate the existing bathroom before demolition so potential plumbing, layout, and installation considerations can be identified early.",
  },
  {
    title: "Quality-Focused Installation",
    body: "From surface preparation and waterproofing to tile and finish installation, each stage is handled with attention to details.",
  },
  {
    title: "Material Guidance",
    body: "We help homeowners compare tile, vanities, countertops, fixtures, glass, and other finishes based on appearance, maintenance, and intended use.",
  },
  {
    title: "Organized Communication",
    body: "You should know what is happening throughout the project, from the initial evaluation through the final walkthrough.",
  },
];

const ocotilloProblems = [
  {
    title: "Unused Garden Tub",
    desc: "Large tubs can take up substantial floor area without providing much practical value.",
    sol: "Convert the tub area into a larger walk-in shower or redesign the surrounding space for better functionality.",
  },
  {
    title: "Limited Storage",
    desc: "A small vanity or poorly organized bathroom can leave everyday items without a convenient place.",
    sol: "Increase cabinet storage, add recessed shower niches, or redesign the vanity configuration.",
  },
  {
    title: "Outdated Shower",
    desc: "Older surrounds, worn grout, dated fixtures, and difficult-to-clean surfaces can make a bathroom feel old.",
    sol: "Replace the shower finishes with new tile, waterproofing, fixtures, and glass.",
  },
  {
    title: "Difficult-to-Use Layout",
    desc: "A bathroom can have enough square footage but still feel cramped because fixtures are poorly positioned.",
    sol: "Review the existing layout and determine whether moving selected fixtures would create a more functional arrangement.",
  },
  {
    title: "Worn Flooring and Finishes",
    desc: "Old flooring, countertops, vanities, and fixtures can make the entire room feel dated.",
    sol: "Combine targeted finish upgrades with new tile, vanity, countertop, lighting, and plumbing fixtures.",
  },
];

export default function OcotilloBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Ocotillo",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-ocotillo/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Ocotillo"
        serviceDescription="Bathroom remodeling in Ocotillo, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and custom bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-ocotillo/`}
      />
      <FAQSchema faqs={ocotilloFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Ocotillo"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-ocotillo/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Ocotillo, Chandler AZ"
          subtitle="Bathroom Updates Designed Around Your Ocotillo Home"
          description="Refresh an outdated bathroom with a layout and finishes that fit the way you use your home. We provide walk-in showers, tub-to-shower conversions, tile installation, vanity updates, and complete bathroom renovations in Ocotillo."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Ocotillo", url: `${siteConfig.url}/bathroom-remodeling-ocotillo/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION / LOCAL PROBLEM */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Ocotillo Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathrooms in Ocotillo homes can have very different needs depending on the property&apos;s age, layout, and existing finishes. Some homeowners want to replace an unused garden tub, while others need better storage, a more accessible shower, updated tile, or a complete change to the bathroom layout.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we approach each bathroom as an individual project rather than applying the same design to every home. We look at the existing layout, plumbing locations, available space, storage needs, lighting, materials, and the way your household uses the room before recommending improvements.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Common Ocotillo bathroom updates include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replacing outdated tub and shower combinations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Converting a bathtub into a walk-in shower</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Installing new shower tile and waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replacing bathroom vanities and countertops</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updating bathroom flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improving storage with niches and built-in features</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Creating larger or more functional primary bathrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Refreshing guest and hall bathrooms</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updating lighting, plumbing fixtures, and finishes</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you need one focused improvement or a complete bathroom renovation, the goal is to create a space that is easier to use, easier to maintain, and better suited to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Request a Bathroom Remodeling Consultation
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

        {/* SECTION 4: LOCAL AREA SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling in Ocotillo, Chandler
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ocotillo is a well-established Chandler community recognized for its golf course, lakes, landscaped streets, and mix of residential properties. Homes in the area can feature spacious primary bathrooms, separate tubs and showers, large vanity areas, and layouts that were designed around earlier preferences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              That gives homeowners several opportunities when updating an existing bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An unused bathtub can become additional shower space. A dated vanity can be replaced with a configuration that provides better storage. Dark or heavily patterned finishes can be replaced with lighter tile and simpler surfaces. A poorly arranged bathroom can also be redesigned around the existing footprint when a full layout change isn&apos;t necessary.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our bathroom remodeling work in Ocotillo can include properties around <strong className="font-semibold text-foreground">Ocotillo Road, Queen Creek Road, Dobson Road, and the surrounding residential areas of Chandler</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The design should ultimately reflect the individual home rather than simply trying to copy a trend.
            </p>
          </div>
        </section>

        {/* SECTION 5: LOCAL PROJECT / EXAMPLE SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Updates for Different Ocotillo Layouts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Every bathroom remodel starts with the existing space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For example, a homeowner with a large but rarely used bathtub may benefit more from a tub-to-shower conversion than from replacing the entire bathroom. Another homeowner may need additional vanity storage, better lighting, new flooring, and an updated shower while keeping the current plumbing locations.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                A typical shower-focused renovation can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Removal of the existing shower or tub surround</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Preparation of the wall and floor surfaces</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing before tile installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>New wall and floor tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Built-in shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Optional shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated plumbing fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Frameless or semi-frameless glass</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>New shower controls and accessories</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Keeping useful portions of the existing layout can sometimes reduce unnecessary work while still producing a major visual and functional improvement.
            </p>
          </div>
        </section>

        {/* SECTION 6: PERMITS / LOCAL PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Chandler
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some bathroom improvements are primarily finish updates, while others involve plumbing, electrical, structural, or layout changes. Permit requirements can therefore depend on the actual scope of the project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If your Ocotillo bathroom renovation involves changes that require municipal approval, the project should be reviewed according to applicable <strong className="font-semibold text-foreground">City of Chandler</strong> requirements before construction begins.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We can help identify the project requirements and coordinate the appropriate work so the remodeling process is organized from planning through completion.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                For homeowners considering a layout change, we review important details such as:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Existing plumbing locations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Drain and supply-line requirements</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Electrical changes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Wall modifications</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower and tub configurations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Ventilation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile installation requirements</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              This planning stage helps identify potential issues before demolition begins.
            </p>
          </div>
        </section>

        {/* SECTION 7: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Services in Ocotillo
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Different bathrooms require different solutions. Some projects involve one specific upgrade, while others combine several improvements into a complete renovation.
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

        {/* SECTION 8: PROBLEM → SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Common Bathroom Problems We Solve in Ocotillo
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A bathroom doesn&apos;t always need a complete gut renovation to become significantly better.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ocotilloProblems.map((item) => (
                <div key={item.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
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

        {/* SECTION 9: WATERPROOFING SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing for Long-Term Performance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A beautiful tiled shower needs more than attractive tile. Water management behind the finished surface is an important part of the installation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For tiled shower projects, we use a dedicated waterproofing approach appropriate to the shower design. Where specified, systems such as <strong className="font-semibold text-foreground">Schluter-KERDI</strong> can provide a continuous waterproofing layer behind the tile.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                The shower installation can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofed shower walls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofed shower floors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper treatment around corners and transitions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Sealed penetrations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly prepared tile surfaces</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate shower drainage</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile and grout selected for the application</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              The objective is simple: the visible tile should look good, while the underlying shower assembly is properly prepared to manage moisture.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Waterproofing →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: HARD-WATER SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Designing Around Chandler&apos;s Hard Water
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Mineral deposits can become noticeable on shower glass, fixtures, tile, and grout over time. That makes material selection and maintenance considerations particularly important for bathroom renovations in the Chandler area.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Depending on the application, we can recommend materials and finishes that are easier to maintain.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Tile and Grout</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Porcelain tile and appropriately selected grout can provide durable surfaces that are easier to clean than heavily porous materials.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Glass</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Glass treatments may help reduce water spotting and make routine cleaning easier.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Countertops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quartz and other low-maintenance countertop materials can provide a practical surface around bathroom vanities.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Fixtures</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Finish selection can also affect how noticeable water spots and mineral deposits become during everyday use.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The right combination depends on your bathroom, cleaning routine, design preferences, and budget.
            </p>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Ocotillo" />

        {/* SECTION 11: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                A Practical Remodeling Process for Ocotillo Homeowners
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

        {/* SECTION 12: COST SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does Bathroom Remodeling Cost in Ocotillo?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a bathroom renovation depends heavily on the size of the room and the scope of work. A focused shower renovation will generally require a different budget than a complete primary bathroom remodel.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Factors that influence the total project cost include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bathroom size</span>
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
                  <span>Shower or tub configuration</span>
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
                  <span>Flooring & fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom features & layout changes</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              Instead of using one generic price for every bathroom, we evaluate the existing space and the work you actually want completed before preparing the project estimate.
            </p>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request an Ocotillo Bathroom Remodeling Estimate →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Bathroom Remodeling Process
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

        {/* SECTION 14: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Near Ocotillo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners in Ocotillo and nearby Chandler communities, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8">
              Ocotillo · Fulton Ranch · Chandler · Sun Lakes · Layton Lakes · Chandler Heights · Andersen Springs · The Islands · Pecos Ranch
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-fulton-ranch/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Fulton Ranch →
              </Link>
              <Link href="/bathroom-remodeling-layton-lakes/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Layton Lakes →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 15: FAQ SECTION */}
        <ServiceFAQ faqs={ocotilloFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Ocotillo Bathroom?"
          description="Refresh an outdated bathroom with a layout and finishes that fit the way you use your home. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
