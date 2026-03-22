"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { DocMetadata, DocModule, DocSeries } from "@/lib/docs";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContents } from "./TableOfContents";
import { IconArrowLeft, IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";

interface DocsLayoutProps {
  series: DocSeries;
  currentModule: DocModule;
  currentChapter: DocMetadata;
  routePath: string;
  children: React.ReactNode;
}

export function DocsLayout({
  series,
  currentModule,
  currentChapter,
  routePath,
  children,
}: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const allChapters: { module: DocModule; chapter: DocMetadata }[] = [];
  series.modules.forEach((module) => {
    module.chapters.forEach((chapter) => {
      allChapters.push({ module, chapter });
    });
  });

  const currentIndex = allChapters.findIndex(
    (item) =>
      item.module.slug === currentModule.slug &&
      item.chapter.slug === currentChapter.slug
  );
  const prevItem = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextItem =
    currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 border border-[#3b2f23] bg-[#d4a35f] p-3 text-[#17120f] shadow-lg lg:hidden"
      >
        {sidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto border-r border-[#3b2f23] bg-[#120f0c] p-6 pt-24 transform transition-transform duration-300 lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <DocsSidebar series={series} routePath={routePath} />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#8f806c]">
          <Link href="/blog" className="hover:text-[#f5dfb8]">
            Blog
          </Link>
          <span>/</span>
          <Link href={`/blog/${routePath}`} className="hover:text-[#f5dfb8]">
            {series.title}
          </Link>
          <span>/</span>
          <span className="text-[#d7ccbc]">{currentModule.title}</span>
          <span>/</span>
          <span className="text-[#f5efe3]">{currentChapter.title}</span>
        </div>

        <section className="border-t border-[#3b2f23] pt-8">
          <div className="grid gap-8 xl:grid-cols-[0.36fr_0.64fr]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#d4a35f]">
                Guided Lesson
              </div>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#f5efe3] md:text-6xl">
                {currentChapter.title}
              </h1>
              {currentChapter.summary && (
                <p className="mt-5 max-w-3xl text-lg leading-9 text-[#b9ad9b]">
                  {currentChapter.summary}
                </p>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:pt-4">
              <div className="border border-[#3b2f23] bg-[#15110d]/80 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                  Series
                </div>
                <div className="mt-3 text-lg font-semibold text-[#f5efe3]">
                  {series.title}
                </div>
              </div>
              <div className="border border-[#3b2f23] bg-[#15110d]/80 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                  Current Module
                </div>
                <div className="mt-3 text-lg font-semibold text-[#f5efe3]">
                  {currentModule.title}
                </div>
              </div>
              <div className="border border-[#3b2f23] bg-[#15110d]/80 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                  Progress
                </div>
                <div className="mt-3 text-lg font-semibold text-[#f5efe3]">
                  Chapter {currentIndex + 1} / {allChapters.length}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-10 xl:grid-cols-[0.28fr_0.72fr]">
          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                  Module Map
                </div>
                <div className="space-y-3">
                  {series.modules.map((module) => {
                    const isCurrentModule = module.slug === currentModule.slug;
                    return (
                      <div
                        key={module.slug}
                        className={cn(
                          "border px-4 py-4",
                          isCurrentModule
                            ? "border-[#d4a35f]/40 bg-[#15110d]"
                            : "border-[#3b2f23] bg-[#120f0c]"
                        )}
                      >
                        <div
                          className={cn(
                            "text-sm font-semibold",
                            isCurrentModule ? "text-[#f5efe3]" : "text-[#b9ad9b]"
                          )}
                        >
                          {module.title}
                        </div>
                        {isCurrentModule && (
                          <div className="mt-3 space-y-2 border-l border-[#5d4a34] pl-3">
                            {module.chapters.map((chapter, idx) => {
                              const href = `/blog/${routePath}/${module.slug}/${chapter.slug}`;
                              const isActive = chapter.slug === currentChapter.slug;
                              return (
                                <Link
                                  key={chapter.slug}
                                  href={href}
                                  className={cn(
                                    "block text-sm transition-colors",
                                    isActive
                                      ? "text-[#f5dfb8]"
                                      : "text-[#8f806c] hover:text-[#f5efe3]"
                                  )}
                                >
                                  {idx + 1}. {chapter.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <TableOfContents />
            </div>
          </aside>

          <main className="min-w-0">
            <article className="prose docs-prose max-w-none break-words prose-headings:scroll-mt-24 prose-pre:max-w-[calc(100vw-3rem)] sm:prose-pre:max-w-none">
              {children}
            </article>

            <nav className="mt-14 grid gap-4 border-t border-[#3b2f23] pt-8 md:grid-cols-2">
              <div>
                {prevItem ? (
                  <Link
                    href={`/blog/${routePath}/${prevItem.module.slug}/${prevItem.chapter.slug}`}
                    className="group block border border-[#3b2f23] bg-[#15110d]/70 p-5"
                  >
                    <span className="mb-2 flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-[#8f806c]">
                      <IconArrowLeft size={12} /> Previous
                    </span>
                    <span className="text-base font-semibold text-[#f5efe3] group-hover:text-[#f5dfb8]">
                      {prevItem.chapter.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div>
                {nextItem ? (
                  <Link
                    href={`/blog/${routePath}/${nextItem.module.slug}/${nextItem.chapter.slug}`}
                    className="group block border border-[#3b2f23] bg-[#15110d]/70 p-5 text-right"
                  >
                    <span className="mb-2 flex items-center justify-end gap-1 text-xs uppercase tracking-[0.16em] text-[#8f806c]">
                      Next <IconArrowRight size={12} />
                    </span>
                    <span className="text-base font-semibold text-[#f5efe3] group-hover:text-[#f5dfb8]">
                      {nextItem.chapter.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </nav>
          </main>
        </section>
      </div>
    </div>
  );
}
