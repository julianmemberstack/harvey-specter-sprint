"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const heroImg = section.querySelector<HTMLElement>("[data-hero-img]");
    const helloTexts = section.querySelectorAll<HTMLElement>("[data-hero-hello]");
    const harveyTexts = section.querySelectorAll<HTMLElement>("[data-hero-harvey]");
    const specterTexts = section.querySelectorAll<HTMLElement>("[data-hero-specter]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // Background image scales up
      if (heroImg) {
        tl.to(heroImg, { scale: 1.25, ease: "none" }, 0);
      }

      // "Hello i'm" follows Harvey to the left
      if (helloTexts.length) {
        tl.to(helloTexts, { xPercent: -250, ease: "none" }, 0);
      }

      // "Harvey" moves left
      if (harveyTexts.length) {
        tl.to(harveyTexts, { xPercent: -120, ease: "none" }, 0);
      }

      // "Specter" moves right
      if (specterTexts.length) {
        tl.to(specterTexts, { xPercent: 120, ease: "none" }, 0);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {children}
    </section>
  );
}
