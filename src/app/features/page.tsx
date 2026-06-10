import type { Metadata } from "next";
import FeatureGrid from "@/components/FeatureGrid";
import ProviderCarousel from "@/components/ProviderCarousel";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all features of TransLite - local translation, multi-provider LLM support, global shortcuts, usage tracking, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            All <span className="gradient-text">Features</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            TransLite combines the best of local and cloud translation technology
            in a clean, lightweight desktop application.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureGrid />
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">What Makes TransLite Different</h2>
            <p className="section-subtitle">
              Designed for developers, writers, and anyone who needs fast,
              reliable translation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="inline-flex p-3 rounded-xl bg-indigo-50 text-indigo-600 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Global Shortcut Quick-Open
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Set a customizable global hotkey to summon the translation
                  window from any application. No more alt-tabbing or searching
                  for the app — just press your shortcut and translate instantly.
                </p>
              </div>
              <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <kbd className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-600 shadow-xs">
                    Alt + Space
                  </kbd>
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-sm text-slate-600">
                    Translation window opens instantly
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  Configurable in settings. Default: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">Alt+Space</kbd>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Local Model Translation
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Run translation models entirely offline using ONNX Runtime. No
                  data leaves your machine — perfect for privacy-sensitive work.
                </p>
              </div>
              <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-slate-700">
                      Default model: <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">onnx-community/HY-MT1.5-1.8B-ONNX</code>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-slate-700">
                      Support for custom model directories
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-slate-700">
                      Model download management built in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Multi-Provider Architecture
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Seamlessly switch between different LLM providers. Each
                  provider has independent Base URL, API Key, model selection,
                  and activation settings.
                </p>
              </div>
              <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  {["DeepSeek", "GLM", "Kimi", "Qwen", "Doubao", "MiniMax", "OpenAI", "Claude", "Gemini"].map(
                    (p) => (
                      <div
                        key={p}
                        className="flex items-center gap-2 text-sm text-slate-600 p-2 rounded-lg hover:bg-slate-50"
                      >
                        <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {p}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="inline-flex p-3 rounded-xl bg-amber-50 text-amber-600 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Usage &amp; Cost Tracking
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Monitor API usage with customizable JavaScript request and
                  extractor templates. Track balances, Token Plan, and
                  per-request token consumption.
                </p>
              </div>
              <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-slate-700">
                      Balance &amp; plan status monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-slate-700">
                      API availability &amp; endpoint testing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-slate-700">
                      Per-request token usage display
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-slate-700">
                      Extensible with custom JS extractor templates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Support Full */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Supported Providers</h2>
            <p className="section-subtitle">
              Presets for major Chinese and international LLM platforms.
            </p>
          </div>
          <ProviderCarousel />
        </div>
      </section>
    </>
  );
}
