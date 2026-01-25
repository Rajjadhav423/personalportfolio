"use client";

import { portfolioData } from "@/data/portfolio";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import emailjs from "@emailjs/browser";
import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconBrandLeetcode,
  IconBrandMedium,
  IconCheck,
  IconX,
  IconLoader2,
} from "@tabler/icons-react";

// EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    color: "cyan",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: portfolioData.personal.phone,
    href: `tel:${portfolioData.personal.phone}`,
    color: "purple",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: portfolioData.personal.name,
    href: portfolioData.personal.linkedin,
    color: "blue",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "GitHub Profile",
    href: portfolioData.personal.github,
    color: "gray",
  },
  {
    icon: IconBrandLeetcode,
    label: "LeetCode",
    value: "LeetCode Profile",
    href: "https://leetcode.com/u/jadhavraj423/",
    color: "orange",
  },
  {
    icon: IconBrandMedium,
    label: "Medium",
    value: "Medium Profile",
    href: portfolioData.personal.medium,
    color: "orange",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email me directly.");
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 section-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-gradient-to-t from-cyan-400/15 dark:from-cyan-500/20 to-transparent rounded-full blur-[80px] md:blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardSpotlight className="p-0">
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 group relative z-20"
                    >
                      <div className={`p-2 sm:p-3 rounded-lg ${
                        info.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' :
                        info.color === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20' :
                        info.color === 'blue' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' :
                        'bg-neutral-500/10 text-neutral-400 group-hover:bg-neutral-500/20'
                      } transition-colors`}>
                        <info.icon size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-neutral-500 text-xs sm:text-sm">{info.label}</p>
                        <p className="text-neutral-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-sm sm:text-base truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:mt-32"
          >
            <CardSpotlight className="p-4 sm:p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-20">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="input-field w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400"
                    >
                      <IconCheck size={18} />
                      <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                    >
                      <IconX size={18} />
                      <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <GlowButton className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <IconLoader2 size={18} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <IconCheck size={18} className="mr-2" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <IconSend size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </GlowButton>
              </form>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
