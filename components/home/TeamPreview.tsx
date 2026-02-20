"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { team } from "@/data/team";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPreview() {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <FadeIn>
            <SectionHeader
              eyebrow={t.team.eyebrow}
              title={t.team.title}
              titleHighlight={t.team.titleHighlight}
              subtitle={t.team.subtitle}
              align="left"
              className="max-w-2xl"
            />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.slug} delay={i * 0.12}>
              <div className="glass-card p-6 flex flex-col group">
                {/* Avatar + info */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative shrink-0">
                    {member.photo ? (
                      <div
                        className="w-20 h-20 rounded-2xl overflow-hidden border-2"
                        style={{ borderColor: `${member.color}40` }}
                      >
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center text-xl font-black text-white"
                        style={{
                          background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
                          border: `1px solid ${member.color}30`,
                        }}
                      >
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-bold text-white mb-0.5">{member.name}</p>
                    <p className="text-sm font-medium mb-3" style={{ color: member.color }}>
                      {member.role}
                    </p>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-white transition-colors border border-white/[0.08] rounded-lg px-3 py-1.5 hover:border-white/20"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <ExternalLink size={11} />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {lang === "en" ? member.shortBioEn : member.shortBio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
