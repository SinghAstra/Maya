import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { WhoWeHelp } from "@/components/who-we-help";
import { Quote } from "@/components/quote";
import { Expertise } from "@/components/expertise";
import { HowWeWork } from "@/components/how-we-work";
import { Honoring } from "@/components/honoring";
import { Specialties } from "@/components/specialties";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { LegalBar } from "@/components/legal-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Quote />
        <Expertise />
        <HowWeWork />
        <Honoring />
        <Specialties />
        <CallToAction />
      </main>
      <Footer />
      <LegalBar />
    </>
  );
}
