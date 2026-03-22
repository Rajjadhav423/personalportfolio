"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconCalendar, IconExternalLink } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

export function Projects() {
  return (
    <section id="projects" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7b5532]/14 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Presented as feature rows to avoid another grid of identical tiles."
        />

        <div className="space-y-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="grid gap-6 border-t border-[#3b2f23] py-8 lg:grid-cols-[0.34fr_0.66fr]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#8f806c]">
                  <IconCalendar size={12} />
                  {project.date}
                </div>
                <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#f5efe3]">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#d4a35f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4a35f]" />
                  Complete
                </div>
              </div>

              <div className="space-y-5">
                <p className="max-w-3xl text-base leading-8 text-[#b9ad9b]">
                  {project.description}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-[#3b2f23] bg-[#15110d]/80 px-3 py-1.5 text-xs text-[#d7ccbc]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border-l border-[#d4a35f] bg-[#15110d]/80 px-3 py-1.5 text-xs text-[#d7ccbc]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <GlowButton variant="ghost" size="sm" href="https://github.com/Rajjadhav423">
                    <IconBrandGithub size={16} />
                    Code
                  </GlowButton>
                  <GlowButton variant="secondary" size="sm" href="#">
                    <IconExternalLink size={16} />
                    Demo
                  </GlowButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <GlowButton variant="secondary" size="lg" href="https://github.com/Rajjadhav423">
            <IconBrandGithub size={20} />
            View All Projects on GitHub
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
