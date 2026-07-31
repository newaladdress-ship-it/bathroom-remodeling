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
  title: "Bathroom Flooring Installation Chandler AZ | Custom Tile",
  description: "Expert bathroom flooring installation in Chandler, AZ. Specialized in waterproof tile, luxury vinyl plank, and slip-resistant floors. Call for a quote!",
  openGraph: {
    title: "Bathroom Flooring Install | Chandler AZ Bathroom Renovation",
    description: "Bathroom renovation service in Chandler, AZ by ARZ. Explore bathroom flooring install, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-flooring-installation/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-flooring-installation/`,
  },
};

const faqs = serviceContent["bathroom-flooring-installation"].faqs;
const otherServices = getRelatedServices("/bathroom-flooring-installation/");

export default function BathroomFlooringInstallationPage() {
  const serviceData = serviceContent["bathroom-flooring-installation"];

  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Flooring Installation", url: "https://arzhomeremodeling.com/bathroom-flooring-installation/" } ]} />
      <ServiceSchema 
        serviceName="Bathroom Flooring Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom flooring installation in Chandler, Arizona. Dense porcelain tile, natural stone, and slip resistant textured floors." 
        serviceUrl={`${siteConfig.url}/bathroom-flooring-installation/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Flooring Installation in Chandler, AZ"
          subtitle="Premium Tile, Stone & Waterproof Flooring Solutions"
          description="Upgrade your bathroom with professionally installed tile, stone, porcelain, or luxury vinyl flooring designed to withstand daily moisture and wear. Our experienced team delivers precise installation, lasting durability, and clean, modern finishes that enhance comfort, style, and long-term value for your bathroom renovation project in Chandler."
          image="/images/services/bathroom-flooring-chandler.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Flooring", url: `${siteConfig.url}/bathroom-flooring-installation` },
          ]}
        />

        <ServiceProcess
          title="Precision Tile & Surface Installation Process"
          subtitle="Our Process"
          description="A carefully planned installation workflow designed to create a level, moisture-resistant, and long-lasting foundation for your bathroom renovation that performs beautifully in Chandler homes."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Existing Surface Removal & Subfloor Preparation",
              description: "We remove worn materials, inspect the underlying surface, and level the subfloor to provide a stable base for the new finish.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "Moisture Protection & Crack Isolation",
              description: "Anti-fracture membranes and waterproofing components are installed to help protect tile surfaces from minor slab movement and moisture intrusion.",
            },
            {
              number: "03",
              icon: "Layout",
              title: "Custom Layout Planning",
              description: "Every tile pattern is measured, dry-fitted, and aligned to create balanced spacing, clean edges, and an attractive finished appearance.",
            },
            {
              number: "04",
              icon: "Hammer",
              title: "Premium Material Placement",
              description: "Porcelain, ceramic, natural stone, or luxury vinyl planks are secured using high-performance polymer-modified adhesives for exceptional strength and durability.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Grouting & Final Finishing",
              description: "We complete the project with stain-resistant epoxy grout, detailed edge finishing, and a thorough cleanup to leave a polished, ready-to-use space.",
            },
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Options"
          description="Looking for something else? We offer a variety of bathroom renovation solutions."
          services={otherServices.map(s => s.name)} 
        />

        <IssuesSolved
          title="Common Surface Problems We Resolve"
          subtitle="Issues We Solve"
          description="From cracked tile to moisture-related damage, our bathroom renovation experts provide lasting solutions that improve durability, safety, and everyday performance for Chandler homeowners."
          issues={[
            {
              title: "Cracked Tile Surfaces",
              description: "Flexible bonding systems and crack-isolation membranes help absorb minor structural movement, reducing the risk of future tile damage.",
            },
            {
              title: "Loose Grout & Uneven Subfloors",
              description: "Before installing new materials, we stabilize weak subfloors and reinforce the surface with cement backer boards to create a solid foundation.",
            },
            {
              title: "Mold, Moisture & Discolored Joints",
              description: "Non-porous epoxy grout resists water absorption, staining, mildew, and everyday wear while maintaining a cleaner appearance.",
            },
            {
              title: "Slippery Walking Areas",
              description: "High-traction porcelain, textured finishes, and mosaic patterns provide better grip to improve safety in wet environments.",
            },
          ]}
        />

        <Benefits
          title="Built for Long-Term Performance"
          subtitle="Why Choose Us"
          description="Every installation is completed with premium materials and proven techniques that help your new bathroom renovation stay attractive, durable, and easy to maintain for years."
          benefits={[
            {
              icon: "Droplets",
              title: "Advanced Moisture Protection",
              description: "Dense porcelain, ceramic, and natural stone options help resist water penetration while supporting a healthier indoor environment.",
            },
            {
              icon: "Accessibility",
              title: "Safer Underfoot",
              description: "Slip-resistant textures and carefully selected finishes improve traction without sacrificing style or comfort.",
            },
            {
              icon: "Sparkles",
              title: "Long-Lasting Grout Performance",
              description: "Premium epoxy grout minimizes staining, resists cracking, and requires less maintenance than many traditional cement-based alternatives.",
            },
            {
              icon: "ShieldCheck",
              title: "Structural Stability",
              description: "Crack-isolation underlayments help protect finished tile surfaces from minor slab movement, helping extend the lifespan of your investment.",
            },
          ]}
        />

        <Tips
          title="Expert Care Tips for Long-Lasting Tile & Stone Surfaces"
          subtitle="Care & Maintenance"
          description="Simple maintenance practices can help preserve the appearance, durability, and moisture resistance of your newly installed bathroom renovation materials for years to come."
          tips={[
            {
              title: "Choose Low-Absorption Materials",
              description: "Porcelain and natural stone with low water absorption provide better resistance to stains, moisture, and everyday wear than many traditional surface options.",
            },
            {
              title: "Protect the Foundation",
              description: "Quality uncoupling membranes help accommodate minor structural movement beneath the finished surface, reducing the likelihood of cracks over time.",
            },
            {
              title: "Use Premium Epoxy Grout",
              description: "Epoxy grout creates a durable, non-porous seal that resists mildew, staining, and moisture while requiring less routine maintenance.",
            },
            {
              title: "Prioritize Slip-Resistant Finishes",
              description: "Select textured surfaces with reliable slip-resistance ratings to improve traction and enhance safety in areas exposed to frequent water.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />
        
        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get a free consultation with premium material samples and upfront estimates." 
        />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
