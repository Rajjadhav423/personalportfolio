"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  IconMapPin,
  IconCalendar,
  IconChevronDown,
  IconRocket,
  IconServer,
  IconBolt,
  IconShield,
  IconLayoutGrid,
  IconDatabase,
  IconCode,
  IconCheck,
  IconBrain,
  IconMessageCircle,
  IconBook,
  IconChartBar,
  IconBriefcase,
  IconExternalLink,
} from "@tabler/icons-react";

import { portfolioData } from "@/data/portfolio";

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  rocket: IconRocket,
  server: IconServer,
  lightning: IconBolt,
  shield: IconShield,
  grid: IconLayoutGrid,
  database: IconDatabase,
  code: IconCode,
  check: IconCheck,
  brain: IconBrain,
  message: IconMessageCircle,
  book: IconBook,
  chart: IconChartBar,
};

// Single unified professional color scheme
const colorScheme = {
  primary: "from-neutral-700 to-neutral-600",
  bg: "bg-neutral-100 dark:bg-neutral-800/50",
  border: "border-neutral-200 dark:border-neutral-700",
  glow: "rgba(64, 64, 64, 0.15)",
  text: "text-neutral-700 dark:text-neutral-300",
  accent: "text-neutral-900 dark:text-white",
};

interface ExperienceHighlight {
  text: string;
  metric: string;
  icon: string;
}

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  location: string;
  type?: string;
  description: string;
  highlights: ExperienceHighlight[];
  technologies?: string[];
  color: string;
}

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const experiences = portfolioData.experiences as unknown as ExperienceData[];

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background - Matching Hero color scheme */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-slate-400/20 dark:bg-slate-500/20"
            style={{
              left: `${25 + i * 25}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="Building impactful products and driving engineering excellence"
        />

        {/* Desktop Layout - Modern Timeline */}
        <div className="hidden lg:block">
          {/* Company Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {experiences.map((exp, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === idx
                    ? `${colorScheme.bg} ${colorScheme.border} border shadow-lg`
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Indicator Glow */}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl opacity-50"
                    style={{
                      boxShadow: `0 8px 32px ${colorScheme.glow}`,
                    }}
                  />
                )}
                
                <div className="relative z-10">
                  <span className={`block font-semibold text-lg ${
                    activeTab === idx 
                      ? colorScheme.accent
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}>
                    {exp.company}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {exp.role}
                  </span>
                  {exp.type && (
                    <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                      activeTab === idx 
                        ? `${colorScheme.bg} ${colorScheme.text}`
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                    }`}>
                      {exp.type}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Content Card */}
          <AnimatePresence mode="wait">
            {activeTab >= 0 && experiences[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CardSpotlight className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 relative z-20">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
                          {experiences[activeTab].role}
                        </h3>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className={`p-2 rounded-xl ${colorScheme.bg}`}
                        >
                          <IconBriefcase size={24} className={colorScheme.text} />
                        </motion.div>
                      </div>
                      <p className={`text-xl font-medium ${colorScheme.text} mb-2`}>
                        @ {experiences[activeTab].company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50">
                          <IconCalendar size={16} className="text-neutral-500" />
                          {experiences[activeTab].duration}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50">
                          <IconMapPin size={16} className="text-neutral-500" />
                          {experiences[activeTab].location}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tech Stack Pills */}
                    {experiences[activeTab].technologies && (
                      <div className="flex flex-wrap gap-2 lg:max-w-xs">
                        {experiences[activeTab].technologies?.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-800/50 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 relative z-20 leading-relaxed">
                    {experiences[activeTab].description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid md:grid-cols-2 gap-4 relative z-20">
                    {experiences[activeTab].highlights.map((highlight, idx) => {
                      const IconComponent = iconMap[highlight.icon] || IconCheck;
                      
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                          className="group relative"
                        >
                          <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800/50 dark:to-neutral-900/50 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg">
                            {/* Icon */}
                            <div className={`shrink-0 p-2.5 rounded-xl ${colorScheme.bg} transition-all duration-300 group-hover:scale-110`}>
                              <IconComponent size={20} className={colorScheme.text} />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-2">
                                {highlight.text}
                              </p>
                              {/* Metric Badge */}
                              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${colorScheme.bg} ${colorScheme.text}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                {highlight.metric}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardSpotlight>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Layout - Enhanced Accordion */}
        <div className="lg:hidden space-y-4">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedMobile === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isExpanded 
                    ? `${colorScheme.border} bg-white dark:bg-neutral-900 shadow-xl`
                    : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50"
                }`}
                style={{
                  boxShadow: isExpanded ? `0 8px 32px ${colorScheme.glow}` : undefined,
                }}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => setExpandedMobile(isExpanded ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.type && (
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colorScheme.bg} ${colorScheme.text}`}>
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className={`${colorScheme.text} font-medium text-sm sm:text-base mb-2`}>
                        @ {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="flex items-center gap-1">
                          <IconCalendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <IconMapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 p-2 rounded-xl ${isExpanded ? colorScheme.bg : "bg-neutral-100 dark:bg-neutral-800"}`}
                    >
                      <IconChevronDown size={20} className={isExpanded ? colorScheme.text : "text-neutral-400"} />
                    </motion.div>
                  </button>
                  
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 border-t border-neutral-200 dark:border-neutral-800 pt-5">
                          {/* Description */}
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Tech Stack */}
                          {exp.technologies && (
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-[10px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Highlights */}
                          <div className="space-y-3">
                            {exp.highlights.map((highlight, hIdx) => {
                              const IconComponent = iconMap[highlight.icon] || IconCheck;
                              
                              return (
                                <motion.div
                                  key={hIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: hIdx * 0.1 }}
                                  className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50"
                                >
                                  <div className={`shrink-0 p-1.5 rounded-lg ${colorScheme.bg}`}>
                                    <IconComponent size={14} className={colorScheme.text} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-neutral-700 dark:text-neutral-300 text-xs leading-relaxed mb-1.5">
                                      {highlight.text}
                                    </p>
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold ${colorScheme.text}`}>
                                      <span className="w-1 h-1 rounded-full bg-current" />
                                      {highlight.metric}
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
            Want to know more about my work?
          </p>
          <GlowButton
            variant="secondary"
            size="lg"
            href="#contact"
          >
            Let&apos;s Connect
            <IconExternalLink size={18} />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
