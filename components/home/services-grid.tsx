import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShowerHead, Bath, LayoutGrid, Sparkles, Accessibility, ArrowRightLeft, ArrowUpDown, Lightbulb, Droplets, Users } from "lucide-react";

const services = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description: "Custom curbless walk-in showers with Schluter-KERDI waterproofing, premium porcelain tile, frameless glass, and epoxy grout.",
    icon: ShowerHead,
    image: "/images/services/shower-remodeling.jpg",
    alt: "Custom walk-in shower remodel with floor-to-ceiling tile in Chandler AZ",
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description: "Convert your unused bathtub into a spacious, modern walk-in shower with expanded drain lines and scald-prevention valves.",
    icon: ArrowRightLeft,
    image: "/images/services/tub-to-shower-conversion.jpg",
    alt: "Tub to shower conversion with open walk-in design in Chandler AZ",
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling/",
    description: "Upgrade your bathroom with custom bathtub remodeling in Chandler, AZ. Soaking tubs, freestanding tub installations, & custom surrounds.",
    icon: Bath,
    image: "/images/services/bathtub-remodeling.jpg",
    alt: "Freestanding bathtub remodel with modern fixtures in a luxury bathroom",
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Full primary suite renovations — double vanities, custom quartz countertops, freestanding soaking tubs, and detailed lighting.",
    icon: Sparkles,
    image: "/images/services/master-bathroom-remodel.jpg",
    alt: "Luxury master bathroom remodel with double vanity and soaking tub",
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description: "Maximize small bathroom space with floating vanities, comfort-height toilets, and smart tiling that makes rooms feel larger.",
    icon: LayoutGrid,
    image: "/images/services/small-bathroom-remodel.jpg",
    alt: "Small bathroom remodel with space-saving floating vanity and modern tile",
  },
  {
    name: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description: "High-impact updates for secondary bathrooms, powder rooms, and guest suites — fresh tile, new vanity, modern fixtures.",
    icon: Users,
    image: "/images/services/guest-bathroom-remodeling.jpg",
    alt: "Remodeled guest bathroom with fresh tile, new vanity, and modern fixtures",
  },
  {
    name: "Luxury Bathroom Remodeling",
    href: "/luxury-bathroom-remodeling/",
    description: "Premium master bath transformations with high-end finishes, heated floors, spa showers, and designer tile.",
    icon: Sparkles,
    image: "/images/services/luxury-bathroom-remodeling.jpg",
    alt: "Luxury bathroom remodel with spa shower, freestanding tub, and designer tile",
  },
  {
    name: "ADA Bathroom Remodeling",
    href: "/ada-bathroom-remodeling/",
    description: "Safe, ADA-compliant updates with curbless showers, structural grab bar backing, and slip-resistant mosaic tile.",
    icon: Accessibility,
    image: "/images/services/ada-bathroom-remodeling.jpg",
    alt: "ADA accessible bathroom with grab bars, curbless shower, and safety features",
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description: "ADA-compliant updates with curbless showers, structural grab bar backing, and slip-resistant mosaic tile.",
    icon: Accessibility,
    image: "/images/services/handicap-accessible-bathroom.jpg",
    alt: "Handicap accessible bathroom with grab bars and curbless shower entry",
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation/",
    description: "Professional bathroom flooring with durable, water-resistant porcelain or luxury vinyl plank — properly leveled and waterproofed.",
    icon: ArrowUpDown,
    image: "/images/services/bathroom-flooring-installation.jpg",
    alt: "Bathroom flooring installation with large format porcelain tiles in modern bathroom",
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation/",
    description: "Modern bathroom lighting design and installation for enhanced ambiance — vanity bars, recessed cans, and dimmer controls.",
    icon: Lightbulb,
    image: "/images/services/bathroom-lighting-installation.jpg",
    alt: "Modern bathroom lighting installation with LED vanity lights and recessed cans",
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description: "Non-porous porcelain tile on floors and shower walls with solid epoxy grout to repel hard water minerals.",
    icon: Droplets,
    image: "/images/services/bathroom-tile-installation.jpg",
    alt: "Professional bathroom tile installation with large format porcelain tiles",
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description: "Expert vanity installation with marine plywood boxes, quartz countertops, undermount sinks, and modern fixtures.",
    icon: Sparkles,
    image: "/images/services/vanity-countertop-installation.jpg",
    alt: "Double vanity installation with quartz countertop in a Chandler bathroom",
  },
  {
    name: "Cabinet & Countertop Installation",
    href: "/cabinet-countertop-installation/",
    description: "Custom cabinet and countertop installation with granite, quartz, and marble options — built to last in Arizona's climate.",
    icon: LayoutGrid,
    image: "/images/services/cabinet-countertop-installation.jpg",
    alt: "Custom bathroom cabinet and quartz countertop installation in Chandler AZ",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Our Bathroom Remodeling Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide professional bathroom design and remodeling services. Pick a service below or call for a whole-bath plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Icon overlay badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <service.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {service.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-0.5" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Estimate
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
