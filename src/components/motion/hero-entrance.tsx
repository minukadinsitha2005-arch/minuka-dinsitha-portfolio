"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { revealTiming } from "@/components/motion/presets";

/** Visible server HTML; motion progressively enhances the initial composition. */
export function HeroEntrance({ children, className }: { children: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true });
  const reducedMotion = useReducedMotion();
  const played = useRef(false);
  const animations = useRef<ReturnType<typeof animate>[]>([]);

  useEffect(() => {
    if (!inView || reducedMotion !== false || played.current || !scope.current) return;
    played.current = true;
    const element = scope.current;
    const navigation = document.querySelector<HTMLElement>("[data-hero-navigation]");
    const timing = { ...revealTiming, duration: 0.7 };
    animations.current = [
      animate("[data-hero-glow]", { opacity: [0, 1] }, { ...timing, duration: 0.8 }),
      animate("[data-hero-portrait]", { opacity: [0, 1], y: [45, 0], scale: [0.96, 1] }, { ...timing, duration: 0.85, delay: 0.04 }),
      animate("[data-hero-name]", { opacity: [0, 1], y: ["110%", "0%"] }, { ...timing, delay: 0.22 }),
      ...Array.from(element.querySelectorAll<HTMLElement>("[data-hero-category]")).map((category, index) =>
        animate(category, { opacity: [0, 1], y: [6, 0] }, { ...timing, duration: 0.5, delay: 0.38 + index * 0.045 }),
      ),
      animate("[data-hero-cue]", { opacity: [0, 1] }, { ...timing, duration: 0.5, delay: 0.55 }),
    ];
    if (navigation) {
      animations.current.push(animate(navigation, { opacity: [0, 1], y: [-4, 0] }, { ...timing, duration: 0.5, delay: 0.36 }));
    }
    function finish() { animations.current.forEach((animation) => animation.complete()); }
    navigation?.addEventListener("focusin", finish);
    return () => {
      navigation?.removeEventListener("focusin", finish);
      animations.current.forEach((animation) => animation.stop());
      animations.current = [];
      const reveals = Array.from(element.querySelectorAll<HTMLElement>("[data-hero-reveal]"));
      if (navigation) reveals.push(navigation);
      reveals.forEach((node) => { node.style.opacity = "1"; node.style.transform = "none"; });
    };
  }, [animate, inView, reducedMotion, scope]);

  return (
    <div ref={scope} className={className} onFocusCapture={() => animations.current.forEach((animation) => animation.complete())}>
      {children}
    </div>
  );
}
