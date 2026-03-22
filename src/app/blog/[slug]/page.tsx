import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { PortfolioMDXRemote } from "@/components/ui/MDXRemote";
import { IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
      type: "article",
      publishedTime: post.metadata.publishedAt,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.metadata.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(209,153,72,0.08),transparent_28%),linear-gradient(180deg,rgba(209,153,72,0.05),transparent_20%,transparent_82%,rgba(209,153,72,0.04))]" />

      <article className="relative z-10 mx-auto max-w-5xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4a35f] transition hover:text-[#f2c983]"
        >
          <IconArrowLeft size={16} />
          Return to Archive
        </Link>

        <header className="grid gap-8 border border-[rgba(209,153,72,0.14)] bg-[linear-gradient(180deg,rgba(24,16,10,0.9),rgba(10,10,10,0.96))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1.6fr_0.8fr] md:px-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-[0.72rem] uppercase tracking-[0.36em] text-[#d4a35f]">
                Field Note
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#f5efe3] md:text-6xl">
                {post.metadata.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#b9ad9b] md:text-lg">
                {post.metadata.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {(post.metadata.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="border border-[rgba(209,153,72,0.2)] bg-[rgba(209,153,72,0.06)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#d4a35f]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-start border border-white/8 bg-black/35 p-5">
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d4a35f]">
                Published
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-[#d7ccbc]">
                <IconCalendar size={18} className="text-[#d19948]" />
                <time dateTime={post.metadata.publishedAt}>{publishedDate}</time>
              </div>
            </div>

            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d4a35f]">
                Read Mode
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-[#d7ccbc]">
                <IconClock size={18} className="text-[#d19948]" />
                Long-form briefing
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-10 border-x border-b border-[rgba(209,153,72,0.12)] bg-[linear-gradient(180deg,rgba(30,20,13,0.24),rgba(10,10,10,0.62))] px-6 py-10 md:grid-cols-[0.72fr_1.45fr] md:px-10">
          <aside className="space-y-5">
            <div className="border border-[rgba(209,153,72,0.12)] bg-black/30 p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.32em] text-[#d4a35f]">
                Briefing
              </div>
              <p className="mt-4 text-sm leading-7 text-[#b9ad9b]">
                A long-form note from the archive. This article follows the same
                operational reading system as the rest of the site instead of
                the older neon blog template.
              </p>
            </div>
          </aside>

          <div className="docs-prose">
            <PortfolioMDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}
