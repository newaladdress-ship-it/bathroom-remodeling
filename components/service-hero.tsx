import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

interface ServiceHeroProps {
  title: string;
  description: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  backgroundImage?: string;
  titleClassName?: string;
}

export default function ServiceHero({ 
  title, 
  description, 
  subtitle,
  image,
  breadcrumbs,
  backgroundImage = "/images/hero/luxury-shower-remodel-chandler.avif",
  titleClassName
}: ServiceHeroProps) {
  const rawImage = image ?? backgroundImage;
  const heroImage = rawImage.endsWith('.webp') ? rawImage.replace(/\.webp$/, '.avif') : rawImage;
  const hero480 = heroImage.endsWith('.avif') && !heroImage.includes('-480') && !heroImage.includes('-640') && !heroImage.includes('-828')
    ? heroImage.replace('.avif', '-480.avif')
    : heroImage;
  const hero640 = heroImage.endsWith('.avif') && !heroImage.includes('-480') && !heroImage.includes('-640') && !heroImage.includes('-828')
    ? heroImage.replace('.avif', '-640.avif')
    : heroImage;
  const hero828 = heroImage.endsWith('.avif') && !heroImage.includes('-480') && !heroImage.includes('-640') && !heroImage.includes('-828')
    ? heroImage.replace('.avif', '-828.avif')
    : heroImage;

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 lg:pt-36 pb-12 lg:pb-16" aria-label={title}>
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      {/* Background Image - LCP Optimized with Mobile Responsive AVIF */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          {hero480 !== heroImage && (
            <source srcSet={hero480} media="(max-width: 480px)" type="image/avif" />
          )}
          {hero640 !== heroImage && (
            <source srcSet={hero640} media="(min-width: 481px) and (max-width: 640px)" type="image/avif" />
          )}
          {hero828 !== heroImage && (
            <source srcSet={hero828} media="(min-width: 641px) and (max-width: 828px)" type="image/avif" />
          )}
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-full max-w-[1300px] mx-auto">
          {subtitle && (
            <p className="text-primary-foreground text-xs sm:text-sm uppercase tracking-wider mb-2 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className={titleClassName || "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"}>
            {title}
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 max-w-[1250px] mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px] font-bold shadow-lg"
              aria-label={`Call us at ${siteConfig.phone} to speak with our bathroom renovation team`}
            >
              <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary hover:bg-white/90 hover:text-primary min-w-[200px] font-semibold shadow-lg"
              aria-label="Speak to a Project Supervisor"
            >
              <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Speak to a Project Supervisor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
