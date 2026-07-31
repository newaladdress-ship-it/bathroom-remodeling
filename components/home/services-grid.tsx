import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShowerHead, Bath, LayoutGrid, Sparkles, Accessibility, ArrowRightLeft, ArrowUpDown, Lightbulb, Droplets, Users } from "lucide-react";

const services = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description: "Create a custom shower remodeling solution with frameless glass enclosures, premium shower tile, modern fixtures, and personalized layouts designed to improve comfort, functionality, and everyday use.",
    icon: ShowerHead,
    image: "/images/services/shower-remodeling.jpg",
    alt: "Custom walk-in shower remodel with floor-to-ceiling tile in Chandler AZ",
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description: "Replace your bathtub with a tub to shower conversion that maximizes bathroom space, improves accessibility, and delivers a sleek, low-maintenance shower replacement for modern living.",
    icon: ArrowRightLeft,
    image: "/images/services/tub-to-shower-conversion.jpg",
    alt: "Tub to shower conversion with open walk-in design in Chandler AZ",
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling/",
    description: "Refresh your bathroom with bathtub remodeling, featuring freestanding tubs, soaking bathtubs, elegant surrounds, and stylish upgrades that create a relaxing bathing experience.",
    icon: Bath,
    image: "/images/services/bathtub-remodeling.jpg",
    alt: "Freestanding bathtub remodel with modern fixtures in a luxury bathroom",
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Transform your primary bath with double vanities, custom storage, premium finishes, and spacious layouts designed for comfort, organization, and everyday luxury.",
    icon: Sparkles,
    image: "/images/services/master-bathroom-remodel.jpg",
    alt: "Luxury master bathroom remodel with double vanity and soaking tub",
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description: "Make every inch count with compact bathroom renovation solutions, featuring smart layouts, compact storage, space-saving fixtures, and practical designs that maximize functionality.",
    icon: LayoutGrid,
    image: "/images/services/small-bathroom-remodel.jpg",
    alt: "Small bathroom remodel with space-saving floating vanity and modern tile",
  },
  {
    name: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description: "Upgrade your guest bath with stylish fixtures, elegant finishes, functional layouts, and welcoming designs that leave a lasting impression on visitors.",
    icon: Users,
    image: "/images/services/guest-bathroom-remodeling.jpg",
    alt: "Remodeled guest bathroom with fresh tile, new vanity, and modern fixtures",
  },
  {
    name: "Luxury Bathroom Remodeling",
    href: "/luxury-bathroom-remodeling/",
    description: "Experience luxury bath design with premium materials, quartz countertops, designer fixtures, custom cabinetry, and spa-inspired features tailored to your lifestyle.",
    icon: Sparkles,
    image: "/images/services/luxury-bathroom-remodeling.jpg",
    alt: "Luxury bathroom remodel with spa shower, freestanding tub, and designer tile",
  },
  {
    name: "ADA Bathroom Remodeling",
    href: "/ada-bathroom-remodeling/",
    description: "Improve safety with accessible bathroom renovations that include barrier-free layouts, universal design features, accessible fixtures, and practical solutions for comfortable everyday living.",
    icon: Accessibility,
    image: "/images/services/ada-bathroom-remodeling.jpg",
    alt: "ADA accessible bathroom with grab bars, curbless shower, and safety features",
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description: "Design a handicap accessible bathroom with roll-in showers, grab bars, slip-resistant flooring, and mobility-friendly features that support independence and long-term comfort.",
    icon: Accessibility,
    image: "/images/services/handicap-accessible-bathroom.jpg",
    alt: "Handicap accessible bathroom with grab bars and curbless shower entry",
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation/",
    description: "Upgrade your space with professional waterproof flooring installation, using porcelain tile, luxury plank, and durable surfaces designed for moisture resistance.",
    icon: ArrowUpDown,
    image: "/images/services/bathroom-flooring-installation.jpg",
    alt: "Bathroom flooring installation with large format porcelain tiles in modern bathroom",
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation/",
    description: "Enhance your space with bathroom lighting installation, including vanity lighting, recessed fixtures, and energy-efficient LED solutions that improve brightness and functionality.",
    icon: Lightbulb,
    image: "/images/services/bathroom-lighting-installation.jpg",
    alt: "Modern bathroom lighting installation with LED vanity lights and recessed cans",
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description: "Complete your remodel with bathroom tile installation, offering custom tile patterns, decorative wall tile, durable floor tile, and finishes that elevate your bathroom's appearance.",
    icon: Droplets,
    image: "/images/services/bathroom-tile-installation.jpg",
    alt: "Professional bathroom tile installation with large format porcelain tiles",
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description: "Modernize your space with bathroom vanity installation, featuring custom vanities, stylish countertops, and practical storage solutions that enhance both organization and design.",
    icon: Sparkles,
    image: "/images/services/vanity-countertop-installation.jpg",
    alt: "Double vanity installation with quartz countertop in a Chandler bathroom",
  },
  {
    name: "Cabinet & Countertop Installation",
    href: "/cabinet-countertop-installation/",
    description: "Upgrade your bathroom with cabinet & countertop installation, combining custom cabinets, stone countertops, and functional storage designed to complement your remodeling project.",
    icon: LayoutGrid,
    image: "/images/services/cabinet-countertop-installation.jpg",
    alt: "Custom bathroom cabinet and quartz countertop installation in Chandler AZ",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-12 lg:py-20 bg-secondary" id="services">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Our Remodeling Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide professional bathroom design and remodeling services. Pick a service below or call for a whole-bath plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {service.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-0.5" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
