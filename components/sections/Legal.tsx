"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mic, Video, ShieldCheck, CheckCircle2 } from "lucide-react";
import { legal } from "@/lib/content";
import SectionBadge from "@/components/common/SectionBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const MESSAGES = [
  { role: "ai",   text: "이 발명의 핵심 기술적 특징은 무엇인가요?" },
  { role: "user", text: "열처리 공정에서 온도 균일성을 향상시키는 새로운 구조입니다. 기존 장치의 열분포 불균형 문제를 해결합니다." },
  { role: "ai",   text: "기존 기술과 비교하여 구체적인 차별점을 설명해 주세요." },
  { role: "user", text: "열분산 패널 구조를 적용해 온도 편차를 30% 이상 줄였으며, 공정 시간도 15% 단축됩니다." },
  { role: "ai",   text: "핵심 구성요소와 각각의 기능을 설명해 주세요." },
  { role: "user", text: "열분산 패널, 온도 센서 어레이, 피드백 제어 모듈 — 세 부품이 유기적으로 동작합니다." },
];

// step 0–2: 폼 표시 + 커서 이동
// step 3:   채팅 패널 오픈
// step 4–9: 메시지 순차 표시 (MESSAGES[step-4])
// step 10:  녹화 완료
// step 11:  성공 오버레이
// step 12:  리셋
const DURATIONS = [1800, 1000, 500, 700, 1800, 2200, 1600, 2100, 1600, 2100, 1600, 2800, 900];

function CursorIcon({ clicking }: { clicking: boolean }) {
  return (
    <motion.div
      animate={{ scale: clicking ? 0.75 : 1 }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none"
    >
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
        <path d="M2 2L2 20L6.5 15.5L9.5 22L12 21L9 14.5H15L2 2Z"
          fill="white" stroke="#1e293b" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-ax-blue/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

function InterviewMockup() {
  const [step, setStep] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-120px" });

  // 뷰포트 진입 시 시퀀스 시작
  useEffect(() => {
    if (inView && step === -1) setStep(0);
  }, [inView, step]);

  useEffect(() => {
    if (step < 0) return;
    const duration = DURATIONS[step] ?? 2000;
    const t = setTimeout(() => {
      setStep((prev) => (prev + 1 >= DURATIONS.length ? 0 : prev + 1));
    }, duration);
    return () => clearTimeout(t);
  }, [step]);

  const chatOpen    = step >= 3;
  const msgCount    = Math.max(0, step - 3);   // 표시할 메시지 수
  const showTyping  = step >= 4 && step <= 9 && (step - 4) % 2 === 0 && msgCount <= step - 4;
  const recDone     = step >= 10;
  const showSuccess = step >= 11;
  const cursorVisible = step >= 0 && step <= 2;
  const clicking    = step === 2;

  // 커서 위치 (left panel 내 버튼 위치에 맞춤)
  const cursorPos =
    step === 0 ? { left: "12%",  top: "55%" } :
    step >= 1  ? { left: "25%", top: "74%" } :
                 { left: "12%",  top: "55%" };

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto">
      {/* Glow */}
      <div
        className="absolute -inset-8 rounded-3xl opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.45), transparent 70%)" }}
      />

      {/* Window chrome */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-ax-bg">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-ax-surface border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {["bg-red-500/70","bg-yellow-500/70","bg-green-500/70"].map((c) => (
                <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>
            <span className="text-xs text-ax-subtle/60 font-medium ml-2">
              AXPlain — 발명자 인터뷰 시스템
            </span>
          </div>
          {/* REC indicator */}
          <div className="flex items-center gap-1.5">
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-red-400"
                  animate={recDone ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: recDone ? 0 : Infinity }}
                />
                <span className="text-[9px] font-bold text-red-400">
                  {recDone ? "REC 완료" : "REC"}
                </span>
              </motion.div>
            )}
            <Video className="w-3.5 h-3.5 text-ax-subtle/40" />
          </div>
        </div>

        {/* Main area */}
        <div className="flex h-[460px]">
          {/* ─── Left: document form ─── */}
          <div className="w-[42%] border-r border-white/[0.06] flex flex-col p-5 gap-3 relative overflow-hidden">
            <div className="text-xs font-bold text-ax-subtle/50 uppercase tracking-wider mb-1">
              직무발명서 초안
            </div>

            {/* Form fields */}
            {[
              { label: "발명자",   val: "홍길동, 김연구, 박기술" },
              { label: "출원인",   val: "(주) 테크코어 연구소" },
              { label: "기술분야", val: "반도체 열처리 공정" },
              { label: "발명명칭", val: "열처리 장치 및 그 방법" },
            ].map((f) => (
              <div key={f.label} className="bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.05]">
                <div className="text-[9px] text-ax-subtle/40 mb-0.5">{f.label}</div>
                <div className="text-[11px] text-ax-muted font-medium truncate">{f.val}</div>
              </div>
            ))}

            {/* Description preview */}
            <div className="flex-1 bg-white/[0.02] rounded-lg p-3 border border-white/[0.04] overflow-hidden">
              <div className="text-[9px] text-ax-subtle/40 mb-2">발명 설명</div>
              {[80, 65, 90, 55, 75, 60, 85].map((w, i) => (
                <div key={i} className="h-1 rounded bg-white/10 mb-1.5" style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              animate={clicking ? { scale: 0.94 } : { scale: 1 }}
              transition={{ duration: 0.15 }}
              className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                chatOpen
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gradient-to-r from-ax-primary to-ax-hover text-white shadow-[0_0_16px_rgba(0,74,173,0.4)]"
              }`}
            >
              <Mic className="w-3 h-3" />
              {chatOpen ? "인터뷰 진행 중..." : "AI 인터뷰 시작"}
            </motion.button>

            {/* Animated cursor */}
            <AnimatePresence>
              {cursorVisible && (
                <motion.div
                  key="cursor"
                  initial={{ left: "12%", top: "55%", opacity: 0 }}
                  animate={{ ...cursorPos, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: step === 1 ? 0.9 : 0.2, ease: EASE }}
                  className="absolute z-20"
                  style={{ position: "absolute" }}
                >
                  <CursorIcon clicking={clicking} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── Right: AI interview chat ─── */}
          <div className="flex-1 flex flex-col relative overflow-hidden">
            {/* Chat header */}
            <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-ax-primary/20 border border-ax-primary/30 flex items-center justify-center">
                <span className="text-[8px] font-bold text-ax-blue">AI</span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-ax-text">특허 AI 인터뷰어</div>
                <div className="text-[9px] text-ax-subtle/50">
                  {chatOpen ? (recDone ? "인터뷰 완료" : "인터뷰 진행 중") : "대기 중"}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              <AnimatePresence>
                {!chatOpen && (
                  <motion.div
                    key="placeholder"
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center gap-3 text-ax-subtle/30"
                  >
                    <Mic className="w-8 h-8" />
                    <span className="text-xs">인터뷰 시작 버튼을 누르면</span>
                    <span className="text-xs">AI가 발명 내용을 질의합니다</span>
                  </motion.div>
                )}

                {chatOpen && MESSAGES.slice(0, msgCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "ai" && (
                      <div className="w-5 h-5 rounded-full bg-ax-primary/20 border border-ax-primary/30 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        <span className="text-[7px] font-bold text-ax-blue">AI</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                        msg.role === "ai"
                          ? "bg-ax-surface-2 text-ax-muted rounded-tl-sm border border-white/[0.06]"
                          : "bg-ax-primary/20 text-ax-text rounded-tr-sm border border-ax-primary/20"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-5 h-5 rounded-full bg-ax-surface-2 border border-white/[0.08] flex items-center justify-center ml-2 mt-0.5 shrink-0 text-[7px] text-ax-subtle">
                        홍
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing dots — while waiting for next message */}
                {chatOpen && !recDone && msgCount < MESSAGES.length && step % 2 !== 0 && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-ax-primary/20 border border-ax-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-[7px] font-bold text-ax-blue">AI</span>
                    </div>
                    <div className="bg-ax-surface-2 rounded-2xl rounded-tl-sm border border-white/[0.06]">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Success overlay */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-ax-bg/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-14 h-14 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-7 h-7 text-green-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="text-sm font-bold text-green-400 mb-1">발명 완성 증거 확보</div>
                    <div className="text-xs text-ax-subtle/60">창작 기여도 입증 자료 생성 완료</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-2 mt-1"
                  >
                    {["영상 저장 완료", "법적 효력 확보", "명세서 연동"].map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        ✓ {tag}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input bar (decorative) */}
            {chatOpen && (
              <div className="px-4 py-3 border-t border-white/[0.06] flex items-center gap-2">
                <div className="flex-1 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
                  <div className="h-1.5 w-24 rounded bg-white/10" />
                  <motion.div
                    className="w-0.5 h-3 bg-ax-blue/70 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                <button className="w-7 h-7 rounded-lg bg-ax-primary/80 flex items-center justify-center">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Legal() {
  return (
    <section id="legal" className="py-28 md:py-36 bg-ax-surface relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,74,173,0.07), transparent)",
        }}
      />

      <div className="section-container relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <SectionBadge label={legal.sectionLabel} className="mb-4 justify-center" />
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-ax-text">
            {legal.title}{" "}
            <span className="text-gradient">{legal.titleGradient}</span>
          </h2>
          <p className="mt-4 text-ax-subtle max-w-2xl mx-auto">{legal.description}</p>
        </motion.div>

        {/* Animated interview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="w-full"
        >
          <InterviewMockup />
        </motion.div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-12 w-full"
        >
          <div className="hidden md:flex items-center justify-center gap-0">
            {legal.processSteps.map((s, i) => (
              <div key={s.step} className="flex items-center">
                <div className={`flex flex-col items-center gap-2 px-4 ${s.highlight ? "scale-110" : ""}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                      s.final
                        ? "bg-green-500 border-green-500 text-white"
                        : s.highlight
                        ? "bg-ax-primary border-ax-primary text-white shadow-[0_0_20px_rgba(0,74,173,0.5)]"
                        : "bg-ax-surface border-white/[0.12] text-ax-muted"
                    }`}
                  >
                    {s.step}
                  </div>
                  <div className="text-center">
                    <div className={`text-[11px] font-semibold whitespace-nowrap ${s.highlight ? "text-ax-blue" : s.final ? "text-green-400" : "text-ax-muted"}`}>
                      {s.label}
                    </div>
                    <div className="text-[9px] text-ax-subtle/50 whitespace-nowrap">{s.sub}</div>
                  </div>
                </div>
                {i < legal.processSteps.length - 1 && (
                  <div className="w-10 h-px bg-white/[0.08] mx-1 shrink-0" />
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ax-subtle/60 mt-8 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-ax-blue shrink-0" />
            발명자 중심의 특허 출원을 통해 법적 안정성과 AI 효율성을 동시에 확보합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
