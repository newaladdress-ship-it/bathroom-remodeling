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
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import ShowerTypes from "@/components/shower-types";
import ShowerCostSection from "@/components/shower-cost-section";
import ChandlerShowerMaterials from "@/components/chandler-shower-materials";

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

const otherServices = getRelatedServices("/shower-remodeling/");

export default function ShowerRemodelingPage() {
  const showerData = serviceContent["shower-remodeling"];
  
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

        <LocalTrust cityName="Chandler" />

        {/* REGIONAL SHOWER SERVICES COVERS */}
        <section className="py-16 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              East Valley Shower Renovation & Design Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Homeowners throughout Chandler and the surrounding East Valley trust ARZ Home Remodeling for thoughtfully planned bathroom improvements. We help transform outdated bathing areas into functional, modern spaces with carefully selected materials, improved layouts, and professional craftsmanship. From initial planning and preparation to final finishing details, our team manages each phase of the project with attention to quality and durability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you are comparing upgrade options, explore our <Link href="/blog/walk-in-shower-cost-chandler-az/" className="text-primary hover:underline font-semibold">walk-in shower cost Chandler</Link> guide to understand common factors that influence project pricing, materials, and design choices.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Chandler Bathroom Shower Upgrades</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every bathroom has unique requirements, which is why we create solutions based on your home&apos;s layout, style preferences, and everyday needs. Our team handles complete shower transformations including surface preparation, layout adjustments, drainage considerations, wall systems, and finishing work. Whether you prefer a modern tiled appearance, a low-maintenance design, or a more open bathroom layout, we focus on creating a finished space that combines comfort, functionality, and long-term performance.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Serving Mesa, Gilbert & Tempe Homeowners</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ARZ Home Remodeling provides professional bathroom improvement services throughout Mesa, Gilbert, and Tempe. Homeowners choose our team for detailed planning, quality workmanship, and personalized designs that improve both the appearance and usability of their bathrooms. Our projects include updated shower layouts, upgraded surfaces, custom storage features, and modern finishing options designed around each homeowner&apos;s goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ShowerTypes />

        <ShowerCostSection />

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

        <ShowerGallery />

        <ChandlerShowerMaterials />

        <LocalTrust cityName="Chandler" />

        <section className="py-16 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground text-center">
              Professional Shower Services Available
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2 text-lg">Tile Shower Upgrades</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our tile-focused bathroom improvements include detailed surface preparation, quality materials, and carefully installed finishes designed for Chandler homes.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2 text-lg">Accessible Bathroom Improvements</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We create safer bathroom layouts with options such as easier-entry designs, seating solutions, and accessibility-focused features.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <ServiceFAQ faqs={faqs} />

        {/* MORE BATHROOM SOLUTIONS */}
        <section className="py-12 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide block text-center mb-1">More Bathroom Solutions</span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">
              Explore Our Other Remodeling Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-base mb-2">
                    Tub to Shower Conversion
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    Convert an unused bathtub area into a more practical and comfortable bathing space with updated layouts and modern features.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary group-hover:underline mt-auto inline-flex items-center gap-1">
                  Explore Tub to Shower Conversion →
                </span>
              </Link>
              <Link
                href="/ada-bathroom-remodeling/"
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-base mb-2">
                    Handicap Accessible Bathroom
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    Create a safer bathroom environment with accessibility-focused improvements, comfortable layouts, and practical design features.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary group-hover:underline mt-auto inline-flex items-center gap-1">
                  Explore Handicap Accessible Bathroom →
                </span>
              </Link>
              <Link
                href="/bathroom-tile-installation/"
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-base mb-2">
                    Bathroom Tile Installation
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    Upgrade your bathroom surfaces with professionally installed tile options designed for durability, appearance, and easy maintenance.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary group-hover:underline mt-auto inline-flex items-center gap-1">
                  Explore Bathroom Tile Installation →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Testimonials category="shower-remodeling" />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

