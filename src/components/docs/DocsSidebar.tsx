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
  const iconMap: Record<string, React.ReactNode> = {
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
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="mb-6">
          <Link
            href={`/blog/${routePath}`}
            className="flex items-center gap-2 text-lg font-semibold text-[#f5efe3] transition-colors hover:text-[#f5dfb8]"
          >
            <IconBook size={20} />
            {series.title}
          </Link>
        </div>

        <nav className="space-y-2">
          {series.modules.map((module) => {
            const isExpanded = expandedModules.includes(module.slug);

            return (
              <div key={module.slug}>
                <button
                  onClick={() => toggleModule(module.slug)}
                  className="flex w-full items-center gap-2 border-l border-[#3b2f23] px-3 py-3 text-sm font-semibold text-[#f5efe3] transition-colors hover:border-[#5d4a34] hover:bg-[#15110d]"
                >
                  {getModuleIcon(module.slug)}
                  <span className="flex-1 text-left">{module.title}</span>
                  <IconChevronDown
                    size={16}
                    className={cn(
                      "text-[#8f806c] transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l border-[#3b2f23] pl-3">
                    {module.chapters.map((chapter, index) => {
                      const chapterPath = `/blog/${routePath}/${module.slug}/${chapter.slug}`;
                      const isActive = pathname === chapterPath;

                      return (
                        <Link
                          key={chapter.slug}
                          href={chapterPath}
                          className={cn(
                            "flex items-center gap-2 px-2 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-[#15110d] font-semibold text-[#f5dfb8]"
                              : "text-[#b9ad9b] hover:bg-[#15110d]/70 hover:text-[#f5efe3]"
                          )}
                        >
                          <span
                            className={cn(
                              "text-xs font-semibold",
                              isActive
                                ? "text-[#d4a35f]"
                                : "text-[#8f806c]"
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
