"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { IconMapPin, IconCalendar, IconChevronDown } from "@tabler/icons-react";

const experiences = [
  {
    company: "Koshine Tech Labs",
    role: "Software Developer",
    duration: "Feb 2025 – Present",
    location: "Full-time",
    description: "Working as a full-time Software Developer on enterprise-grade SaaS products and Salesforce-integrated platforms.",
    highlights: [
      "Built CRUDSpace, a Salesforce platform with multi-org management and a custom metadata editor using LWC and Apex.",
      "Contributed to Replydock, a multi-tenant customer communication platform integrating Slack and WhatsApp (Meta Cloud API).",
      "Focused on scalable backend systems, multi-tenant architecture, and CRM integrations.",
    ],
    color: "cyan",
  },
  {
    company: "BITS Pilani Goa Campus",
    role: "Research Intern",
    duration: "Dec 2024 – May 2025",
    location: "Research",
    description: "Worked on machine learning research for chemical prediction systems.",
    highlights: [
      "Designed ML models for lignin prediction chatbot (Python, scikit-learn) with 85% accuracy.",
      "Applied feature engineering & hyperparameter tuning on chemical datasets for robust predictions.",
      "Built React.js chatbot with REST APIs for real-time ML predictions and data visualization.",
    ],
    color: "purple",
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in the tech industry"
        />

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tab Navigation */}
          <div className="flex lg:flex-col gap-2">
            {experiences.map((exp, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === idx
                    ? "tab-active"
                    : "border-l-2 border-transparent hover:bg-white/50 dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-zinc-600"
                }`}
                whileHover={{ x: 5 }}
              >
                <span className={`block font-medium ${activeTab === idx ? "text-cyan-600 dark:text-cyan-400" : "text-zinc-600 dark:text-zinc-400"}`}>
                  {exp.company}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">{exp.role}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <SpotlightCard
              key={activeTab}
              className="p-8"
              spotlightColor="rgba(6, 182, 212, 0.1)"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                  {experiences[activeTab].role}
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-lg mb-4">
                  @ {experiences[activeTab].company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-2">
                    <IconCalendar size={16} />
                    {experiences[activeTab].duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconMapPin size={16} />
                    {experiences[activeTab].location}
                  </span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {experiences[activeTab].description}
              </p>

              <ul className="space-y-3">
                {experiences[activeTab].highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </AnimatePresence>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="lg:hidden space-y-4">
          {experiences.map((exp, idx) => (
            <SpotlightCard
              key={idx}
              className="overflow-hidden"
              spotlightColor={exp.color === 'cyan' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(139, 92, 246, 0.1)'}
            >
              <button
                onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm sm:text-base">
                    @ {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <IconCalendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconMapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeTab === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown size={24} className="text-zinc-500 dark:text-zinc-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeTab === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-zinc-200 dark:border-white/10 pt-4">
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
