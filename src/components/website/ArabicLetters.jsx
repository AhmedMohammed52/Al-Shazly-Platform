const LETTERS = [
  {
    char: "ع",
    depth: 0.6,
    op: 0.06,
    style: { top: "8%", right: "-2%", fontSize: "9rem", rotate: "-12deg" },
    mobile: true,
  },
  {
    char: "ب",
    depth: 1.2,
    op: 0.07,
    style: { top: "22%", right: "40%", fontSize: "3.5rem", rotate: "8deg" },
    mobile: false,
  },
  {
    char: "ق",
    depth: 0.9,
    op: 0.06,
    style: { top: "70%", right: "6%", fontSize: "5rem", rotate: "14deg" },
    mobile: true,
  },
  {
    char: "ل",
    depth: 0.5,
    op: 0.05,
    style: { top: "12%", left: "34%", fontSize: "6rem", rotate: "-6deg" },
    mobile: false,
  },
  {
    char: "م",
    depth: 1.1,
    op: 0.07,
    style: { top: "80%", left: "44%", fontSize: "4rem", rotate: "10deg" },
    mobile: false,
  },
  {
    char: "ن",
    depth: 0.7,
    op: 0.05,
    style: { top: "58%", left: "-1.5%", fontSize: "8rem", rotate: "-18deg" },
    mobile: true,
  },
  {
    char: "ح",
    depth: 1.4,
    op: 0.08,
    style: { top: "14%", left: "6%", fontSize: "3rem", rotate: "20deg" },
    mobile: false,
  },
  {
    char: "ف",
    depth: 1.5,
    op: 0.08,
    style: { top: "46%", right: "47%", fontSize: "2.6rem", rotate: "-10deg" },
    mobile: false,
  },
  {
    char: "ك",
    depth: 1.0,
    op: 0.06,
    style: { top: "88%", right: "30%", fontSize: "3.2rem", rotate: "6deg" },
    mobile: false,
  },
  {
    char: "س",
    depth: 0.8,
    op: 0.05,
    style: { top: "36%", left: "18%", fontSize: "4.5rem", rotate: "12deg" },
    mobile: false,
  },
  {
    char: "و",
    depth: 1.3,
    op: 0.07,
    style: { top: "4%", right: "58%", fontSize: "2.8rem", rotate: "-14deg" },
    mobile: false,
  },
  {
    char: "ي",
    depth: 0.6,
    op: 0.05,
    style: { top: "92%", left: "12%", fontSize: "5.5rem", rotate: "4deg" },
    mobile: false,
  },
  {
    char: "ج",
    depth: 1.6,
    op: 0.06,
    style: { top: "30%", left: "48%", fontSize: "2.4rem", rotate: "18deg" },
    mobile: false,
  },
  {
    char: "ر",
    depth: 1.2,
    op: 0.06,
    style: { top: "64%", right: "38%", fontSize: "3.4rem", rotate: "-20deg" },
    mobile: false,
  },
];

export default function ArabicLetters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {LETTERS.map((item) => (
        <span
          key={item.char}
          data-letter="true"
          data-depth={item.depth}
          className={`letter-deco ${item.mobile ? "" : "hidden md:block"}`}
          style={{
            ...item.style,
            opacity: item.op,
            transform: `rotate(${item.style.rotate})`,
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}
