export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  heroImage: string;
  intro: string[];
  approach: string[];
  approachImage?: string;
  tools: string[];
  deliverables: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    heroImage: "/images/dijital-pazarlama-hero.png",
    intro: [
      "Meta, Google, TikTok, LinkedIn ve Yandex platformlarında ölçülebilir, tamamen optimize edilmiş reklam stratejileri kurguluyoruz. Veriye dayalı analitik içgörülerle, dijital pazarlama bütçenizi en yüksek yatırım getirisi sağlayacak şekilde yönetiyoruz.",
      "Kampanyalarımızı kurgularken tahmine değil veriye güveniriz: her reklam seti gerçek zamanlı performans verisiyle izlenir, zayıf performans gösteren varyasyonlar hızlıca elenir, kazanan formatlar agresif şekilde ölçeklenir. Amacımız sadece tıklama değil, sürdürülebilir ve kârlı büyüme.",
    ],
    approach: [
      "Her kampanyayı huninin neresinde olduğunuza göre kurgularız: farkındalık, değerlendirme ve dönüşüm aşamalarında farklı mesaj, farklı platform ve farklı bütçe stratejisi uygularız. Remarketing akışlarıyla ilgi gösteren ama satın almayan kullanıcıları geri kazanırız.",
      "Bu yaklaşım sayesinde reklam harcamanızın her kuruşu, kullanıcının satın alma yolculuğundaki doğru anda doğru mesajla buluşur — israf değil, birleşik bir büyüme motoru.",
    ],
    approachImage: "/images/pazarlamadaki-resim.png",
    tools: [
      "Meta Ads Manager",
      "Google Ads",
      "TikTok Ads",
      "Google Analytics 4",
      "Looker Studio",
      "Meta Pixel",
    ],
    deliverables: [
      "Haftalık performans raporları (Looker Studio)",
      "Kanallar arası karşılaştırmalı dashboard",
      "Aylık strateji güncelleme dokümanı",
      "Kreatif test matrisi ve önerileri",
      "Dönüşüm hunisi analiz raporu",
    ],
    faqs: [
      {
        question: "Reklam bütçemi ne kadar hızlı optimize edersiniz?",
        answer:
          "İlk 2 hafta öğrenme/test dönemidir; genellikle 30 gün içinde kararlı bir performans seviyesine ulaşırız, sonrasında sürekli optimizasyonla ölçekleriz.",
      },
      {
        question: "Hangi sektörlerle çalışıyorsunuz?",
        answer:
          "E-ticaret, D2C markalar, hizmet sektörü ve B2B firmalarla çalışıyoruz; her sektöre özel kanal ve mesaj stratejisi kurguluyoruz.",
      },
      {
        question: "Minimum reklam bütçesi var mı?",
        answer:
          "Kanal ve hedefe göre değişir, projenizi görüşürken size özel minimum bütçe önerisi sunarız.",
      },
      {
        question: "Raporlama ne sıklıkla yapılıyor?",
        answer:
          "Haftalık performans raporları ve aylık strateji toplantılarıyla süreci şeffaf tutuyoruz.",
      },
    ],
  },
  {
    slug: "yaratici-produksiyon",
    title: "Yaratıcı Prodüksiyon",
    heroImage: "/images/yaratici-hero.png",
    intro: [
      "Dijital mecraların dinamiklerine uygun, kullanıcı etkileşimini en üst seviyeye çıkaran video ve görsel içerikler geliştiriyoruz. UGC ve AIGC yaklaşımlarımızla, marka kimliğinizle tamamen uyumlu ve dönüşüm odaklı kreatif çözümler üretiyoruz.",
      "Her kreatifi bir hipotez olarak ele alırız: hook varyasyonları, farklı görsel diller ve CTA'lar sistematik olarak test edilir. Kazanan formatlar belirlenip ölçeklenir, kaybedenler hızla elenir — bu sayede kreatif yorgunluğunun önüne geçer, sürekli taze içerik akışı sağlarız.",
    ],
    approach: [
      "UGC ve AIGC'yi bir arada kullanarak hem otantiklik hem hız kazandırıyoruz: gerçek kullanıcı içerikleriyle güven inşa ederken, yapay zeka destekli görsellerle test hızını katlıyoruz. Prodüksiyon sürecini brief'ten teslimata kadar uçtan uca yönetiyoruz.",
    ],
    tools: [
      "Adobe Creative Suite",
      "Figma",
      "CapCut Pro",
      "DaVinci Resolve",
      "Midjourney",
      "Canva Pro",
    ],
    deliverables: [
      "Aylık içerik takvimi ve üretim planı",
      "Platforma özel çoklu format paketleri",
      "Marka rehberi güncellemeleri",
      "Kreatif performans analiz raporu",
      "Onaylı asset kütüphanesi",
    ],
    faqs: [
      {
        question: "Bir kreatif üretim süreci ne kadar sürüyor?",
        answer:
          "Konsept onayından teslimata genellikle 5-7 iş günü sürer, acil talepler için hızlandırılmış süreç sunuyoruz.",
      },
      {
        question: "UGC içerikleri nasıl temin ediyorsunuz?",
        answer:
          "Kendi içerik üretici ağımız üzerinden markanıza uygun yaratıcılarla eşleştirme yapıyor, brief ve yönlendirmeyi biz sağlıyoruz.",
      },
      {
        question: "AIGC içerikler marka kimliğimize uygun olur mu?",
        answer:
          "Evet, marka renkleri, tonu ve görsel dilinize göre özel prompt ve stil rehberleri oluşturarak üretim yapıyoruz.",
      },
      {
        question: "Kaç varyasyon üretiyorsunuz?",
        answer:
          "Test döngüsü başına genellikle 8-12 kreatif varyasyon üretip performansa göre eliyoruz.",
      },
    ],
  },
  {
    slug: "pazaryeri-yonetimi",
    title: "Pazaryeri Yönetimi",
    heroImage: "/images/pazaryeri-hero.png",
    intro: [
      "Amazon, Trendyol ve Hepsiburada gibi lider pazaryerlerindeki mağaza süreçlerinizi uçtan uca yönetiyoruz. Ürün optimizasyonu ve stratejik kampanya kurgularıyla markanızın dijital pazarlardaki satış hacmini büyütüyoruz.",
      "Satıcı panelinden ürün listelemelerine, reklam kampanyalarından stok/fiyat takibine kadar tüm operasyonu tek elden yürütüyoruz. Rakip analiziyle fiyatlandırma ve sıralama stratejinizi sürekli güncel tutuyoruz.",
    ],
    approach: [
      "Her pazaryerinin kendi algoritması ve kullanıcı davranışı vardır; Amazon'da arama sıralaması, Trendyol'da kampanya katılımı, Hepsiburada'da ürün puanı öne çıkar. Stratejimizi platforma özel kurgular, tek tip bir yaklaşım uygulamayız.",
    ],
    tools: [
      "Amazon Seller Central",
      "Trendyol Mağaza Paneli",
      "Hepsiburada Satıcı Paneli",
      "Helium 10",
      "Keepa",
      "Google Analytics 4",
    ],
    deliverables: [
      "Haftalık pazaryeri performans raporu",
      "Aylık reklam bütçesi ve ROAS analizi",
      "Ürün optimizasyon önerileri",
      "Rakip fiyat ve sıralama takibi",
      "Kampanya optimizasyon aksiyon planı",
    ],
    faqs: [
      {
        question: "Hangi pazaryerlerinde hizmet veriyorsunuz?",
        answer:
          "Amazon, Trendyol ve Hepsiburada'da aktif yönetim sağlıyoruz, talep halinde diğer platformlar için de değerlendirme yapıyoruz.",
      },
      {
        question: "Ürün listelemelerini siz mi oluşturuyorsunuz?",
        answer:
          "Evet, SEO uyumlu başlık, açıklama ve görsel önerileriyle listeleme optimizasyonunu biz yürütüyoruz.",
      },
      {
        question: "Stok yönetimini de siz mi yapıyorsunuz?",
        answer:
          "Stok takibini raporluyor ve kritik seviyelerde sizi uyarıyoruz; stok tedariğinin kendisi sizin sorumluluğunuzda kalıyor.",
      },
      {
        question: "Reklam bütçesi kim tarafından belirleniyor?",
        answer:
          "Hedeflerinize göre önerimizi sunuyoruz, nihai bütçe onayı her zaman sizde.",
      },
    ],
  },
  {
    slug: "dijital-urun-ve-cozumler",
    title: "Dijital Ürün ve Çözümler",
    heroImage: "/images/dijital-urun-hero.png",
    intro: [
      "Shopify mağaza kurulumu ve dönüşüm oranı optimizasyonu (CRO) süreçlerinizi uçtan uca kurguluyoruz. Teknik altyapı entegrasyonları ve kullanıcı deneyimi iyileştirmeleriyle markanızın dijital varlığını ve satış performansını güçlendiriyoruz.",
      "Kullanıcı yolculuğunu ve dönüşüm noktalarını analiz ederek hızlı, SEO uyumlu ve dönüşüm odaklı bir altyapı kuruyoruz. Sayfa hızından ödeme akışına kadar her adımı performans verisiyle iyileştiriyoruz.",
    ],
    approach: [
      "Teknik altyapıyı önce sağlamlaştırır, sonra optimize ederiz: sayfa hızı, mobil uyumluluk ve ödeme akışındaki sürtünmeleri tespit edip gideririz. Her değişikliği A/B testiyle doğrulayıp veriyle karar veririz.",
    ],
    tools: [
      "Shopify",
      "Next.js",
      "Google Tag Manager",
      "PageSpeed Insights",
      "GTmetrix",
      "Vercel",
    ],
    deliverables: [
      "Yayına hazır web sitesi veya mağaza",
      "Teknik dokümantasyon ve eğitim",
      "CRO analiz ve öneri raporu",
      "Hız testi ve performans raporu",
      "3 ay teknik destek",
    ],
    faqs: [
      {
        question: "Mevcut Shopify mağazamı da geliştirebilir misiniz?",
        answer:
          "Evet, sıfırdan kurulum kadar mevcut mağazaların CRO ve performans odaklı revizyonunu da yapıyoruz.",
      },
      {
        question: "Site ne kadar sürede yayına hazır olur?",
        answer:
          "Kapsam ve entegrasyon sayısına göre değişir, standart bir Shopify kurulumu genellikle 3-4 haftada tamamlanır.",
      },
      {
        question: "SEO çalışması dahil mi?",
        answer:
          "Teknik SEO altyapısını (hız, yapılandırılmış veri, mobil uyum) kuruyoruz; içerik SEO'su ayrı bir hizmet olarak planlanabilir.",
      },
      {
        question: "Kurulum sonrası destek veriyor musunuz?",
        answer:
          "Evet, teslimat sonrası 3 ay teknik destek sürecimiz standart olarak dahildir.",
      },
    ],
  },
  {
    slug: "kampanya-ve-icerik-stratejisi",
    title: "Kampanya ve İçerik Stratejisi",
    heroImage: "/images/kampanya-icerik-hero.png",
    intro: [
      "Marka konumlandırmasından içerik mimarisine uzanan tüm süreçlerde, sürdürülebilir büyümeyi hedefleyen stratejik bir temel oluşturuyoruz. Kreatif kurgularımızı veri analitiğiyle destekleyerek, markanızın dijital performansını en üst seviyeye çıkarıyoruz.",
      "Rakip analizinden hedef kitle araştırmasına, içerik takviminden performans ölçümüne kadar stratejinin her katmanını birlikte kurgularız. Amaç tek seferlik kampanyalar değil, tutarlı ve bileşik büyüyen bir marka hikayesi.",
    ],
    approach: [
      "Önce dinleriz: pazar, rakip ve kitle analiziyle markanızın gerçek konumunu netleştiririz. Sonra bu içgörüleri 3-6 aylık bir içerik ve kampanya yol haritasına dönüştürüp, her ay performansa göre güncelleriz.",
    ],
    tools: ["Semrush", "Ahrefs", "BuzzSumo", "Notion", "Miro", "Sprout Social"],
    deliverables: [
      "Marka strateji dokümanı",
      "3-6 aylık içerik yol haritası",
      "Kampanya konsept sunumu",
      "Haftalık içerik takvimi",
      "Aylık performans ve strateji değerlendirmesi",
    ],
    faqs: [
      {
        question: "Strateji sürecine ne kadar dahil olmamız gerekiyor?",
        answer:
          "İlk keşif ve onay aşamalarında aktif katılımınızı isteriz, sonrasında düzenli güncellemelerle süreci şeffaf tutarız.",
      },
      {
        question: "İçerik üretimini de siz mi yapıyorsunuz?",
        answer:
          "Strateji ve takvimi biz kurgularız; üretimi Yaratıcı Prodüksiyon ekibimizle birlikte veya sizin ekibinizle koordineli şekilde yürütebiliriz.",
      },
      {
        question: "Rakip analizi ne sıklıkla güncelleniyor?",
        answer:
          "Aylık strateji değerlendirmelerinde rakip ve pazar verilerini güncel tutuyoruz.",
      },
      {
        question: "Sadece sosyal medya stratejisi için de çalışabilir misiniz?",
        answer:
          "Evet, ihtiyacınıza göre kapsamı sosyal medyaya odaklı da kurgulayabiliriz.",
      },
    ],
  },
  {
    slug: "ui-ux-web-tasarim",
    title: "UI / UX - Web Tasarım",
    heroImage: "/images/ui-ux-hero.png",
    intro: [
      "Kullanıcı davranışlarını temel alarak, estetik ve işlevselliği bir arada sunan responsive arayüz tasarımları geliştiriyoruz. Wireframe mimarileri ve kullanıcı akış diyagramlarıyla, dijital varlıklarınızı kullanıcı dostu ve dönüşüm odaklı platformlara dönüştürüyoruz.",
      "Tasarım sürecine her zaman araştırmayla başlarız: kullanıcı davranış verisi ve ısı haritalarıyla mevcut sürtünme noktalarını tespit eder, çözümü buna göre kurgularız. Görsel çekicilik kadar kullanılabilirliği de önceliklendiririz.",
    ],
    approach: [
      "Wireframe'den yüksek çözünürlüklü tasarıma, kullanıcı testinden nihai teslimata kadar iteratif bir süreç izleriz. Her tasarım kararını kullanıcı davranışı ve dönüşüm verisiyle doğrularız, varsayıma değil kanıta güveniriz.",
    ],
    tools: ["Figma", "Adobe XD", "Miro", "Hotjar", "Maze", "FigJam"],
    deliverables: [
      "Kullanıcı akış diyagramları",
      "Wireframe ve prototip dosyaları",
      "Yüksek çözünürlüklü UI tasarım kiti",
      "Kullanılabilirlik testi raporu",
      "Geliştirici teslim dokümantasyonu (handoff)",
    ],
    faqs: [
      {
        question:
          "Mevcut sitemizin sadece tasarımını mı yeniliyorsunuz, geliştirmesini de yapıyor musunuz?",
        answer:
          "Tasarımı biz kurgularız; geliştirmeyi Dijital Ürün ve Çözümler ekibimizle birlikte uçtan uca da yürütebiliriz.",
      },
      {
        question: "Kullanıcı testi sürece dahil mi?",
        answer:
          "Evet, kritik akışlarda kullanılabilirlik testleriyle tasarımı kullanıcı verisiyle doğruluyoruz.",
      },
      {
        question: "Mobil uyumluluk garantili mi?",
        answer:
          "Tüm tasarımlarımız mobile-first prensibiyle, farklı ekran boyutlarına göre responsive olarak kurgulanır.",
      },
      {
        question: "Marka kimliğimiz yoksa tasarım yapabilir misiniz?",
        answer:
          "Evet, gerekirse temel bir marka kimliği (renk, tipografi, ton) çalışmasıyla sürece başlayabiliriz.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
