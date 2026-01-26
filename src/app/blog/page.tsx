import { getBlogPosts } from "@/lib/blog";
import { getAllSeries, getSeriesChapterCount } from "@/lib/docs";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { IconCalendar, IconArrowRight, IconBook, IconBrandDocker } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: `Blog | ${portfolioData.personal.name}`,
  description: "Read my thoughts on software development, design, and more.",
};

// Icon mapping for series
const seriesIcons: Record<string, React.ReactNode> = {
  docker: <IconBrandDocker size={24} />,
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    // Sort by Oldest First (Ascending)
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return 1;
    }
    return -1;
  });

  const series = getAllSeries();

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
            title="Blog"
            subtitle="Thoughts, tutorials, and insights on web development and technology."
            className="mb-12 text-center"
        />

        {/* Learning Series Section */}
        {series.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
              <IconBook size={20} className="text-cyan-500" />
              Learning Series
            </h2>
            <div className="grid gap-4">
              {series.map((s) => (
                <Link key={s.slug} href={`/blog/learn/${s.slug}`} className="block">
                  <CardSpotlight className="p-6 hover:border-cyan-500/50 transition-colors group bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 dark:from-cyan-500/20 dark:to-cyan-900/20 border-cyan-200 dark:border-cyan-500/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                      {seriesIcons[s.slug] || <IconBook size={28} />}
                    </div>
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {s.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium whitespace-nowrap">
                          {getSeriesChapterCount(s)} chapters
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {s.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center text-cyan-500 group-hover:translate-x-1 transition-transform">
                      <IconArrowRight size={20} />
                    </div>
                  </div>
                  </CardSpotlight>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Articles
          </h2>
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                <CardSpotlight className="h-full p-6 md:p-8 hover:border-cyan-500/50 transition-colors group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-white/10 flex flex-col justify-between">
                  <article className="flex flex-col md:flex-row gap-4 h-full">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <IconCalendar size={16} />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <div className="space-y-2">
                          <h2 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {post.title}
                          </h2>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                          {post.summary}
                          </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                          {post.tags?.map(tag => (
                              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
                                  {tag}
                              </span>
                          ))}
                      </div>
                    </div>

                    <div className="flex md:flex-col justify-end md:justify-center items-end md:items-end min-w-max mt-4 md:mt-0 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-white/5 pt-4 md:pt-0">
                      <span className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium text-sm group-hover:translate-x-1 transition-transform bg-cyan-50 dark:bg-cyan-900/20 px-4 py-2 rounded-lg">
                          Read Article <IconArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </article>
                </CardSpotlight>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
