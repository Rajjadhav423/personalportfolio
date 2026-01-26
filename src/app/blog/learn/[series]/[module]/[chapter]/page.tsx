import { getSeriesMetadata, getModuleMetadata, getChapter, getAllSeries } from "@/lib/docs";
import { DocsLayout } from "@/components/docs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { portfolioData } from "@/data/portfolio";
import { mdxComponents } from "@/components/docs/MDXComponents";

interface PageProps {
  params: Promise<{
    series: string;
    module: string;
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const allSeries = getAllSeries();
  const params: { series: string; module: string; chapter: string }[] = [];

  for (const series of allSeries) {
    for (const module of series.modules) {
      for (const chapter of module.chapters) {
        params.push({
          series: series.slug,
          module: module.slug,
          chapter: chapter.slug,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { series: seriesSlug, module: moduleSlug, chapter: chapterSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);
  const module = getModuleMetadata(seriesSlug, moduleSlug);
  const chapter = getChapter(seriesSlug, moduleSlug, chapterSlug);

  if (!series || !module || !chapter) {
    return { title: "Not Found" };
  }

  return {
    title: `${chapter.metadata.title} | ${module.title} | ${series.title} | ${portfolioData.personal.name}`,
    description: chapter.metadata.summary,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { series: seriesSlug, module: moduleSlug, chapter: chapterSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);
  const module = getModuleMetadata(seriesSlug, moduleSlug);
  const chapter = getChapter(seriesSlug, moduleSlug, chapterSlug);

  if (!series || !module || !chapter) {
    notFound();
  }

  const routePath = `learn/${seriesSlug}`;

  return (
    <DocsLayout 
      series={series} 
      currentModule={module} 
      currentChapter={chapter.metadata} 
      routePath={routePath}
    >
      <MDXRemote
        source={chapter.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </DocsLayout>
  );
}
