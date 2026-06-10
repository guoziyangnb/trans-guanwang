"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function DownloadContent() {
  const { t } = useLanguage();

  const platforms = [
    {
      name: "Windows",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z" />
        </svg>
      ),
      version: "Windows 10+",
      arch: "x64 | ARM64",
      note: t.download.platformNotes.windows,
    },
    {
      name: "macOS",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.95 12.85c.05 3.7 3.25 4.93 3.28 4.95-.02.1-.51 1.76-1.69 3.48-1.02 1.48-2.08 2.96-3.75 2.99-1.64.03-2.17-.97-4.05-.97-1.88 0-2.46.94-4.02.98-1.61.03-2.84-1.6-3.87-3.08-2.15-3.11-3.79-8.79-1.59-12.62 1.1-1.91 3.06-3.12 5.19-3.15 1.62-.03 3.15 1.09 4.14 1.09.99 0 2.85-1.35 4.81-1.15.82.03 3.12.33 4.6 2.49-.12.07-2.75 1.6-2.72 4.79l.03-.01h.69zM14.76 4.2c.88-1.04 1.47-2.49 1.31-3.94-1.27.05-2.81.84-3.72 1.9-.82.94-1.53 2.45-1.34 3.89 1.42.11 2.87-.72 3.75-1.85" />
        </svg>
      ),
      version: "macOS 12+",
      arch: "Apple Silicon | Intel",
      note: t.download.platformNotes.macos,
    },
    {
      name: "Linux",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      version: t.download.platformNotes.linuxVersion,
      arch: "x64 | ARM64",
      note: t.download.platformNotes.linux,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.download.titlePre}{" "}
            <span className="gradient-text">{t.download.titleAccent}</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {t.download.subtitle}
          </p>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="feature-card text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-slate-700 mb-5 mx-auto">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  {platform.version}
                </p>
                <div className="space-y-1 mb-6">
                  <p className="text-xs text-slate-400">{platform.arch}</p>
                  <p className="text-xs text-slate-400">{platform.note}</p>
                </div>
                <a
                  href="#releases"
                  className="btn-primary text-sm w-full"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.download.downloadFor(platform.name)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div className="text-sm text-amber-800">
              <strong>{t.download.noticeStrong}</strong>
              {t.download.noticeText}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative install */}
      <section className="py-16 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t.download.buildTitle}
            </h2>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-500 mb-4">
                {t.download.buildDesc}
              </p>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="ml-2">Terminal</span>
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="text-green-400">$</span> git clone https://github.com/yourusername/translite.git
                  </p>
                  <p>
                    <span className="text-green-400">$</span> cd translite
                  </p>
                  <p>
                    <span className="text-green-400">$</span> npm install
                  </p>
                  <p>
                    <span className="text-green-400">$</span> npm run build
                  </p>
                  <p>
                    <span className="text-green-400">$</span> npm start
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Preview */}
      <section id="releases" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t.download.releaseNotesTitle}
            </h2>
            <div className="p-6 rounded-2xl border border-slate-100 bg-white">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">v0.1.0</h3>
                <span className="text-xs text-slate-400">
                  {t.download.releaseDate}
                </span>
              </div>
              <ul className="space-y-2">
                {t.download.releaseHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
