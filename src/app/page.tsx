import { CtaBand } from "@/components/home/CtaBand";
import { FaqSection } from "@/components/home/FaqSection";
import { ForcesSection } from "@/components/home/ForcesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { HomeHero } from "@/components/home/HomeHero";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ZonesSection } from "@/components/home/ZonesSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <HomeHero />
      <ServicesSection />
      <TrustSection />
      <GallerySection />
      <ReviewsSection />
      <ForcesSection />
      <FaqSection />
      <ZonesSection />
      <CtaBand />
    </>
  );
}
