import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import MapPreview from "../components/ui/MapPreview";
import {
  ArrowLeft,
  Activity,
  Clock,
  MapPin,
  Compass,
  Wifi,
  Timer,
} from "lucide-react";

const DetailTracking = () => {
  return (
    <PageWrapper>
      <div className="pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <ArrowLeft size={24} className="cursor-pointer" />
          <h2 className="font-display font-bold text-[18px]">
            Detail Tracking
          </h2>
          <div className="w-6"></div>
        </div>

        {/* Map */}
        <div className="p-5">
          <MapPreview />
        </div>

        {/* Status Banner */}
        <div className="mx-5 border border-border rounded-card p-4 flex items-center gap-3 mb-6">
          <div className="w-4 h-4 bg-success rounded-full"></div>
          <div>
            <h3 className="font-display font-bold text-[16px]">
              Currently Safe
            </h3>
            <p className="text-muted text-[13px]">
              Your child is within the safe zone
            </p>
          </div>
        </div>

        {/* Movement Status */}
        <div className="px-5 mb-6">
          <h3 className="font-display font-bold text-[18px] mb-3">
            Movement Status
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-border rounded-card p-4 flex flex-col items-center justify-center text-center">
              <Activity size={28} className="text-danger mb-2" />
              <h4 className="font-display font-bold text-[16px]">Moving</h4>
              <p className="text-muted text-[13px]">Current State</p>
            </div>
            <div className="border border-border rounded-card p-4 flex flex-col items-center justify-center text-center">
              <Clock size={28} className="text-success mb-2" />
              <h4 className="font-display font-bold text-[16px]">15 min</h4>
              <p className="text-muted text-[13px]">Time at Location</p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="px-5">
          <h3 className="font-display font-bold text-[18px] mb-3">
            Location Details
          </h3>
          <div className="border border-border rounded-card p-4 divide-y divide-border">
            <div className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <MapPin size={20} className="text-accent" />
              <div>
                <p className="font-bold text-[14px]">Current Location</p>
                <p className="text-muted text-[13px]">
                  School - SMK Negeri 20 Jakarta
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <Compass size={20} className="text-accent" />
              <div>
                <p className="font-bold text-[14px]">Coordinates</p>
                <p className="text-muted text-[13px]">-6.2088, 106.8456</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <Wifi size={20} className="text-accent" />
              <div>
                <p className="font-bold text-[14px]">Accuracy</p>
                <p className="text-muted text-[13px]">High (5m radius)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 last:pb-0">
              <Timer size={20} className="text-accent" />
              <div>
                <p className="font-bold text-[14px]">Last Update</p>
                <p className="text-muted text-[13px]">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </PageWrapper>
  );
};
export default DetailTracking;
