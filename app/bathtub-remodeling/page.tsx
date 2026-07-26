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
  title: "Bathtub Remodeling Chandler AZ | Soaker Tub Upgrades | ARZ",
  description: "Upgrade your bathroom with custom bathtub remodeling in Chandler, AZ. Soaking tubs, freestanding tub installations, & custom surrounds. Call today!",
  openGraph: {
    title: "Bathtub Remodel Services | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathtub-remodeling/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathtub Remodel Services | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathtub-remodeling/`,
  },
};

const faqs = serviceContent["bathtub-remodeling"].faqs;
const otherServices = getRelatedServices("/bathtub-remodeling/");

export default function BathtubRemodelingPage() {
  const serviceData = serviceContent["bathtub-remodeling"];
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathtub Remodeling", url: "https://arzhomeremodeling.com/bathtub-remodeling/" } ]} />
      <ServiceSchema
        serviceName="Bathtub Remodeling in Chandler, Arizona"
        serviceDescription="Expert tub replacements in Chandler, Arizona. Modern installations, luxury upgrades, and professional renovations."
        serviceUrl={`${siteConfig.url}/bathtub-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathtub Remodeling in Chandler, AZ"
          subtitle="Tub Replacement, Bathtub-to-Shower Conversion & Soaking Tubs"
          description="Ready to replace your outdated bathtub or convert that unused garden tub into a walk-in shower? Our professional Chandler contractors handle tub removal, tub replacement, soaking tub installation, and tub-to-shower conversions with a fixed price and 2-year warranty."
          image="/images/projects/luxury-bathtub-remodel-az.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Bathtub Remodeling Chandler AZ", url: `${siteConfig.url}/bathtub-remodeling/` },
          ]}
        />

        <ServiceProcess
          title="Our Renovation Process"
          subtitle="How It Works"
          description="A streamlined approach to upgrading your bathing space with precise planning and quality installation for Chandler homeowners."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation",
              description: "We assess your space, discuss tub options, and plan the perfect upgrade solution.",
            },
            {
              number: "02",
              icon: "Bath",
              title: "Tub Selection",
              description: "Choose from alcove, freestanding, or soaking tubs with coordinated fixtures and finishes.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Prep",
              description: "Careful removal of the old tub, plumbing updates, and surface preparation for installation.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Professional tub installation with proper leveling, plumbing connections, and waterproofing.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Finishing Touches",
              description: "Surround installation, trim work, and final testing to complete your new tub installation.",
            },
          ]}
        />

        <SubServices 
          title="Other Bathroom Services in Chandler"
          subtitle="More Options"
          description="Looking for something else? We offer a variety of renovation solutions."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Tub Replacements"
          subtitle="Common Problems Fixed"
          description="We address the most common bathing area challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Upgrading Your Tub in Chandler"
          subtitle="Why It Matters"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Tub Maintenance Tips"
          subtitle="Keep It Looking New"
          description="Expert advice to maintain your newly installed tub and extend its lifespan."
          tips={serviceData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get expert design consultation, quality materials, and professional installation for your dream bath." 
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
