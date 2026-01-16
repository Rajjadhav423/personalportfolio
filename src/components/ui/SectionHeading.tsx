"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-center mb-10 md:mb-16 px-4", className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-500">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 md:mt-6 flex justify-center">
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80 rounded-full blur-[1px]" />
      </div>
    </motion.div>
  );
}
