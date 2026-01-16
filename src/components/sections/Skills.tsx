"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "HTML5", "CSS3"],
    color: "cyan",
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "LWC", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    color: "purple",
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "Apache Kafka", "RESTful APIs", "Microservices"],
    color: "pink",
  },
  {
    title: "Salesforce Technologies",
    skills: ["Apex", "Salesforce Admin", "jsforce", "SOQL/SOSL", "Lightning Platform"],
    color: "blue",
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma ORM"],
    color: "green",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Git", "GitHub", "Slack Integration", "Docker", "CI/CD", "OAuth", "JWT"],
    color: "orange",
  },
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "TensorFlow", "scikit-learn"],
    color: "red",
  },
];



export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 section-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full p-6 rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/50">
                <div className="relative z-20">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-cyan-500/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
