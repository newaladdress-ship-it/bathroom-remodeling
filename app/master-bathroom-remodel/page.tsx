import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema, PriceSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
  description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
  openGraph: {
    title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
    description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
    url: `${siteConfig.url}/master-bathroom-remodel/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-master-suite.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Luxury Master Bathroom Remodel in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
    description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
    images: [`${siteConfig.url}/images/og-master-suite.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/master-bathroom-remodel/`,
  },
};

const faqs = [
  {
    question: "What is included in a master bathroom remodel?",
    answer:
      "Our master bath remodels typically include converting old bathtubs into walk in tile showers with frameless glass enclosures, replacing low double vanities with premium quartz countertops, laying non slip porcelain flooring, updating LED lighting systems, and coordinating all Chandler city plumbing permits."
  },
  {
    question: "How long does a master bathroom remodel take in Chandler?",
    answer:
      "A comprehensive master bathroom remodel typically takes three to five weeks depending on scope. Custom cabinetry, detailed tile work, and layout changes can extend the timeline. We provide a firm schedule in your written proposal."
  },
  {
    question: "How much does a master bathroom remodel cost in Chandler, AZ?",
    answer:
      "Master bathroom remodeling costs vary depending on the size of the space, material selections (like custom cabinetry or quartz slabs), and whether you are shifting plumbing lines or reconfiguring the layout. We provide free on-site consultations and detailed, line-item written estimates before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Do you handle permits for master bathroom remodels in Chandler?",
    answer:
      "Yes. Anytime structural changes, plumbing relocation, or electrical upgrades are involved, we pull all required Chandler city permits and manage the inspection process."
  },
  {
    question: "What features are popular in master bathrooms in Chandler?",
    answer:
      "Chandler homeowners most often request curbless walk-in showers with frameless glass, double vanities with quartz countertops, heated tile floors, rainfall showerheads, and custom tile work. We also recommend epoxy grout to combat Chandler's hard water mineral staining."
  }
];

const included = [
  "Personalized bathroom layout planning",
  "Spacious walk-in shower with frameless glass enclosure",
  "Premium wall and floor tile installation",
  "Built-in shower niches and storage solutions",
  "Custom vanity and countertop installation",
  "Single or double-sink plumbing upgrades",
  "Luxury vinyl plank or porcelain flooring",
  "Modern lighting, mirrors, and ventilation improvements",
  "Plumbing and electrical coordination",
  "Final quality inspection and homeowner walkthrough",
];

const otherServices = getRelatedServices("/master-bathroom-remodel/");

export default function MasterBathPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Master Bathroom Remodel", url: "https://arzhomeremodeling.com/master-bathroom-remodel/" } ]} />
<ServiceSchema
        serviceName="Master Bathroom Remodel in Chandler, Arizona"
        serviceDescription="Full-scope master bathroom renovations in Chandler, AZ. Shower enclosures, vanity replacement, tile flooring, plumbing and lighting upgrades managed by one professional Arizona contractor."
        serviceUrl={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <FAQSchema faqs={faqs} />
      <PriceSchema
        serviceName="Master Bathroom Remodel Chandler AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Luxury Master Bathroom Renovations for Chandler Homes"
          subtitle="Luxury Transformations Managed by One Local Team"
          description="Upgrade your primary bathroom into a comfortable, functional retreat with personalized layouts, premium tile, custom vanities, spacious showers, elegant lighting, and expertly crafted finishes. ARZ Home Remodeling designs beautiful spaces that improve everyday living while complementing the style of homes throughout Chandler and the surrounding East Valley."
          image="/images/projects/modern-double-vanity-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Master Bathroom Remodel", url: `${siteConfig.url}/master-bathroom-remodel` },
          ]}
        />

        {/* OVERVIEW */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-6 text-foreground">
                    Complete Luxury Bathroom Renovation Services
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Whether you&apos;re updating an outdated primary bathroom or creating a personalized retreat, ARZ Home Remodeling delivers complete renovation solutions from design through final completion. Every project is managed by one experienced team, giving you a streamlined remodeling experience with consistent communication, transparent pricing, and professional craftsmanship.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    If you&apos;re comparing budgets before starting your project, explore our <Link href="/master-bathroom-remodel-cost/" className="text-primary underline font-medium hover:text-primary/80 transition-colors">Master Bathroom Remodel Cost in Chandler</Link> guide to learn what influences pricing, material selections, and renovation scope.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our team coordinates every stage of construction, including plumbing modifications, electrical updates, flooring installation, cabinetry, tile work, and finishing details, so you don&apos;t have to manage multiple contractors.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-muted/30 p-8 rounded-2xl border border-border h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3.5">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* TYPICAL PROJECT TIMELINE BANNER */}
            <div className="mt-10 p-6 lg:p-8 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Project Duration</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Typical Project Timeline</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                Most primary bathroom renovations are completed within <strong className="text-foreground">three to five weeks</strong>, depending on the design, material selections, and overall project scope.
              </p>
            </div>
          </div>
        </section>

        {/* COST / INVESTMENT / TIMELINE / WARRANTY CALLOUT */}
        <section className="py-12 lg:py-16 bg-muted/30 border-y border-border/50">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-2xl border border-border flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Investment</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Personalized Project Quote
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every renovation is different, so we provide a detailed, no-obligation estimate based on your bathroom layout, material selections, and project scope. You&apos;ll receive transparent pricing with no hidden surprises.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Timeline</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Typical Completion: 3–5 Weeks
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most primary bathroom renovations are completed within three to five weeks. Before work begins, you&apos;ll receive a written project schedule outlining each phase of construction and expected milestones.
                </p>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Warranty</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  2-Year Workmanship Coverage
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your investment is backed by a 2-year workmanship warranty, giving you added confidence that your newly renovated bathroom has been completed with lasting quality and professional craftsmanship.
                </p>
              </div>
            </div>

            {/* FINANCING BANNER */}
            <div className="mt-8 p-6 lg:p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Flexible Financing Available
              </h3>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                Make your renovation more affordable with convenient payment options for qualified homeowners. Learn more about our <Link href="/financing/" className="text-primary underline font-semibold hover:text-primary/80 transition-colors">0% APR Bathroom Remodeling Financing</Link> and find a payment plan that fits your budget.
              </p>
            </div>
          </div>
        </section>

        {/* CUSTOM VANITY & LUXURY SHOWER FEATURES */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Custom Vanity & Luxury Shower Features
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              A well-designed primary bathroom should balance comfort, storage, and everyday functionality. ARZ Home Remodeling creates personalized layouts with upgraded plumbing, premium fixtures, and carefully planned features that improve both appearance and usability for homeowners throughout Chandler and nearby East Valley communities.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 bg-muted/30 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  Double Vanity Plumbing Upgrades
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Many older homes were built with a single vanity that no longer meets the needs of modern households. We reconfigure plumbing systems to accommodate dual sinks, improve functionality, and create additional countertop and storage space while ensuring all work complies with current plumbing standards.
                </p>
              </div>
              <div className="p-8 bg-muted/30 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  Multi-Function Shower Systems
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Luxury shower spaces can include rainfall showerheads, handheld wands, body sprays, and thermostatic controls for a more comfortable bathing experience. Our team plans water supply, fixture placement, and plumbing layouts to help maintain reliable performance while complementing your bathroom&apos;s overall design.
                </p>
              </div>
              <div className="p-8 bg-muted/30 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  Premium Lighting & Mirror Design
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Proper lighting plays an important role in both the appearance and functionality of a primary bathroom. We install layered lighting solutions, illuminated mirrors, decorative sconces, and moisture-rated fixtures that improve visibility while creating a warm, relaxing atmosphere. Whether you prefer a modern minimalist style or a timeless design, we help you choose lighting that complements your vanity, tile, and overall bathroom layout.
                </p>
              </div>
              <div className="p-8 bg-muted/30 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  Custom Storage & Built-In Cabinetry
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A well-organized bathroom should provide storage without sacrificing floor space. We design and install custom cabinetry, linen towers, recessed shelving, built-in niches, and vanity storage solutions that keep everyday essentials neatly organized. Thoughtful storage planning helps reduce clutter while creating a cleaner, more spacious environment that fits your family&apos;s daily routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-muted/30 border-t border-b border-border">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Bathroom Remodeling Chandler AZ
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Our full Chandler services overview</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Chandler Bathroom Remodel Cost Guide
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Detailed pricing for every project type</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <SubServices
          title="Complementary Services"
          subtitle="Complete Transformations"
          description="We handle every aspect of your master bath project, from tile to custom vanities."
          services={otherServices.map((s) => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
