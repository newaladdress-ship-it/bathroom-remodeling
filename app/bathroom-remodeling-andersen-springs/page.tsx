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
  title: "Bathroom Remodeling Andersen Springs | Chandler AZ",
  description:
    "Bathroom remodeling in Andersen Springs, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling Andersen Springs",
    "bathroom remodel Andersen Springs",
    "bathroom renovation Andersen Springs",
    "Andersen Springs bathroom remodeling",
    "walk-in shower Andersen Springs",
    "tub-to-shower conversion Andersen Springs",
    "bathroom tile installation Andersen Springs",
    "bathroom remodeling Chandler AZ"
  ],
  openGraph: {
    title: "Bathroom Remodeling Andersen Springs | Chandler AZ",
    description:
      "Bathroom remodeling in Andersen Springs, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-andersen-springs/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Andersen Springs Chandler AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Andersen Springs | Chandler AZ",
    description:
      "Bathroom remodeling in Andersen Springs, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-andersen-springs/`,
  },
};

const andersenSpringsFaqs = [
  {
    question: "Do I need a permit for a bathroom remodel in Andersen Springs?",
    answer:
      "Permit requirements depend on the scope of work. Plumbing changes, electrical modifications, structural work, and certain layout changes may require permits or inspections through the City of Chandler.",
  },
  {
    question: "How long does a bathroom remodel take in Andersen Springs?",
    answer:
      "The timeline depends on the bathroom size, design, material availability, demolition requirements, and whether plumbing or electrical work is being modified. A project-specific schedule can be provided after the initial evaluation.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a custom walk-in shower while using the available bathroom footprint efficiently.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not always require remodeling the entire room. Depending on the condition of the existing space, a shower-focused renovation may be an appropriate option.",
  },
  {
    question: "What type of tile is best for an Andersen Springs bathroom?",
    answer:
      "Porcelain is a popular choice because it offers durability and low water absorption. The right tile depends on where it will be installed, the desired appearance, maintenance requirements, and budget.",
  },
  {
    question: "Do you remodel older Andersen Springs bathrooms?",
    answer:
      "Yes. Existing bathrooms can be evaluated for layout, finishes, plumbing, waterproofing, storage, lighting, and accessibility improvements before deciding which upgrades are worthwhile.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open walk-in design.",
    detail:
      "Options include custom tile, frameless glass, built-in niches, shower seating, handheld fixtures, and lower-entry configurations.",
    cta: "Learn More →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Turn an underused bathtub into a practical walk-in shower designed around your existing bathroom.",
    detail:
      "We coordinate demolition, surface preparation, waterproofing, tile installation, fixtures, and glass enclosure installation.",
    cta: "Learn More →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Refresh your bathroom with porcelain, ceramic, or other suitable tile selections.",
    detail:
      "We focus on proper layout, substrate preparation, grout joints, and clean finishing details for walls, floors, surrounds, and backsplashes.",
    cta: "Learn More →",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    body: "We discuss your bathroom, the problems you want to solve, your preferred style, and the overall scope of the renovation.",
  },
  {
    step: "2",
    title: "In-Home Evaluation",
    body: "We review the existing layout, measure the space, inspect visible conditions, and identify plumbing, electrical, or structural considerations.",
  },
  {
    step: "3",
    title: "Project Scope & Proposal",
    body: "You receive a clear proposal outlining the planned work, materials, and project requirements.",
  },
  {
    step: "4",
    title: "Design & Material Selection",
    body: "Choose your tile, vanity, countertop, fixtures, glass, flooring, lighting, and other finishes.",
  },
  {
    step: "5",
    title: "Construction",
    body: "The project moves through demolition, preparation, waterproofing where applicable, installation, finishing, and cleanup.",
  },
  {
    step: "6",
    title: "Final Walkthrough",
    body: "We review the completed bathroom with you and address any remaining project details before completion.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Local Remodeling Focus",
    body: "We work with homeowners throughout Andersen Springs and surrounding Chandler communities, designing renovations around the existing home.",
  },
  {
    title: "Detailed Written Proposals",
    body: "Before construction begins, we outline the planned work and selected materials so you understand the project scope.",
  },
  {
    title: "Complete Bathroom Coordination",
    body: "From demolition and preparation through tile, fixtures, vanities, plumbing coordination, and finishing work, we organize the major stages.",
  },
  {
    title: "Quality-Focused Installation",
    body: "We pay attention to the details that are often hidden behind finished surfaces, including waterproofing, substrate preparation, and tile layout.",
  },
  {
    title: "Practical Material Selection",
    body: "We help homeowners choose materials based on appearance, maintenance, durability, and how the bathroom will actually be used.",
  },
  {
    title: "Clear Project Communication",
    body: "You receive a clear understanding of the work being performed, expected project stages, and decisions needed as construction progresses.",
  },
];

const broaderTypes = [
  {
    title: "Master Bathroom Remodeling",
    desc: "Upgrade an outdated primary bathroom with a new shower, vanity, tile, flooring, lighting, plumbing fixtures, and storage. Layout improvements can also help make the space easier to use.",
  },
  {
    title: "Guest Bathroom Updates",
    desc: "Give an older guest bathroom a cleaner, more functional design with updated tile, vanity storage, fixtures, flooring, lighting, and shower or tub finishes.",
  },
  {
    title: "Small Bathroom Improvements",
    desc: "When space is limited, thoughtful fixture selection and storage planning can make a noticeable difference. Compact vanities, recessed niches, glass shower enclosures, and properly scaled tile help the room feel more open.",
  },
];

export default function AndersenSpringsBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Andersen Springs",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-andersen-springs/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling Andersen Springs"
        serviceDescription="Bathroom remodeling in Andersen Springs, Chandler AZ. Custom showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-andersen-springs/`}
      />
      <FAQSchema faqs={andersenSpringsFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Andersen Springs"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-andersen-springs/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Andersen Springs, Chandler AZ"
          subtitle="Bathroom Remodeling for Established Andersen Springs Homes"
          description="Update your Andersen Springs bathroom with a practical, custom design built around your home's layout. From walk-in showers and tub conversions to tile, vanities, and complete renovations, ARZ Home Remodeling helps homeowners create comfortable, modern spaces."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Andersen Springs", url: `${siteConfig.url}/bathroom-remodeling-andersen-springs/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION / LOCAL RELEVANCE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations for Andersen Springs Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Andersen Springs is an established Chandler community with mature landscaping, neighborhood lakes, and homes that reflect the construction styles of the late 1980s and 1990s. As these properties age, bathrooms may have outdated tubs, older vanities, worn flooring, inefficient lighting, or layouts that no longer fit the way homeowners use the space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides <strong className="font-semibold text-foreground">bathroom remodeling in Andersen Springs</strong> with designs tailored to the existing home. Depending on the project, we can update a tub or shower, improve storage, replace tile and flooring, install a new vanity, or redesign the entire bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For tiled shower projects, we focus on proper substrate preparation, moisture management, tile installation, and finish details. We also help homeowners select materials that are practical for everyday use, including porcelain tile, quartz surfaces, durable fixtures, and easy-to-maintain shower finishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for a Free In-Home Consultation
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

        {/* SECTION 4: LOCAL REMODELING CONTEXT */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Remodeling Bathrooms in Andersen Springs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom renovations in Andersen Springs often involve working within an existing floor plan rather than starting with a completely new space. That makes careful planning important, especially when plumbing locations, walls, flooring, and older finishes need to be considered together.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Homes around <strong className="font-semibold text-foreground">Dobson Road, Alma School Road, and Ray Road</strong> can have different layouts and renovation requirements. Our approach begins with evaluating the existing bathroom and identifying which improvements will provide the most practical result.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Common Andersen Springs Bathroom Updates include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replace an outdated tub with a walk-in shower</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Upgrade a builder-grade shower or tub surround</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Install new bathroom tile and flooring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Replace single or double vanities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Add quartz countertops and additional storage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improve shower lighting and ventilation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Add recessed niches and built-in shower seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Upgrade plumbing fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Improve accessibility with a lower-entry shower</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Complete a full bathroom renovation</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is to improve the bathroom without adding unnecessary work or features that do not suit the home.
            </p>
          </div>
        </section>

        {/* SECTION 5: PROJECT EXAMPLE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Recent Andersen Springs Bathroom Remodeling Example
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              One Andersen Springs renovation involved updating an older master bathroom with a dated layout and finishes. The project included removing the existing bathroom finishes, improving the shower area, installing a custom walk-in shower, and replacing the vanity and countertop.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Large-format porcelain tile was used for the shower walls, while smaller slip-resistant tile provided additional traction on the shower floor. The updated design also included a frameless glass enclosure, double vanity, quartz countertop, and improved lighting.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The result was a more functional bathroom with updated finishes while maintaining a layout appropriate for the existing home.
            </p>
          </div>
        </section>

        {/* SECTION 6: PERMITS & LOCAL PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Andersen Springs Remodeling Permits & Inspections
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Andersen Springs is within the <strong className="font-semibold text-foreground">City of Chandler</strong>, so certain remodeling work may require permits and inspections depending on the scope of the project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Bathroom renovations involving plumbing changes, electrical modifications, structural alterations, or other regulated work should be evaluated for applicable permit requirements before construction begins.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              When permitting is required, ARZ Home Remodeling can help coordinate the project documentation and inspection process so the work progresses according to the applicable local requirements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This is particularly important when a renovation involves moving plumbing, modifying walls, changing electrical circuits, or substantially altering the bathroom layout.
            </p>
          </div>
        </section>

        {/* SECTION 7: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Bathroom Remodeling Services in Andersen Springs
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* SECTION 8: BROADER BATHROOM REMODELING SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Custom Remodeling</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Custom Bathroom Remodeling for Andersen Springs Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A complete bathroom renovation can involve much more than replacing a shower. We can coordinate multiple improvements to create a cohesive space that works with your home&apos;s existing layout.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {broaderTypes.map((type) => (
                <div key={type.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: TECHNICAL / QUALITY SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Built Around Proper Waterproofing & Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              A bathroom remodel needs more than attractive finishes. The materials behind the tile and the way the shower is constructed have a major effect on long-term performance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For tiled shower installations, we use appropriate waterproofing methods and carefully prepare the shower walls and floor before tile is installed. Where specified for the project, <strong className="font-semibold text-foreground">Schluter-KERDI</strong> waterproofing products can be used as part of the shower assembly.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                We also pay attention to:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper shower waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Drain and slope preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Tile substrate preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Thin-set and grout selection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower floor traction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Expansion and movement considerations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper fixture installation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass enclosure measurements</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Sealing and finishing details</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              This approach helps ensure that the finished bathroom looks good while the underlying installation is properly prepared.
            </p>
          </div>
        </section>

        {/* SECTION 10: WHY CHOOSE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Why Andersen Springs Homeowners Choose ARZ
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

        {/* SECTION 11: HARD WATER SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Materials for Chandler&apos;s Hard Water
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Mineral deposits can become noticeable on shower glass, faucets, tile, and grout when water evaporates on bathroom surfaces. Choosing appropriate materials and maintaining them properly can make the bathroom easier to keep clean.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For Andersen Springs bathroom renovations, we can recommend:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Epoxy Grout</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Used where appropriate for the application to reduce absorption and simplify maintenance.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Porcelain Tile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Durable, low-absorption surfaces ideal for humid bathroom environments.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Quartz Countertops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ideal for vanity areas where a non-porous, stain-resistant surface is desirable.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">Glass Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Protective glass treatments when suitable for the shower enclosure to make routine cleaning easier.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Material selection depends on the specific bathroom, design, budget, and maintenance preferences.
            </p>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Andersen Springs" />

        {/* SECTION 12: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Andersen Springs Bathroom Remodeling Process
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

        {/* SECTION 13: FAQ SECTION */}
        <ServiceFAQ faqs={andersenSpringsFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Andersen Springs Bathroom?"
          description="Update your Andersen Springs bathroom with a practical, custom design built around your home's layout. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
