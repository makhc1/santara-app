import React from "react";
const StatusCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 text-center">
      <Icon size={20} className="text-accent mb-1" />
      <span className="text-muted text-[12px]">{label}</span>
      <span className="font-display font-semibold text-[14px]">{value}</span>
    </div>
  );
};
export default StatusCard;
