import { Ruler, ShowerHead, Layers, LayoutGrid, Palette, Phone } from "lucide-react";

const reasons = [
  {
    icon: Ruler,
    title: "Custom Bathroom Remodeling",
    description:
      "Every home is unique, so we create bathroom remodeling solutions tailored to your layout, style, and everyday needs for lasting comfort and functionality.",
  },
  {
    icon: ShowerHead,
    title: "Walk-In Showers & Tub Conversions",
    description:
      "Upgrade your bathroom with a custom walk-in shower or tub-to-shower conversion designed to maximize space, accessibility, and modern living.",
  },
  {
    icon: Layers,
    title: "Premium Tile & Quality Materials",
    description:
      "From bathroom tile installation to modern flooring and durable finishes, we use quality materials that combine style, performance, and everyday practicality.",
  },
  {
    icon: LayoutGrid,
    title: "Modern Vanities & Smart Storage",
    description:
      "Improve organization and enhance your bathroom with custom vanities, stylish countertops, and storage solutions designed around your space.",
  },
  {
    icon: Palette,
    title: "Personalized Bathroom Design",
    description:
      "Whether you're planning a small bathroom remodel or a complete bathroom renovation, every design is customized to match your home's style, needs, and budget.",
  },
  {
    icon: Phone,
    title: "Clear Communication & Stress-Free Remodeling",
    description:
      "From your free consultation through the final walkthrough, we keep you informed every step of the way so your bathroom remodel is simple, organized, and worry-free.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-20 bg-background border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 mb-6 text-foreground text-balance font-bold">
            Why Homeowners Choose ARZ Home Remodeling
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At ARZ Home Remodeling, we help Chandler homeowners create beautiful, functional bathrooms with personalized designs, quality craftsmanship, and a remodeling experience focused on your comfort from consultation to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 shrink-0">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
