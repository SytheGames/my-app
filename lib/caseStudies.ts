import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  image: string;
  keywords: string[];
  client: string;
  services: string[];
  results: string[];
};

export type CaseStudy = CaseStudyFrontmatter & {
  slug: string;
  content: string;
};

function readMarkdownFile(slug: string): CaseStudy {
  const filePath = path.join(caseStudiesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as Partial<CaseStudyFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? "Untitled Case Study",
    description: frontmatter.description ?? "",
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? "1970-01-01",
    image: frontmatter.image ?? "/arcstage.png",
    keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
    client: frontmatter.client ?? "Kealey Design Client",
    services: Array.isArray(frontmatter.services) ? frontmatter.services : [],
    results: Array.isArray(frontmatter.results) ? frontmatter.results : [],
    content,
  };
}

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(caseStudiesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getAllCaseStudies(): CaseStudy[] {
  return getAllCaseStudySlugs()
    .map((slug) => readMarkdownFile(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const safeSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(caseStudiesDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMarkdownFile(safeSlug);
}
