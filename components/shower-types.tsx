import { Card } from "@/components/ui/card";

interface ShowerType {
  title: string;
  description: string;
  perfectFor?: string;
  priceRange?: string;
}

interface ShowerTypesProps {
  title?: string;
  subtitle?: string;
}

const showerTypes: ShowerType[] = [
  {
    title: "Walk-In Tile Showers",
    perfectFor: "Creating a durable, fully tiled shower space.",
    description:
      "Transform your bathing area with premium tile finishes designed for long-lasting beauty and performance. Choose from decorative wall patterns, built-in storage niches, bench seating, and slip-resistant flooring to create a shower that complements your bathroom while improving everyday comfort.",
  },
  {
    title: "Frameless Glass Shower Enclosures",
    perfectFor: "Bright, open, modern bathrooms.",
    description:
      "Enhance your shower with custom-measured glass panels that maximise natural light and create a spacious appearance. Available in clear, frosted, rain, and low-iron finishes, each enclosure is precisely fitted to deliver clean lines and a sleek contemporary look.",
  },
  {
    title: "Curbless & Zero-Threshold Showers",
    perfectFor: "Accessible and minimalist bathroom designs.",
    description:
      "Remove traditional step-over barriers with a seamless entry shower that combines convenience with elegant styling. Carefully engineered drainage systems and precision floor grading ensure reliable water flow while maintaining a smooth, uninterrupted surface.",
  },
  {
    title: "Tub-to-Shower Conversions",
    perfectFor: "Replacing an unused bathtub with a functional shower.",
    description:
      "Convert an outdated tub into a spacious walk-in shower that better suits your daily routine. This transformation improves accessibility, frees up usable space, and gives older bathrooms a cleaner, more practical design without changing the room's footprint.",
  },
  {
    title: "Shower Tile Replacement",
    perfectFor: "Refreshing worn or outdated shower walls.",
    description:
      "Replace cracked, stained, or ageing tile with durable new materials selected for easy maintenance and long-term performance. Fresh grout lines, modern finishes, and professionally prepared surfaces help restore the appearance and integrity of your shower enclosure.",
  },
  {
    title: "Master Bathroom Shower Renovations",
    perfectFor: "Luxury ensuite transformations.",
    description:
      "Reimagine your primary bathroom with a spacious shower designed around your lifestyle. Popular enhancements include oversized shower areas, premium fixtures, integrated seating, recessed shelving, decorative accents, and high-end finishes that elevate both comfort and visual appeal.",
  },
];

export default function ShowerTypes({ title = "Shower Upgrade Options We Provide", subtitle }: ShowerTypesProps) {
  return (
    <section className="py-16 bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showerTypes.map((showerType, index) => (
            <Card key={index} className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {showerType.title}
                </h3>
                {showerType.perfectFor && (
                  <p className="text-sm font-medium text-primary mb-4">
                    Perfect For: {showerType.perfectFor}
                  </p>
                )}
                {showerType.priceRange && (
                  <p className="text-sm font-medium text-primary mb-4">
                    Project Scope: {showerType.priceRange}
                  </p>
                )}
              </div>
              <p className="text-foreground/90 leading-relaxed text-sm">
                {showerType.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

