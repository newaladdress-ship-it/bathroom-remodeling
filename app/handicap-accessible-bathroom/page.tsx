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
        serviceName="Handicap Accessible Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Professional ADA handicap accessible bathroom remodeling in Chandler, Arizona. Roll-in curbless showers, grab bars, and wheelchair-accessible vanities."
        serviceUrl={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />
      <PriceSchema
        serviceName="Handicap Accessible Bathroom Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Handicap Accessible Bathroom Remodeling in Chandler, AZ"
          subtitle="Handicap Accessible Bathroom Remodeling"
          description="Create a safer, more comfortable bathroom with accessible remodeling solutions featuring barrier-free showers, walk-in tubs, grab bars, slip-resistant flooring, and thoughtful layouts designed to support independent living while maintaining modern style and lasting functionality."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Accessible Bathrooms", url: `${siteConfig.url}/handicap-accessible-bathroom/` }]}
        />

        <ServiceProcess
          title="Accessible Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Every accessible bathroom remodel begins with understanding your mobility needs, daily routine, and long-term goals. Our structured process combines thoughtful planning, accessible design, quality materials, and professional installation to create a safe, functional bathroom that supports independence while complementing the style of your home."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Accessibility Consultation", description: "We evaluate your existing bathroom, discuss mobility requirements, and recommend practical accessibility improvements tailored to your space and lifestyle." },
            { number: "02", icon: "Layout", title: "Accessible Design Planning", description: "Select barrier-free showers, walk-in tubs, grab bars, comfort-height fixtures, accessible vanities, and slip-resistant flooring that improve safety without sacrificing appearance." },
            { number: "03", icon: "Wrench", title: "Preparation & Installation", description: "Our team prepares the space, completes plumbing and structural modifications when needed, and installs every feature with precision and attention to detail." },
            { number: "04", icon: "Sparkles", title: "Final Inspection", description: "We verify functionality, safety, and finish quality to ensure your newly remodeled accessible bathroom is ready for comfortable everyday use." }
          ]}
        />

        <SubServices 
          title="Related Bathroom Services" 
          subtitle="More Upgrades"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)} 
        />

        <IssuesSolved
          title="Accessibility Challenges We Solve"
          subtitle="Common Problems Fixed"
          description="Bathrooms with outdated layouts or limited accessibility can make everyday routines difficult and increase the risk of slips and falls. Our remodeling solutions improve safety, mobility, and convenience while creating a welcoming environment that supports independent living."
          issues={[
            {
              title: "Difficult Tub Access",
              description: "Replace traditional bathtubs with barrier-free showers or walk-in tubs that provide safer entry and greater accessibility.",
            },
            {
              title: "Slippery Flooring",
              description: "Install slip-resistant flooring and secure grab bars to improve stability and reduce the risk of falls.",
            },
            {
              title: "Limited Mobility Space",
              description: "Reconfigure bathroom layouts with wider clearances and accessible fixtures that improve movement for wheelchairs and mobility aids.",
            },
            {
              title: "Hard-to-Reach Fixtures",
              description: "Upgrade to comfort-height toilets, accessible vanities, and easy-to-operate faucets that simplify daily routines.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Accessible Bathroom Remodeling"
          subtitle="Why It Matters"
          description="A professionally designed accessible bathroom improves safety, comfort, and independence while making everyday tasks easier for individuals of all ages and mobility levels. Modern accessibility features also provide long-term value and greater confidence at home."
          benefits={[
            {
              icon: "Accessibility",
              title: "Greater Independence",
              description: "Thoughtfully designed layouts support safer daily routines while reducing reliance on assistance.",
            },
            {
              icon: "ShieldCheck",
              title: "Improved Safety",
              description: "Slip-resistant surfaces, grab bars, and accessible fixtures help reduce fall risks throughout the bathroom.",
            },
            {
              icon: "Clock",
              title: "Aging-in-Place Comfort",
              description: "Accessible upgrades allow homeowners to remain comfortable in their homes as their needs change over time.",
            },
            {
              icon: "Sparkles",
              title: "Modern Design",
              description: "Today's accessibility features blend seamlessly with contemporary finishes to create a bathroom that's both functional and visually appealing.",
            },
          ]}
        />

        <Tips
          title="Accessible Bathroom Remodeling Tips"
          subtitle="Expert Best Practices"
          description="Planning ahead and selecting the right accessibility features can improve comfort, simplify daily routines, and help your remodeled bathroom continue meeting your needs well into the future."
          tips={[
            {
              title: "Choose Barrier-Free Entry",
              description: "Curbless showers provide easier access for wheelchairs, walkers, and anyone with limited mobility.",
            },
            {
              title: "Install Slip-Resistant Flooring",
              description: "Textured porcelain tile or other slip-resistant surfaces improve stability while maintaining a clean, modern appearance.",
            },
            {
              title: "Plan for Future Accessibility",
              description: "Include reinforced wall blocking during remodeling so grab bars can be installed or repositioned if needs change later.",
            },
            {
              title: "Improve Lighting & Visibility",
              description: "Bright LED lighting and well-placed fixtures increase visibility and make the bathroom safer for everyday use.",
            },
          ]}
        />

        <Testimonials />

        <ServiceAreas />

        <ContactSection />

        <ServiceCTA
          title="Ready to Fix Your Problem? Contact Us Today"
          description="Get a free in-home ADA assessment and written estimate. Our team specializes in creating beautiful, safe bathrooms for all abilities."
        />
      </main>
      <Footer />
    </>
  );
}
