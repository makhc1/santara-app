import React from "react";
import { ChevronRight } from "lucide-react";
const FeatureCard = ({ icon: Icon, iconBg, title, desc }) => {
  return (
    <div className="flex items-center p-4 border border-border rounded-btn mb-3 hover:bg-card transition-colors cursor-pointer">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${iconBg}`}
      >
        <Icon size={24} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold text-[15px]">{title}</h3>
        <p className="text-muted text-[13px] leading-tight mt-0.5 truncate">
          {desc}
        </p>
      </div>
      <ChevronRight size={20} className="text-muted ml-2 flex-shrink-0" />
    </div>
  );
};
export default FeatureCard;
