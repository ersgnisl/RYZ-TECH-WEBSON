import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Performans pazarlama, yaratıcı prodüksiyon ve kampanya stratejisi hizmetleri. Ölçülebilir sonuçlar için RYZ Tech.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
