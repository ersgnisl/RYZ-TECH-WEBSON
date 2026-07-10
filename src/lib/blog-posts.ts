export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
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
  },
  {
    slug: "meta-reklamlarinda-roas-nasil-artirilir",
    title: "Meta Reklamlarında ROAS Nasıl Artırılır? 5 Temel Strateji",
    date: "15 Ocak 2025",
    readTime: "5dk Okuma",
    excerpt:
      "Reklam bütçenizden en yüksek verimi almak için kreatif test döngüsü, audience segmentasyonu ve bid stratejilerini nasıl doğru kurgulamanız gerektiğini açıklıyoruz.",
    tags: ["ROAS"],
  },
];

export const blogCategories = ["AIGC", "UGC", "ROAS"];
