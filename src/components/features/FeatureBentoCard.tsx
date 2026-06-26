"use client";

import { memo, useCallback } from "react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CogIcon,
  LinkSolidIcon,
} from "@/components/icons/pricing-icons";
import type { FeatureBentoItem, FeatureIcon } from "@/lib/features/config";

const FEATURE_ICONS: Record<
  FeatureIcon,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  "cog-8-tooth": CogIcon,
  "link-solid": LinkSolidIcon,
  "chart-pie": ChartPieIcon,
  "arrow-path": ArrowPathIcon,
};

type FeatureBentoCardProps = {
  feature: FeatureBentoItem;
  index: number;
  isMobile: boolean;
  isOpen: boolean;
  onToggle: (index: number) => void;
  onHover: (index: number) => void;
  onHoverLeave: () => void;
};

function FeatureBentoCardComponent({
  feature,
  index,
  isMobile,
  isOpen,
  onToggle,
  onHover,
  onHoverLeave,
}: FeatureBentoCardProps) {
  const Icon = FEATURE_ICONS[feature.icon];

  const handleMouseEnter = useCallback(() => {
    onHover(index);
  }, [index, onHover]);

  const handleMouseLeave = useCallback(() => {
    onHoverLeave();
  }, [onHoverLeave]);

  const handleFocus = useCallback(() => {
    onHover(index);
  }, [index, onHover]);

  const handleClick = useCallback(() => {
    if (isMobile) {
      onToggle(index);
    }
  }, [index, isMobile, onToggle]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle(index);
      }
    },
    [index, onToggle],
  );

  if (isMobile) {
    return (
      <article className={`feature-bento-card ${feature.gridClass}`}>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 p-4 text-left"
          aria-expanded={isOpen}
          aria-controls={`feature-panel-${feature.id}`}
          id={`feature-trigger-${feature.id}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        >
          <span className="flex items-center gap-3">
            <Icon className="size-6 shrink-0 text-nocturnal" />
            <span className="font-medium text-arctic">{feature.title}</span>
          </span>
          {isOpen ? (
            <ChevronUpIcon className="size-5 shrink-0 text-mint" />
          ) : (
            <ChevronDownIcon className="size-5 shrink-0 text-mint" />
          )}
        </button>

        <div
          id={`feature-panel-${feature.id}`}
          role="region"
          aria-labelledby={`feature-trigger-${feature.id}`}
          className={`feature-accordion-panel ${isOpen ? "is-open" : ""}`}
        >
          <p className="px-4 pb-4 text-sm text-mint">{feature.description}</p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`feature-bento-card p-6 md:p-8 ${feature.gridClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <Icon className="size-8 text-nocturnal" />
      <h3 className="mt-4 text-arctic">{feature.title}</h3>
      <p className="mt-3 text-sm text-mint">{feature.description}</p>
    </article>
  );
}

export const FeatureBentoCard = memo(FeatureBentoCardComponent);
