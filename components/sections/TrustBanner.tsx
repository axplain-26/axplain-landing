"use client";

import { motion } from "framer-motion";
import { trustBanner } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TrustBanner() {
  return (
    <section id="trust" className="relative py-20 overflow-hidden border-y border-white/[0.06] bg-ax-surface/50">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(59,130,246,0.07), transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12"
        >
          <p className="text-ax-subtle/70 text-sm font-medium tracking-wide mb-2">
            신뢰할 수 있는 파트너십
          </p>
          <p className="text-ax-text text-xl md:text-2xl font-bold">
            {trustBanner.headline}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 mb-12"
        >
          {(trustBanner.stats as { value: string; label: string; badge?: string; sub?: string }[]).map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl md:text-4xl font-extrabold text-gradient">{s.value}</span>
                {s.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-ax-primary/15 text-ax-blue border border-ax-primary/25 whitespace-nowrap">
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="text-xs text-ax-subtle mt-1">{s.label}</div>
              {s.sub && (
                <div className="text-[11px] text-ax-subtle/50 mt-0.5">{s.sub}</div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-sm text-ax-subtle/60"
        >
          {trustBanner.description}
        </motion.p>
      </div>
    </section>
  );
}
