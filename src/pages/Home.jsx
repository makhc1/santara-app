import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";
import { useAppContext } from "../context/AppContext"; // Import Context

const Home = () => {
  const navigate = useNavigate();
  const { setShowNotif } = useAppContext(); // Ambil fungsi trigger notif

  return (
    <PageWrapper className="!bg-[#f7f7f3]">
      <div className="pb-24">
        {/* STATUS BAR */}
        <div className="flex items-center justify-between px-3 py-3 bg-white">
          <span className="font-bold text-[14px] text-black">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
              <path d="M2 22h20V2z" opacity=".3" />
              <path d="M12 7L2 17h20z" opacity=".3" />
              <path d="M2 22h20V2zm2-2V6l8 8 8-8v14z" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg width="20" height="16" viewBox="0 0 24 24" fill="black">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
            </svg>
          </div>
        </div>

        {/* BRAND & LOGO / HEADER */}
        <div className="flex items-start justify-between px-5 pt-4 pb-2 bg-white">
          <Logo width="140px" className="mt-2" />
          <div className="flex flex-col items-end gap-2 mt-2">
            {/* Bell Icon - Trigger Notif */}
            <div
              className="relative cursor-pointer"
              onClick={() => setShowNotif(true)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F28C28] rounded-full border-2 border-white"></div>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
              🐯
            </div>
          </div>
        </div>

        {/* WELCOME TEXT */}
        <div className="px-5 mt-4 mb-5 bg-white">
          <h2 className="font-display font-bold text-[18px] text-[#111111]">
            Welcome Santara,
          </h2>
          <h2 className="font-display font-bold text-[18px] text-[#F28C28]">
            Super Parent!
          </h2>
        </div>

        {/* STATUS CARD */}
        <div className="mx-5 mb-6 bg-white rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute top-3 right-3 w-3 h-3 bg-[#4CAF50] rounded-full border border-white shadow-sm"></div>
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
            <div className="flex flex-col items-center justify-center p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
                <line x1="23" y1="13" x2="23" y2="11"></line>
              </svg>
              <span className="font-bold text-[13px] text-[#111] mt-1">
                Doll Battery
              </span>
              <span className="text-[13px] text-[#666]">85%</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#111"
                stroke="none"
              >
                <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 7.94 7.38 14.5 8.05 15.12a.75.75 0 00.9 0C13.12 23 20.5 16.44 20.5 8.5 20.5 3.81 16.69 0 12 0zm0 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
              </svg>
              <span className="font-bold text-[13px] text-[#111] mt-1 text-center">
                Child Location
              </span>
              <span className="text-[13px] text-[#666] text-center">
                SMK Negeri 20
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
              <span className="font-bold text-[13px] text-[#111] mt-1">
                Status
              </span>
              <span className="text-[13px] text-[#666]">Online</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span className="font-bold text-[13px] text-[#111] mt-1">
                Safe Zone
              </span>
              <span className="text-[13px] text-[#666] text-center">
                In the safe zone
              </span>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="px-5 mb-6">
          <h3 className="font-display font-bold text-[20px] text-[#111] mb-4">
            Features
          </h3>
          <div
            className="bg-white rounded-xl shadow-sm p-4 flex items-center mb-3 cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(ROUTES.DETAIL_TRACKING)}
          >
            <div className="w-12 h-12 rounded-[10px] bg-[#e0f0f7] flex items-center justify-center mr-4 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"></polygon>
                <line x1="12" y1="15" x2="12" y2="22"></line>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-[14px] text-[#111]">
                Detail Tracking
              </h4>
              <p className="text-[12px] text-[#666] truncate">
                Real-time GPS tracking with movement status
              </p>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div
            className="bg-white rounded-xl shadow-sm p-4 flex items-center mb-3 cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(ROUTES.EMERGENCY)}
          >
            <div className="w-12 h-12 rounded-[10px] bg-[#fdecea] flex items-center justify-center mr-4 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-[14px] text-[#111]">
                Notification Urgency
              </h4>
              <p className="text-[12px] text-[#666] truncate">
                Emergency alerts with edge computing
              </p>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center mb-3 cursor-pointer hover:bg-gray-50">
            <div className="w-12 h-12 rounded-[10px] bg-[#e8f5e9] flex items-center justify-center mr-4 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-[14px] text-[#111]">
                Voice Detection
              </h4>
              <p className="text-[12px] text-[#666] truncate">
                Sound threat detection with auto-alerts
              </p>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        {/* LOCATION PREVIEW SECTION */}
        <div className="px-5 mb-4">
          <h3 className="font-display font-bold text-[20px] text-[#111] mb-4">
            Location Preview
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative w-full h-[180px] bg-gray-100">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.75%2C-6.32%2C106.87%2C-6.18&layer=mapnik"
                style={{ border: 0, width: "100%", height: "100%" }}
                loading="lazy"
                title="Map"
              ></iframe>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[50px] h-[50px] rounded-full border-4 border-[#F28C28] bg-white shadow-md flex items-center justify-center overflow-hidden">
                  <span className="text-3xl leading-none">👦</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-2.5 px-4 bg-white border-t border-gray-50">
              <div className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#F28C28"
                  stroke="none"
                >
                  <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 7.94 7.38 14.5 8.05 15.12a.75.75 0 00.9 0C13.12 23 20.5 16.44 20.5 8.5 20.5 3.81 16.69 0 12 0zm0 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg>
                <span className="text-[12px] font-medium text-[#111]">
                  SMK Negeri 20 Jakarta
                </span>
              </div>
              <span className="text-gray-300 mx-2">|</span>
              <div className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#F28C28"
                  stroke="none"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                </svg>
                <span className="text-[12px] font-medium text-[#111]">
                  Updated just now
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 mb-6">
          <button className="w-full bg-[#F28C28] text-white font-bold text-[16px] py-4 rounded-[14px] flex items-center justify-center gap-2 shadow-sm hover:bg-[#e8820c] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            View Full Map
          </button>
        </div>
      </div>

      <BottomNav />
    </PageWrapper>
  );
};

export default Home;
