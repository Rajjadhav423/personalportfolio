"use client";

import Link from "next/link";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContents } from "./TableOfContents";
import type { DocMetadata, DocSeries } from "@/lib/docs";
import { IconArrowLeft, IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DocsLayoutProps {
  series: DocSeries;
  currentChapter: DocMetadata;
  routePath: string; // The URL path prefix (e.g., "learn-docker")
  children: React.ReactNode;
}

export function DocsLayout({ series, currentChapter, routePath, children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Find previous and next chapters
  const currentIndex = series.chapters.findIndex((c) => c.slug === currentChapter.slug);
  const prevChapter = currentIndex > 0 ? series.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < series.chapters.length - 1 ? series.chapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-cyan-500 text-white rounded-full shadow-lg"
      >
        {sidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "lg:hidden fixed left-0 top-0 h-full w-72 bg-white dark:bg-zinc-900 z-50 transform transition-transform duration-300 p-6 pt-24 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <DocsSidebar
          seriesSlug={series.slug}
          seriesTitle={series.title}
          chapters={series.chapters}
          routePath={routePath}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/blog" className="hover:text-cyan-600 dark:hover:text-cyan-400">
            Blog
          </Link>
          <span>/</span>
          <Link
            href={`/blog/${routePath}`}
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            {series.title}
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100">{currentChapter.title}</span>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <DocsSidebar
              seriesSlug={series.slug}
              seriesTitle={series.title}
              chapters={series.chapters}
              routePath={routePath}
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
              {children}
            </article>

            {/* Navigation */}
            <nav className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between">
              {prevChapter ? (
                <Link
                  href={`/blog/${routePath}/${prevChapter.slug}`}
                  className="group flex flex-col items-start"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1">
                    <IconArrowLeft size={12} /> Previous
                  </span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    {prevChapter.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={`/blog/${routePath}/${nextChapter.slug}`}
                  className="group flex flex-col items-end"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1">
                    Next <IconArrowRight size={12} />
                  </span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    {nextChapter.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </main>

          {/* Table of Contents */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
