import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LanguageProviderServer from "@/i18n/LanguageProviderServer";

export const metadata: Metadata = {
  metadataBase: new URL("https://translite.guoziyang.com"),
  title: {
    default: "TransLite — Lightweight Desktop Translator · 轻量级桌面翻译应用",
    template: "%s | TransLite",
  },
  description:
    "TransLite is a free, open-source, lightweight desktop translation app that combines local offline ONNX models with online LLM providers (DeepSeek, GLM, Kimi, OpenAI, Claude, Gemini). Press a global shortcut from anywhere to translate instantly. Windows and macOS.",
  applicationName: "TransLite",
  authors: [{ name: "guoziyangnb", url: "https://github.com/guoziyangnb" }],
  creator: "guoziyangnb",
  publisher: "TransLite",
  keywords: [
    "TransLite",
    "translite",
    "translator",
    "desktop translator",
    "translation app",
    "LLM translator",
    "local translation",
    "offline translator",
    "ONNX translation",
    "open source translator",
    "global shortcut translator",
    "DeepSeek translator",
    "GLM translator",
    "Kimi translator",
    "OpenAI translator",
    "Claude translator",
    "Gemini translator",
    "翻译",
    "翻译软件",
    "桌面翻译",
    "翻译应用",
    "本地翻译",
    "离线翻译",
    "AI 翻译",
    "开源翻译",
    "Electron 翻译",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "TransLite",
    title: "TransLite — Lightweight Desktop Translator",
    description:
      "Free, open-source desktop translation app. Local offline ONNX models + online LLM providers (DeepSeek/GLM/Kimi/OpenAI/Claude/Gemini). Global shortcut for instant translation. Windows & macOS.",
    url: "https://translite.guoziyang.com",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "TransLite Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TransLite — Lightweight Desktop Translator",
    description:
      "Free, open-source desktop translation app with local + LLM providers. Global shortcut for instant translation.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "QIoUPtJVAsTzCNixIZUd4A02lcwvMtixG0dQxYrvCTY",
  },
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `lang` starts as "en" and is updated by LanguageProvider on mount when
    // a non-default language is detected. Layouts in Next.js 16 can't read
    // cookies, so we can't render the correct lang attribute server-side;
    // the visible content is handled by LanguageProviderServer below.
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white">
        <LanguageProviderServer>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProviderServer>
      </body>
    </html>
  );
}
