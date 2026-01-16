"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 section-gradient relative overflow-hidden">
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
          <div className="grid grid-cols-2 gap-3 sm:gap-6 order-2 md:order-1">
            {[
              { value: "4+", label: "Projects Built" },
              { value: "1+", label: "Year Experience" },
              { value: "3", label: "Salesforce Certs" },
              { value: "3x", label: "Certified Dev" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-4 sm:p-6 text-center h-full flex flex-col justify-center items-center border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 mb-1 sm:mb-2 relative z-20">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-medium relative z-20">{stat.label}</div>
                  
                  {/* Decorative faint glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <CardSpotlight className="p-6 rounded-2xl border-neutral-200 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-sm shadow-xl dark:shadow-2xl">
              <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed mb-4 relative z-20">
                Hi! I'm <span className="text-cyan-600 dark:text-cyan-400 font-bold">Rajesh Jadhav</span>, an aspiring <span className="font-semibold text-neutral-900 dark:text-white">Full Stack Developer</span> and Machine Learning enthusiast with a passion for creating cutting-edge software solutions.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 relative z-20">
                 Currently a <span className="font-semibold text-neutral-900 dark:text-white">Software Engineer at Koshine Tech Labs</span>, I specialize in <span className="font-semibold text-neutral-900 dark:text-white">Java</span>, <span className="font-semibold text-neutral-900 dark:text-white">Python</span>, and MERN stack development. 
                 I am a <span className="font-semibold text-purple-600 dark:text-purple-400">3x Certified Salesforce Developer</span> committed to building scalable, efficient, and innovative web applications.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed relative z-20">
                My mission is to push the boundaries of technology—merging conversational AI with seamless user experiences and streamlining complex workflows through code. I am a fast learner, problem-solver, and ready to make an impact.
              </p>
            </CardSpotlight>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {["Full Stack", "Salesforce", "Machine Learning", "Cloud", "APIs"].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-medium shadow-sm hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default"
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
