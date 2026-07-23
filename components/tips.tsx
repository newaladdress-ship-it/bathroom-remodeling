import {
  Lightbulb,
  Droplets,
  Palette,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Lighting Matters",
    description: "Layer different types of lighting for the best ambiance and functionality."
  },
  {
    icon: Droplets,
    title: "Ventilation is Key",
    description: "Proper ventilation prevents moisture damage and maintains air quality."
  },
  {
    icon: Palette,
    title: "Choose Timeless Colors",
    description: "Neutral colors provide flexibility and won't go out of style quickly."
  },
  {
    icon: Shield,
    title: "Invest in Quality",
    description: "High-quality fixtures and materials save money in the long run."
  }
];

type TipItem = string | { icon?: LucideIcon; title: string; description: string };

interface TipsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  tips?: TipItem[];
}

function normalizeTip(tip: TipItem, index: number) {
  if (typeof tip === "string") {
    return {
      icon: Sparkles,
      title: `Tip ${index + 1}`,
      description: tip,
    };
  }

  return {
    icon: tip.icon ?? Lightbulb,
    title: tip.title,
    description: tip.description,
  };
}

export default function Tips({
  title = "Expert Tips",
  subtitle,
  description = "Professional advice to help you make the best decisions for your bathroom remodel.",
  tips: customTips,
}: TipsProps) {
  const tipsToRender = customTips ?? tips;

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {subtitle && (
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tipsToRender.map((tip, index) => {
            const normalizedTip = normalizeTip(tip, index);
            const Icon = normalizedTip.icon;
            return (
              <div
                key={`${normalizedTip.title}-${index}`}
                className="text-center bg-background rounded-2xl p-8 lg:p-10 border border-border flex flex-col items-center justify-start min-h-[340px] shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 mb-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {normalizedTip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {normalizedTip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
