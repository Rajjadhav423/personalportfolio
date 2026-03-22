"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-[#d4a35f]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Organized as capability lanes instead of repeated cards."
        />

        <div className="space-y-5">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="grid gap-5 border-t border-[#3b2f23] py-5 md:grid-cols-[16rem_1fr]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8f806c]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[#f5efe3]">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-1 h-px w-10 bg-[#d4a35f] md:hidden" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 + skillIdx * 0.025 }}
                    viewport={{ once: true }}
                    className="border border-[#3b2f23] bg-[#15110d]/80 px-4 py-2 text-sm text-[#d7ccbc]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
