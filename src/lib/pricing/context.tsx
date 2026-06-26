"use client";

import { createContext } from "react";
import type { BillingCycle, Currency } from "./config";

export type PricingState = {
  currency: Currency;
  billingCycle: BillingCycle;
};

export const PricingStateContext = createContext<PricingState | null>(null);
