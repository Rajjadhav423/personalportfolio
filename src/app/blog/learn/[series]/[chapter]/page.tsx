import { getSeriesMetadata, getChapter, getAllSeries, getSeriesChapters } from "@/lib/docs";
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
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const allSeries = getAllSeries();
  const params: { series: string; chapter: string }[] = [];

  for (const series of allSeries) {
    const chapters = getSeriesChapters(series.slug);
    for (const chapter of chapters) {
      params.push({
        series: series.slug,
        chapter: chapter.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { series: seriesSlug, chapter: chapterSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);
  const chapter = getChapter(seriesSlug, chapterSlug);

  if (!series || !chapter) {
    return { title: "Not Found" };
  }

  return {
    title: `${chapter.metadata.title} | ${series.title} | ${portfolioData.personal.name}`,
    description: chapter.metadata.summary,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { series: seriesSlug, chapter: chapterSlug } = await params;
  const series = getSeriesMetadata(seriesSlug);
  const chapter = getChapter(seriesSlug, chapterSlug);

  if (!series || !chapter) {
    notFound();
  }

  const routePath = `learn/${seriesSlug}`;

  return (
    <DocsLayout series={series} currentChapter={chapter.metadata} routePath={routePath}>
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
