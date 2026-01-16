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
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices"],
    color: "pink",
  },
  {
    title: "Salesforce Technologies",
    skills: ["Apex", "Salesforce Admin", "jsforce", "SOQL/SOSL", "Lightning Platform"],
    color: "blue",
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Prisma ORM"],
    color: "green",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Git", "GitHub", "Docker", "CI/CD", "OAuth", "JWT", "JIRA", "Postman"],
    color: "orange",
  },
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "TensorFlow", "scikit-learn"],
    color: "red",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/40", text: "text-cyan-700 dark:text-cyan-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/40", text: "text-purple-700 dark:text-purple-400" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/40", text: "text-pink-700 dark:text-pink-400" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/40", text: "text-blue-700 dark:text-blue-400" },
  green: { bg: "bg-green-500/10", border: "border-green-500/40", text: "text-green-700 dark:text-green-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/40", text: "text-orange-700 dark:text-orange-400" },
  red: { bg: "bg-red-500/10", border: "border-red-500/40", text: "text-red-700 dark:text-red-400" },
};

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="p-4 sm:p-6 h-full">
                <div className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full ${colorMap[category.color].bg} ${colorMap[category.color].border} border mb-3 md:mb-4 relative z-20`}>
                  <span className={`text-xs sm:text-sm font-medium ${colorMap[category.color].text}`}>
                    {category.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-20">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="skill-badge px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
