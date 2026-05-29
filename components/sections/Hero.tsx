"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { hero, features } from "@/lib/content";
import { featureMockups } from "@/components/common/FeatureMockups";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const words1 = hero.headline.split(" ");
const words2 = hero.headlineGradient.split(" ");

export default function Hero() {
  return (
    <section
      id="service"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.35), transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-40 w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(30,111,224,0.25), transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-10 w-[400px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.2), transparent 70%)" }}
        />
        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col items-center text-center pt-32 pb-20">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-ax-primary/10 text-ax-blue border border-ax-primary/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-ax-blue animate-pulse" />
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-extrabold tracking-tight leading-[1.1] mb-3">
          {/* Line 1 — word stagger */}
          <span className="flex flex-wrap justify-center gap-x-4">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.2 + i * 0.1 }}
                className="text-ax-text"
              >
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 — gradient */}
          <span className="flex flex-wrap justify-center gap-x-3 mt-1">
            {words2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.35 + words1.length * 0.1 + i * 0.1 }}
                className="text-gradient"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub-headline */}
        <motion.p {...fadeUp(0.65)} className="text-lg md:text-xl font-semibold text-ax-muted mb-4">
          {hero.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p {...fadeUp(0.75)} className="text-base md:text-lg text-ax-subtle max-w-2xl leading-relaxed mb-10">
          {hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.88)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={hero.cta.primary.href}
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl btn-glow"
          >
            {hero.cta.primary.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={hero.cta.secondary.href}
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-ax-muted rounded-2xl border border-white/[0.12] hover:border-white/20 hover:text-ax-text transition-colors"
          >
            {hero.cta.secondary.label}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Feature preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-left"
        >
          {features.items.slice(0, 3).map((f, i) => {
            const Mockup = featureMockups[i];
            return (
              <div
                key={f.id}
                className="glass rounded-2xl p-5 border-gradient flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-ax-blue">
                  {f.label}
                </span>
                <div className="text-base font-bold text-ax-text leading-snug">{f.title}</div>
                <Mockup />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] tracking-widest uppercase text-ax-subtle/50">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ax-blue/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
