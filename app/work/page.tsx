import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Projeler & İş Ortakları",
  description:
    "RYZ Tech case study'leri ve başarı hikayeleri. E-ticaret, B2B ve kreatif projeler.",
};

export default function WorkPage() {
  return <WorkClient />;
}
