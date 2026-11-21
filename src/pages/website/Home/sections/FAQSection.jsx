import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../../../../data/website/faqData";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-faq-head]", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from("[data-faq-item]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "[data-faq-list]",
          start: "top 85%",
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative scroll-mt-4 overflow-hidden border-y border-border bg-card py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        {/* ترويسة القسم */}
        <div className="text-center">
          <p
            data-faq-head="true"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold md:text-base"
          >
            <HelpCircle className="size-4 text-gold" aria-hidden="true" />
            الأسئلة الشائعة
          </p>

          <h2
            data-faq-head="true"
            className="mt-5 text-3xl font-extrabold leading-normal text-primary sm:text-4xl lg:text-5xl"
          >
            إجابات واضحة عن <span className="text-gold">استفساراتكم.</span>
          </h2>

          <p
            data-faq-head="true"
            className="mt-4 text-lg leading-loose text-muted-foreground"
          >
            كل ما ترغبون في معرفته حول نظام الحصص، متابعة الطلاب، وطريقة حجز
            المواعيد.
          </p>
        </div>

        {/* قائمة الأسئلة */}
        <div data-faq-list="true" className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.id}
                data-faq-item="true"
                className="overflow-hidden rounded-2xl border border-border bg-background shadow-xs transition-all duration-300 hover:border-gold/60"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span className="text-lg font-bold text-primary sm:text-xl">
                    {item.question}
                  </span>

                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-gold text-deep" : ""
                    }`}
                  >
                    <ChevronDown className="size-5" aria-hidden="true" />
                  </span>
                </button>

                {/* محتوى الإجابة */}
                <div
                  id={`faq-answer-${item.id}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6 px-6"
                      : "grid-rows-[0fr] px-6 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border pt-4 text-base leading-loose text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
