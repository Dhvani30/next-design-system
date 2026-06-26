import { BRAND_NAME, NAV_LINKS } from "@/lib/site/config";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-expedition bg-oceanic/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-lg font-semibold tracking-tight text-arctic transition-colors duration-150 ease-out hover:text-nocturnal"
        >
          {BRAND_NAME}
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-mint transition-colors duration-150 ease-out hover:text-arctic"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
