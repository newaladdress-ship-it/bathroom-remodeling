import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { getRelatedServices } from "@/lib/bathroom-services";

const Testimonials = dynamic(() => import("@/components/home/testimonials"));
const ServiceCTA = dynamic(() => import("@/components/service-cta"));
const ServiceFAQ = dynamic(() => import("@/components/service-faq"));
const ServiceProcess = dynamic(() => import("@/components/service-process"));
const IssuesSolved = dynamic(() => import("@/components/issues-solved"));
const Benefits = dynamic(() => import("@/components/benefits"));
const Tips = dynamic(() => import("@/components/tips"));
const ContactSection = dynamic(() => import("@/components/home/contact-section"));
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"));
const SubServices = dynamic(() => import("@/components/sub-services"));

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
        serviceDescription="Full-scope master bathroom renovations in Chandler, AZ. Shower enclosures, vanity replacement, tile flooring, plumbing and lighting upgrades managed by one professional local team."
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
          title="Master Bathroom Remodeling in Chandler, AZ"
          subtitle="Luxury Transformations Managed by One Local Team"
          description="Transform your primary bathroom with custom master bathroom remodeling that combines luxury showers, freestanding soaking tubs, premium tile, custom vanities, elegant lighting, and expert craftsmanship to create a stylish, functional retreat backed by our 2-year workmanship warranty"
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Master Bathroom Remodel", url: `${siteConfig.url}/master-bathroom-remodel` },
          ]}
        />

        <ServiceProcess
          title="Master Bathroom Renovation Process"
          subtitle="Our Process"
          description="Every master bathroom renovation follows a carefully planned process that prioritizes efficient scheduling, quality craftsmanship, and attention to detail. From the initial consultation to the final walkthrough, we coordinate each stage to create a functional, personalized space that reflects your style while ensuring dependable performance and long-lasting durability."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Design Consultation", description: "We evaluate your existing bathroom layout, discuss design preferences, functionality goals, and recommend solutions tailored to your lifestyle and available space." },
            { number: "02", icon: "Ruler", title: "Custom Design & Material Selection", description: "Select custom cabinetry, quartz or stone countertops, luxury tile, premium fixtures, lighting, and finish options that complement your home's style." },
            { number: "03", icon: "ShieldCheck", title: "Demolition & Preparation", description: "Our team carefully removes outdated materials, completes structural adjustments when needed, and prepares plumbing, electrical, and framing for the new installation." },
            { number: "04", icon: "Wrench", title: "Waterproofing & Installation", description: "Advanced waterproofing systems, precision tile installation, and accurate fixture placement help create a durable, moisture-resistant bathroom built for everyday use." },
            { number: "05", icon: "Sparkles", title: "Final Walkthrough", description: "We complete detailed finishing work, inspect every installation, verify functionality, and ensure your newly remodeled master bathroom meets our quality standards before project completion." }
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
          description="Older master bathrooms often struggle with inefficient layouts, worn finishes, limited storage, and moisture-related concerns that reduce both comfort and functionality. Our remodeling solutions address these common challenges with thoughtful design, durable materials, and quality installation techniques that create a more practical and visually appealing primary bathroom."
          issues={[
            {
              title: "Outdated Bathroom Layout",
              description: "Replace oversized garden tubs, improve traffic flow, and reconfigure the space to create a more open, functional, and comfortable master suite.",
            },
            {
              title: "Limited Storage & Vanity Space",
              description: "Upgrade to custom double vanities, expanded cabinetry, and organized storage solutions that improve daily convenience while reducing countertop clutter.",
            },
            {
              title: "Moisture Damage & Surface Wear",
              description: "Modern waterproofing systems, porcelain tile, and durable grout materials help protect against mold, stains, and long-term water damage.",
            },
            {
              title: "Aging Fixtures & Poor Lighting",
              description: "Replace outdated fixtures with modern lighting, efficient plumbing components, and contemporary finishes that improve visibility, comfort, and everyday usability.",
            },
          ]}
        />

        <Benefits
          title="Benefits of a Master Bathroom Remodel"
          subtitle="Why Upgrade Your Master Bath"
          description="A professionally designed master bathroom enhances everyday comfort while improving functionality, storage, and long-term value. Thoughtful layouts, quality materials, and modern features create a relaxing environment that supports your lifestyle while making one of the most frequently used spaces in your home easier to enjoy and maintain."
          benefits={[
            {
              icon: "Sparkles",
              title: "Spa-Inspired Comfort",
              description: "Create a peaceful retreat with spacious showers, premium finishes, and carefully selected features designed for everyday relaxation.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Home Value",
              description: "A modern master bathroom can enhance your property's appeal, improve resale potential, and provide lasting value through timeless design.",
            },
            {
              icon: "Clock",
              title: "Improved Efficiency",
              description: "Energy-efficient lighting, water-saving fixtures, and updated plumbing systems help improve performance while reducing ongoing maintenance.",
            },
            {
              icon: "Layout",
              title: "Better Organization",
              description: "Custom cabinetry, double vanities, and smart storage solutions keep daily essentials organized while maximizing available space.",
            },
          ]}
        />

        <Tips
          title="Master Bathroom Remodeling Tips"
          subtitle="Expert Best Practices"
          description="Careful planning and quality materials help maximize the comfort, functionality, and longevity of your master bathroom. These practical recommendations can improve everyday usability, simplify maintenance, and ensure your remodeled space continues to perform beautifully for years to come."
          tips={[
            {
              title: "Plan Storage Around Your Routine",
              description: "Include custom cabinetry, recessed medicine cabinets, linen storage, and double vanity drawers during the design stage to keep everyday essentials organized without sacrificing valuable floor space.",
            },
            {
              title: "Choose Durable, Low-Maintenance Materials",
              description: "Select porcelain tile, quartz countertops, and moisture-resistant grout that withstand daily use, resist hard water buildup, and require less maintenance over time.",
            },
            {
              title: "Prioritize Lighting & Ventilation",
              description: "Combine layered LED lighting with a properly sized bathroom exhaust fan to improve visibility, reduce humidity, and help protect surfaces from mold and moisture-related issues.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Schedule your free in-home consultation today to discuss your vision, materials, and layout options."
        />
      </main>
      <Footer />
    </>
  );
}
