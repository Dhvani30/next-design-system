export type Tier = "starter" | "pro" | "enterprise";
export type Currency = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

export const TIERS: readonly Tier[] = ["starter", "pro", "enterprise"] as const;
export const CURRENCIES: readonly Currency[] = ["INR", "USD", "EUR"] as const;
export const BILLING_CYCLES: readonly BillingCycle[] = ["monthly", "annual"] as const;

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8;

export const TIER_LABELS: Record<Tier, string> = {
  starter: "Starter",
  pro: "Pro",
  enterprise: "Enterprise",
};

export type PricingFeature = {
  id: string;
  label: string;
  availability: Record<Tier, boolean>;
};

export const PRICING_FEATURES: readonly PricingFeature[] = [
  {
    id: "projects",
    label: "Up to 5 projects",
    availability: { starter: true, pro: false, enterprise: false },
  },
  {
    id: "unlimited-projects",
    label: "Unlimited projects",
    availability: { starter: false, pro: true, enterprise: true },
  },
  {
    id: "basic-analytics",
    label: "Basic analytics",
    availability: { starter: true, pro: true, enterprise: true },
  },
  {
    id: "advanced-analytics",
    label: "Advanced analytics",
    availability: { starter: false, pro: true, enterprise: true },
  },
  {
    id: "email-support",
    label: "Email support",
    availability: { starter: true, pro: true, enterprise: true },
  },
  {
    id: "priority-support",
    label: "Priority support",
    availability: { starter: false, pro: true, enterprise: true },
  },
  {
    id: "custom-integrations",
    label: "Custom integrations",
    availability: { starter: false, pro: false, enterprise: true },
  },
  {
    id: "dedicated-manager",
    label: "Dedicated manager",
    availability: { starter: false, pro: false, enterprise: true },
  },
  {
    id: "sla",
    label: "SLA guarantee",
    availability: { starter: false, pro: false, enterprise: true },
  },
] as const;

/**
 * Base monthly rates indexed by tier → currency.
 * Annual pricing applies ANNUAL_DISCOUNT_MULTIPLIER (20% off) to the monthly rate.
 */
export const PRICING_MATRIX: Record<
  Tier,
  Record<Currency, { monthly: number }>
> = {
  starter: {
    INR: { monthly: 1599 },
    USD: { monthly: 19 },
    EUR: { monthly: 17 },
  },
  pro: {
    INR: { monthly: 3999 },
    USD: { monthly: 49 },
    EUR: { monthly: 45 },
  },
  enterprise: {
    INR: { monthly: 7999 },
    USD: { monthly: 99 },
    EUR: { monthly: 89 },
  },
};

export function resolveRate(
  tier: Tier,
  currency: Currency,
  billingCycle: BillingCycle,
): number {
  const base = PRICING_MATRIX[tier][currency].monthly;
  return billingCycle === "annual"
    ? base * ANNUAL_DISCOUNT_MULTIPLIER
    : base;
}

export function getTierFeatures(tier: Tier): PricingFeature[] {
  return PRICING_FEATURES.filter((feature) => {
    if (tier === "starter") {
      return true;
    }
    return feature.availability[tier];
  });
}
