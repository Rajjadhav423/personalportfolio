import { getBlogPosts } from "@/lib/blog";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { IconCalendar, IconArrowRight } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: `Blog | ${portfolioData.personal.name}`,
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    // Sort by Oldest First (Ascending)
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return 1;
    }
    return -1;
  });

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
    </main>
  );
}
