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
    image: "/onehundredking.png",
    caption: "Service spotlight graphic built for seasonal lead generation.",
  },
  {
    id: "post-2",
    title: "Before and After Carousel",
    platform: "Facebook",
    image: "/arcstage.png",
    caption: "Project transformation post for trust and engagement.",
  },
  {
    id: "post-3",
    title: "Client Testimonial Card",
    platform: "Instagram",
    image: "/daveychiro.png",
    caption: "Branded testimonial layout designed for social proof.",
  },
  {
    id: "post-4",
    title: "Service Explainer Reel Cover",
    platform: "LinkedIn",
    image: "/enhancedconcrete.png",
    caption: "Educational content cover to support awareness and clicks.",
  },
  {
    id: "post-5",
    title: "Offer Announcement",
    platform: "Facebook",
    image: "/pebblesgravel.png",
    caption: "Promotional visual for limited-time consultation campaigns.",
  },
];
