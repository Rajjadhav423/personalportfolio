"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  IconArrowRight,
  IconBrandGithub,
  IconFileText,
  IconMail,
  IconMapPin,
  IconSparkles,
} from "@tabler/icons-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { portfolioData } from "@/data/portfolio";

const capabilityRows = [
  "01. Platform Engineering",
  "02. CRM Automation",
  "03. AI Workflow Design",
  "04. Distributed Systems",
  "05. Product Delivery",
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const infoGridRef = useRef<HTMLDivElement>(null);
  const sidePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          introRef.current,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          ctaRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          infoGridRef.current?.children ?? [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          sidePanelRef.current,
          { x: 36, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-panel relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4a35f]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#7b5532]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl border border-[#3b2f23] bg-[#17120f]/85 p-6 backdrop-blur md:p-8 lg:p-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#34291f] pb-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#d4a35f]">
            Operational Portfolio / Rajesh Jadhav
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#8f806c]">
            <span className="h-2 w-2 rounded-full bg-[#d4a35f]" />
            Available for engineering roles
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div ref={introRef} className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#4a3928] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#c9b79f]">
                <IconSparkles size={14} />
                Building high-signal software systems
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#f5efe3] sm:text-6xl lg:text-8xl">
                Shipping reliable digital infrastructure for products, teams, and customer workflows.
              </h1>

              <div className="mt-6 h-8 text-base text-[#d4a35f] sm:h-10 sm:text-xl">
                <TypewriterEffect words={portfolioData.personal.roles} />
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#b9ad9b] sm:text-lg">
                {portfolioData.personal.description} I turn complex business requirements into
                clean interfaces, integrated backends, and automation that can hold up in
                production.
              </p>
            </div>

            <div ref={ctaRef} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <GlowButton href="#projects">
                Explore Projects
                <IconArrowRight size={16} />
              </GlowButton>
              <GlowButton variant="secondary" href="#contact">
                Start a Conversation
              </GlowButton>
              <GlowButton variant="ghost" href="/Resume/rajesh_Resume.pdf" target="_blank">
                <IconFileText size={16} />
                Resume
              </GlowButton>
            </div>

            <div ref={infoGridRef} className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="border border-[#34291f] bg-[#1d1712]/70 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8f806c]">
                  Location
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-[#f5efe3]">
                  <IconMapPin size={16} className="text-[#d4a35f]" />
                  {portfolioData.personal.location}
                </div>
              </div>
              <div className="border border-[#34291f] bg-[#1d1712]/70 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8f806c]">
                  Direct
                </div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="mt-3 block text-sm text-[#f5efe3]"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
              <div className="border border-[#34291f] bg-[#1d1712]/70 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8f806c]">
                  Source
                </div>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-[#f5efe3]"
                >
                  <IconBrandGithub size={16} className="text-[#d4a35f]" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <div ref={sidePanelRef} className="grid gap-4">
            <div className="border border-[#3b2f23] bg-[#130f0c] p-5">
              <div className="flex items-center justify-between border-b border-[#34291f] pb-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#d4a35f]">
                    System Status
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5efe3]">
                    Portfolio Intelligence
                  </div>
                </div>
                <div className="font-mono text-xs text-[#8f806c]">LIVE</div>
              </div>

              <div className="mt-5 space-y-3">
                {capabilityRows.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[#241c16] pb-3 text-sm"
                  >
                    <span className="text-[#d7ccbc]">{item}</span>
                    <span className="font-mono text-[#8f806c]">
                      {String(index + 1).padStart(2, "0")} / OK
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="border border-[#3b2f23] bg-[#1a1410] p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8f806c]">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#f5efe3]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#3b2f23] bg-[#1d1712]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#d4a35f]">
                Current Mission
              </div>
              <p className="mt-3 text-sm leading-7 text-[#b9ad9b]">
                Designing full-stack systems that connect frontend polish, backend reliability,
                and business automation into one deliberate product experience.
              </p>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#f5dfb8]"
              >
                <IconMail size={16} />
                Open Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
