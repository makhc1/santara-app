import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";

const features = [
  {
    icon: "🔔",
    title: "Instant Alerts",
    desc: "Receive real-time notifications whenever your child needs attention.",
  },
  {
    icon: "📍",
    title: "Location Tracking",
    desc: "Monitor your child's movements with accurate live location updates.",
  },
  {
    icon: "🎙️",
    title: "Voice Detection",
    desc: "Detect unusual sounds around your child to increase safety awareness.",
  },
  {
    icon: "🛡️",
    title: "Safe Zone",
    desc: "Set custom safe areas and get notified instantly when your child enters or leaves the zone.",
  },
  {
    icon: "🔋",
    title: "Device Battery Check",
    desc: "Monitor your child's Smart Doll battery level to ensure it stays active throughout the day.",
  },
];

const Onboarding4 = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper className="!bg-[#f7f7f3]">
      <div className="flex flex-col h-screen px-6 pt-10 pb-6">
        {/* BRAND & LOGO SECTION */}
        <div className="mb-8 flex justify-center">
          <Logo width="140px" />
        </div>

        {/* HEADER SECTION */}
        <h2 className="font-display font-bold text-[22px] text-[#111111] text-center leading-snug mb-3">
          Smart Companion for Your Child's Safety
        </h2>
        <p className="text-[14px] text-[#666666] text-center leading-relaxed mb-6">
          Santara is your smart safety companion that helps you stay connected
          with your child at all times. Receive instant alerts, real-time
          updates, and insightful notifications designed to keep you informed,
          confident, and reassured throughout the day, wherever you are.
        </p>

        {/* FEATURE LIST */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-8 scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl flex items-start gap-4"
              style={{
                padding: "14px 16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              <span className="text-[40px] leading-none flex-shrink-0 mt-[-2px]">
                {feature.icon}
              </span>
              <div className="flex-1">
                <h3 className="font-display font-bold text-[15px] text-[#111111] mb-1">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#666666] leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => navigate(ROUTES.LOGIN)}
            className="w-[45%] h-[52px] border-2 border-[#111111] bg-white text-[#111111] rounded-[30px] font-display font-bold text-[15px] uppercase hover:bg-gray-50 transition-colors"
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate(ROUTES.REGISTER)}
            className="w-[45%] h-[52px] bg-[#111111] text-white rounded-[30px] font-display font-bold text-[15px] uppercase hover:bg-gray-900 transition-colors"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Onboarding4;
