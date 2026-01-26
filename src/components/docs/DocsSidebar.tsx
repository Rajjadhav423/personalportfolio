"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { DocSeries, DocModule } from "@/lib/docs";
import { IconBook, IconChevronDown, IconBrandDocker } from "@tabler/icons-react";
import { useState } from "react";

interface DocsSidebarProps {
  series: DocSeries;
  routePath: string;
}

const getModuleIcon = (slug: string) => {
  const iconMap: Record<string, JSX.Element> = {
    docker: <IconBrandDocker size={18} />,
    "intro-to-devops": <IconBook size={18} />,
  };
  return iconMap[slug] || <IconBook size={18} />;
};

export function DocsSidebar({ series, routePath }: DocsSidebarProps) {
  const pathname = usePathname();
  const [expandedModules, setExpandedModules] = useState<string[]>(
    // Expand all modules by default
    series.modules.map((m) => m.slug)
  );

  const toggleModule = (moduleSlug: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleSlug)
        ? prev.filter((s) => s !== moduleSlug)
        : [...prev, moduleSlug]
    );
  };

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
            {series.title}
          </Link>
        </div>

        {/* Modules */}
        <nav className="space-y-2">
          {series.modules.map((module) => {
            const isExpanded = expandedModules.includes(module.slug);

            return (
              <div key={module.slug}>
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.slug)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                >
                  {getModuleIcon(module.slug)}
                  <span className="flex-1 text-left">{module.title}</span>
                  <IconChevronDown
                    size={16}
                    className={cn(
                      "text-zinc-400 transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                {/* Module Chapters */}
                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l border-zinc-200 dark:border-zinc-700 pl-3">
                    {module.chapters.map((chapter, index) => {
                      const chapterPath = `/blog/${routePath}/${module.slug}/${chapter.slug}`;
                      const isActive = pathname === chapterPath;

                      return (
                        <Link
                          key={chapter.slug}
                          href={chapterPath}
                          className={cn(
                            "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
                            isActive
                              ? "text-cyan-600 dark:text-cyan-400 font-medium bg-cyan-50 dark:bg-cyan-950/30"
                              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                          )}
                        >
                          <span
                            className={cn(
                              "text-xs font-medium",
                              isActive
                                ? "text-cyan-600 dark:text-cyan-400"
                                : "text-zinc-400 dark:text-zinc-500"
                            )}
                          >
                            {index + 1}.
                          </span>
                          <span className="flex-1">{chapter.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
