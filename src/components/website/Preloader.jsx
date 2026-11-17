import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  const [isVisible, setIsVisible] = useState(true);

  // Keep the latest callback
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let hasCompleted = false;

    const finishPreloader = () => {
      if (hasCompleted) return;

      hasCompleted = true;

      setIsVisible(false);
      onCompleteRef.current?.();
    };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      finishPreloader();
      return;
    }

    let ctx;

    try {
      ctx = gsap.context(() => {
        const arc = container.querySelector("[data-loader-arc]");
        const inner = container.querySelector("[data-loader-inner]");
        const dot = container.querySelector("[data-loader-dot]");
        const character = container.querySelector("[data-loader-char]");
        const brand = container.querySelectorAll("[data-loader-brand]");
        const bar = container.querySelector("[data-loader-bar]");

        const tl = gsap.timeline({
          defaults: {
            overwrite: "auto",
          },
          onComplete: finishPreloader,
        });

        // Reveal the golden arc
        if (arc) {
          tl.fromTo(
            arc,
            {
              opacity: 0.2,
            },
            {
              opacity: 1,
              duration: 0.35,
              ease: "power2.out",
            },
          );
        }

        // Reveal the golden dot
        if (dot) {
          tl.fromTo(
            dot,
            {
              scale: 0,
            },
            {
              scale: 1,
              transformOrigin: "center",
              duration: 0.25,
              ease: "back.out(1.7)",
            },
            "-=0.15",
          );
        }

        // Reveal Arabic character
        if (character) {
          tl.fromTo(
            character,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.15",
          );
        }

        // Reveal teacher identity
        if (brand.length) {
          tl.fromTo(
            brand,
            {
              y: 10,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              stagger: 0.06,
              ease: "power2.out",
            },
            "-=0.2",
          );
        }

        // Progress bar
        if (bar) {
          tl.fromTo(
            bar,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 0.45,
              ease: "power2.inOut",
            },
            "-=0.15",
          );
        }

        // Hide inner content
        if (inner) {
          tl.to(inner, {
            y: -15,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }

        // Reveal website
        tl.to(container, {
          yPercent: -100,
          duration: 0.45,
          ease: "power3.inOut",
        });
      }, container);
    } catch (error) {
      console.error("Preloader animation failed:", error);
      finishPreloader();
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-deep text-primary-foreground"
    >
      {/* Background Arabic character */}
      <span className="pointer-events-none absolute select-none font-display text-[22rem] font-extrabold text-white/2 sm:text-[30rem]">
        ض
      </span>

      {/* Main content */}
      <div
        data-loader-inner="true"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Geometric circle and character */}
        <div className="relative grid size-28 place-items-center">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(255, 253, 249, 0.1)"
              strokeWidth="1"
            />

            {/* Golden arc */}
            <path
              data-loader-arc="true"
              d="M 15 86 A 52 52 0 1 1 96 23"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* Golden dot */}
            <circle
              data-loader-dot="true"
              cx="96"
              cy="23"
              r="2.5"
              fill="var(--gold)"
            />
          </svg>

          <div className="overflow-hidden py-1">
            <span
              data-loader-char="true"
              className="block font-display text-4xl font-extrabold text-gold"
            >
              ض
            </span>
          </div>
        </div>

        {/* Teacher identity */}
        <p
          data-loader-brand="true"
          className="mt-5 font-display text-2xl font-extrabold tracking-wide text-primary-foreground"
        >
          <span className="text-gold">أ/</span> الـشـاذلـي
        </p>

        <p
          data-loader-brand="true"
          className="mt-1.5 text-xs font-medium text-primary-foreground/60"
        >
          معلّم اللغة العربية
        </p>

        {/* Progress bar */}
        <div className="mt-7 h-[1.5px] w-36 overflow-hidden rounded-full bg-white/10">
          <div
            data-loader-bar="true"
            className="h-full w-full origin-right scale-x-0 bg-gold"
          />
        </div>
      </div>
    </div>
  );
}
