import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import {
  MapPin,
  Compass,
  Wifi,
  Timer,
  Activity,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { ROUTES } from "../constants/routes";

const DetailTracking = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper className="!bg-[#F2F2F7]">
      {/* MAIN CONTAINER: Sama kayak Home, Flex col biar navbar ga ikut scroll */}
      <div className="h-full flex flex-col overflow-hidden bg-[#F2F2F7]">
        {/* AREA KONTEN: Bisa di-scroll */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white flex-shrink-0">
            <button
              onClick={() => navigate(ROUTES.HOME)}
              className="focus:outline-none"
            >
              <ArrowLeft size={24} className="text-[#111]" />
            </button>
            <h2 className="font-display font-bold text-[18px] text-[#111]">
              Detail Tracking
            </h2>
            <div className="w-6"></div>
          </div>

          {/* Map Placeholder */}
          <div className="p-5">
            <div className="w-full h-[200px] rounded-2xl bg-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-none">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.75%2C-6.32%2C106.87%2C-6.18&layer=mapnik"
                style={{ border: 0, width: "100%", height: "100%" }}
                loading="lazy"
                title="Detail Map"
              ></iframe>
            </div>
          </div>

          {/* Status Banner */}
          <div className="mx-5 border-none rounded-2xl p-4 flex items-center gap-3 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.07)] bg-white">
            <div className="w-4 h-4 bg-[#4A6741] rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-display font-bold text-[16px] text-[#111]">
                Currently Safe
              </h3>
              <p className="text-[#6B7280] text-[13px]">
                Your child is within the safe zone
              </p>
            </div>
          </div>

          {/* Movement Status */}
          <div className="px-5 mb-6">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Movement Status
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="border-none rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.07)] bg-white">
                <Activity size={28} className="text-[#ef4444] mb-2" />
                <h4 className="font-display font-bold text-[16px] text-[#111]">
                  Moving
                </h4>
                <p className="text-[#6B7280] text-[13px]">Current State</p>
              </div>
              <div className="border-none rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.07)] bg-white">
                <Clock size={28} className="text-[#4A6741] mb-2" />
                <h4 className="font-display font-bold text-[16px] text-[#111]">
                  15 min
                </h4>
                <p className="text-[#6B7280] text-[13px]">Time at Location</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="px-5 pb-6">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Location Details
            </h3>
            <div className="border-none rounded-2xl p-4 divide-y divide-[#F0F0F0] shadow-[0_2px_12px_rgba(0,0,0,0.07)] bg-white">
              <div className="flex items-center gap-3 py-3 first:pt-0">
                <MapPin size={20} className="text-[#F5A623] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[14px] text-[#111]">
                    Current Location
                  </p>
                  <p className="text-[#6B7280] text-[13px]">
                    School - SMK Negeri 20 Jakarta
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <Compass size={20} className="text-[#F5A623] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[14px] text-[#111]">
                    Coordinates
                  </p>
                  <p className="text-[#6B7280] text-[13px]">
                    -6.2088, 106.8456
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <Wifi size={20} className="text-[#F5A623] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[14px] text-[#111]">Accuracy</p>
                  <p className="text-[#6B7280] text-[13px]">High (5m radius)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3 last:pb-0">
                <Timer size={20} className="text-[#F5A623] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[14px] text-[#111]">
                    Last Update
                  </p>
                  <p className="text-[#6B7280] text-[13px]">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End of Scroll Area */}
        {/* BOTTOM NAV - Di luar area scroll, nempel di bawah */}
        <BottomNav />
      </div>
    </PageWrapper>
  );
};

export default DetailTracking;
