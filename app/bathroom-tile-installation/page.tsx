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
  title: "Bathroom Tile Installation Chandler, AZ | Free Estimate",
  description: "Transform your bathroom with custom ceramic, porcelain & stone tile in Chandler, AZ. Quality craftsmanship and durable results. Call today!",
  openGraph: {
    title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-tile-installation/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-tile-install.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Tile Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-tile-install.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-tile-installation/`,
  },
};

const faqs = serviceContent["bathroom-tile-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-tile-installation");

export default function BathroomTileInstallationPage() {
  const tileData = serviceContent["bathroom-tile-installation"];
  
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Tile Installation", url: "https://arzhomeremodeling.com/bathroom-tile-installation/" } ]} />
      <ServiceSchema 
        serviceName="Bathroom Tile Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom tile installation in Chandler, Arizona. Custom wall tiles, floor tiling, accent niches, and waterproof backer board preparation." 
        serviceUrl={`${siteConfig.url}/bathroom-tile-installation/`} 
      />
      <PriceSchema
        serviceName="Bathroom Tile Installation"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-tile-installation/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Tile Installation in Chandler, AZ"
          subtitle="Custom Ceramic, Porcelain & Natural Stone Solutions"
          description="Transform your bathroom with expertly installed ceramic, porcelain, mosaic, and natural stone finishes designed for lasting beauty and everyday performance. Our skilled craftsmen create seamless layouts, waterproof surfaces, and precision detailing that enhance style, durability, and long-term value for Chandler homeowners."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Tile Installation", url: `${siteConfig.url}/bathroom-tile-installation` }]}
        />

        <ServiceProcess
          title="Our Precision Installation Process"
          subtitle="How We Work"
          description="Every project follows a carefully planned workflow that combines moisture protection, accurate layout planning, and expert craftsmanship to deliver beautiful, long-lasting results."
          steps={[
            { number: "01", icon: "Ruler", title: "Layout Planning", description: "We measure the space, map grout joints, and plan balanced patterns with clean transitions to create a seamless finished appearance." },
            { number: "02", icon: "ShieldCheck", title: "Surface Preparation", description: "Backer boards, waterproof membranes, and substrate leveling provide a stable foundation that supports lasting performance and durability." },
            { number: "03", icon: "Hammer", title: "Material Placement", description: "Ceramic, porcelain, mosaic, and natural stone pieces are carefully positioned with consistent spacing, precise alignment, and detailed cuts around fixtures and corners." },
            { number: "04", icon: "Paintbrush", title: "Grout Application", description: "Premium grout is applied evenly to create clean joints, improve moisture resistance, and deliver a polished, uniform finish." },
            { number: "05", icon: "Sparkles", title: "Final Protection & Quality Check", description: "After cleanup, we inspect every detail, apply sealers where appropriate, and verify the finished surface meets our quality standards before project completion." }
          ]}
        />

        <SubServices 
          title="Explore More Washroom Upgrades"
          subtitle="Complete Solutions"
          description="Beyond tile, we offer full-service renovation options to transform your home."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Common Surface Problems We Resolve"
          subtitle="Issues We Solve"
          description="Our solutions are designed to address moisture, structural movement, and everyday wear, helping Chandler homeowners enjoy durable, attractive bathroom finishes."
          issues={[
            {
              title: "Moisture Behind Wall Surrounds",
              description: "Advanced waterproof membrane systems create a protective barrier that helps keep moisture away from framing, reducing the risk of leaks and hidden damage.",
            },
            {
              title: "Cracks Caused by Structural Movement",
              description: "Flexible bonding materials and uncoupling membranes help absorb minor foundation movement, protecting finished surfaces from premature cracking.",
            },
            {
              title: "Mineral Buildup & Discolored Joints",
              description: "High-performance epoxy grout resists moisture, staining, and hard water deposits, making routine cleaning easier while maintaining a fresh appearance.",
            },
          ]}
        />

        <Benefits
          title="Advantages of Expert Craftsmanship"
          subtitle="Why It Matters"
          description="Quality materials, proven installation methods, and attention to detail create a finished space that's built to perform beautifully for years."
          benefits={[
            {
              icon: "Layout",
              title: "Custom Design Options",
              description: "Subway, herringbone, basketweave, mosaic, and other decorative layouts provide a personalized look that complements your bathroom.",
            },
            {
              icon: "Droplets",
              title: "Reliable Moisture Protection",
              description: "Professional waterproofing systems help defend wall assemblies against everyday humidity, reducing the potential for water-related damage.",
            },
            {
              icon: "Sparkles",
              title: "Premium Surface Materials",
              description: "Dense porcelain, ceramic, and natural stone offer exceptional durability, low water absorption, and long-lasting visual appeal.",
            },
            {
              icon: "ShieldCheck",
              title: "Durable Joint Performance",
              description: "Epoxy grout provides a stain-resistant, low-maintenance finish that helps preserve clean lines and lasting beauty without frequent upkeep.",
            },
          ]}
        />

        <Tips
          title="Expert Care & Maintenance Tips"
          subtitle="Professional Insights"
          description="Simple maintenance habits help preserve the appearance, durability, and performance of your newly finished bathroom surfaces."
          tips={[
            {
              title: "Choose Low-Absorption Materials",
              description: "Porcelain and other low-porosity materials resist moisture, stains, and everyday wear better than many traditional options.",
            },
            {
              title: "Invest in Reliable Waterproofing",
              description: "Quality waterproof membranes help shield wall assemblies and supporting structures from long-term moisture exposure.",
            },
            {
              title: "Upgrade to Epoxy Grout",
              description: "Epoxy grout offers outstanding resistance to mold, staining, and moisture while making routine cleaning much easier.",
            },
            {
              title: "Protect Natural Stone",
              description: "Materials such as marble and travertine should be sealed as recommended to help preserve their appearance and guard against moisture and staining.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA title="Ready to Fix Your Problem? Contact Us Today" description="Get expert design consultation, quality materials, and precision tiling for your dream home." />
      </main>
      <Footer />
    </>
  );
}
