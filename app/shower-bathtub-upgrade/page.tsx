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
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: {
    absolute: "Shower Bathtub Upgrade | Chandler AZ Bathroom Remodeling"
  },
  description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore shower bathtub upgrade, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {
    title: "Shower Bathtub Upgrade | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore shower bathtub upgrade, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/shower-bathtub-upgrade`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-bathtub-upgrade-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower & Bathtub Upgrade - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Bathtub Upgrade | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore shower bathtub upgrade, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/shower-bathtub-upgrade-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
  robots: { index: false, follow: true },
};

const faqs = [
  {
    question: "How much does a shower and bathtub upgrade cost in Chandler?",
    answer: "The cost of a shower and bathtub upgrade project varies depending on the scope of the updates, such as swapping out hardware fixtures, installing a new tub insert, or custom tiling the walls and shower pan. We provide free on-site inspections and prepare detailed, line-item written estimates before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "What are the signs that a shower valve needs to be upgraded?",
    answer: "The most common signs of a failing shower valve include water dripping from the tub spout when the shower is running, difficulty turning the handle, musty mildew smells behind the wall, and sudden bursts of cold or hot water when other faucets are turned on."
  },
  {
    question: "Why should I use epoxy grout instead of cement grout?",
    answer: "Standard cement grout is highly porous and absorbs water, shampoo residue, and minerals easily. Epoxy grout is made from durable resins and is completely non porous. It resists mold growth, prevents water seepage, and will not stain from Chandler hard water."
  },
  {
    question: "How long does a shower and bathtub upgrade take?",
    answer: "A complete shower and bathtub upgrade typically takes three to seven days of active construction. This timeframe includes wall demolition, updating plumbing lines, installing the waterproof pan, tiling the walls, and mounting new hardware fixtures."
  }
];

const issues = [
  { title: "Outdated Fixtures & Poor Water Pressure", description: "Modern fixtures with better water pressure and contemporary styling." },
  { title: "Stained, Cracked, or Discolored Tile and Grout", description: "Fresh tile installation with properly sealed, mold-resistant grout." },
  { title: "Old Shower Doors That Are Hard to Clean", description: "New frameless or semi-frameless glass enclosures for modern appeal." }
];

const benefitsList = [
  { title: "Modern Style & Look", description: "Contemporary fixtures and finishes instantly update your bathroom." },
  { title: "Better Daily Function", description: "Improved water pressure, temperature control, and drainage." },
  { title: "Increased Home Value", description: "Updated bathrooms are a top priority for home buyers." }
];

const tipsList = [
  { title: "Coordinate Fixture Finishes", description: "Match chrome, brushed nickel, or matte black across all hardware." },
  { title: "Choose Rain Showerhead Combos", description: "Combine overhead rain nozzles with handheld wands for versatility." },
  { title: "Select Large-Format Tile", description: "Minimize grout lines for easier cleaning and modern aesthetics." }
];

const otherServices = getRelatedServices("/shower-bathtub-upgrade/");

export default function ShowerBathtubUpgradePage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Shower Bathtub Upgrade", url: "https://arzhomeremodeling.com/shower-bathtub-upgrade/" } ]} />
      <ServiceSchema
        serviceName="Shower & Bathtub Upgrade in Chandler, Arizona"
        serviceDescription="Professional shower and bathtub upgrade services in Chandler, Arizona. Modern fixtures, premium materials, and expert installation."
        serviceUrl={`${siteConfig.url}/shower-bathtub-upgrade`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Shower & Bathtub Upgrade in Chandler, Arizona"
          subtitle="Professional Bathroom Upgrades in Chandler AZ"
          description="Transform your shower and bathtub with modern fixtures, fresh tile, and premium materials for a spa-like bathroom experience."
          image="/images/projects/luxury-bathtub-remodel-az.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower & Bathtub Upgrade", url: `${siteConfig.url}/shower-bathtub-upgrade` },
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Upgrades"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)} 
        />

        <ServiceProcess
          title="Shower & Bathtub Upgrade Process"
          subtitle="Our Process"
          description="A comprehensive upgrade process that transforms your bathroom with minimal disruption."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation",
              description: "We assess your current setup, discuss upgrade goals, and provide recommendations.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selection",
              description: "Choose fixtures, tile, hardware finishes, and features for your upgrade.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Preparation",
              description: "Protect surrounding areas, remove old fixtures, and prep surfaces.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Install new fixtures, tile, enclosures, and hardware with precision.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Final Touches",
              description: "Sealing, testing, cleanup, and walkthrough to ensure satisfaction.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower & Bathtub Upgrades"
          subtitle="Common Problems Fixed"
          description="We address common bathroom issues through professional upgrades and improvements."
          issues={issues}
        />

        <Benefits
          title="Benefits of Shower & Bathtub Upgrades in Chandler"
          subtitle="Why Upgrade"
          benefits={benefitsList}
        />

        <Tips
          title="Shower & Bathtub Upgrade Tips"
          subtitle="Maximize Your Upgrade"
          description="Expert tips to get the most from your shower and bathtub upgrade investment."
          tips={tipsList}
        />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready for a shower and bathtub upgrade in Chandler?" 
          description="Get a free consultation and see how upgrades can transform your bathroom." 
        />

        <ServiceFAQ faqs={faqs} />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
