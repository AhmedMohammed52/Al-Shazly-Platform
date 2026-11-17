import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LearningStagesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-stage-head]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("[data-stage]", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-stages]",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStageSelection = (stage) => {
    sessionStorage.setItem("selectedLearningStage", stage);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="stages"
      className="relative scroll-mt-4 overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* رأس القسم */}
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
          <span
            data-stage-head="true"
            className="font-display text-6xl font-extrabold leading-none text-gold/30 lg:text-8xl"
          >
            03
          </span>
          <div>
            <p
              data-stage-head="true"
              className="inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base"
            >
              <span className="h-px w-8 bg-gold" /> مسارات التعلّم
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <h2
                data-stage-head="true"
                className="text-3xl font-extrabold leading-normal text-primary sm:text-4xl lg:text-5xl"
              >
                لكل مرحلة... <span className="text-gold">طريقة تناسبها.</span>
              </h2>
              <p
                data-stage-head="true"
                className="max-w-md text-lg leading-loose text-muted-foreground"
              >
                من تأسيس المهارات الأولى إلى إتقان قواعد اللغة العربية، نرافق
                الطالب في رحلة تعليمية تناسب مستواه واحتياجاته.
              </p>
            </div>
          </div>
        </div>

        {/* كروت مسارات التعلّم */}
        <div
          data-stages="true"
          className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.12fr] lg:items-start"
        >
          {/* المرحلة الابتدائية */}
          <article data-stage="true" className="stage-panel stage-light">
            <span
              data-stage-letter="true"
              aria-hidden="true"
              className="stage-letter"
            >
              ب
            </span>
            <div className="relative flex items-start justify-between gap-4">
              <p className="stage-label">المرحلة الابتدائية</p>
              <span className="stage-num">01</span>
            </div>
            <h3 className="relative mt-8 text-2xl font-extrabold leading-[1.55] sm:text-3xl">
              نؤسّس علاقتك باللغة العربية.
            </h3>
            <p className="stage-desc relative mt-4 max-w-md leading-loose">
              خطوات واضحة لبناء مهارات القراءة والكتابة والإملاء، مع تبسيط
              القواعد وتدريب الطالب على استخدامها.
            </p>
            <ul className="relative mt-8 grid grid-cols-1 sm:grid-cols-2">
              <li className="stage-area">القراءة والفهم</li>
              <li className="stage-area">النحو والتأسيس</li>
              <li className="stage-area">الإملاء والكتابة</li>
              <li className="stage-area">التعبير اللغوي</li>
            </ul>
            <button
              type="button"
              onClick={() => handleStageSelection("المرحلة الابتدائية")}
              className="stage-cta group relative mt-9"
            >
              اكتشف المسار
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </button>
          </article>

          {/* المرحلة الإعدادية */}
          <article
            data-stage="true"
            className="stage-panel stage-dark lg:mt-16"
          >
            <span
              data-stage-letter="true"
              aria-hidden="true"
              className="stage-letter"
            >
              ض
            </span>
            <div className="relative flex items-start justify-between gap-4">
              <p className="stage-label">المرحلة الإعدادية</p>
              <span className="stage-num">02</span>
            </div>
            <h3 className="relative mt-8 text-2xl font-extrabold leading-[1.55] sm:text-3xl">
              من الفهم إلى إتقان القواعد.
            </h3>
            <p className="stage-desc relative mt-4 max-w-md leading-loose">
              تعلّم أعمق لقواعد اللغة العربية والنصوص، مع تدريبات تساعد الطالب
              على التحليل والتطبيق والاستعداد للامتحانات.
            </p>
            <ul className="relative mt-8 grid grid-cols-1 sm:grid-cols-2">
              <li className="stage-area">النحو والتطبيق</li>
              <li className="stage-area">القراءة والنصوص</li>
              <li className="stage-area">التعبير والأساليب</li>
              <li className="stage-area">التدريب على الامتحانات</li>
            </ul>
            <button
              type="button"
              onClick={() => handleStageSelection("المرحلة الإعدادية")}
              className="stage-cta group relative mt-9"
            >
              اكتشف المسار
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
