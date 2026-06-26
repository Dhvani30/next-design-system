import type { Currency } from "./config";

const CURRENCY_FORMAT: Record<
  Currency,
  { locale: string; currency: string; maximumFractionDigits: number }
> = {
  INR: { locale: "en-IN", currency: "INR", maximumFractionDigits: 0 },
  USD: { locale: "en-US", currency: "USD", maximumFractionDigits: 0 },
  EUR: { locale: "de-DE", currency: "EUR", maximumFractionDigits: 0 },
};

export function formatPrice(amount: number, currency: Currency): string {
  const { locale, currency: code, maximumFractionDigits } =
    CURRENCY_FORMAT[currency];

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
    maximumFractionDigits,
  }).format(amount);
}
