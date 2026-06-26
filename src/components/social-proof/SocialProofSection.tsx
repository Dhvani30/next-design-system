import { SOCIAL_PROOF_COMPANIES } from "@/lib/site/config";

function CompanyLogo({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <svg
      viewBox="0 0 120 40"
      role="img"
      aria-label={name}
      className="h-8 w-auto text-mint/50"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="600"
      >
        {initials}
      </text>
      <text
        x="50"
        y="25"
        fill="currentColor"
        fontSize="12"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="500"
      >
        {name}
      </text>
    </svg>
  );
}

export function SocialProofSection() {
  return (
    <section aria-labelledby="social-proof-heading" className="py-4">
      <h2
        id="social-proof-heading"
        className="text-center font-sans text-xs font-medium uppercase tracking-widest text-mint"
      >
        Trusted by engineering teams at
      </h2>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {SOCIAL_PROOF_COMPANIES.map((company) => (
          <li key={company}>
            <CompanyLogo name={company} />
          </li>
        ))}
      </ul>
    </section>
  );
}
