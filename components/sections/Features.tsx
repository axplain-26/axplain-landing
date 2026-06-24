"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { features } from "@/lib/content";
import SectionBadge from "@/components/common/SectionBadge";
import {
  LargeMockupDrawing,
  LargeMockupReport,
  LargeMockupSearch,
  LargeMockupUnifiedSearch,
  LargeMockupFiling,
} from "@/components/common/FeatureMockupsLarge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const mockups = [LargeMockupDrawing, LargeMockupReport, LargeMockupSearch, LargeMockupUnifiedSearch, LargeMockupFiling];

const accentColors = [
  "text-blue-400",
  "text-blue-400",
  "text-ax-accent",
  "text-ax-accent",
  "text-blue-400",
];

export default function Features() {
  return (
    <section id="features" className="py-28 md:py-36 bg-ax-surface relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #004AAD, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #1E6FE0, transparent 70%)" }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-24"
        >
          <SectionBadge label={features.sectionLabel} className="mb-4 justify-center" />
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-ax-text">
            {features.title}{" "}
            <span className="text-gradient">{features.titleGradient}</span>
          </h2>
          <p className="mt-4 text-ax-subtle">{features.description}</p>
        </motion.div>

        {/* Zig-zag feature rows */}
        <div className="flex flex-col gap-32">
          {features.items.map((f, i) => {
            const Mockup = mockups[i];
            const isEven = i % 2 === 0;
            return (
              <div
                key={f.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex-[4] min-w-0"
                >
                  <span className={`text-xs font-bold tracking-widest uppercase ${accentColors[i]} mb-3 block`}>
                    {f.label}
                  </span>
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-ax-text mb-4 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-ax-subtle leading-relaxed mb-6">{f.description}</p>

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-ax-primary to-ax-hover flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </span>
                        <span className="text-sm text-ax-muted">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Mockup side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                  className="flex-[5] flex justify-center w-full min-w-0"
                >
                  {/* glow behind mockup */}
                  <div className="relative w-full">
                    <div
                      className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
                      style={{
                        background: i % 2 === 0
                          ? "radial-gradient(ellipse, rgba(0,74,173,0.4), transparent 70%)"
                          : "radial-gradient(ellipse, rgba(30,111,224,0.35), transparent 70%)",
                      }}
                    />
                    <div className="relative w-full hover:-translate-y-2 transition-transform duration-500">
                      <Mockup />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
