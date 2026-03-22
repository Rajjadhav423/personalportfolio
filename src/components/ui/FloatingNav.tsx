"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Experience", link: "/#experience" },
  { name: "Projects", link: "/#projects" },
  { name: "Education", link: "/#education" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/#contact" },
  { name: "Resume", link: "/Resume/rajesh_Resume.pdf" },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      const sections = navItems
        .filter((item) => item.link.startsWith("/#"))
        .map((item) => item.link.replace("/#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
      duration: 0.28,
      ease: "power2.out",
    });
  }, [visible]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";

    if (!mobileOverlayRef.current || !mobileMenuRef.current) {
      return () => {
        document.body.style.overflow = "unset";
      };
    }

    if (mobileMenuOpen) {
      gsap.set(mobileOverlayRef.current, { display: "block" });
      gsap.fromTo(
        mobileOverlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.children,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, stagger: 0.06, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileOverlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          if (mobileOverlayRef.current) {
            gsap.set(mobileOverlayRef.current, { display: "none" });
          }
        },
      });
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav ref={navRef} className="fixed inset-x-0 top-0 z-50">
        <div className="hidden items-center border-t border-[#4a3928] bg-[#17120f]/96 px-6 py-4 backdrop-blur md:flex lg:px-10">
          <div className="flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.link.replace("/#", "");

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  target={item.link.endsWith(".pdf") ? "_blank" : undefined}
                  className={cn(
                    "ui-nav relative py-1 transition-colors duration-300",
                    isActive ? "text-[#f5dfb8]" : "text-[#d9cfbf] hover:text-[#f5dfb8]"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-4 left-0 h-px w-full bg-[#d4a35f]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-4 md:hidden">
          <Link href="/" className="nav-mobile-logo gradient-text px-4 py-2 text-xl font-semibold tracking-[-0.05em]">
            RJ
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-button relative z-[60] p-3"
          >
            {mobileMenuOpen ? (
              <IconX size={24} className="text-[#f5dfb8]" />
            ) : (
              <IconMenu2 size={24} className="nav-icon" />
            )}
          </button>
        </div>
      </nav>

      <div ref={mobileOverlayRef} className="fixed inset-0 z-40 hidden opacity-0 md:hidden">
        <div
          className="absolute inset-0 bg-[#140f0c]/95 backdrop-blur-md"
          onClick={handleNavClick}
        />

        <div ref={mobileMenuRef} className="relative flex h-full flex-col justify-center px-8">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.link.replace("/#", "");

              return (
                <div key={item.name}>
                  <Link
                    href={item.link}
                    onClick={handleNavClick}
                    target={item.link.endsWith(".pdf") ? "_blank" : undefined}
                    className="group flex items-center py-3"
                  >
                    <span
                      className={cn(
                        "text-4xl font-semibold tracking-[-0.05em] transition-all duration-300 sm:text-5xl",
                        isActive
                          ? "text-[#f5dfb8]"
                          : "text-[#f1e7d7] group-hover:text-[#f5dfb8]"
                      )}
                    >
                      {item.name}
                    </span>
                    <span
                      className={cn(
                        "ml-4 h-[2px] bg-[#d4a35f] transition-all duration-300",
                        isActive ? "w-12" : "w-0 group-hover:w-8"
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="absolute bottom-12 left-8 right-8">
            <div className="flex items-center justify-between text-sm text-[#8f806c]">
              <span>© 2026 Rajesh Jadhav</span>
              <span className="font-mono">Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
