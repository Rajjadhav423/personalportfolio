import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight, IconBook, IconClock } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";
import { getAllSeries, getSeriesChapterCount, getSeriesMetadata } from "@/lib/docs";
import ModuleAccordion from "./ModuleAccordion";

interface PageProps {
  params: Promise<{
    series: string;
  }>;
}

export async function generateStaticParams() {
  const allSeries = getAllSeries();
  return allSeries.map((s) => ({
    series: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { series: seriesSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);

  if (!series) {
    return { title: "Not Found" };
  }

  return {
    title: `${series.title} | ${portfolioData.personal.name}`,
    description: series.description,
  };
}

export default async function SeriesLandingPage({ params }: PageProps) {
  const { series: seriesSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);

  if (!series) {
    notFound();
  }

  const totalChapters = getSeriesChapterCount(series);
  const firstModule = series.modules[0];
  const firstChapter = firstModule?.chapters[0];

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 md:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#7b5532]/14 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#d4a35f]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-sm text-[#8f806c]">
          <Link href="/blog" className="hover:text-[#f5dfb8]">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#d7ccbc]">{series.title}</span>
        </div>

        <section className="grid gap-10 border-t border-[#3b2f23] pt-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#d4a35f]">
              Learning Series
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#f5efe3] md:text-7xl">
              {series.title}
            </h1>
          </div>

          <div className="space-y-6 lg:pt-4">
            <p className="max-w-3xl text-lg leading-9 text-[#b9ad9b]">
              {series.description}
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="border border-[#3b2f23] bg-[#15110d] px-3 py-1.5 text-[#d7ccbc]">
                {series.modules.length} Modules
              </span>
              <span className="border border-[#3b2f23] bg-[#15110d] px-3 py-1.5 text-[#d7ccbc]">
                {totalChapters} Chapters
              </span>
              <span className="inline-flex items-center gap-2 border border-[#3b2f23] bg-[#15110d] px-3 py-1.5 text-[#d7ccbc]">
                <IconClock size={14} className="text-[#d4a35f]" />
                ~{totalChapters * 10} min read
              </span>
            </div>

            {firstModule && firstChapter && (
              <Link
                href={`/blog/learn/${seriesSlug}/${firstModule.slug}/${firstChapter.slug}`}
                className="inline-flex items-center gap-2 border border-[#d4a35f]/30 bg-[#d4a35f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#17120f] transition-colors hover:bg-[#e1b16a]"
              >
                Start Learning
                <IconArrowRight size={16} />
              </Link>
            )}
          </div>
        </section>

        <section className="mt-14 border-t border-[#3b2f23] pt-8">
          <div className="mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#d4a35f]">
              Module Index
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
              Training Structure
            </h2>
          </div>

          <div className="space-y-5">
            {series.modules.map((module, moduleIndex) => (
              <ModuleAccordion
                key={module.slug}
                module={module}
                moduleIndex={moduleIndex}
                seriesSlug={seriesSlug}
                isFirstModule={moduleIndex === 0}
              />
            ))}
          </div>

          {series.modules.length === 0 && (
            <div className="py-12 text-center text-[#8f806c]">
              No modules yet. Check back soon!
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
