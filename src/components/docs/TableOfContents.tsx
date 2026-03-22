"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const headingList: Heading[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: parseInt(element.tagName[1]),
    }));

    setHeadings(headingList);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <section className={cn("border-t border-[#3b2f23] pt-6", className)}>
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
        Jump Matrix
      </div>
      <div className="flex flex-wrap gap-3">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "text-sm transition-colors",
              heading.level === 2
                ? "border border-[#3b2f23] px-3 py-2"
                : "border-l border-[#5d4a34] px-3 py-2",
              activeId === heading.id
                ? "bg-[#15110d] text-[#f5dfb8]"
                : "text-[#8f806c] hover:text-[#f5efe3]"
            )}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </section>
  );
}
