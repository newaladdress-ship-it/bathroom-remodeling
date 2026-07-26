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
  title: "Bath Tile Installer Chandler AZ | Custom Shower Tiling",
  description: "Premium floor and shower wall tile setting in Chandler, AZ. Epoxy grout, porcelain, ceramic, and custom mosaics with expert installation. Free estimate!",
  openGraph: {
    title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-tile-installation/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-tile-install.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Tile Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-tile-install.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-tile-installation/`,
  },
};

const faqs = serviceContent["bathroom-tile-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-tile-installation");

export default function BathroomTileInstallationPage() {
  const tileData = serviceContent["bathroom-tile-installation"];
  
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Tile Installation", url: "https://arzhomeremodeling.com/bathroom-tile-installation/" } ]} />
      <ServiceSchema 
        serviceName="Bathroom Tile Installation in Chandler, Arizona" 
        serviceDescription="Expert bathroom tile setting in Chandler, Arizona. Custom flooring, waterproof shower walls, and premium ceramics." 
        serviceUrl={`${siteConfig.url}/bathroom-tile-installation/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Premium Tile Installation in Chandler, Arizona"
          subtitle="Expert Tile Installation Chandler AZ"
          description="Elevate your space with flawless tiling work. From waterproof shower surrounds to stunning floor patterns, our precision craftsmanship ensures lasting beauty."
          image="/images/services/bathroom-flooring-chandler.jpg"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Tile Installation", url: `${siteConfig.url}/bathroom-tile-installation` }]}
        />

        <ServiceProcess
          title="Our Tiling Process"
          subtitle="How We Work"
          description="A professional approach to setting ceramics, porcelain, and stone with waterproof preparation and precision craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Layout & Design", description: "Plan patterns, grout lines, and transitions that align perfectly with your space." },
            { number: "02", icon: "ShieldCheck", title: "Surface Preparation", description: "Install backer board, waterproofing membranes, and level surfaces for longevity." },
            { number: "03", icon: "Hammer", title: "Tile Setting", description: "Precision placement with proper spacing, alignment, and expert cuts around fixtures." },
            { number: "04", icon: "Paintbrush", title: "Grouting", description: "Professional application with consistent color and proper curing time." },
            { number: "05", icon: "Sparkles", title: "Sealing & Finishing", description: "Sealing against moisture, final cleanup, and a quality inspection for perfect results." }
          ]}
        />

        <SubServices 
          title="Explore More Washroom Upgrades"
          subtitle="Complete Solutions"
          description="Beyond tile, we offer full-service renovation options to transform your home."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Custom Tiling"
          subtitle="Common Problems Fixed"
          description="We address the most common flooring and shower wall challenges Chandler homeowners face."
          issues={tileData.issues}
        />

        <Benefits
          title="Benefits of Professional Tile Work"
          subtitle="Why It Matters"
          benefits={tileData.benefits}
        />

        <Tips
          title="Expert Maintenance Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize the life of your newly upgraded surfaces."
          tips={tileData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA title="Ready to Fix Your Problem? Contact Us Today" description="Get expert design consultation, quality materials, and precision tiling for your dream home." />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
