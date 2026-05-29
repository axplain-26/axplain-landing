"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cta } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CTA() {
  return (
    <section id="demo" className="relative py-28 md:py-40 overflow-hidden">
      {/* Full-width gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0A0E1A 0%, #0C1225 40%, #0E1835 70%, #0A0E1A 100%)",
        }}
      />

      {/* Animated glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.5), transparent 65%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(30,111,224,0.4), transparent 65%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.25), transparent 65%)" }}
        />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="cta-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6"
        >
          <div className="w-14 h-14 rounded-2xl btn-glow flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-tight leading-tight mb-4"
        >
          <span className="text-ax-text">{cta.title}</span>
          <br />
          <span className="text-gradient">{cta.titleGradient}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="text-ax-subtle text-lg max-w-xl mb-10"
        >
          {cta.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={cta.button.href}
            className="group inline-flex items-center gap-2 px-10 py-4 text-base font-bold text-white rounded-2xl btn-glow"
          >
            {cta.button.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={cta.secondaryButton.href}
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-ax-muted rounded-2xl border border-white/[0.12] hover:border-white/20 hover:text-ax-text transition-colors"
          >
            {cta.secondaryButton.label}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
