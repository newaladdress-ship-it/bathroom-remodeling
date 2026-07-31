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
  title: "Cabinet & Countertop Installation Chandler, AZ | Free Quote",
  description: "Expert cabinet & countertop installation in Chandler, AZ. Custom cabinetry, quartz, granite & marble with precision craftsmanship. Get a free quote!",
  openGraph: {
    title: "Vanity Cabinet Installs | Chandler AZ Bathroom Renovation",
    description: "Bathroom renovation service in Chandler, AZ by ARZ. Explore vanity cabinet installs, custom showers, tile, vanities, clear pricing, and free estimates.",
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
    title: "Vanity Cabinet Installs | Chandler AZ Bathroom Renovation",
    description: "Bathroom renovation service in Chandler, AZ by ARZ. Explore vanity cabinet installs, custom showers, tile, vanities, clear pricing, and free estimates.",
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
          title="Cabinet & Countertop Installation in Chandler, AZ"
          subtitle="Custom Cabinetry, Quartz & Stone Vanity Solutions"
          description="Refresh your bathroom with expertly crafted storage solutions and premium quartz, granite, marble, or solid-surface vanity tops. Our team delivers precise fitting, durable materials, and seamless finishes designed to enhance everyday functionality, style, and long-term value for your bathroom renovation in Chandler."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Cabinet & Countertop Installation", url: `${siteConfig.url}/cabinet-countertop-installation/` },
          ]}
        />

        <ServiceProcess
          title="Precision Installation Process"
          subtitle="Our Process"
          description="Every project follows a detailed workflow focused on accurate measurements, premium materials, and expert craftsmanship to deliver a beautiful, functional bathroom that stands the test of time."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Consultation & Precision Measurements",
              description: "We carefully measure your space, create detailed templates, and verify dimensions to ensure every component fits with exceptional accuracy.",
            },
            {
              number: "02",
              icon: "Layout",
              title: "Material & Finish Selection",
              description: "Choose from custom cabinetry, quartz, granite, marble, solid-surface vanity tops, edge profiles, hardware, and designer finishes that complement your style.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Existing Fixture Removal",
              description: "Outdated storage units and vanity surfaces are removed with care while protecting surrounding walls, plumbing fixtures, and finished areas.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Professional Fitting & Assembly",
              description: "Each component is securely mounted, perfectly leveled, and precisely aligned before sinks, faucets, and plumbing connections are completed.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Final Detailing & Inspection",
              description: "We complete edge finishing, seal exposed joints where needed, test all fixtures, and perform a comprehensive quality inspection before project completion.",
            },
          ]}
        />

        <SubServices 
          title="Explore More Bathroom Services"
          subtitle="More Solutions"
          description="From showers to tile work, we provide complete bathroom renovation solutions in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Common Storage & Vanity Problems We Resolve"
          subtitle="Issues We Solve"
          description="From moisture damage to worn-out surfaces and poor alignment, our solutions improve functionality, durability, and the overall appearance of your bathroom."
          issues={[
            {
              title: "Moisture-Damaged Storage Units",
              description: "We replace deteriorated cabinetry with durable, moisture-resistant materials and protective finishes designed for humid bathroom environments.",
            },
            {
              title: "Worn or Stained Vanity Surfaces",
              description: "Premium quartz, granite, marble, and engineered stone provide long-lasting beauty while resisting stains, scratches, and everyday wear.",
            },
            {
              title: "Poor Alignment & Uneven Components",
              description: "Careful leveling, structural support, and precision adjustments help doors, drawers, and hardware operate smoothly with a consistent appearance.",
            },
            {
              title: "Loose or Leaking Sink Assemblies",
              description: "Heavy-duty mounting systems, secure fastening methods, and properly sealed connections help create a reliable, leak-resistant installation.",
            },
          ]}
        />

        <Benefits
          title="Built for Style, Function & Lasting Performance"
          subtitle="Why Choose Us"
          description="Our premium materials, precision craftsmanship, and attention to detail help create a bathroom that's both beautiful and built to perform for years."
          benefits={[
            {
              icon: "Layout",
              title: "Custom Storage Solutions",
              description: "Thoughtfully designed wood cabinetry, soft-close hardware, and personalized layouts maximize organization while complementing your home's style.",
            },
            {
              icon: "Sparkles",
              title: "Premium Surface Materials",
              description: "Quartz, granite, marble, and engineered stone provide exceptional durability, elegant finishes, and outstanding resistance to everyday wear.",
            },
            {
              icon: "ShieldCheck",
              title: "Secure Structural Support",
              description: "Every vanity is carefully leveled and anchored to structural framing, providing dependable stability for heavy stone surfaces and integrated sinks.",
            },
            {
              icon: "TrendingUp",
              title: "Long-Term Investment",
              description: "High-quality upgrades improve everyday functionality while enhancing your home's appeal and long-term resale value.",
            },
          ]}
        />

        <Tips
          title="Expert Care Tips for Lasting Beauty"
          subtitle="Care & Maintenance"
          description="Simple maintenance habits help preserve the appearance, durability, and performance of your newly upgraded bathroom for years to come."
          tips={[
            {
              title: "Select Low-Maintenance Quartz",
              description: "Engineered quartz offers a non-porous surface that resists stains, moisture, and hard water buildup without requiring routine sealing.",
            },
            {
              title: "Add Under-Vanity Lighting",
              description: "Integrated LED lighting improves visibility, enhances everyday convenience, and creates a clean, modern atmosphere.",
            },
            {
              title: "Choose Soft-Close Hardware",
              description: "Premium hinges and drawer slides reduce impact, minimize wear, and help extend the lifespan of moving components.",
            },
            {
              title: "Maximize Interior Organization",
              description: "Built-in drawer organizers, pull-out storage, and space-saving accessories help keep everyday essentials neatly arranged while maintaining clutter-free vanity surfaces.",
            },
          ]}
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
