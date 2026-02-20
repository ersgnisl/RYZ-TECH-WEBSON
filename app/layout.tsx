import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RYZ Tech | Dijital Pazarlama & Teknoloji Ajansı",
    template: "%s | RYZ Tech",
  },
  description:
    "Performans pazarlama, yaratıcı prodüksiyon ve kampanya stratejisi ile dijital dünyada fark yaratan markalar için RYZ Tech.",
  keywords: [
    "dijital pazarlama ajansı",
    "performans pazarlama",
    "meta ads",
    "google ads",
    "içerik stratejisi",
    "yaratıcı prodüksiyon",
    "istanbul dijital ajans",
  ],
  authors: [{ name: "RYZ Tech" }],
  creator: "RYZ Tech",
  metadataBase: new URL("https://ryztech.com.tr"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ryztech.com.tr",
    siteName: "RYZ Tech",
    title: "RYZ Tech | Dijital Pazarlama & Teknoloji Ajansı",
    description:
      "Performans pazarlama, yaratıcı prodüksiyon ve kampanya stratejisi — ölçülebilir sonuçlar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RYZ Tech | Dijital Pazarlama & Teknoloji Ajansı",
    description: "Performans pazarlama, yaratıcı prodüksiyon ve kampanya stratejisi.",
    creator: "@ryztech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          <div style={{ paddingTop: "var(--nav-height)" }}>
            {children}
          </div>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgba(10,10,26,0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f1f5f9",
                backdropFilter: "blur(12px)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
