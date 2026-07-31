export type HomeFaq = { question: string; answer: string };

/** Homepage + FAQ schema (plain text for JSON-LD; HTML for UI) */
export const homeFaqs: HomeFaq[] = [
  {
    question: "How much does bathroom remodeling cost in Chandler, AZ?",
    answer:
      "Bathroom remodeling costs depend on the size of your bathroom, the materials you choose, and whether you're planning a simple update or a complete bathroom renovation. We provide free consultations to discuss your goals and budget.",
  },
  {
    question: "How long does a bathroom remodel usually take?",
    answer:
      "Project timelines vary depending on the scope of work. Smaller bathroom updates may take less time, while complete bath renovation projects typically require additional planning, design, and installation.",
  },
  {
    question: "Can I convert my bathtub into a walk-in shower?",
    answer:
      "Yes. Tub-to-shower conversions are one of our most requested bath renovation services. A walk-in shower can improve accessibility, maximize space, and give your bathroom a more modern appearance.",
  },
  {
    question: "Do I need a permit for a bathroom renovation in Chandler?",
    answer:
      "Permit requirements depend on the type of remodeling work being completed. Projects involving structural, plumbing, or electrical changes may require permits. We'll explain what may be needed during your consultation.",
  },
  {
    question: "Which renovation services do you offer?",
    answer:
      "We provide complete bathroom renovations, custom showers, walk-in showers, tub-to-shower conversions, waterproof tile installation, vanity upgrades, flooring, lighting, and full bath transformations.",
  },
  {
    question: "Can you help with bathroom design and material selection?",
    answer:
      "Absolutely. We help homeowners choose layouts, tile, vanities, fixtures, lighting, and finishes that match their style, space, and budget.",
  },
  {
    question: "What materials work best for Arizona bathrooms?",
    answer:
      "Many homeowners choose porcelain tile, quartz countertops, moisture-resistant materials, and durable fixtures that perform well in Arizona's climate while remaining easy to maintain.",
  },
  {
    question: "Will a bathroom renovation increase my home's value?",
    answer:
      "A professionally designed bathroom remodel can improve everyday comfort while enhancing your home's appeal and resale value, especially when using quality materials and modern designs.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve Chandler, AZ, along with nearby communities throughout the East Valley, helping homeowners create beautiful and functional bathrooms.",
  },
  {
    question: "How do I get started with my bathroom remodel?",
    answer:
      "The first step is scheduling a free consultation. We'll discuss your remodeling goals, evaluate your existing bathroom, answer your questions, and recommend the best options for your home.",
  },
];

/** Strip HTML for FAQPage schema */
export function faqAnswerPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

