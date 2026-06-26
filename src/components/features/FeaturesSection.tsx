"use client";

import { memo, useCallback, useRef } from "react";
import { FEATURES_BENTO } from "@/lib/features/config";
import { FeatureBentoCard } from "./FeatureBentoCard";
import { useFeaturesLayout } from "./useFeaturesLayout";
import { ScrollReveal } from "@/components/scroll/ScrollReveal";

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
      id="features"
      ref={containerRef}
      aria-labelledby="features-heading"
      className="w-full py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 
            id="features-heading" 
            className="font-jetbrains text-3xl md:text-5xl text-arctic mb-4"
          >
            Platform features
          </h2>
          <p className="mt-2 max-w-xl text-mint text-lg">
            Everything included across plans, built for integration, automation,
            and analytics.
          </p>
        </ScrollReveal>

        {/* Bento Grid Layout: 1 col mobile, 2 cols desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES_BENTO.map((feature, index) => {
            // BENTO LOGIC: 
            // Index 0 (Automation) and Index 3 (Security) span 2 columns on desktop
            // Index 1 (Integration) and Index 2 (Analytics) span 1 column
            const isFullWidth = index === 0 || index === 3;
            const gridSpanClass = isFullWidth ? "md:col-span-2" : "md:col-span-1";

            return (
              <div 
                key={feature.id} 
                className={gridSpanClass}
              >
                <ScrollReveal delay={index * 100}>
                  <FeatureBentoCard
                    feature={feature}
                    index={index}
                    isMobile={isMobile}
                    isOpen={openIndex === index}
                    onToggle={toggleAccordion}
                    onHover={handleHover}
                    onHoverLeave={handleHoverLeave}
                  />
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const FeaturesSection = memo(FeaturesSectionComponent);