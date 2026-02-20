"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogPage() {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 30% 20%, rgba(99,102,241,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow={t.blog.eyebrow}
              title={t.blog.title}
              titleHighlight={t.blog.titleHighlight}
              subtitle={t.blog.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card flex flex-col h-full group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={lang === "tr" ? post.title : post.titleEn}
                >
                  {/* Cover */}
                  <div
                    className="h-48 relative overflow-hidden flex items-end p-6"
                    style={{
                      background: `linear-gradient(135deg, ${post.coverColor}40, ${post.coverColor}10)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at 30% 50%, ${post.coverColor}, transparent 65%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white"
                      >
                        {lang === "tr" ? post.category : post.categoryEn}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs text-[var(--text-muted)]">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{new Date(post.date).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime} {t.blog.minRead}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                      {lang === "tr" ? post.title : post.titleEn}
                    </h2>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-5">
                      {lang === "tr" ? post.excerpt : post.excerptEn}
                    </p>

                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    >
                      {t.blog.readMore}
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
