import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";

import ArabicLetters from "../../../../components/website/ArabicLetters";
import Navbar from "../../../../components/website/Navbar";
import TeacherPortrait from "../../../../components/website/TeacherPortrait";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const supportsParallax =
      !prefersReducedMotion &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let animationFrame = null;
    let handlePointerMove = null;
    let handlePointerLeave = null;

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray("[data-letter]", section);
      const portrait = section.querySelector("[data-portrait-wrap]");
      const curvePath = section.querySelector("[data-curve-path]");

      // Entrance animations
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.from("[data-nav]", {
          y: -20,
          opacity: 0,
          duration: 0.7,
        })
          .from(
            "[data-eyebrow]",
            {
              y: 16,
              opacity: 0,
              duration: 0.6,
            },
            "-=0.4",
          )
          .from(
            "[data-word]",
            {
              yPercent: 110,
              duration: 0.8,
              stagger: 0.08,
            },
            "-=0.4",
          )
          .from(
            "[data-reveal]",
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
              stagger: 0.12,
            },
            "-=0.5",
          )
          .from(
            "[data-disc]",
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.8",
          )
          .from(
            "[data-portrait]",
            {
              y: 35,
              opacity: 0,
              duration: 0.9,
            },
            "-=0.6",
          );

        // Draw the golden curve
        if (curvePath) {
          const length = curvePath.getTotalLength();

          gsap.set(curvePath, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          tl.to(
            curvePath,
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "-=0.6",
          ).from(
            "[data-curve-dot]",
            {
              scale: 0,
              transformOrigin: "center",
              duration: 0.3,
            },
            "-=0.1",
          );
        }
      }

      // Mouse parallax
      if (!supportsParallax) return;

      const letterMovements = letters.map((letter) => {
        const depth = Number(letter.dataset.depth) || 1;

        return {
          x: gsap.quickTo(letter, "x", {
            duration: 0.8,
            ease: "power2.out",
          }),
          y: gsap.quickTo(letter, "y", {
            duration: 0.8,
            ease: "power2.out",
          }),
          depth,
        };
      });

      const portraitX = portrait
        ? gsap.quickTo(portrait, "x", {
            duration: 0.8,
            ease: "power2.out",
          })
        : null;

      const portraitY = portrait
        ? gsap.quickTo(portrait, "y", {
            duration: 0.8,
            ease: "power2.out",
          })
        : null;

      const resetParallax = () => {
        letterMovements.forEach(({ x, y }) => {
          x(0);
          y(0);
        });

        portraitX?.(0);
        portraitY?.(0);
      };

      handlePointerMove = (event) => {
        if (event.pointerType !== "mouse") return;
        if (animationFrame !== null) return;

        const clientX = event.clientX;
        const clientY = event.clientY;

        animationFrame = requestAnimationFrame(() => {
          animationFrame = null;

          const rect = section.getBoundingClientRect();

          if (!rect.width || !rect.height) return;

          const xNorm = ((clientX - rect.left) / rect.width - 0.5) * 2;
          const yNorm = ((clientY - rect.top) / rect.height - 0.5) * 2;

          const clampedX = gsap.utils.clamp(-1, 1, xNorm);
          const clampedY = gsap.utils.clamp(-1, 1, yNorm);

          letterMovements.forEach(({ x, y, depth }) => {
            x(-clampedX * 14 * depth);
            y(-clampedY * 14 * depth);
          });

          portraitX?.(clampedX * 6);
          portraitY?.(clampedY * 6);
        });
      };

      handlePointerLeave = (event) => {
        if (event.pointerType !== "mouse") return;

        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }

        resetParallax();
      };

      section.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      section.addEventListener("pointerleave", handlePointerLeave);
    }, section);

    return () => {
      if (handlePointerMove) {
        section.removeEventListener("pointermove", handlePointerMove);
      }

      if (handlePointerLeave) {
        section.removeEventListener("pointerleave", handlePointerLeave);
      }

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      ctx.revert();
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");

    nextSection?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden lg:min-h-[94vh]"
    >
      <ArabicLetters />

      <Navbar />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-20 pt-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-16">
        <div className="text-center lg:text-start">
          <p
            data-eyebrow="true"
            className="inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base"
          >
            <span className="h-px w-8 bg-gold" />
            معلّم اللغة العربية
          </p>

          <h1 className="mt-6 pt-2 text-[2.6rem] font-extrabold leading-normal text-primary sm:text-6xl lg:text-[4.6rem]">
            <span className="block">
              <span className="word-mask">
                <span data-word="true" className="inline-block">
                  نُعلّم
                </span>
                &nbsp;
              </span>

              <span className="word-mask">
                <span data-word="true" className="inline-block">
                  العربية...
                </span>
                &nbsp;
              </span>
            </span>

            <span className="block">
              <span className="word-mask">
                <span data-word="true" className="inline-block">
                  لنصنع
                </span>
                &nbsp;
              </span>

              <span className="word-mask">
                <span data-word="true" className="inline-block">
                  بها
                </span>
                &nbsp;
              </span>

              <span className="word-mask">
                <span data-word="true" className="inline-block text-gold">
                  المستقبل.
                </span>
                &nbsp;
              </span>
            </span>
          </h1>

          <p
            data-reveal="true"
            className="mx-auto mt-6 max-w-md text-lg leading-loose text-muted-foreground lg:mx-0"
          >
            رحلة تعليمية مبنية على الفهم، والممارسة، والثقة — لطلاب المرحلة
            الابتدائية والإعدادية.
          </p>

          <div
            data-reveal="true"
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href="#contact" className="btn-primary group">
              ابدأ رحلة التعلم
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a href="#about" className="btn-ghost">
              تعرّف على المدرس
            </a>
          </div>
        </div>

        <TeacherPortrait />
      </div>

      <button
        type="button"
        onClick={scrollToNextSection}
        aria-label="انتقل إلى القسم التالي"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        اكتشف المزيد
        <span className="relative h-9 w-5 rounded-full border border-muted-foreground/40">
          <span className="animate-scroll-dot absolute left-1/2 top-1.5 size-1 -translate-x-1/2 rounded-full bg-gold" />
        </span>
      </button>
    </section>
  );
}
