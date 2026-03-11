import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = Number(searchParams.get("limit") ?? "3");
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.floor(limitParam) : 3;

  const posts = getAllBlogPosts()
    .slice(0, limit)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      image: post.image,
      date: post.date,
    }));

  return NextResponse.json({ posts });
}
