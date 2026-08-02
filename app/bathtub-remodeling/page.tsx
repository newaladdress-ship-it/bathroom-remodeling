import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
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
  title: "Bathtub Remodeling Chandler AZ | Soaker Tub Upgrades | ARZ",
  description: "Upgrade your bathroom with custom bathtub remodeling in Chandler, AZ. Soaking tubs, freestanding tub installations, & custom surrounds. Call today!",
  openGraph: {
    title: "Bathtub Remodel Services | Chandler AZ Bathroom Renovation",
    description: "Bathroom renovation service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathtub-remodeling/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathtub Remodel Services | Chandler AZ Bathroom Renovation",
    description: "Bathroom renovation service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
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
      <PriceSchema
        serviceName="Bathtub Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathtub-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathtub Remodeling in Chandler, AZ"
          subtitle="Tub Replacement & Soaking Tub Upgrades"
          description="Replace outdated tubs, install luxurious soaking bathtubs, or enhance your bathing space with durable, professionally installed solutions designed for lasting comfort, improved functionality, and everyday convenience, all backed by expert craftsmanship, transparent pricing, and our 2-year workmanship warranty."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Bathtub Remodeling Chandler AZ", url: `${siteConfig.url}/bathtub-remodeling/` },
          ]}
        />

        <ServiceProcess
          title="Our Renovation Process"
          subtitle="How It Works"
          description="Every bathtub remodeling project follows a carefully planned process to ensure lasting quality, dependable performance, and a smooth experience from start to finish. We evaluate your existing space, recommend suitable bathtub options, prepare the area, complete the installation with attention to detail, and perform a final inspection to ensure everything meets our quality standards."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation",
              description: "We assess your bathroom layout, discuss your remodeling goals, and recommend the most suitable bathtub style based on your space, budget, and lifestyle.",
            },
            {
              number: "02",
              icon: "Home",
              title: "Product Selection",
              description: "Choose from acrylic, freestanding, alcove, or deep soaking bathtubs, along with coordinated fixtures, wall surrounds, and finish options to complement your bathroom.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Preparation",
              description: "Our team safely removes the existing bathtub, inspects plumbing connections, and prepares the area with proper waterproofing before installation begins.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Professional Installation",
              description: "We install your new bathtub using precise leveling, secure plumbing connections, and proven installation techniques for reliable, long-lasting performance.",
            },
            {
              number: "05",
              icon: "ClipboardCheck",
              title: "Final Inspection",
              description: "Every project concludes with detailed testing, finishing work, and a complete quality inspection to ensure your remodeled bathing space is ready for everyday use.",
            },
          ]}
        />

        <SubServices 
          title="Other Bathroom Services in Chandler"
          subtitle="More Options"
          description="Looking for something else? We offer a variety of bathroom renovation solutions."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Bathtub Remodeling"
          subtitle="Common Problems Fixed"
          description="An aging bathtub can reduce comfort, create maintenance concerns, and affect the overall appearance of your bathroom. Our remodeling solutions address structural wear, outdated designs, moisture-related issues, and inefficient layouts to create a safer, more functional bathing space with durable materials and modern installation methods."
          issues={[
            {
              title: "Cracked or Worn Surfaces",
              description: "Replace damaged finishes, chips, and discoloration with durable bathtub materials that resist everyday wear, stains, and scratches.",
            },
            {
              title: "Slow Drainage",
              description: "Correct drainage issues by upgrading drain assemblies, improving water flow, and replacing aging plumbing components when necessary.",
            },
            {
              title: "Limited Bathroom Functionality",
              description: "Improve space efficiency with better bathtub configurations that enhance comfort while complementing your existing bathroom layout.",
            },
            {
              title: "Moisture & Water Damage",
              description: "Proper waterproofing, sealed wall surrounds, and professional installation help reduce moisture intrusion and protect surrounding walls and subfloor from long-term damage.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Upgrading Your Tub in Chandler"
          subtitle="Why It Matters"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Bathtub Maintenance Tips"
          subtitle="Keep It Looking New"
          description="Proper care helps preserve your bathtub's appearance, maintain reliable performance, and extend its lifespan. Following a few simple maintenance practices can reduce wear, prevent moisture-related issues, and keep your bathing area clean, safe, and looking its best for years to come."
          tips={[
            {
              title: "Clean with Non-Abrasive Products",
              description: "Use gentle, non-abrasive cleaners and a soft cloth to remove soap residue and hard water buildup without damaging acrylic, composite, or porcelain finishes.",
            },
            {
              title: "Check Caulk & Seals Regularly",
              description: "Inspect caulking around the bathtub and wall surrounds for cracks or gaps. Resealing worn areas helps prevent moisture intrusion and protects surrounding surfaces.",
            },
            {
              title: "Maintain Proper Ventilation",
              description: "Run your bathroom exhaust fan or open a window after bathing to reduce humidity, minimize condensation, and help prevent mold and mildew growth.",
            },
            {
              title: "Monitor Drains & Fixtures",
              description: "Keep drains free from debris and periodically inspect faucets, drains, and plumbing connections for leaks to maintain efficient water flow and avoid unnecessary repairs.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get expert design consultation, quality materials, and professional installation for your dream bath." 
        />
      </main>
      <Footer />
    </>
  );
}
