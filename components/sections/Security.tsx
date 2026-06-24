"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Eye } from "lucide-react";
import { security } from "@/lib/content";
import SectionBadge from "@/components/common/SectionBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const iconMap: Record<string, React.ElementType> = { ShieldCheck, Lock, Server, Eye };

const cardGlow = [
  "hover:shadow-[0_0_32px_rgba(0,74,173,0.18)]",
  "hover:shadow-[0_0_32px_rgba(99,102,241,0.15)]",
  "hover:shadow-[0_0_32px_rgba(79,70,229,0.15)]",
  "hover:shadow-[0_0_32px_rgba(139,92,246,0.15)]",
];

const iconColors = [
  "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "text-blue-400 bg-blue-700/10 border-blue-700/20",
  "text-blue-300 bg-blue-600/10 border-blue-600/20",
  "text-sky-400 bg-sky-500/10 border-sky-500/20",
];


export default function Security() {
  return (
    <section id="security" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.07), transparent)," +
            "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(139,92,246,0.05), transparent)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <SectionBadge label={security.sectionLabel} className="mb-4 justify-center" />
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-ax-text">
            {security.title}{" "}
            <span className="text-gradient">{security.titleGradient}</span>
          </h2>
          <p className="mt-4 text-ax-subtle max-w-xl mx-auto">{security.description}</p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {security.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.09 }}
                className={`group glass rounded-2xl p-7 border border-white/[0.07] hover:border-white/[0.13] transition-all duration-300 hover:-translate-y-1 ${cardGlow[i]}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border ${iconColors[i]} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ax-text mb-2">{item.title}</h3>
                    <p className="text-sm text-ax-subtle/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-ax-primary/20 bg-ax-primary/5">
            <ShieldCheck className="w-4 h-4 text-ax-blue" />
            <span className="text-sm text-ax-muted">
              대기업·출연연 전용 독립 인스턴스 구성 — 데이터 완전 격리 보장
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
