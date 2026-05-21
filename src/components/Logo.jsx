import React from "react";

const Logo = ({ width = "120px", height, className = "" }) => {
  return (
    <img
      src="/assets/logo.svg"
      alt="Santara Logo"
      style={{ width, height: height || "auto" }}
      className={`object-contain max-w-full h-auto ${className}`}
    />
  );
};

export default Logo;
