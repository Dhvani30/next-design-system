"use client";

import { memo, useCallback, useMemo, useState } from "react";
import type { BillingCycle, Currency } from "@/lib/pricing/config";
import { PricingStateContext } from "@/lib/pricing/context";
import { PricingControls } from "./PricingControls";
import { PricingGrid } from "./PricingGrid";
import { ScrollReveal } from "@/components/scroll/ScrollReveal";

function PricingSectionComponent() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const handleCurrencyChange = useCallback((nextCurrency: Currency) => {
    setCurrency(nextCurrency);
  }, []);

  const handleBillingChange = useCallback((nextCycle: BillingCycle) => {
    setBillingCycle(nextCycle);
  }, []);

  const pricingState = useMemo(
    () => ({ currency, billingCycle }),
    [currency, billingCycle],
  );

  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <ScrollReveal>
        <h2 id="pricing-heading">Pricing</h2>
        <p className="mt-2 max-w-xl">
          Choose a plan in your preferred currency. Annual billing saves 20%.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <PricingControls
          currency={currency}
          billingCycle={billingCycle}
          onCurrencyChange={handleCurrencyChange}
          onBillingChange={handleBillingChange}
        />
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <PricingStateContext.Provider value={pricingState}>
          <PricingGrid />
        </PricingStateContext.Provider>
      </ScrollReveal>
    </section>
  );
}

export const PricingSection = memo(PricingSectionComponent);
