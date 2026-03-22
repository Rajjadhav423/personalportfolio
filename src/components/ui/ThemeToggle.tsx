"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !iconRef.current) return;

    gsap.fromTo(
      iconRef.current,
      { y: -10, opacity: 0, rotate: -18 },
      { y: 0, opacity: 1, rotate: 0, duration: 0.28, ease: "power2.out" }
    );
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return <div className="h-10 w-10 animate-pulse bg-zinc-100 dark:bg-zinc-800" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseEnter={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, { scale: 1.05, duration: 0.18, ease: "power2.out" });
      }}
      onMouseLeave={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, { scale: 1, duration: 0.18, ease: "power2.out" });
      }}
      onMouseDown={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, { scale: 0.95, duration: 0.12, ease: "power2.out" });
      }}
      onMouseUp={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, { scale: 1.05, duration: 0.12, ease: "power2.out" });
      }}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-[#3f3328] bg-[#1c1611]/85 backdrop-blur-sm transition-colors hover:border-[#d4a35f]/50"
      aria-label="Toggle theme"
    >
      <span ref={iconRef} className="inline-flex">
        {isDark ? (
          <IconMoon className="h-5 w-5 text-[#d4a35f]" />
        ) : (
          <IconSun className="h-5 w-5 text-amber-400" />
        )}
      </span>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#d4a35f]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
