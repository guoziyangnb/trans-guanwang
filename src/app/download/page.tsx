import type { Metadata } from "next";
import DownloadContent from "@/components/pages/DownloadContent";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download TransLite for Windows or macOS. Free and open-source desktop translation app with local ONNX models and multi-provider LLM support.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return <DownloadContent />;
}
