"use client";

import { memo, useContext } from "react";
import { PricingStateContext } from "@/lib/pricing/context";
import type { Tier } from "@/lib/pricing/config";
import { PriceDisplay } from "./PriceDisplay";

type ConnectedPriceDisplayProps = {
  tier: Tier;
};

function ConnectedPriceDisplayComponent({ tier }: ConnectedPriceDisplayProps) {
  const pricingState = useContext(PricingStateContext);

  if (!pricingState) {
    return null;
  }

  const { currency, billingCycle } = pricingState;

  return (
    <PriceDisplay
      tier={tier}
      currency={currency}
      billingCycle={billingCycle}
    />
  );
}

export const ConnectedPriceDisplay = memo(ConnectedPriceDisplayComponent);
