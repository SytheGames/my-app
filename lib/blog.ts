import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateModified: string;
  slug: string;
  author: string;
  format: string;
  category: string;
  tags: string[];
  image: string;
  keywords: string[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
    searchIntent?: string;
    searchVolume?: string;
  };
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  jsonLdScripts: string[];
};

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string") : [];
}

function extractJsonLdScripts(markdown: string): { content: string; jsonLdScripts: string[] } {
  const jsonLdScripts: string[] = [];

  const content = markdown.replace(
    /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    (_match, scriptBody: string) => {
      const trimmed = scriptBody.trim();

      if (!trimmed) {
        return "";
      }

      try {
        // Validate and normalize the JSON-LD payload before injection.
        const parsed = JSON.parse(trimmed);
        jsonLdScripts.push(JSON.stringify(parsed));
      } catch {
        // Ignore malformed JSON-LD blocks rather than breaking page rendering.
      }

      return "";
    },
  );

  return {
    content: content.trim(),
    jsonLdScripts,
  };
}

function readMarkdownFile(slug: string): BlogPost {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const { content: sanitizedContent, jsonLdScripts } = extractJsonLdScripts(content);

  const frontmatter = data as Partial<BlogFrontmatter>;

  const tags = toStringArray(frontmatter.tags);
  const keywordsFromFrontmatter = toStringArray(frontmatter.keywords);
  const seoSecondaryKeywords = toStringArray(frontmatter.seo?.secondaryKeywords);

  const primaryKeyword = typeof frontmatter.seo?.primaryKeyword === "string"
    ? frontmatter.seo.primaryKeyword
    : null;

  const keywords = keywordsFromFrontmatter.length
    ? keywordsFromFrontmatter
    : [primaryKeyword, ...seoSecondaryKeywords, ...tags].filter(
        (entry): entry is string => typeof entry === "string" && entry.trim().length > 0,
      );

  const excerpt = frontmatter.excerpt ?? frontmatter.description ?? "";

  const date = frontmatter.date ?? "1970-01-01";
  const dateModified = frontmatter.dateModified ?? date;

  const author = frontmatter.author ?? "Matt Kealey";

  const seo = {
    metaTitle: frontmatter.seo?.metaTitle ?? frontmatter.title,
    metaDescription: frontmatter.seo?.metaDescription ?? frontmatter.description,
    primaryKeyword: primaryKeyword ?? keywords[0],
    secondaryKeywords: seoSecondaryKeywords.length ? seoSecondaryKeywords : keywords.slice(1),
    searchIntent: frontmatter.seo?.searchIntent,
    searchVolume: frontmatter.seo?.searchVolume,
  };

  return {
    slug: frontmatter.slug ?? slug,
    title: frontmatter.title ?? "Untitled",
    description: frontmatter.description ?? "",
    excerpt,
    date,
    dateModified,
    author,
    format: frontmatter.format ?? "guide",
    category: frontmatter.category ?? "Web Design",
    tags,
    image: frontmatter.image ?? "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg",
    keywords,
    seo,
    content: sanitizedContent,
    jsonLdScripts,
  };
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => readMarkdownFile(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const safeSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(blogDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMarkdownFile(safeSlug);
}
