import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  image: string;
  keywords: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

function readMarkdownFile(slug: string): BlogPost {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as Partial<BlogFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? "Untitled",
    description: frontmatter.description ?? "",
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? "1970-01-01",
    image: frontmatter.image ?? "/arcstage.png",
    keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
    content,
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
