export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-expedition px-6 py-4">
        <nav aria-label="Main">
          <p className="text-sm uppercase tracking-widest text-saffron">
            Design System
          </p>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-16 px-6 py-16">
        <section aria-labelledby="hero-heading">
          <p className="mb-4 text-sm text-saffron">Oceanic Noir · Dark Default</p>
          <h1 id="hero-heading" className="hero-headline">
            Build with clarity.
          </h1>
          <p className="mt-6 max-w-xl">
            Inter for body and UI. JetBrains Mono for headings, numbers, and
            code. Arctic Powder on Oceanic Noir.
          </p>
        </section>

        <section aria-labelledby="pricing-heading">
          <h2 id="pricing-heading">Pricing</h2>
          <article className="mt-6 rounded-lg border border-expedition bg-expedition/20 p-8">
            <h3>Pro</h3>
            <p className="pricing-number mt-2">$29</p>
            <p className="mt-2">
              per month · billed <time dateTime="P1M">monthly</time>
            </p>
          </article>
        </section>

        <section aria-labelledby="typography-heading">
          <h2 id="typography-heading">Typography</h2>
          <div className="mt-6 space-y-4">
            <h3>Heading level three</h3>
            <p>
              Body copy uses <strong>Inter</strong> with semantic{" "}
              <code>&lt;p&gt;</code> tags. Links use{" "}
              <a href="#typography-heading">Nocturnal Gold</a>.
            </p>
            <pre>
              <code>{`const theme = "oceanic-noir";\nconsole.log(theme);`}</code>
            </pre>
          </div>
        </section>

        <section aria-labelledby="palette-heading">
          <h2 id="palette-heading">Palette</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <li className="rounded-md bg-nocturnal px-4 py-6 text-oceanic">
              Nocturnal
            </li>
            <li className="rounded-md bg-expedition px-4 py-6 text-arctic">
              Expedition
            </li>
            <li className="rounded-md bg-arctic px-4 py-6 text-oceanic">
              Arctic
            </li>
            <li className="rounded-md bg-mint px-4 py-6 text-oceanic">Mint</li>
            <li className="rounded-md bg-saffron px-4 py-6 text-oceanic">
              Saffron
            </li>
            <li className="rounded-md bg-oceanic px-4 py-6 text-arctic ring-1 ring-expedition">
              Oceanic
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-expedition px-6 py-8">
        <p>
          <small>© {new Date().getFullYear()} Design System Demo</small>
        </p>
      </footer>
    </div>
  );
}
