"use client";

import { useState } from "react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconArrowRight, IconChevronDown, IconBook, IconBrandDocker } from "@tabler/icons-react";
import { DocModule } from "@/lib/docs";

interface ModuleAccordionProps {
  module: DocModule;
  moduleIndex: number;
  seriesSlug: string;
  isFirstModule?: boolean;
}

const getModuleIcon = (slug: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    docker: <IconBrandDocker size={24} className="text-cyan-500" />,
    "intro-to-devops": <IconBook size={24} className="text-cyan-500" />,
  };
  return iconMap[slug] || <IconBook size={24} className="text-cyan-500" />;
};

export default function ModuleAccordion({
  module,
  moduleIndex,
  seriesSlug,
  isFirstModule = false,
}: ModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(isFirstModule);

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10">
            {getModuleIcon(module.slug)}
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {module.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {module.chapters.length} chapter{module.chapters.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <IconChevronDown
          size={20}
          className={`text-zinc-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 space-y-3 border-t border-zinc-100 dark:border-zinc-800/50">
          {module.chapters.map((chapter, index) => (
            <Link
              key={chapter.slug}
              href={`/blog/learn/${seriesSlug}/${module.slug}/${chapter.slug}`}
              className="block"
            >
              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all group bg-white dark:bg-zinc-900/50 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-sm shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {chapter.title}
                    </h3>
                    {chapter.summary && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">
                        {chapter.summary}
                      </p>
                    )}
                  </div>
                  <IconArrowRight
                    size={18}
                    className="text-zinc-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
