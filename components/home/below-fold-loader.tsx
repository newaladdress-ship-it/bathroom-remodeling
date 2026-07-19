import UspBar from "@/components/home/usp-bar";
import PainPoints from "@/components/home/pain-points";
import ComparisonBenefits from "@/components/home/comparison-benefits";
import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/services-grid";
import LocalTrust from "@/components/home/local-trust";
import ChandlerProjects from "@/components/home/chandler-projects";
import ProcessSection from "@/components/home/process-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import FAQ from "@/components/home/faq";
import ServiceAreas from "@/components/home/service-areas";
import ContactSection from "@/components/home/contact-section";

export default function BelowFoldLoader() {
  return (
    <>
      <UspBar />
      <PainPoints />
      <ComparisonBenefits />
      <AboutPreview />
      <ServicesGrid />
      <LocalTrust cityName="Chandler" />
      <ChandlerProjects />
      <ProcessSection />
      <WhyChooseUs />
      <FAQ />
      <ServiceAreas />
      <ContactSection />
    </>
  );
}

