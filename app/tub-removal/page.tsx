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
  title: {
    absolute: "Tub Removal Services | Chandler AZ Bathroom Remodeling"
  },
  description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub removal services, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {
    title: "Tub Removal Services | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub removal services, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/tub-removal`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tub-removal-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub Removal Services - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub Removal Services | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub removal services, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/tub-removal-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion/`,
  },
  robots: { index: false, follow: true },
};

const faqs = serviceContent["tub-removal"].faqs;
const otherServices = getRelatedServices("/tub-removal/");

export default function TubRemovalPage() {
  const serviceData = serviceContent["tub-removal"];
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Tub Removal", url: "https://arzhomeremodeling.com/tub-removal/" } ]} />
      <ServiceSchema
        serviceName="Bathtub Removal in Chandler, Arizona"
        serviceDescription="Professional bathtub removal services in Chandler, Arizona. Safe removal, proper disposal, and floor preparation for bathroom renovations."
        serviceUrl={`${siteConfig.url}/tub-removal`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Tub Removal in Chandler, Arizona"
          subtitle="Professional Bathtub Removal Services in Chandler AZ"
          description="Expert bathtub removal with proper plumbing disconnection, safe extraction, and complete disposal for your renovation project."
          image="/images/gallery/bathroom-renovation-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub Removal", url: `${siteConfig.url}/tub-removal` },
          ]}
        />

        <ServiceProcess
          title="Bathtub Removal Process"
          subtitle="Our Process"
          description="A safe, efficient tub removal process that prepares your bathroom for renovation."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Assessment",
              description: "We evaluate tub type, accessibility, and plan the safest removal approach.",
            },
            {
              number: "02",
              icon: "Wrench",
              title: "Plumbing Disconnect",
              description: "Shut off water supply and properly disconnect all plumbing connections.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Safe Removal",
              description: "Careful extraction of the tub with protection for surrounding surfaces.",
            },
            {
              number: "04",
              icon: "Trash2",
              title: "Disposal & Hauling",
              description: "Complete removal of the tub and all debris from your property.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Floor Prep",
              description: "Plumbing caps, subfloor inspection, and preparation for next phase.",
            },
          ]}
        />

        <SubServices 
          title="Related Services in Chandler"
          subtitle="More Solutions"
          description="We provide comprehensive bathroom remodeling services designed for your needs."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Professional Tub Removal"
          subtitle="Common Problems Fixed"
          description="We address the most common tub removal challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Tub Removal"
          subtitle="Why Hire Professionals"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Tub Removal Planning Tips"
          subtitle="Before You Start"
          description="Important considerations before scheduling your bathtub removal service."
          tips={serviceData.tips}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get a free quote for safe, efficient bathtub removal with proper disposal included." 
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
