import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowUpLeft, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "201090164818";

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-reveal]", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppContact = () => {
    const selectedStage = sessionStorage.getItem("selectedLearningStage");

    const message = selectedStage
      ? `السلام عليكم، أريد الاستفسار عن دروس اللغة العربية لـ ${selectedStage}. أرجو معرفة تفاصيل الحصص ونظام الحجز.`
      : "السلام عليكم، أريد الاستفسار عن دروس اللغة العربية ونظام الحصص المتاحة.";

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section scroll-mt-0 bg-deep text-primary-foreground"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-10 lg:pt-28">
        {/* الترويسة العليا */}
        <div className="border-b border-primary-foreground/15 pb-10">
          <p className="text-sm font-semibold text-gold">07 / تواصل معنا</p>
          <h2
            id="contact-title"
            data-contact-reveal="true"
            className="mt-5 text-3xl font-extrabold leading-[1.7] sm:text-4xl"
          >
            خلّينا نبدأ معًا.
          </h2>
          <p
            data-contact-reveal="true"
            className="mt-4 max-w-2xl text-lg leading-loose text-primary-foreground/75"
          >
            لو بتدور على طريقة واضحة ومبسطة لتعلّم اللغة العربية، يسعدنا تواصلك
            للاستفسار عن الصفوف المتاحة ونظام الحصص.
          </p>
        </div>

        {/* محتوى قسم التواصل والحجز */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24 lg:py-20">
          <div>
            <p
              data-contact-reveal="true"
              className="text-sm font-medium text-gold"
            >
              هل أنت مستعد للبدء؟
            </p>
            <h3
              data-contact-reveal="true"
              className="mt-5 text-3xl font-extrabold leading-[1.75] sm:text-4xl lg:text-5xl"
            >
              خطوة صغيرة قد تصنع
              <br className="hidden sm:block" /> فرقًا كبيرًا.
            </h3>
            <p
              data-contact-reveal="true"
              className="mt-6 max-w-lg text-lg leading-loose text-primary-foreground/75"
            >
              لكل طالب بداية مختلفة. تواصلوا للاستفسار عن الصف المناسب، وطريقة
              الشرح، ونظام الحصص لأبنائكم.
            </p>

            <div
              data-contact-reveal="true"
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 contact-cta"
              >
                <MessageCircle aria-hidden="true" />
                تواصل عبر واتساب
                <ArrowUpLeft aria-hidden="true" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-loose text-primary-foreground/65">
              يسعدنا استقبال استفساراتكم عبر واتساب.
            </p>
          </div>

          <div className="self-center border-t border-primary-foreground/15 pt-7 lg:border-t-0 lg:border-s lg:ps-10 lg:pt-0">
            <p className="text-sm font-semibold text-gold">
              ابدأ رحلتك مع اللغة العربية
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-loose">لنتواصل.</h3>

            <p className="mt-4 max-w-sm text-base leading-loose text-primary-foreground/65">
              للحجز والاستفسار عن دروس اللغة العربية للمرحلتين الابتدائية
              والإعدادية، يمكنك التواصل معنا هاتفيًا.
            </p>

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              dir="ltr"
              className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-primary-foreground transition-colors hover:text-gold"
              aria-label="اتصل بنا هاتفيًا"
            >
              <Phone className="size-5 text-gold" aria-hidden="true" />
              <span>+20 109 016 4818</span>
            </a>
          </div>
        </div>

        {/* الـ Footer السفلي */}
        <footer className="flex flex-col gap-6 border-t border-primary-foreground/15 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="font-display text-xl font-bold">
            <span className="text-gold">أ/</span> الـشـاذلـي
          </a>
          <nav
            aria-label="روابط أسفل الصفحة"
            className="flex flex-wrap gap-6 text-primary-foreground/75"
          >
            <a href="#about" className="hover:text-gold">
              عن المدرس
            </a>
            <a href="#stages" className="hover:text-gold">
              المراحل الدراسية
            </a>
            <a href="#how-it-works" className="hover:text-gold">
              طريقة التدريس
            </a>
          </nav>
          <p className="text-primary-foreground/55">
            © {new Date().getFullYear()} أ/ الـشـاذلـي
          </p>
        </footer>
      </div>
    </section>
  );
}
