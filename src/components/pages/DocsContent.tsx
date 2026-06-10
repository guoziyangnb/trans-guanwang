"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const checkIcon = (color: string) => (
  <svg
    className={`w-4 h-4 ${color} shrink-0 mt-0.5`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function DocsContent() {
  const { t } = useLanguage();
  const d = t.docs;

  return (
    <>
      {/* Header */}
      {/* <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="gradient-text">{d.titleAccent}</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {d.subtitle}
          </p>
        </div>
      </section> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar Nav */}
          <nav className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {d.onThisPage}
              </h4>
              {d.sidebar.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Start */}
            <section id="quick-start">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.quickStart.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {d.quickStart.intro}
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {d.quickStart.prereqTitle}
                </h3>
                <ul className="space-y-2">
                  {d.quickStart.prereqs.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      {checkIcon("text-emerald-500")}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Installation */}
            <section id="installation">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.installation.title}
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.installation.binaryTitle}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {d.installation.binaryTextPre}
                    <a
                      href="/download"
                      className="text-emerald-600 hover:text-emerald-500 font-medium"
                    >
                      {d.installation.binaryLink}
                    </a>
                    {d.installation.binaryTextPost}
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.installation.sourceTitle}
                  </h3>
                  <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                    <div className="space-y-1">
                      <p>
                        <span className="text-green-400">$</span> git clone
                        https://github.com/yourusername/translite.git
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
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.installation.devTitle}
                  </h3>
                  <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                    <div className="space-y-1">
                      <p>
                        <span className="text-green-400">$</span> npm run dev
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    {d.installation.devTextPre}
                    <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                      npm start
                    </code>
                    {d.installation.devTextPost}
                  </p>
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section id="configuration">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.configuration.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {d.configuration.introPre}
                <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                  userData/settings.json
                </code>
                {d.configuration.introPost}
              </p>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {d.configuration.overviewTitle}
                </h3>
                <ul className="space-y-3">
                  {d.configuration.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      {checkIcon("text-emerald-500")}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Providers */}
            <section id="providers">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.providers.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {d.providers.intro}
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.providers.addingTitle}
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    {d.providers.addingSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.providers.featuresTitle}
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {d.providers.featureItems.map((item) => (
                      <li key={item.strong} className="flex items-start gap-2">
                        {checkIcon("text-emerald-500")}
                        <span>
                          <strong>{item.strong}</strong>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.providers.gatewaysTitle}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {d.providers.gatewaysText}
                  </p>
                </div>
              </div>
            </section>

            {/* Local Models */}
            <section id="local-models">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.localModels.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {d.localModels.intro}
              </p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.localModels.defaultTitle}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {d.localModels.defaultTextPre}
                    <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                      onnx-community/HY-MT1.5-1.8B-ONNX
                    </code>
                    {d.localModels.defaultTextPost}
                  </p>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-teal-50 border border-teal-100">
                    <svg
                      className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                    <div className="text-sm text-teal-700">
                      <strong>{d.localModels.privacyStrong}</strong>
                      {d.localModels.privacyText}
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {d.localModels.customTitle}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {d.localModels.customText}
                  </p>
                </div>
              </div>
            </section>

            {/* Shortcuts */}
            <section id="shortcuts">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.shortcuts.title}
              </h2>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-700">
                      {d.shortcuts.quickOpen}
                    </span>
                    <kbd className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono font-semibold text-slate-600">
                      Alt + Space
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-700">
                      {d.shortcuts.closeWindow}
                    </span>
                    <kbd className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono font-semibold text-slate-600">
                      Esc
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-700">
                      {d.shortcuts.moreSoon}
                    </span>
                    <span className="text-xs text-slate-400 italic">
                      {d.shortcuts.inDevelopment}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  {d.shortcuts.note}
                </p>
              </div>
            </section>

            {/* Usage Tracking */}
            <section id="usage-tracking">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {d.usageTracking.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {d.usageTracking.intro}
              </p>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {d.usageTracking.howTitle}
                </h3>
                <ul className="space-y-3">
                  {d.usageTracking.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      {checkIcon("text-emerald-500")}
                      <span>
                        {item.strong && <strong>{item.strong}</strong>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {d.faq.title}
              </h2>
              <div className="space-y-4">
                {d.faq.items.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group p-5 rounded-2xl border border-slate-100 bg-white open:border-emerald-100 open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-medium text-slate-900 text-sm">
                        {faq.q}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
