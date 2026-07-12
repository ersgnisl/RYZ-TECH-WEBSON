import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Ekibimiz | RYZTECH Digital Agency",
  description: "RYZTECH ekibiyle tanışın.",
};

export default function EkibimizPage() {
  return (
    <>
      <PageHero title="Ekibimiz" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-foreground/[0.04] p-8 text-center"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={112}
                height={112}
                quality={100}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />
              <h2 className="mt-5 font-bold text-foreground">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-brand-to">
                {member.title}
              </p>
              <p className="mt-4 text-sm text-foreground/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
