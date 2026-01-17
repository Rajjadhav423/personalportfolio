"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Experience", link: "/#experience" },
  { name: "Projects", link: "/#projects" },
  { name: "Education", link: "/#education" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/#contact" },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      // Determine active section
      const sections = navItems.filter(item => item.link.startsWith("/#")).map(item => item.link.replace("/#", ""));
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 inset-x-0 z-50 px-4"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <div className="nav-bar flex items-center justify-center space-x-1 px-4 py-3 rounded-full">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeSection === item.link.replace("/#", "")
                      ? "text-cyan-600 dark:text-cyan-400"
                      : "nav-link"
                  )}
                >
                  {activeSection === item.link.replace("/#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Header */}
          <div className="md:hidden flex justify-between items-center">
            <Link href="/" className="nav-mobile-logo text-xl font-bold gradient-text px-4 py-2 rounded-full">
              RJ
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="nav-mobile-button p-3 rounded-full relative z-[60]"
              >
                {mobileMenuOpen ? (
                  <IconX size={24} className="text-cyan-600 dark:text-cyan-400" />
                ) : (
                  <IconMenu2 size={24} className="nav-icon" />
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-md"
              onClick={handleNavClick}
            />
            
            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              {/* Navigation Items */}
              <nav className="space-y-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.link.replace("/#", "");
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: idx * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={item.link}
                        onClick={handleNavClick}
                        className="group flex items-center py-3"
                      >
                        <span className={cn(
                          "text-4xl sm:text-5xl font-bold tracking-tight transition-all duration-300",
                          isActive 
                            ? "text-cyan-600 dark:text-cyan-400" 
                            : "text-zinc-800 dark:text-zinc-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                        )}>
                          {item.name}
                        </span>
                        
                        {/* Animated underline */}
                        <motion.div 
                          className={cn(
                            "ml-4 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300",
                            isActive ? "w-12" : "w-0 group-hover:w-8"
                          )}
                        />
                        

                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-12 left-8 right-8"
              >
                <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-500">
                  <span>© 2025 Rajesh Jadhav</span>
                  <span className="font-mono">Full Stack Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
