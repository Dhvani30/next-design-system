import Image from "next/image";
import { Hero3DLazy } from "./Hero3DLazy";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <Hero3DLazy />

      <div className="hero-fade-in relative z-10">
        <h1 id="hero-heading" className="hero-headline text-arctic">
          Automate Your Data Pipeline
        </h1>
        <p className="mt-6 max-w-lg font-sans text-lg text-mint">
          Seamlessly integrate, process, and validate data with zero manual
          intervention.
        </p>
        <a
          href="#pricing"
          className="hero-cta mt-8 inline-block rounded-lg bg-nocturnal px-6 py-3 text-sm font-medium text-oceanic transition-transform duration-150 ease-out hover:scale-105"
        >
          Get Started Free
        </a>
      </div>

      <figure className="hero-fade-in hero-fade-in-delay relative z-10">
        <Image
          src="/images/hero-automation.webp"
          alt="Automated data processing workflow"
          width={640}
          height={480}
          priority
          loading="eager"
          className="hero-image-float w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        />
      </figure>
    </section>
  );
}
