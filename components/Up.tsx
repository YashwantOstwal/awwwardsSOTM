"use client";
export default function Up() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <button
      className="text-[14px] leading-[0.85] font-[470] tracking-[-0.01em] uppercase lg:text-[1.27315vw] lg:font-regular-plus"
      onClick={handleClick}
    >
      Up
    </button>
  );
}
