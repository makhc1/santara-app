import React from "react";
const PaginationDots = ({ total, activeIndex }) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? "w-6 bg-[#1A1A1A]" : "w-2.5 bg-gray-300"}`}
        />
      ))}
    </div>
  );
};
export default PaginationDots;
