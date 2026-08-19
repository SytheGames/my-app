import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

type StaticRouteConfig = {
  urlPath: string;
  /** ISO date the page's content was last meaningfully edited. Update this by hand when you change a page — do not derive it from build/checkout timestamps. */
  lastModified: string;
};

const staticRoutes: StaticRouteConfig[] = [
  { urlPath: "/", lastModified: "2026-05-30" },
  { urlPath: "/blog", lastModified: "2026-04-16" },
  { urlPath: "/services", lastModified: "2026-08-01" },
  { urlPath: "/pricing", lastModified: "2026-05-21" },
  { urlPath: "/web-design", lastModified: "2026-05-20" },
  { urlPath: "/website-redesign", lastModified: "2026-08-01" },
  { urlPath: "/ecommerce-websites", lastModified: "2026-08-01" },
  { urlPath: "/social-media-management", lastModified: "2026-08-01" },
  { urlPath: "/local-seo", lastModified: "2026-08-01" },
  { urlPath: "/seo-services", lastModified: "2026-08-01" },
  { urlPath: "/google-business-profile-management", lastModified: "2026-08-01" },
  { urlPath: "/free-website-audit", lastModified: "2026-08-01" },
  { urlPath: "/website-maintenance", lastModified: "2026-05-20" },
  { urlPath: "/industries", lastModified: "2026-08-01" },
  { urlPath: "/hvac-web-design", lastModified: "2026-08-01" },
  { urlPath: "/plumbing-web-design", lastModified: "2026-08-19" },
  { urlPath: "/electrical-web-design", lastModified: "2026-08-19" },
  { urlPath: "/concrete-web-design", lastModified: "2026-08-19" },
  { urlPath: "/landscaping-web-design", lastModified: "2026-08-19" },
  { urlPath: "/fencing-web-design", lastModified: "2026-08-19" },
  { urlPath: "/chiropractor-web-design", lastModified: "2026-05-20" },
  { urlPath: "/contractor-web-design", lastModified: "2026-03-16" },
  { urlPath: "/roofing-company-web-design-southwestern-ontario", lastModified: "2026-08-01" },
  { urlPath: "/locations", lastModified: "2026-08-01" },
  { urlPath: "/locations/web-design-chatham", lastModified: "2026-05-30" },
  { urlPath: "/locations/web-design-windsor", lastModified: "2026-05-30" },
  { urlPath: "/locations/web-design-london", lastModified: "2026-05-30" },
  { urlPath: "/locations/web-design-sarnia", lastModified: "2026-05-30" },
  { urlPath: "/locations/web-design-leamington", lastModified: "2026-05-30" },
  { urlPath: "/locations/social-media-management-chatham", lastModified: "2026-05-30" },
  { urlPath: "/locations/local-seo-chatham", lastModified: "2026-08-01" },
  { urlPath: "/locations/local-seo-windsor", lastModified: "2026-08-01" },
  { urlPath: "/locations/local-seo-london", lastModified: "2026-08-01" },
  { urlPath: "/locations/local-seo-sarnia", lastModified: "2026-08-01" },
  { urlPath: "/locations/local-seo-leamington", lastModified: "2026-08-01" },
  { urlPath: "/portfolio", lastModified: "2026-05-20" },
  { urlPath: "/reviews", lastModified: "2026-05-20" },
  { urlPath: "/about", lastModified: "2026-05-30" },
  { urlPath: "/careers", lastModified: "2026-08-06" },
  { urlPath: "/contact", lastModified: "2026-05-30" },
  { urlPath: "/wordpress-vs-webflow", lastModified: "2026-08-01" },
  { urlPath: "/privacy", lastModified: "2026-05-19" },
  { urlPath: "/terms", lastModified: "2026-05-19" },
  { urlPath: "/accessibility", lastModified: "2026-05-19" },
];

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

  const blogSlugsSeen = new Set<string>();
  const caseStudySlugsSeen = new Set<string>();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.urlPath}`,
      lastModified: new Date(route.lastModified),
    })),
    ...blogPosts
      .filter((post) => {
        if (blogSlugsSeen.has(post.slug)) return false;
        blogSlugsSeen.add(post.slug);
        return true;
      })
      .map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: getLastModifiedFromMarkdownFile(
          "content/blog",
          post.slug,
          new Date(post.dateModified ?? post.date),
        ),
      })),
    ...caseStudies
      .filter((study) => {
        if (caseStudySlugsSeen.has(study.slug)) return false;
        caseStudySlugsSeen.add(study.slug);
        return true;
      })
      .map((study) => ({
        url: `${siteUrl}/portfolio/${study.slug}`,
        lastModified: getLastModifiedFromMarkdownFile("content/case-studies", study.slug, new Date(study.date)),
      })),
  ];
}
