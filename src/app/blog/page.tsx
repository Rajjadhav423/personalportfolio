import Link from "next/link";
import {
  IconArrowRight,
  IconBook,
  IconBrandDocker,
  IconCalendar,
} from "@tabler/icons-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { getAllSeries, getSeriesChapterCount } from "@/lib/docs";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: `Blog | ${portfolioData.personal.name}`,
  description: "Read my thoughts on software development, design, and more.",
};

const seriesIcons: Record<string, React.ReactNode> = {
  docker: <IconBrandDocker size={22} />,
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return 1;
    }
    return -1;
  });

  const series = getAllSeries();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#7b5532]/14 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#d4a35f]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Blog"
          subtitle="Essays, technical notes, and guided learning material shaped to match the new editorial system."
          className="mb-14"
        />

        {series.length > 0 && (
          <section className="mb-16 border-t border-[#3b2f23] pt-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                  Learning Tracks
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
                  Structured Series
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {series.map((s, idx) => (
                <Link key={s.slug} href={`/blog/learn/${s.slug}`} className="block">
                  <div className="grid gap-5 border border-[#3b2f23] bg-[#15110d]/80 p-5 transition-colors hover:border-[#5d4a34] md:grid-cols-[4rem_1fr_auto] md:items-center md:p-6">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#3b2f23] bg-[#19130f] text-[#d4a35f]">
                      {seriesIcons[s.slug] || <IconBook size={22} />}
                    </div>

                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f806c]">
                        Track {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-[#f5efe3]">{s.title}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-[#b9ad9b]">
                        {s.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 md:flex-col md:items-end">
                      <span className="border border-[#3b2f23] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[#d7ccbc]">
                        {getSeriesChapterCount(s)} Chapters
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#f5dfb8]">
                        Open
                        <IconArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="border-t border-[#3b2f23] pt-8">
          <div className="mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
              Article Archive
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
              Published Writing
            </h2>
          </div>

          <div className="space-y-8">
            {posts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <article className="grid gap-6 border-t border-[#3b2f23] py-8 transition-colors hover:border-[#5d4a34] lg:grid-cols-[0.28fr_0.72fr]">
                  <div className="space-y-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f806c]">
                      Entry {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8f806c]">
                      <IconCalendar size={12} />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                      <h3 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#f5efe3]">
                        {post.title}
                      </h3>
                      <p className="mt-4 max-w-3xl text-base leading-8 text-[#b9ad9b]">
                        {post.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="border-l border-[#d4a35f] bg-[#15110d]/80 px-3 py-1.5 text-xs text-[#d7ccbc]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center md:justify-end">
                      <span className="inline-flex items-center gap-2 border border-[#3b2f23] bg-[#19130f] px-4 py-3 text-sm uppercase tracking-[0.18em] text-[#f5dfb8]">
                        Read Article
                        <IconArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
