export type BlogSection = { heading: string; body: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  outro?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ugc-vs-aigc",
    title: "UGC vs AIGC: Hangi İçerik Formatı Daha İyi Dönüşüm Sağlıyor?",
    date: "3 Şubat 2025",
    readTime: "6dk Okuma",
    excerpt:
      "Kullanıcı kaynaklı içerikler (UGC) ile yapay zeka destekli görsel üretimi (AIGC) arasındaki farklar, avantajlar ve hangi durumda hangisini kullanmanız gerektiği hakkında kapsamlı bir rehber.",
    tags: ["UGC", "AIGC"],
    intro:
      "Kreatif üretimde iki güçlü yaklaşım var: UGC (User Generated Content) ve AIGC (AI Generated Content). Her ikisinin de farklı kullanım alanları ve avantajları mevcut.",
    sections: [
      {
        heading: "UGC Nedir ve Güçlü Yanları Neler?",
        body: "Gerçek kullanıcıların ürününüzü veya hizmetinizi anlattığı otantik içerikler. Güven inşa etmede, özellikle beauty, wellness ve e-ticaret kategorilerinde son derece etkili. Algoritmalar UGC formatına organik görünümü nedeniyle daha düşük CPM ile daha yüksek erişim sağlıyor.\n\nDezavantajı: Prodüksiyon süreci yavaş, kalite kontrolü zor ve ölçeklenmesi maliyetli.",
      },
      {
        heading: "AIGC Nedir ve Güçlü Yanları Neler?",
        body: "Midjourney, DALL-E, Stable Diffusion veya diğer AI araçlarıyla üretilen görseller ve videolar. Hızlı üretim, düşük maliyet ve sonsuz varyasyon imkânı sağlıyor. Özellikle statik reklam görselleri için mükemmel.\n\nDezavantajı: Otantiklik algısı düşük, bazı platformlarda AI içerik kısıtlamaları mevcut.",
      },
      {
        heading: "Hangisini Kullanmalısınız?",
        body: "İkisini birlikte kullanın. UGC için video hook testleri, AIGC için statik görsel A/B testleri yapın. Kazanan formatları tespit edip ölçekleyin.",
      },
    ],
    outro:
      "RYZ Tech olarak müşterilerimiz için her ikisini de içeren hibrit kreatif sistemler kuruyoruz: hızlı AIGC testleriyle fikir validasyonu, UGC ile performansı ölçekleme.",
  },
  {
    slug: "meta-reklamlarinda-roas-nasil-artirilir",
    title: "Meta Reklamlarında ROAS Nasıl Artırılır? 5 Temel Strateji",
    date: "15 Ocak 2025",
    readTime: "5dk Okuma",
    excerpt:
      "Reklam bütçenizden en yüksek verimi almak için kreatif test döngüsü, audience segmentasyonu ve bid stratejilerini nasıl doğru kurgulamanız gerektiğini açıklıyoruz.",
    tags: ["ROAS"],
    intro:
      "Meta reklamlarında ROAS (Return on Ad Spend) artırmak, sadece bütçeyi artırmakla değil doğru sistemi kurmakla mümkün. Yüksek ROAS'a ulaşmak için beş temel stratejiye odaklanıyoruz:",
    sections: [
      {
        heading: "1. Kreatif Test Döngüsü",
        body: "Her ay en az 20-30 farklı kreatif test etmeden ölçeklenmeye çalışmak büyük hata. Kazanan formatı bulmak için sistematik A/B testleri yapın. Hook (ilk 3 saniye), görsel dil ve CTA ayrı ayrı test edilmeli.",
      },
      {
        heading: "2. Audience Segmentasyonu",
        body: "Geniş kitleler → retargeting → lookalike üçgeninde kampanyalarınızı yapılandırın. Her segment için ayrı mesaj ve kreatif kullanın. Cold audience ile warm audience'a aynı reklamı göstermeyin.",
      },
      {
        heading: "3. Attribution Doğruluğu",
        body: "Meta Pixel + Conversion API birlikte kurulmadan attribution güvenilir olmaz. Veriler eksik olduğunda algoritmalar yanlış optimizasyon yapar. UTM parametrelerini standart tutun.",
      },
      {
        heading: "4. Sezonsal Bütçe Yönetimi",
        body: "Hafta içi/hafta sonu ve günün saatine göre performans değişir. Dayparting ve otomatik bid kurallarıyla bütçenizi peak saatlere yönlendirin.",
      },
      {
        heading: "5. Ürün Feed Optimizasyonu",
        body: "E-ticarette Dynamic Ads kullananlar için feed kalitesi kritik. Başlık, açıklama ve görsellerin A/B testini yapın. Fiyat rekabetçiliği ve stok durumu sürekli güncel olmalı.",
      },
    ],
    outro:
      "Bu beş stratejiyi sistemli uygulayan markalar genellikle 60-90 gün içinde anlamlı ROAS artışı yaşıyor.",
  },
];

export const blogCategories = ["AIGC", "UGC", "ROAS"];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
