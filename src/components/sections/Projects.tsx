"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GlowButton } from "@/components/ui/GlowButton";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 section-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="I've been building a lot of things"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full flex flex-col p-6 rounded-2xl overflow-hidden border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/50">
                <div className="flex flex-col flex-grow relative z-20">
                  {/* Header: Date & Status */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {project.date}
                    </span>
                    <div className="h-px flex-grow mx-4 bg-neutral-200 dark:bg-neutral-800" />
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover/spotlight:text-cyan-600 dark:group-hover/spotlight:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {project.tech.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-sm"
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
                  <div className="flex gap-2 sm:gap-3 mt-auto">
                    <a
                      href="https://github.com/Rajjadhav423"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-500/50 text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all text-xs sm:text-sm"
                    >
                      <IconBrandGithub size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/40 text-cyan-400 transition-all text-xs sm:text-sm"
                    >
                      <IconExternalLink size={16} />
                      <span>Demo</span>
                    </a>
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
          className="flex justify-center mt-8 md:mt-12"
        >
          <GlowButton
            variant="secondary"
            href="https://github.com/Rajjadhav423"
            className="w-full sm:w-auto"
          >
            <IconBrandGithub size={18} className="mr-2" />
            View All Projects on GitHub
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
