"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "2021bit057@sggs.ac.in",
    href: "mailto:2021bit057@sggs.ac.in",
    color: "cyan",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+91-9322850587",
    href: "tel:+919322850587",
    color: "purple",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "rajeshjadhav057",
    href: "https://linkedin.com/in/rajeshjadhav057",
    color: "blue",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "Rajjadhav423",
    href: "https://github.com/Rajjadhav423",
    color: "gray",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:2021bit057@sggs.ac.in?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-24 section-gradient relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-gradient-to-t from-cyan-500/10 dark:from-cyan-500/20 to-transparent rounded-full blur-[80px] md:blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-white mb-3 sm:mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/50 transition-all group shadow-sm dark:shadow-none"
                >
                  <div className={`p-2 sm:p-3 rounded-lg ${
                    info.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20' :
                    info.color === 'purple' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/20' :
                    info.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20' :
                    'bg-zinc-500/10 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-500/20'
                  } transition-colors`}>
                    <info.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-zinc-400 dark:text-zinc-500 text-xs sm:text-sm">{info.label}</p>
                    <p className="text-zinc-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-sm sm:text-base truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <SpotlightCard className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-all outline-none text-sm sm:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-all outline-none text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <GlowButton className="w-full">
                  <IconSend size={18} className="mr-2" />
                  Send Message
                </GlowButton>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
