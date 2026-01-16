"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconMapPin, IconCalendar, IconChevronDown } from "@tabler/icons-react";

const experiences = [
  {
    company: "Koshine Tech Labs",
    role: "Software Engineer",
    duration: "Nov 2025 – Present",
    location: "Pune, India",
    description: "Spearheading software and Salesforce development, designing scalable solutions and enterprise-grade applications.",
    highlights: [
      "Designing and optimizing scalable applications using MERN stack and Salesforce cloud-based technologies.",
      "Contributing to 'Replydock', a multi-tenant platform integrating Slack and WhatsApp for seamless customer communication.",
      "Implementing complex Salesforce automation workflows and custom LWC components for enterprise clients.",
    ],
    color: "cyan",
  },
  {
    company: "Koshine Tech Labs",
    role: "Software Developer Intern",
    duration: "Feb 2025 – Oct 2025",
    location: "Pune, India",
    description: "Gained hands-on experience in cloud solutions, focusing on backend architecture and CRM capability enhancement.",
    highlights: [
      "Assisted in building 'CRUDSpace', a multi-org management tool with custom metadata editors.",
      "Enhanced platform capabilities by integrating secure REST APIs and optimizing database queries.",
      "Collaborated with senior developers to implement industry best practices in code quality and deployment pipelines.",
    ],
    color: "blue",
  },
  {
    company: "BITS Pilani Goa Campus",
    role: "Research Intern",
    duration: "Jan 2025 – May 2025",
    location: "Goa, India",
    description: "Worked on predictive modeling and AI-driven capability research for sustainable chemistry applications.",
    highlights: [
      "Developed a 'Predictive Lignin Dissolution Model' using Large Language Models (LLMs) to advance sustainable chemistry research.",
      "Designed a 'Thermodynamic Property Prediction Chatbot' leveraging conversational AI for real-time scientific data analysis.",
      "Utilized Python, TensorFlow, and Scikit-learn to process experimental data and solve complex interdisciplinary problems.",
    ],
    color: "purple",
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
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
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
                whileHover={{ x: 5 }}
              >
                <span className={`block font-medium ${activeTab === idx ? "text-cyan-600 dark:text-cyan-400" : "text-neutral-600 dark:text-neutral-400"}`}>
                  {exp.company}
                </span>
                <span className="text-sm text-neutral-500">{exp.role}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <CardSpotlight key={activeTab} className="p-8">
              <div className="mb-6 relative z-20">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {experiences[activeTab].role}
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-lg mb-4">
                  @ {experiences[activeTab].company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
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

              <p className="text-neutral-600 dark:text-neutral-400 mb-6 relative z-20">
                {experiences[activeTab].description}
              </p>

              <ul className="space-y-3 relative z-20">
                {experiences[activeTab].highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </CardSpotlight>
          </AnimatePresence>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="lg:hidden space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="p-0 overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between relative z-20"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm sm:text-base">
                      @ {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
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
                    <IconChevronDown size={24} className="text-neutral-400" />
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
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-neutral-800 pt-4 relative z-20">
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-4">
                          {exp.description}
                        </p>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
