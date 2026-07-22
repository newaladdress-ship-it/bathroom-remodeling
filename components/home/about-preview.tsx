import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/optimized/bathroom-remodeling-professional-crew.avif"
                alt="ARZ Home Remodeling professional crew performing custom bathroom remodeling in Chandler, AZ"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground">
              Your Local Bathroom Remodeling Team in Chandler, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We help Chandler homeowners transform outdated bathrooms into modern, functional spaces designed for everyday living. From custom showers and premium tile to vanity upgrades and complete bathroom renovations, every project is completed with attention to detail, clear communication, and quality workmanship that homeowners can rely on.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              <Link href="/about/">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
