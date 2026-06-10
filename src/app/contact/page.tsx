import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the TransLite team — reach out via email, GitHub, or join our WeChat group.",
};

export default function ContactPage() {
  return <ContactContent />;
}
