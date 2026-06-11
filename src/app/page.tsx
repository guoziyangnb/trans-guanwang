import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "TransLite — Lightweight Desktop Translator",
  description:
    "TransLite is a free, open-source, lightweight desktop translation app combining local offline ONNX models with online LLM providers (DeepSeek, GLM, Kimi, OpenAI, Claude, Gemini). Press a global shortcut from anywhere to translate instantly.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TransLite",
  alternateName: ["translite", "Translite"],
  description:
    "Free, open-source desktop translation app that combines local offline ONNX models with online LLM providers. Global shortcut for instant translation on Windows and macOS.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Windows, macOS",
  url: "https://translite.guoziyang.com",
  downloadUrl: "https://translite.guoziyang.com/download",
  softwareVersion: "0.1.0",
  image: "https://translite.guoziyang.com/icon.png",
  license: "https://opensource.org/licenses/MIT",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "guoziyangnb",
    url: "https://github.com/guoziyangnb",
  },
  sameAs: ["https://github.com/guoziyangnb/translite"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
