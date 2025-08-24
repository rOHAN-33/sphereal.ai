"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import CallToAction from "./sections/CallToAction";
import Companies from "./sections/Companies";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";

const Page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Animation duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical', // Gesture direction
      smooth: true,
      mouseMultiplier: 1, // Mouse wheel sensitivity
      smoothTouch: false, // Smooth scrolling on touch devices
      touchMultiplier: 2, // Touch sensitivity
      infinite: false,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Page;
