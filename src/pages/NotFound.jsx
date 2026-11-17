import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-5 py-20 text-center md:px-10">
      {/* حرف عربي ديكوري في الخلفية متوافق مع هوية الموقع */}
      <span
        aria-hidden="true"
        className="absolute -top-10 select-none font-display font-extrabold text-primary opacity-[0.04] text-[24rem] lg:text-[34rem] pointer-events-none"
      >
        ض
      </span>

      <div className="relative z-10 mx-auto max-w-xl">
        {/* الترويسة العليا الصغيرة */}
        <p className="inline-flex items-center gap-3 text-sm font-semibold text-gold md:text-base">
          <span className="h-px w-8 bg-gold" />
          خطأ في المسار
        </p>

        {/* رقم الخطأ بتصميم جمالي */}
        <h1 className="mt-6 font-display text-7xl font-extrabold text-primary sm:text-8xl lg:text-9xl">
          4<span className="text-gold">٠</span>4
        </h1>

        {/* العنوان الرئيسي */}
        <h2 className="mt-4 text-2xl font-extrabold leading-loose text-primary sm:text-3xl">
          يبدو أن الصفحة التي تبحث عنها غير موجودة.
        </h2>

        {/* النص التوضيحي */}
        <p className="mt-4 text-base leading-loose text-muted-foreground sm:text-lg">
          عذراً، قد يكون الرابط قد تغير أو تم حذف الصفحة. دعنا نعيدك إلى طريق
          العودة الصحيح لنستكمل رحلة تعلّم العربية معاً.
        </p>

        {/* الأزرار التفاعلية */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary group">
            <Home className="size-4" aria-hidden="true" />
            العودة للرئيسية
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn-ghost group"
          >
            الصفحة السابقة
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* تذييل بسيط خاص بصفحة الخطأ */}
      <footer className="absolute bottom-6 text-xs text-muted-foreground/60">
        منصّة أ/ أحمد للغة العربية &copy; 2026
      </footer>
    </main>
  );
}
