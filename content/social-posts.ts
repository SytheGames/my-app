export type SocialPost = {
  id: string;
  title: string;
  platform: "Instagram" | "Facebook" | "LinkedIn" | "TikTok" | "YouTube";
  image: string;
  caption: string;
};

export const socialPosts: SocialPost[] = [
  {
    id: "post-1",
    title: "Spring Promo Graphic",
    platform: "Instagram",
    image: "/case-studies/Screenshot_20-5-2026_162332_www.onehundredking.com.jpeg",
    caption: "Service spotlight graphic built for seasonal lead generation.",
  },
  {
    id: "post-2",
    title: "Before and After Carousel",
    platform: "Facebook",
    image: "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg",
    caption: "Project transformation post for trust and engagement.",
  },
  {
    id: "post-3",
    title: "Client Testimonial Card",
    platform: "Instagram",
    image: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg",
    caption: "Branded testimonial layout designed for social proof.",
  },
  {
    id: "post-4",
    title: "Service Explainer Reel Cover",
    platform: "LinkedIn",
    image: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
    caption: "Educational content cover to support awareness and clicks.",
  },
  {
    id: "post-5",
    title: "Offer Announcement",
    platform: "Facebook",
    image: "/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg",
    caption: "Promotional visual for limited-time consultation campaigns.",
  },
];
