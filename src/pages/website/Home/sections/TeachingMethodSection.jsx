import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardCheck,
  BookOpenText,
  Target,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "٠١",
    title: "تقييم المستوى الأول",
    description:
      "نبدأ بفهم مستوى الطالب وتحديد نقاط القوة ومواطن التحدي في القراءة والنحو والإملاء.",
    icon: ClipboardCheck,
  },
  {
    number: "٠٢",
    title: "الشرح من الجذور",
    description:
      "نبسط القواعد ونشرحها بأمثلة واقعية وحياتية بعيدًا عن التلقين المعقد أو الحفظ الأعمى.",
    icon: BookOpenText,
  },
  {
    number: "٠٣",
    title: "تطبيق وتدريب عملي",
    description:
      "كل قاعدة تعقبها تمارين فورية داخل الحصة لترسخ في ذهن الطالب وتتحول إلى مهارة عملية.",
    icon: Target,
  },
  {
    number: "٠٤",
    title: "متابعة وتقييم مستمر",
    description:
      "نراجع الواجبات وندقق في التفاصيل بانتظام لنضمن تقدم الطالب وثقته المتزايدة بنفسه.",
    icon: TrendingUp,
  },
];

export default function TeachingMethodSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-work-head]", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        },
      });

      gsap.from("[data-work-step]", {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "[data-work-grid]",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative scroll-mt-4 bg-card py-24 lg:py-32 overflow-hidden border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* ترويسة القسم */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            data-work-head="true"
            className="inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base"
          >
            <span className="h-px w-8 bg-gold" />
            مسار التعلم المترابط
            <span className="h-px w-8 bg-gold" />
          </p>

          <h2
            data-work-head="true"
            className="mt-5 text-3xl font-extrabold leading-normal text-primary sm:text-4xl lg:text-5xl"
          >
            كيف تتكامل خطوات التعلّم <span className="text-gold">معًا؟</span>
          </h2>

          <p
            data-work-head="true"
            className="mt-4 text-lg leading-loose text-muted-foreground"
          >
            رحلة مدروسة بعناية تنتقل بالطالب من اكتشاف نقاط التحدي إلى الإتقان
            والثقة التامة.
          </p>
        </div>

        {/* شبكة الخطوات مع خط مسار رابط (Timeline Connector) */}
        <div
          data-work-grid="true"
          className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* خط أفقي يربط الكروت على الشاشات الكبيرة */}
          <div className="absolute top-1/2 left-10 right-10 hidden -translate-y-1/2 border-t-2 border-dashed border-border lg:block pointer-events-none" />

          {STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                data-work-step="true"
                className="group relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl z-10"
              >
                {/* شارة تسلسل المسار (رقم الخطوة مع تأثير بارز) */}
                <div className="absolute -top-4 right-8 flex size-9 items-center justify-center rounded-full border border-border bg-card font-display text-xs font-bold text-gold shadow-xs">
                  {step.number}
                </div>

                {/* الأيقونة */}
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gold group-hover:text-deep">
                    <IconComponent
                      className="size-6 text-gold group-hover:text-deep"
                      aria-hidden="true"
                    />
                  </div>
                  {/* سهم اتجاه المسار يظهر عند الهوفر */}
                  <ArrowLeft
                    className="size-4 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold"
                    aria-hidden="true"
                  />
                </div>

                {/* العنوان */}
                <h3 className="mt-6 text-xl font-bold text-primary">
                  {step.title}
                </h3>

                {/* الوصف */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* شريط رفيع ديكوري أسفل الكارت */}
                <div className="absolute inset-x-6 bottom-0 h-0.5 bg-linear-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
