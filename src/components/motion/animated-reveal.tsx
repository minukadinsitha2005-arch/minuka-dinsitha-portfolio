"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { revealKeyframes, revealTiming } from "@/components/motion/presets";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

/** Content is visible in server HTML and remains visible without JavaScript. */
export function AnimatedReveal({ children, className, delay = 0, distance = 20 }: AnimatedRevealProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: "some" });
  const reducedMotion = useReducedMotion();
  const revealed = useRef(false);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (!inView || reducedMotion !== false || revealed.current || !scope.current) return;

    const element = scope.current;
    revealed.current = true;
    const animation = animate(element, revealKeyframes(distance), {
      ...revealTiming,
      delay: Math.max(0, Math.min(delay, 0.5)),
    });
    animationRef.current = animation;

    return () => {
      animation.stop();
      element.style.opacity = "1";
      element.style.transform = "none";
      animationRef.current = null;
    };
  }, [animate, delay, distance, inView, reducedMotion, scope]);

  return (
    <div
      ref={scope}
      data-reveal=""
      className={className}
      onFocusCapture={() => animationRef.current?.complete()}
    >
      {children}
    </div>
  );
}
