"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function GlowButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: GlowButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm",
    "transition-all duration-300 overflow-hidden group border",
    variant === "primary"
      ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm hover:shadow-md"
      : "bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white",
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
