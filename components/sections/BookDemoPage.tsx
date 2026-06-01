"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Form schema ─── */
type FormData = {
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  customerType: string;
  interest: string;
  message: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "", company: "", title: "", email: "",
  phone: "", customerType: "", interest: "", message: "", agree: false,
};

const CUSTOMER_TYPES = [
  "대기업", "중견기업", "대학·산학협력단", "출연연", "특허사무소", "개인·기타",
];

const INTERESTS = [
  "직무발명서/선행보고서 생성",
  "명세서 자동생성",
  "논문+특허 통합 검색",
  "기업 전용 플랫폼 도입",
  "기타",
];

/* ─── Input helper ─── */
function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-ax-muted">
        {label}
        {required && <span className="ml-1 text-ax-accent">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/[0.1] bg-ax-surface-3/60 px-4 py-3 text-sm text-ax-text placeholder:text-ax-subtle/50 outline-none transition-all duration-200 focus:border-ax-primary focus:ring-2 focus:ring-ax-primary/20 min-h-[44px]";

const selectClass = inputClass + " appearance-none cursor-pointer";

/* ─── Trust bullets ─── */
const BULLETS = [
  "약 20~30분, 팀 사용 사례 중심으로 맞춤 진행",
  "대·중견기업 · 대학산단 · 출연연 도입 사례 공유",
  "도입 절차 및 예상 비용 절감 효과 안내",
];

/* ═════════════════════════════════
   Main page component
═════════════════════════════════ */
export default function BookDemoPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim())    errs.name    = "이름을 입력해 주세요.";
    if (!form.company.trim()) errs.company = "회사/기관명을 입력해 주세요.";
    if (!form.email.trim())   errs.email   = "이메일을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "올바른 이메일 형식을 입력해 주세요.";
    if (!form.agree) errs.agree = "개인정보 수집·이용에 동의해 주세요.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    startTransition(async () => {
      // TODO: Calendly iframe 임베드 대안 — 폼 대신 아래 주석 블록을 사용:
      // <iframe src="https://calendly.com/your-link" width="100%" height="700" frameBorder="0" />
      try {
        const res = await fetch("/api/demo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Failed to send");
        setSubmitted(true);
      } catch {
        setSubmitError(true);
      }
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "var(--hero-bg)" }}>
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(0,74,173,0.45), transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(30,111,224,0.3), transparent 70%)" }} />
        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="bd-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bd-dots)" />
        </svg>
      </div>

      <div className="section-container relative z-10 flex flex-col py-20 flex-1">
        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="flex-[5] lg:sticky lg:top-28 flex flex-col gap-6"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-ax-primary/10 text-ax-accent border border-ax-primary/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-ax-accent animate-pulse" />
              DEMO
            </span>

            {/* Headline */}
            <h1 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tight leading-tight text-ax-text">
              AXPlain으로{" "}
              <span className="text-gradient">수수료 절감, 업무 효율 향상</span>을
              <br />
              직접 경험하세요.
            </h1>

            <p className="text-ax-subtle leading-relaxed">
              직무발명서 작성부터 선행기술조사, 명세서 작성, 도면 생성, 특허청 출원까지 — 원하는 서비스를 경험해보세요.
            </p>

          </motion.div>

          {/* ── Right: Form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="flex-[6] w-full"
          >
            <div className="glass border-gradient rounded-3xl p-7 md:p-9">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col items-center text-center gap-5 py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ax-text mb-2">신청이 완료되었습니다!</h2>
                    <p className="text-ax-subtle leading-relaxed">
                      영업일 기준 1~2일 내 담당자가 연락드립니다.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {["접수 완료", "검토 중", "연락 예정"].map((t, i) => (
                      <span key={t} className={`text-xs px-3 py-1 rounded-full border ${i === 0 ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-white/[0.04] border-white/[0.08] text-ax-subtle"}`}>
                        {i === 0 ? "✓" : "○"} {t}
                      </span>
                    ))}
                  </div>
                  <Link href="/"
                    className="mt-4 text-sm text-ax-accent hover:underline underline-offset-4"
                  >
                    홈으로 돌아가기
                  </Link>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="mb-1">
                    <h2 className="text-xl font-bold text-ax-text">데모 신청하기</h2>
                    <p className="text-sm text-ax-subtle mt-1">
                      <span className="text-ax-accent">*</span> 필수 항목
                    </p>
                  </div>

                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="이름" required error={errors.name}>
                      <input
                        type="text" className={inputClass} placeholder="홍길동"
                        value={form.name} onChange={set("name")}
                        aria-required="true" aria-invalid={!!errors.name}
                      />
                    </Field>
                    <Field label="회사/기관명" required error={errors.company}>
                      <input
                        type="text" className={inputClass} placeholder="(주)테크코어"
                        value={form.company} onChange={set("company")}
                        aria-required="true" aria-invalid={!!errors.company}
                      />
                    </Field>
                  </div>

                  {/* Title + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="직책/부서" error={errors.title}>
                      <input
                        type="text" className={inputClass} placeholder="연구기획팀 팀장"
                        value={form.title} onChange={set("title")}
                      />
                    </Field>
                    <Field label="이메일" required error={errors.email}>
                      <input
                        type="email" className={inputClass} placeholder="you@company.com"
                        value={form.email} onChange={set("email")}
                        aria-required="true" aria-invalid={!!errors.email}
                      />
                    </Field>
                  </div>

                  {/* Phone */}
                  <Field label="연락처" error={errors.phone}>
                    <input
                      type="tel" className={inputClass} placeholder="010-0000-0000"
                      value={form.phone} onChange={set("phone")}
                    />
                  </Field>

                  {/* Customer type */}
                  <Field label="고객 유형" error={errors.customerType}>
                    <div className="relative">
                      <select
                        className={selectClass}
                        value={form.customerType} onChange={set("customerType")}
                      >
                        <option value="" disabled className="bg-ax-surface text-ax-subtle">
                          고객 유형을 선택해 주세요
                        </option>
                        {CUSTOMER_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-ax-surface text-ax-text">{t}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-ax-subtle" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Field>

                  {/* Interest */}
                  <Field label="관심 기능" error={errors.interest}>
                    <div className="relative">
                      <select
                        className={selectClass}
                        value={form.interest} onChange={set("interest")}
                      >
                        <option value="" disabled className="bg-ax-surface text-ax-subtle">
                          관심 있는 기능을 선택해 주세요
                        </option>
                        {INTERESTS.map((t) => (
                          <option key={t} value={t} className="bg-ax-surface text-ax-text">{t}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-ax-subtle" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="문의 내용" error={errors.message}>
                    <textarea
                      className={`${inputClass} min-h-[100px] resize-none`}
                      placeholder="궁금한 점이나 현재 겪고 있는 특허 업무 어려움을 간단히 알려주세요."
                      value={form.message} onChange={set("message")}
                      rows={4}
                    />
                  </Field>

                  {/* Agreement */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          checked={form.agree}
                          onChange={set("agree")}
                          aria-required="true"
                        />
                        <div className="w-5 h-5 rounded-md border border-white/[0.15] bg-ax-surface-3/60 peer-checked:bg-ax-primary peer-checked:border-ax-primary transition-all flex items-center justify-center">
                          {form.agree && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                      <span className="text-sm text-ax-subtle leading-relaxed">
                        <span className="text-ax-accent mr-1">*</span>
                        개인정보 수집·이용에 동의합니다. 수집된 정보는 데모 일정 조율 및
                        서비스 안내 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                      </span>
                    </label>
                    {errors.agree && (
                      <p className="text-xs text-red-400 ml-8" role="alert" aria-live="polite">
                        {errors.agree}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-2xl font-bold text-white btn-glow flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-opacity mt-1"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        신청 중...
                      </>
                    ) : (
                      "데모 신청"
                    )}
                  </button>
                  {submitError && (
                    <p className="text-xs text-red-400 text-center" role="alert">
                      전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
