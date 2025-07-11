'use client';
import Artists from "@/components/Home/Artists";
import ArtWorks from "@/components/Home/ArtWorks";
import Banner from "@/components/Home/Banner";
import Confirm from "@/components/Home/Confirm";
import Events from "@/components/Home/Events";
import Expect from "@/components/Home/Expect";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Images from "@/components/Home/Images";
import Partners from "@/components/Home/Partners";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  };

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
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
