"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAIL = "xxx@example.com";
const GITHUB_URL = "https://github.com";

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
  const wechatRef = useRef<HTMLDivElement>(null);

  // Close WeChat tooltip on outside click or Escape
  useEffect(() => {
    if (!qrOpen) return;
    const onDown = (e: MouseEvent) => {
      if (wechatRef.current && !wechatRef.current.contains(e.target as Node)) {
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

            {/* WeChat */}
            <div className="feature-card" ref={wechatRef}>
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.69 4C4.65 4 1.38 6.72 1.38 10.08c0 1.93 1.09 3.65 2.81 4.79l-.7 2.12 2.47-1.24c.88.17 1.78.29 2.71.29.23 0 .46-.01.69-.03-.15-.5-.23-1.03-.23-1.58 0-3.27 3.18-5.92 7.1-5.92.13 0 .26 0 .39.01C15.79 5.71 12.55 4 8.69 4zM5.85 8.39c.54 0 .98.44.98.98 0 .54-.44.98-.98.98a.98.98 0 110-1.96zm5.61 0c.54 0 .98.44.98.98 0 .54-.44.98-.98.98a.98.98 0 110-1.96zM16.5 10.45c-3.49 0-6.31 2.34-6.31 5.22 0 2.88 2.82 5.22 6.31 5.22.74 0 1.45-.11 2.13-.27l1.95.99-.55-1.62c1.43-.97 2.34-2.42 2.34-4.06 0-2.88-2.82-5.22-6.31-5.22zm-2.07 3.65a.78.78 0 110 1.56.78.78 0 010-1.56zm4.13 0a.78.78 0 110 1.56.78.78 0 010-1.56z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {t.contact.wechat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {t.contact.wechat.desc}
                  </p>
                  <div className="wechat-tooltip-wrap inline-block">
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
                      {t.contact.wechat.action}
                    </button>

                    {qrOpen && (
                      <div className="wechat-tooltip" role="dialog">
                        <Image
                          src="/icon.png"
                          alt={t.contact.wechat.title}
                          width={220}
                          height={220}
                          className="wechat-tooltip-image"
                        />
                        <p className="wechat-tooltip-caption">
                          {t.contact.wechat.hint}
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
    </section>
  );
}
