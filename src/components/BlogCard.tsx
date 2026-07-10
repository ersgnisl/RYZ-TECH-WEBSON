import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl bg-foreground/[0.04] p-6">
      <h3 className="font-semibold text-foreground">{post.title}</h3>
      <div className="mt-3 flex items-center gap-4 text-sm text-foreground/60">
        <span className="flex items-center gap-1.5">
          <Image src="/icons/takvim.svg" alt="" width={16} height={16} />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Image src="/icons/saat.svg" alt="" width={16} height={16} />
          {post.readTime}
        </span>
      </div>
      <p className="mt-3 text-sm text-foreground/80">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-sm font-semibold underline underline-offset-2"
      >
        Devamını Oku
      </Link>
    </article>
  );
}
