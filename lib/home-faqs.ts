export type HomeFaq = { question: string; answer: string };

/** Homepage + FAQ schema (plain text for JSON-LD; HTML for UI) */
export const homeFaqs: HomeFaq[] = [
  {
    question: "Do I need a building permit to remodel my bathroom in Chandler?",
    answer:
      "Yes, the City of Chandler requires a permit for layout changes, plumbing moves, and new electrical work. Cosmetic swaps like replacing vanities or flooring in the same position do not. We file all drawings and manage inspections with the Development Services Department on Buffalo Street for you.",
  },
  {
    question: "How does Chandler's hard water affect custom tile and grout?",
    answer:
      "Chandler water averages 18 to 22 grains of hardness. This mineral scale sticks to porous cement grout, causing staining and leaks. We install dense porcelain tile and solid epoxy resin grout. Epoxy grout is non-porous and repels scale, keeping your shower clean and waterproof.",
  },
  {
    question: "How do you protect shower glass from hard water scale?",
    answer:
      "Hard water leaves cloudy white mineral scale on standard glass doors. We install low-iron tempered glass doors treated with a factory-applied hydrophobic nano-coating. This coating repels water droplets, preventing scale from bonding to the surface. It reduces cleaning time and keeps glass clear.",
  },
  {
    question: "Can you convert a tub to a walk-in shower on a concrete slab?",
    answer:
      "Yes. We saw-cut and trench the concrete slab to relocate the drain trap. Under code rules, we expand the waste line from 1.5 inches to 2 inches to handle modern shower heads. We then place a vapor-tight Schluter pan and lay slip-resistant tile.",
  },
  {
    question: "What is your project workmanship warranty?",
    answer:
      "We provide a written 2-year warranty on all our remodeling work. This covers tile adhesion, epoxy grout joints, Schluter waterproofing, shower valves, and vanity mounts. If any component of our installation fails within two years, our crew repairs it at no cost to you.",
  },
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "Cost depends on the scope of work, your layout, and the materials you choose - every bathroom is different, so a fair number can't be given without knowing the project. Call us at <a href=\"tel:+15205693339\">(520) 569-3339</a> and we'll walk through your project with you and give you a clear, honest starting range on the spot, followed by a free itemized written estimate before any work begins.",
  },
  {
    question: "Are you a expert bathroom remodeling contractor?",
    answer:
      "Yes. ARZ Home Remodeling holds an active Arizona  license (), is fully insured, and is a NARI member.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, on qualifying projects over $5,000, with monthly payments up to 60 months on approved credit.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Guest baths: 2-3 weeks. Tub-to-shower conversions: 3-5 days after demo. Master baths with layout changes: 4-6 weeks.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Chandler, Gilbert, Mesa, Tempe, Queen Creek, Apache Junction, and the surrounding East Valley.",
  },
];

/** Strip HTML for FAQPage schema */
export function faqAnswerPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

