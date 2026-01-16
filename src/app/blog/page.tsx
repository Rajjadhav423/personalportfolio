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
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
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
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <CardSpotlight className="p-6 md:p-8 hover:border-cyan-500/50 transition-colors group bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-white/10">
                <article className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
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
                    <h2 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {post.summary}
                    </p>
                    <div className="flex gap-2 pt-2">
                        {post.tags?.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-medium text-sm mt-2 md:mt-0 group-hover:translate-x-1 transition-transform">
                    Read Article <IconArrowRight size={16} className="ml-1" />
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
