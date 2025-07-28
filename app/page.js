"use client";
import Artists from "@/components/Home/Artists";
import ArtWorks from "@/components/Home/ArtWorks";
import Banner from "@/components/Home/Banner";
import Confirm from "@/components/Home/Confirm";
import Events from "@/components/Home/Events";
import Expect from "@/components/Home/Expect";
import Hero from "@/components/Home/Hero";
import Images from "@/components/Home/Images";
import Partners from "@/components/Home/Partners";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Home() {
  return (
    <div>
      <AnimatedSection>
        <Banner />
      </AnimatedSection>
      <AnimatedSection>
        <Expect />
      </AnimatedSection>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Artists />
      </AnimatedSection>
      <AnimatedSection>
        <Events />
      </AnimatedSection>
      <AnimatedSection>
        <ArtWorks />
      </AnimatedSection>
      <AnimatedSection>
        <Confirm />
      </AnimatedSection>
      <AnimatedSection>
        <Partners />
      </AnimatedSection>
      <AnimatedSection>
        <Images />
      </AnimatedSection>
    </div>
  );
}
