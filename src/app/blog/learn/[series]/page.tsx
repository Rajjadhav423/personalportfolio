import { getSeriesMetadata, getAllSeries, getSeriesChapterCount } from "@/lib/docs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconBook, IconArrowRight, IconClock, IconChevronDown } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";
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
    <main className="min-h-screen pt-24 pb-16 px-4 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/blog" className="hover:text-cyan-600 dark:hover:text-cyan-400">
            Blog
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100">{series.title}</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 mb-6">
            <IconBook size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {series.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {series.description}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <IconBook size={16} />
              {series.modules.length} Modules
            </span>
            <span className="flex items-center gap-1">
              <IconBook size={16} />
              {totalChapters} Chapters
            </span>
            <span className="flex items-center gap-1">
              <IconClock size={16} />
              ~{totalChapters * 10} min read
            </span>
          </div>
        </div>

        {/* Start Learning Button */}
        {firstModule && firstChapter && (
          <div className="text-center mb-12">
            <Link
              href={`/blog/learn/${seriesSlug}/${firstModule.slug}/${firstChapter.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
            >
              Start Learning
              <IconArrowRight size={18} />
            </Link>
          </div>
        )}

        {/* Modules List */}
        <div className="space-y-4">
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

        {/* Empty State */}
        {series.modules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No modules yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
