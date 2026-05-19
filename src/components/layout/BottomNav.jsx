import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAppContext } from "../../context/AppContext"; // Import Context

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setShowNotif } = useAppContext(); // Ambil fungsi trigger notif

  const getActiveColor = (route) =>
    location.pathname === route ? "#F28C28" : "#999999";

  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white rounded-t-[20px] flex items-center justify-around overflow-visible z-[100] px-4">
      {/* 1. HOME */}
      <button
        onClick={() => navigate(ROUTES.HOME)}
        className="w-8 h-8 flex items-center justify-center overflow-visible focus:outline-none bg-transparent border-none p-0"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill={getActiveColor(ROUTES.HOME)}
          stroke="none"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          <path d="M10 19v-4h4v4" fill="#ffffff" />
        </svg>
      </button>

      {/* 2. TRIANGLE UP */}
      <button
        onClick={() => navigate(ROUTES.DETAIL_TRACKING)}
        className="w-8 h-8 flex items-center justify-center overflow-visible focus:outline-none bg-transparent border-none p-0"
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

      {/* 3. BELL - Trigger Notif */}
      <button
        onClick={() => setShowNotif(true)}
        className="w-8 h-8 flex items-center justify-center overflow-visible focus:outline-none bg-transparent border-none p-0"
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

      {/* 4. PERSON */}
      <button
        onClick={() => navigate(ROUTES.PROFILE)}
        className="w-8 h-8 flex items-center justify-center overflow-visible focus:outline-none bg-transparent border-none p-0"
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
    </nav>
  );
};

export default BottomNav;
