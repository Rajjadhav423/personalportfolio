"use client";

import { motion } from "framer-motion";
import { IconBook, IconCertificate, IconSchool } from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-[#d4a35f]/10 blur-[100px] md:h-96 md:w-96 md:blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-[#7b5532]/14 blur-[100px] md:h-96 md:w-96 md:blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Structured as background, credentials, and signal rather than another repeated content card."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-[#4a3928] pt-8"
          >
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.34em] text-[#d4a35f]">
              Academic Track
            </div>

            <div className="relative pl-8">
              <div className="absolute bottom-0 left-3 top-0 w-px bg-[#3b2f23]" />
              <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center border border-[#3b2f23] bg-[#15110d]">
                <IconSchool size={14} className="text-[#d4a35f]" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                    Degree
                  </div>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#f5efe3]">
                    {portfolioData.education.degree}
                  </h3>
                </div>

                <div className="border border-[#3b2f23] bg-[#15110d] p-5">
                  <div className="text-lg text-[#d7ccbc]">{portfolioData.education.university}</div>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <span className="border border-[#3b2f23] px-3 py-1.5 text-[#d7ccbc]">
                      {portfolioData.education.year}
                    </span>
                    <span className="border border-[#3b2f23] px-3 py-1.5 font-semibold text-[#f5efe3]">
                      {portfolioData.education.cgpa}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f806c]">
                    Relevant Coursework
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {portfolioData.education.coursework.map((course) => (
                      <div
                        key={course}
                        className="border-l border-[#d4a35f] bg-[#15110d]/80 px-4 py-3 text-sm text-[#d7ccbc]"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-[#3b2f23] pb-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                  Certification Board
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
                  Verified Credentials
                </h3>
              </div>
              <div className="text-sm uppercase tracking-[0.18em] text-[#8f806c]">
                06 Total
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.education.certifications.map((cert, idx) => {
                const Icon = cert.title.includes("Salesforce") ? IconCertificate : IconBook;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    className="border border-[#3b2f23] bg-[#17120f] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="border border-[#3b2f23] bg-[#15110d] p-2.5">
                        <Icon size={18} className="text-[#d4a35f]" />
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8f806c]">
                        {cert.year}
                      </div>
                    </div>

                    <h4 className="mt-5 text-lg font-semibold leading-snug text-[#f5efe3]">
                      {cert.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#b9ad9b]">{cert.issuer}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid gap-4 border-t border-[#3b2f23] pt-6 sm:grid-cols-3">
              {[
                { value: "B.Tech", label: "IT Degree" },
                { value: "3", label: "Salesforce Certs" },
                { value: "6", label: "Total Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="border border-[#3b2f23] bg-[#15110d] p-5">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-[#f5efe3]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8f806c]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
