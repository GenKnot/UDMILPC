"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({ children, className, delay = 0, distance = 30 }: RevealProps) {
  const element = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!element.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element.current,
        { autoAlpha: 0, y: distance },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: element.current, start: "top 88%", once: true },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, distance]);

  return <div className={className} ref={element}>{children}</div>;
}
