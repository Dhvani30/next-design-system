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

  const handleMonthlyClick = useCallback(() => {
    onBillingChange("monthly");
  }, [onBillingChange]);

  const handleAnnualClick = useCallback(() => {
    onBillingChange("annual");
  }, [onBillingChange]);

  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="pricing-currency">Currency</label>
        <select
          id="pricing-currency"
          value={currency}
          onChange={handleCurrencyChange}
          className="min-w-[6rem] transition-colors duration-150 ease-out"
        >
          {CURRENCIES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      <div
        className="inline-flex rounded-full border border-expedition p-1"
        role="group"
        aria-label="Billing cycle"
      >
        {BILLING_CYCLES.map((cycle) => {
          const isActive = billingCycle === cycle;
          const label = cycle === "monthly" ? "Monthly" : "Annual";
          const onClick =
            cycle === "monthly" ? handleMonthlyClick : handleAnnualClick;

          return (
            <button
              key={cycle}
              type="button"
              aria-pressed={isActive}
              onClick={onClick}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-150 ease-out ${
                isActive
                  ? "bg-nocturnal text-oceanic"
                  : "text-mint hover:text-foreground"
              }`}
            >
              {label}
              {cycle === "annual" ? " (−20%)" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const PricingControls = memo(PricingControlsComponent);
