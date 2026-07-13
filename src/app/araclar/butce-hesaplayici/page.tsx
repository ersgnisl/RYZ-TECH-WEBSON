import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import BudgetCalculator from "@/components/tools/BudgetCalculator";

export const metadata: Metadata = {
  title: "Reklam Bütçe Hesaplayıcı | RYZTECH Digital Agency",
  description:
    "Aylık gelir hedefinize göre ihtiyacınız olan reklam bütçesini ücretsiz hesaplayın. Sepet tutarı ve tıklama maliyetine göre doğru bütçe planlaması yapın.",
};

export default function ButceHesaplayiciPage() {
  return (
    <>
      <PageHero title="Bütçe Hesaplayıcı" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <BudgetCalculator />

        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground">
              Reklam Bütçesi Neden Önemli?
            </h2>
            <p className="mt-3 text-foreground/80">
              Dijital reklamcılıkta en sık yapılan hatalardan biri, bütçeyi
              hedefe değil sezgiye göre belirlemektir. Çok düşük bir bütçeyle
              başlayan kampanyalar öğrenme aşamasını tamamlayamadan durur;
              gereğinden yüksek bütçeyle başlayanlar ise verimsiz harcama
              yapar. Doğru bütçeleme, hem nakit akışınızı korur hem de
              büyüme hedeflerinize ne zaman ulaşacağınızı ölçülebilir hale
              getirir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              Bu Hesaplayıcı Neye Göre Çalışıyor?
            </h2>
            <p className="mt-3 text-foreground/80">
              Hesaplama üç girdiye dayanır: aylık gelir hedefiniz, ortalama
              sepet tutarınız ve reklam platformundaki ortalama tıklama başına
              maliyetiniz (TBM). Önce hedefinize ulaşmak için gereken sipariş
              sayısını buluyoruz (Gelir Hedefi ÷ Sepet Tutarı). Ardından
              e-ticarette sektör ortalaması kabul edilen %1 dönüşüm oranını
              kullanarak bu kadar siparişi elde etmek için kaç tıklama
              gerektiğini hesaplıyoruz. Son olarak gereken tıklama sayısını
              tıklama başına maliyetinizle çarparak tahmini bütçenizi
              buluyoruz.
            </p>
            <p className="mt-3 text-foreground/80">
              Elbette gerçek dönüşüm oranınız kampanyaya, sektöre ve kreatif
              kaliteye göre değişir — bu araç net bir kesinlik değil, bütçe
              planlamasına sağlam bir başlangıç noktası sunar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              Reklamın Satışları Artırmadaki Rolü
            </h2>
            <p className="mt-3 text-foreground/80">
              Organik büyüme yavaş ve öngörülemez olabilir; ücretli reklamlar
              ise doğru kitleye, doğru zamanda, ölçülebilir şekilde
              ulaşmanızı sağlar. İyi kurgulanmış bir reklam bütçesi, marka
              bilinirliğini artırırken aynı zamanda mevcut talebi doğrudan
              satışa dönüştürür. Reklam harcamanızı verilerle
              yönettiğinizde, her kuruşun nereye gittiğini ve size ne
              kazandırdığını net şekilde görebilirsiniz — bu da uzun vadeli,
              sürdürülebilir bir büyüme stratejisinin temelini oluşturur.
            </p>
          </section>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CtaBanner />
        </div>
      </div>
    </>
  );
}
