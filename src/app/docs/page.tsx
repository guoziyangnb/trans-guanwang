import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Get started with TransLite - installation guide, configuration, provider setup, and local model management.",
};

export default function DocsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to get started with TransLite.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar Nav */}
          <nav className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-1">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                On this page
              </h4>
              {[
                "Quick Start",
                "Installation",
                "Configuration",
                "Providers",
                "Local Models",
                "Shortcuts",
                "Usage Tracking",
                "FAQ",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Start */}
            <section id="quick-start">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Quick Start
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                TransLite is a lightweight desktop translation app. Follow these
                steps to get up and running in minutes.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {[
                    "Node.js 18+ and npm",
                    "Operating system: Windows 10+, macOS 12+, or Linux",
                    "For local translation: ~4GB free disk space for model download",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
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
            </section>

            {/* Installation */}
            <section id="installation">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Installation
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Download Prebuilt Binary
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Download the latest release for your platform from the{" "}
                    <a
                      href="/download"
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                      Download page
                    </a>
                    .
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Build from Source
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
                    Development Mode
                  </h3>
                  <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                    <div className="space-y-1">
                      <p>
                        <span className="text-green-400">$</span> npm run dev
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    This starts the Vite dev server for frontend hot-reload. Run{" "}
                    <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                      npm start
                    </code>{" "}
                    in another terminal to launch the Electron app pointing at
                    the dev server.
                  </p>
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section id="configuration">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Configuration
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                TransLite stores all settings locally in a JSON file at{" "}
                <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                  userData/settings.json
                </code>
                . No backend or database required — your data stays on your
                machine.
              </p>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Settings Overview
                </h3>
                <ul className="space-y-3">
                  {[
                    "Provider configurations (Base URL, API Key, model selection)",
                    "Local model directory and model loading settings",
                    "Global shortcut key binding",
                    "Usage check templates (JavaScript request/extractor)",
                    "Theme and display preferences",
                  ].map((item) => (
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
            </section>

            {/* Providers */}
            <section id="providers">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Provider Setup
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                TransLite comes with presets for major LLM providers. Each
                provider can be independently configured.
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Adding a Provider
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                    <li>Open TransLite and navigate to Settings</li>
                    <li>Select a provider from the preset list</li>
                    <li>Enter your API Key and Base URL (if needed)</li>
                    <li>Click &ldquo;Fetch Models&rdquo; to load available models</li>
                    <li>Select a model and activate the provider</li>
                  </ol>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Provider Features
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
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
                      <span>
                        <strong>Endpoint Testing</strong> — Verify your API
                        endpoint before using it
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>
                        <strong>Model Fetching</strong> — Automatically
                        retrieve available models from the provider
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>
                        <strong>Per-Provider Activation</strong> — Enable or
                        disable providers independently
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    OpenAI-Compatible Gateways
                  </h3>
                  <p className="text-sm text-slate-500">
                    TransLite supports any OpenAI-compatible API gateway.
                    Simply enter your custom Base URL and API Key, and the app
                    will work with any provider that implements the OpenAI API
                    format.
                  </p>
                </div>
              </div>
            </section>

            {/* Local Models */}
            <section id="local-models">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Local Models
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                TransLite uses ONNX Runtime for local model inference, enabling
                fully offline translation.
              </p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Default Model
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    The default local model is{" "}
                    <code className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono">
                      onnx-community/HY-MT1.5-1.8B-ONNX
                    </code>
                    , which provides fast and accurate translation without an
                    internet connection.
                  </p>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                    <svg
                      className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
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
                    <div className="text-sm text-blue-700">
                      <strong>Privacy:</strong> Local model inference means your
                      text never leaves your computer. All processing happens
                      on-device.
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Custom Models
                  </h3>
                  <p className="text-sm text-slate-500">
                    You can use custom model directories. Download compatible
                    ONNX models and point TransLite to your model folder in the
                    settings. The app handles model loading and management
                    automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* Shortcuts */}
            <section id="shortcuts">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Keyboard Shortcuts
              </h2>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-700">
                      Quick-open translation window
                    </span>
                    <kbd className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono font-semibold text-slate-600">
                      Alt + Space
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-700">
                      Close window
                    </span>
                    <kbd className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono font-semibold text-slate-600">
                      Esc
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-700">
                      (More shortcuts coming soon)
                    </span>
                    <span className="text-xs text-slate-400 italic">
                      In development
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  The global shortcut is customizable in Settings.
                </p>
              </div>
            </section>

            {/* Usage Tracking */}
            <section id="usage-tracking">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Usage Tracking
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                TransLite provides a flexible usage tracking system using
                JavaScript templates. You can create custom request and
                extractor scripts to monitor API consumption for any provider.
              </p>
              <div className="p-6 rounded-2xl border border-slate-100 bg-white">
                <h3 className="font-semibold text-slate-900 mb-3">
                  How It Works
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
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
                    <span>
                      <strong>Request Template</strong> — Define how to query
                      the provider&apos;s usage API
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
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
                    <span>
                      <strong>Extractor Template</strong> — Parse the API
                      response to extract balance, token usage, and plan status
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
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
                    <span>
                      Usage is displayed in-app: balances, Token Plan, API
                      availability, and per-request token counts
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is TransLite free?",
                    a: "Yes! TransLite is open source under the MIT License. It's completely free to use and modify.",
                  },
                  {
                    q: "Do I need an internet connection?",
                    a: "No. TransLite supports fully offline translation using local ONNX models. Online LLM providers are optional.",
                  },
                  {
                    q: "How do I get an API key for providers?",
                    a: "Each provider has its own registration process. Visit the provider's website to sign up and get your API key.",
                  },
                  {
                    q: "Can I use my own local model?",
                    a: "Yes, you can configure a custom model directory in settings. The model must be in ONNX format.",
                  },
                  {
                    q: "Where are my settings stored?",
                    a: "Settings are stored locally at Electron's userData/settings.json. No data is sent to any server.",
                  },
                  {
                    q: "Which platforms are supported?",
                    a: "Windows 10+, macOS 12+, and Linux (modern distributions).",
                  },
                ].map((faq, idx) => (
                  <details
                    key={idx}
                    className="group p-5 rounded-2xl border border-slate-100 bg-white open:border-indigo-100 open:shadow-sm transition-all"
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
