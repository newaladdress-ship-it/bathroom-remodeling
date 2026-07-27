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
  title: "Bath Vanity Installation Chandler AZ | Custom Cabinets",
  description: "Custom vanity installation in Chandler, AZ. Single & double sink setups, quartz/granite countertops, and custom cabinet layouts. Call for a quote today!",
  openGraph: {
    title: "Bathroom Vanity Install | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom vanity install, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-vanity-installation/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-vanity-install.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Vanity Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Install | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom vanity install, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-vanity-install.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-vanity-installation/`,
  },
};

const faqs = serviceContent["bathroom-vanity-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-vanity-installation");

export default function BathroomVanityInstallationPage() {
  const vanityData = serviceContent["bathroom-vanity-installation"];
  
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Vanity Installation", url: "https://arzhomeremodeling.com/bathroom-vanity-installation/" } ]} />
      <ServiceSchema
        serviceName="Bathroom Vanity Installation in Chandler, Arizona"
        serviceDescription="Professional bathroom vanity installation in Chandler, Arizona. Custom designs, expert installation, and coordinated fixtures."
        serviceUrl={`${siteConfig.url}/bathroom-vanity-installation/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Vanity Installation in Chandler, Arizona"
          subtitle="Custom Vanity Installation in Chandler AZ"
          description="Transform your bathroom with expert vanity installation services featuring custom designs, premium materials, and professional craftsmanship."
          image="/images/projects/modern-double-vanity-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Vanity Installation", url: `${siteConfig.url}/bathroom-vanity-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Vanity Installation Process"
          subtitle="Our Process"
          description="Professional vanity installation with precise measurements, quality materials, and expert craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Measure & Plan", description: "Precise measurements and design planning for perfect vanity fit and functionality." },
            { number: "02", icon: "Layout", title: "Select Vanity", description: "Choose from single or double vanities with coordinated countertops and fixtures." },
            { number: "03", icon: "HardHat", title: "Prep & Plumbing", description: "Plumbing adjustments and wall preparation for seamless vanity installation." },
            { number: "04", icon: "Hammer", title: "Install & Level", description: "Professional vanity installation with precise leveling and secure mounting." },
            { number: "05", icon: "Sparkles", title: "Finish & Test", description: "Countertop installation, plumbing connections, and final testing for perfect operation." },
          ]}
        />

        <SubServices 
          title="Explore More Bathroom Services"
          subtitle="More Solutions"
          description="From showers to tile work, we provide complete bathroom remodeling solutions in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Bathroom Vanity Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common vanity installation challenges Chandler homeowners face."
          issues={vanityData.issues}
        />

        <Benefits
          title="Benefits of Professional Vanity Installation"
          subtitle="Why Upgrade Your Vanity"
          description="Discover how professional vanity installation transforms your bathroom's functionality and style."
          benefits={vanityData.benefits}
        />

        <Tips
          title="Expert Vanity Installation Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly installed vanity."
          tips={vanityData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA title="Ready to Fix Your Problem? Contact Us Today" description="Get expert consultation, quality materials, and professional installation for your perfect bathroom vanity." />
      </main>
      <Footer />
    </>
  );
}
