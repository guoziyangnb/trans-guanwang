import type { Metadata } from "next";
import FeaturesContent from "@/components/pages/FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all features of TransLite — local ONNX translation, multi-provider LLM support (DeepSeek, GLM, Kimi, OpenAI, Claude, Gemini), global shortcut, JS-template usage tracking, and more.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
