export type Lang = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      work: "Projeler",
      team: "Takımımız",
      blog: "Blog",
      contact: "İletişim",
      cta: "Brief Al",
      menu: "Menü",
      closeMenu: "Menüyü kapat",
      openMenu: "Menüyü aç",
    },
    hero: {
      eyebrow: "İstanbul Merkezli Dijital Ajans",
      title: "Dijital Dünyada",
      titleHighlight: "Fark",
      titleEnd: "Yaratıyoruz",
      subtitle:
        "Performans pazarlamadan yaratıcı prodüksiyona — ölçülebilir sonuçlar, kalıcı marka izleri. Markanızın gerçek potansiyelini birlikte ortaya çıkarıyoruz.",
      cta: "Brief Al",
      ctaSecondary: "Projeleri Gör",
    },
    services: {
      eyebrow: "Hizmetlerimiz",
      title: "Büyümenizi hızlandıran",
      titleHighlight: "çözümler",
      subtitle:
        "Strateji, kreatif ve performansı bir arada sunuyoruz. Her hizmet, ölçülebilir sonuçlara odaklanır.",
      viewAll: "Tüm Hizmetleri Gör",
      details: "Detayları İncele",
      items: {
        performance: {
          title: "Performans Pazarlama",
          tagline: "Her lira geri dönsün",
          description:
            "Meta, Google, TikTok, LinkedIn ve Yandex üzerinden ölçülebilir, optimize edilmiş reklamcılık. Verilere dayalı kararlarla bütçenizi en verimli şekilde kullanıyoruz.",
          items: [
            "Meta & Google Reklamları",
            "TikTok, LinkedIn & Yandex",
            "Attribution Modelleme",
            "A/B Test & Optimizasyon",
          ],
        },
        creative: {
          title: "Yaratıcı Prodüksiyon",
          tagline: "Kaydırmayı durduran içerikler",
          description:
            "Kaydırmayı durduran video, görsel ve içerikler. UGC & AIGC yaklaşımıyla marka kimliğinizle uyumlu, platforma özel, dönüştüren kreatifler üretiriz.",
          items: [
            "Video & Reels Prodüksiyonu",
            "UGC & AIGC İçerik Üretimi",
            "Görsel Tasarım",
            "Kreatif Test Döngüsü",
          ],
        },
        marketplace: {
          title: "Pazaryeri Yönetimi",
          tagline: "Trendyol, Amazon, HB",
          description:
            "Amazon, Trendyol ve Hepsiburada gibi pazaryerlerinde satıcı panel yönetimi, ürün optimizasyonu ve kampanya yönetimi ile satışlarınızı büyütüyoruz.",
          items: [
            "Amazon Satıcı Yönetimi",
            "Trendyol Panel Yönetimi",
            "Hepsiburada Yönetimi",
            "Ürün Optimizasyonu & Reklam",
          ],
        },
        web: {
          title: "Web & Dijital Ürün",
          tagline: "Dönüştüren arayüzler",
          description:
            "Shopify mağaza kurulumu, web sitesi tasarım & geliştirme ve CRO odaklı iyileştirmelerle markanızın dijital varlığını güçlendiriyoruz.",
          items: [
            "Shopify Mağaza Kurulumu",
            "Web Sitesi Tasarım & Geliştirme",
            "CRO & Dönüşüm Optimizasyonu",
            "E-ticaret Altyapısı",
          ],
        },
        strategy: {
          title: "Kampanya & İçerik Stratejisi",
          tagline: "Önce strateji, sonra her şey",
          description:
            "Marka konumlandırmasından içerik mimarisine — büyümeyi yönlendiren stratejik zemin. Veriyle desteklenen yaratıcılık.",
          items: [
            "Marka Konumlandırma",
            "Editorial Planlama",
            "SEO & Influencer Stratejisi",
            "Rakip & Pazar Analizi",
          ],
        },
      },
    },
    servicesPage: {
      eyebrow: "Hizmetler",
      title: "İşinizi büyüten",
      titleHighlight: "5 disiplin",
      subtitle:
        "Her hizmetimiz, stratejik düşünce ve kanıtlanmış metodolojilerle desteklenir. Taktikler değil, sistemler kuruyoruz.",
      whatWeDo: "Neler Yapıyoruz",
      tools: "Araçlar & Platformlar",
      deliverables: "Teslim Edilenler",
      ctaTag: "Hazır mısınız?",
      ctaTitle: "Markanız için ne yapabiliriz?",
      ctaSubtitle:
        "Bir brief ile başlayın. Hedeflerinizi anlayalım, birlikte doğru çözümü bulalım.",
      viewDetailsAria: "detaylarını gör",
    },
    serviceDetail: {
      breadcrumbLabel: "Hizmetler",
      backAria: "Hizmetler listesine geri dön",
      ctaAria: "Bu hizmet için brief al",
      problem: "Problem",
      approach: "Yaklaşım",
      output: "Çıktı",
      scopeTag: "Kapsam",
      whatWeDoTitle: "Neler yapıyoruz?",
      deliverablesTag: "Teslim Edilenler",
      deliverablesTitle: "Ne alırsınız?",
      tools: "Araçlar & Platformlar",
      faqTitle: "Sık Sorulan Sorular",
      faqSubtitle: "Merak ettikleriniz için kısa cevaplar.",
      readyTitle: "{service} hizmeti için hazır mısınız?",
      readySubtitle: "Projenizi paylaşın, size özel bir teklif hazırlayalım.",
    },
    process: {
      eyebrow: "Nasıl Çalışıyoruz",
      title: "Çalışma sürecimiz,",
      titleHighlight: "4 adımda",
      subtitle:
        "Her proje aynı disiplinle başlar: önce anla, sonra planla, üret ve optimize et.",
      steps: [
        {
          title: "Keşif",
          description:
            "Hedeflerinizi, pazarınızı ve rakiplerinizi derinlemesine anlıyoruz. Veri toplayıp analiz ediyoruz.",
        },
        {
          title: "Strateji",
          description:
            "Kanal seçimi, mesaj mimarisi ve bütçe planlamasını net KPI'larla belirliyoruz.",
        },
        {
          title: "Üretim",
          description:
            "Kreatif üretim, kampanya kurulumu ve tüm teknik altyapıyı hayata geçiriyoruz.",
        },
        {
          title: "Optimizasyon",
          description:
            "A/B testler, gerçek zamanlı raporlama ve sürekli iyileştirme döngüsüyle büyütüyoruz.",
        },
      ],
    },
    projects: {
      eyebrow: "Projeler",
      title: "Sahadan",
      titleHighlight: "sonuçlar",
      subtitle: "Gerçek markalar, ölçülebilir büyüme.",
      viewAll: "Tüm Projeler",
      visitSite: "Siteyi Ziyaret Et",
      back: "← Projelere dön",
      breadcrumb: "Projeler",
      backAria: "Projelere geri dön",
      summaryLabel: "Özet",
      goalLabel: "Hedef",
      solutionLabel: "Çözüm",
      resultsLabel: "Sonuçlar",
      servicesUsed: "Kullanılan Hizmetler",
      similarCta: "Benzer Proje İçin Brief Al",
      otherProjects: "Diğer Projeler",
    },
    team: {
      eyebrow: "Takımımız",
      title: "İşini seven",
      titleHighlight: "uzmanlar",
      subtitle:
        "Strateji, kreatif üretim ve performans pazarlamasını tek çatı altında yürüterek markaların dijitalde gerçek sonuçlar almasını sağlıyoruz. Hızlı test eder, hızlı öğrenir ve sürekli optimize ederiz.",
      viewAll: "Tüm Takım",
      linkedin: "LinkedIn",
      detail: {
        breadcrumbLabel: "Takım",
        backAria: "Takıma geri dön",
        expertise: "Uzmanlıklar",
        tools: "Araçlar",
        otherMembers: "Diğer Ekip Üyeleri",
        fullTeam: "Tüm Takım",
      },
      hero: {
        title: "Sizi büyütecek",
        titleHighlight: "ekip",
        subtitle: "Strateji, kreatif ve performansı bir arada yürütüyoruz.",
      },
      culture: {
        eyebrow: "Kültürümüz",
        title: "Birlikte inşa ediyoruz",
        desc: "RYZ Tech'te her fikir dinlenir, her deney değer taşır. Müşterilerimizin başarısı, ekibimizin ilham kaynağıdır.",
        cta: "Ekibe Katıl",
        values: [
          { label: "Uzak & Hibrit", desc: "Esneklik önce gelir" },
          { label: "Sürekli Öğrenme", desc: "Hızlı test, hızlı iterasyon" },
          { label: "Şeffaf Süreçler", desc: "Herkes her şeyi bilir" },
          { label: "Sonuç Odaklılık", desc: "Output, input'tan önemlidir" },
        ],
      },
    },
    contact: {
      eyebrow: "İletişim",
      title: "Konuşalım,",
      titleHighlight: "büyüyelim",
      subtitle: "Brief paylaşın, hedeflerinizi anlayalım. Size özel bir strateji hazırlayalım.",
      form: {
        title: "Brief Gönderin",
        name: "Ad Soyad",
        namePlaceholder: "Ahmet Yılmaz",
        email: "E-posta",
        emailPlaceholder: "ahmet@sirket.com",
        company: "Şirket",
        companyPlaceholder: "Şirket adı",
        budget: "Aylık Bütçe Aralığı",
        budgetPlaceholder: "Bütçe aralığı seçin",
        message: "Mesajınız",
        messagePlaceholder: "Projenizi, hedeflerinizi ve beklentilerinizi kısaca anlatın...",
        submit: "Brief Gönder",
        sending: "Gönderiliyor...",
        successTitle: "Mesajınız Alındı!",
        successDesc: "12 saat içinde size geri döneceğiz.",
        nameRequired: "İsim zorunludur.",
        emailRequired: "E-posta zorunludur.",
        emailInvalid: "Geçerli bir e-posta girin.",
        messageRequired: "Mesaj zorunludur.",
      },
      info: {
        title: "İletişim Bilgileri",
        email: "E-posta",
        phone: "Telefon",
        office: "Ofis",
      },
      social: {
        title: "Sosyal Medya",
      },
      response: {
        label: "Yanıt süresi",
        value: "12 saat",
        desc: "Gelen brifflere 12 saat içinde yanıt veriyoruz.",
      },
      howWeWork: {
        eyebrow: "Çalışma Modelimiz",
        title: "Nasıl çalışıyoruz?",
        steps: [
          {
            step: "01",
            title: "Brief & Keşif",
            desc: "Formu dolduruyorsunuz. 12 saat içinde sizi arıyoruz. Hedefleri, bütçeyi ve beklentileri anlıyoruz.",
          },
          {
            step: "02",
            title: "Teklif & Onay",
            desc: "Özelleştirilmiş strateji teklifimizi sunuyoruz. Revize edip onaylıyorsunuz.",
          },
          {
            step: "03",
            title: "Başlangıç",
            desc: "Onboarding, hesap erişimleri ve ilk sprint planlamasıyla hızlıca başlıyoruz.",
          },
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Dijital pazarlama",
      titleHighlight: "içgörüleri",
      subtitle: "Performans pazarlama, kreatif strateji ve dijital büyüme üzerine içerikler.",
      readMore: "Devamını Oku",
      minRead: "dk okuma",
    },
    footer: {
      tagline: "Dijital dünyada fark yaratan markalar için strateji, kreatif ve performans — hepsi bir arada.",
      services: "Hizmetler",
      explore: "Keşfet",
      links: {
        services: [
          { label: "Performans Pazarlama", href: "/services/performance-marketing" },
          { label: "Yaratıcı Prodüksiyon", href: "/services/creative-production" },
          { label: "Kampanya Stratejisi", href: "/services/campaign-content-strategy" },
          { label: "Blog", href: "/blog" },
        ],
        explore: [
          { label: "Projeler", href: "/work" },
          { label: "Takımımız", href: "/team" },
          { label: "İletişim", href: "/contact" },
        ],
      },
      cta: {
        eyebrow: "Yeni proje mi?",
        title: "Birlikte büyüyelim.",
        desc: "Markanız için ne yapabileceğimizi konuşalım.",
        button: "Brief Al",
      },
      copyright: "Tüm hakları saklıdır.",
      city: "Şişli, İstanbul",
      agencyType: "Dijital Pazarlama & Teknoloji Ajansı",
    },
    budgetOptions: [
      { value: "", label: "Bütçe aralığı seçin" },
      { value: "10k-50k", label: "10.000 - 50.000 ₺/ay" },
      { value: "50k-150k", label: "50.000 - 150.000 ₺/ay" },
      { value: "150k-500k", label: "150.000 - 500.000 ₺/ay" },
      { value: "500k+", label: "500.000 ₺+/ay" },
      { value: "not-sure", label: "Henüz bilmiyorum" },
    ],
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      work: "Projects",
      team: "Our Team",
      blog: "Blog",
      contact: "Contact",
      cta: "Get a Brief",
      menu: "Menu",
      closeMenu: "Close menu",
      openMenu: "Open menu",
    },
    hero: {
      eyebrow: "Istanbul-Based Digital Agency",
      title: "Making a Difference in",
      titleHighlight: "the Digital",
      titleEnd: "World",
      subtitle:
        "From performance marketing to creative production — measurable results, lasting brand impressions. We unlock your brand's true potential together.",
      cta: "Get a Brief",
      ctaSecondary: "View Projects",
    },
    services: {
      eyebrow: "Our Services",
      title: "Solutions that",
      titleHighlight: "accelerate your growth",
      subtitle:
        "We deliver strategy, creative, and performance together. Every service is focused on measurable results.",
      viewAll: "View All Services",
      details: "View Details",
      items: {
        performance: {
          title: "Performance Marketing",
          tagline: "Every penny counts",
          description:
            "Measurable, optimized advertising across Meta, Google, TikTok, LinkedIn, and Yandex. We use your budget in the most efficient way possible with data-driven decisions.",
          items: [
            "Meta & Google Ads",
            "TikTok, LinkedIn & Yandex",
            "Attribution Modeling",
            "A/B Testing & Optimization",
          ],
        },
        creative: {
          title: "Creative Production",
          tagline: "Scroll-stopping content",
          description:
            "Scroll-stopping videos, visuals, and content. With UGC & AIGC approaches, we design and produce creatives aligned with your brand identity, platform-specific and conversion-focused.",
          items: [
            "Video & Reels Production",
            "UGC & AIGC Content",
            "Visual Design",
            "Creative Testing Loop",
          ],
        },
        marketplace: {
          title: "Marketplace Management",
          tagline: "Trendyol, Amazon, HB",
          description:
            "We grow your sales through seller panel management, product optimization, and campaign management on marketplaces like Amazon, Trendyol, and Hepsiburada.",
          items: [
            "Amazon Seller Management",
            "Trendyol Panel Management",
            "Hepsiburada Management",
            "Product Optimization & Ads",
          ],
        },
        web: {
          title: "Web & Digital Product",
          tagline: "Interfaces that convert",
          description:
            "We strengthen your brand's digital presence with Shopify store setup, website design & development, and CRO-focused improvements.",
          items: [
            "Shopify Store Setup",
            "Website Design & Development",
            "CRO & Conversion Optimization",
            "E-commerce Infrastructure",
          ],
        },
        strategy: {
          title: "Campaign & Content Strategy",
          tagline: "Strategy first, everything else follows",
          description:
            "From brand positioning to content architecture — the strategic foundation that drives growth. Creativity backed by data.",
          items: [
            "Brand Positioning",
            "Editorial Planning",
            "SEO & Influencer Strategy",
            "Competitor & Market Analysis",
          ],
        },
      },
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Five disciplines that",
      titleHighlight: "grow your business",
      subtitle:
        "Every service is backed by strategic thinking and proven methodologies. We build systems, not tactics.",
      whatWeDo: "What we do",
      tools: "Tools & Platforms",
      deliverables: "Deliverables",
      ctaTag: "Ready to start?",
      ctaTitle: "What can we do for your brand?",
      ctaSubtitle:
        "Start with a brief. Let’s understand your goals and find the right solution together.",
      viewDetailsAria: "details",
    },
    serviceDetail: {
      breadcrumbLabel: "Services",
      backAria: "Back to services",
      ctaAria: "Get a brief for this service",
      problem: "Problem",
      approach: "Approach",
      output: "Outcome",
      scopeTag: "Scope",
      whatWeDoTitle: "What we do",
      deliverablesTag: "Deliverables",
      deliverablesTitle: "What you get",
      tools: "Tools & Platforms",
      faqTitle: "FAQs",
      faqSubtitle: "Short answers to common questions.",
      readyTitle: "Ready for {service}?",
      readySubtitle: "Share your project and we’ll prepare a tailored proposal.",
    },
    process: {
      eyebrow: "How We Work",
      title: "Our process,",
      titleHighlight: "in 4 steps",
      subtitle:
        "Every project starts with the same discipline: understand, plan, produce, optimize.",
      steps: [
        {
          title: "Discovery",
          description:
            "We deeply understand your goals, market, and competitors. We collect and analyze data.",
        },
        {
          title: "Strategy",
          description:
            "We define channel selection, message architecture, and budget planning with clear KPIs.",
        },
        {
          title: "Production",
          description:
            "We execute creative production, campaign setup, and the full technical stack.",
        },
        {
          title: "Optimization",
          description:
            "We grow through A/B tests, real-time reporting, and continuous improvement.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Results from",
      titleHighlight: "the field",
      subtitle: "Real brands, measurable growth.",
      viewAll: "All Projects",
      visitSite: "Visit Website",
      back: "← Back to Projects",
      breadcrumb: "Projects",
      backAria: "Back to projects",
      summaryLabel: "Summary",
      goalLabel: "Goal",
      solutionLabel: "Solution",
      resultsLabel: "Results",
      servicesUsed: "Services Used",
      similarCta: "Get a Brief for a Similar Project",
      otherProjects: "Other Projects",
    },
    team: {
      eyebrow: "Our Team",
      title: "Experts who",
      titleHighlight: "love what they do",
      subtitle:
        "We run strategy, creative production, and performance marketing under one roof to help brands achieve real results digitally. We test fast, learn fast, and optimize continuously.",
      viewAll: "Full Team",
      linkedin: "LinkedIn",
      detail: {
        breadcrumbLabel: "Team",
        backAria: "Back to team",
        expertise: "Expertise",
        tools: "Tools",
        otherMembers: "Other Team Members",
        fullTeam: "Full Team",
      },
      hero: {
        title: "The team that will",
        titleHighlight: "grow your brand",
        subtitle: "We combine strategy, creative, and performance under one roof.",
      },
      culture: {
        eyebrow: "Our Culture",
        title: "We build together",
        desc: "At RYZ Tech, every idea is heard, every experiment has value. Our clients' success is our team's inspiration.",
        cta: "Join the Team",
        values: [
          { label: "Remote & Hybrid", desc: "Flexibility comes first" },
          { label: "Continuous Learning", desc: "Fast testing, fast iteration" },
          { label: "Transparent Processes", desc: "Everyone knows everything" },
          { label: "Results-Oriented", desc: "Output matters more than input" },
        ],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk,",
      titleHighlight: "let's grow",
      subtitle: "Share your brief, let us understand your goals. We'll prepare a custom strategy for you.",
      form: {
        title: "Send a Brief",
        name: "Full Name",
        namePlaceholder: "John Smith",
        email: "Email",
        emailPlaceholder: "john@company.com",
        company: "Company",
        companyPlaceholder: "Company name",
        budget: "Monthly Budget Range",
        budgetPlaceholder: "Select budget range",
        message: "Your Message",
        messagePlaceholder: "Tell us briefly about your project, goals, and expectations...",
        submit: "Send Brief",
        sending: "Sending...",
        successTitle: "Message Received!",
        successDesc: "We will get back to you within 12 hours.",
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email.",
        messageRequired: "Message is required.",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        office: "Office",
      },
      social: {
        title: "Social Media",
      },
      response: {
        label: "Response time",
        value: "12 hours",
        desc: "We respond to all briefs within 12 hours.",
      },
      howWeWork: {
        eyebrow: "How We Work",
        title: "Our process",
        steps: [
          {
            step: "01",
            title: "Brief & Discovery",
            desc: "You fill out the form. We call you within 12 hours. We understand your goals, budget, and expectations.",
          },
          {
            step: "02",
            title: "Proposal & Approval",
            desc: "We present our customized strategy proposal. You review, revise, and approve.",
          },
          {
            step: "03",
            title: "Kickoff",
            desc: "We start quickly with onboarding, account access, and first sprint planning.",
          },
        ],
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Digital marketing",
      titleHighlight: "insights",
      subtitle: "Content on performance marketing, creative strategy, and digital growth.",
      readMore: "Read More",
      minRead: "min read",
    },
    footer: {
      tagline: "Strategy, creative, and performance — all in one place — for brands that make a difference in the digital world.",
      services: "Services",
      explore: "Explore",
      links: {
        services: [
          { label: "Performance Marketing", href: "/services/performance-marketing" },
          { label: "Creative Production", href: "/services/creative-production" },
          { label: "Campaign Strategy", href: "/services/campaign-content-strategy" },
          { label: "Blog", href: "/blog" },
        ],
        explore: [
          { label: "Projects", href: "/work" },
          { label: "Our Team", href: "/team" },
          { label: "Contact", href: "/contact" },
        ],
      },
      cta: {
        eyebrow: "New project?",
        title: "Let's grow together.",
        desc: "Let's talk about what we can do for your brand.",
        button: "Get a Brief",
      },
      copyright: "All rights reserved.",
      city: "Şişli, Istanbul",
      agencyType: "Digital Marketing & Technology Agency",
    },
    budgetOptions: [
      { value: "", label: "Select budget range" },
      { value: "10k-50k", label: "₺10,000 - ₺50,000/mo" },
      { value: "50k-150k", label: "₺50,000 - ₺150,000/mo" },
      { value: "150k-500k", label: "₺150,000 - ₺500,000/mo" },
      { value: "500k+", label: "₺500,000+/mo" },
      { value: "not-sure", label: "Not sure yet" },
    ],
  },
};

export type Translations = (typeof translations)[Lang];
