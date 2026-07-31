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
          description="Upgrade your bathroom with professionally installed custom vanities, floating or double-sink designs, premium countertops, modern storage solutions, and quality craftsmanship that enhance functionality, organization, and everyday style, backed by our 2-year workmanship warranty."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Vanity Installation", url: `${siteConfig.url}/bathroom-vanity-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Vanity Installation Process"
          subtitle="Our Process"
          description="Every vanity installation follows a carefully planned process to ensure a precise fit, reliable performance, and a polished finish. From accurate measurements and material selection to plumbing preparation, installation, and final quality checks, we focus on creating a functional, durable, and visually appealing bathroom upgrade."
          steps={[
            { number: "01", icon: "Ruler", title: "Measure & Plan", description: "We take detailed measurements, evaluate your bathroom layout, and recommend the ideal vanity size, storage configuration, and placement for everyday functionality." },
            { number: "02", icon: "Layout", title: "Select Vanity & Materials", description: "Choose from single, double, floating, or freestanding vanities with quartz, granite, or marble countertops, coordinated sinks, and premium hardware." },
            { number: "03", icon: "Wrench", title: "Preparation & Plumbing", description: "Our team prepares the installation area, updates plumbing connections when needed, and ensures the wall and flooring are ready for secure installation." },
            { number: "04", icon: "Sparkles", title: "Installation & Quality Inspection", description: "We carefully install, level, and secure your new vanity, complete sink and faucet connections, and perform a final inspection to verify proper operation and a flawless finished appearance." },
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
          description="An outdated or poorly designed vanity can reduce storage, limit functionality, and affect the overall appearance of your bathroom. Our installation solutions resolve common cabinetry, countertop, plumbing, and organization challenges to create a more efficient, durable, and visually appealing space for everyday use."
          issues={[
            {
              title: "Damaged or Moisture-Worn Cabinets",
              description: "Replace swollen, deteriorated cabinetry with durable vanity cabinets designed to resist humidity, moisture, and everyday wear.",
            },
            {
              title: "Limited Storage & Counter Space",
              description: "Upgrade to custom storage solutions, spacious drawers, and well-planned cabinet layouts that improve organization and reduce countertop clutter.",
            },
            {
              title: "Plumbing & Drain Challenges",
              description: "We adjust plumbing connections and drain placement when needed to ensure your new vanity fits properly without compromising performance.",
            },
            {
              title: "Poor Lighting & Functionality",
              description: "Improve visibility with modern vanity lighting and mirror placement that create a brighter, more comfortable space for daily routines.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Professional Vanity Installation"
          subtitle="Why Upgrade Your Vanity"
          description="A professionally installed vanity improves both the appearance and functionality of your bathroom while adding practical storage and durable materials built for everyday use. Thoughtful design and quality craftsmanship create a space that's easier to organize, maintain, and enjoy for years to come."
          benefits={[
            {
              icon: "Layout",
              title: "Custom Storage Solutions",
              description: "Well-designed cabinetry, drawers, and shelving help organize toiletries, towels, and everyday essentials while maximizing available space.",
            },
            {
              icon: "Sparkles",
              title: "Premium Countertop Materials",
              description: "Quartz, granite, and marble countertops provide long-lasting durability, moisture resistance, and a refined finish that complements your bathroom.",
            },
            {
              icon: "ShieldCheck",
              title: "Reliable Plumbing Performance",
              description: "Properly installed sinks, faucets, and plumbing connections help ensure efficient water flow and dependable everyday operation.",
            },
            {
              icon: "TrendingUp",
              title: "Enhanced Style & Comfort",
              description: "Modern vanity designs, quality finishes, and improved functionality create a more inviting bathroom while adding long-term value to your home.",
            },
          ]}
        />

        <Tips
          title="Expert Vanity Installation Tips"
          subtitle="Professional Insights"
          description="Proper care and routine maintenance help preserve the beauty, functionality, and longevity of your new bathroom vanity. Following these simple recommendations can protect cabinetry, countertops, and plumbing components while keeping your bathroom looking its best."
          tips={[
            {
              title: "Protect Countertop Surfaces",
              description: "Clean quartz, granite, or marble countertops with non-abrasive products to prevent surface damage and maintain their natural appearance.",
            },
            {
              title: "Prevent Moisture Damage",
              description: "Wipe away standing water around sinks and faucets to protect cabinet finishes and reduce long-term moisture exposure.",
            },
            {
              title: "Inspect Hardware Regularly",
              description: "Periodically tighten cabinet handles, drawer hardware, and faucet connections to maintain smooth operation and prevent unnecessary wear.",
            },
            {
              title: "Maintain Plumbing Connections",
              description: "Check supply lines, drain fittings, and shut-off valves occasionally for leaks to help avoid water damage and extend the lifespan of your vanity.",
            },
          ]}
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
