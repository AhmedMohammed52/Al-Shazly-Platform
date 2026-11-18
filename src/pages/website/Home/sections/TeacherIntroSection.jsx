import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { School, BookOpen, Lightbulb, Repeat } from "lucide-react";
import TeacherPhoto from "../../../../assets/teacher-photo.jfif";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherIntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-photo]",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-photo]",
            start: "top 85%",
          },
        },
      );

      gsap.from("[data-intro]", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("[data-principle]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#principles",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative scroll-mt-4 overflow-hidden bg-card py-24 lg:py-32"
    >
      {/* الحرف الكبير في الخلفية */}
      <span
        data-big-letter="true"
        aria-hidden="true"
        className="letter-deco absolute left-[-6%] top-[4%] text-[22rem] opacity-[0.04] lg:text-[34rem]"
      >
        ع
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* العمود الأيمن: صورة المدرس والإطارات العضوية */}
        <div className="relative mx-auto w-full max-w-95 lg:order-0">
          <div
            className="absolute -inset-4 organic-frame bg-sand"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-7 organic-frame border border-gold/60"
            style={{ rotate: "-6deg" }}
            aria-hidden="true"
          />
          <div
            data-photo="true"
            className="relative aspect-4/5 overflow-hidden organic-frame"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            <img
              src={TeacherPhoto}
              alt="الأستاذ محمد الشاذلي، معلم أول لغة عربية"
              loading="lazy"
              className="size-full object-cover object-[50%_15%]"
            />
          </div>
          <span className="absolute -bottom-3 inset-s-6 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md">
            معلّم لغة عربية
          </span>
        </div>

        {/* العمود الأيسر: نبذة عن المدرس ومبادئ التدريس */}
        <div>
          <p
            data-intro="true"
            className="inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base"
          >
            <span className="h-px w-8 bg-gold" /> مَن خلف الرحلة؟
          </p>

          <h2
            data-intro="true"
            className="mt-5 text-3xl font-extrabold leading-[1.4] text-primary sm:text-4xl lg:text-5xl"
          >
            الأستاذ محمد الشاذلي،
            <span className="text-gold">
              {" "}
              خبرة تتجاوز 15 عامًا في تعليم العربية.
            </span>
          </h2>

          <p
            data-intro="true"
            className="mt-6 max-w-xl text-lg leading-loose text-muted-foreground"
          >
            معلم أول لغة عربية، يمتلك خبرة تمتد لأكثر من 15 عامًا في تدريس اللغة
            العربية لطلاب المرحلتين الابتدائية والإعدادية. عمل بمدرسة تحيا مصر 1
            المتميزة للغات، ويعمل حاليًا بمدرسة المراشدة، إلى جانب تقديم الدروس
            الخصوصية، مع الحرص على تبسيط المعلومة وبناء فهم حقيقي لدى كل طالب.
          </p>

          {/* مبادئ التدريس */}
          <ol
            id="principles"
            className="mt-12 grid scroll-mt-24 border-t border-border sm:grid-cols-3"
          >
            <li data-principle="true" className="py-7 sm:px-5 sm:first:ps-0">
              <span className="font-display text-sm font-bold text-gold">
                01
              </span>
              <h3 className="mt-3 text-xl font-bold text-primary">
                الفهم أولًا
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                نبني أساسًا قويًا قبل الانتقال إلى الحفظ.
              </p>
            </li>

            <li
              data-principle="true"
              className="py-7 sm:px-5 sm:first:ps-0 border-t border-border sm:border-t-0 sm:border-s"
            >
              <span className="font-display text-sm font-bold text-gold">
                02
              </span>
              <h3 className="mt-3 text-xl font-bold text-primary">
                التعلّم بالممارسة
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                كل قاعدة تحتاج إلى تطبيق حتى تصبح مهارة.
              </p>
            </li>

            <li
              data-principle="true"
              className="py-7 sm:px-5 sm:first:ps-0 border-t border-border sm:border-t-0 sm:border-s"
            >
              <span className="font-display text-sm font-bold text-gold">
                03
              </span>
              <h3 className="mt-3 text-xl font-bold text-primary">
                الثقة في التعلّم
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                نساعد الطالب على أن يفهم ويجيب بنفسه.
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* الشريط السفلي */}
      <ul className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-y-5 border-y border-border px-5 py-6 md:grid-cols-4 md:px-10">
        <li className="flex items-center justify-center gap-3 text-sm font-medium text-foreground md:text-base">
          <School className="size-4.5 text-gold" aria-hidden="true" />
          المرحلة الابتدائية
        </li>
        <li className="flex items-center justify-center gap-3 text-sm font-medium text-foreground md:text-base">
          <BookOpen className="size-4.5 text-gold" aria-hidden="true" />
          المرحلة الإعدادية
        </li>
        <li className="flex items-center justify-center gap-3 text-sm font-medium text-foreground md:text-base">
          <Lightbulb className="size-4.5 text-gold" aria-hidden="true" />
          شرح مبسط
        </li>
        <li className="flex items-center justify-center gap-3 text-sm font-medium text-foreground md:text-base">
          <Repeat className="size-4.5 text-gold" aria-hidden="true" />
          تدريب مستمر
        </li>
      </ul>
    </section>
  );
}
