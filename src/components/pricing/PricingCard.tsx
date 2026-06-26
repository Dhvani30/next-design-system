"use client";

import { memo } from "react";
import {
  ArrowTrendingUpIcon,
  CubeSolidIcon,
  XMarkIcon,
} from "@/components/icons/pricing-icons";
import {
  getTierFeatures,
  TIER_LABELS,
  type Tier,
} from "@/lib/pricing/config";
import { ConnectedPriceDisplay } from "./ConnectedPriceDisplay";

type PricingCardProps = {
  tier: Tier;
};

function PricingCardComponent({ tier }: PricingCardProps) {
  const label = TIER_LABELS[tier];
  const features = getTierFeatures(tier);
  const isPro = tier === "pro";
  const isEnterprise = tier === "enterprise";
  const showBadge = isPro || isEnterprise;

  return (
    <article
      className={`flex flex-col rounded-lg border bg-expedition p-8 transition-colors duration-150 ease-out ${
        isPro
          ? "border-nocturnal ring-1 ring-nocturnal/50"
          : "border-expedition hover:border-mint/40"
      }`}
    >
      <header className="flex items-start justify-between gap-3">
        <h3>{label}</h3>
        {showBadge ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-saffron/40 bg-saffron/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-saffron">
            <ArrowTrendingUpIcon className="size-3.5" />
            {isPro ? "Popular" : "Scale"}
          </span>
        ) : null}
      </header>

      <p className="mt-4">
        <ConnectedPriceDisplay tier={tier} />
      </p>
      <p className="mt-2 text-sm text-mint">per month</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => {
          const included = feature.availability[tier];
          const showXMark = tier === "starter" && !included;

          return (
            <li key={feature.id} className="flex items-start gap-2.5">
              {showXMark ? (
                <XMarkIcon className="mt-0.5 size-4 shrink-0 text-saffron/80" />
              ) : (
                <CubeSolidIcon className="mt-0.5 size-4 shrink-0 text-nocturnal" />
              )}
              <span className={showXMark ? "text-mint/60 line-through" : ""}>
                {feature.label}
              </span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className={`mt-8 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
          isPro
            ? "bg-nocturnal text-oceanic hover:bg-saffron"
            : "border border-mint/30 text-foreground hover:border-nocturnal hover:text-nocturnal"
        }`}
      >
        {tier === "enterprise" ? "Contact sales" : "Get started"}
      </button>
    </article>
  );
}

export const PricingCard = memo(PricingCardComponent);
