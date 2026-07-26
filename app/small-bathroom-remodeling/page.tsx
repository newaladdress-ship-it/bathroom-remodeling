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
  title: "Small Bathroom Remodeling Chandler AZ | Space Savers | ARZ",
  description: "Maximize storage and style in your small guest or hall bathroom in Chandler, AZ. Smart floating vanities, pocket doors, and curbless layouts. Call now!",
  openGraph: {
    title: "Small Bath Remodel | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore small bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/small-bathroom-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Guest and Small Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Bath Remodel | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore small bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/small-bathroom-remodeling/`,
  },
};

const faqs = serviceContent["small-bathroom-remodeling"].faqs;
const otherServices = getRelatedServices("/small-bathroom-remodeling/");

export default function SmallBathroomRemodelingPage() {
  const smallBathData = serviceContent["small-bathroom-remodeling"];
  
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Small Bathroom Remodeling", url: "https://arzhomeremodeling.com/small-bathroom-remodeling/" } ]} />
      <ServiceSchema serviceName="Small Bathroom Remodeling in Chandler, Arizona" serviceDescription="Professional small bathroom remodeling in Chandler, Arizona. Space-saving designs, storage solutions, and modern fixtures." serviceUrl={`${siteConfig.url}/small-bathroom-remodeling`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Affordable Small Bathroom Remodel Cost Chandler AZ"
          subtitle="Professional Small Bathroom Remodeling Services in Chandler AZ"
          description="Get a professional small bathroom remodel in Chandler AZ. Our professional small bathroom remodeling contractors deliver space-saving designs and professional bathroom renovation services."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Small Bathroom Remodeling", url: `${siteConfig.url}/small-bathroom-remodeling` }]}
        />

        <ServiceProcess
          title="Small Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Space-maximizing remodeling with smart design solutions and efficient layouts."
          steps={[
            { number: "01", icon: "Layout", title: "Space Analysis", description: "Evaluate current layout and identify opportunities to maximize space and functionality." },
            { number: "02", icon: "Ruler", title: "Design Planning", description: "Create space-saving design with optimal fixture placement and storage solutions." },
            { number: "03", icon: "Hammer", title: "Efficient Demolition", description: "Careful demolition in tight spaces with protection for surrounding areas." },
            { number: "04", icon: "Sparkles", title: "Smart Installation", description: "Install space-saving fixtures, storage solutions, and modern finishes." },
            { number: "05", icon: "ShieldCheck", title: "Final Optimization", description: "Complete installation with space-maximizing details and quality finishing." }
          ]}
        />

        <SubServices 
          title="Other Space-Saving Solutions"
          subtitle="More Upgrades"
          description="From vanity updates to custom tile, we can maximize every inch of your bathroom."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Small Bathroom Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common small bathroom challenges Chandler homeowners face."
          issues={smallBathData.issues}
        />

        <Benefits
          title="Benefits of Small Bathroom Remodeling"
          subtitle="Why Remodel Your Small Bathroom"
          description="Discover how professional small bathroom remodeling maximizes space and adds value to your home."
          benefits={smallBathData.benefits}
        />

        <Tips
          title="Expert Small Bathroom Remodeling Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly remodeled small bathroom."
          tips={smallBathData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get expert space-maximizing design, smart storage solutions, and professional installation for your small bathroom." 
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
