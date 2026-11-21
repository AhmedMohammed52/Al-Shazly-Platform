import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LETTERS_DATA } from "../../../../data/website/showcaseData";

gsap.registerPlugin(ScrollTrigger);

export default function ArabicShowcase() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const isFirstRender = useRef(true);

  const current = LETTERS_DATA[activeIndex];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-type-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-type-change]",
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex]);

  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((idx + 1) % LETTERS_DATA.length);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((idx - 1 + LETTERS_DATA.length) % LETTERS_DATA.length);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="typography"
      className="bg-background py-24 lg:py-32"
      aria-labelledby="typography-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* الترويسة */}
        <p data-type-reveal="true" className="text-sm font-semibold text-gold">
          05 / جمال الحروف العربية
        </p>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <h2
            id="typography-title"
            data-type-reveal="true"
            className="text-3xl font-extrabold leading-[1.7] text-primary sm:text-4xl lg:text-5xl"
          >
            في كل حرفٍ جمال،
            <br />
            وفي كل كلمةٍ معنى.
          </h2>
          <p
            data-type-reveal="true"
            className="max-w-md text-lg leading-loose text-muted-foreground"
          >
            اللغة العربية ليست قواعد نحفظها فحسب، بل عالم من المعاني والتفاصيل
            يستحق أن نكتشفه.
          </p>
        </div>

        {/* معرض الحروف التفاعلي */}
        <div data-type-reveal="true" className="type-exhibition mt-12">
          {/* لوحة المخطوطة (اليمين) */}
          <div className="type-canvas" aria-hidden="true">
            <span className="type-corner type-corner-start" />
            <span className="type-corner type-corner-end" />

            <span className="type-manuscript-label">الحرف / {current.id}</span>

            <span data-type-change="true" className="type-featured-letter">
              {current.char}
            </span>

            <span data-type-change="true" className="type-word">
              {current.word}
            </span>

            <span data-type-change="true" className="type-companion">
              {current.companion}
            </span>

            <span className="type-mark">{current.mark}</span>
            <span className="type-caption">{current.caption}</span>
          </div>

          {/* الشرح وأزرار اختيار الحرف (اليسار) */}
          <div className="type-editorial">
            <div
              role="radiogroup"
              aria-label="اختر حرفًا"
              className="flex gap-3"
            >
              {LETTERS_DATA.map((letter, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={letter.id}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    aria-label={letter.name}
                    aria-controls="letter-note"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground type-selector ${
                      isActive ? "type-selector-active" : ""
                    }`}
                  >
                    {letter.char}
                  </button>
                );
              })}
            </div>

            <div
              id="letter-note"
              aria-live="polite"
              aria-atomic="true"
              className="type-note"
            >
              <p
                data-type-change="true"
                className="font-display text-sm font-semibold text-gold"
              >
                {current.eyebrow}
              </p>
              <h3
                data-type-change="true"
                className="mt-4 text-3xl font-bold leading-loose text-primary"
              >
                {current.name}
              </h3>
              <p
                data-type-change="true"
                className="mt-3 text-lg leading-loose text-muted-foreground"
              >
                {current.description}
              </p>
            </div>

            <p className="mt-8 border-t border-border pt-5 text-sm leading-loose text-muted-foreground">
              حرفٌ، ثم كلمةٌ، ثم عالمٌ من المعاني.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
