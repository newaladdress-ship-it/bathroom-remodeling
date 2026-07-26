import dynamic from "next/dynamic";

const UspBar = dynamic(() => import("@/components/home/usp-bar"));
const AboutPreview = dynamic(() => import("@/components/home/about-preview"));
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"));
const LocalTrust = dynamic(() => import("@/components/home/local-trust"));
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"));
const ProcessSection = dynamic(() => import("@/components/home/process-section"));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"));
const FAQ = dynamic(() => import("@/components/home/faq"));
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"));
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"));
const ContactSection = dynamic(() => import("@/components/home/contact-section"));

export default function BelowFoldLoader() {
  return (
    <>
      <UspBar />
      <AboutPreview />
      <ServicesGrid />
      <LocalTrust cityName="Chandler" />
      <ChandlerProjects />
      <ProcessSection />
      <WhyChooseUs />
      <FAQ />
      <ServiceAreas />
      <BlogPreview />
      <ContactSection />
    </>
  );
}

