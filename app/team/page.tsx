"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { team } from "@/data/team";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPage() {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 10%, rgba(139,92,246,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow={t.team.eyebrow}
              title={t.team.hero.title}
              titleHighlight={t.team.hero.titleHighlight}
              subtitle={t.team.hero.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.slug} delay={i * 0.1}>
                <div className="glass-card flex flex-col h-full">
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full rounded-t-[var(--radius-lg)]"
                    style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                    aria-hidden="true"
                  />

                  <div className="p-8">
                    {/* Avatar + info */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                      <div className="relative shrink-0">
                        {member.photo ? (
                          <div
                            className="w-28 h-28 rounded-2xl overflow-hidden border-2"
                            style={{ borderColor: `${member.color}50` }}
                          >
                            <Image
                              src={member.photo}
                              alt={member.name}
                              width={112}
                              height={112}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-28 h-28 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
                            style={{
                              background: `linear-gradient(135deg, ${member.color}50, ${member.color}20)`,
                              border: `1px solid ${member.color}30`,
                            }}
                          >
                            {member.initials}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xl font-bold text-white mb-1">{member.name}</p>
                        <p className="text-sm font-semibold mb-4" style={{ color: member.color }}>
                          {member.role}
                        </p>
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors border border-white/[0.08] rounded-lg px-4 py-2 hover:border-white/20 hover:bg-white/[0.04]"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <ExternalLink size={13} />
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {lang === "tr" ? member.longBio : member.longBioEn}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
              <p className="tag inline-flex mb-4">{t.team.culture.eyebrow}</p>
              <h2 className="heading-sm mb-4">{t.team.culture.title}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                {t.team.culture.desc}
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                {t.team.culture.cta}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
