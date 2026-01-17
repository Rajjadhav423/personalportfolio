import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { PortfolioMDXRemote } from "@/components/ui/MDXRemote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCalendar, IconArrowLeft, IconClock } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return;
  }

  const { title, summary: description, image } = post.metadata;

  return {
    title: `${title} | ${portfolioData.personal.name}`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.metadata.publishedAt,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <article className="max-w-3xl mx-auto relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8 transition-colors group"
        >
          <IconArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-6 pb-2 leading-tight">
            {post.metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-white/10 pb-8">
            <div className="flex items-center gap-1">
              <IconCalendar size={18} />
              <time dateTime={post.metadata.publishedAt}>
                {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {/* Add reading time calculation if desired later */}
            {post.metadata.tags && (
              <div className="flex gap-2 ml-auto">
                {post.metadata.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-cyan-100/50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-zinc-800 dark:prose-headings:text-zinc-100 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-strong:font-black prose-strong:text-cyan-600 dark:prose-strong:text-cyan-400 prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800">
          <PortfolioMDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
