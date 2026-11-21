import { LETTERS } from "../../data/website/heroData";

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
