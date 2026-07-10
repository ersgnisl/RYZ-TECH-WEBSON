import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/CaseStudyHero";
import CtaBanner from "@/components/CtaBanner";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} | Sahadan Sonuçlar | RYZTECH Digital Agency`,
    description: study.cardSummary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      <CaseStudyHero title={study.title} tags={study.tags} />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {study.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-foreground/[0.04] px-6 py-5 text-center"
            >
              <p className="font-bold text-foreground">{h.title}</p>
              <p className="mt-1 text-sm text-foreground/60">{h.sub}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground">Özet</h2>
            <p className="mt-3 text-foreground/80">{study.summary}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground">Hedef</h2>
            <p className="mt-3 text-foreground/80">{study.goal}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground">Çözüm</h2>
            <p className="mt-3 text-foreground/80">{study.solution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground">Sonuçlar</h2>
            <p className="mt-3 text-foreground/80">{study.results}</p>
          </section>

          <CtaBanner />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Benzer Projeler
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherStudies.map((other) => (
              <div
                key={other.slug}
                className="flex flex-col justify-between rounded-2xl bg-foreground/[0.04] p-6"
              >
                <div>
                  <h3 className="font-bold text-foreground">
                    {other.cardTitle}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    {other.cardSummary}
                  </p>
                </div>
                <Link
                  href={`/sahadan-sonuclar/${other.slug}`}
                  className="mt-4 inline-block self-end text-sm font-semibold underline underline-offset-2"
                >
                  Devamını Oku
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
