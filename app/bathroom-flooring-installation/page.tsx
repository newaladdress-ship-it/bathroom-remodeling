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
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Bath Flooring Installation Chandler AZ | Custom Tile",
  description: "Expert bathroom flooring installation in Chandler, AZ. Specialized in waterproof tile, luxury vinyl plank, and slip-resistant floors. Call for a quote!",
  openGraph: {
    title: "Bathroom Flooring Install | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom flooring install, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-flooring-installation/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-flooring-installation/`,
  },
};

const faqs = serviceContent["bathroom-flooring-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-flooring-installation/");

export default function BathroomFlooringInstallationPage() {
  const serviceData = serviceContent["bathroom-flooring-installation"];

  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Flooring Installation", url: "https://arzhomeremodeling.com/bathroom-flooring-installation/" } ]} />
      <ServiceSchema 
        serviceName="Bathroom Flooring Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom flooring installation in Chandler, Arizona. Dense porcelain tile, natural stone, and slip resistant textured floors." 
        serviceUrl={`${siteConfig.url}/bathroom-flooring-installation/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Flooring Installation in Chandler, Arizona"
          subtitle="Professional Tile & Stone Flooring in Chandler AZ"
          description="Professional bathroom flooring installation with waterproof materials, expert craftsmanship, and durable finishes for your Chandler home."
          image="/images/services/bathroom-flooring-chandler.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Flooring", url: `${siteConfig.url}/bathroom-flooring-installation` },
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Options"
          description="Looking for something else? We offer a variety of renovation solutions."
          services={otherServices.map(s => s.name)} 
        />

        <ServiceProcess
          title="Bathroom Flooring Installation Process"
          subtitle="Our Process"
          description="A meticulous flooring installation process that guarantees flat, durable, and waterproof results."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Demolition & Prep",
              description: "We carefully remove old flooring and level the concrete slab to create a flat subfloor.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "Crack Isolation",
              description: "We install anti fracture membranes to isolate tiles from future concrete settling cracks.",
            },
            {
              number: "03",
              icon: "Layout",
              title: "Precision Layout",
              description: "We dry lay and align all tiles to ensure balanced, aesthetically pleasing borders.",
            },
            {
              number: "04",
              icon: "Hammer",
              title: "Tile Setting",
              description: "We lay tiles with polymer modified mortar to ensure permanent, flexible bonding.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Epoxy Grouting",
              description: "We apply non porous, mold resistant epoxy grout and clean the tile surface fully.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Professional Flooring"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom tile challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Flooring Installation"
          subtitle="Why Choose Us"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Expert Bathroom Flooring Tips"
          subtitle="Care & Maintenance"
          description="Smart advice to maintain the beauty and durability of your newly tiled bathroom floors."
          tips={serviceData.tips}
        />

        <ServiceAreas />
        
        <ServiceCTA 
          title="Ready for professional bathroom flooring in Chandler?" 
          description="Get a free consultation with premium material samples and upfront estimates." 
        />

        <ServiceFAQ faqs={faqs} />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
