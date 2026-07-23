import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, CheckCircle2, ArrowRight, Phone, Pencil, Hammer, Sparkles } from "lucide-react";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About ARZ Home Remodeling | Chandler Bathroom Remodelers",
  description: "Learn about ARZ Home Remodeling and how we help Chandler homeowners transform their bathrooms. Call today for a free consultation and start planning your project.",
  openGraph: {
    title: "About ARZ Home Remodeling | Chandler Bathroom Remodelers",
    description: "Learn about ARZ Home Remodeling and how we help Chandler homeowners transform their bathrooms. Call today for a free consultation and start planning your project.",
    url: `${siteConfig.url}/about/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ARZ Home Remodeling | Chandler Bathroom Remodelers",
    description: "Learn about ARZ Home Remodeling and how we help Chandler homeowners transform their bathrooms. Call today for a free consultation and start planning your project.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
};

const values = [
  {
    icon: Award,
    title: "Local Chandler Focus",
    description: "We proudly help homeowners throughout Chandler by providing personalized bathroom remodeling solutions designed around local homes, modern styles, and practical everyday living."
  },
  {
    icon: Users,
    title: "Design That Fits Your Home",
    description: "Every bathroom is different. We help you choose layouts, finishes, tile, lighting, vanities, and storage solutions that reflect your style while improving comfort and functionality."
  },
  {
    icon: Clock,
    title: "Quality Materials",
    description: "We carefully select durable materials and finishes designed to perform well in busy bathrooms while creating a clean, timeless appearance that lasts."
  },
  {
    icon: Shield,
    title: "Customer-First Experience",
    description: "From your initial consultation to project completion, we believe clear communication, honest recommendations, and attention to detail create a remodeling experience homeowners can trust."
  },
];

const aboutFaqs = [
  {
    question: "Why should I hire a professional contractor instead of a handyman?",
    answer: "Plumbing and electrical installations in wet bathroom areas must follow strict building safety rules. A professional, bonded contractor ensures your project meets all City of Chandler municipal building codes. Working with a professional contractor protects your financial investment and ensures your home remains safe and fully insurable."
  },
  {
    question: "Do you pull the necessary building permits for my remodel?",
    answer: "Yes, we coordinate all paperwork and pull required building permits from the City of Chandler Development Services Department. We handle the entire inspection process, including structural, plumbing, and electrical checkups, to ensure your bathroom meets all local building safety codes."
  },
  {
    question: "How do you handle HOA approvals in Chandler neighborhoods?",
    answer: "We have extensive experience working with local homeowner associations in communities like Ocotillo, Fulton Ranch, and Sun Lakes. We prepare the necessary design documents, color selections, and layout plans required for your specific HOA review board to ensure a smooth, worry-free approval process."
  }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "About Us", url: `${siteConfig.url}/about/` }
        ]} 
      />
      <FAQSchema faqs={aboutFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Top-Rated Bathroom Remodeling Contractor in Chandler AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                ARZ Home Remodeling is a professional residential remodeling team serving the East Valley. Our professional crew has helped families across Chandler, Gilbert, Mesa, and surrounding communities transform their bathrooms with custom craftsmanship and reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-border">
                  <Image
                    src="/images/hero-bathroom.jpg"
                    alt="ARZ Home Remodeling Bathroom Project in Chandler, AZ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <p className="text-xl font-serif font-bold text-primary">ARZ Home Remodeling</p>
                  <p className="text-sm text-muted-foreground">Custom Showers & Tile</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Why We Started ARZ Home Remodeling
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Every homeowner deserves a bathroom that feels comfortable, functional, and built around their lifestyle. ARZ Home Remodeling was created to help Chandler homeowners transform outdated bathrooms into modern spaces with thoughtful design, quality materials, and attention to every detail.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We believe remodeling should be simple, transparent, and centered on your goals. Whether you're planning a custom shower, bathroom tile installation, vanity replacement, or a complete bathroom renovation, we focus on solutions that fit your home, budget, and everyday needs. From your first consultation to the final walkthrough, our priority is helping you make confident decisions while creating a bathroom you'll enjoy for years to come.
                </p>

                <ul className="mt-6 space-y-3">
                  {["Locally operated", "Local Chandler, AZ business", "Experienced design support", "Premium materials"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Drives Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Process
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our streamlined process ensures a stress-free remodeling experience from start to finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Free Consultation",
                  description: "Schedule your complimentary in-home consultation to discuss your vision."
                },
                {
                  icon: Pencil,
                  title: "Design & Planning",
                  description: "We help draft layout selections and material designs for your space."
                },
                {
                  icon: Hammer,
                  title: "Expert Construction",
                  description: "Skilled craftsmen execute every detail with precision and quality materials."
                },
                {
                  icon: Sparkles,
                  title: "Final Walkthrough",
                  description: "We ensure every detail exceeds expectations before handoff."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Ready to Start Your Remodeling Project?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Contact us today for a free consultation. Let's discuss your vision and create a plan to transform your space.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    Speak to a Project Supervisor <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    Call Now: {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
