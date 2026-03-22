"use client";

import { motion } from "framer-motion";
import { IconAward, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

const expertiseTags = [
  "Full Stack Development",
  "Salesforce Systems",
  "Machine Learning",
  "Cloud Architecture",
  "API Design",
];

export function About() {
  return (
    <section id="about" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-[#d4a35f]/10 blur-[100px] md:h-96 md:w-96 md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="A clearer view of how I work, what I build, and where I create impact."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-[#4a3928] pt-8"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#d4a35f]">
                Operator Profile
              </span>
              <span className="h-px flex-1 bg-[#3b2f23]" />
            </div>

            <div className="grid gap-8 md:grid-cols-[0.65fr_1fr]">
              <div className="space-y-4">
                <div className="border border-[#3b2f23] bg-[#15110d] p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                    Base
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#f5efe3]">
                    <IconMapPin size={16} className="text-[#d4a35f]" />
                    {portfolioData.personal.location}
                  </div>
                </div>
                <div className="border border-[#3b2f23] bg-[#15110d] p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                    Role
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#f5efe3]">
                    <IconBriefcase size={16} className="text-[#d4a35f]" />
                    Software Engineer
                  </div>
                </div>
                <div className="border border-[#3b2f23] bg-[#15110d] p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                    Credentials
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#f5efe3]">
                    <IconAward size={16} className="text-[#d4a35f]" />
                    3x Salesforce Certified
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#f5efe3] md:text-4xl">
                  Building product systems that balance interface quality, backend stability, and business automation.
                </h3>

                <div className="space-y-5 text-base leading-8 text-[#c6baaa]">
                  <p>
                    Hi! I&apos;m <span className="font-semibold text-[#f5efe3]">{portfolioData.personal.name}</span>,
                    an aspiring full stack developer and machine learning enthusiast with a strong bias toward shipping useful systems.
                  </p>
                  <p>
                    Currently a <span className="font-semibold text-[#f5efe3]">Software Engineer at Koshine Tech Labs</span>,
                    I work across <span className="text-[#f5efe3]">Java</span>, <span className="text-[#f5efe3]">Python</span>, MERN stack development,
                    and Salesforce-focused product workflows.
                  </p>
                  <p>
                    My focus is on turning complicated requirements into clean product experiences,
                    scalable services, and workflow automation that teams can actually rely on.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {expertiseTags.map((tag, idx) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      viewport={{ once: true }}
                      className="border-l border-[#d4a35f] bg-[#15110d]/80 px-4 py-3 text-sm text-[#d7ccbc]"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`border border-[#3b2f23] p-6 ${idx % 2 === 0 ? "bg-[#19130f]" : "bg-[#14100d] md:ml-10"}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8f806c]">
                  {String(idx + 1).padStart(2, "0")} / Metric
                </div>
                <div className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#f5efe3]">
                  {stat.value}
                </div>
                <div className="mt-3 max-w-[14rem] text-sm uppercase tracking-[0.18em] text-[#b9ad9b]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
