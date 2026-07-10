import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogListing from "@/components/BlogListing";
import { blogPosts, blogCategories } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | RYZTECH Digital Agency",
  description:
    "Dijital pazarlama, kreatif prodüksiyon ve performans stratejileri üzerine yazılarımız.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" image="/images/hero-sapka-3.png" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <BlogListing posts={blogPosts} categories={blogCategories} />
      </div>
    </>
  );
}
