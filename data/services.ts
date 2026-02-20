export interface ServiceDetail {
  slug: string;
  title: string;
  titleEn: string;
  shortTitle: string;
  shortTitleEn: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
  gradient: string;
  whatWeDo: string[];
  whatWeDoEn: string[];
  deliverables: string[];
  deliverablesEn: string[];
  tools: string[];
  kpis: { label: string; labelEn: string; value: string; change: string; changeEn: string; positive: boolean }[];
  faq: { question: string; questionEn: string; answer: string; answerEn: string }[];
  problem: string;
  problemEn: string;
  approach: string;
  approachEn: string;
  output: string;
  outputEn: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "performance-marketing",
    title: "Performans Pazarlama",
    titleEn: "Performance Marketing",
    shortTitle: "Performans",
    shortTitleEn: "Performance",
    tagline: "Her lira geri dönsün",
    taglineEn: "Make every dollar count",
    description:
      "Meta, Google ve programatik kanallar üzerinden ölçülebilir, optimize edilmiş reklamcılık. Verilere dayalı kararlarla bütçenizi en verimli şekilde kullanıyoruz.",
    descriptionEn:
      "Measurable, optimized advertising across Meta, Google, and programmatic channels. We use data-driven decisions to make your budget work at maximum efficiency.",
    icon: "TrendingUp",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    whatWeDo: [
      "Meta (Facebook & Instagram) reklam kampanyaları",
      "Google Search, Display ve YouTube reklamları",
      "TikTok, LinkedIn ve Yandex reklamları",
      "Retargeting ve CRM entegrasyon stratejileri",
      "A/B testi ve kreatif optimizasyon",
      "Gerçek zamanlı bütçe yönetimi ve bid stratejileri",
      "Attribution modelleme ve multi-touch analizi",
    ],
    whatWeDoEn: [
      "Meta (Facebook & Instagram) ad campaigns",
      "Google Search, Display, and YouTube ads",
      "TikTok, LinkedIn, and Yandex ads",
      "Retargeting and CRM integration strategies",
      "A/B testing and creative optimization",
      "Real-time budget management and bid strategies",
      "Attribution modeling and multi-touch analysis",
    ],
    deliverables: [
      "Haftalık performans raporları (Looker Studio)",
      "Kanallar arası karşılaştırmalı dashboard",
      "Aylık strateji güncelleme dökümanı",
      "Kreatif test matrisi ve önerileri",
      "Dönüşüm hunisi analiz raporu",
    ],
    deliverablesEn: [
      "Weekly performance reports (Looker Studio)",
      "Cross-channel comparative dashboard",
      "Monthly strategy update document",
      "Creative test matrix and recommendations",
      "Conversion funnel analysis report",
    ],
    tools: [
      "Meta Ads Manager",
      "Google Ads",
      "Google Analytics 4",
      "Looker Studio",
      "Meta Pixel",
      "Google Tag Manager",
      "Triple Whale",
      "Northbeam",
    ],
    kpis: [
      { label: "Ortalama ROAS", labelEn: "Average ROAS", value: "4.2x", change: "+38%", changeEn: "+38%", positive: true },
      { label: "CAC Düşüşü", labelEn: "CAC Reduction", value: "-41%", change: "YoY", changeEn: "YoY", positive: true },
      { label: "CTR İyileştirme", labelEn: "CTR Improvement", value: "+67%", change: "90 günde", changeEn: "in 90 days", positive: true },
    ],
    problem:
      "Çoğu marka reklam bütçesini verimli kullanamaz: yanlış hedeflemeler, yetersiz kreatifler ve attribution karmaşası ROI'yi gizler.",
    problemEn:
      "Most brands can’t use ad budgets efficiently: poor targeting, weak creatives, and attribution confusion hide ROI.",
    approach:
      "Önce veri altyapısını kurarız — piksel, GA4, GTM tam doğru kurulur. Sonra her kanal için özel strateji, bütçe dağılımı ve test planı oluştururuz. Haftalık sprint döngüleriyle hızlı iterasyon yaparız.",
    approachEn:
      "First we set up the data foundation — pixel, GA4, and GTM configured correctly. Then we build channel-specific strategy, budget allocation, and test plans. We iterate fast with weekly sprint cycles.",
    output:
      "Şeffaf raporlama, gerçek zamanlı dashboard ve kanıtlanmış büyüme rakamlarıyla tam kontrol sizde olur.",
    outputEn:
      "Transparent reporting, real-time dashboards, and proven growth metrics give you full control.",
    faq: [
      {
        question: "Minimum aylık reklam bütçesi ne olmalı?",
        questionEn: "What is the minimum monthly ad budget?",
        answer:
          "Anlamlı veriler üretmek için minimum 50.000 TL/ay reklam bütçesi öneriyoruz. Düşük bütçelerde optimizasyon döngüsü uzar, sonuçlar geç gelir.",
        answerEn:
          "To generate meaningful data, we recommend a minimum ad budget of 50,000 TL/month. With lower budgets, optimization cycles take longer and results come later.",
      },
      {
        question: "İlk sonuçları ne zaman görürüz?",
        questionEn: "When will we see the first results?",
        answer:
          "İlk 30 gün veri toplama ve temel optimizasyon dönemidir. 60-90. günden itibaren ölçeklenebilir büyüme sinyalleri ortaya çıkar.",
        answerEn:
          "The first 30 days are for data collection and baseline optimization. From days 60–90, scalable growth signals typically appear.",
      },
      {
        question: "Hangi sektörlerde deneyiminiz var?",
        questionEn: "Which industries do you have experience in?",
        answer:
          "E-ticaret, SaaS, fintech, eğitim ve hizmet sektörlerinde aktif kampanya yönetimi deneyimimiz var. Her sektörün dinamiklerini iyi anlıyoruz.",
        answerEn:
          "We actively manage campaigns in e-commerce, SaaS, fintech, education, and services. We understand the dynamics of each sector.",
      },
      {
        question: "Raporlama ne sıklıkla yapılıyor?",
        questionEn: "How often do you report?",
        answer:
          "Canlı Looker Studio dashboard'u 7/24 erişilebilir durumda. Haftalık e-posta özeti, aylık yüz yüze strateji toplantısı ve çeyreklik derin analiz sunuyoruz.",
        answerEn:
          "A live Looker Studio dashboard is available 24/7. We deliver a weekly email summary, a monthly strategy meeting, and quarterly deep dives.",
      },
    ],
  },
  {
    slug: "creative-production",
    title: "Yaratıcı Prodüksiyon",
    titleEn: "Creative Production",
    shortTitle: "Kreatif",
    shortTitleEn: "Creative",
    tagline: "Kaydırmayı durduran içerikler",
    taglineEn: "Scroll-stopping content",
    description:
      "Kaydırmayı durduran video, görsel ve içerikler. UGC & AIGC yaklaşımıyla marka kimliğinizle uyumlu, platforma özel, dönüştüren kreatifler tasarlar ve üretiriz.",
    descriptionEn:
      "Scroll-stopping videos, visuals, and content. Using UGC & AIGC, we design and produce platform-specific, conversion-focused creatives aligned with your brand identity.",
    icon: "Palette",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-pink-600",
    whatWeDo: [
      "Sosyal medya video prodüksiyonu (Reels, TikTok, YouTube Shorts)",
      "Statik ve animasyonlu reklam görselleri",
      "Marka kimliği ve görsel dil geliştirme",
      "UGC & AIGC içerik konsept ve yönetimi",
      "Ürün fotoğrafçılığı yönlendirme ve post-prodüksiyon",
      "Landing page ve kampanya mikrosit tasarımı",
      "Motion graphics ve 2D animasyon",
    ],
    whatWeDoEn: [
      "Social media video production (Reels, TikTok, YouTube Shorts)",
      "Static and animated ad creatives",
      "Brand identity and visual language development",
      "UGC & AIGC content concepting and management",
      "Product photography direction and post-production",
      "Landing page and campaign microsite design",
      "Motion graphics and 2D animation",
    ],
    deliverables: [
      "Aylık içerik takvimi ve prodüksiyon planı",
      "Platform optimize multi-format paketler",
      "Marka guideline güncellemeleri",
      "Kreatif performans analiz raporu",
      "Onaylı asset kütüphanesi",
    ],
    deliverablesEn: [
      "Monthly content calendar and production plan",
      "Platform-optimized multi-format packages",
      "Brand guideline updates",
      "Creative performance analysis report",
      "Approved asset library",
    ],
    tools: [
      "Adobe Creative Suite",
      "Figma",
      "CapCut Pro",
      "DaVinci Resolve",
      "Midjourney",
      "Canva Pro",
      "Frame.io",
      "Notion",
    ],
    kpis: [
      { label: "Hook Rate", labelEn: "Hook Rate", value: "%34", change: "+22pp", changeEn: "+22pp", positive: true },
      { label: "Watch Time", labelEn: "Watch Time", value: "+89%", change: "vs önceki", changeEn: "vs previous", positive: true },
      { label: "Kreatif CTR", labelEn: "Creative CTR", value: "+156%", change: "İlk 60 günde", changeEn: "in first 60 days", positive: true },
    ],
    problem:
      "Generic, template-based içerikler artık kalabalıkta kaybolup gidiyor. Markanıza özgü, platforma özel, durduruculu içerik üretmek uzmanlık ve hız ister.",
    problemEn:
      "Generic, template-based content gets lost in the noise. Brand-specific, platform-native, thumb-stopping content requires expertise and speed.",
    approach:
      "Önce marka sesini ve hedef kitlenin scroll davranışını anlıyoruz. Sonra hook-first yaklaşımla, platform algoritmasını bilen formatlar üretiyoruz. Her içerik test hipoteziyle başlar.",
    approachEn:
      "We first understand brand voice and audience scroll behavior. Then we create hook-first formats built for platform algorithms. Every piece starts with a test hypothesis.",
    output:
      "Tutarlı, güçlü kreatif akış. Performans verisiyle desteklenen, sürekli iyileşen içerik kütüphanesi.",
    outputEn:
      "A consistent, strong creative stream. A library that continuously improves with performance data.",
    faq: [
      {
        question: "Çekimlere siz mi geliyorsunuz?",
        questionEn: "Do you come on-site for shoots?",
        answer:
          "İstanbul merkezli prodüksiyon için sahadayız. Uzak lokasyonlar için brief, storyboard ve yönetmen notları hazırlayarak mevcut ekipleri yönlendiriyoruz.",
        answerEn:
          "We are on-site for Istanbul-based productions. For remote locations, we prepare briefs, storyboards, and director notes and guide local teams.",
      },
      {
        question: "Aylık kaç içerik üretilir?",
        questionEn: "How many pieces of content do you produce per month?",
        answer:
          "Pakete göre değişmekle birlikte tipik bir müşteri için aylık 20-40 adet unique asset (farklı format ve boyutlarda) üretiyoruz.",
        answerEn:
          "It varies by package, but for a typical client we produce 20–40 unique assets per month (across formats and sizes).",
      },
      {
        question: "UGC içeriklerini nasıl yönetiyorsunuz?",
        questionEn: "How do you manage UGC content?",
        answer:
          "Marka briefinden creator seçimine, içerik onayından reklam account'una yüklemeye kadar tüm süreci yönetiyoruz.",
        answerEn:
          "We manage the full process from brand brief to creator selection, content approvals, and uploading to ad accounts.",
      },
      {
        question: "İçeriklerin telif hakları kime ait?",
        questionEn: "Who owns the content rights?",
        answer:
          "Teslim edilen tüm içerikler müşteriye aittir. Sözleşme ile tam haklar devredilir, herhangi bir kullanım kısıtı yoktur.",
        answerEn:
          "All delivered content belongs to the client. Full rights are transferred by contract with no usage restrictions.",
      },
    ],
  },
  {
    slug: "campaign-content-strategy",
    title: "Kampanya & İçerik Stratejisi",
    titleEn: "Campaign & Content Strategy",
    shortTitle: "Strateji",
    shortTitleEn: "Strategy",
    tagline: "Önce strateji, sonra her şey",
    taglineEn: "Strategy first, then everything else",
    description:
      "Marka konumlandırmasından içerik mimarisine, editorial planlamadan kampanya takvimlerine — büyümeyi yönlendiren stratejik zemin.",
    descriptionEn:
      "From brand positioning to content architecture, from editorial planning to campaign calendars — the strategic foundation that drives growth.",
    icon: "LayoutGrid",
    color: "#22d3ee",
    gradient: "from-cyan-500 to-blue-600",
    whatWeDo: [
      "Marka konumlandırma ve mesaj mimarisi",
      "Kanallar arası içerik stratejisi ve editorial plan",
      "Rakip ve pazar analizi",
      "Kampanya konsepti ve 360° kampanya planı",
      "SEO içerik stratejisi ve anahtar kelime kümeleme",
      "Influencer & creator ekosistem haritalaması",
      "Sosyal medya kanal stratejisi ve KPI belirleme",
    ],
    whatWeDoEn: [
      "Brand positioning and messaging architecture",
      "Cross-channel content strategy and editorial plan",
      "Competitor and market analysis",
      "Campaign concept and 360° campaign plan",
      "SEO content strategy and keyword clustering",
      "Influencer & creator ecosystem mapping",
      "Social channel strategy and KPI definition",
    ],
    deliverables: [
      "Marka stratejisi dökümanı",
      "3-6 aylık içerik roadmap",
      "Kampanya konsept sunumu",
      "Haftalık içerik takvimi",
      "Aylık performans ve strateji revizyonu",
    ],
    deliverablesEn: [
      "Brand strategy document",
      "3–6 month content roadmap",
      "Campaign concept presentation",
      "Weekly content calendar",
      "Monthly performance and strategy revision",
    ],
    tools: [
      "Semrush",
      "Ahrefs",
      "BuzzSumo",
      "Notion",
      "Miro",
      "Sprout Social",
      "Brandwatch",
      "Hotjar",
    ],
    kpis: [
      { label: "Organik Büyüme", labelEn: "Organic Growth", value: "+210%", change: "6 ayda", changeEn: "in 6 months", positive: true },
      { label: "Engagement Rate", labelEn: "Engagement Rate", value: "5.8%", change: "+3.2pp", changeEn: "+3.2pp", positive: true },
      { label: "Lead Kalitesi", labelEn: "Lead Quality", value: "+89%", change: "MQL dönüşümü", changeEn: "MQL conversion", positive: true },
    ],
    problem:
      "Taktikler strateji olmadan sadece gürültü üretir. Çoğu marka 'ne üretelim?' sorusundan önce 'neden üretelim?' sorusunu sormaz.",
    problemEn:
      "Tactics without strategy create noise. Most brands ask “what should we produce?” before “why should we produce it?”",
    approach:
      "İşletme hedeflerinden geriye doğru çalışırız. Her içerik veya kampanya bir dönüşüm hipotezine bağlıdır. Veriyle desteklenmiş yaratıcılık, tahmine değil kanıta dayanır.",
    approachEn:
      "We work backward from business goals. Every piece of content or campaign is tied to a conversion hypothesis. Data-backed creativity relies on evidence, not guesswork.",
    output:
      "Yıl boyu çalışır bir strateji sistemi. Tutarlı marka sesi, ölçülebilir hedefler ve net öncelikler.",
    outputEn:
      "A strategy system that works year-round. Consistent brand voice, measurable goals, and clear priorities.",
    faq: [
      {
        question: "Strateji çalışması ne kadar sürer?",
        questionEn: "How long does the strategy work take?",
        answer:
          "İlk strateji dökümanını genellikle 3-4 haftada teslim ederiz. Bu süreçte keşif toplantıları, brief doldurma ve 2 revizyon turu dahildir.",
        answerEn:
          "We typically deliver the first strategy document in 3–4 weeks. This includes discovery sessions, brief completion, and two revision rounds.",
      },
      {
        question: "Influencer seçimini siz mi yapıyorsunuz?",
        questionEn: "Do you handle influencer selection?",
        answer:
          "Evet. Hedef kitleyle örtüşme, engagement kalitesi ve marka uyumu kriterlerine göre creator listesi hazırlayıp öneri sunarız.",
        answerEn:
          "Yes. We prepare and recommend a creator list based on audience fit, engagement quality, and brand alignment.",
      },
      {
        question: "SEO stratejisi için teknik altyapı gerekli mi?",
        questionEn: "Is technical infrastructure required for SEO strategy?",
        answer:
          "İçerik stratejisi için temel teknik SEO sağlıklı olmalı. Gerekirse teknik SEO ajanslarıyla iş birliği yapabiliriz.",
        answerEn:
          "For content strategy, foundational technical SEO should be healthy. If needed, we can collaborate with technical SEO agencies.",
      },
      {
        question: "Strateji dökümanı sonrası uygulama desteği veriyor musunuz?",
        questionEn: "Do you provide execution support after the strategy document?",
        answer:
          "Evet. Strateji + uygulama paketleri mevcuttur. Strateji ekibimiz, kreatif ve performans ekipleriyle entegre çalışır.",
        answerEn:
          "Yes. Strategy + execution packages are available. Our strategy team works closely with creative and performance teams.",
      },
    ],
  },
  {
    slug: "marketplace-management",
    title: "Pazaryeri Yönetimi",
    titleEn: "Marketplace Management",
    shortTitle: "Pazaryeri",
    shortTitleEn: "Marketplace",
    tagline: "Trendyol, Amazon, HB",
    taglineEn: "Trendyol, Amazon, HB",
    description:
      "Amazon, Trendyol ve Hepsiburada gibi pazaryerlerinde satıcı panel yönetimi, ürün optimizasyonu ve kampanya yönetimi ile satışlarınızı büyütüyoruz.",
    descriptionEn:
      "We grow your sales through seller panel management, product optimization, and campaign management on marketplaces like Amazon, Trendyol, and Hepsiburada.",
    icon: "ShoppingCart",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    whatWeDo: [
      "Amazon satıcı hesap kurulumu ve yönetimi",
      "Trendyol mağaza panel operasyonu",
      "Hepsiburada satıcı yönetimi",
      "Ürün başlık, açıklama ve görsel optimizasyonu",
      "Pazaryeri reklam kampanyaları (Sponsored Products)",
      "Fiyatlandırma ve rekabet analizi",
      "Stok takibi ve sipariş yönetimi koordinasyonu",
      "Kategori ve sıralama optimizasyonu",
    ],
    whatWeDoEn: [
      "Amazon seller account setup and management",
      "Trendyol store panel operations",
      "Hepsiburada seller management",
      "Product title, description, and image optimization",
      "Marketplace ad campaigns (Sponsored Products)",
      "Pricing and competitive analysis",
      "Inventory tracking and order management coordination",
      "Category and ranking optimization",
    ],
    deliverables: [
      "Haftalık pazaryeri performans raporu",
      "Aylık reklam bütçesi ve ROAS analizi",
      "Ürün optimizasyon önerileri",
      "Rakip fiyat ve konum takibi",
      "Kampanya optimizasyon aksiyon planı",
    ],
    deliverablesEn: [
      "Weekly marketplace performance report",
      "Monthly ad budget and ROAS analysis",
      "Product optimization recommendations",
      "Competitor price and position tracking",
      "Campaign optimization action plan",
    ],
    tools: [
      "Amazon Seller Central",
      "Trendyol Mağaza Paneli",
      "Hepsiburada Merchant Portal",
      "Helium 10",
      "Keepa",
      "Google Analytics 4",
      "Looker Studio",
    ],
    kpis: [
      { label: "Ortalama ROAS", labelEn: "Average ROAS", value: "3.8x", change: "+45%", changeEn: "+45%", positive: true },
      { label: "Satış Artışı", labelEn: "Sales Growth", value: "+120%", change: "3 ayda", changeEn: "in 3 months", positive: true },
      { label: "Organik Sıralama", labelEn: "Organic Rank", value: "Top 10", change: "Kategori", changeEn: "Category", positive: true },
    ],
    problem:
      "Pazaryerlerinde ürünler görünür olmadan, reklamlar optimize edilmeden ve operasyon yönetilmeden satmak giderek zorlaşıyor. Platformların algoritmaları ve kuralları sürekli değişiyor.",
    problemEn:
      "Selling on marketplaces gets harder without visibility, optimized ads, and strong operations. Platform algorithms and rules constantly change.",
    approach:
      "Her platformun algoritmasını ayrı ayrı anlayarak çalışırız. Ürün listelemelerini platform SEO'suna göre optimize eder, reklam kampanyalarını veriye dayalı yönetir ve operasyon süreçlerini hızlandırırız.",
    approachEn:
      "We work by understanding each platform’s algorithm. We optimize listings for platform SEO, manage ad campaigns with data, and speed up operations.",
    output:
      "Optimize edilmiş ürün sayfaları, yönetilen reklam kampanyaları ve düzenli raporlama ile sürdürülebilir pazaryeri büyümesi.",
    outputEn:
      "Sustainable marketplace growth through optimized product pages, managed ad campaigns, and regular reporting.",
    faq: [
      {
        question: "Hangi pazaryerlerinde çalışıyorsunuz?",
        questionEn: "Which marketplaces do you work on?",
        answer:
          "Öncelikle Trendyol, Amazon Türkiye ve Hepsiburada. Bunlara ek olarak N11 ve diğer yerel platformlara da destek verebiliyoruz.",
        answerEn:
          "Primarily Trendyol, Amazon Turkey, and Hepsiburada. We can also support N11 and other local platforms.",
      },
      {
        question: "Yeni bir mağaza açmama yardımcı olur musunuz?",
        questionEn: "Do you help open a new store?",
        answer:
          "Evet. Hesap açılışından ürün yüklemeye, kategori seçiminden ilk kampanya kurulumuna kadar tüm süreci yönetiyoruz.",
        answerEn:
          "Yes. We manage the full process from account setup to product uploads, category selection, and first campaign launch.",
      },
      {
        question: "Aylık reklam bütçesi ne olmalı?",
        questionEn: "What should the monthly ad budget be?",
        answer:
          "Pazaryeri reklamları için minimum 15.000 TL/ay reklam bütçesi öneriyoruz. Platform içi reklamların geri dönüşü genellikle daha hızlıdır.",
        answerEn:
          "For marketplace ads, we recommend a minimum of 15,000 TL/month. In-platform ads typically return faster.",
      },
      {
        question: "Stok yönetimini de yapıyor musunuz?",
        questionEn: "Do you manage inventory as well?",
        answer:
          "Stok koordinasyonunu takip edip bildiririz ancak fiziksel lojistik ve stok yönetimi müşteri sorumluluğundadır.",
        answerEn:
          "We track inventory coordination and report it, but physical logistics and stock management are the client’s responsibility.",
      },
    ],
  },
  {
    slug: "web-digital-product",
    title: "Web & Dijital Ürün",
    titleEn: "Web & Digital Product",
    shortTitle: "Web",
    shortTitleEn: "Web",
    tagline: "Dönüştüren arayüzler",
    taglineEn: "Interfaces that convert",
    description:
      "Shopify mağaza kurulumu, web sitesi tasarım & geliştirme ve CRO odaklı iyileştirmelerle markanızın dijital varlığını güçlendiriyoruz.",
    descriptionEn:
      "We strengthen your brand’s digital presence with Shopify store setup, website design & development, and CRO-focused improvements.",
    icon: "Globe",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    whatWeDo: [
      "Shopify mağaza kurulumu ve özelleştirmesi",
      "Web sitesi tasarım ve geliştirme",
      "Landing page tasarım ve optimizasyonu",
      "CRO (Dönüşüm Oranı Optimizasyonu) analizi",
      "Hız ve performans optimizasyonu",
      "E-ticaret altyapı kurulumu",
      "Ödeme entegrasyonları",
      "A/B testi ve kullanıcı deneyimi iyileştirme",
    ],
    whatWeDoEn: [
      "Shopify store setup and customization",
      "Website design and development",
      "Landing page design and optimization",
      "CRO (Conversion Rate Optimization) analysis",
      "Speed and performance optimization",
      "E-commerce infrastructure setup",
      "Payment integrations",
      "A/B testing and user experience improvements",
    ],
    deliverables: [
      "Teslim edilmiş, yayına hazır web sitesi veya mağaza",
      "Teknik dokümantasyon ve eğitim",
      "CRO analiz ve öneri raporu",
      "Hız testi ve performans raporu",
      "3 aylık teknik destek",
    ],
    deliverablesEn: [
      "Delivered, launch-ready website or store",
      "Technical documentation and training",
      "CRO analysis and recommendation report",
      "Speed test and performance report",
      "3 months of technical support",
    ],
    tools: [
      "Shopify",
      "Next.js",
      "Figma",
      "Hotjar",
      "PageSpeed Insights",
      "GTmetrix",
      "Google Tag Manager",
      "Vercel",
    ],
    kpis: [
      { label: "Dönüşüm Artışı", labelEn: "Conversion Lift", value: "+68%", change: "CRO sonrası", changeEn: "post-CRO", positive: true },
      { label: "Sayfa Hızı", labelEn: "Page Speed", value: "95+", change: "PageSpeed skoru", changeEn: "PageSpeed score", positive: true },
      { label: "Satış Büyümesi", labelEn: "Sales Growth", value: "+150%", change: "Launch sonrası", changeEn: "post-launch", positive: true },
    ],
    problem:
      "Yavaş, dönüştürmeyen ve kullanıcı dostu olmayan web siteleri dijital yatırımı boşa harcıyor. Teknik altyapı olmadan pazarlama kampanyaları tam verimini veremiyor.",
    problemEn:
      "Slow, non-converting, and unfriendly websites waste digital investment. Without solid technical infrastructure, marketing campaigns can’t perform at full capacity.",
    approach:
      "Önce kullanıcı yolculuğunu ve dönüşüm noktalarını analiz ederiz. Hızlı, SEO uyumlu ve dönüşüme odaklı bir dijital altyapı kurarız. Her proje, pazarlama hedeflerinizi destekleyecek şekilde tasarlanır.",
    approachEn:
      "We start by analyzing the user journey and conversion points. We build a fast, SEO-friendly, conversion-focused digital foundation. Every project is designed to support your marketing goals.",
    output:
      "Hızlı, mobil uyumlu, dönüştüren ve yönetimi kolay bir dijital altyapı. Teknik sorunlarla değil, büyümeyle ilgilenin.",
    outputEn:
      "A fast, mobile-friendly, conversion-focused digital foundation that’s easy to manage. Focus on growth, not technical issues.",
    faq: [
      {
        question: "Ne kadar sürede site teslim edilir?",
        questionEn: "How long does delivery take?",
        answer:
          "Scope'a bağlı olarak 2-6 hafta arasında. Shopify temalı siteler daha hızlı, custom geliştirmeler daha uzun sürebilir.",
        answerEn:
          "Depending on scope, delivery is typically 2–6 weeks. Shopify theme sites are faster; custom builds may take longer.",
      },
      {
        question: "Shopify ile custom kodlama yapıyor musunuz?",
        questionEn: "Do you do custom Shopify development?",
        answer:
          "Evet. Liquid, JavaScript ve API entegrasyonlarıyla özelleştirilmiş Shopify çözümleri geliştiriyoruz.",
        answerEn:
          "Yes. We build customized Shopify solutions with Liquid, JavaScript, and API integrations.",
      },
      {
        question: "Siteyi teslim aldıktan sonra kendim yönetebilir miyim?",
        questionEn: "Can I manage the site after delivery?",
        answer:
          "Kesinlikle. Teslimatta kapsamlı eğitim ve dokümantasyon sunuyoruz. Ayrıca aylık bakım paketlerimiz de mevcut.",
        answerEn:
          "Absolutely. We provide comprehensive training and documentation at handoff. Monthly maintenance packages are also available.",
      },
      {
        question: "SEO çalışması dahil mi?",
        questionEn: "Is SEO included?",
        answer:
          "Teknik SEO (sayfa hızı, meta etiketler, schema markup) dahildir. İçerik SEO için Kampanya & İçerik Stratejisi hizmetimizle birlikte çalışmanızı öneririz.",
        answerEn:
          "Technical SEO (page speed, meta tags, schema markup) is included. For content SEO, we recommend pairing with our Campaign & Content Strategy service.",
      },
    ],
  },
];
