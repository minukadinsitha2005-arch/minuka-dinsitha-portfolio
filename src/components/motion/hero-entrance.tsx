"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { revealTiming } from "@/components/motion/presets";

/** Enhance visible server-rendered content without a hidden no-JavaScript state. */
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
      animate("[data-hero-first]", { opacity: [0, 1], y: [16, 0] }, { ...timing, delay: 0.05 }),
      animate("[data-hero-last]", { opacity: [0, 1], y: [16, 0] }, { ...timing, delay: 0.17 }),
      animate("[data-hero-portrait]", { opacity: [0, 1], y: [18, 0] }, { ...timing, duration: 0.85, delay: 0.1 }),
      animate("[data-hero-copy]", { opacity: [0, 1], y: [8, 0] }, { ...timing, duration: 0.6, delay: 0.25 }),
      animate("[data-hero-actions]", { opacity: [0, 1], y: [8, 0] }, { ...timing, duration: 0.6, delay: 0.32 }),
      animate("[data-hero-scroll]", { y: [0, 3, 0] }, { duration: 1.4, ease: "easeInOut" }),
    ];

    if (navigation) {
      animations.current.push(
        animate(navigation, { opacity: [0, 1], y: [-4, 0] }, { ...timing, duration: 0.6 }),
      );
    }

    function finish() {
      animations.current.forEach((animation) => animation.complete());
    }

    navigation?.addEventListener("focusin", finish);

    return () => {
      navigation?.removeEventListener("focusin", finish);
      animations.current.forEach((animation) => animation.stop());
      animations.current = [];
      const reveals = Array.from(element.querySelectorAll<HTMLElement>("[data-hero-reveal]"));
      if (navigation) reveals.push(navigation);
      reveals.forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
    };
  }, [animate, inView, reducedMotion, scope]);

  return (
    <div
      ref={scope}
      className={className}
      onFocusCapture={() => animations.current.forEach((animation) => animation.complete())}
    >
      {children}
    </div>
  );
}
