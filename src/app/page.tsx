import { FeaturesSection } from "@/components/features/FeaturesSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PricingSection } from "@/components/pricing/PricingSection";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-16 pt-28">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <PricingSection />
      </main>

      <footer className="border-t border-expedition px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <p>
            <small>
              © {new Date().getFullYear()} DataStream. All rights reserved.
            </small>
          </p>
        </div>
      </footer>
    </>
  );
}
