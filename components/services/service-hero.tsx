import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  breadcrumbs: { name: string; url: string }[];
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  image,
  breadcrumbs,
}: ServiceHeroProps) {
  const heroImage = image.endsWith('.webp') ? image.replace(/\.webp$/, '.avif') : image;

  return (
    <section className="relative flex items-center overflow-hidden pt-32 lg:pt-36 pb-12 lg:pb-16">
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Background Image - LCP Optimized for Mobile */}
      <div className="absolute inset-0 z-0 bg-primary/40">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/hero/luxury-shower-remodel-chandler-640.avif" media="(max-width: 640px)" type="image/avif" />
          <source srcSet="/images/hero/luxury-shower-remodel-chandler-828.avif" media="(min-width: 641px) and (max-width: 828px)" type="image/avif" />
          <img
            src={heroImage}
            alt={`${title} - Professional bathroom remodeling in Chandler Arizona`}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-left">
        <div className="w-full max-w-[1350px]">
          {/* Breadcrumbs */}
          <nav className="mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
              {breadcrumbs.map((item, index) => (
                <li key={item.url} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{item.name}</span>
                  ) : (
                    <Link href={item.url} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Subtitle */}
          <span className="text-accent text-xs sm:text-sm font-bold tracking-wider uppercase block mb-1.5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {subtitle}
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 leading-relaxed w-full max-w-[1300px] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base px-7 py-5 font-bold shadow-lg"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>Get a Free Estimate</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-foreground border-white hover:bg-white/90 text-sm sm:text-base px-7 py-5 font-semibold shadow-lg"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
