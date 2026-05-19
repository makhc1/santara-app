import React from "react";
const badgeColors = {
  low: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  high: "bg-red-100 text-red-700",
};
const AlertCard = ({ severity, title, desc, time }) => {
  return (
    <div className="border border-border rounded-card p-4 mb-3 bg-white">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase ${badgeColors[severity]}`}
        >
          {severity}
        </span>
        <span className="text-muted text-[12px]">{time}</span>
      </div>
      <h3 className="font-display font-semibold text-[15px] mb-1">{title}</h3>
      <p className="text-muted text-[13px] mb-3">{desc}</p>
      <button className="text-teal-600 border border-teal-600 rounded-full px-4 py-1.5 text-[12px] font-bold hover:bg-teal-50">
        📍 View on Map
      </button>
    </div>
  );
};
export default AlertCard;
