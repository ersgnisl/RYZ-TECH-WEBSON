import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 mb-6 select-none">
          404
        </p>
        <h1 className="heading-sm mb-4">Sayfa Bulunamadı</h1>
        <p className="text-[var(--text-secondary)] mb-10 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            Ana Sayfaya Dön
          </Link>
          <Link href="/contact" className="btn-ghost">
            İletişime Geç
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
