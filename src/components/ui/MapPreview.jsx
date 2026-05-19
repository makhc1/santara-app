import React from "react";
import { MapPin } from "lucide-react";
const MapPreview = () => {
  return (
    <div className="relative w-full h-[180px] rounded-card bg-gray-200 overflow-hidden flex items-center justify-center border border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white mb-2">
          <MapPin size={20} className="text-white" />
        </div>
        <span className="bg-white px-2 py-1 rounded shadow text-[10px] font-bold">
          Child Location
        </span>
      </div>
    </div>
  );
};
export default MapPreview;
