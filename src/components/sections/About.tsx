"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconMapPin, IconBriefcase, IconAward } from "@tabler/icons-react";

import { portfolioData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 section-gradient relative overflow-hidden">
      {/* Background - Matching Hero color scheme */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building technology that makes a real impact"
        />

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left - Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 order-2 lg:order-1">
            {portfolioData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-5 sm:p-6 text-center h-full flex flex-col justify-center items-center border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 relative z-20">
                    {stat.value}
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm font-medium relative z-20">
                    {stat.label}
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 order-1 lg:order-2"
          >
            <CardSpotlight className="p-6 md:p-8 rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
              <div className="relative z-20 space-y-5">
                <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
                  Hi! I&apos;m <span className="text-neutral-900 dark:text-white font-bold">{portfolioData.personal.name}</span>, 
                  an aspiring <span className="font-semibold text-neutral-900 dark:text-white">Full Stack Developer</span> and 
                  Machine Learning enthusiast with a passion for creating cutting-edge software solutions.
                </p>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Currently a <span className="font-semibold text-neutral-900 dark:text-white">Software Engineer at Koshine Tech Labs</span>, 
                  I specialize in <span className="font-medium">Java</span>, <span className="font-medium">Python</span>, and MERN stack development. 
                  I am a <span className="font-semibold text-neutral-900 dark:text-white">3x Certified Salesforce Developer</span> committed 
                  to building scalable, efficient, and innovative web applications.
                </p>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                  My mission is to push the boundaries of technology—merging conversational AI with seamless 
                  user experiences and streamlining complex workflows through code. I am a fast learner, 
                  problem-solver, and ready to make an impact.
                </p>

                {/* Quick Info Pills */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-sm">
                    <IconMapPin size={14} />
                    {portfolioData.personal.location}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-sm">
                    <IconBriefcase size={14} />
                    Software Engineer
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-sm">
                    <IconAward size={14} />
                    3x Salesforce Certified
                  </div>
                </div>
              </div>
            </CardSpotlight>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Full Stack Development", "Salesforce", "Machine Learning", "Cloud Architecture", "API Design"].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-default"
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
