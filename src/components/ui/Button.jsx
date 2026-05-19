import React from "react";
const variants = {
  filled: "bg-[#1A1A1A] text-white hover:bg-gray-800",
  outline: "border-2 border-[#1A1A1A] text-[#1A1A1A] bg-white hover:bg-gray-50",
  orange: "bg-accent text-white hover:bg-orange-500",
  danger: "bg-danger text-white hover:bg-red-600",
};
const Button = ({ children, variant = "filled", className = "", ...props }) => {
  return (
    <button
      className={`h-[52px] w-full font-display font-semibold text-[15px] rounded-btn flex items-center justify-center transition-colors disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
