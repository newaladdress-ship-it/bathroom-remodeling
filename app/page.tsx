import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

import BelowFoldLoader from "@/components/home/below-fold-loader";
import BlogPreview from "@/components/home/blog-preview";

export const metadata: Metadata = {
  title: "Chandler AZ Bathroom Remodeling Contractor | ROC338304",
  description: "ARZ is Chandler's licensed bathroom remodeling contractor (ROC338304). Walk-in showers, tub conversions & tile. Free estimate: (520) 569-3339.",
  openGraph: {
    title: "Chandler AZ Bathroom Remodeling Contractor | ROC338304",
    description: "ARZ is Chandler's licensed bathroom remodeling contractor (ROC338304). Walk-in showers, tub conversions & tile. Free estimate: (520) 569-3339.",
    type: "website",
    url: `${siteConfig.url}/`,
    images: [
      {
        url: `${siteConfig.url}/images/og-homepage.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  other: {
    "og:type": "business.business",
  },
};

const faqSchemaItems = homeFaqs.map((f) => ({
  question: f.question,
  answer: faqAnswerPlain(f.answer),
}));

export default function HomePage() {
  return (
    <>
        <WebSiteSchema />
        <FAQSchema faqs={faqSchemaItems} />
        <SpeakableSchema url={`${siteConfig.url}/`} />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <BelowFoldLoader />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
