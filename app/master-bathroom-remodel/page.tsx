import Testimonials from "@/components/home/testimonials";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import ServiceProcess from "@/components/service-process";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import ContactSection from "@/components/home/contact-section";
import ServiceAreas from "@/components/home/service-areas";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

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

const masterIssues = [
  { title: "Outdated Builder Layout", description: "We remove awkward garden tubs and restrictive walls to create open, spacious master retreats." },
  { title: "Inadequate Storage & Sink Space", description: "We upgrade outdated single vanities into double-sink quartz counter setups with abundant storage." },
  { title: "Hard Water Wear & Mold Stains", description: "We replace worn grout and aging acrylic pans with stain-resistant porcelain and epoxy grout systems." }
];

const masterBenefits = [
  { title: "Personalized Daily Retreat", description: "Start and end your day in a spa-inspired sanctuary tailored specifically to your preferences." },
  { title: "Significant Equity Boost", description: "Master suite upgrades deliver high returns on investment in the Chandler housing market." },
  { title: "Improved Efficiency & Water Control", description: "Modern dual showerheads, thermostatic valves, and LED ambient lighting optimize energy and water use." }
];

const masterTips = [
  { title: "Plan Ample Storage Early", description: "Integrate custom recessed medicine cabinets and double vanity drawers during the initial design phase." },
  { title: "Opt for Epoxy Grout", description: "Protect your shower walls from Arizona's hard water scale with non-porous epoxy grout." },
  { title: "Layer Electrical & Task Lighting", description: "Combine dimmable ceiling recessed lights with eye-level vanity sconces for optimal lighting." }
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

        <ServiceProcess
          title="Master Bathroom Renovation Process"
          subtitle="Our Process"
          description="A systematic multi-stage approach designed to minimize disruption while delivering museum-quality craftsmanship."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Design Consultation", description: "We assess your current master suite layout and clarify your goals, style, and budget." },
            { number: "02", icon: "Ruler", title: "Custom Layout & Selection", description: "Choose custom cabinetry, stone slabs, tile patterns, and fixture finishes." },
            { number: "03", icon: "ShieldCheck", title: "Demolition & Prep", description: "Careful tear-out, structural wall adjustments, and plumbing/electrical rough-ins." },
            { number: "04", icon: "Wrench", title: "Waterproofing & Tile Setting", description: "Professional waterproofing installation followed by precision tile laying." },
            { number: "05", icon: "Sparkles", title: "Fixtures & Walkthrough", description: "Glass enclosure mounting, vanity setting, trim details, and final walkthrough." }
          ]}
        />

        <SubServices
          title="Complementary Services"
          subtitle="Complete Transformations"
          description="We handle every aspect of your master bath project, from tile to custom vanities."
          services={otherServices.map((s) => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve in Master Bathrooms"
          subtitle="Common Problems Fixed"
          description="We overcome complex structural and aesthetic challenges in Chandler master suites."
          issues={masterIssues}
        />

        <Benefits
          title="Benefits of a Master Bathroom Remodel"
          subtitle="Why Upgrade Your Master Bath"
          description="Discover how upgrading your master suite enhances comfort and home value."
          benefits={masterBenefits}
        />

        <Tips
          title="Master Bath Remodeling Tips"
          subtitle="Expert Best Practices"
          description="Insights from our master craftsmen to make your primary suite renovation a success."
          tips={masterTips}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Schedule your free in-home consultation today to discuss your vision, materials, and layout options."
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
