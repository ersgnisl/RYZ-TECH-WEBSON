import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { team } from "@/data/team";
import TeamMemberClient from "./TeamMemberClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = team.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.name} — ${member.role} at RYZ Tech. ${member.shortBio}`,
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = team.find((m) => m.slug === params.slug);
  if (!member) notFound();

  const others = team.filter((m) => m.slug !== member.slug).slice(0, 2);

  return <TeamMemberClient member={member} others={others} />;
}
