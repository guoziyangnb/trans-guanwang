"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.features, href: "/features" },
        { label: t.footer.download, href: "/download" },
        { label: t.footer.docs, href: "/docs" },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { label: t.footer.github, href: "https://github.com/guoziyangnb/translite" },
        { label: t.footer.issues, href: "https://github.com/guoziyangnb/translite" },
        { label: t.footer.changelog, href: "/docs" },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/icon.png"
                alt="TransLite"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-bold text-lg text-slate-900">
                TransLite
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm text-slate-900 mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Open Source */}
          <div>
            <h3 className="font-semibold text-sm text-slate-900 mb-3">
              {t.footer.openSource}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/guoziyangnb/translite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500">
                  {t.footer.mitLicense}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {t.footer.copyrightSuffix}
          </p>
          <p className="text-sm text-slate-400">
            Built with Electron &middot; Vue 3 &middot; ONNX Runtime
          </p>
        </div>
      </div>
    </footer>
  );
}
