import React from "react";
const PageWrapper = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div
        className={`w-mobile min-h-screen bg-white relative shadow-xl overflow-y-auto overflow-x-hidden ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
export default PageWrapper;
