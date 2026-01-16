"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 section-gradient relative overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-6 order-2 md:order-1"
          >
            {[
              { value: "4+", label: "Projects Completed" },
              { value: "2+", label: "Years Experience" },
              { value: "3", label: "Salesforce Certs" },
              { value: "7.94", label: "CGPA" },
            ].map((stat, idx) => (
              <SpotlightCard
                key={idx}
                className="p-4 sm:p-6 text-center group hover:border-cyan-500/50"
                spotlightColor="rgba(6, 182, 212, 0.15)"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">{stat.label}</div>
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
              Aspiring <span className="text-cyan-600 dark:text-cyan-400 font-medium">Software Developer</span> with hands-on experience in full-stack web development, Salesforce CRM platform development, and machine learning research.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Proficient in <span className="text-purple-600 dark:text-purple-400">JavaScript/TypeScript</span>, <span className="text-purple-600 dark:text-purple-400">React.js</span>, <span className="text-purple-600 dark:text-purple-400">Next.js</span>, <span className="text-purple-600 dark:text-purple-400">Node.js</span>, <span className="text-purple-600 dark:text-purple-400">Salesforce Apex</span>, and <span className="text-purple-600 dark:text-purple-400">Python</span>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Demonstrated ability to deliver scalable solutions through internships and academic projects, with expertise in <span className="text-pink-600 dark:text-pink-400">AI integration</span>, <span className="text-pink-600 dark:text-pink-400">cloud technologies</span>, and <span className="text-pink-600 dark:text-pink-400">CRM automation workflows</span>.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {["Full Stack", "Salesforce", "Machine Learning", "Cloud", "APIs"].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-badge px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
