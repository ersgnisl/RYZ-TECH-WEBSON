import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostHero from "@/components/BlogPostHero";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | RYZTECH Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostHero title={post.title} tags={post.tags} />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Blog&apos;a Dön
          </Link>

          <div className="mt-8 flex items-center gap-4 text-sm text-foreground/60">
            <span className="flex items-center gap-1.5">
              <Image src="/icons/takvim.svg" alt="" width={16} height={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/icons/saat.svg" alt="" width={16} height={16} />
              {post.readTime}
            </span>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-foreground">Özet</h2>
            <p className="mt-3 text-foreground/80">{post.intro}</p>
          </section>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-8">
              <h2 className="text-xl font-bold text-foreground">
                {section.heading}
              </h2>
              <p className="mt-3 whitespace-pre-line text-foreground/80">
                {section.body}
              </p>
            </section>
          ))}

          {post.outro && (
            <p className="mt-8 text-foreground/80">{post.outro}</p>
          )}
        </div>
      </div>
    </>
  );
}
