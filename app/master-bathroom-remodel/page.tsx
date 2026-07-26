import Testimonials from "@/components/home/testimonials";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import ContactSection from "@/components/home/contact-section";
import ServiceAreas from "@/components/home/service-areas";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
  description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
  openGraph: {
    title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
    description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
    url: `${siteConfig.url}/master-bathroom-remodel/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-master-suite.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Luxury Master Bathroom Remodel in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Bathroom Remodeling Chandler | Luxury Bathroom Renovations",
    description: "Transform your master bathroom remodeling project in Chandler with custom layouts, premium tile, luxury showers, and modern vanities. Call now!",
    images: [`${siteConfig.url}/images/og-master-suite.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/master-bathroom-remodel/`,
  },
};

const faqs = [
  {
    question: "What is included in a master bathroom remodel?",
    answer:
      "Our master bath remodels typically include converting old bathtubs into walk in tile showers with frameless glass enclosures, replacing low double vanities with premium quartz countertops, laying non slip porcelain flooring, updating LED lighting systems, and coordinating all Chandler city plumbing permits."
  },
  {
    question: "How long does a master bathroom remodel take in Chandler?",
    answer:
      "A comprehensive master bathroom remodel typically takes three to five weeks depending on scope. Custom cabinetry, detailed tile work, and layout changes can extend the timeline. We provide a firm schedule in your written proposal."
  },
  {
    question: "How much does a master bathroom remodel cost in Chandler, AZ?",
    answer:
      "Master bathroom remodeling costs vary depending on the size of the space, material selections (like custom cabinetry or quartz slabs), and whether you are shifting plumbing lines or reconfiguring the layout. We provide free on-site consultations and detailed, line-item written estimates before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Do you handle permits for master bathroom remodels in Chandler?",
    answer:
      "Yes. Anytime structural changes, plumbing relocation, or electrical upgrades are involved, we pull all required Chandler city permits and manage the inspection process."
  },
  {
    question: "What features are popular in master bathrooms in Chandler?",
    answer:
      "Chandler homeowners most often request curbless walk-in showers with frameless glass, double vanities with quartz countertops, heated tile floors, rainfall showerheads, and custom tile work. We also recommend epoxy grout to combat Chandler's hard water mineral staining."
  }
];

const otherServices = getRelatedServices("/master-bathroom-remodel/");

export default function MasterBathPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Master Bathroom Remodel", url: "https://arzhomeremodeling.com/master-bathroom-remodel/" } ]} />
      <ServiceSchema
        serviceName="Master Bathroom Remodel in Chandler, Arizona"
        serviceDescription="Full-scope master bathroom renovations in Chandler, AZ. Shower enclosures, vanity replacement, tile flooring, plumbing and lighting upgrades managed by one professional Arizona contractor."
        serviceUrl={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <FAQSchema faqs={faqs} />
      <PriceSchema
        serviceName="Master Bathroom Remodel Chandler AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Luxury Master Bathroom Renovations for Chandler Homes"
          subtitle="Luxury Transformations Managed by One Local Team"
          description="Upgrade your primary bathroom into a comfortable, functional retreat with personalized layouts, premium tile, custom vanities, spacious showers, elegant lighting, and expertly crafted finishes. ARZ Home Remodeling designs beautiful spaces that improve everyday living while complementing the style of homes throughout Chandler and the surrounding East Valley."
          image="/images/projects/modern-double-vanity-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Master Bathroom Remodel", url: `${siteConfig.url}/master-bathroom-remodel` },
          ]}
        />

        <SubServices
          title="Complementary Services"
          subtitle="Complete Transformations"
          description="We handle every aspect of your master bath project, from tile to custom vanities."
          services={otherServices.map((s) => s.name)}
        />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to Remodel Your Master Bathroom?"
          description="Schedule your free in-home consultation today to discuss your vision, materials, and layout options."
        />

        <ServiceFAQ faqs={faqs} />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
