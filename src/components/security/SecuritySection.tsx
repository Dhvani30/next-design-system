import Image from "next/image";

export function SecuritySection() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="relative w-full border-y border-nocturnal/30 bg-gradient-to-b from-expedition to-oceanic"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
        <figure className="relative">
          <Image
            src="/images/feature-security.webp"
            alt="Enterprise-grade security dashboard showing compliance metrics and encryption status"
            width={640}
            height={480}
            className="w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </figure>

        <div>
          <span className="inline-flex items-center rounded-full border border-saffron/40 bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
            ENTERPRISE-GRADE
          </span>
          <h2
            id="security-heading"
            className="mt-4 font-mono text-3xl font-semibold tracking-tight text-arctic lg:text-4xl"
          >
            Bank-Level Security & Compliance
          </h2>
          <p className="mt-4 max-w-lg text-mint">
            Your data is protected by industry-leading encryption and compliance
            standards. We maintain SOC 2 Type II, ISO 27001, and GDPR compliance
            across all regions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <img
                src="/icons/cube-16-solid.svg"
                alt=""
                className="mt-1 size-5 shrink-0 text-nocturnal"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-mono text-sm font-semibold text-arctic">
                  End-to-End Encryption
                </h3>
                <p className="mt-1 text-xs text-mint">
                  AES-256 encryption at rest and in transit
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/link-solid.svg"
                alt=""
                className="mt-1 size-5 shrink-0 text-nocturnal"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-mono text-sm font-semibold text-arctic">
                  Secure Integrations
                </h3>
                <p className="mt-1 text-xs text-mint">
                  OAuth 2.0 and SAML SSO support
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/chart-pie.svg"
                alt=""
                className="mt-1 size-5 shrink-0 text-nocturnal"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-mono text-sm font-semibold text-arctic">
                  Compliance Reports
                </h3>
                <p className="mt-1 text-xs text-mint">
                  Automated audit logs and reporting
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/arrow-path.svg"
                alt=""
                className="mt-1 size-5 shrink-0 text-nocturnal"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-mono text-sm font-semibold text-arctic">
                  Real-time Monitoring
                </h3>
                <p className="mt-1 text-xs text-mint">
                  24/7 threat detection and response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
