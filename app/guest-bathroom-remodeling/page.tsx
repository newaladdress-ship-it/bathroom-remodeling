import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
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
  title: "Guest Bath Remodel Chandler AZ | Small Bath Pros | ARZ",
  description: "Transform your guest bathroom in Chandler, AZ. We specialize in space-saving vanities, curbless walk-in showers, and high-impact updates. Call today!",
  openGraph: {
    title: "Guest Bath Remodel | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore guest bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/guest-bathroom-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Guest Bathroom and Powder Room Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Bath Remodel | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore guest bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/guest-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "How long does a guest bathroom remodel take in Chandler?",
    answer: "A standard guest bathroom or powder room remodel typically takes ten to fourteen days of active construction. Because secondary baths have smaller square footage, we can execute demolition, drywall prep, tile laying, and plumbing fixture installation very quickly."
  },
  {
    question: "What is the average cost to remodel a secondary bathroom?",
    answer: "A high impact guest bathroom cosmetic update including new vanity cabinets, quartz countertops, modern fixtures, porcelain floor tiles, and paint is customized to your specific space. Full gut renovations with tile showers are priced based on the selected layout and materials. We provide a detailed, fixed-price quote before any demolition starts."
  },
  {
    question: "Can you add a walk in shower to a half bath powder room?",
    answer: "Yes, we frequently convert small half baths into full bathrooms by reconfiguring adjacent closet spaces to add a modern curbless walk in shower. This smart layout change adds significant value to your Chandler property."
  }
];

const issues = [
  { title: "Dated Builder Grade Materials", description: "We install modern wood vanities, porcelain floor tiles, and bright LED layouts that instantly refresh the space." },
  { title: "Poor Storage for Guests", description: "We install custom recessed tile niches and floating wall hung vanities that maximize space without cluttering the room." },
  { title: "Inefficient Ventilation", description: "We install high CFM quiet exhaust fans that quickly vent moisture out to prevent blistering wall paint and mold." }
];

const benefitsList = [
  { title: "Welcoming Guest Experience", description: "Provide friends and family with a modern, clean, and comfortable bathroom during their stay near Sun Lakes." },
  { title: "Maximum ROI for Resale", description: "Updated guest bathrooms are one of the most cost effective ways to increase a Chandler home's value." },
  { title: "Daily Convenience", description: "A secondary bathroom that feels as good as your master bath makes morning routines easier for everyone." }
];

const tipsList = [
  { title: "Use Large Format Tile", description: "Larger tiles with fewer grout lines can make a small guest bathroom feel much bigger." },
  { title: "Prioritize the Vanity", description: "In a small space, the vanity is the focal point. Invest in a quality piece with ample storage." },
  { title: "Opt for a Floating Vanity", description: "Seeing more of the floor creates the optical illusion of more square footage in tight spaces." }
];

const otherServices = getRelatedServices("/guest-bathroom-remodeling/");

export default function GuestBathPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Guest Bathroom Remodeling", url: "https://arzhomeremodeling.com/guest-bathroom-remodeling/" } ]} />
      <ServiceSchema
        serviceName="Guest Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Professional guest bathroom and powder room remodeling in Chandler, Arizona. Custom vanities, space-saving layouts, and modern finishes."
        serviceUrl={`${siteConfig.url}/guest-bathroom-remodeling/`}
      />
      <PriceSchema
        serviceName="Guest Bathroom Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/guest-bathroom-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Guest Bathroom Remodeling in Chandler, AZ"
          subtitle="High-Impact Updates for Small Bathrooms & Powder Rooms"
          description="Refresh your guest bathroom with custom remodeling solutions featuring stylish vanities, modern fixtures, durable flooring, updated lighting, and quality finishes that create a welcoming, functional space while adding comfort, convenience, and long-term value to your home."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Guest Bathroom", url: `${siteConfig.url}/guest-bathroom-remodeling/` }]}
        />

        <ServiceProcess
          title="Guest Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Every guest bathroom remodel is carefully planned to improve functionality, maximize available space, and create a welcoming environment for family and visitors. From design consultation and material selection to installation and final inspection, our streamlined process delivers quality results with minimal disruption to your home."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Planning & Design", description: "We evaluate your bathroom layout, discuss your goals, and recommend practical remodeling solutions that suit your space, style, and budget." },
            { number: "02", icon: "Layout", title: "Material Selection", description: "Choose durable flooring, quality vanities, premium fixtures, lighting, and finish options that complement the rest of your home." },
            { number: "03", icon: "Wrench", title: "Preparation & Installation", description: "Our team removes outdated materials, prepares plumbing and electrical systems as needed, and completes every installation with careful attention to detail." },
            { number: "04", icon: "Sparkles", title: "Final Inspection", description: "We complete finishing work, verify functionality, and inspect every detail to ensure your remodeled guest bathroom is ready for everyday use." }
          ]}
        />

        <SubServices 
          title="Related Services"
          subtitle="More Solutions"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Issues We Solve with Guest Bathroom Remodeling"
          subtitle="Common Problems Fixed"
          description="Older guest bathrooms often have outdated finishes, limited storage, poor lighting, and inefficient layouts that reduce both comfort and functionality. Our remodeling solutions modernize these spaces with durable materials, practical storage, and improved design features."
          issues={[
            {
              title: "Outdated Fixtures & Finishes",
              description: "Replace builder-grade materials with modern vanities, premium flooring, updated lighting, and attractive finishes that create a fresh appearance.",
            },
            {
              title: "Limited Storage",
              description: "Add space-saving cabinetry, shelving, and vanity storage to keep guest essentials organized without overcrowding the room.",
            },
            {
              title: "Poor Lighting & Ventilation",
              description: "Improve visibility with modern lighting while enhancing ventilation to reduce humidity and help protect against moisture-related issues.",
            },
            {
              title: "Inefficient Layout",
              description: "Reconfigure the space to improve movement, functionality, and everyday convenience while making the room feel more open.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Guest Bathroom Remodeling"
          subtitle="Why It Matters"
          description="Updating a guest bathroom enhances your home's comfort, improves functionality, and creates a more inviting experience for family and visitors. Modern materials and thoughtful design also help increase durability while adding long-term value to your property."
          benefits={[
            {
              icon: "Sparkles",
              title: "Welcoming Space",
              description: "Create a clean, comfortable bathroom that leaves a positive impression on overnight guests and visitors.",
            },
            {
              icon: "Layout",
              title: "Improved Functionality",
              description: "Modern layouts, updated fixtures, and practical storage solutions make the space easier to use every day.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Home Value",
              description: "A professionally remodeled guest bathroom improves overall appeal and contributes to stronger resale potential.",
            },
            {
              icon: "ShieldCheck",
              title: "Durable Materials",
              description: "Quality flooring, moisture-resistant finishes, and modern fixtures provide reliable performance with less maintenance.",
            },
          ]}
        />

        <Tips
          title="Guest Bathroom Remodeling Tips"
          subtitle="Expert Advice"
          description="Simple design choices and routine maintenance can help keep your guest bathroom attractive, functional, and easy to maintain while maximizing the available space."
          tips={[
            {
              title: "Choose Space-Saving Fixtures",
              description: "Compact vanities and efficient storage solutions help maximize floor space without sacrificing functionality.",
            },
            {
              title: "Use Durable, Moisture-Resistant Materials",
              description: "Select porcelain tile, waterproof flooring, and quality finishes designed to withstand daily use and humidity.",
            },
            {
              title: "Improve Lighting",
              description: "Layer vanity lighting with overhead fixtures to create a bright, welcoming atmosphere for guests.",
            },
            {
              title: "Keep Storage Organized",
              description: "Include cabinets, shelves, or recessed storage to keep toiletries and towels neatly organized and easily accessible.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get a fast, fixed-price quote for your guest bath or powder room update in Chandler." 
        />
      </main>
      <Footer />
    </>
  );
}
