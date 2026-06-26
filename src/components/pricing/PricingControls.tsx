"use client";

import { memo, useCallback } from "react";
import {
  BILLING_CYCLES,
  CURRENCIES,
  type BillingCycle,
  type Currency,
} from "@/lib/pricing/config";

type PricingControlsProps = {
  currency: Currency;
  billingCycle: BillingCycle;
  onCurrencyChange: (currency: Currency) => void;
  onBillingChange: (cycle: BillingCycle) => void;
};

function PricingControlsComponent({
  currency,
  billingCycle,
  onCurrencyChange,
  onBillingChange,
}: PricingControlsProps) {
  const handleCurrencyChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onCurrencyChange(event.target.value as Currency);
    },
    [onCurrencyChange],
  );

  const handleBillingClick = useCallback(
    (cycle: BillingCycle) => {
      onBillingChange(cycle);
    },
    [onBillingChange],
  );

  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Currency Selector */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="pricing-currency"
          className="text-sm font-medium text-arctic"
        >
          Currency
        </label>
        <select
          id="pricing-currency"
          value={currency}
          onChange={handleCurrencyChange}
          className="rounded-lg border border-expedition bg-oceanic px-4 py-2 text-sm text-arctic transition-colors duration-150 ease-out hover:border-nocturnal focus:border-nocturnal focus:outline-none"
        >
          {CURRENCIES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      {/* Billing Cycle Toggle */}
      <div
        className="inline-flex rounded-full border border-expedition bg-oceanic/50 p-1"
        role="group"
        aria-label="Billing cycle"
      >
        {BILLING_CYCLES.map((cycle) => {
          const isActive = billingCycle === cycle;
          const label = cycle === "monthly" ? "Monthly" : "Annual (−20%)";

          return (
            <button
              key={cycle}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleBillingClick(cycle)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ease-out ${
                isActive
                  ? "bg-nocturnal text-oceanic shadow-lg shadow-nocturnal/20"
                  : "text-mint hover:text-arctic"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const PricingControls = memo(PricingControlsComponent);