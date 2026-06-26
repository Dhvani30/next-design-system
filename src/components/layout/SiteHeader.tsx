import { BRAND_NAME, NAV_LINKS } from "@/lib/site/config";
import { MagneticButton } from "@/components/magnetic/MagneticButton";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-expedition bg-oceanic/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-lg font-semibold tracking-tight text-arctic transition-colors duration-150 ease-out hover:text-nocturnal"
        >
          <img
            src="/icons/cube-16-solid.svg"
            alt=""
            className="size-5"
            aria-hidden="true"
          />
          {BRAND_NAME}
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-arctic no-underline transition-colors duration-150 ease-out hover:text-nocturnal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-nocturnal after:transition-all after:duration-150 after:ease-out hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <MagneticButton
                href="#pricing"
                className="rounded-md bg-nocturnal px-4 py-2 text-sm font-medium text-oceanic no-underline transition-colors duration-150 ease-out hover:bg-saffron"
              >
                Get Started
              </MagneticButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
