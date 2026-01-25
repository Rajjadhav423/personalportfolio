"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconFileText,
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

import { portfolioData } from "@/data/portfolio";

// ... existing imports

export function Hero() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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


            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-6"
            >
              Hi, I'm <span className="inline-block hover:animate-wave origin-bottom-right cursor-default"></span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] dark:from-cyan-400 dark:to-purple-500 drop-shadow-sm block mt-2">
                {portfolioData.personal.name.toUpperCase()}
              </span>
            </motion.h1>

            <div className="text-lg sm:text-xl md:text-2xl hero-subtitle-text mb-4 md:mb-6 h-8 md:h-10">
              <TypewriterEffect words={portfolioData.personal.roles} />
            </div>

            <p className="hero-description-text text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              {portfolioData.personal.description}
            </p>

            {/* Contact Info - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hero-contact-link flex items-center justify-center sm:justify-start gap-2 transition-colors px-3 py-2 rounded-lg"
              >
                <IconMail size={18} />
                <span className="text-xs md:text-sm">{portfolioData.personal.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="hero-contact-link flex items-center justify-center sm:justify-start gap-2 transition-colors px-3 py-2 rounded-lg"
              >
                <IconPhone size={18} />
                <span className="text-xs md:text-sm">{portfolioData.personal.phone}</span>
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
              <GlowButton variant="secondary" href="/Resume/rajesh_Resume.pdf" target="_blank" className="w-full sm:w-auto">
                <IconFileText size={18} />
                Resume
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
              <a
                href="https://leetcode.com/u/jadhavraj423/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link p-3 rounded-full transition-all duration-300"
              >
                <IconBrandLeetcode size={22} />
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
            <div className="relative w-full max-w-[500px] mx-auto mt-10 lg:mt-0 flex flex-col items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-[100px] -z-10" />
              
              {/* Vector Laptop Container */}
              <div className="relative w-full aspect-[1.6]">
                  <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-2xl">
                     {/* --- LID (Outer Shell) --- */}
                     {/* Gradient Defs */}
                     <defs>
                        <linearGradient id="lidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                           <stop offset="0%" stopColor="#3d3d3d" />
                           <stop offset="100%" stopColor="#262626" />
                        </linearGradient>
                        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                           <stop offset="0%" stopColor="#d1d5db" />
                           <stop offset="100%" stopColor="#9ca3af" />
                        </linearGradient>
                     </defs>

                     {/* Lid Body */}
                     <rect x="100" y="50" width="600" height="380" rx="24" fill="url(#lidGradient)" />
                     
                     {/* Screen Bezel (Black) */}
                     <rect x="105" y="55" width="590" height="370" rx="20" fill="#000" />
                     
                     {/* Camera */}
                     <circle cx="400" cy="70" r="3" fill="#333" />
                     <circle cx="400" cy="70" r="1" fill="#111" />

                     {/* --- HTML SCREEN CONTENT --- */}
                     {/* This foreignObject sits perfectly exactly inside the Bezel */}
                     <foreignObject x="115" y="85" width="570" height="330">
                        <div className="w-full h-full bg-[#1e1e1e] rounded-md overflow-hidden flex flex-col font-mono text-xs relative">
                           {/* Window Header */}
                           <div className="h-6 bg-[#2d2d2d] flex items-center px-3 space-x-1.5 border-b border-[#404040]">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                              <div className="flex-1 text-center text-gray-500 text-[9px] opacity-80">portfolio — zsh</div>
                           </div>

                           {/* Code Content */}
                           <div className="flex-1 p-3 overflow-hidden text-gray-300 relative">
                              <motion.div
                                 animate={{ y: [0, -220] }}
                                 transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                 className="space-y-3"
                              >
                                 {/* Command Block 1 */}
                                 <div>
                                    <p className="flex gap-2">
                                       <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">whoami</span>
                                    </p>
                                    <p className="text-yellow-300 pl-4">"Rajesh Jadhav"</p>
                                    <p className="text-gray-500 pl-4 text-[10px]">Full Stack Developer</p>
                                 </div>
                                 
                                 {/* Command Block 2 */}
                                 <div>
                                    <p className="flex gap-2">
                                       <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">ls ./tech-stack</span>
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 pl-4 text-[10px] text-cyan-300">
                                       <span>React</span>
                                       <span>NextJS</span>
                                       <span>Salesforce</span>
                                       <span>NodeJS</span>
                                       <span>Python</span>
                                       <span>AWS</span>
                                    </div>
                                 </div>

                                 {/* Command Block 3 */}
                                 <div>
                                    <p className="flex gap-2">
                                       <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">git commit -m "Success"</span>
                                    </p>
                                    <div className="pl-4 text-gray-500 text-[10px]">
                                       <p>[main 8f3a12] Success</p>
                                       <p>3 files changed, 24 insertions(+)</p>
                                       <p className="text-green-400">Commit successful.</p>
                                    </div>
                                 </div>

                                 {/* Command Block 4 */}
                                 <div>
                                    <p className="flex gap-2">
                                       <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">./deploy.sh</span>
                                    </p>
                                    <div className="pl-4 text-gray-500 text-[10px]">
                                       <p>Building production bundle...</p>
                                       <p>Optimizing assets...</p>
                                       <p className="text-green-400">✔ Deployed to Vercel</p>
                                    </div>
                                 </div>
                                 
                                 {/* Cursor */}
                                 <p className="flex gap-2">
                                    <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="w-2 h-4 bg-gray-500 animate-pulse" />
                                 </p>
                              </motion.div>
                           </div>
                           
                           {/* Screen Reflection Gradient */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                     </foreignObject>

                     {/* --- BASE (Keyboard Deck) --- */}
                     {/* Top of Base */}
                     <path d="M50 430h700c10 0 18 8 18 18v12H32v-12c0-10 8-18 18-18z" fill="url(#baseGradient)" />
                     {/* Front Edge of Base */}
                     <path d="M32 460h736v6c0 8-7 14-15 14H47c-8 0-15-6-15-14v-6z" fill="#6b7280" />
                     {/* Hinge Indentation */}
                     <path d="M300 430 h200 v8 c0 5 -4 9 -9 9 h-182 c-5 0 -9 -4 -9 -9 v-8 z" fill="#1f2937" opacity="0.3" />

                     {/* Trackpad */}
                     <rect x="320" y="438" width="160" height="16" rx="2" fill="#e5e7eb" opacity="0.5" />
                  </svg>
              </div>
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
