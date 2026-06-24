"use client";

import { motion } from "framer-motion";
import {
  Lightbulb, Search, PenLine, FileEdit, UserCheck, SendHorizonal,
} from "lucide-react";
import { lifecycle } from "@/lib/content";
import SectionBadge from "@/components/common/SectionBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Search, PenLine, FileEdit, UserCheck, SendHorizonal,
};

const stepColors = [
  { ring: "border-blue-500/60",   bg: "bg-blue-500/10",   text: "text-blue-400",   line: "from-blue-500/40" },
  { ring: "border-blue-500/60",   bg: "bg-blue-500/10",   text: "text-blue-400",   line: "from-blue-500/40" },
  { ring: "border-blue-400/60",   bg: "bg-blue-400/10",   text: "text-blue-300",   line: "from-blue-400/40" },
  { ring: "border-ax-accent/60",  bg: "bg-ax-accent/10",  text: "text-ax-accent",  line: "from-ax-accent/40" },
  { ring: "border-fuchsia-500/60",bg: "bg-fuchsia-500/10",text: "text-fuchsia-400",line: "from-fuchsia-500/40" },
  { ring: "border-green-500/60",  bg: "bg-green-500/10",  text: "text-green-400",  line: "from-green-500/40" },
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="py-28 md:py-36 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,74,173,0.06), transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-20"
        >
          <SectionBadge label={lifecycle.sectionLabel} className="mb-4 justify-center" />
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-ax-text">
            {lifecycle.title}{" "}
            <span className="text-gradient">{lifecycle.titleGradient}</span>
          </h2>
          <p className="mt-4 text-ax-subtle max-w-2xl mx-auto">{lifecycle.description}</p>
        </motion.div>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-gradient-to-r from-blue-800/40 via-blue-500/40 to-blue-300/40"
            />

            {/* Step circles */}
            <div className="relative grid grid-cols-6 gap-4">
              {lifecycle.steps.map((step, i) => {
                const Icon = iconMap[step.icon] ?? Lightbulb;
                const c = stepColors[i];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    {/* Circle */}
                    <div className={`relative z-10 w-16 h-16 rounded-full border-2 ${c.ring} ${c.bg} flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${c.text}`} />
                      <span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full bg-ax-bg border ${c.ring} text-[9px] font-bold flex items-center justify-center ${c.text}`}>
                        {step.step}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-center">
                      <div className={`text-sm font-bold ${c.text} mb-1`}>{step.title}</div>
                      <div className="text-xs text-ax-subtle/70 leading-relaxed text-center">
                        {step.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden flex flex-col gap-0">
          {lifecycle.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Lightbulb;
            const c = stepColors[i];
            const isLast = i === lifecycle.steps.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="flex gap-5"
              >
                {/* Left: circle + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-2 ${c.ring} ${c.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  {!isLast && (
                    <div className={`w-px flex-1 my-2 bg-gradient-to-b ${c.line} to-transparent min-h-[2rem]`} />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-8 ${isLast ? "" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold ${c.text} uppercase tracking-wider`}>STEP {step.step}</span>
                  </div>
                  <div className="text-base font-bold text-ax-text mb-1">{step.title}</div>
                  <div className="text-sm text-ax-subtle/70 leading-relaxed">{step.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
