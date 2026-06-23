"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!container.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(container.current.children);
    const context = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 84%", once: true },
        },
      );
    }, container);

    return () => context.revert();
  }, []);

  return <div className={className} ref={container}>{children}</div>;
}
