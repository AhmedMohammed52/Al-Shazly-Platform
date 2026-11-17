import ImageSrc from "../../assets/teacher-cutout.png";

export default function TeacherPortrait() {
  return (
    <div
      data-portrait-wrap="true"
      className="relative mx-auto aspect-4/5 w-full max-w-67.5 sm:max-w-87.5 lg:max-w-110"
    >
      {/* الدائرة الخلفية */}
      <div
        data-disc="true"
        className="absolute inset-x-[6%] top-[22%] aspect-square rounded-full bg-primary"
        aria-hidden="true"
      />

      {/* المنحنى الذهبي */}
      <svg
        data-curve="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute inset-x-0 top-[17%] aspect-square w-full"
        aria-hidden="true"
      >
        <path
          data-curve-path="true"
          d="M 22 140 A 88 88 0 0 1 128 14"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        <circle
          data-curve-dot="true"
          cx="128"
          cy="14"
          r="1.8"
          fill="var(--gold)"
        />
      </svg>

      {/* صورة المدرس */}
      <img
        data-portrait="true"
        src={ImageSrc}
        alt="معلّم اللغة العربية مبتسمًا ويداه متشابكتان"
        className="portrait-fade absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
        width="440"
        height="550"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
