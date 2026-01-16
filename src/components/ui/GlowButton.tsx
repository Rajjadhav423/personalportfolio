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
    "transition-all duration-300 overflow-hidden group",
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/30"
      : "border border-zinc-300 dark:border-white/20 text-zinc-700 dark:text-white hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400",
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
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
