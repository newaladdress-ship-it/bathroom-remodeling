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
  title: "Bath Lighting Pro Chandler AZ | LED Upgrades | ARZ Chandle",
  description: "Enhance your bath with custom lighting in Chandler, AZ. Recessed LEDs, vanity light fixtures, and safety-compliant GFCI circuits. Schedule a free quote!",
  openGraph: {
    title: "Bathroom Lighting Install | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom lighting install, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-lighting-installation/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-lighting-installation/`,
  },
};

const faqs = serviceContent["bathroom-lighting-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-lighting-installation/");

export default function BathroomLightingInstallationPage() {
  const serviceData = serviceContent["bathroom-lighting-installation"];

  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Lighting Installation", url: "https://arzhomeremodeling.com/bathroom-lighting-installation/" } ]} />
      <ServiceSchema 
        serviceName="Bathroom Lighting Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom lighting installation in Chandler, Arizona. Recessed LED layout, layered vanity lights, and GFCI shock safety." 
        serviceUrl={`${siteConfig.url}/bathroom-lighting-installation/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Lighting Installation in Chandler, Arizona"
          subtitle="Professional LED & Vanity Lighting in Chandler AZ"
          description="Brighten your bathroom with professionally installed LED lighting, vanity lights, recessed fixtures, and modern illumination solutions designed to improve visibility, energy efficiency, and everyday comfort while enhancing the beauty and functionality of your remodeled space."
          image="/images/services/bathroom-tile-remodel-az.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Lighting", url: `${siteConfig.url}/bathroom-lighting-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Lighting Installation Process"
          subtitle="Our Process"
          description="Every lighting installation is carefully planned to deliver balanced illumination, dependable performance, and lasting quality. From evaluating your existing layout to installing modern fixtures and completing final testing, our process ensures every lighting upgrade enhances both functionality and the overall appearance of your bathroom."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Lighting Consultation",
              description: "We evaluate your bathroom layout, identify lighting needs, and recommend fixture placement that improves visibility and complements your remodeling plans.",
            },
            {
              number: "02",
              icon: "Layout",
              title: "Fixture Selection",
              description: "Choose from LED vanity lights, recessed ceiling fixtures, decorative sconces, and accent lighting that match your preferred style and brightness.",
            },
            {
              number: "03",
              icon: "Ruler",
              title: "Preparation & Electrical Planning",
              description: "Our team prepares the installation area, verifies electrical compatibility, and plans wiring for safe, efficient fixture installation.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Professional Installation",
              description: "Lighting fixtures are securely installed, aligned, and connected to provide reliable performance, balanced illumination, and a clean finished appearance.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Final Testing",
              description: "Every fixture is tested to confirm proper operation, consistent brightness, and dependable performance before your project is complete.",
            },
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Options"
          description="Looking for something else? We offer a variety of renovation solutions."
          services={otherServices.map(s => s.name)} 
        />

        <IssuesSolved
          title="Issues We Solve with Bathroom Lighting"
          subtitle="Common Problems Fixed"
          description="Poor lighting can make a bathroom feel smaller, reduce visibility, and affect everyday comfort. Our lighting solutions improve brightness, eliminate shadows, and create a balanced environment that enhances both functionality and visual appeal."
          issues={[
            {
              title: "Dim or Uneven Lighting",
              description: "Upgrade outdated fixtures with modern lighting that delivers brighter, more consistent illumination throughout the bathroom.",
            },
            {
              title: "Poor Mirror Visibility",
              description: "Professionally positioned vanity lighting reduces facial shadows, making grooming, shaving, and makeup application easier.",
            },
            {
              title: "Outdated Fixtures",
              description: "Replace aging fixtures with energy-efficient lighting that complements modern bathroom designs and improves overall aesthetics.",
            },
            {
              title: "Moisture-Related Fixture Wear",
              description: "Install moisture-resistant lighting designed to perform reliably in humid bathroom environments while reducing maintenance requirements.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Professional Bathroom Lighting"
          subtitle="Why It Matters"
          description="Well-designed lighting improves more than visibility. It enhances comfort, creates a welcoming atmosphere, and highlights the design features that make your remodeled bathroom both functional and visually appealing."
          benefits={[
            {
              icon: "Sparkles",
              title: "Balanced Illumination",
              description: "Layered lighting creates even brightness that improves comfort while reducing dark areas and unwanted shadows.",
            },
            {
              icon: "Zap",
              title: "Energy Efficiency",
              description: "LED fixtures consume less electricity, provide long-lasting performance, and require less frequent replacement than traditional bulbs.",
            },
            {
              icon: "Layout",
              title: "Modern Bathroom Design",
              description: "Thoughtfully selected lighting enhances mirrors, tile, vanities, and architectural features to create a refined appearance.",
            },
            {
              icon: "ShieldCheck",
              title: "Reliable Performance",
              description: "Professionally installed fixtures provide dependable operation, improved safety, and long-term durability for everyday use.",
            },
          ]}
        />

        <Tips
          title="Lighting Maintenance Tips"
          subtitle="Expert Bathroom Lighting Tips"
          description="Routine care helps maintain consistent brightness, extend fixture lifespan, and preserve the appearance of your bathroom lighting. Simple maintenance practices can keep your lighting system operating efficiently for years."
          tips={[
            {
              title: "Clean Fixtures Regularly",
              description: "Remove dust and moisture buildup from light fixtures and shades to maintain maximum brightness and a polished appearance.",
            },
            {
              title: "Choose Energy-Efficient LEDs",
              description: "LED bulbs provide long-lasting illumination, lower energy consumption, and reduced maintenance compared with traditional lighting.",
            },
            {
              title: "Check Switches & Controls",
              description: "Inspect dimmers and switches periodically to ensure smooth operation and consistent lighting performance.",
            },
            {
              title: "Replace Worn Components Promptly",
              description: "Replace damaged bulbs or aging fixtures before they affect brightness or overall functionality.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get a free consultation with premium lighting layout planning and upfront estimates." 
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
