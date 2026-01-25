"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
}

export function GlowButton({
  children,
  className,
  href,
  target,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
}: GlowButtonProps) {
  // ... (styles)

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-sm",
  };

  const variantStyles = {
    // PRIMARY: Neumorphic raised style
    primary: cn(
      "bg-slate-100 dark:bg-slate-800",
      "text-slate-800 dark:text-slate-100",
      "font-semibold",
      "shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.9)]",
      "dark:shadow-[5px_5px_10px_rgba(0,0,0,0.4),-5px_-5px_10px_rgba(60,60,60,0.2)]",
      "active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]",
      "dark:active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(60,60,60,0.2)]"
    ),
    // SECONDARY: Neumorphic inset style
    secondary: cn(
      "bg-slate-100 dark:bg-slate-800",
      "text-slate-700 dark:text-slate-200",
      "font-semibold",
      "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]",
      "dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.25),inset_-3px_-3px_6px_rgba(60,60,60,0.15)]",
      "active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]",
      "dark:active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.35),inset_-4px_-4px_8px_rgba(60,60,60,0.2)]"
    ),
    // GHOST: Flat minimal
    ghost: cn(
      "bg-transparent",
      "text-slate-700 dark:text-slate-300",
      "font-medium",
      "border border-slate-200 dark:border-slate-700",
      "hover:bg-slate-50 dark:hover:bg-slate-800/50"
    ),
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-2xl",
    "transition-shadow duration-150",
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && "w-full",
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const finalTarget = target || (isExternal ? "_blank" : undefined);
    
    return (
      <a
        href={href}
        className={baseStyles}
        target={finalTarget}
        rel={finalTarget === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} disabled={disabled}>
      {children}
    </button>
  );
}
