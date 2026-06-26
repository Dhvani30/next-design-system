"use client";

import { memo, useCallback, useRef } from "react";
import { FEATURES_BENTO } from "@/lib/features/config";
import { FeatureBentoCard } from "./FeatureBentoCard";
import { useFeaturesLayout } from "./useFeaturesLayout";

function FeaturesSectionComponent() {
  const containerRef = useRef<HTMLElement>(null);
  const { isMobile, openIndex, setHoveredIndex, toggleAccordion } =
    useFeaturesLayout(containerRef);

  const handleHover = useCallback(
    (index: number) => {
      setHoveredIndex(index);
    },
    [setHoveredIndex],
  );

  const handleHoverLeave = useCallback(() => {
    setHoveredIndex(null);
  }, [setHoveredIndex]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="features-heading"
      className="w-full"
    >
      <h2 id="features-heading">Features</h2>
      <p className="mt-2 max-w-xl text-mint">
        A bento grid on desktop that collapses into an accordion on mobile —
        with context preserved when you resize.
      </p>

      <div className="features-bento-grid mt-8">
        {FEATURES_BENTO.map((feature, index) => (
          <FeatureBentoCard
            key={feature.id}
            feature={feature}
            index={index}
            isMobile={isMobile}
            isOpen={openIndex === index}
            onToggle={toggleAccordion}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
          />
        ))}
      </div>
    </section>
  );
}

export const FeaturesSection = memo(FeaturesSectionComponent);
