export type TestimonialSource = "google" | "email" | "slack";

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  logo?: string;
  isLightLogo?: boolean;
  source: TestimonialSource;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  featured: boolean;
  service?: string;
  company?: string;
  sourceUrl?: string;
  permissionConfirmed?: boolean;
};

function normalizeValue(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const testimonials: Testimonial[] = [
  {
    id: "google-1",
    name: "ARC stage",
    quote: "Designed our website flawlessly and quickly, with great technical support!",
    logo: "/images/logos/arcstage-logo.webp",
    source: "google",
    rating: 5,
    date: "2026-03-01",
    featured: true,
    service: "Web Design",
    sourceUrl: "",
    permissionConfirmed: true,
  },
  {
    id: "google-2",
    name: "Enhanced Concrete",
    quote: "Matt built my website and manages it. He is very knowledgeable and great to work with I would highly recommend for any of your website needs.",
    logo: "/images/logos/enhanced-concrete-logo.svg",
    isLightLogo: true,
    source: "google",
    rating: 5,
    date: "2026-02-21",
    featured: true,
    service: "Local SEO",
    sourceUrl: "",
    permissionConfirmed: true,
  },
  {
    id: "email-1",
    name: "Michell Contracting Group",
    quote: "Working with Kealey Design was one of the best decisions we made for our business website. Matt took the time to understand our goals and turned them into a clean, modern design that actually converts visitors into inquiries.",
    source: "email",
    rating: 5,
    date: "2026-02-05",
    featured: true,
    service: "Website Design",
    company: "Michell Contracting Group",
    permissionConfirmed: true,
  },
  {
    id: "slack-1",
    name: "BrightPath Consulting",
    quote: "Matt at Kealey Design built us a website that finally reflects the quality of our business.",
    source: "slack",
    rating: 5,
    date: "2026-01-28",
    featured: true,
    service: "Web Design",
    company: "BrightPath Consulting",
    permissionConfirmed: true,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedTestimonials(limit = 6): Testimonial[] {
  return getAllTestimonials()
    .filter((testimonial) => testimonial.featured)
    .slice(0, limit);
}

export function getHomepageShowcaseTestimonials(): Testimonial[] {
  const homepageReviewIds = new Set(["google-1", "google-2"]);

  return getAllTestimonials().filter((testimonial) =>
    homepageReviewIds.has(testimonial.id),
  );
}

export function getTestimonialsBySource(source: TestimonialSource): Testimonial[] {
  return getAllTestimonials().filter(
    (testimonial) => testimonial.source === source,
  );
}

export function getTestimonialsForClient(clientName: string): Testimonial[] {
  const clientKey = normalizeValue(clientName);

  return getAllTestimonials().filter((testimonial) => {
    const nameKey = normalizeValue(testimonial.name);
    const companyKey = testimonial.company
      ? normalizeValue(testimonial.company)
      : "";

    return (
      clientKey.includes(nameKey) ||
      nameKey.includes(clientKey) ||
      (companyKey.length > 0 && clientKey.includes(companyKey)) ||
      (companyKey.length > 0 && companyKey.includes(clientKey))
    );
  });
}

export function getTestimonialSourceLabel(source: TestimonialSource): string {
  if (source === "google") {
    return "Verified Google Review";
  }

  if (source === "email") {
    return "Client Email Testimonial";
  }

  return "Client Slack Testimonial";
}

export function getAverageRating(): number {
  if (testimonials.length === 0) {
    return 0;
  }

  const sum = testimonials.reduce((total, testimonial) => {
    return total + testimonial.rating;
  }, 0);

  return Number((sum / testimonials.length).toFixed(1));
}
