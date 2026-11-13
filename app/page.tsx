import { Ads } from "@/components/ads";
import { Audience } from "@/components/audience";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Nav } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { Reports } from "@/components/reports";
import { Sources, Stats } from "@/components/sources";
import { TwoWays } from "@/components/two-ways";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sources />
        <Stats />
        <TwoWays />
        <HowItWorks />
        <Features />
        <Ads />
        <Reports />
        <Audience />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
