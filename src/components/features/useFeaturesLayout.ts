"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { MOBILE_BREAKPOINT } from "@/lib/features/config";

export function useFeaturesLayout(containerRef: React.RefObject<HTMLElement | null>) {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const syncLayout = (width: number) => {
      const nowMobile = width <= MOBILE_BREAKPOINT;
      const wasDesktop = !isMobileRef.current;

      if (nowMobile && wasDesktop && hoveredIndexRef.current !== null) {
        setOpenIndex(hoveredIndexRef.current);
      }

      isMobileRef.current = nowMobile;
      setIsMobile(nowMobile);
    };

    syncLayout(element.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      syncLayout(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef]);

  const setHoveredIndex = useCallback((index: number | null) => {
    hoveredIndexRef.current = index;
  }, []);

  const toggleAccordion = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return {
    isMobile,
    openIndex,
    setHoveredIndex,
    toggleAccordion,
  };
}
