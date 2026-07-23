import { Card } from "@/components/ui/card";

interface ShowerType {
  title: string;
  description: string;
  priceRange: string;
}

interface ShowerTypesProps {
  title?: string;
  subtitle?: string;
}

const showerTypes: ShowerType[] = [
  {
    title: "Walk-In Tile Showers",
    description:
      "A tiled shower design provides a highly customizable option for homeowners replacing outdated fiberglass surrounds or improving an existing bathroom layout. We install durable tile surfaces with carefully planned features such as built-in niches, seating areas, and coordinated finishes. Each project includes proper preparation, moisture protection, and detailed installation techniques to help create a reliable and attractive bathing area.",
    priceRange: "Mid-Range Scope",
  },
  {
    title: "Frameless Glass Shower Enclosures",
    description:
      "Frameless glass creates a clean, open appearance while allowing surrounding tile work and bathroom features to stand out. Panels are measured and fitted to match the specific dimensions of your space, creating a modern finish without bulky framing. Available options include clear, low-iron, and privacy glass styles to match different design preferences.",
    priceRange: "Standard to Custom Upgrade",
  },
  {
    title: "Curbless / Zero-Threshold Designs",
    description:
      "A zero-threshold layout removes the traditional raised entry, creating a smoother transition between the bathroom floor and bathing area. This style is popular among homeowners who want improved accessibility, a minimalist appearance, or a more spacious feel. Proper slope planning, drainage placement, and surface selection are essential parts of creating a functional design.",
    priceRange: "Luxury Custom Scope",
  },
  {
    title: "Tub-to-Shower Conversion",
    description:
      "Many homeowners replace unused bathtubs with more practical shower layouts that better fit their lifestyle. A conversion project typically involves removing the existing tub area, adjusting plumbing connections, preparing surfaces, and installing a complete upgraded bathing system in the available footprint. This option is especially popular in older Chandler homes where homeowners want better functionality without expanding the bathroom.",
    priceRange: "Mid-Range Scope",
  },
  {
    title: "Shower Tile Replacement",
    description:
      "Damaged grout, outdated tile, and worn surfaces can make a bathroom feel aged. Our tile replacement process includes removing existing materials, evaluating the underlying structure, preparing the surface, and installing new finishes selected for durability and easy maintenance. We help homeowners choose materials and grout options that provide a cleaner appearance and longer-lasting results.",
    priceRange: "Standard Level",
  },
  {
    title: "Master Bathroom Shower Upgrades",
    description:
      "A master bathroom improvement can completely change how the space feels and functions. Options may include expanding the bathing area, improving storage, adding built-in seating, updating fixtures, or creating a more open design. Our team works with homeowners to develop layouts that balance comfort, appearance, and everyday usability.",
    priceRange: "Luxury Custom Scope",
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
                <p className="text-sm font-medium text-primary mb-4">
                  Project Scope: {showerType.priceRange}
                </p>
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
