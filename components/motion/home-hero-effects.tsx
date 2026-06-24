"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeHeroEffects() {
  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const introItems = hero.querySelectorAll(".eyebrow, .heroCopy, .heroHighlights span, .heroActions");

      gsap.fromTo(
        ".heroBackdrop",
        { scale: 1.05, autoAlpha: 0.86 },
        { scale: 1, autoAlpha: 1, duration: 1.5, ease: "power3.out" },
      );

      gsap.fromTo(
        introItems,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.08, delay: 0.15 },
      );

      gsap.fromTo(
        ".heroNote",
        { autoAlpha: 0, x: 18 },
        { autoAlpha: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.55 },
      );

      gsap.to(".heroOrb", {
        rotate: 10,
        scale: 1.04,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "50% 50%",
      });

      gsap.to(".heroVideo", {
        yPercent: 7,
        scale: 1.04,
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
