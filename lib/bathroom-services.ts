import { ShowerHead, Bath, Lightbulb, LucideIcon, Droplets, Sparkles, ArrowUpDown, Accessibility, LayoutGrid, Users, ArrowRightLeft } from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Complete shower remodeling with modern fixtures, Schluter-KERDI waterproofing, premium porcelain tile, and frameless glass enclosures.",
    icon: ShowerHead,
    image: "/images/services/shower-remodeling.jpg",
    alt: "Custom walk-in shower remodel with floor-to-ceiling tile in Chandler AZ",
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling/",
    description:
      "Professional bathtub remodeling and replacement for ultimate comfort — freestanding soakers, alcove tubs, and luxury finishes.",
    icon: Bath,
    image: "/images/services/bathtub-remodeling.jpg",
    alt: "Freestanding bathtub remodel with modern fixtures in a luxury bathroom",
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Convert your unused bathtub into a spacious, modern walk-in shower with expanded drain lines and scald-prevention valves.",
    icon: ArrowRightLeft,
    image: "/images/services/tub-to-shower-conversion.jpg",
    alt: "Tub to shower conversion showing open walk-in shower replacing old tub",
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Full master bath remodels with custom tile showers, double vanities, quartz countertops, and complete layout updates.",
    icon: Sparkles,
    image: "/images/services/master-bathroom-remodel.jpg",
    alt: "Master bathroom remodel with double vanity, custom shower, and elegant tile",
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "Maximize small bathroom space with floating vanities, comfort-height toilets, and smart tiling that makes rooms feel larger.",
    icon: LayoutGrid,
    image: "/images/services/small-bathroom-remodel.jpg",
    alt: "Small bathroom remodel with space-saving floating vanity and modern tile",
  },
  {
    name: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "High-impact updates for secondary bathrooms, powder rooms, and guest suites — fresh tile, new vanity, modern fixtures.",
    icon: Users,
    image: "/images/services/guest-bathroom-remodeling.jpg",
    alt: "Remodeled guest bathroom with fresh tile, new vanity, and modern fixtures",
  },
  {
    name: "Luxury Bathroom Remodeling",
    href: "/luxury-bathroom-remodeling/",
    description:
      "Premium master bath transformations with high-end finishes, heated floors, spa showers, and designer tile.",
    icon: Sparkles,
    image: "/images/services/luxury-bathroom-remodeling.jpg",
    alt: "Luxury bathroom remodel with spa shower, freestanding tub, and designer tile",
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description:
      "ADA-compliant updates with curbless showers, structural grab bar backing, and slip-resistant mosaic tile.",
    icon: Accessibility,
    image: "/images/services/handicap-accessible-bathroom.jpg",
    alt: "Handicap accessible bathroom with grab bars and curbless shower entry",
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation/",
    description:
      "Professional bathroom flooring with durable, water-resistant porcelain or luxury vinyl plank — properly leveled and waterproofed.",
    icon: ArrowUpDown,
    image: "/images/services/bathroom-flooring-installation.jpg",
    alt: "Bathroom flooring installation with large format porcelain tiles in modern bathroom",
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation/",
    description:
      "Modern bathroom lighting design and installation for enhanced ambiance — vanity bars, recessed cans, and dimmer controls.",
    icon: Lightbulb,
    image: "/images/services/bathroom-lighting-installation.jpg",
    alt: "Modern bathroom lighting installation with LED vanity lights and recessed cans",
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Expert tile installation with non-porous porcelain (ASTM C373) and solid epoxy grout to resist East Valley hard water scale.",
    icon: Droplets,
    image: "/images/services/bathroom-tile-installation.jpg",
    alt: "Professional bathroom tile installation with large format porcelain and grout",
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "Expert vanity installation with marine plywood boxes, quartz countertops, undermount sinks, and matte black or brass fixtures.",
    icon: Sparkles,
    image: "/images/services/vanity-countertop-installation.jpg",
    alt: "Double bathroom vanity installation with quartz countertop and undermount sink",
  },
  {
    name: "Cabinet & Countertop Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "Custom cabinet and countertop installation with granite, quartz, and marble options — built to last in Arizona's climate.",
    icon: LayoutGrid,
    image: "/images/services/cabinet-countertop-installation.jpg",
    alt: "Custom bathroom cabinet and quartz countertop installation in Chandler AZ",
  },
];

export function getRelatedServices(currentHref: string): BathroomService[] {
  const cleanHref = currentHref.replace(/^\/|\/$/g, "");
  
  const relationships: Record<string, string[]> = {
    "shower-remodeling": [
      "/tub-to-shower-conversion/",
      "/handicap-accessible-bathroom/",
      "/bathroom-tile-installation/",
    ],
    "tub-to-shower-conversion": [
      "/shower-remodeling/",
      "/handicap-accessible-bathroom/",
      "/bathroom-tile-installation/",
    ],
    "bathtub-remodeling": [
      "/shower-remodeling/",
      "/tub-to-shower-conversion/",
      "/bathroom-tile-installation/",
    ],
    "bathroom-vanity-installation": [
      "/cabinet-countertop-installation/",
      "/bathroom-lighting-installation/",
      "/master-bathroom-remodel/",
    ],
    "cabinet-countertop-installation": [
      "/bathroom-vanity-installation/",
      "/bathroom-tile-installation/",
      "/luxury-bathroom-remodeling/",
    ],
    "bathroom-flooring-installation": [
      "/bathroom-tile-installation/",
      "/bathroom-vanity-installation/",
      "/small-bathroom-remodeling/",
    ],
    "bathroom-lighting-installation": [
      "/bathroom-vanity-installation/",
      "/bathroom-flooring-installation/",
      "/bathroom-tile-installation/",
    ],
    "bathroom-tile-installation": [
      "/bathroom-flooring-installation/",
      "/bathroom-vanity-installation/",
      "/shower-remodeling/",
    ],
    "luxury-bathroom-remodeling": [
      "/master-bathroom-remodel/",
      "/bathroom-vanity-installation/",
      "/bathroom-tile-installation/",
    ],
    "handicap-accessible-bathroom": [
      "/shower-remodeling/",
      "/tub-to-shower-conversion/",
      "/bathroom-vanity-installation/",
    ],
    "guest-bathroom-remodeling": [
      "/small-bathroom-remodeling/",
      "/shower-remodeling/",
      "/bathroom-vanity-installation/",
    ],
    "small-bathroom-remodeling": [
      "/guest-bathroom-remodeling/",
      "/shower-remodeling/",
      "/bathroom-vanity-installation/",
    ],
    "master-bathroom-remodel": [
      "/shower-remodeling/",
      "/bathroom-vanity-installation/",
      "/bathroom-flooring-installation/",
    ],
  };

  const relatedHrefs = relationships[cleanHref];
  if (relatedHrefs) {
    return bathroomServices.filter(s => relatedHrefs.includes(s.href));
  }
  
  return bathroomServices
    .filter(s => s.href !== currentHref && s.href !== `${currentHref}/` && `/${s.href}` !== currentHref)
    .slice(0, 3);
}
