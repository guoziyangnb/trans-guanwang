import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white">
        {/* Apply the saved language to <html lang> before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("translite-lang")==="zh")document.documentElement.lang="zh-CN"}catch(e){}`,
          }}
        />
        <LanguageProvider>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
