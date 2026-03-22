"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

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
    icon: IconBrandMedium,
    href: portfolioData.personal.medium,
    label: "Medium",
  },
  {
    icon: IconMail,
    href: "mailto:2021bit057@sggs.ac.in",
    label: "Email",
  },
];

const footerLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#34291f] bg-[#120e0b] py-8 transition-colors duration-300 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h3 className="gradient-text mb-1 text-xl font-semibold tracking-[-0.05em] sm:mb-2 sm:text-2xl">
                Rajesh Jadhav
              </h3>
              <p className="text-xs text-[#8f806c] sm:text-sm">
                Software Developer | Full Stack Engineer
              </p>
            </motion.div>

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
                  className="group border border-[#3b2f23] bg-[#17120f] p-2.5 transition-all duration-300 hover:border-[#d4a35f]/50 hover:bg-[#1f1914] sm:p-3"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-[#d7ccbc] group-hover:text-[#f5dfb8] sm:h-5 sm:w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {footerLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-xs text-[#b9ad9b] transition-colors hover:text-[#f5dfb8] sm:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#3b2f23] to-transparent sm:mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-[#8f806c] sm:text-sm">
            <span>© {portfolioData.personal.name}. All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
