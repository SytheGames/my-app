import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

type StaticRouteConfig = {
  urlPath: string;
  sourceFile: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const staticRoutes: StaticRouteConfig[] = [
  { urlPath: "/", sourceFile: "app/page.tsx", changeFrequency: "weekly", priority: 1 },
  { urlPath: "/blog", sourceFile: "app/blog/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  { urlPath: "/services", sourceFile: "app/services/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { urlPath: "/pricing", sourceFile: "app/pricing/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  {
    urlPath: "/services/web-design",
    sourceFile: "app/services/web-design/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/services/website-redesign",
    sourceFile: "app/services/website-redesign/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/services/local-seo",
    sourceFile: "app/services/local-seo/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/services/ecommerce-websites",
    sourceFile: "app/services/ecommerce-websites/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { urlPath: "/locations", sourceFile: "app/locations/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  {
    urlPath: "/locations/web-design-chatham",
    sourceFile: "app/locations/web-design-chatham/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/locations/web-design-windsor",
    sourceFile: "app/locations/web-design-windsor/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/locations/web-design-london",
    sourceFile: "app/locations/web-design-london/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/locations/web-design-sarnia",
    sourceFile: "app/locations/web-design-sarnia/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/locations/web-design-leamington",
    sourceFile: "app/locations/web-design-leamington/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { urlPath: "/portfolio", sourceFile: "app/portfolio/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { urlPath: "/reviews", sourceFile: "app/reviews/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { urlPath: "/about", sourceFile: "app/about/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { urlPath: "/contact", sourceFile: "app/contact/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { urlPath: "/privacy", sourceFile: "app/privacy/page.tsx", changeFrequency: "yearly", priority: 0.4 },
  { urlPath: "/terms", sourceFile: "app/terms/page.tsx", changeFrequency: "yearly", priority: 0.4 },
];

function getLastModifiedFromSourceFile(relativeSourceFile: string): Date {
  const fullPath = path.join(process.cwd(), relativeSourceFile);

  if (!fs.existsSync(fullPath)) {
    return new Date();
  }

  return fs.statSync(fullPath).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  const caseStudies = getAllCaseStudies();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.urlPath}`,
      lastModified: getLastModifiedFromSourceFile(route.sourceFile),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/portfolio/${study.slug}`,
      lastModified: new Date(study.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
