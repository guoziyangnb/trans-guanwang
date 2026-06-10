"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const options: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "zh", label: "中文" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 p-0.5 rounded-lg border border-slate-200 bg-white/60"
      role="group"
      aria-label="Language"
    >
      <svg
        className="w-4 h-4 text-slate-400 ml-1.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-18.432 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253"
        />
      </svg>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setLang(option.value)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
            lang === option.value
              ? "bg-indigo-600 text-white"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          }`}
          aria-pressed={lang === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
