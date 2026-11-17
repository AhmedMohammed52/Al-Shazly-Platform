import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن المدرس", href: "#about" },
  { label: "طريقة التدريس", href: "#how-it-works" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header data-nav="true" className="relative z-30">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10"
        aria-label="التنقل الرئيسي"
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-baseline gap-1 font-display text-2xl font-extrabold text-primary"
          aria-label="العودة إلى الرئيسية"
        >
          <span className="text-gold">أ/</span> الـشـاذلـي
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-9 text-[15px] text-foreground/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="link-underline transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("#contact")}
            className="btn-primary hidden py-2.5! px-5! text-sm sm:inline-flex"
          >
            احجز حصتك
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="grid size-11 place-items-center rounded-full border border-border text-primary lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="mx-5 rounded-2xl border border-border bg-white/95 p-5 shadow-lg backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-foreground/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full py-1 text-start hover:text-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="btn-primary mt-5 w-full py-2.5! text-sm"
          >
            احجز حصتك
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </header>
  );
}
