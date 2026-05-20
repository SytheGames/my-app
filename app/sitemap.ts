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
    urlPath: "/web-design",
    sourceFile: "app/web-design/page.tsx",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    urlPath: "/local-seo",
    sourceFile: "app/local-seo/page.tsx",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    urlPath: "/seo-services",
    sourceFile: "app/seo-services/page.tsx",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    urlPath: "/website-maintenance",
    sourceFile: "app/website-maintenance/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    urlPath: "/google-business-profile-management",
    sourceFile: "app/google-business-profile-management/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    urlPath: "/industries",
    sourceFile: "app/industries/page.tsx",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    urlPath: "/industries/hvac",
    sourceFile: "app/industries/hvac/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { urlPath: "/locations", sourceFile: "app/locations/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  {
    urlPath: "/locations/web-design-chatham",
    sourceFile: "app/locations/web-design-chatham/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/locations/social-media-management-chatham",
    sourceFile: "app/locations/social-media-management-chatham/page.tsx",
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
  {
    urlPath: "/chiropractor-web-design",
    sourceFile: "app/chiropractor-web-design/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/contractor-web-design",
    sourceFile: "app/contractor-web-design/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/roofing-company-web-design-southwestern-ontario",
    sourceFile: "app/roofing-company-web-design-southwestern-ontario/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    urlPath: "/wordpress-vs-webflow",
    sourceFile: "app/wordpress-vs-webflow/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { urlPath: "/privacy", sourceFile: "app/privacy/page.tsx", changeFrequency: "yearly", priority: 0.4 },
  { urlPath: "/terms", sourceFile: "app/terms/page.tsx", changeFrequency: "yearly", priority: 0.4 },
  { urlPath: "/accessibility", sourceFile: "app/accessibility/page.tsx", changeFrequency: "yearly", priority: 0.4 },
];

function getLastModifiedFromSourceFile(relativeSourceFile: string): Date {
  const fullPath = path.join(process.cwd(), relativeSourceFile);

  if (!fs.existsSync(fullPath)) {
    return new Date();
  }

  return fs.statSync(fullPath).mtime;
}

function getLastModifiedFromMarkdownFile(relativeDirectory: string, slug: string, fallback: Date): Date {
  const fullPath = path.join(process.cwd(), relativeDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return fallback;
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
      lastModified: getLastModifiedFromMarkdownFile(
        "content/blog",
        post.slug,
        new Date(post.dateModified ?? post.date),
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/portfolio/${study.slug}`,
      lastModified: getLastModifiedFromMarkdownFile("content/case-studies", study.slug, new Date(study.date)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
