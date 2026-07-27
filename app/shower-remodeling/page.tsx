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
import ShowerTypes from "@/components/shower-types";
import ShowerGallery from "@/components/shower-gallery";

export const metadata: Metadata = {
  title: "Custom Shower Remodeling Chandler AZ | Tile & Glass",
  description: "Transform your Chandler, AZ bathroom with a custom shower remodel featuring tile, frameless glass, and waterproof systems. Call now!",
  openGraph: {
    title: "Custom Shower Remodeling Chandler AZ | Tile & Glass",
    description: "Transform your Chandler, AZ bathroom with a custom shower remodel featuring tile, frameless glass, and waterproof systems. Call now!",
    url: `${siteConfig.url}/shower-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Tile Shower Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Shower Remodeling Chandler AZ | Tile & Glass",
    description: "Transform your Chandler, AZ bathroom with a custom shower remodel featuring tile, frameless glass, and waterproof systems. Call now!",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
};

const faqs = [
  {
    question: "What is included in a shower remodeling project?",
    answer: "A shower project may include design planning, preparation, waterproofing, tile work, fixtures, glass installation, and final finishing.",
  },
  {
    question: "How much does a shower remodel cost?",
    answer: "Pricing depends on factors such as bathroom size, materials, layout changes, plumbing requirements, and design selections.",
  },
  {
    question: "How long does a shower renovation usually take?",
    answer: "Project timelines vary depending on scope, materials, and customization requirements.",
  },
  {
    question: "Do you handle plumbing changes?",
    answer: "Yes, projects requiring plumbing adjustments can include fixture relocation and related updates.",
  },
  {
    question: "How do you help prevent shower leaks?",
    answer: "Proper preparation, waterproofing systems, quality installation, and suitable materials all play important roles.",
  },
];

import Testimonials from "@/components/home/testimonials";

export default function ShowerRemodelingPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Shower Remodeling", url: "https://arzhomeremodeling.com/shower-remodeling/" } ]} />
      <ServiceSchema
        serviceName="Shower Remodeling in Chandler, Arizona"
        serviceDescription="Professional shower upgrades in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations, and premium fixtures."
        serviceUrl={`${siteConfig.url}/shower-remodeling/`}
      />
      <PriceSchema
        serviceName="Shower Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/shower-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        {/* 1. Hero */}
        <ServiceHero
          title="Shower Remodeling in Chandler, AZ"
          subtitle="Modern Design • Precision Craftsmanship • Lifetime Waterproof Protection"
          description="Upgrade your bathroom with a professionally designed shower system built around your space, style, and daily needs. ARZ Home Remodeling combines advanced moisture protection, detailed tile craftsmanship, custom glass solutions, and durable finishes to create showers that look beautiful and perform reliably for years. From modern upgrades to complete bathroom transformations, our team delivers a seamless remodeling experience with clear pricing and expert installation. Call now!"
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Shower Remodeling", url: `${siteConfig.url}/shower-remodeling/` },
          ]}
        />

        {/* 2. Our Process */}
        <ServiceProcess
          title="A Detailed Approach to Your Shower Upgrade"
          subtitle="Our Process"
          description="Every bathroom improvement project requires careful planning, proper preparation, and skilled installation. Our process focuses on creating a durable, functional, and visually appealing bathing space while keeping homeowners informed from start to finish."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Design Planning",
              description: "We begin by understanding your goals, reviewing your existing bathroom layout, and discussing design preferences. Our team evaluates available space, material options, storage needs, and functionality requirements to create a plan that fits your home.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Preparation & System Installation",
              description: "Before new materials are installed, we carefully prepare the existing area, address necessary plumbing adjustments, and inspect the foundation of the project. Proper preparation helps ensure the finished space performs well for years.",
            },
            {
              number: "03",
              icon: "ShieldCheck",
              title: "Advanced Waterproofing Protection",
              description: "Moisture protection is one of the most important parts of any shower project. We install professional waterproofing systems, including Schluter®-KERDI solutions when appropriate, to help protect walls and flooring from water intrusion.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Tile, Fixtures & Finishing Details",
              description: "Our installers complete detailed tile work, fixture placement, storage features, and finishing touches that bring the design together. Every element is installed with attention to alignment, durability, and appearance.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Glass Installation & Final Walkthrough",
              description: "The final stage includes installing the selected glass enclosure, checking functionality, reviewing finishing details, and walking through the completed project with the homeowner.",
            },
          ]}
        />

        {/* 3. Services Included / Sub Services */}
        <ShowerTypes />

        {/* 4. Problems We Solve */}
        <IssuesSolved
          title="Common Shower Problems We Help Solve"
          subtitle="Solutions for Outdated and Damaged Bathrooms"
          description="Older bathrooms often develop issues that affect appearance, comfort, and maintenance. Our remodeling solutions focus on improving performance while creating a more enjoyable daily experience."
          issues={[
            {
              title: "Water Damage Concerns",
              description: "Old shower areas with failing surfaces or worn seals can allow moisture to reach surrounding materials. We improve protection with proper waterproofing methods, updated surfaces, and careful installation practices.",
            },
            {
              title: "Damaged Tile and Aging Finishes",
              description: "Cracked tile, outdated designs, and worn grout can make a bathroom look neglected. We replace aging materials with durable options designed for easier cleaning and long-term use.",
            },
            {
              title: "Difficult Maintenance",
              description: "Traditional grout and older shower materials may require frequent upkeep. Modern tile options, improved grout selections, and updated layouts can help reduce maintenance requirements.",
            },
            {
              title: "Outdated Fixtures & Poor Functionality",
              description: "Older valves, fixtures, and layouts may affect comfort and usability. We can update components to create a more convenient and enjoyable bathing experience.",
            },
          ]}
        />

        {/* 5. Benefits of This Service */}
        <Benefits
          title="Benefits of Updating Your Shower"
          subtitle="Why Homeowners Upgrade Their Bathrooms"
          description="A professionally planned bathroom improvement can enhance daily comfort, improve functionality, and add long-term value to your home."
          benefits={[
            {
              title: "A More Comfortable Daily Experience",
              description: "Modern features such as improved layouts, upgraded fixtures, built-in storage, and seating options allow homeowners to create a space designed around their lifestyle.",
            },
            {
              title: "Better Moisture Protection",
              description: "Professional waterproofing methods help reduce the risk of moisture-related problems and support a stronger, longer-lasting installation.",
            },
            {
              title: "Improved Layout & Accessibility",
              description: "Features such as wider entries, seating areas, and thoughtful placement of fixtures can make the bathroom easier and more comfortable to use.",
            },
            {
              title: "Easier Cleaning & Maintenance",
              description: "Updated surfaces, quality materials, and modern glass options can help homeowners spend less time maintaining their bathroom.",
            },
          ]}
        />

        {/* 6. Tips to Prevent Future Issues */}
        <Tips
          title="Expert Maintenance Tips"
          subtitle="Keep Your Updated Bathroom Looking Great"
          description="Smart strategies to maintain the beauty and durability of your newly upgraded shower space."
          tips={[
            {
              title: "Tip 1: Maintain Waterproofing Protection",
              description: "Quality waterproofing is essential behind every successful shower installation.",
            },
            {
              title: "Tip 2: Choose Durable Surfaces",
              description: "Porcelain tile and properly selected materials help create easier-to-maintain bathrooms.",
            },
            {
              title: "Tip 3: Add Functional Storage",
              description: "Built-in niches provide convenient storage while keeping the design organized.",
            },
            {
              title: "Tip 4: Select Practical Fixtures",
              description: "Finishes that handle everyday use well can help maintain the appearance of your bathroom.",
            },
          ]}
        />

        {/* 7. Customer Reviews */}
        <Testimonials />

        {/* 8. Service Areas */}
        <ServiceAreas />

        {/* 9. Contact Information */}
        <ContactSection />

        {/* 10. Ready to Fix Your Problem? Contact Us Today */}
        <ServiceCTA
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Get your free consultation today and discover how we can create the shower of your dreams."
        />
      </main>
      <Footer />
    </>
  );
}
