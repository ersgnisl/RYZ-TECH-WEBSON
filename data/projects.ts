export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "E-ticaret" | "B2B" | "Kreatif" | "Web & Dijital";
  categoryEn: "E-commerce" | "B2B" | "Creative" | "Web & Digital";
  year: string;
  tags: string[];
  tagsEn: string[];
  shortDesc: string;
  shortDescEn: string;
  coverColor: string;
  coverGradient: string;
  logo: string;
  websiteUrl?: string;
  summary: string;
  summaryEn: string;
  goal: string;
  goalEn: string;
  solution: string;
  solutionEn: string;
  results: string;
  resultsEn: string;
  metrics: {
    label: string;
    labelEn: string;
    value: string;
    valueEn: string;
    description: string;
    descriptionEn: string;
  }[];
  services: string[];
  servicesEn: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "loles",
    title: "Lole's Growth Engine",
    client: "Lole's",
    category: "E-ticaret",
    categoryEn: "E-commerce",
    year: "2024",
    tags: ["Meta Ads", "Google Ads", "Shopify", "UGC", "Kreatif Strateji"],
    tagsEn: ["Meta Ads", "Google Ads", "Shopify", "UGC", "Creative Strategy"],
    shortDesc: "Doğal bakım markasının Türkiye pazarına girişini ve büyüme sistemini kurduk.",
    shortDescEn: "We led the brand’s entry into the Turkish market and built its growth system.",
    coverColor: "#10b981",
    coverGradient: "from-emerald-600 via-teal-600 to-green-600",
    logo: "/clients/loleslogo.png",
    summary:
      "Lole's, Diora Kimya'nın doğal kişisel bakım & ev bakım kategorisindeki markası. Markanın Türkiye pazarına girişini yönettik ve büyüme sistemini kurduk: performans pazarlama, kreatif strateji/üretim ve Shopify operasyonları tek çatı altında ilerledi.",
    summaryEn:
      "Lole's is Diora Kimya’s brand in the natural personal care and home care category. We managed its entry into the Turkish market and built a growth system where performance marketing, creative strategy/production, and Shopify operations ran under one roof.",
    goal:
      "Türkiye'de sürdürülebilir büyüme ve kârlı, ölçeklenebilir acquisition yapısı kurmak. Kreatif üretimi test odaklı, düzenli bir sisteme bağlamak. Shopify panel/operasyon süreçlerini hızlandırıp dönüşüm odaklı iyileştirmek.",
    goalEn:
      "Build sustainable growth in Turkey with a profitable, scalable acquisition engine. Systematize creative production around testing. Speed up Shopify panel/ops processes and improve conversion performance.",
    solution:
      "Meta & Google hesaplarını yeniden yapılandırdık: segmentasyon, retargeting ve ölçek planıyla. Kreatif stratejiyi kurduk ve içerikleri ürettik (UGC yaklaşımı + statik/video testleri). Sürekli kreatif test döngüsüyle kazanan formatları ölçekledik. Shopify panel yönetimini ve kampanya operasyonlarını üstlendik: ürün/koleksiyon/kampanya akışı ve temel CRO.",
    solutionEn:
      "We rebuilt Meta & Google accounts with segmentation, retargeting, and a scaling plan. We set the creative strategy and produced content (UGC approach + static/video testing). We scaled winning formats through a continuous creative testing loop. We managed Shopify panel and campaign operations, including product/collection/campaign flow and core CRO.",
    results:
      "Türkiye pazarında Lole's için ölçeklenebilir büyüme altyapısı kuruldu: daha stabil performans, daha hızlı operasyon, netleşen kazanan kreatif formatlar ve veriye dayalı optimizasyon rutini.",
    resultsEn:
      "A scalable growth foundation was built for Lole’s in Turkey: more stable performance, faster operations, clearer winning creative formats, and a data-driven optimization routine.",
    metrics: [
      { label: "Kanal Kurulumu", labelEn: "Channel Setup", value: "3", valueEn: "3", description: "Meta, Google, Shopify", descriptionEn: "Meta, Google, Shopify" },
      { label: "Kreatif Test", labelEn: "Creative Tests", value: "40+", valueEn: "40+", description: "Aylık içerik testi", descriptionEn: "Monthly content tests" },
      { label: "Operasyon", labelEn: "Operations", value: "Tam", valueEn: "Full", description: "Uçtan uca yönetim", descriptionEn: "End-to-end management" },
    ],
    services: ["Performans Pazarlama", "Yaratıcı Prodüksiyon", "Shopify Yönetimi"],
    servicesEn: ["Performance Marketing", "Creative Production", "Shopify Management"],
    featured: true,
  },
  {
    slug: "michaels-official",
    title: "Michael's Growth Engine",
    client: "Michael's Official",
    category: "Web & Dijital",
    categoryEn: "Web & Digital",
    year: "2024",
    tags: ["Shopify", "Web Tasarım", "Meta Ads", "Google Ads", "E-ticaret"],
    tagsEn: ["Shopify", "Web Design", "Meta Ads", "Google Ads", "E-commerce"],
    shortDesc: "Shopify üzerinden web sitesi kurulumu ve dijital büyüme altyapısı oluşturduk.",
    shortDescEn: "We built a Shopify website and a digital growth foundation.",
    coverColor: "#1a1a2e",
    coverGradient: "from-slate-800 via-gray-800 to-zinc-900",
    logo: "/clients/micheallogo.png",
    websiteUrl: "https://www.michaelsofficial.com/tr",
    summary:
      "Michael's Official için Shopify üzerinden web sitesini oluşturduk ve dijital büyüme altyapısını kurduk. Marka dili ve büyüme süreçlerini tek bir çatı altında yapılandırıyoruz.",
    summaryEn:
      "We built the Shopify website for Michael’s Official and set up the digital growth foundation. We structure brand language and growth processes under one roof.",
    goal:
      "Tutarlı marka dili ve ölçülebilir büyüme. Satışa hazır, profesyonel bir e-ticaret altyapısı oluşturmak.",
    goalEn:
      "Create consistent brand language and measurable growth with a sales-ready, professional e-commerce infrastructure.",
    solution:
      "Shopify site kurulumu ve temel e-ticaret altyapısı: koleksiyon/ürün yapısı, site akışı. Reklam hesaplarının kurulumu (Meta/Google) ve kampanya üretim-yönetim süreçlerinin sahiplenilmesi. İçerik stratejisi yönlendirmesi ve plan önerileri.",
    solutionEn:
      "Shopify site setup and core e-commerce infrastructure: collection/product structure and site flow. Ad account setup (Meta/Google) and ownership of campaign production/management. Content strategy guidance and plan recommendations.",
    results:
      "Michael's için satışa hazır Shopify altyapısı ve performans pazarlama operasyonları kuruldu; ölçülebilir büyümeye uygun sürdürülebilir bir yönetim düzeni oluşturuldu.",
    resultsEn:
      "A sales-ready Shopify foundation and performance marketing operations were established, creating a sustainable management system aligned with measurable growth.",
    metrics: [
      { label: "Web Sitesi", labelEn: "Website", value: "Shopify", valueEn: "Shopify", description: "Tam kurulum ve yönetim", descriptionEn: "Full setup and management" },
      { label: "Kanallar", labelEn: "Channels", value: "Meta + Google", valueEn: "Meta + Google", description: "Reklam hesabı kurulumu", descriptionEn: "Ad account setup" },
      { label: "Süreç", labelEn: "Process", value: "Uçtan Uca", valueEn: "End-to-end", description: "Kampanya yönetimi", descriptionEn: "Campaign management" },
    ],
    services: ["Web & Dijital Ürün", "Performans Pazarlama", "İçerik Stratejisi"],
    servicesEn: ["Web & Digital Product", "Performance Marketing", "Content Strategy"],
    featured: true,
  },
  {
    slug: "momenta-yasam",
    title: "Momenta Yaşam Growth Engine",
    client: "Momenta Yaşam",
    category: "E-ticaret",
    categoryEn: "E-commerce",
    year: "2024",
    tags: ["Meta Ads", "AIGC", "Raporlama", "Kampanya Stratejisi"],
    tagsEn: ["Meta Ads", "AIGC", "Reporting", "Campaign Strategy"],
    shortDesc: "Satış süreçlerini uçtan uca yönetip ROAS ve dönüşüm hedeflerine odaklandık.",
    shortDescEn: "We managed end-to-end sales operations and focused on ROAS and conversion targets.",
    coverColor: "#3b4de8",
    coverGradient: "from-blue-700 via-indigo-700 to-violet-700",
    logo: "/clients/momentalogo.png",
    summary:
      "Momenta Yaşam'ın satış süreçlerini uçtan uca yönetiyoruz: kampanya stratejisini kuruyor, reklamları optimize ediyor ve performansı düzenli olarak raporluyoruz. Kreatif üretimi statik ve AI görsellerle hızlandırarak büyüme döngüsünü sürekli besliyoruz.",
    summaryEn:
      "We manage Momenta Yaşam’s sales operations end to end: building campaign strategy, optimizing ads, and reporting performance regularly. We accelerate creative production with static and AI visuals to continuously fuel the growth cycle.",
    goal:
      "Daha iyi ROAS, daha güçlü dönüşüm ve sürdürülebilir büyüme. Kreatif test hızını artırmak ve optimizasyon döngüsünü netleştirmek.",
    goalEn:
      "Achieve better ROAS, stronger conversions, and sustainable growth by increasing creative testing speed and clarifying the optimization loop.",
    solution:
      "Kampanya stratejisi ve kanal yönetimi: kurulum, optimizasyon, ölçekleme. Düzenli performans raporlama ve aksiyon planları. Statik + AIGC (Yapay Zeka destekli) kreatif üretimiyle hızlı test/iterasyon. Ürün & fiyatlandırma çalışmalarına destek.",
    solutionEn:
      "Campaign strategy and channel management: setup, optimization, scaling. Regular performance reporting and action plans. Rapid testing/iteration with static + AIGC (AI-assisted) creative production. Support for product and pricing work.",
    results:
      "Daha hızlı kreatif test ve daha net optimizasyon döngüsüyle ROAS ve dönüşüm hedeflerine odaklanan, sürdürülebilir büyümeyi destekleyen bir satış sistemi kuruldu.",
    resultsEn:
      "A sales system focused on ROAS and conversion goals was built, supporting sustainable growth through faster creative testing and a clearer optimization loop.",
    metrics: [
      { label: "Kreatif Hız", labelEn: "Creative Velocity", value: "AIGC", valueEn: "AIGC", description: "AI destekli üretim sistemi", descriptionEn: "AI-assisted production system" },
      { label: "Raporlama", labelEn: "Reporting", value: "Haftalık", valueEn: "Weekly", description: "Düzenli performans takibi", descriptionEn: "Regular performance tracking" },
      { label: "Optimizasyon", labelEn: "Optimization", value: "Sürekli", valueEn: "Ongoing", description: "Test → öğren → ölçekle", descriptionEn: "Test → learn → scale" },
    ],
    services: ["Performans Pazarlama", "Yaratıcı Prodüksiyon", "AIGC", "Kampanya Stratejisi"],
    servicesEn: ["Performance Marketing", "Creative Production", "AIGC", "Campaign Strategy"],
    featured: true,
  },
  {
    slug: "gods-next-door",
    title: "Gods Next Door Growth Engine",
    client: "Gods Next Door",
    category: "E-ticaret",
    categoryEn: "E-commerce",
    year: "2024",
    tags: ["Meta Ads", "İçerik Yönetimi", "Kampanya Stratejisi", "Ürün Seçimi"],
    tagsEn: ["Meta Ads", "Content Management", "Campaign Strategy", "Product Selection"],
    shortDesc: "360° pazarlama yaklaşımıyla sıfırdan 6 haneli ciro seviyesine taşıdık.",
    shortDescEn: "With a 360° marketing approach, we scaled from zero to six-figure revenue.",
    coverColor: "#4a4a2a",
    coverGradient: "from-stone-800 via-neutral-800 to-zinc-800",
    logo: "/clients/godslogo.png",
    summary:
      "Gods Next Door için 360° pazarlama yaklaşımıyla reklam performansı, içerik yönetimi ve kampanya stratejisini uçtan uca yönetiyoruz. Sıfırdan kurulan sistemle marka 6 haneli cirolara taşındı.",
    summaryEn:
      "For Gods Next Door, we manage ad performance, content management, and campaign strategy end to end with a 360° marketing approach. The system built from scratch took the brand to six-figure revenue.",
    goal:
      "Ölçeklenebilir büyüme ve yeni sezonda büyümeyi taşıyacak ürünlerin belirlenmesi. Sıfırdan kurulacak bir dijital pazarlama altyapısı oluşturmak.",
    goalEn:
      "Build scalable growth and identify products that will carry growth into the new season. Create a digital marketing infrastructure from scratch.",
    solution:
      "Kampanya stratejisi: ürün odaklı plan, sezon kurgusu, bütçe dağılımı. Reklam performans yönetimi ve sürekli optimizasyon. İçerik yönetimi: kreatif plan + üretim akışı + test/iterasyon. Yeni sezon için ürün seçimi: performans verisiyle kazanan ürünlerin belirlenmesi.",
    solutionEn:
      "Campaign strategy: product-focused plan, seasonal structure, budget allocation. Ad performance management and continuous optimization. Content management: creative plan, production flow, and test/iteration. Product selection for the new season based on performance data.",
    results:
      "Kurulan 360° büyüme sistemiyle marka sıfırdan 6 haneli ciro seviyesine geldi; yeni sezon için ölçeklenecek ürün listesi ve kampanya planı hazırlandı.",
    resultsEn:
      "With the 360° growth system in place, the brand reached six-figure revenue from zero; a scalable product list and campaign plan for the new season were prepared.",
    metrics: [
      { label: "Ciro", labelEn: "Revenue", value: "6 Hane", valueEn: "6 Figures", description: "Sıfırdan kurulan sistem", descriptionEn: "System built from scratch" },
      { label: "Yaklaşım", labelEn: "Approach", value: "360°", valueEn: "360°", description: "Tam kapsamlı yönetim", descriptionEn: "Full-scope management" },
      { label: "Sezon Planı", labelEn: "Season Plan", value: "Hazır", valueEn: "Ready", description: "Ölçeklenecek ürün listesi", descriptionEn: "Scalable product list" },
    ],
    services: ["Performans Pazarlama", "İçerik Yönetimi", "Kampanya Stratejisi"],
    servicesEn: ["Performance Marketing", "Content Management", "Campaign Strategy"],
    featured: true,
  },
];
