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
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Tempe AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Tempe, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
  keywords: [
    "bathroom remodeling Tempe AZ",
    "bathroom remodel Tempe AZ",
    "bathroom renovation Tempe",
    "Tempe bathroom remodeling",
    "walk-in shower remodeling Tempe",
    "tub-to-shower conversion Tempe",
    "primary bathroom remodel Tempe",
    "guest bathroom remodel Tempe",
    "small bathroom remodeling Tempe",
    "accessible bathroom remodeling Tempe",
    "bathroom tile installation Tempe",
    "bathroom flooring Tempe"
  ],
  openGraph: {
    title: "Bathroom Remodeling Tempe AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Tempe, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    url: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-tempe.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Tempe Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Tempe AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Tempe, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-tempe.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
  },
};

const tempeFaqs = [
  {
    question: "How much does a bathroom remodel cost in Tempe, AZ?",
    answer:
      "The cost depends on the size and condition of the bathroom, demolition, shower or tub configuration, tile, flooring, vanity, fixtures, glass, plumbing, electrical work, and overall project scope.",
  },
  {
    question: "How long does a bathroom remodel take in Tempe?",
    answer:
      "The timeline varies according to the project's size, complexity, materials, demolition, installation requirements, and other project conditions.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower when the existing layout and project requirements allow.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not always require a complete remodel. A project can focus specifically on the shower, including tile, waterproofing, fixtures, storage, and glass.",
  },
  {
    question: "Do you remodel primary bathrooms in Tempe?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, tile, flooring, fixtures, lighting, storage, and other improvements.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Small bathroom renovations focus on making the most of available floor space through appropriate shower, vanity, storage, fixture, and lighting choices.",
  },
  {
    question: "Can you remodel bathrooms near ASU?",
    answer:
      "Yes. Bathroom remodeling can be planned for homes and properties near Arizona State University, depending on the property and the desired scope of work.",
  },
  {
    question: "Do bathroom remodels in Tempe require permits?",
    answer:
      "Permit requirements depend on the type of work being performed. Plumbing, electrical, structural, and other regulated modifications may have different requirements from cosmetic updates.",
  },
  {
    question: "What Tempe areas do you serve?",
    answer:
      "We serve homeowners throughout Tempe, including South Tempe, Warner Ranch, Shalimar, Downtown Tempe, North Tempe, Alta Mira, Optimist Park, and Tally Ho.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Replace an outdated tub or enclosed shower with a more open bathing area designed around your available space.",
    detail:
      "A walk-in shower remodel in Tempe can include custom tile, shower niches, seating, low-threshold or curbless entry, modern fixtures, and glass enclosures. The design can be adapted to the existing bathroom layout and the way you use the shower.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a shower can make the existing bathroom footprint more useful.",
    detail:
      "A tub-to-shower conversion in Tempe, AZ can include tub removal, shower preparation, waterproofing, tile, fixtures, storage, flooring, and a glass enclosure. When the existing layout allows, the new shower can be designed around the former tub area.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "A primary bathroom should provide comfortable bathing space, useful storage, and finishes that fit your home.",
    detail:
      "A primary bathroom remodel in Tempe can include a walk-in shower, double vanity, countertop, bathroom flooring, custom tile, shower niche, shower seating, glass enclosure, lighting, plumbing fixtures, and freestanding tub. The project can focus on one area or combine several improvements into a complete renovation.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest bathrooms often benefit from practical improvements that make the most of the available space.",
    detail:
      "A guest bathroom remodel in Tempe can include a new vanity, shower or tub, tile, flooring, fixtures, lighting, storage, and updated finishes.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "A smaller bathroom needs careful planning because fixture placement, storage, and clear floor space all matter.",
    detail:
      "Our small bathroom remodeling options can include compact vanities, walk-in showers, recessed niches, space-efficient storage, updated fixtures, coordinated tile, and improved lighting. The goal is to make the existing room more functional without making unnecessary changes.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "Bathroom access can become an important consideration for homeowners who want easier and more comfortable everyday use.",
    detail:
      "Depending on the space, accessibility-focused improvements can include low-threshold shower entries, curbless showers, shower seating, handheld fixtures, grab-bar preparation, slip-conscious flooring, improved lighting, and practical bathroom clearances.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    body: "We discuss what you want to change, how you use the bathroom, your preferred style, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "The existing bathroom layout, shower or tub, vanity, flooring, storage, fixtures, and other relevant conditions are reviewed.",
  },
  {
    step: "3",
    title: "Remodeling Plan",
    body: "We organize the project around your priorities, existing space, and desired improvements.",
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
    body: "The finished bathroom is reviewed after the remodeling work is completed.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Bathroom-Focused Remodeling",
    body: "We specialize in bathroom renovation projects ranging from shower upgrades to complete bathroom transformations.",
  },
  {
    title: "Practical Design",
    body: "We plan bathrooms around everyday use, available space, storage needs, and the improvements that matter most to the homeowner.",
  },
  {
    title: "Clear Project Scope",
    body: "The remodeling plan is organized around the work you want completed and the existing conditions of the bathroom.",
  },
  {
    title: "Local Tempe Service",
    body: "We serve homeowners throughout Tempe and surrounding East Valley communities.",
  },
  {
    title: "Attention to Details",
    body: "Tile layout, shower transitions, storage, vanity installation, fixtures, glass, and finishing details all contribute to the completed bathroom.",
  },
];

const projectExamples = [
  {
    title: "Walk-In Shower Transformation",
    description: "Updating an outdated bathing area with a new shower configuration, tile, storage, fixtures, and glass.",
  },
  {
    title: "Tub-to-Shower Conversion",
    description: "Replacing an existing bathtub with a shower designed around the available bathroom footprint.",
  },
  {
    title: "Primary Bathroom Update",
    description: "Combining improvements to the shower, vanity, tile, flooring, fixtures, lighting, and storage.",
  },
  {
    title: "Guest Bathroom Refresh",
    description: "Updating the vanity, shower or tub, tile, flooring, fixtures, lighting, and finishes.",
  },
];

const tempeProblems = [
  {
    title: "An Unused Bathtub",
    desc: "Replace an underused bathtub with a walk-in shower that better suits your daily routine.",
  },
  {
    title: "An Outdated Shower",
    desc: "Update the shower with new tile, storage, fixtures, waterproofing, and glass.",
  },
  {
    title: "Limited Storage",
    desc: "Add vanity storage, shower niches, and other practical organization features.",
  },
  {
    title: "An Old Vanity",
    desc: "Replace an outdated vanity with a configuration that provides better storage and counter space.",
  },
  {
    title: "Dated Tile",
    desc: "Refresh shower walls, flooring, backsplashes, and accent areas with coordinated tile.",
  },
  {
    title: "Poor Bathroom Layout",
    desc: "Review the positioning of the shower, vanity, storage, and fixtures to make better use of the available room.",
  },
  {
    title: "Difficult Shower Access",
    desc: "Consider a low-threshold or curbless shower, seating, handheld fixtures, and other accessibility-focused improvements.",
  },
];

const tempeNeighborhoods = [
  {
    name: "South Tempe",
    desc: "Bathroom updates can include walk-in showers, tub-to-shower conversions, primary bathroom renovations, tile, flooring, and vanities.",
  },
  {
    name: "Warner Ranch",
    desc: "Homeowners can modernize existing bathrooms with updated showers, tile, vanities, storage, fixtures, and flooring.",
  },
  {
    name: "Downtown Tempe",
    desc: "Bathrooms in established properties may benefit from practical updates that improve both appearance and everyday functionality.",
  },
  {
    name: "North Tempe",
    desc: "Bathroom renovations can range from focused shower and vanity upgrades to larger remodeling projects.",
  },
  {
    name: "Alta Mira",
    desc: "Homeowners can update older bathroom finishes, improve storage, and create more functional shower and vanity areas.",
  },
  {
    name: "Shalimar",
    desc: "Bathroom remodeling can focus on improving the layout, finishes, storage, shower, vanity, and overall appearance.",
  },
];

export default function TempeBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Tempe AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-tempe-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Tempe, Arizona"
        serviceDescription="Bathroom remodeling in Tempe, AZ for walk-in showers, tub conversions, primary baths, guest baths, tile, and vanities."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <FAQSchema faqs={tempeFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Tempe AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Tempe, AZ"
          subtitle="Bathroom Remodeling in Tempe, AZ"
          description="Create a bathroom that works better for your everyday routine. ARZ Home Remodeling provides bathroom remodeling in Tempe including walk-in showers, tub-to-shower conversions, primary bathroom renovations, guest bathrooms, tile, flooring, vanities, and complete bathroom updates. Whether you are updating one part of the room or planning a complete renovation, we can help you determine the right improvements for your existing bathroom."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tempe", url: `${siteConfig.url}/bathroom-remodeling-tempe-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Tempe Homeowners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An outdated bathroom can make an otherwise comfortable home feel less functional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Maybe the bathtub takes up space you rarely use. Perhaps the shower needs better storage, the vanity no longer provides enough room, or the flooring and tile are ready for an update.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">bathroom remodel in Tempe, AZ</strong> gives you an opportunity to improve the way the room looks and, more importantly, how it works.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling works with homeowners on focused bathroom improvements as well as complete renovations. Depending on your goals, a project can include a new walk-in shower, tub-to-shower conversion, vanity, tile, flooring, fixtures, storage, lighting, or a combination of these improvements.
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

        {/* SECTION 4: LOCAL TEMPE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations Throughout Tempe, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tempe has a mix of established residential neighborhoods, older homes, newer properties, and homes located close to major areas such as Downtown Tempe and Arizona State University.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              That means bathroom remodeling needs can vary significantly from one property to another.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some homeowners want to modernize an older bathroom without changing its entire layout. Others want to replace an unused bathtub with a walk-in shower or completely redesign a primary bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our remodeling approach starts with the existing bathroom and the improvements that matter most to you.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                We serve homeowners throughout Tempe, including:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-muted-foreground text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>South Tempe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Warner Ranch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shalimar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Downtown Tempe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>North Tempe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Alta Mira</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Optimist Park</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tally Ho</span>
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
                Our Tempe Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                We provide bathroom remodeling options for primary bathrooms, guest bathrooms, smaller spaces, and individual shower or vanity upgrades.
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
                Shower Remodeling for Tempe Bathrooms
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The shower is often the centerpiece of a bathroom renovation. An outdated shower can be redesigned with new tile, improved storage, modern fixtures, seating, and a glass enclosure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Curbless Walk-In Showers</h3>
                <p className="text-muted-foreground text-sm">A low or zero-threshold entry creates a more open appearance and can make shower access easier.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Custom-Tiled Showers</h3>
                <p className="text-muted-foreground text-sm">Tile allows you to create different patterns, textures, sizes, and accent designs.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Shower Niches</h3>
                <p className="text-muted-foreground text-sm">Built-in niches provide convenient storage without adding a separate shelf to the shower floor.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Shower Seating</h3>
                <p className="text-muted-foreground text-sm">A built-in bench or seat can provide additional comfort and practical functionality.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm sm:col-span-2 lg:col-span-2">
                <h3 className="font-semibold text-foreground mb-2">Frameless Glass Enclosures</h3>
                <p className="text-muted-foreground text-sm">Glass can visually open the shower area while allowing the tile design to remain visible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TILE SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Tile Installation in Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tile can change the appearance of the entire bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We can coordinate tile across shower walls, floors, niches, backsplashes, and accent areas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Depending on the design, homeowners can choose different tile sizes, patterns, textures, and finishes to create anything from a clean contemporary bathroom to a more traditional space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A coordinated tile selection can also connect the shower, flooring, vanity, and other finishes.
            </p>
            <div>
              <Link href="/bathroom-tile-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Tile Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: FLOORING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Flooring in Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom flooring should complement the rest of the space while providing a practical surface for everyday use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Flooring can be selected alongside shower tile, vanity finishes, countertops, fixtures, and wall colors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you want a subtle floor that allows the shower design to stand out or a more distinctive tile pattern, the flooring should work as part of the overall bathroom design.
            </p>
            <div>
              <Link href="/bathroom-flooring-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Flooring Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: VANITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanity & Countertop Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The vanity influences both storage and the appearance of your bathroom.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Replacing an outdated vanity can provide:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>More cabinet storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Additional counter space</span>
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
                  <span>A better fit for the room</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>A refreshed bathroom design</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Larger primary bathrooms may accommodate double vanities, while smaller Tempe bathrooms can benefit from compact configurations that preserve usable floor space.
            </p>
            <div>
              <Link href="/cabinet-countertop-installation/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: PROBLEM/SOLUTION SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">User Intent</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can a Tempe Bathroom Remodel Improve?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tempeProblems.map((item) => (
                <div key={item.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: DESIGN IDEAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Ideas for Tempe Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                You don&apos;t always need to completely change the bathroom to make a noticeable improvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Replace the Tub With a Walk-In Shower</h3>
                <p className="text-muted-foreground text-sm">A tub that rarely gets used can become a practical shower area.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Add Built-In Shower Storage</h3>
                <p className="text-muted-foreground text-sm">A recessed niche keeps everyday products organized without taking up floor space.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Upgrade the Vanity</h3>
                <p className="text-muted-foreground text-sm">A new vanity can change the appearance of the bathroom while improving storage.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Coordinate Shower and Floor Tile</h3>
                <p className="text-muted-foreground text-sm">Matching or complementary tile selections can make the bathroom feel more cohesive.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Improve Bathroom Lighting</h3>
                <p className="text-muted-foreground text-sm">Updated vanity, ceiling, and shower-area lighting can make the room more comfortable and functional.</p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Add a Frameless Glass Enclosure</h3>
                <p className="text-muted-foreground text-sm">Glass can create a more open visual connection between the shower and the rest of the bathroom.</p>
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
                How Much Does a Bathroom Remodel Cost in Tempe, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Tempe</strong> depends on the size and condition of the existing bathroom and the scope of the renovation.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A tub-to-shower conversion will have different requirements from a complete primary bathroom renovation.
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
                Get a Custom Bathroom Remodeling Estimate →
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
                Our Tempe Bathroom Remodeling Process
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

        {/* SECTION 14: WATERPROOFING / TECHNICAL AUTHORITY */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing & Bathroom Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              The visible tile is only one part of a properly planned shower. Before tile installation, the shower area needs appropriate preparation, waterproofing, drainage, and installation of the selected shower system.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the design, a bathroom remodeling project may involve:
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
              The appropriate installation method depends on the existing bathroom, selected materials, and planned shower design.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Waterproofing →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 15: TEMPE MATERIAL SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Choosing Bathroom Materials for Tempe Homes
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
                  <span>Easy-to-clean tile surfaces</span>
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
              Material selection is part of the overall design process, so the finishes work together rather than being chosen individually.
            </p>
          </div>
        </section>

        {/* SECTION 16: LOCAL TEMPE NEIGHBORHOODS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling in Tempe Neighborhoods
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Tempe&apos;s residential areas include different home styles, layouts, and remodeling needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tempeNeighborhoods.map((n) => (
                <div key={n.name} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{n.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 17: ASU / UNIVERSITY AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Remodeling Near ASU & Downtown Tempe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Homes and properties near Arizona State University and Downtown Tempe can have different remodeling priorities from larger suburban properties.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 border border-border mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                For smaller bathrooms and rental properties, practical improvements may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated vanities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower upgrades</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Durable flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-maintain tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improved storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated fixtures</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Better lighting</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              The remodeling scope depends on the property and the owner&apos;s goals.
            </p>
          </div>
        </section>

        {/* SECTION 18: PERMITS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Permit requirements depend on the work being performed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic updates can have different requirements from projects involving plumbing, electrical work, structural modifications, or other regulated changes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For a specific project, applicable requirements should be confirmed according to the property and proposed scope of work.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Bathroom Remodeling Requirements →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Tempe" />

        {/* SECTION 19: WHY ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Tempe Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 20: PROJECTS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Tempe Bathroom Remodeling Projects
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
              Serving Homeowners Throughout Tempe, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Tempe, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8">
              South Tempe · Warner Ranch · Shalimar · Downtown Tempe · North Tempe · Alta Mira · Optimist Park · Tally Ho
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve surrounding East Valley communities, including Chandler, Gilbert, Mesa, Ahwatukee, and Apache Junction.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Chandler Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Gilbert Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Mesa Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 22: FAQ */}
        <ServiceFAQ faqs={tempeFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 23: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Tempe Bathroom?"
          description="Whether you want to replace an outdated tub, create a walk-in shower, update a primary bathroom, improve a guest bathroom, or complete a full renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
