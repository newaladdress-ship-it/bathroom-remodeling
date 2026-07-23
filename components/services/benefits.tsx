import { Sparkles, ShieldCheck, LayoutGrid, Droplets } from "lucide-react";

interface Benefit {
  icon?: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  subtitle: string;
  description?: string;
  benefits: Benefit[];
}

const defaultIcons = [Sparkles, ShieldCheck, LayoutGrid, Droplets];

export default function Benefits({ title, subtitle, description, benefits }: BenefitsProps) {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-accent text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-3 block">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-background text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-background/80 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = defaultIcons[index % defaultIcons.length];

            return (
              <div
                key={benefit.title}
                className="bg-background/5 border border-background/15 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-background">
                    {benefit.title}
                  </h3>
                  <p className="text-background/75 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
