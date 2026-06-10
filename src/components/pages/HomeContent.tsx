"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeatureGrid from "@/components/FeatureGrid";
import ProviderCarousel from "@/components/ProviderCarousel";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HomeContent() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-24 sm:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.home.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {t.home.heroTitle}{" "}
              <span className="gradient-text">{t.home.heroTitleAccent}</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {t.home.heroDesc}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/download" className="btn-primary text-base w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.home.downloadForWindows}
              </Link>
              <Link href="/features" className="btn-secondary text-base w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.home.learnMore}
              </Link>
            </div>

            {/* Platform Tags */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3v18h6l3 3 3-3h6V2zm-9 3.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7S9.3 9.5 9.3 8c0-1.5 1.2-2.7 2.7-2.7zM18 17H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/></svg>
                Windows 10+
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3v18h6l3 3 3-3h6V2zm-9 3.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7S9.3 9.5 9.3 8c0-1.5 1.2-2.7 2.7-2.7zM18 17H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/></svg>
                macOS 12+
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Linux
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Screenshot Section ===== */}
      <section className="py-16 sm:py-12 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.home.seeInActionTitle}</h2>
            <p className="section-subtitle">{t.home.seeInActionSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <button
              type="button"
              className="shot-card text-left"
              onClick={() =>
                setLightbox({
                  src: "/screenshot-workspace.png",
                  alt: "TransLite Translation Workspace",
                })
              }
            >
              <Image
                src="/screenshot-workspace.png"
                alt="TransLite Translation Workspace"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="p-4 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-700">
                  {t.home.workspaceTitle}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.home.workspaceDesc}
                </p>
              </div>
            </button>
            <button
              type="button"
              className="shot-card text-left"
              onClick={() =>
                setLightbox({
                  src: "/screenshot-settings.png",
                  alt: "TransLite Provider Settings",
                })
              }
            >
              <Image
                src="/screenshot-settings.png"
                alt="TransLite Provider Settings"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="p-4 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-700">
                  {t.home.settingsTitle}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.home.settingsDesc}
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">{t.home.featuresTitle}</h2>
            <p className="section-subtitle">{t.home.featuresSubtitle}</p>
          </div>
          <FeatureGrid />
          <div className="text-center mt-10">
            <Link href="/features" className="btn-secondary text-sm">
              {t.home.viewAllFeatures} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Provider Support ===== */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.home.providersTitle}</h2>
            <p className="section-subtitle">{t.home.providersSubtitle}</p>
          </div>
          <ProviderCarousel />
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-linear-to-br from-emerald-600 via-emerald-700 to-teal-700 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-emerald-500/20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-4 text-emerald-200 text-lg max-w-xl mx-auto">
              {t.home.ctaDesc}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/download"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-emerald-700 bg-white hover:bg-emerald-50 shadow-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.home.downloadNow}
              </a>
              <a
                href="/docs"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-emerald-400 hover:bg-emerald-600 transition-all duration-200"
              >
                {t.home.readDocs}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Lightbox ===== */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
