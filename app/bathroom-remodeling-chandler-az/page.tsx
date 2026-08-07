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
  title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling in chandler, AZ",
    "bathroom remodeling chandler",
    "bathroom remodel chandler az",
    "bathroom renovation chandler",
    "walk-in shower remodeling chandler",
    "tub-to-shower conversion chandler"
  ],
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
  },
};

const chandlerFaqs = [
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "Bathroom remodeling costs vary according to the size of the bathroom, materials, fixtures, shower configuration, demolition, plumbing changes, tile, cabinetry, glass, and overall project scope. A focused update will generally have a different budget from a complete bathroom renovation.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline depends on the size and complexity of the project, the amount of demolition, plumbing or electrical changes, tile work, material availability, and other project-specific factors.",
  },
  {
    question: "Can I convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an underused bathtub with a walk-in shower designed around the available space.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Small bathroom remodeling can focus on better fixture placement, storage, shower configuration, lighting, and material selection.",
  },
  {
    question: "Do you remodel primary bathrooms?",
    answer:
      "Yes. Primary bathroom renovations can include shower redesigns, vanities, countertops, flooring, tile, lighting, fixtures, storage, and other improvements.",
  },
  {
    question: "Can you remodel a guest bathroom?",
    answer:
      "Yes. Guest bathroom remodeling can include the tub or shower, vanity, flooring, tile, lighting, fixtures, and other finishes.",
  },
  {
    question: "Can a bathroom be remodeled without changing the layout?",
    answer:
      "In many cases, yes. Keeping the existing layout can sometimes simplify the project, although the best approach depends on the condition and functionality of the current bathroom.",
  },
  {
    question: "What should I choose: a bathtub or walk-in shower?",
    answer:
      "That depends on how you use the bathroom. A walk-in shower may make sense when accessibility and everyday convenience are priorities, while a bathtub can remain useful for households that regularly need or prefer one.",
  },
  {
    question: "Can you make a bathroom easier to use?",
    answer:
      "Yes. Depending on the space, options can include low-threshold showers, curbless entries, shower seating, handheld fixtures, grab-bar preparation, improved lighting, and other accessibility-focused features.",
  },
  {
    question: "Do bathroom remodels in Chandler require permits?",
    answer:
      "It depends on the scope of work. Projects involving plumbing, electrical, structural changes, or other regulated work may have different requirements from cosmetic updates. The specific project should be reviewed for applicable Chandler requirements.",
  },
  {
    question: "What areas of Chandler do you serve?",
    answer:
      "We serve homeowners throughout Chandler, including areas such as Dobson Ranch, Warner Ranch, Ocotillo, Fulton Ranch, Sun Lakes, Chandler Heights, Gila Springs, Fox Crossing, Cooper Commons, and Downtown Chandler, subject to your actual service coverage.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and practical walk-in shower designed around your bathroom's available space.",
    detail:
      "Depending on the project, your new shower can include custom tile, built-in niches, seating, glass enclosures, modern shower fixtures, low-threshold entry, or a curbless design.",
    cta: "Learn More About Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use your bathtub, converting it into a shower can make better use of the available space.",
    detail:
      "A tub-to-shower conversion in Chandler can include removal of the existing tub, shower waterproofing, wall and floor tile, shower fixtures, storage niches, and a new glass enclosure. The finished design can be planned around the existing footprint while giving the bathroom a more open and functional feel.",
    cta: "Explore Tub-to-Shower Conversions →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Your primary bathroom should work for your daily routine while reflecting your preferred style.",
    detail:
      "A primary bathroom remodel in Chandler can include a redesigned shower, new vanity and countertop, bathroom flooring, custom tile, lighting, fixtures, storage, and other improvements. Whether you're looking for a clean modern design or a more detailed spa-inspired bathroom, we can help organize the project around your priorities.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest and hall bathrooms often need to serve multiple purposes while making efficient use of limited space.",
    detail:
      "A guest bathroom remodel can include a new tub or shower, vanity, countertop, flooring, wall tile, lighting, fixtures, and updated finishes. We focus on practical layouts and durable materials that make the bathroom easier to use and maintain.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "A small bathroom does not necessarily need more square footage to feel better.",
    detail:
      "The right layout, shower configuration, vanity size, storage, lighting, and material selection can make a compact bathroom feel more organized and functional. Our small bathroom remodeling solutions can include space-saving vanities, walk-in showers, recessed niches, larger-format tile, improved lighting, and more efficient fixture placement.",
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "If your bathroom needs to be easier to enter and use, accessibility-focused remodeling can make everyday routines more comfortable.",
    detail:
      "Options may include: low-threshold showers, curbless shower entries, shower seating, grab-bar preparation, handheld shower fixtures, slip-conscious flooring, improved lighting, and more usable clearances.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
];

const supportingServices = [
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Update shower walls, bathroom floors, backsplashes, niches, and accent areas with tile selected to complement the overall design. We can help coordinate tile size, pattern, texture, and finish so the different surfaces work together.",
  },
  {
    title: "Bathroom Flooring",
    href: "/bathroom-flooring-installation/",
    description:
      "Bathroom flooring needs to suit a moisture-prone environment while providing the appearance and everyday practicality you want. Options can include different tile sizes, patterns, textures, and finishes depending on the room and design.",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "A new vanity can improve both storage and the appearance of the bathroom. We can coordinate cabinet configuration, countertop, sink, hardware, and finish with the rest of the renovation.",
  },
  {
    title: "Shower Glass & Enclosures",
    href: "/shower-remodeling/",
    description:
      "The right glass enclosure can make a shower feel more open while providing a clean finished appearance. Depending on the layout, options can include frameless and semi-frameless configurations.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We discuss what you want to change, what isn't working in the current bathroom, your preferred style, and the goals for the project.",
  },
  {
    step: "02",
    title: "Bathroom Evaluation",
    body: "We review the existing layout and identify the areas that may affect the renovation, including the shower, tub, vanity, flooring, plumbing, lighting, and available space.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "We organize the remodeling scope and discuss the major changes, materials, fixtures, finishes, and design priorities.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Tile, flooring, vanities, countertops, shower fixtures, glass, hardware, and other finishes are selected according to the planned design.",
  },
  {
    step: "05",
    title: "Remodeling",
    body: "The existing materials are removed as needed, the space is prepared, and the new bathroom components are installed according to the agreed project scope.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "Once the work is complete, we review the finished bathroom and the completed project scope with you.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Clear Project Scope",
    body: "We explain the planned work so you can understand what is included in your bathroom renovation.",
  },
  {
    title: "Design Guidance",
    body: "We help you think through shower layouts, tile, vanities, storage, fixtures, finishes, and other design decisions.",
  },
  {
    title: "Practical Solutions",
    body: "The goal is to create a bathroom that looks good while still working well for everyday use.",
  },
  {
    title: "Local Chandler Service",
    body: "We work with homeowners throughout Chandler and surrounding East Valley communities.",
  },
  {
    title: "Attention to the Finished Details",
    body: "Tile layout, shower transitions, storage niches, vanities, glass, fixtures, and finishing details all contribute to the final result.",
  },
];

const projectExamples = [
  {
    title: "Master Bathroom Remodel — Dobson Ranch, Chandler",
    description: "Bathroom renovation focused on updating the shower area, finishes, and overall functionality.",
  },
  {
    title: "Primary Bathroom Update — Ocotillo",
    description: "Updated vanity and surface finishes designed around the existing bathroom layout.",
  },
  {
    title: "Guest Bathroom Update — Sun Lakes",
    description: "Updated tile, tub/shower area, and bathroom finishes for a cleaner and more practical space.",
  },
  {
    title: "Bathroom Renovation — Fulton Ranch",
    description: "Updated bathroom elements with attention to shower design, finishes, storage, and everyday usability.",
  },
];

const chandlerNeighborhoods = [
  "Dobson Ranch",
  "Warner Ranch",
  "Ocotillo",
  "Fulton Ranch",
  "Sun Lakes",
  "Chandler Heights",
  "Gila Springs",
  "Fox Crossing",
  "Cooper Commons",
  "Downtown Chandler",
];

const chandlerZipCodes = ["85224", "85225", "85226", "85248", "85249", "85286"];

export default function ChandlerBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Chandler AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-chandler-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Bathroom remodeling in Chandler, AZ for walk-in showers, tub conversions, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <FAQSchema faqs={chandlerFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Chandler AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <Header />
      <main>
        {/* SECTION 2: HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Chandler, AZ"
          subtitle="Custom Bathroom Renovations for Chandler Homes"
          description="Transform an outdated bathroom into a space that feels more comfortable, functional, and suited to your everyday routine. ARZ Home Remodeling helps Chandler homeowners with bathroom remodels, walk-in showers, tub-to-shower conversions, bathroom tile, flooring, vanities, accessibility upgrades, and complete bathroom renovations. Whether you're updating a small guest bathroom or planning a complete primary bathroom remodel, we'll help you choose improvements that fit your space, style, and project goals."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          ]}
        />

        {/* SECTION 3: INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Designed Around Your Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An outdated bathroom can affect more than the appearance of your home. An inefficient layout, limited storage, worn tile, an old bathtub, or a difficult-to-use shower can make an everyday space frustrating to use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-foreground">bathroom remodel in Chandler, AZ</strong> gives you the opportunity to improve the way the room works while updating its appearance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Some homeowners want a focused renovation, such as replacing a bathtub with a walk-in shower or installing a new vanity. Others want to completely transform the bathroom with new tile, flooring, lighting, fixtures, storage, and a redesigned shower area.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we approach each project around the existing bathroom and the homeowner&apos;s goals. We help you determine what should change, what can remain, and which improvements will make the biggest difference to the finished space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Get a Free Bathroom Remodeling Estimate
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: MAIN SERVICE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Chandler Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Bathroom remodeling can range from a targeted shower upgrade to a complete renovation. We provide several remodeling solutions so you can choose the scope that makes sense for your home.
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

        {/* SECTION 5: SUPPORTING SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Quality Finishes</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Tile, Flooring, Vanities & Bathroom Finishes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A bathroom renovation is about more than the shower or bathtub. The materials throughout the room determine how the finished space looks, feels, and functions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {supportingServices.map((sup) => (
                <div key={sup.title} className="bg-secondary/60 rounded-xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{sup.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sup.description}</p>
                  </div>
                  <Link
                    href={sup.href}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline mt-auto"
                  >
                    Explore {sup.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: NEW USER-INTENT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Scope</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Type of Bathroom Remodel Does Your Home Need?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Not every bathroom requires a complete renovation. Sometimes the best solution is a focused upgrade. Other bathrooms benefit from a larger redesign.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  A Focused Bathroom Update May Make Sense If:
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The existing layout works well</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Your main concern is an outdated shower or tub</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The vanity needs replacement</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>You want new tile or flooring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The plumbing locations are suitable</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>You mainly want to refresh the appearance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-primary flex-shrink-0" />
                  A Complete Bathroom Renovation May Make Sense If:
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The existing layout no longer works</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multiple major components are outdated</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The shower and vanity both need replacement</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Storage is inadequate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>The bathroom needs accessibility improvements</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>You want to change the overall design</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plumbing or electrical changes are part of the project</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm italic">
              The right approach depends on the condition of the bathroom, your goals, and the scope of changes you want to make.
            </p>
          </div>
        </section>

        {/* SECTION 7: CHANDLER-SPECIFIC SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Considerations for Chandler Homes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Chandler includes a wide range of homes and neighborhoods, so bathroom remodeling projects can vary considerably from one property to another.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An older bathroom may need attention to existing finishes, shower construction, plumbing, storage, or an inefficient layout. A newer bathroom may require fewer structural changes and focus more heavily on tile, vanities, shower upgrades, lighting, and design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Arizona&apos;s dry climate and mineral-heavy water conditions can also influence how homeowners think about bathroom materials and maintenance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For that reason, we don&apos;t recommend the same bathroom design for every home. The existing space should be evaluated first so the remodeling plan fits the room rather than forcing the room into a predetermined design.
            </p>
          </div>
        </section>

        {/* SECTION 8: HARD-WATER SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Choosing Bathroom Materials for Chandler
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Mineral buildup can affect shower glass, fixtures, tile surfaces, and grout over time. Material selection and routine maintenance therefore matter when planning a bathroom renovation in Chandler.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For shower areas, we can help you select surfaces and finishes that are practical for everyday cleaning and suitable for the way the bathroom will be used.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Depending on the design, options may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Porcelain or ceramic tile</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Carefully selected grout systems</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Glass shower enclosures</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Low-maintenance wall surfaces</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Easy-to-clean flooring</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Recessed shower storage</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              The goal is not simply to choose attractive materials. It is to create a bathroom that remains practical to maintain after the remodeling project is complete.
            </p>
          </div>
        </section>

        {/* SECTION 9: COST SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Chandler, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Chandler</strong> depends on the size of the room, the condition of the existing space, material selections, fixtures, shower configuration, demolition, plumbing changes, tile, cabinetry, glass, and the overall project scope.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused update can have a very different cost from a complete bathroom renovation.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Guest Bathroom Update</h3>
                <p className="text-muted-foreground text-sm">A focused update may include a vanity, fixtures, flooring, paint, or other selected improvements.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Guest Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A larger project may include the tub or shower, tile, vanity, flooring, fixtures, and other finishes.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground text-sm">The scope can include tub removal, shower preparation, waterproofing, tile, fixtures, storage, and glass.</p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-lg mb-1">Primary Bathroom Remodel</h3>
                <p className="text-muted-foreground text-sm">A larger renovation may combine a new shower, vanity, flooring, tile, lighting, fixtures, storage, and other improvements.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/bathroom-remodeling-cost-chandler-az/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                View the Chandler Bathroom Remodeling Cost Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Step-by-Step</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Bathroom Remodeling Process
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A clear process helps you understand what happens before, during, and after your bathroom renovation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-4xl font-bold text-primary/25 font-mono">{step.step}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-2 text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11 & 12: LOCAL SERVICE AREA & NEIGHBORHOODS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Area</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
              Bathroom Remodeling Throughout Chandler, AZ
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              ARZ Home Remodeling serves homeowners throughout Chandler and nearby communities.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-10 mb-4 text-foreground">
              Serving Chandler Neighborhoods With Local Remodeling Services
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Bathroom remodeling projects can look very different depending on the home, existing layout, and homeowner&apos;s goals.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Whether you&apos;re updating a bathroom in <strong className="font-semibold text-foreground">Dobson Ranch, Warner Ranch, Ocotillo, Fulton Ranch, Sun Lakes, Chandler Heights, or another Chandler neighborhood</strong>, we begin with the existing space and plan the renovation around what you want to accomplish.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {chandlerNeighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              We also serve homeowners across Chandler ZIP codes including{" "}
              <span className="text-primary font-semibold">
                {chandlerZipCodes.join(", ")}
              </span>
              , where applicable to your actual service coverage.
            </p>

            <p className="text-muted-foreground text-sm italic">
              If you&apos;re unsure whether your address is within our service area, contact us and we&apos;ll confirm.
            </p>
          </div>
        </section>

        {/* SECTION 13: PERMIT SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Do You Need a Permit for a Bathroom Remodel in Chandler?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Permit requirements can depend on the type and scope of work being performed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cosmetic changes can have different requirements from projects involving plumbing, electrical work, structural modifications, or other regulated construction activities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Before beginning a project, the required local requirements should be confirmed for the specific scope of work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For Chandler homeowners, the City&apos;s Development Services resources provide information about permitting, plan review, and inspections.
            </p>
            <div>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Learn More About Chandler Permits →
              </Link>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Chandler" />

        {/* SECTION 14: WHY ARZ SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Work With Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What You Can Expect From ARZ Home Remodeling
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Choosing a remodeling company is about more than selecting materials. You also want to understand how the project will be planned and communicated.
              </p>
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

        {/* SECTION 15: PROJECT PORTFOLIO */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Projects in Chandler
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Seeing completed work can help you understand the type of remodeling we provide. Our portfolio can include bathroom transformations involving showers, vanities, tile, flooring, storage, and complete renovations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {projectExamples.map((proj) => (
                <div key={proj.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">Project Example</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/gallery/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                View the Full Bathroom Remodeling Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE PREVIEW */}
        <GalleryPreview />

        {/* SECTION 16: TECHNICAL QUALITY SECTION */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              How We Approach Shower Construction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              A beautiful shower also needs to be properly prepared underneath the visible tile and glass.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Depending on the project, the shower assembly may involve:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Proper substrate preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Correct shower drainage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Appropriate tile-setting materials</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Carefully planned transitions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Shower niches and seating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Properly installed fixtures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Suitable grout and sealant systems</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The exact materials and construction methods depend on the project design and existing conditions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For homeowners, the important point is that the finished tile is only one part of a properly built shower. The layers beneath it need to be planned correctly as well.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Explore Our Shower Remodeling Process →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 17: DESIGN SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Ideas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Design Ideas for Chandler Homes
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The best bathroom design isn&apos;t necessarily the most expensive one. It should solve the problems you actually have with the existing space.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Larger Walk-In Showers</h3>
                <p className="text-muted-foreground text-sm">Replacing an underused tub can create a more open shower area.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Built-In Shower Storage</h3>
                <p className="text-muted-foreground text-sm">Niches can keep shampoo, soap, and other daily items organized without adding freestanding storage.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Modern Vanities</h3>
                <p className="text-muted-foreground text-sm">A properly sized vanity can improve both storage and countertop space.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Larger-Format Tile</h3>
                <p className="text-muted-foreground text-sm">Larger tile can create a cleaner visual appearance while reducing the number of grout joints.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Better Lighting</h3>
                <p className="text-muted-foreground text-sm">Layered bathroom lighting can improve visibility around mirrors, vanities, and shower areas.</p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Easy-to-Use Shower Features</h3>
                <p className="text-muted-foreground text-sm">Handheld fixtures, seating, low-threshold entries, and carefully planned controls can improve everyday convenience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 18: FAQ SECTION */}
        <ServiceFAQ faqs={chandlerFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        {/* SECTION 19: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Chandler Bathroom?"
          description="Whether you're replacing an outdated bathtub, planning a new walk-in shower, updating a guest bathroom, or completely redesigning your primary bathroom, the first step is understanding what your existing space needs. Tell us what you'd like to change and we'll discuss your project, possible solutions, materials, and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
