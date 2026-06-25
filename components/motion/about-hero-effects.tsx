"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutHeroEffects() {
  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>(".abHero");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".abHeroMark",
        { autoAlpha: 0, y: 28, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.18 },
      );

      gsap.fromTo(
        ".abHeroMark article",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", stagger: 0.09, delay: 0.48 },
      );

      gsap.to(".abHeroPattern", {
        xPercent: 4,
        yPercent: -3,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(hero, {
        backgroundPosition: "54% 48%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    }, hero);

    return () => context.revert();
  }, []);

  return null;
}
