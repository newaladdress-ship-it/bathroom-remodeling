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
import { ServiceSchema, FAQSchema, BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
  description: "Upgrade your bathroom with a tub to shower conversion in Chandler, AZ. Custom tile, frameless glass, and waterproof systems. Get a free estimate!",
  openGraph: {
    title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
    description: "Upgrade your bathroom with a tub to shower conversion in Chandler, AZ. Custom tile, frameless glass, and waterproof systems. Get a free estimate!",
    url: `${siteConfig.url}/tub-to-shower-conversion/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Professional Tub-to-Shower Conversion in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
    description: "Upgrade your bathroom with a tub to shower conversion in Chandler, AZ. Custom tile, frameless glass, and waterproof systems. Get a free estimate!",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion/`,
  },
};

const faqs = serviceContent["tub-to-shower-conversion"].faqs;
const otherServices = getRelatedServices("/tub-to-shower-conversion/");



export default function TubToShowerConversionPage() {
  const serviceData = serviceContent["tub-to-shower-conversion"];
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Tub To Shower Conversion", url: "https://arzhomeremodeling.com/tub-to-shower-conversion/" } ]} />
      <ServiceSchema
        serviceName="Tub to Shower Conversion in Chandler, Arizona"
        serviceDescription="Professional tub to shower conversion in Chandler, Arizona. Convert your bathtub to a modern walk-in shower with expert installation."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion`}
      />
      <PriceSchema
        serviceName="Tub to Shower Conversion"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/tub-to-shower-conversion/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        {/* 1. Hero */}
        <ServiceHero
          title="Walk-In Shower Conversions for Chandler Homes"
          subtitle="Replace Your Bathtub With a Spacious Walk-In Shower"
          description="Upgrade your bathroom by replacing an outdated bathtub with a modern walk-in shower designed for comfort, accessibility, and everyday convenience. ARZ Home Remodeling creates durable shower systems featuring premium tile, custom glass enclosures, advanced waterproofing, and professionally planned layouts that improve both functionality and style throughout Chandler and nearby East Valley communities."
          image="/images/services/bathroom-tile-remodel-az.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion` },
          ]}
        />

        {/* 2. Our Process */}
        <ServiceProcess
          title="From Bathtub to Modern Shower Space"
          subtitle="Our Process"
          description="Every project follows a carefully planned installation process that prioritizes safety, durability, and long-term performance. From removing the existing bathtub to completing the final finishing details, our team manages every phase with precision and attention to quality."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation & Space Planning",
              description: "We begin by evaluating your existing bathroom layout, discussing your goals, and identifying the best approach for improving functionality. Measurements, plumbing locations, storage options, and design preferences are reviewed before work begins.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Bathtub Removal & Site Preparation",
              description: "Our team safely removes the existing bathtub, wall surrounds, and outdated materials while inspecting the framing and subfloor for any issues that should be addressed before construction continues.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Plumbing & Drainage Improvements",
              description: "If required, plumbing components are updated to support the new shower layout. This may include relocating supply lines, modifying drain connections, and preparing the area for modern fixtures and improved water flow.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Waterproofing & Installation",
              description: "Before any finish materials are installed, the shower area receives a professional waterproofing system designed to help protect surrounding walls and flooring from moisture intrusion. Tile, fixtures, storage niches, and other selected features are then installed with careful attention to detail.",
            },
            {
              number: "05",
              icon: "ClipboardCheck",
              title: "Quality Inspection & Finishing Touches",
              description: "Before the final enclosure is installed, we carefully inspect tile alignment, grout consistency, fixture placement, drainage performance, and waterproofing details. Any necessary adjustments are completed to ensure the finished shower is ready for everyday use and built to our workmanship standards.",
            },
            {
              number: "06",
              icon: "ShieldCheck",
              title: "Glass Installation & Final Inspection",
              description: "The project concludes with the installation of the selected glass enclosure, hardware adjustments, functionality checks, and a final walkthrough to ensure every detail meets expectations.",
            },
          ]}
        />

        {/* 3. Services Included / Sub Services */}
        <SubServices 
          title="Explore Other Services"
          subtitle="More Solutions"
          description="We provide a full suite of bathroom remodeling services in Chandler."
          services={otherServices.map(s => s.name)}
        />

        {/* 4. Problems We Solve */}
        <IssuesSolved
          title="Creating Safer and More Functional Bathrooms"
          subtitle="Problems We Help Homeowners Solve"
          description="Many older bathrooms no longer meet the needs of today's homeowners. We help improve accessibility, comfort, and everyday usability through thoughtfully planned bathroom upgrades."
          issues={[
            {
              title: "Difficult Bathtub Access",
              description: "High tub walls can become challenging for children, older adults, and anyone with limited mobility. Replacing the existing bathing area with an easier-entry design creates a more comfortable and accessible daily routine.",
            },
            {
              title: "Outdated Bathroom Layouts",
              description: "Older bathrooms often include oversized bathtubs that take up valuable floor space without matching the homeowner's current lifestyle. A redesigned shower area creates a more open and practical layout.",
            },
            {
              title: "Aging Plumbing Components",
              description: "Older drain assemblies, valves, and plumbing connections may no longer perform efficiently. During the renovation process, we inspect and update these components whenever improvements are needed.",
            },
            {
              title: "Moisture & Surface Deterioration",
              description: "Years of daily use can lead to worn finishes, damaged grout, loose tile, or moisture-related concerns. Our renovation process replaces aging materials with modern systems designed for improved durability and easier maintenance.",
            },
          ]}
        />

        {/* 5. Benefits of This Service */}
        <Benefits
          title="Advantages of Replacing an Outdated Bathtub"
          subtitle="Why Homeowners Make the Switch"
          description="Updating an older bathing area can improve everyday comfort, increase usability, and give your bathroom a cleaner, more modern appearance. Homeowners throughout Chandler often choose this upgrade to better match their current lifestyle and future needs."
          benefits={[
            {
              icon: "ShieldCheck",
              title: "Improved Accessibility",
              description: "A low-entry shower provides easier access than a traditional bathtub, making daily routines more comfortable for children, older adults, and anyone with limited mobility. Optional seating and support features can further improve safety.",
            },
            {
              icon: "Ruler",
              title: "Better Use of Bathroom Space",
              description: "Removing a bulky bathtub creates a more open layout that can make even smaller bathrooms feel larger. The additional space also provides greater flexibility for storage, fixtures, and design features.",
            },
            {
              icon: "Sparkles",
              title: "More Convenient Daily Routine",
              description: "A modern shower offers a quicker and more practical bathing experience for busy households. Improved layouts and updated fixtures make everyday use more efficient while reducing maintenance.",
            },
            {
              icon: "Home",
              title: "Contemporary Style",
              description: "Updated tile, premium fixtures, coordinated finishes, and custom glass features can dramatically improve the appearance of your bathroom while complementing the rest of your home's design.",
            },
          ]}
        />

        {/* 6. Tips to Prevent Future Issues */}
        <Tips
          title="Helpful Tips Before You Begin"
          subtitle="Planning Your Bathroom Upgrade"
          tips={[
            {
              title: "Think About Long-Term Needs",
              description: "Consider how your bathroom will serve your household over the next 10–20 years, especially if accessibility or aging in place may become important.",
            },
            {
              title: "Select Durable Materials",
              description: "Choosing quality tile, glass, fixtures, and grout helps improve longevity while reducing future maintenance requirements.",
            },
            {
              title: "Include Practical Storage",
              description: "Built-in shelving, recessed niches, and integrated seating help keep shower essentials organized without sacrificing space.",
            },
            {
              title: "Invest in Professional Moisture Protection",
              description: "Proper waterproofing behind finished surfaces is one of the most important factors in creating a durable bathroom that performs well for years.",
            },
          ]}
        />

        {/* 7. Service Areas */}
        <ServiceAreas />

        {/* 8. Contact Information */}
        <ContactSection />

        {/* 9. Ready to Fix Your Problem? Contact Us Today */}
        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Get your free consultation today and discover how we can transform your bathroom space."
        />
      </main>
      <Footer />
    </>
  );
}
