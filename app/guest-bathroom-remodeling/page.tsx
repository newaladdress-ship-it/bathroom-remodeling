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
        serviceName="Guest Bathroom Remodeling in Chandler" 
        serviceDescription="Professional guest bathroom and powder room renovations in Chandler, AZ. Fast, high-impact updates for secondary bathrooms." 
        serviceUrl={`${siteConfig.url}/guest-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Guest Bathroom Remodeling in Chandler, AZ"
          subtitle="High-Impact Updates for Small Bathrooms & Powder Rooms"
          description="Make a lasting impression on your guests. We provide efficient, professional guest bathroom remodeling that combines style with practicality for your Chandler home."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Guest Bathroom", url: `${siteConfig.url}/guest-bathroom-remodeling/` }]}
        />

        <SubServices 
          title="Related Services"
          subtitle="More Solutions"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)}
        />

        <ServiceProcess
          title="Efficient Guest Bath Process"
          subtitle="Quick & Clean"
          description="We specialize in minimizing downtime so your secondary bathroom is back in service as quickly as possible."
          steps={[
            { number: "01", icon: "PhoneCall", title: "Smart Planning", description: "We identify the most impactful changes to maximize your budget and space." },
            { number: "02", icon: "Ruler", title: "Selection", description: "Quick-ship material options that keep your project on a tight schedule." },
            { number: "03", icon: "ShieldCheck", title: "Rapid Install", description: "Focused construction phase with dedicated crews for smaller spaces." },
            { number: "04", icon: "Sparkles", title: "Finish & Style", description: "Final details and styling so the room is guest-ready from day one." }
          ]}
        />

        <IssuesSolved
          title="Small Space Solutions"
          subtitle="Refreshing Your Guest Bath"
          description="We solve the specific challenges of secondary bathrooms and powder rooms in Chandler homes."
          issues={issues}
        />

        <Benefits
          title="Why Update Your Guest Bath?"
          subtitle="Small Changes, Big Impact"
          description="Discover the value of modernizing your home's secondary bathrooms."
          benefits={benefitsList}
        />

        <Tips
          title="Small Bath Best Practices"
          subtitle="Expert Advice"
          description="Design tips specifically for maximizing the impact of guest bathroom renovations."
          tips={tipsList}
        />

        <ServiceAreas />

        <ServiceCTA 
          title="Ready to refresh your guest bathroom?" 
          description="Get a fast, fixed-price quote for your guest bath or powder room update in Chandler." 
        />

        <ServiceFAQ faqs={faqs} />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
