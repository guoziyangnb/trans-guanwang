import type { Metadata } from "next";
import DownloadContent from "@/components/pages/DownloadContent";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download TransLite for Windows, macOS, or Linux. Free and open source desktop translation app.",
};

export default function DownloadPage() {
  return <DownloadContent />;
}
