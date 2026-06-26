import Image from "next/image";
import { Hero3DLazy } from "./Hero3DLazy";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate grid items-center gap-10 lg:grid-cols-2 lg:gap-16 hero-grid-pattern"
    >
      <Hero3DLazy />

      <div className="hero-fade-in relative z-10">
        <h1 id="hero-heading" className="hero-headline text-arctic text-shadow-glow">
          Automate Your Data Pipeline
        </h1>
        <p className="mt-6 max-w-lg font-sans text-lg text-mint">
          Seamlessly integrate, process, and validate data with zero manual
          intervention.
        </p>
        <a
          href="#pricing"
          className="hero-cta mt-8 inline-flex items-center gap-2 rounded-lg bg-nocturnal px-8 py-4 text-sm font-medium text-oceanic transition-all duration-150 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(255,200,1,0.5)]"
        >
          Get Started Free
          <img
            src="/icons/arrow-trending-up.svg"
            alt=""
            className="size-4"
            aria-hidden="true"
          />
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

      <div className="hero-floating-dot hero-dot-1 absolute left-[10%] top-[20%] size-2 rounded-full bg-nocturnal opacity-60" />
      <div className="hero-floating-dot hero-dot-2 absolute left-[15%] bottom-[30%] size-3 rounded-full bg-nocturnal opacity-40" />
      <div className="hero-floating-dot hero-dot-3 absolute right-[20%] top-[15%] size-2 rounded-full bg-nocturnal opacity-50" />
      <div className="hero-floating-dot hero-dot-4 absolute right-[10%] bottom-[25%] size-2.5 rounded-full bg-nocturnal opacity-45" />
    </section>
  );
}
