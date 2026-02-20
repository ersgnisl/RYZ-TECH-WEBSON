import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "RYZ Tech ile iletişime geçin. Brief gönderin, size özel strateji hazırlayalım.",
};

export default function ContactPage() {
  return <ContactClient />;
}
