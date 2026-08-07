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
  title: "Bathroom Remodeling Fulton Ranch | Chandler AZ",
  description:
    "Bathroom remodeling in Fulton Ranch, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
  keywords: [
    "bathroom remodeling Fulton Ranch",
    "bathroom remodel Fulton Ranch",
    "bathroom renovation Fulton Ranch",
    "Fulton Ranch bathroom remodeling",
    "master bathroom remodel Fulton Ranch",
    "walk-in shower Fulton Ranch",
    "tub-to-shower conversion Fulton Ranch",
    "bathroom tile installation Fulton Ranch",
    "small bathroom remodeling Fulton Ranch",
    "accessible bathroom remodeling Fulton Ranch",
    "bathroom remodel cost Fulton Ranch",
    "bathroom remodeling Chandler AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling Fulton Ranch | Chandler AZ",
    description:
      "Bathroom remodeling in Fulton Ranch, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
    url: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Fulton Ranch Chandler AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Fulton Ranch | Chandler AZ",
    description:
      "Bathroom remodeling in Fulton Ranch, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and flooring.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/`,
  },
};

const fultonRanchFaqs = [
  {
    question: "How much does a bathroom remodel cost in Fulton Ranch?",
    answer:
      "The cost depends on the bathroom size, existing conditions, materials, fixtures, shower or tub configuration, tile, vanity, glass, plumbing changes, and overall scope.",
  },
  {
    question: "How long does a Fulton Ranch bathroom remodel take?",
    answer:
      "The timeline varies according to project size and complexity. Demolition, plumbing changes, tile work, material availability, glass, inspections, and other project requirements can all affect the schedule.",
  },
  {
    question: "Can you convert a garden tub into a walk-in shower?",
    answer:
      "Yes. A garden tub can potentially be replaced with a walk-in shower when the existing space and project scope allow for the conversion.",
  },
  {
    question: "Do you remodel primary bathrooms in Fulton Ranch?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, tile, flooring, lighting, fixtures, storage, and other improvements.",
  },
  {
    question: "Do you remodel guest bathrooms?",
    answer:
      "Yes. Guest bathroom renovations can include tubs, showers, vanities, flooring, tile, fixtures, lighting, and other finishes.",
  },
  {
    question: "Can you remodel a small bathroom?",
    answer:
      "Yes. Small bathroom remodeling can focus on efficient fixture placement, storage, shower design, vanity size, lighting, and material selection.",
  },
  {
    question: "Can you replace my bathtub with a shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in or low-threshold shower depending on the space and design.",
  },
  {
    question: "What bathroom remodeling services do you provide in Fulton Ranch?",
    answer:
      "Services can include primary bathroom remodeling, guest bathroom remodeling, walk-in showers, tub-to-shower conversions, accessible bathroom improvements, tile installation, bathroom flooring, vanities, countertops, and complete bathroom renovations.",
  },
  {
    question: "Do bathroom remodels in Fulton Ranch require permits?",
    answer:
      "Permit requirements depend on the project scope. Work involving plumbing, electrical, structural modifications, or other regulated activities can have different requirements from cosmetic updates.",
  },
  {
    question: "Do you serve the rest of Chandler?",
    answer:
      "Yes. In addition to Fulton Ranch, ARZ Home Remodeling serves homeowners throughout Chandler and surrounding service areas according to the company's actual coverage.",
  },
];

const mainServices = [
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Your primary bathroom should be designed around your daily routine.",
    detail:
      "A primary bathroom remodel in Fulton Ranch can include a redesigned shower, double vanity, new countertops, bathroom flooring, tile, lighting, fixtures, storage, and other improvements. Whether you want a cleaner modern appearance or a more relaxing bathroom environment, the design can be planned around the space you already have.",
    cta: "Learn More About Primary Bathroom Remodeling →",
  },
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "An outdated tub or enclosed shower can make a bathroom feel smaller and harder to use.",
    detail:
      "A walk-in shower remodel in Fulton Ranch can create a more open bathing area with options such as custom wall tile, shower niches, built-in seating, handheld and fixed shower fixtures, low-threshold entry, curbless shower designs, and glass shower enclosures.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can make the bathroom more practical.",
    detail:
      "A tub-to-shower conversion in Fulton Ranch can include removal of the existing tub, shower preparation, waterproofing, wall tile, shower fixtures, storage, flooring, and glass. The new shower can be designed around the existing footprint when the layout allows it.",
    cta: "Explore Tub-to-Shower Conversions →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Tile has a major effect on the appearance of a remodeled bathroom.",
    detail:
      "We can use tile for shower walls, bathroom floors, backsplashes, niches, and accent areas. Depending on the design, homeowners can choose from different sizes, patterns, textures, and finishes to create a cohesive bathroom.",
    cta: "Explore Bathroom Tile Installation →",
  },
  {
    title: "Bathroom Flooring",
    href: "/bathroom-flooring-installation/",
    description:
      "Bathroom flooring needs to work with the rest of the room while handling everyday moisture and traffic.",
    detail:
      "New flooring can help connect the shower, vanity, cabinetry, walls, and other finishes into one coordinated design.",
    cta: "Explore Bathroom Flooring →",
  },
  {
    title: "Bathroom Vanity & Countertop Updates",
    href: "/cabinet-countertop-installation/",
    description:
      "Replacing an old vanity can improve both storage and appearance.",
    detail:
      "A vanity renovation can involve new cabinetry, countertops, sinks, hardware, and other finishing details selected to work with the bathroom's overall design.",
    cta: "Explore Vanity & Countertop Installation →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    body: "We discuss the existing bathroom, what you want to change, your priorities, and the type of renovation you're considering.",
  },
  {
    step: "2",
    title: "Bathroom Evaluation",
    body: "We review the existing layout, shower or tub, vanity, flooring, storage, fixtures, and other areas that may affect the project.",
  },
  {
    step: "3",
    title: "Project Planning",
    body: "We determine the remodeling scope and discuss design priorities, materials, fixtures, and other major selections.",
  },
  {
    step: "4",
    title: "Material Selection",
    body: "You can select the tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes that fit the planned design.",
  },
  {
    step: "5",
    title: "Remodeling",
    body: "The existing materials are removed as needed, the bathroom is prepared, and the planned improvements are installed.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "After the remodeling work is completed, we review the finished bathroom and completed project scope.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Clear Project Planning",
    body: "We organize the remodeling scope around the existing bathroom and the improvements you want to make.",
  },
  {
    title: "Design-Focused Approach",
    body: "We help coordinate showers, tile, flooring, vanities, fixtures, storage, and other elements so the finished bathroom works as one space.",
  },
  {
    title: "Practical Remodeling Solutions",
    body: "We focus on improvements that make the bathroom more comfortable, functional, and easier to use.",
  },
  {
    title: "Local Chandler Service",
    body: "Fulton Ranch is part of our Chandler service area, allowing us to focus on the needs of local homeowners.",
  },
  {
    title: "Attention to the Finished Details",
    body: "The final appearance depends on details such as tile layout, shower transitions, storage, fixtures, glass, and finishing work.",
  },
];

const projectExamples = [
  {
    title: "Primary Bathroom Renovation",
    description: "A primary bathroom updated around the homeowner's preferred shower configuration, storage requirements, tile selection, vanity, and finishes.",
  },
  {
    title: "Walk-In Shower Transformation",
    description: "An outdated bathing area redesigned around a more open shower layout with updated tile, storage, fixtures, and glass.",
  },
  {
    title: "Bathroom Vanity & Finish Update",
    description: "An existing bathroom refreshed with a new vanity, countertop, flooring, fixtures, and coordinated finishes.",
  },
];

export default function FultonRanchBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Fulton Ranch",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-fulton-ranch/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Fulton Ranch"
        serviceDescription="Bathroom remodeling in Fulton Ranch, Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and flooring."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-fulton-ranch/`}
      />
      <FAQSchema faqs={fultonRanchFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Fulton Ranch"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-fulton-ranch/`}
      />
      <Header />
      <main>
        {/* SECTION 3: HERO SECTION */}
        <ServiceHero
          title="Custom Bathroom Remodeling in Fulton Ranch"
          subtitle="Bathroom Remodeling in Fulton Ranch, Chandler AZ"
          description="Update an outdated bathroom, replace an unused bathtub, create a more spacious walk-in shower, or completely redesign your bathroom around the way you use it. ARZ Home Remodeling helps homeowners in Fulton Ranch and throughout Chandler with bathroom renovations including walk-in showers, tub-to-shower conversions, tile, flooring, vanities, primary bathrooms, guest bathrooms, and complete bathroom remodels."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Fulton Ranch", url: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/` },
          ]}
        />

        {/* SECTION 4: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Fulton Ranch Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom renovation can be as simple as replacing an outdated vanity or as extensive as redesigning the entire room.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For homeowners in Fulton Ranch, the right remodeling approach depends on the existing bathroom, available space, layout, materials, and the improvements you want to make.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some bathrooms need a more functional shower. Others need additional storage, updated tile, a new vanity, better lighting, or a complete change in layout.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we plan each <strong className="font-semibold text-foreground">Fulton Ranch bathroom remodel</strong> around the existing space and your priorities. The goal is to create a bathroom that looks updated while also being comfortable and practical for everyday use.
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

        {/* SECTION 5: MAIN SERVICE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Fulton Ranch Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                From focused bathroom updates to complete renovations, we provide remodeling options for different types of bathrooms and project goals.
              </p>
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

        {/* SECTION 6: SMALL BATHROOM SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Small Bathroom Remodeling in Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A smaller bathroom does not necessarily need a larger footprint to become more functional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The right combination of layout, vanity size, shower configuration, storage, lighting, and materials can make better use of the available space.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Depending on the existing bathroom, a small bathroom renovation may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Space-efficient vanities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Walk-in shower designs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Recessed shower niches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improved storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Larger-format tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Updated lighting</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Better fixture placement</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The objective is to make the room feel organized and comfortable without adding unnecessary complexity.
            </p>
            <div>
              <Link href="/small-bathroom-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Small Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: GUEST BATHROOM SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Guest Bathroom Remodeling in Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Guest bathrooms often need to balance appearance with practical everyday use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">guest bathroom remodel in Fulton Ranch</strong> can include an updated tub or shower, vanity, countertop, flooring, wall tile, lighting, fixtures, and other finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether the bathroom needs a focused refresh or a more complete renovation, the project can be planned around the existing layout and your priorities.
            </p>
            <div>
              <Link href="/guest-bathroom-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Guest Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: ACCESSIBILITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Accessible Bathroom Remodeling in Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom can be redesigned to make everyday movement and bathing easier.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Depending on the room and project requirements, accessibility-focused improvements may include:
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6">
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low-threshold showers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Curbless shower entries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Handheld shower fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grab-bar preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Slip-conscious flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improved lighting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>More practical bathroom clearances</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The exact solution depends on the existing bathroom and the way the space needs to be used.
            </p>
            <div>
              <Link href="/handicap-accessible-bathroom/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Accessible Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9 & 10: LOCAL FULTON RANCH SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Throughout Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fulton Ranch is part of Chandler, and every home within the community can have different bathroom layouts, finishes, and remodeling requirements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Rather than using the same design for every property, we look at the existing bathroom and determine which improvements make the most sense for the space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you&apos;re near the community&apos;s lakes, residential streets, shopping areas, or surrounding Chandler neighborhoods, the remodeling plan should be based on <strong className="font-semibold text-foreground">your bathroom&apos;s layout and your goals</strong>, not simply the location of the home.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                Local Bathroom Remodeling in Fulton Ranch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ARZ Home Remodeling provides bathroom renovation services for homeowners throughout Fulton Ranch and surrounding Chandler communities. Projects can range from a focused shower or vanity update to a complete bathroom renovation involving tile, flooring, fixtures, storage, and layout improvements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11: CHANDLER LOCAL CONTEXT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovation Considerations in Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom remodeling projects can vary considerably depending on the existing home and the condition of the bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Before deciding on materials or finishes, it is important to consider:
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6">
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Existing bathroom layout</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower or bathtub configuration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Available storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Vanity size</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Flooring condition</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile condition</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Plumbing locations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Lighting & ventilation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Desired accessibility</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Overall design style</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A focused renovation may be appropriate when the existing layout works well. A more extensive remodel may make sense when several parts of the bathroom need to change at the same time.
            </p>
          </div>
        </section>

        {/* SECTION 12: MATERIALS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Materials & Design</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Choosing Materials for a Fulton Ranch Bathroom Remodel
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The materials you select influence the appearance, maintenance, and everyday usability of the finished bathroom.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Tile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Tile can create a distinctive shower design while allowing you to coordinate walls, niches, floors, and accent areas.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Bathroom Flooring</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Flooring should complement the rest of the room while providing a practical surface for everyday bathroom use.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Glass</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Glass enclosures can help a shower feel more open and allow more of the tile design to remain visible.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Vanities & Countertops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">A properly sized vanity can provide storage and countertop space without overwhelming the bathroom.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm sm:col-span-2 lg:col-span-2">
                <h3 className="font-semibold text-foreground text-lg mb-2">Shower Storage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Built-in niches and other storage solutions can keep frequently used bathroom items organized without adding unnecessary furniture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: WATER / MAINTENANCE SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Materials & Easy Maintenance
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Bathroom surfaces are exposed to water, cleaning products, humidity, and everyday use, so material selection matters.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For shower areas, we can help coordinate tile, grout, glass, fixtures, and other surfaces with the level of maintenance you&apos;re comfortable with.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 border border-border shadow-sm mb-6">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Practical design decisions can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-clean shower surfaces</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly planned tile layouts</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate grout selection</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower glass options</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Convenient storage</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Durable flooring</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixtures suited to everyday use</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A well-planned bathroom should not only look good when the remodel is finished. It should also be practical to maintain afterward.
            </p>
          </div>
        </section>

        {/* SECTION 14: COST SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Costing</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Fulton Ranch?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Fulton Ranch</strong> depends on the size of the bathroom, existing conditions, material selections, fixtures, shower or bathtub configuration, demolition, tile, vanity, glass, plumbing changes, and the overall project scope.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused bathroom update will have different requirements from a complete renovation.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Shower Update</h3>
                <p className="text-muted-foreground text-sm">A focused shower renovation may involve new tile, waterproofing, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">The project can involve tub removal, shower preparation, tile, fixtures, storage, flooring, and glass.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A larger renovation may combine a new shower, vanity, countertop, flooring, tile, lighting, fixtures, and storage.</p>
              </div>

              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Complete Bathroom Renovation</h3>
                <p className="text-muted-foreground text-sm">A full renovation can involve several areas of the bathroom and may include changes to layout, surfaces, fixtures, storage, and finishes.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                View the Bathroom Remodeling Cost Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 15: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Fulton Ranch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Because Fulton Ranch is located within Chandler, permit requirements for a bathroom renovation depend on the type and scope of work being performed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic updates can have different requirements from projects involving plumbing, electrical work, structural modifications, or other regulated work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The specific requirements should be confirmed for the planned project before work begins.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Chandler Bathroom Remodeling Permits →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Fulton Ranch" />

        {/* SECTION 16: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Fulton Ranch Bathroom Remodeling Process
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

        {/* SECTION 17: WHY ARZ SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Fulton Ranch Homeowners Choose ARZ Home Remodeling
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

        {/* SECTION 18: TECHNICAL EXPERTISE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              A Properly Prepared Shower Starts Behind the Tile
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A finished shower is more than the tile you see on the surface. The underlying shower assembly needs to be prepared for moisture exposure before the visible finishes are installed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Depending on the project, the remodeling process can involve:
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
                  <span>Proper drainage</span>
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
                  <span>Carefully planned transitions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Grout and sealant</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              The exact materials and installation approach depend on the design and existing conditions of the bathroom.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Our Shower Remodeling Approach →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 19: PROJECTS SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Fulton Ranch Bathroom Remodeling Projects
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every bathroom renovation has different requirements, so completed projects are one of the best ways to understand our approach.
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

        {/* SECTION 20: FAQ SECTION */}
        <ServiceFAQ faqs={fultonRanchFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 21: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Fulton Ranch Bathroom?"
          description="Whether you're replacing an outdated bathtub, creating a walk-in shower, updating a primary bathroom, or planning a complete renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your bathroom, remodeling options, and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
