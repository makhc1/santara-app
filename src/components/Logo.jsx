import React from "react";

const Logo = ({ width = "120px", className = "" }) => {
  return (
    <img
      src="/assets/logo.svg"
      alt="Santara Logo"
      style={{ width }}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
