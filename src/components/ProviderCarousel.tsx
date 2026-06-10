const providers = [
  { name: "DeepSeek", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "GLM", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "Kimi", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { name: "Qwen", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "Doubao", color: "bg-rose-50 text-rose-700 border-rose-200" },
  { name: "MiniMax", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { name: "OpenAI", color: "bg-teal-50 text-teal-700 border-teal-200" },
  { name: "Claude", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Gemini", color: "bg-sky-50 text-sky-700 border-sky-200" },
  { name: "OpenAI Compatible", color: "bg-slate-50 text-slate-700 border-slate-200" },
];

const categories = [
  {
    title: "Chinese Providers",
    providers: ["DeepSeek", "GLM", "Kimi", "Qwen", "Doubao", "MiniMax"],
  },
  {
    title: "International Providers",
    providers: ["OpenAI", "Claude", "Gemini"],
  },
  {
    title: "Compatible Gateways",
    providers: ["OpenAI Compatible", "Anthropic API"],
  },
];

export default function ProviderCarousel() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Tag Cloud */}
      <div className="flex flex-wrap justify-center gap-3">
        {providers.map((provider) => (
          <span
            key={provider.name}
            className={`px-4 py-2 rounded-lg border text-sm font-medium ${provider.color} transition-all duration-200 hover:scale-105`}
          >
            {provider.name}
          </span>
        ))}
      </div>

      {/* Categories */}
      <div className="grid sm:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-5 rounded-xl border border-slate-100 bg-white"
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.providers.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
