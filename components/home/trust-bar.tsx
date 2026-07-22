"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Shield, Award, Clock } from "lucide-react";

const trustBadges = [
  {
    icon: Star,
    title: "Premium Designs",
  },
  {
    icon: Shield,
    title: "Fully Insured",
  },
  {
    icon: Award,
    title: "Extensive Experience",
  },
  {
    icon: Clock,
    title: "Dedicated Service",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-secondary py-8 lg:py-12 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className={`flex items-center justify-center gap-3 bg-card border border-border rounded-xl px-4 py-3 transition-opacity duration-500 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm font-medium">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
