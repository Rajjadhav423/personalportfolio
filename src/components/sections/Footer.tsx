"use client";

import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconHeart,
} from "@tabler/icons-react";

const socialLinks = [
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/rajeshjadhav057",
    label: "LinkedIn",
  },
  {
    icon: IconBrandGithub,
    href: "https://github.com/Rajjadhav423",
    label: "GitHub",
  },
  {
    icon: IconMail,
    href: "mailto:2021bit057@sggs.ac.in",
    label: "Email",
  },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative py-8 md:py-12 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Top Row - Logo and Social */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">
                Rajesh Jadhav
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Software Developer | Full Stack Engineer
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5 text-zinc-400 group-hover:text-cyan-400" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-zinc-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-zinc-500 text-xs sm:text-sm flex items-center justify-center gap-1 flex-wrap">
            <span>© {new Date().getFullYear()} Rajesh Jadhav.</span>
            <span className="flex items-center gap-1">
              Made with
              <IconHeart size={14} className="text-red-500 animate-pulse" />
              and lots of code.
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
