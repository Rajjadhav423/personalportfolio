"use client";

import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 320,
  className,
  ...props
}: {
  radius?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/70 p-8 text-[#f5efe3] shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition-colors",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(209,153,72,0.08),transparent_18%,transparent_82%,rgba(209,153,72,0.05))]" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(209, 153, 72, ${isHovering ? 0.22 : 0}),
              transparent 76%
            )
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,153,72,0.55)] to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
