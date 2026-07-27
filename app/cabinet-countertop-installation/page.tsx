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
  title: "Vanity Cabinets & Countertops Chandler AZ | Install | ARZ",
  description: "Upgrade your bathroom with custom cabinets and quartz, granite, or marble countertops in Chandler, AZ. professional installation. Get a free estimate!",
  openGraph: {
    title: "Vanity Cabinet Installs | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore vanity cabinet installs, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/cabinet-countertop-installation/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/cabinet-countertop-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Cabinet & Countertop Installation - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanity Cabinet Installs | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore vanity cabinet installs, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/cabinet-countertop-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/cabinet-countertop-installation/`,
  },
};

const faqs = serviceContent["cabinet-countertop-installation"].faqs;
const otherServices = getRelatedServices("/cabinet-countertop-installation");

export default function CabinetCountertopInstallationPage() {
  const serviceData = serviceContent["cabinet-countertop-installation"];
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Cabinet Countertop Installation", url: "https://arzhomeremodeling.com/cabinet-countertop-installation/" } ]} />
      <ServiceSchema
        serviceName="Cabinet & Countertop Installation in Chandler, Arizona"
        serviceDescription="Professional cabinet and countertop installation in Chandler, Arizona. Granite, quartz, marble countertops and custom cabinetry with expert installation."
        serviceUrl={`${siteConfig.url}/cabinet-countertop-installation/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Cabinet & Countertop Installation in Chandler, Arizona"
          subtitle="Professional Vanity & Countertop Services in Chandler AZ"
          description="Upgrade your bathroom with custom cabinets and premium countertops in granite, quartz, or marble with expert installation."
          image="/images/projects/modern-double-vanity-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Cabinet & Countertop Installation", url: `${siteConfig.url}/cabinet-countertop-installation/` },
          ]}
        />

        <ServiceProcess
          title="Cabinet & Countertop Installation Process"
          subtitle="Our Process"
          description="A precise installation process for perfect cabinet and countertop results every time."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Measure & Template",
              description: "Precise measurements and templating for perfect fit and alignment.",
            },
            {
              number: "02",
              icon: "Layout",
              title: "Material Selection",
              description: "Choose cabinet style, countertop material, edge profile, and hardware.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Old Removal",
              description: "Careful removal of existing cabinets and countertops with protection.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Level cabinet mounting, countertop setting, and plumbing connections.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Finishing",
              description: "Sink cutout, faucet installation, sealing, and final inspection.",
            },
          ]}
        />

        <SubServices 
          title="Explore More Bathroom Services"
          subtitle="More Solutions"
          description="From showers to tile work, we provide complete bathroom remodeling solutions in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Cabinet & Countertop Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common cabinet and countertop challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Cabinet & Countertop Installation"
          subtitle="Why Choose Us"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Cabinet & Countertop Tips"
          subtitle="Care & Maintenance"
          description="Expert tips to maintain your new cabinets and countertops for lasting beauty."
          tips={serviceData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get a free consultation with material samples and transparent pricing." 
        />
      </main>
      <Footer />
    </>
  );
}
