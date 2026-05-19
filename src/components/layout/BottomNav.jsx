import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveColor = (route) =>
    location.pathname === route ? "#F28C28" : "#999999";

  return (
    // Wrapper transparan tanpa background gelap, posisi tetap di bawah
    <div className="absolute bottom-0 left-0 right-0 z-50">
      {/* White background, full width, rounded top only (20px 20px 0 0), flush to bottom */}
      <div className="bg-white rounded-t-[20px] h-[60px] flex justify-around items-center px-4">
        {/* 1. HOME */}
        <button
          onClick={() => navigate(ROUTES.HOME)}
          className="p-2 focus:outline-none"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill={getActiveColor(ROUTES.HOME)}
            stroke="none"
          >
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            {/* Door cutout matches white background */}
            <path d="M10 19v-4h4v4" fill="#ffffff" />
          </svg>
        </button>

        {/* 2. ALERT / TRACKING */}
        <button
          onClick={() => navigate(ROUTES.DETAIL_TRACKING)}
          className="p-2 focus:outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={getActiveColor(ROUTES.DETAIL_TRACKING)}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 3 22 21 2 21"></polygon>
          </svg>
        </button>

        {/* 3. BELL / EMERGENCY */}
        <button
          onClick={() => navigate(ROUTES.EMERGENCY)}
          className="p-2 focus:outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={getActiveColor(ROUTES.EMERGENCY)}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>

        {/* 4. PERSON / PROFILE */}
        <button
          onClick={() => navigate(ROUTES.PROFILE)}
          className="p-2 focus:outline-none"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={getActiveColor(ROUTES.PROFILE)}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
