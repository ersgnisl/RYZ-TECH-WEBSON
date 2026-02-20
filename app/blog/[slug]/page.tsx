"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight, TrendingUp, Layers } from "lucide-react";
import { blogPosts } from "@/data/blog";
import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  params: { slug: string };
}

const categoryIcons: Record<string, React.ElementType> = {
  "Performans Pazarlama": TrendingUp,
  "Performance Marketing": TrendingUp,
  "Yaratıcı Prodüksiyon": Layers,
  "Creative Production": Layers,
};

export default function BlogDetailPage({ params }: Props) {
  const { lang, t } = useLanguage();
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const title = lang === "tr" ? post.title : post.titleEn;
  const content = lang === "tr" ? post.content : post.contentEn;
  const category = lang === "tr" ? post.category : post.categoryEn;
  const excerpt = lang === "tr" ? post.excerpt : post.excerptEn;
  const CategoryIcon = categoryIcons[category] || TrendingUp;

  return (
    <main>
      {/* ── Hero Cover ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
        {/* Gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(150deg, ${post.coverColor}40 0%, ${post.coverColor}15 40%, var(--bg-primary) 75%)`,
          }}
          aria-hidden="true"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        {/* Top-right glow */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-[120px] opacity-30 pointer-events-none"
          style={{ background: post.coverColor }}
          aria-hidden="true"
        />
        {/* Bottom-left glow */}
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none"
          style={{ background: post.coverColor }}
          aria-hidden="true"
        />
        {/* Decorative large icon */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] hidden lg:block pointer-events-none"
          aria-hidden="true"
        >
          <CategoryIcon size={320} strokeWidth={0.8} style={{ color: post.coverColor }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-20 pb-16">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors group mb-10"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white">
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                <Clock size={11} />
                {post.readTime} {t.blog.minRead}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              {title}
            </h1>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-6">
              {excerpt}
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${post.coverColor}, ${post.coverColor}80)` }}
              >
                RT
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                {post.author} ·{" "}
                {new Date(post.date).toLocaleDateString(
                  lang === "tr" ? "tr-TR" : "en-US",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Article Content ── */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="h-px mb-10"
            style={{ background: `linear-gradient(90deg, ${post.coverColor}40, transparent)` }}
          />
          <FadeIn>
            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed text-[15px]">
              {content.trim().split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-xl font-bold text-white mt-10 mb-2 flex items-center gap-2">
                      <span
                        className="w-1 h-5 rounded-full inline-block shrink-0"
                        style={{ background: post.coverColor }}
                        aria-hidden="true"
                      />
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={i}>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={j} className="text-white font-semibold">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div
              className="glass-card p-8 text-center relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${post.coverColor}10, rgba(99,102,241,0.05))` }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${post.coverColor}20, transparent 70%)` }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="tag inline-flex mb-4">RYZ Tech</p>
                <h2 className="text-xl font-bold text-white mb-3">
                  {lang === "tr"
                    ? "Markanız için strateji geliştirelim"
                    : "Let's develop a strategy for your brand"}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
                  {lang === "tr"
                    ? "Okuduğunuz stratejileri uygulamak isteyenler için buradayız."
                    : "We're here for those who want to implement the strategies they've read about."}
                </p>
                <Link href="/contact" className="btn-primary inline-flex">
                  {t.nav.cta}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Other posts ── */}
      {others.length > 0 && (
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-lg font-bold text-white mb-6">
                {lang === "tr" ? "Diğer Yazılar" : "Other Posts"}
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {others.map((other, i) => (
                <FadeIn key={other.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${other.slug}`}
                    className="glass-card p-5 flex items-center justify-between gap-4 group hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${other.coverColor}20`, border: `1px solid ${other.coverColor}30` }}
                      >
                        <div className="w-3 h-3 rounded-full" style={{ background: other.coverColor }} />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] mb-0.5">
                          {lang === "tr" ? other.category : other.categoryEn} · {other.readTime} {t.blog.minRead}
                        </p>
                        <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {lang === "tr" ? other.title : other.titleEn}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-muted)] group-hover:text-white shrink-0 transition-colors"
                    />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
