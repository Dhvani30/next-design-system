"use client";

import { memo } from "react";
import {
  resolveRate,
  type BillingCycle,
  type Currency,
  type Tier,
} from "@/lib/pricing/config";
import { formatPrice } from "@/lib/pricing/format";

type PriceDisplayProps = {
  tier: Tier;
  currency: Currency;
  billingCycle: BillingCycle;
};

function PriceDisplayComponent({
  tier,
  currency,
  billingCycle,
}: PriceDisplayProps) {
  const amount = resolveRate(tier, currency, billingCycle);
  const formatted = formatPrice(amount, currency);

  return <span className="pricing-number">{formatted}</span>;
}

export const PriceDisplay = memo(PriceDisplayComponent);
