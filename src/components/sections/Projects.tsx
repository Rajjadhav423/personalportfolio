"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GlowButton } from "@/components/ui/GlowButton";
import { IconBrandGithub, IconExternalLink, IconCalendar } from "@tabler/icons-react";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 section-gradient relative overflow-hidden">
      {/* Background - Matching Hero color scheme */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of projects demonstrating full-stack development and system design"
        />

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <CardSpotlight className="h-full flex flex-col p-0 rounded-2xl overflow-hidden border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                <div className="flex flex-col flex-grow relative z-20 p-6">
                  {/* Header: Date & Status */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      <IconCalendar size={12} />
                      {project.date}
                    </span>
                    <div className="h-px flex-grow mx-4 bg-neutral-200 dark:bg-neutral-800" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Complete</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    {project.tech.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <GlowButton
                      variant="ghost"
                      size="sm"
                      href="https://github.com/Rajjadhav423"
                      fullWidth
                    >
                      <IconBrandGithub size={16} />
                      Code
                    </GlowButton>
                    <GlowButton
                      variant="secondary"
                      size="sm"
                      href="#"
                      fullWidth
                    >
                      <IconExternalLink size={16} />
                      Demo
                    </GlowButton>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <GlowButton
            variant="secondary"
            size="lg"
            href="https://github.com/Rajjadhav423"
          >
            <IconBrandGithub size={20} />
            View All Projects on GitHub
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
