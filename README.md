# RYZ Tech — Dijital Pazarlama & Teknoloji Ajansı

Modern, premium ajans web sitesi. Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion ile geliştirildi.

## Kurulum

### 1. Bağımlılıkları Yükle

```bash
cd ryz-tech
npm install
```

### 2. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

### 3. Production Build

```bash
npm run build
npm start
```

## Teknoloji Yığını

| Teknoloji | Kullanım |
|-----------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Tip güvenliği |
| Tailwind CSS | Stil sistemi |
| Framer Motion | Animasyonlar |
| lucide-react | İkonlar |
| sonner | Toast bildirimleri |
| clsx + tailwind-merge | Class birleştirme |

## Sayfa Yapısı

```
/                          → Ana Sayfa
/services                  → Hizmetler Listesi
/services/performance-marketing        → Performans Pazarlama Detay
/services/creative-production          → Yaratıcı Prodüksiyon Detay
/services/campaign-content-strategy   → Kampanya & İçerik Stratejisi Detay
/work                      → Projeler & İş Ortakları
/work/[slug]               → Case Study Detay
/team                      → Takım Listesi
/team/[slug]               → Ekip Üyesi Profili
/contact                   → İletişim Formu
```

## Dosya Yapısı

```
ryz-tech/
├── app/                   # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global stiller + CSS değişkenleri
│   ├── page.tsx            # Ana Sayfa
│   ├── not-found.tsx       # 404 Sayfası
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── team/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glassmorphism navbar
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionHeader.tsx
│   │   ├── Badge.tsx
│   │   ├── GlowCard.tsx    # 3D tilt + glow kartlar
│   │   ├── MetricCard.tsx  # KPI metrik kartları
│   │   └── AccordionFAQ.tsx
│   ├── home/
│   │   ├── Hero.tsx        # Animated orbs + headline
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── ProcessSection.tsx
│   │   └── TeamPreview.tsx
│   └── motion/
│       ├── FadeIn.tsx      # Scroll-triggered fade
│       └── AnimatedOrbs.tsx
├── data/
│   ├── services.ts         # Hizmet içerikleri
│   ├── projects.ts         # Case study verileri
│   └── team.ts             # Ekip üyeleri
└── lib/
    └── utils.ts            # cn() yardımcı fonksiyonu
```

## Tasarım Sistemi

### Renkler (CSS Variables)
```css
--bg-primary: #06060f
--accent-primary: #6366f1  (indigo)
--accent-secondary: #8b5cf6 (violet)
--accent-neon: #22d3ee     (cyan)
```

### Özellikler
- **Koyu tema** + neon vurgular + subtle glassmorphism
- **Noise grain overlay** arka plan dokusu
- **Animated orbs** hero bölümünde
- **3D tilt + glow** kart hover efektleri
- **Sticky blur navbar** scroll animasyonu
- **Mobile overlay menu** stagger animasyonlarıyla
- **Scroll-triggered animations** tüm sayfalarda
- **A11y**: ARIA labels, focus rings, semantic HTML, alt metinler
- **SEO**: metadata, openGraph, canonical URL sistemi

## İletişim Formu

Form gönderimi şu an simüle edilmektedir (setTimeout). Gerçek bir API endpoint'e bağlamak için `app/contact/page.tsx` içindeki `handleSubmit` fonksiyonundaki simülasyon yerine fetch çağrısı ekleyin.
