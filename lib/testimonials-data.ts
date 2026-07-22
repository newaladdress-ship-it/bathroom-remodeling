export interface TestimonialType {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  service: string;
  content: string;
  image: string;
  verified: boolean;
}

export const testimonialsData: Record<string, TestimonialType[]> = {
  "default": []
};

export function getTestimonials(category?: string): TestimonialType[] {
  return [];
}
