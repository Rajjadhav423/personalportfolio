"use client";

import { useState } from "react";
import Link from "next/link";
import { DocModule } from "@/lib/docs";
import { IconArrowRight, IconBook, IconBrandDocker, IconChevronDown } from "@tabler/icons-react";

interface ModuleAccordionProps {
  module: DocModule;
  moduleIndex: number;
  seriesSlug: string;
  isFirstModule?: boolean;
}

const getModuleIcon = (slug: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    docker: <IconBrandDocker size={20} className="text-[#d4a35f]" />,
    "intro-to-devops": <IconBook size={20} className="text-[#d4a35f]" />,
  };
  return iconMap[slug] || <IconBook size={20} className="text-[#d4a35f]" />;
};

export default function ModuleAccordion({
  module,
  moduleIndex,
  seriesSlug,
  isFirstModule = false,
}: ModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(isFirstModule);

  return (
    <div className="border border-[#3b2f23] bg-[#15110d]/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group grid w-full gap-4 p-5 text-left transition-colors hover:bg-[#18130f] md:grid-cols-[3.5rem_1fr_auto] md:items-center md:p-6"
      >
        <div className="flex h-14 w-14 items-center justify-center border border-[#3b2f23] bg-[#19130f]">
          {getModuleIcon(module.slug)}
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
            Module {String(moduleIndex + 1).padStart(2, "0")}
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-[#f5efe3]">{module.title}</h2>
          <p className="mt-2 text-sm text-[#b9ad9b]">
            {module.chapters.length} chapter{module.chapters.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 md:block">
          <div className="text-xs uppercase tracking-[0.18em] text-[#8f806c]">
            {isOpen ? "Collapse" : "Expand"}
          </div>
          <IconChevronDown
            size={20}
            className={`mt-2 text-[#d4a35f] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#3b2f23] px-5 pb-5 pt-4 md:px-6 md:pb-6">
          <div className="space-y-3">
            {module.chapters.map((chapter, index) => (
              <Link
                key={chapter.slug}
                href={`/blog/learn/${seriesSlug}/${module.slug}/${chapter.slug}`}
                className="block"
              >
                <div className="grid gap-4 border-l border-[#d4a35f] bg-[#19130f] px-4 py-4 transition-colors hover:bg-[#1d1712] md:grid-cols-[3rem_1fr_auto] md:items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-[#3b2f23] text-sm font-semibold text-[#f5efe3]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f5efe3]">{chapter.title}</h3>
                    {chapter.summary && (
                      <p className="mt-1 text-sm leading-7 text-[#b9ad9b]">
                        {chapter.summary}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[#f5dfb8]">
                    Open
                    <IconArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
