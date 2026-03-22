"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconBook,
  IconBolt,
  IconBriefcase,
  IconCalendar,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconDatabase,
  IconExternalLink,
  IconLayoutGrid,
  IconMapPin,
  IconMessageCircle,
  IconRocket,
  IconServer,
  IconShield,
} from "@tabler/icons-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  rocket: IconRocket,
  server: IconServer,
  lightning: IconBolt,
  shield: IconShield,
  grid: IconLayoutGrid,
  database: IconDatabase,
  code: IconCode,
  check: IconCheck,
  brain: IconChartBar,
  message: IconMessageCircle,
  book: IconBook,
  chart: IconChartBar,
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
}

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);
  const experiences = portfolioData.experiences as unknown as ExperienceData[];

  return (
    <section id="experience" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d4a35f]/10 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Work Experience"
          subtitle="Structured as an active mission timeline instead of another centered card block."
        />

        <div className="hidden gap-10 lg:grid lg:grid-cols-[18rem_1fr]">
          <div className="border-t border-[#3b2f23] pt-6">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
              Timeline
            </div>

            <div className="space-y-3">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.role}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full border-l px-4 py-4 text-left transition-all ${
                    activeTab === idx
                      ? "border-[#d4a35f] bg-[#15110d] text-[#f5efe3]"
                      : "border-[#3b2f23] text-[#b9ad9b] hover:border-[#5d4a34] hover:bg-[#14100d]/70"
                  }`}
                >
                  <div className="font-semibold">{exp.company}</div>
                  <div className="mt-1 text-sm">{exp.role}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8f806c]">
                    {exp.type ?? "Role"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="border-t border-[#3b2f23] pt-6"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 border border-[#3b2f23] bg-[#15110d] p-3 text-[#d4a35f]">
                      <IconBriefcase size={20} />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                        Active Assignment
                      </div>
                      <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#f5efe3]">
                        {experiences[activeTab].role}
                      </h3>
                      <div className="mt-2 text-xl text-[#d7ccbc]">
                        {experiences[activeTab].company}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-2 border border-[#3b2f23] bg-[#15110d] px-3 py-1.5 text-[#d7ccbc]">
                      <IconCalendar size={14} className="text-[#d4a35f]" />
                      {experiences[activeTab].duration}
                    </span>
                    <span className="flex items-center gap-2 border border-[#3b2f23] bg-[#15110d] px-3 py-1.5 text-[#d7ccbc]">
                      <IconMapPin size={14} className="text-[#d4a35f]" />
                      {experiences[activeTab].location}
                    </span>
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-8 text-[#b9ad9b]">
                    {experiences[activeTab].description}
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {experiences[activeTab].highlights.map((highlight, idx) => {
                      const IconComponent = iconMap[highlight.icon] || IconCheck;
                      return (
                        <div key={idx} className="border border-[#3b2f23] bg-[#14110d]/80 p-5">
                          <div className="flex items-start gap-4">
                            <div className="border border-[#3b2f23] bg-[#15110d] p-2.5 text-[#d4a35f]">
                              <IconComponent size={16} />
                            </div>
                            <div>
                              <p className="text-sm leading-7 text-[#d7ccbc]">{highlight.text}</p>
                              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[#8f806c]">
                                {highlight.metric}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                    Stack Footprint
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeTab].technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="border-l border-[#d4a35f] bg-[#15110d]/80 px-3 py-2 text-xs text-[#d7ccbc]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-4 lg:hidden">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedMobile === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="border border-[#3b2f23] bg-[#14110d]/80"
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : idx)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <div className="text-lg font-semibold text-[#f5efe3]">{exp.role}</div>
                    <div className="mt-1 text-sm text-[#d7ccbc]">{exp.company}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8f806c]">
                      {exp.duration}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="border border-[#3b2f23] bg-[#15110d] p-2 text-[#d4a35f]"
                  >
                    <IconChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#3b2f23] px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-[#b9ad9b]">{exp.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="mb-4 text-sm text-[#8f806c]">Want to know more about my work?</p>
          <GlowButton variant="secondary" size="lg" href="#contact">
            Let&apos;s Connect
            <IconExternalLink size={18} />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
