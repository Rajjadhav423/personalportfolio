"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  IconMenu2, 
  IconX, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconRocket, 
  IconSchool, 
  IconArticle, 
  IconMail,
  IconChevronRight
} from "@tabler/icons-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const navItems = [
  { name: "About", link: "/#about", icon: IconUser },
  { name: "Skills", link: "/#skills", icon: IconCode },
  { name: "Experience", link: "/#experience", icon: IconBriefcase },
  { name: "Projects", link: "/#projects", icon: IconRocket },
  { name: "Education", link: "/#education", icon: IconSchool },
  { name: "Blog", link: "/blog", icon: IconArticle },
  { name: "Contact", link: "/#contact", icon: IconMail },
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
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

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <a href="#" className="nav-mobile-logo text-xl font-bold gradient-text px-4 py-2 rounded-full">
            RJ
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-mobile-button p-3 rounded-full"
            >
              {mobileMenuOpen ? (
                <IconX size={24} className="text-cyan-600 dark:text-cyan-400" />
              ) : (
                <IconMenu2 size={24} className="nav-icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Enhanced */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 bg-gradient-to-br from-white/95 via-slate-50/95 to-cyan-50/95 dark:from-zinc-900/95 dark:via-zinc-900/95 dark:to-zinc-800/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
            >
              <div className="flex flex-col py-2">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.link.replace("/#", "");
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.link}
                        onClick={handleNavClick}
                        className={cn(
                          "flex items-center justify-between px-6 py-4 text-base font-medium transition-all duration-300 group",
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/10 text-cyan-600 dark:text-cyan-400"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/50 dark:hover:bg-white/5"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-2 rounded-lg transition-all duration-300",
                            isActive 
                              ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400" 
                              : "bg-zinc-100 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                          )}>
                            <Icon size={20} />
                          </div>
                          <span>{item.name}</span>
                        </div>
                        <IconChevronRight 
                          size={18} 
                          className={cn(
                            "transition-all duration-300",
                            isActive 
                              ? "text-cyan-500 translate-x-0 opacity-100" 
                              : "text-zinc-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          )} 
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-zinc-200/50 dark:border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5">
                <p className="text-xs text-center text-zinc-500 dark:text-zinc-500">
                  © Rajesh Jadhav
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}
