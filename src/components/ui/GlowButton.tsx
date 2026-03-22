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
    primary: cn(
      "border border-[#d4a35f]/30 bg-[#d4a35f] text-[#17120f]",
      "font-semibold",
      "shadow-[0_18px_40px_rgba(212,163,95,0.18)]",
      "hover:bg-[#e1b16a]"
    ),
    secondary: cn(
      "border border-[#d4a35f]/20 bg-[#231c16]/80 text-[#f5efe3]",
      "font-semibold",
      "hover:border-[#d4a35f]/35 hover:bg-[#2a221b]"
    ),
    ghost: cn(
      "bg-transparent",
      "text-[#d8ccba]",
      "font-medium",
      "border border-[#3f3328]",
      "hover:border-[#d4a35f]/30 hover:bg-[#211913]"
    ),
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-none uppercase tracking-[0.18em]",
    "transition-all duration-200",
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
