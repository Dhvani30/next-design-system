"use client";

import { memo } from "react";
import { TIERS } from "@/lib/pricing/config";
import { PricingCard } from "./PricingCard";

function PricingGridComponent() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {TIERS.map((tier) => (
        <PricingCard key={tier} tier={tier} />
      ))}
    </div>
  );
}

export const PricingGrid = memo(PricingGridComponent);
