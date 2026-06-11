import type { Metadata } from "next";
import DownloadContent from "@/components/pages/DownloadContent";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download TransLite for Windows or macOS. Free and open source desktop translation app.",
};

export default function DownloadPage() {
  return <DownloadContent />;
}
