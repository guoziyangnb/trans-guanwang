"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAIL = "translite2026@163.com";
const GITHUB_URL = "https://github.com/guoziyangnb/translite";

const GREETINGS = [
  { text: "你好",      style: { top: "10%",  left: "8%",   fontSize: "2.25rem", transform: "rotate(-6deg)" } },
  { text: "Hello",     style: { top: "16%",  right: "10%", fontSize: "2.5rem",  transform: "rotate(5deg)",  animationDelay: "0.4s" } },
  { text: "Bonjour",   style: { top: "44%",  left: "6%",   fontSize: "1.75rem", transform: "rotate(-3deg)", animationDelay: "1.2s" } },
  { text: "안녕하세요", style: { top: "40%",  right: "8%",  fontSize: "1.75rem", transform: "rotate(4deg)",  animationDelay: "0.8s" } },
  { text: "こんにちは",  style: { bottom: "30%", left: "10%", fontSize: "1.5rem",  transform: "rotate(-4deg)", animationDelay: "1.6s" } },
  { text: "Hola",      style: { bottom: "32%", right: "12%", fontSize: "1.875rem", transform: "rotate(6deg)", animationDelay: "2s" } },
];

export default function ContactContent() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const qqRef = useRef<HTMLDivElement>(null);

  // Close QQ tooltip on outside click or Escape
  useEffect(() => {
    if (!qrOpen) return;
    const onDown = (e: MouseEvent) => {
      if (qqRef.current && !qqRef.current.contains(e.target as Node)) {
        setQrOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [qrOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">{t.contact.methodsTitle}</h2>
          <p className="section-subtitle">{t.contact.methodsSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* ===== Left: Illustration ===== */}
          <div className="contact-illustration">
            {GREETINGS.map((g) => (
              <span
                key={g.text}
                className="greeting"
                style={g.style as React.CSSProperties}
              >
                {g.text}
              </span>
            ))}

            <div className="logo-orb">
              <div className="logo-orb-inner">
                <Image
                  src="/icon.png"
                  alt="TransLite"
                  width={72}
                  height={72}
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="caption">
              <h3>{t.contact.illustrationTitle}</h3>
              <p>{t.contact.illustrationDesc}</p>
            </div>
          </div>

          {/* ===== Right: Methods stacked ===== */}
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="feature-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {t.contact.email.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {t.contact.email.desc}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <code className="text-sm font-mono text-slate-700 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-100 break-all">
                      {EMAIL}
                    </code>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        copied
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600"
                      }`}
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {t.contact.email.copied}
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m4.5 0H15a1.5 1.5 0 011.5 1.5v1.5m-6-3a3 3 0 00-3-3h6a3 3 0 00-3 3m-6.75 6.75h.008v.008h-.008v-.008zm9.75-6.75h3.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V8.25c0-.621.504-1.125 1.125-1.125z" />
                          </svg>
                          {t.contact.email.action}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="feature-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-slate-900 text-white shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {t.contact.github.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {t.contact.github.desc}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <code className="text-sm font-mono text-slate-700 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-100 break-all">
                      {GITHUB_URL}
                    </code>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      {t.contact.github.action}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* QQ */}
            <div className="feature-card" ref={qqRef}>
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M29.11 26.278c-0.72 0.087-2.804-3.296-2.804-3.296 0 1.959-1.009 4.515-3.191 6.362 1.052 0.325 3.428 1.198 2.863 2.151-0.457 0.772-7.844 0.493-9.977 0.252-2.133 0.24-9.52 0.519-9.977-0.252-0.565-0.953 1.807-1.826 2.861-2.151-2.182-1.846-3.191-4.403-3.191-6.362 0 0-2.083 3.384-2.804 3.296-0.335-0.041-0.776-1.853 0.584-6.231 0.641-2.064 1.375-3.78 2.509-6.611-0.191-7.306 2.828-13.435 10.016-13.435 7.109 0.001 10.197 6.008 10.017 13.435 1.132 2.826 1.869 4.553 2.509 6.611 1.361 4.379 0.92 6.191 0.584 6.231z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {t.contact.qq.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {t.contact.qq.desc}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <code className="text-sm font-mono text-slate-700 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-100 break-all">
                      <span className="text-slate-500 mr-1.5">{t.contact.qq.numberLabel}</span>
                      {t.contact.qq.number}
                    </code>
                    <div className="qq-tooltip-wrap inline-block">
                      <button
                        type="button"
                        onClick={() => setQrOpen((v) => !v)}
                        aria-expanded={qrOpen}
                        className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                          qrOpen
                            ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                            : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:text-emerald-600"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625v4.5M16.5 13.5v3M19.5 13.5v3M13.5 19.5h6" />
                        </svg>
                        {t.contact.qq.action}
                      </button>

                      {qrOpen && (
                        <div className="qq-tooltip" role="dialog">
                          <Image
                            src="/concat.jpg"
                            alt={t.contact.qq.title}
                            width={280}
                            height={498}
                            className="qq-tooltip-image"
                          />
                          <p className="qq-tooltip-caption">
                            {t.contact.qq.hint}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
