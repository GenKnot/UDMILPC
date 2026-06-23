"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = { number: string; title: string; description: string };

export function PathwayTimeline({ steps }: { steps: Step[] }) {
  const timeline = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!timeline.current || !progress.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = timeline.current.querySelectorAll(".pathwayStep");
    const context = gsap.context(() => {
      gsap.fromTo(progress.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: timeline.current, start: "top 70%", end: "bottom 65%", scrub: 0.5 },
      });
      items.forEach((item) => {
        gsap.fromTo(item, { autoAlpha: 0.35, x: 24 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 78%", toggleActions: "play none none reverse" },
        });
      });
    }, timeline);

    return () => context.revert();
  }, []);

  return (
    <div className="pathwayTimeline" ref={timeline}>
      <div className="pathwayRail" aria-hidden="true"><div className="pathwayProgress" ref={progress} /></div>
      {steps.map((step) => (
        <article className="pathwayStep" key={step.number}>
          <span className="pathwayNumber">{step.number}</span>
          <div><h3>{step.title}</h3><p>{step.description}</p></div>
        </article>
      ))}
    </div>
  );
}
