"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorGlow = cursorGlowRef.current;

    if (!cursorDot || !cursorGlow) return;

    // Check if device supports hover (desktop)
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      document.body.style.cursor = "auto";
      return;
    }

    // Hide default cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Dot follows instantly
      if (cursorDot) {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      // Glow follows with delay (smooth lerp)
      const lerpFactor = 0.15;
      glowX += (mouseX - glowX) * lerpFactor;
      glowY += (mouseY - glowY) * lerpFactor;

      if (cursorGlow) {
        cursorGlow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isInteractive && cursorDot && cursorGlow) {
        cursorDot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px) scale(1.5)`;
        cursorGlow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px) scale(1.2)`;
        cursorDot.style.backgroundColor = "var(--color-nocturnal)";
        cursorGlow.style.borderColor = "var(--color-nocturnal)";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isInteractive && cursorDot && cursorGlow) {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(1)`;
        cursorGlow.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px) scale(1)`;
        cursorDot.style.backgroundColor = "var(--color-arctic)";
        cursorGlow.style.borderColor = "var(--color-nocturnal)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed left-0 top-0 z-[9999] size-2 rounded-full bg-arctic pointer-events-none transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: "translate(-100px, -100px)" }}
      />
      <div
        ref={cursorGlowRef}
        className="fixed left-0 top-0 z-[9998] size-10 rounded-full border-2 border-nocturnal/50 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
}
