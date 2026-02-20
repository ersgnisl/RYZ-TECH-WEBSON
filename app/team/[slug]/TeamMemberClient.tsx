"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import type { TeamMember } from "@/data/team";

interface Props {
  member: TeamMember;
  others: TeamMember[];
}

export default function TeamMemberClient({ member, others }: Props) {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 10% 20%, ${member.color}10, transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <Link
                href="/team"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
                aria-label={t.team.detail.backAria}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {t.team.detail.breadcrumbLabel}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-sm text-[var(--text-secondary)]">{member.name}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-start gap-6 mb-8">
                  {/* Photo or avatar */}
                  {member.photo ? (
                    <div
                      className="w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0"
                      style={{ borderColor: `${member.color}50` }}
                    >
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black text-white shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${member.color}50, ${member.color}20)`,
                        border: `1px solid ${member.color}35`,
                      }}
                    >
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h1 className="display-md leading-none mb-2">{member.name}</h1>
                    <p className="text-lg font-semibold" style={{ color: member.color }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="body-md leading-relaxed mb-8">
                  {lang === "tr" ? member.longBio : member.longBioEn}
                </p>

                {/* Social */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex items-center gap-2 text-sm py-2.5 px-4"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <ExternalLink size={16} />
                    LinkedIn
                  </a>
                  <Link href="/contact" className="btn-primary flex items-center gap-2 text-sm">
                    {t.nav.cta}
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar: expertise + tools */}
            <div className="lg:col-span-5 space-y-5">
              <FadeIn delay={0.2}>
                <div className="glass-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                    {t.team.detail.expertise}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="glass-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                    {t.team.detail.tools}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.06] text-[var(--text-secondary)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other team members */}
      {others.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">{t.team.detail.otherMembers}</h2>
                <Link
                  href="/team"
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1"
                >
                  {t.team.detail.fullTeam}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((m, i) => (
                <FadeIn key={m.slug} delay={i * 0.1}>
                  <Link
                    href={`/team/${m.slug}`}
                    className="glass-card p-5 flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    {m.photo ? (
                      <div
                        className="w-12 h-12 rounded-xl overflow-hidden border shrink-0"
                        style={{ borderColor: `${m.color}30` }}
                      >
                        <Image
                          src={m.photo}
                          alt={m.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-sm shrink-0"
                        style={{ background: `${m.color}30`, border: `1px solid ${m.color}25` }}
                      >
                        {m.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {m.name}
                      </p>
                      <p className="text-sm" style={{ color: m.color }}>
                        {m.role}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="ml-auto text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity"
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

