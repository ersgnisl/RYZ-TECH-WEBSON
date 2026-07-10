import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Sahadan Sonuçlar | RYZTECH Digital Agency",
  description:
    "RYZTECH'in yürüttüğü projelerden gerçek sonuçlar ve örnek vaka çalışmaları.",
};

export default function SahadanSonuclarPage() {
  return (
    <>
      <PageHero title="Sahadan Sonuçlar" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="flex flex-col justify-between rounded-2xl bg-foreground/[0.04] p-6"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {study.cardTitle}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">
                  {study.cardSummary}
                </p>
              </div>
              <Link
                href={`/sahadan-sonuclar/${study.slug}`}
                className="mt-4 inline-block self-end text-sm font-semibold underline underline-offset-2"
              >
                Devamını Oku
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
