"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { DocMetadata } from "@/lib/docs";
import { IconChevronRight, IconBook } from "@tabler/icons-react";

interface DocsSidebarProps {
  seriesSlug: string;
  seriesTitle: string;
  chapters: DocMetadata[];
  routePath: string; // Add this prop
}

export function DocsSidebar({ seriesSlug, seriesTitle, chapters, routePath }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
        {/* Series Title */}
        <div className="mb-6">
          <Link
            href={`/blog/${routePath}`}
            className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <IconBook size={20} />
            {seriesTitle}
          </Link>
        </div>

        {/* Chapters */}
        <nav className="space-y-0.5">
          {chapters.map((chapter, index) => {
            const chapterPath = `/blog/${routePath}/${chapter.slug}`;
            const isActive = pathname === chapterPath;

            return (
              <Link
                key={chapter.slug}
                href={chapterPath}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-medium"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                <span className={cn(
                  "flex items-center justify-center w-5 h-5 rounded text-xs font-medium",
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-zinc-400 dark:text-zinc-500"
                )}>
                  {index + 1}.
                </span>
                <span className="flex-1">{chapter.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
