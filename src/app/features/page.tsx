import type { Metadata } from "next";
import FeaturesContent from "@/components/pages/FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all features of TransLite - local translation, multi-provider LLM support, global shortcuts, usage tracking, and more.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
