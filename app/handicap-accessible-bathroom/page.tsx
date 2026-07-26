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
import SubServices from "@/components/sub-services";
import { getRelatedServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Handicap Accessible Bathrooms Chandler AZ | ADA Pros | ARZ",
  description: "Expert handicap accessible bathroom remodeling in Chandler, AZ. Zero-threshold roll-in showers, safety grab bars, and custom vanities. Free estimate!",
  openGraph: {
    title: "Handicap Accessible | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore handicap accessible, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/handicap-accessible-bathroom/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - ADA Handicap Accessible Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handicap Accessible | Chandler AZ Bathroom Remodeling",
    description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore handicap accessible, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/handicap-accessible-bathroom/`,
  },
};

const faqs = [
  {
    question: "What makes a bathroom ADA compliant?",
    answer: "ADA-compliant bathrooms meet accessibility standards for wheelchair access, mobility, and safety. Key features include curbless walk-in showers, grab bars, accessible vanities with knee clearance, wider doorways (minimum 32 inches), non-slip flooring, and proper lighting."
  },
  {
    question: "How much does an accessible bathroom remodel cost in Chandler?",
    answer: "ADA-compliant bathroom remodels in Chandler are customized depending on the scope and existing layout. Curbless showers with linear drains and grab bar installation add premium features. We provide detailed written estimates before beginning work."
  },
  {
    question: "Can we retrofit an existing bathroom for accessibility?",
    answer: "Yes. We can retrofit most bathrooms to be ADA-compliant by removing barriers and adding accessible features. This might include replacing a bathtub with a curbless shower, widening doorways, adjusting vanity heights, and installing grab bars."
  }
];

const issues = [
  { title: "High Threshold Step-Over Hazards", description: "Standard tub barriers create serious trip hazards. We install zero-threshold curbless roll-in showers for seamless entry." },
  { title: "Slippery Surfaces & Lack of Support", description: "Unsecured walls lead to slips. We install structural backing for sleek ADA grab bars and non-slip porcelain tile flooring." },
  { title: "Inaccessible Vanities & Tight Clearances", description: "Traditional vanity boxes block wheelchairs. We build floating vanities with knee clearance and lever handles." }
];

const benefitsList = [
  { title: "Independence & Peace of Mind", description: "Self-reliant daily routines for seniors and individuals with mobility requirements." },
  { title: "Future-Proof Aging-In-Place", description: "Allows homeowners to stay comfortably in their Chandler homes for decades." },
  { title: "Stylish ADA Design", description: "Modern, luxury aesthetics with hidden safety engineering—never a clinical or medical look." }
];

const tipsList = [
  { title: "Install In-Wall Structural Backing", description: "Always add 2x8 wood blocking behind drywall during framing so grab bars support up to 500 lbs." },
  { title: "Choose High COF Tile", description: "Select porcelain floor tiles with a Dynamic Coefficient of Friction (DCOF) rating over 0.42 for slip resistance." },
  { title: "Widen Entry Doorways", description: "Ensure bathroom entry doorways are at least 32 to 36 inches wide to comfortably clear wheelchairs and walkers." }
];

const otherServices = getRelatedServices("/handicap-accessible-bathroom/");

export default function AccessibleBathroomPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Accessible Bathrooms", url: "https://arzhomeremodeling.com/handicap-accessible-bathroom/" } ]} />
      <ServiceSchema
        serviceName="Handicap Accessible Bathroom Remodeling"
        serviceDescription="ADA-compliant bathroom remodels with curbless showers, grab bars, and accessible design in Chandler, AZ"
        serviceUrl={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Handicap Accessible Bathroom Remodels in Chandler, AZ"
          subtitle="Handicap Accessible Bathroom Remodeling"
          description="Create a safe, beautiful bathroom designed for accessibility and aging-in-place. ADA-compliant renovations with modern design and professional installation."
          image="/images/projects/handicap-accessible-shower.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Accessible Bathrooms", url: `${siteConfig.url}/handicap-accessible-bathroom/` }]}
        />

        <ServiceProcess
          title="Our Accessible Bathroom Process"
          subtitle="ADA-Compliant & Safe"
          description="We ensure every accessible bathroom remodel meets ADA standards and your personal needs."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Accessibility Assessment", description: "We evaluate your current bathroom and identify accessibility barriers and opportunities." },
            { number: "02", icon: "Ruler", title: "ADA-Compliant Design", description: "We design a bathroom that exceeds ADA requirements while reflecting your style preferences." },
            { number: "03", icon: "ShieldCheck", title: "Permitting & Inspection", description: "We handle all Chandler city permits and manage the inspection process for compliance." },
            { number: "04", icon: "Sparkles", title: "Expert Installation", description: "Professional contractors install grab bars, fixtures, and features to exact ADA specifications." }
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Upgrades"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)} 
        />

        <IssuesSolved
          title="Accessibility Challenges Fixed"
          subtitle="Safety & Comfort Solutions"
          description="We eliminate physical barriers to create safer, easy-to-use bathrooms for Chandler families."
          issues={issues}
        />

        <Benefits
          title="Benefits of Accessible Bathroom Design"
          subtitle="Safety Meets Luxury"
          description="Discover how ADA-compliant updates protect independence and add home value."
          benefits={benefitsList}
        />

        <Tips
          title="Accessible Remodeling Insights"
          subtitle="Expert Best Practices"
          description="Essential guidelines for designing a safe and beautiful handicap accessible bathroom."
          tips={tipsList}
        />

        <Testimonials />

        <ServiceAreas />

        <ServiceCTA
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Get a free in-home ADA assessment and written estimate. Our team specializes in creating beautiful, safe bathrooms for all abilities."
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
