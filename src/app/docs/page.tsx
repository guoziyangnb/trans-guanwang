import type { Metadata } from "next";
import DocsContent from "@/components/pages/DocsContent";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Get started with TransLite — installation guide, configuration, provider setup, local model management, keyboard shortcuts, and usage tracking.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return <DocsContent />;
}
