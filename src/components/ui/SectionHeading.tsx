"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          element.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          }
        );

        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={cn("mb-10 px-4 text-center md:mb-16", className)}>
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.4em] text-[#d4a35f] opacity-0">
        Mission Segment
      </div>
      <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-[#f5efe3] opacity-0 sm:text-4xl md:mb-6 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#b9ad9b] opacity-0 sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-3 opacity-0 md:mt-7">
        <div className="h-px w-12 bg-[#5d4a34]" />
        <div className="h-2 w-2 rounded-full bg-[#d4a35f]" />
        <div className="h-px w-12 bg-[#5d4a34]" />
      </div>
    </div>
  );
}
