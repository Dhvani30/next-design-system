"use client";

import Image from "next/image";
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

function FeatureCardVisual({
  feature,
  large,
}: {
  feature: FeatureBentoItem;
  large: boolean;
}) {
  if (large) {
    return (
      <div className="relative hidden shrink-0 md:block md:h-36 md:w-48 lg:h-40 lg:w-56">
        <Image
          src={feature.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 224px, 192px"
          className="rounded-lg object-cover opacity-80 shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute -bottom-2 -right-2 h-28 w-28 opacity-50 md:h-32 md:w-32">
      <Image
        src={feature.image}
        alt=""
        fill
        sizes="128px"
        className="rounded-lg object-cover"
      />
    </div>
  );
}

function FeatureCardBackground({ image }: { image: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.15]"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

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
  const anchorId = feature.id === "security" ? "security" : undefined;
  const isLarge = feature.gridClass.includes("col-span-2");

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
    onToggle(index);
  }, [index, onToggle]);

  if (isMobile) {
    return (
      <article
        id={anchorId}
        className={`feature-bento-card overflow-hidden ${feature.gridClass}`}
      >
        <button
          type="button"
          className="relative z-10 flex w-full items-center justify-between gap-3 p-4 text-left"
          aria-expanded={isOpen}
          aria-controls={`feature-panel-${feature.id}`}
          id={`feature-trigger-${feature.id}`}
          onClick={handleClick}
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
          <div className="relative px-4 pb-4">
            <p className="text-sm text-mint">{feature.description}</p>
            <div className="relative mt-4 h-28 w-full overflow-hidden rounded-lg">
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-expedition via-expedition/40 to-transparent" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={anchorId}
      className={`feature-bento-card relative overflow-hidden ${feature.gridClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <FeatureCardBackground image={feature.image} />

      <div
        className={`relative z-10 ${
          isLarge
            ? "flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8"
            : "min-h-[220px] p-6 md:p-8"
        }`}
      >
        <div className={isLarge ? "max-w-xl flex-1" : "relative z-10 max-w-[75%]"}>
          <Icon className="size-8 text-nocturnal" />
          <h3 className="mt-4 text-arctic">{feature.title}</h3>
          <p className="mt-3 text-sm text-mint">{feature.description}</p>
        </div>

        <FeatureCardVisual feature={feature} large={isLarge} />
      </div>
    </article>
  );
}

export const FeatureBentoCard = memo(FeatureBentoCardComponent);
