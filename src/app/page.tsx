"use client";

import { useEffect } from "react";
import CallToAction from "./sections/CallToAction";
import Companies from "./sections/Companies";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import { Marquee } from "@/components/ui/marquee";

// Dynamic import for Lenis to avoid SSR issues
const Page = () => {
  useEffect(() => {
    let lenis: any = null;
    let frame: number;

    // Dynamic import to avoid SSR issues
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("@studio-freight/lenis");
        
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
        });

        const raf = (time: number) => {
          if (lenis) {
            lenis.raf(time);
          }
          frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);
      } catch (error) {
        console.error("Failed to initialize Lenis:", error);
      }
    };

    // Only initialize on client side
    if (typeof window !== "undefined") {
      initLenis();
    }

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Marquee pauseOnHover className="gap-8 text-white text-xl font-bold">
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind CSS</span>
        <span>Prisma</span>
      </Marquee>
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Page;