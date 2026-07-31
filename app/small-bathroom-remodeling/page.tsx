
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
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
          subtitle="Compact Bathroom Renovation Specialists in Chandler AZ"
          description="Get a custom small bathroom remodel in Chandler, AZ. Our compact bathroom renovation specialists deliver space-saving layouts, floating vanities, and custom bath renovation services."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Small Bathroom Remodeling", url: `${siteConfig.url}/small-bathroom-remodeling` }]}
        />

        <ServiceProcess
          title="Small Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Space-maximizing renovation with smart design solutions and efficient layouts."
          steps={[
            { number: "01", icon: "Layout", title: "Space Analysis", description: "Evaluate current layout and identify opportunities to maximize space and functionality." },
            { number: "02", icon: "Ruler", title: "Design Planning", description: "Create space-saving design with optimal fixture placement and functional storage solutions." },
            { number: "03", icon: "Hammer", title: "Efficient Demolition", description: "Careful demolition in tight spaces with protection for surrounding areas." },
            { number: "04", icon: "Sparkles", title: "Smart Installation", description: "Install wall-mounted vanities, recessed storage solutions, and modern finishes." },
            { number: "05", icon: "ShieldCheck", title: "Final Optimization", description: "Complete installation with space-maximizing details and quality finishing." }
          ]}
        />

        <SubServices 
          title="Other Space-Saving Solutions"
          subtitle="More Upgrades"
          description="From vanity updates to custom tile, we can maximize every inch of your compact bathroom."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Problems We Solve in Compact Bathrooms"
          subtitle="Common Problems Fixed"
          description="We address the most common small bathroom challenges Chandler homeowners face."
          issues={smallBathData.issues}
        />

        <Benefits
          title="Benefits of Small Bathroom Remodeling"
          subtitle="Why Remodel Your Small Bathroom"
          description="Discover how a custom bathroom renovation maximizes every inch and adds value to your home."
          benefits={smallBathData.benefits}
        />

        <Tips
          title="Expert Space-Saving Bathroom Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly renovated compact bathroom."
          tips={smallBathData.tips}
        />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get your free consultation today and discover how we can transform your bathroom space." 
        />
      </main>
      <Footer />
    </>
  );
}
