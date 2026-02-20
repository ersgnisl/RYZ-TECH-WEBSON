export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  shortBioEn: string;
  longBio: string;
  longBioEn: string;
  expertise: string[];
  tools: string[];
  linkedIn: string;
  gradient: string;
  initials: string;
  color: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    slug: "ahmet-faruk-akca",
    name: "Ahmet Faruk Akça",
    role: "Co-Founder & Digital Marketing Manager",
    shortBio: "Performans pazarlama ve kampanya yönetiminde uzmanlaşmış kurucu ortak.",
    shortBioEn: "Co-founder specialized in performance marketing and campaign management.",
    longBio:
      "Ahmet, dijital pazarlamanın tüm kanallarında derin bir uzmanlık geliştirdi. Meta, Google, TikTok ve LinkedIn gibi platformlarda yönettiği kampanyalarla markaların ölçeklenebilir büyüme sistemlerini kurmalarına öncülük ediyor. Strateji, kreatif üretim ve performans pazarlamasını bir arada yürüterek markaların dijitalde gerçek sonuçlar almasını sağlıyor.",
    longBioEn:
      "Ahmet has built deep expertise across all digital marketing channels. He leads scalable growth systems for brands through campaigns on Meta, Google, TikTok, and LinkedIn. By combining strategy, creative production, and performance marketing, he helps brands achieve real results in digital.",
    expertise: ["Performance Marketing", "Meta & Google Ads", "Campaign Strategy", "Growth Marketing"],
    tools: ["Meta Ads Manager", "Google Ads", "GA4", "Looker Studio", "TikTok Ads"],
    linkedIn: "https://www.linkedin.com/in/ahmet-ak%C3%A7a-8371a2193/",
    gradient: "from-indigo-500 to-purple-600",
    initials: "AFA",
    color: "#6366f1",
    photo: "/team/ahmet.jpg",
  },
  {
    slug: "ersagun-islamogullari",
    name: "Ersagun İslamoğulları",
    role: "Co-Founder & Digital Product Manager",
    shortBio: "Dijital ürün geliştirme ve web teknolojileri alanında uzmanlaşmış kurucu ortak.",
    shortBioEn: "Co-founder specialized in digital product development and web technologies.",
    longBio:
      "Ersagun, dijital ürün geliştirme ve teknoloji alanındaki uzmanlığını büyüme odaklı bir bakış açısıyla harmanlıyor. Web siteleri, e-ticaret altyapıları ve dijital araçlar konusundaki teknik bilgisiyle markaların çevrimiçi varlıklarını güçlü temeller üzerine inşa ediyor. Hızlı test eder, hızlı öğrenir ve sürekli optimize eder.",
    longBioEn:
      "Ersagun blends his expertise in digital product development and technology with a growth-focused mindset. With strong technical knowledge in websites, e-commerce infrastructure, and digital tools, he helps brands build resilient online foundations. He tests fast, learns fast, and optimizes continuously.",
    expertise: ["Digital Product", "Web Development", "E-commerce", "UX & CRO"],
    tools: ["Shopify", "Next.js", "Figma", "Google Analytics", "Hotjar"],
    linkedIn: "https://www.linkedin.com/in/ersagun-islamogullari/",
    gradient: "from-cyan-500 to-blue-600",
    initials: "Eİ",
    color: "#22d3ee",
    photo: "/team/ersagun.jpg",
  },
];
