import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import AlertCard from "../components/ui/AlertCard";
import Button from "../components/ui/Button";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const EmergencyAlerts = () => {
  return (
    <PageWrapper>
      <div className="pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <ArrowLeft size={24} className="cursor-pointer" />
          <h2 className="font-display font-bold text-[18px]">
            Emergency Alerts
          </h2>
          <div className="w-6"></div>
        </div>

        {/* SOS Card */}
        <div className="p-5">
          <div className="bg-danger rounded-card p-6 text-center text-white">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={32} className="text-danger" />
            </div>
            <h3 className="font-display font-bold text-[20px] mb-2">
              Emergency SOS
            </h3>
            <p className="text-[13px] opacity-90 mb-4">
              Press and hold to send an emergency alert to all contacts
            </p>
            <Button
              variant="outline"
              className="border-white text-danger bg-white hover:bg-gray-100"
            >
              Hold to Activate SOS
            </Button>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="px-5">
          <h3 className="font-display font-bold text-[18px] mb-3">
            Recent Alerts
          </h3>
          <AlertCard
            severity="low"
            title="Unusual Movement Detected"
            desc="Child left designated safe zone briefly"
            time="10 min ago"
          />
          <AlertCard
            severity="medium"
            title="Battery Low Warning"
            desc="Smart doll battery below 20%"
            time="1 hour ago"
          />
          <AlertCard
            severity="low"
            title="Connection Lost"
            desc="Brief connection interruption detected"
            time="3 hours ago"
          />
        </div>
      </div>
      <BottomNav />
    </PageWrapper>
  );
};
export default EmergencyAlerts;
