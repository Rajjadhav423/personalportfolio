"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

// Pre-defined particle positions to avoid hydration mismatch
const PARTICLE_DATA = [
  { left: 10, top: 20, duration: 3.5, delay: 0.2 },
  { left: 25, top: 15, duration: 4.0, delay: 0.8 },
  { left: 40, top: 80, duration: 3.2, delay: 1.2 },
  { left: 55, top: 35, duration: 4.5, delay: 0.5 },
  { left: 70, top: 60, duration: 3.8, delay: 1.8 },
  { left: 85, top: 25, duration: 4.2, delay: 0.3 },
  { left: 15, top: 70, duration: 3.6, delay: 1.0 },
  { left: 30, top: 45, duration: 4.1, delay: 1.5 },
  { left: 50, top: 90, duration: 3.3, delay: 0.7 },
  { left: 65, top: 10, duration: 4.3, delay: 1.3 },
  { left: 80, top: 55, duration: 3.7, delay: 0.1 },
  { left: 95, top: 75, duration: 4.0, delay: 1.7 },
  { left: 5, top: 40, duration: 3.4, delay: 0.9 },
  { left: 20, top: 85, duration: 4.4, delay: 1.1 },
  { left: 35, top: 30, duration: 3.9, delay: 0.4 },
  { left: 45, top: 65, duration: 4.2, delay: 1.6 },
  { left: 60, top: 50, duration: 3.1, delay: 0.6 },
  { left: 75, top: 95, duration: 4.5, delay: 1.4 },
  { left: 90, top: 5, duration: 3.5, delay: 1.9 },
  { left: 12, top: 55, duration: 4.0, delay: 0.0 },
];

const emptySubscribe = () => () => {};

export function Hero() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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

      {/* Floating Particles - Hidden on mobile for performance, only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          {PARTICLE_DATA.map((particle, i) => (
            <motion.div
              key={i}
              className="hero-particle absolute w-2 h-2 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >


            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="hero-title-text">Hi, I&apos;m </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-neutral-400 block sm:inline tracking-tight">RAJESH JADHAV</span>
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
                <IconMail size={18} />
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
            <div className="relative w-full max-w-[320px] mx-auto aspect-square flex items-center justify-center py-10">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-[80px] animate-pulse" />
              
              {/* Central Core */}
              <motion.div 
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-neutral-900/90 dark:bg-black/90 rounded-full border border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [-10, 10] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 animate-spin-slow" />
                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-purple-400">
                  RJ
                </span>
              </motion.div>

              {/* Orbiting Elements */}
              {/* Orbit 1: React (Purple) */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-purple-500/30 flex items-center justify-center transform hover:scale-110 transition-transform">
                   <IconBrandGithub size={24} className="text-purple-500" />
                </div>
              </motion.div>

              {/* Orbit 2: Salesforce (Cyan) - Counter Rotation */}
              <motion.div
                className="absolute inset-4 z-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 w-14 h-14 bg-white dark:bg-neutral-800 rounded-full shadow-lg border border-cyan-500/30 flex items-center justify-center transform hover:scale-110 transition-transform">
                  <IconBrandLinkedin size={28} className="text-cyan-500" />
                </div>
              </motion.div>

              {/* Orbit 3: AI/Brain (Pink) */}
              <motion.div
                className="absolute inset-10 z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-0 -translate-x-6 w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-pink-500/30 flex items-center justify-center transform hover:scale-110 transition-transform">
                  <IconMail size={20} className="text-pink-500" />
                </div>
              </motion.div>

               {/* Decorative Orbital Rings */}
               <div className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none" />
               <div className="absolute inset-4 rounded-full border border-purple-500/10 pointer-events-none" />
               <div className="absolute inset-10 rounded-full border border-pink-500/10 pointer-events-none" />

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
