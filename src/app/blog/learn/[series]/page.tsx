import { getSeriesMetadata, getAllSeries } from "@/lib/docs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconBook, IconArrowRight, IconClock } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 mb-6 text-3xl">
            {series.icon || "📚"}
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
              {series.chapters.length} Chapters
            </span>
            <span className="flex items-center gap-1">
              <IconClock size={16} />
              ~{series.chapters.length * 10} min read
            </span>
          </div>
        </div>

        {/* Start Learning Button */}
        {series.chapters.length > 0 && (
          <div className="text-center mb-12">
            <Link
              href={`/blog/learn/${seriesSlug}/${series.chapters[0].slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
            >
              Start Learning
              <IconArrowRight size={18} />
            </Link>
          </div>
        )}

        {/* Chapters List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Chapters
          </h2>
          {series.chapters.map((chapter, index) => (
            <Link key={chapter.slug} href={`/blog/learn/${seriesSlug}/${chapter.slug}`} className="block">
              <CardSpotlight className="p-5 hover:border-cyan-500/50 transition-colors group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {chapter.title}
                    </h3>
                    {chapter.summary && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                        {chapter.summary}
                      </p>
                    )}
                  </div>
                  <IconArrowRight
                    size={18}
                    className="text-zinc-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </CardSpotlight>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {series.chapters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No chapters yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
