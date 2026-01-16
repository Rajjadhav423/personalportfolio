"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { IconSchool, IconBook, IconCertificate } from "@tabler/icons-react";

const certifications = [
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    year: "2025",
    icon: IconCertificate,
    color: "cyan",
  },
  {
    title: "Salesforce AI Associate Certification",
    issuer: "Salesforce",
    year: "2025",
    icon: IconCertificate,
    color: "purple",
  },
  {
    title: "Salesforce Agentforce Certification",
    issuer: "Salesforce",
    year: "2025",
    icon: IconCertificate,
    color: "pink",
  },
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "3 Month Certification",
    year: "Aug – Oct 2024",
    icon: IconBook,
    color: "blue",
  },
  {
    title: "Java Development Workshop",
    issuer: "Faculty Training Program",
    year: "Jun – Jul 2023",
    icon: IconBook,
    color: "orange",
  },
  {
    title: "Basic German Language Course",
    issuer: "Language Certification",
    year: "Completed",
    icon: IconBook,
    color: "green",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Database Management",
  "Software Engineering",
  "Computer Networks",
  "Machine Learning",
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic journey and professional credentials"
        />

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <SpotlightCard className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shrink-0">
                <IconSchool size={32} className="text-cyan-600 dark:text-cyan-400 sm:w-10 sm:h-10" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                  Bachelor of Technology in Information Technology
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm sm:text-base md:text-lg mb-2">
                  SGGS Institute of Engineering and Technology, Nanded
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  <span>2021 – 2025</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">CGPA: 7.94/10</span>
                </div>
                
                {/* Relevant Coursework */}
                <div className="mt-4">
                  <h4 className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mb-2 sm:mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {coursework.map((course, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm border border-zinc-300 dark:border-white/10"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-4 sm:p-6 h-full card-hover">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-lg shrink-0 ${
                    cert.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' :
                    cert.color === 'purple' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' :
                    cert.color === 'pink' ? 'bg-pink-500/10 text-pink-600 dark:text-pink-400' :
                    cert.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                    cert.color === 'orange' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                    'bg-green-500/10 text-green-600 dark:text-green-400'
                  }`}>
                    <cert.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-zinc-800 dark:text-white text-sm sm:text-base mb-1 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-1 sm:mb-2">{cert.issuer}</p>
                    <span className={`text-xs font-medium ${
                      cert.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                      cert.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      cert.color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                      cert.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      cert.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {cert.year}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
