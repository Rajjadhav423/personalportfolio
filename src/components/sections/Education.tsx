"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconSchool, IconBook, IconCertificate } from "@tabler/icons-react";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background - Matching Hero color scheme */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic foundation and professional credentials that back my expertise"
        />

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <CardSpotlight className="p-6 sm:p-8 md:p-10 max-w-4xl mx-auto border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start relative z-20">
              <motion.div 
                className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 shrink-0"
                whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.3 }}
              >
                <IconSchool size={36} className="text-neutral-700 dark:text-neutral-300" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {portfolioData.education.degree}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg mb-3">
                  {portfolioData.education.university}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm mb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400">
                    {portfolioData.education.year}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-900 dark:text-white font-semibold">
                    {portfolioData.education.cgpa}
                  </span>
                </div>
                
                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.education.coursework.map((course, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-neutral-50 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all cursor-default"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Certifications Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Professional Certifications
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Industry-recognized credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {portfolioData.education.certifications.map((cert, idx) => {
            const Icon = cert.title.includes("Salesforce") ? IconCertificate : IconBook;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <CardSpotlight className="p-5 sm:p-6 h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                  <div className="flex items-start gap-4 relative z-20">
                    <motion.div 
                      className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 shrink-0 group-hover:scale-105 transition-transform duration-300"
                    >
                      <Icon size={20} className="text-neutral-700 dark:text-neutral-300" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base mb-1.5 line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "B.Tech", label: "IT Degree" },
            { value: "3", label: "Salesforce Certs" },
            { value: "6", label: "Total Certifications" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
