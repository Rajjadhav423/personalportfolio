"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export function Hero() {
  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "Salesforce Developer",
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-20 md:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="hero-glow-1 absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="hero-glow-2 absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      </div>

      {/* Floating Particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-particle absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs md:text-sm mb-4 md:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for opportunities
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="hero-title-text">Hi, I&apos;m </span>
              <span className="gradient-text block sm:inline">RAJESH JADHAV</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl hero-subtitle-text mb-4 md:mb-6 h-8 md:h-10">
              <TypewriterEffect words={roles} />
            </div>

            <p className="hero-description-text text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              Aspiring Software Developer with hands-on experience in full-stack web development, 
              Salesforce CRM platform development, and machine learning research.
            </p>

            {/* Contact Info - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <a
                href="mailto:2021bit057@sggs.ac.in"
                className="hero-contact-link flex items-center justify-center sm:justify-start gap-2 transition-colors px-3 py-2 rounded-lg"
              >
                <IconMail size={18} />
                <span className="text-xs md:text-sm">2021bit057@sggs.ac.in</span>
              </a>
              <a
                href="tel:+919322850587"
                className="hero-contact-link flex items-center justify-center sm:justify-start gap-2 transition-colors px-3 py-2 rounded-lg"
              >
                <IconPhone size={18} />
                <span className="text-xs md:text-sm">+91-9322850587</span>
              </a>
            </div>

            {/* CTA Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <GlowButton href="#contact" className="w-full sm:w-auto">
                <IconMail size={18} className="mr-2" />
                Get in Touch
              </GlowButton>
              <GlowButton variant="secondary" href="#projects" className="w-full sm:w-auto">
                View Projects
              </GlowButton>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-6 md:mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/rajeshjadhav057"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link p-3 rounded-full transition-all duration-300"
              >
                <IconBrandLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Rajjadhav423"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link p-3 rounded-full transition-all duration-300"
              >
                <IconBrandGithub size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                className="absolute -inset-3 md:-inset-4 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="hero-profile-ring absolute -inset-2 md:-inset-3 rounded-full"
              />
              
              {/* Profile Image Placeholder */}
              <div className="hero-profile-inner relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">RJ</span>
                  <p className="hero-profile-name text-xs md:text-sm mt-2">Rajesh Jadhav</p>
                </div>
              </div>

              {/* Floating Badges - Hidden on small mobile */}
              <motion.div
                className="hero-badge absolute -right-2 md:-right-4 top-1/4 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-cyan-500/30 backdrop-blur-sm hidden sm:block"
                animate={{ y: [-5, 5] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-cyan-600 dark:text-cyan-400 text-xs md:text-sm font-medium">Salesforce</span>
              </motion.div>
              <motion.div
                className="hero-badge absolute -left-2 md:-left-4 top-1/2 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm hidden sm:block"
                animate={{ y: [5, -5] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              >
                <span className="text-purple-600 dark:text-purple-400 text-xs md:text-sm font-medium">Full Stack</span>
              </motion.div>
              <motion.div
                className="hero-badge absolute -right-4 md:-right-8 bottom-1/4 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-pink-500/30 backdrop-blur-sm hidden sm:block"
                animate={{ y: [-5, 5] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              >
                <span className="text-pink-600 dark:text-pink-400 text-xs md:text-sm font-medium">ML/AI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="hero-scroll-indicator w-6 h-10 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
