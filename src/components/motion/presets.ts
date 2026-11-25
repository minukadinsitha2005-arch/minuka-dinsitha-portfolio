export const revealTiming = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function revealKeyframes(distance = 20) {
  return {
    opacity: [0, 1],
    transform: [`translateY(${distance}px)`, "translateY(0px)"],
  };
}
