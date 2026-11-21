import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ArrowLeft, X, BookOpen, Clock } from "lucide-react";
import { GRADES, LESSONS_DATA } from "../../../../data/website/LibraryData";

gsap.registerPlugin(ScrollTrigger);

function LessonCover({ lesson }) {
  return (
    <div className={`lesson-cover ${lesson.variant}`} aria-hidden="true">
      <span className="cover-main">{lesson.mainChar}</span>
      {lesson.secondChar && (
        <span className="cover-second">{lesson.secondChar}</span>
      )}
      <span className="cover-line" />
      <span className="cover-dot" />
      <span className="cover-tag">{lesson.subject}</span>
    </div>
  );
}

export default function LibrarySection() {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLesson, setActiveLesson] = useState(null);

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const isFirstFilter = useRef(true);

  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    const matchesGrade =
      selectedGrade === "all" || lesson.gradeId === selectedGrade;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      lesson.title.toLowerCase().includes(query) ||
      lesson.subject.toLowerCase().includes(query) ||
      lesson.description.toLowerCase().includes(query);

    return matchesGrade && matchesSearch;
  });

  // أنيميشن دخول القسم عند السكرول
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-lib-head]", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("[data-lib-controls]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-lib-controls]",
          start: "top 85%",
        },
      });

      gsap.from("[data-lesson]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // أنيميشن ناعم عند تغيير الفلتر أو البحث
  useEffect(() => {
    if (isFirstFilter.current) {
      isFirstFilter.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-lesson]");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            clearProps: "transform,opacity",
            overwrite: "auto",
          },
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [selectedGrade, searchQuery]);

  // إغلاق المودال بزر Escape ومنع السكرول الخلفي
  useEffect(() => {
    if (!activeLesson) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveLesson(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLesson]);

  // التنقل بالأسهم في شريط الفلاتر
  const handleFilterKeyDown = (e, idx) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const nextIdx = (idx + 1) % GRADES.length;
      setSelectedGrade(GRADES[nextIdx].id);
      document.getElementById(`grade-${GRADES[nextIdx].id}`)?.focus();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const prevIdx = (idx - 1 + GRADES.length) % GRADES.length;
      setSelectedGrade(GRADES[prevIdx].id);
      document.getElementById(`grade-${GRADES[prevIdx].id}`)?.focus();
    }
  };

  const scrollToStages = () => {
    const stagesEl = document.getElementById("stages");
    if (stagesEl) {
      stagesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="library"
      className="relative scroll-mt-4 overflow-hidden bg-card py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* ترويسة القسم */}
        <div className="relative">
          <span
            data-lib-letter="true"
            aria-hidden="true"
            className="letter-deco -top-16 inset-e-0 text-[16rem] opacity-[0.04] lg:text-[24rem]"
          >
            ق
          </span>

          <p
            data-lib-head="true"
            className="relative inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base"
          >
            <span className="font-display">04</span>
            <span className="text-border">/</span> مكتبة التعلّم
          </p>

          <div className="relative mt-5 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2
              data-lib-head="true"
              className="text-3xl font-extrabold leading-[1.55] text-primary sm:text-4xl lg:text-5xl"
            >
              من أول قاعدة...{" "}
              <span className="text-gold">إلى إتقان اللغة.</span>
            </h2>

            <p
              data-lib-head="true"
              className="max-w-md text-lg leading-loose text-muted-foreground"
            >
              اكتشف الدروس المناسبة لمرحلتك، وتعلّم اللغة العربية خطوة بخطوة من
              خلال الشرح المبسّط والتدريب العملي.
            </p>
          </div>
        </div>

        {/* شريط التصفية والبحث */}
        <div
          data-lib-controls="true"
          className="mt-12 flex flex-col gap-5 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0 scrollbar-none">
            <div
              role="radiogroup"
              aria-label="تصفية حسب الصف"
              className="flex w-max gap-2"
            >
              {GRADES.map((grade, idx) => {
                const isActive = selectedGrade === grade.id;
                return (
                  <button
                    key={grade.id}
                    id={`grade-${grade.id}`}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setSelectedGrade(grade.id)}
                    onKeyDown={(e) => handleFilterKeyDown(e, idx)}
                    className={`filter-chip ${
                      isActive ? "filter-chip-active" : ""
                    }`}
                  >
                    {grade.label}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="lib-search">
            <Search className="size-4 shrink-0 text-gold" aria-hidden="true" />
            <span className="sr-only">ابحث في الدروس</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن درس أو قاعدة نحوية..."
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        {/* عدد النتائج لقارئات الشاشة */}
        <p className="sr-only" aria-live="polite">
          {filteredLessons.length} درس
        </p>

        {/* شبكة الدروس أو حالة عدم وجود نتائج */}
        {filteredLessons.length > 0 ? (
          <div
            ref={gridRef}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredLessons.map((lesson) => (
              <button
                key={lesson.id}
                type="button"
                data-lesson="true"
                onClick={() => setActiveLesson(lesson)}
                className="lesson-card group text-start"
              >
                <LessonCover lesson={lesson} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="font-semibold text-gold">
                      {lesson.grade}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span className="rounded-full border border-border px-2.5 py-0.5">
                        {lesson.type}
                      </span>
                      {lesson.duration && <span>{lesson.duration}</span>}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-[1.6] text-primary">
                    {lesson.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {lesson.description}
                  </p>

                  <span className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-primary">
                    <span className="text-xs font-normal text-muted-foreground">
                      درس تجريبي
                    </span>
                    <span className="lesson-arrow">
                      عرض التفاصيل{" "}
                      <ArrowLeft className="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div
            ref={gridRef}
            className="mt-12 rounded-xl border border-border bg-background px-6 py-16 text-center"
          >
            <p className="font-display text-lg font-bold text-primary">
              لم نعثر على دروس مطابقة لبحثك.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              جرّب البحث بكلمة أخرى أو اختر صفًا دراسيًا مختلفًا.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedGrade("all");
              }}
              className="btn-ghost mt-6 py-2.5! px-5! text-sm"
            >
              مسح البحث
            </button>
          </div>
        )}

        {/* تذييل القسم */}
        <div className="relative mt-20 overflow-hidden border-t border-border pt-12">
          <span
            aria-hidden="true"
            className="letter-deco -bottom-24 inset-s-[30%] text-[12rem] opacity-[0.04]"
          >
            ع
          </span>

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold leading-[1.6] text-primary sm:text-3xl">
                رحلتك مع العربية تبدأ بخطوة.
              </h3>
              <p className="mt-2 text-muted-foreground">
                اختر مرحلتك، واستعد لاكتشاف اللغة بطريقة أوضح.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToStages}
              className="btn-primary group self-start md:self-auto"
            >
              تعرّف على المراحل الدراسية
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* نافذة تفاصيل الدرس (Modal) */}
      {activeLesson && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lesson-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveLesson(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <LessonCover lesson={activeLesson} />

            <button
              type="button"
              onClick={() => setActiveLesson(null)}
              aria-label="إغلاق النافذة"
              className="absolute top-4 inset-e-4 grid size-10 place-items-center rounded-full border border-border bg-card/90 text-primary transition-colors hover:border-gold hover:text-deep"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-gold">
                  {activeLesson.grade}
                </span>
                <span className="text-border">•</span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-muted-foreground">
                  {activeLesson.subject}
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-muted-foreground">
                  {activeLesson.type}
                </span>
                {activeLesson.duration && (
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5 text-gold" aria-hidden="true" />
                    {activeLesson.duration}
                  </span>
                )}
              </div>

              <h3
                id="lesson-modal-title"
                className="mt-4 text-2xl font-extrabold leading-normal text-primary"
              >
                {activeLesson.title}
              </h3>

              <p className="mt-3 text-base leading-loose text-muted-foreground">
                {activeLesson.description}
              </p>

              {activeLesson.isSample && (
                <div className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                  <BookOpen
                    className="size-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>
                    نموذج معاينة تجريبي — سيُضاف محتوى هذا الدرس قريبًا.
                  </span>
                </div>
              )}

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveLesson(null)}
                  className="btn-ghost py-2.5! px-6! text-sm"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
