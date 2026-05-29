"use client";

import { motion } from "framer-motion";
import { FileText, Layers, Database, ClipboardList, ArrowRight } from "lucide-react";
import { needs } from "@/lib/content";
import SectionBadge from "@/components/common/SectionBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Layers,
  Database,
  ClipboardList,
};

const gradients = [
  "from-blue-500/20 to-blue-600/5 border-blue-500/20",
  "from-blue-600/20 to-blue-700/5 border-blue-600/20",
  "from-blue-700/20 to-blue-800/5 border-blue-700/20",
  "from-ax-accent/20 to-ax-accent/5 border-ax-accent/20",
];

const iconColors = [
  "text-blue-400 bg-blue-500/10",
  "text-blue-400 bg-blue-600/10",
  "text-blue-300 bg-blue-700/10",
  "text-ax-accent bg-ax-accent/10",
];

export default function Needs() {
  return (
    <section id="needs" className="py-28 md:py-36 relative overflow-hidden">
      {/* background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,74,173,0.07), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <SectionBadge label={needs.sectionLabel} className="mb-4 justify-center" />
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-ax-text">
            {needs.title}{" "}
            <span className="text-gradient">{needs.titleGradient}</span>
          </h2>
          <p className="mt-4 text-ax-subtle max-w-xl mx-auto">{needs.description}</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {needs.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className={`group relative rounded-2xl p-7 border bg-gradient-to-br ${gradients[i]} glass hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* Top row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-3 rounded-xl ${iconColors[i]} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-ax-subtle/70">
                      {item.label}
                    </span>
                    <h3 className="text-lg font-bold text-ax-text mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Pain */}
                <p className="text-sm text-ax-subtle/80 leading-relaxed mb-5 border-l-2 border-white/[0.08] pl-4">
                  {item.pain}
                </p>

                {/* Solution highlight */}
                <div className="flex items-center gap-2 text-sm font-semibold text-ax-text group-hover:gap-3 transition-all duration-200">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-ax-primary to-ax-hover flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                  {item.solution}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
