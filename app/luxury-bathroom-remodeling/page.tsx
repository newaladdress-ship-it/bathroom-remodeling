
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
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
  title: "Luxury Bathroom Renovation Chandler AZ | Custom Spas | ARZ",
  description: "Experience premium luxury bathroom design in Chandler, AZ. High-end master suites, custom steam showers, marble tiling, and smart layouts. Call today!",
  openGraph: {
    title: "Luxury Bath Remodel | Chandler AZ Bathroom Renovation",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore luxury bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/luxury-bathroom-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-master-suite.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - High-End Luxury Bathroom Renovation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Bath Remodel | Chandler AZ Bathroom Renovation",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore luxury bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-master-suite.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/luxury-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "What defines a luxury bathroom remodel in Chandler?",
    answer: "A luxury bathroom renovation includes high performance materials like Italian Carrara marble, custom solid wood vanities, curbless walk in steam showers, freestanding stone resin tubs, and smart upgrades like programmable floor heating and digital shower controls."
  },
  {
    question: "How long does a luxury master bathroom renovation take?",
    answer: "A comprehensive luxury master bathroom remodel typically takes four to six weeks of active construction. This timeframe includes executing structural wall changes, upgrading plumbing supply loops, running dedicated electrical lines, laying intricate tile patterns, and mounting solid stone countertops."
  },
  {
    question: "Can my home foundation handle a heavy stone freestanding tub?",
    answer: "Standard subfloors are not engineered to support the heavy weight of a deep soaking tub filled with water and a person, which can easily exceed one thousand pounds. We structurally reinforce the floor joists under the tub before installation to ensure safe support."
  }
];

const issues = [
  { title: "Generic Builder Grade Layouts", description: "We reconfigure walls to expand walk in closet entries and optimize floor plans for a premium flow." },
  { title: "Cold Damp Floor Tiles", description: "We install low voltage underfloor radiant heating mats to keep your feet warm during winter." },
  { title: "Poor Lighting and Dark Showers", description: "We design custom recessed LED layouts with under cabinet lighting and vapor proof shower fixtures." }
];

const benefitsList = [
  { title: "Increased Home Equity", description: "High end bathroom renovations offer some of the highest ROIs for luxury Chandler real estate near Fulton Ranch." },
  { title: "Daily Wellness Retreat", description: "Transform a functional master bathroom into a personal spa sanctuary for daily relaxation and stress relief." },
  { title: "Smart Home Integration", description: "Voice controlled showers, smart anti fog mirrors, and programmable floor heating for ultimate modern comfort." }
];

const tipsList = [
  { title: "Reinforce Floor Joists", description: "Always reinforce support framing under heavy stone composite tubs before filling them with water." },
  { title: "Layer Your Lighting Designs", description: "Combine task vertical sconces, recessed ceiling lights, and smart dimmers for flattering mirror views." },
  { title: "Protect Natural Stone Surfaces", description: "Apply premium oil based sealers to porous marble or granite surfaces to block hard water mineral scales." }
];

const otherServices = getRelatedServices("/luxury-bathroom-remodeling/");

export default function LuxuryPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Luxury Bathroom Remodeling", url: "https://arzhomeremodeling.com/luxury-bathroom-remodeling/" } ]} />
      <ServiceSchema 
        serviceName="Luxury Bathroom Renovation in Chandler" 
        serviceDescription="Premium high end bathroom renovations in Chandler, AZ. Spa inspired master baths, custom tile, and luxury fixtures." 
        serviceUrl={`${siteConfig.url}/luxury-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Luxury Bathroom Renovation in Chandler, AZ"
          subtitle="Bespoke Design & Master Suite Transformations"
          description="Elevate your home with a custom-designed luxury bathroom. We specialize in high-end materials, spa-inspired features, and master craftsmanship for Chandler's most prestigious communities."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Luxury Remodeling", url: `${siteConfig.url}/luxury-bathroom-remodeling/` }]}
        />

        <ServiceProcess
          title="The Luxury Renovation Experience"
          subtitle="Our Process"
          description="Our process ensures every detail of your high end bathroom is executed with surgical precision."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Design Discovery", description: "Deep dive into your style, goals, and material preferences with our lead designer." },
            { number: "02", icon: "Ruler", title: "3D Rendering", description: "Visualize your new master bath with photorealistic 3D models and layout plans." },
            { number: "03", icon: "ShieldCheck", title: "Precision Build", description: "Our most experienced tradesmen handle the install, ensuring museum-quality tile and trim work." },
            { number: "04", icon: "Sparkles", title: "Final Reveal", description: "A detailed walkthrough and finishing session to ensure your new space is flawless." }
          ]}
        />

        <SubServices 
          title="Related Luxury Services"
          subtitle="Complete Transformations"
          description="We offer a full range of high end home renovation services."
          services={otherServices.map(s => s.name)}
        />

        <IssuesSolved
          title="Luxury Transformations"
          subtitle="Elevating Your Home"
          description="We solve the design and technical challenges of high end bathroom construction in Chandler."
          issues={issues}
        />

        <Benefits
          title="The Benefits of Luxury"
          subtitle="Invest in Your Lifestyle"
          description="Experience the difference of a custom built master suite designed specifically for your needs."
          benefits={benefitsList}
        />

        <Tips
          title="Designer Insights"
          subtitle="Luxury Best Practices"
          description="How to maximize the impact of your high end bathroom renovation."
          tips={tipsList}
        />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA 
          title="Ready to Fix Your Problem? Contact Us Today" 
          description="Get your free consultation today and discover how we can transform your bathroom space." 
        />
      </main>
      <Footer />
    </>
  );
}
