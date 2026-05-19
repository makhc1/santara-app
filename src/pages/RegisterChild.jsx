import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";

const RegisterChild = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper className="!bg-white">
      <div className="flex flex-col h-screen px-6 pt-6 pb-6 overflow-y-auto">
        {/* TOP BAR - Back Arrow */}
        <div className="mb-2">
          <button
            onClick={() => navigate(-1)}
            className="focus:outline-none p-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </div>

        {/* BRAND & LOGO SECTION - Exactly 352x138px Container, Centered */}
        <div className="w-[352px] h-[138px] mx-auto mb-4 flex items-center justify-center">
          <Logo width="160px" />
        </div>

        {/* HEADER SECTION */}
        <h2 className="font-display font-bold text-[24px] text-[#111111] mb-1 text-center">
          Connect Your Kid
        </h2>
        <p className="text-[13px] text-[#666666] mb-5 text-center">
          Connect your child's smart safety profile.
        </p>

        {/* CHILD ILLUSTRATION */}
        <div className="flex justify-center mb-5">
          <svg
            width="160"
            height="140"
            viewBox="0 0 160 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Desk */}
            <rect x="20" y="90" width="120" height="10" rx="2" fill="#8B4513" />
            <rect x="30" y="100" width="10" height="30" fill="#8B4513" />
            <rect x="120" y="100" width="10" height="30" fill="#8B4513" />
            {/* Chair */}
            <rect x="60" y="100" width="40" height="5" rx="2" fill="#F5A623" />
            <rect x="65" y="105" width="5" height="25" fill="#F5A623" />
            <rect x="90" y="105" width="5" height="25" fill="#F5A623" />
            <rect x="55" y="60" width="5" height="45" fill="#F5A623" />
            {/* Body / Shirt */}
            <rect x="60" y="55" width="40" height="35" rx="5" fill="#4A90E2" />
            {/* Arms */}
            <rect x="45" y="60" width="15" height="8" rx="4" fill="#4A90E2" />
            <rect x="100" y="60" width="15" height="8" rx="4" fill="#4A90E2" />
            {/* Hands */}
            <circle cx="45" cy="64" r="5" fill="#FFDAB9" />
            <circle cx="115" cy="64" r="5" fill="#FFDAB9" />
            {/* Head */}
            <circle cx="80" cy="40" r="20" fill="#FFDAB9" />
            {/* Hair */}
            <path
              d="M60 35 Q65 15 80 15 Q95 15 100 35 Q100 25 90 22 Q80 20 70 22 Q60 25 60 35Z"
              fill="#5D4037"
            />
            {/* Eyes */}
            <circle cx="73" cy="38" r="2" fill="#111" />
            <circle cx="87" cy="38" r="2" fill="#111" />
            {/* Smile */}
            <path
              d="M75 47 Q80 52 85 47"
              stroke="#111"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Books on desk */}
            <rect x="30" y="75" width="20" height="15" rx="1" fill="#E74C3C" />
            <rect x="32" y="72" width="18" height="4" rx="1" fill="#3498DB" />
            {/* Pencil */}
            <rect x="110" y="70" width="4" height="20" rx="1" fill="#F1C40F" />
            <polygon points="110,90 114,90 112,95" fill="#FFDAB9" />
          </svg>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-[14px] mb-5">
          {/* Field 1: Child Name */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Child Name
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 focus-within:border-[#4a6e1a] transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                defaultValue="SANTARA"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium uppercase"
              />
            </div>
          </div>

          {/* Field 2: Gender */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Gender
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 focus-within:border-[#4a6e1a] transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <input
                type="text"
                defaultValue="Boy"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          {/* Field 3: Birth Date */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Birth Date
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 focus-within:border-[#4a6e1a] transition-colors justify-between">
              <input
                type="text"
                defaultValue="14/03/1996"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] font-medium"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Field 4: School / Daycare */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              School / Daycare (Optional)
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 focus-within:border-[#4a6e1a] transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <input
                type="text"
                defaultValue="SMK Negeri 20 Jakarta"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          {/* Field 5: Photo Profile */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Photo Profile
            </label>
            <div className="border-dashed border-[1.5px] border-[#d0d0d0] rounded-xl h-[120px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F28C28"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <p className="font-bold text-[15px] text-[#111] mt-2">
                Add your child's photo
              </p>
              <p className="text-[11px] text-[#999] mt-1">
                Format: .jpeg, .png & Max file size: 25 MB
              </p>
            </div>
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <button
          className="w-[60%] mx-auto block h-[50px] bg-[#111111] text-white font-bold text-[14px] tracking-[1px] uppercase rounded-[10px] hover:bg-black transition-colors mt-1"
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
        >
          CONTINUE
        </button>
      </div>
    </PageWrapper>
  );
};

export default RegisterChild;
