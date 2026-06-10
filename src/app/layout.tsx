import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LanguageProviderServer from "@/i18n/LanguageProviderServer";

export const metadata: Metadata = {
  title: {
    default: "TransLite - Lightweight Desktop Translator",
    template: "%s | TransLite",
  },
  description:
    "A lightweight desktop translator with local-trans model translation, online LLM providers, global shortcut launch, and configurable usage checks.",
  keywords: [
    "translator",
    "desktop",
    "translation",
    "LLM",
    "local translation",
    "electron",
    "offline translator",
  ],
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
