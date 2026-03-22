"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandMedium,
  IconCheck,
  IconLoader2,
  IconMail,
  IconPhone,
  IconSend,
  IconX,
} from "@tabler/icons-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactInfo = [
  { icon: IconMail, label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
  { icon: IconPhone, label: "Phone", value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
  { icon: IconBrandLinkedin, label: "LinkedIn", value: portfolioData.personal.name, href: portfolioData.personal.linkedin },
  { icon: IconBrandGithub, label: "GitHub", value: "GitHub Profile", href: portfolioData.personal.github },
  { icon: IconBrandLeetcode, label: "LeetCode", value: "LeetCode Profile", href: "https://leetcode.com/u/jadhavraj423/" },
  { icon: IconBrandMedium, label: "Medium", value: "Medium Profile", href: portfolioData.personal.medium },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-panel relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#d4a35f]/8 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Handled as an operations layout, not another boxed content block."
        />

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="border-t border-[#3b2f23] pt-8"
          >
            <h3 className="text-4xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 max-w-md text-base leading-8 text-[#b9ad9b]">
              I&apos;m always open to discussing new projects, creative ideas, and product opportunities where engineering can create leverage.
            </p>

            <div className="mt-8 space-y-3">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group grid grid-cols-[3.25rem_1fr] items-center border border-[#3b2f23] bg-[#15110d]/80 transition-colors hover:border-[#5d4a34]"
                >
                  <div className="flex h-full items-center justify-center border-r border-[#3b2f23] text-[#d4a35f]">
                    <info.icon size={20} />
                  </div>
                  <div className="px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-[#8f806c]">
                      {info.label}
                    </div>
                    <div className="mt-1 text-sm text-[#f5efe3] group-hover:text-[#f5dfb8]">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            className="lg:pl-6"
          >
            <div className="border-l border-[#d4a35f] bg-[#12100d]/90 p-6 md:p-8">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-[#d4a35f]">
                Direct Message Channel
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#d7ccbc]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field w-full rounded-none px-4 py-3 text-base"
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d7ccbc]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field w-full rounded-none px-4 py-3 text-base"
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#d7ccbc]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="input-field w-full resize-none rounded-none px-4 py-3 text-base"
                    placeholder="Tell me what you're building..."
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 border border-green-500/20 bg-green-500/10 p-3 text-green-400"
                    >
                      <IconCheck size={18} />
                      <span className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 border border-red-500/20 bg-red-500/10 p-3 text-red-400"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
