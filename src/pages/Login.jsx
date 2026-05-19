import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import { ROUTES } from "../constants/routes";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate(ROUTES.HOME);
  };

  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-white px-7 pt-8 pb-6">
        {/* BRAND & LOGO SECTION */}
        <div className="relative mb-10 mt-4">
          <h1 className="font-display font-extrabold text-[64px] text-[#4a6e1a] leading-none tracking-tight">
            santara
          </h1>
          {/* Decorative Peacock overlapping the 4th letter 'a' */}
          <div className="absolute top-[-10px] left-[80px] text-[#c8860a] drop-shadow-sm select-none">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              {/* Simplified ornate peacock tail spreading right */}
              <path
                d="M30 70 Q10 50 20 30 Q30 10 50 20 Q70 10 80 30 Q90 50 70 70"
                stroke="#c8860a"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M35 65 Q20 50 25 35 Q35 20 50 25 Q65 20 75 35 Q80 50 65 65"
                stroke="#daa520"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="50" cy="30" r="3" fill="#c8860a" />
              <circle cx="30" cy="40" r="2" fill="#daa520" />
              <circle cx="70" cy="40" r="2" fill="#daa520" />
              {/* Body facing left */}
              <ellipse cx="50" cy="78" rx="10" ry="14" fill="#4a6e1a" />
              <circle cx="44" cy="72" r="2" fill="white" />
              <path d="M34 78 L24 82 L34 86 Z" fill="#daa520" /> {/* Beak */}
            </svg>
          </div>
        </div>

        {/* HEADER SECTION */}
        <h2 className="font-display font-bold text-[26px] text-[#111111] mb-2 text-left">
          Welcome Back
        </h2>
        <p className="text-[14px] text-[#444444] mb-8 text-left">
          Log in to continue monitoring your child's safety.
        </p>

        {/* FORM FIELDS */}
        <div className="w-full mb-2">
          <label className="block text-[12px] text-[#888888] mb-1.5 text-left">
            Email\Phone Number
          </label>
          <div className="flex items-center border border-[#dddddd] rounded-[10px] px-4 py-3.5 focus-within:border-[#4a6e1a] transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              type="text"
              placeholder="Santara@santara.com"
              className="w-full bg-transparent outline-none text-[14px] text-[#111] placeholder:text-[#999] ml-3"
            />
          </div>
        </div>

        <div className="w-full mb-2">
          <label className="block text-[12px] text-[#888888] mb-1.5 text-left">
            Password
          </label>
          <div className="flex items-center border border-[#dddddd] rounded-[10px] px-4 py-3.5 focus-within:border-[#4a6e1a] transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              className="w-full bg-transparent outline-none text-[14px] text-[#111] placeholder:text-[#999] ml-3"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="text-left mb-6">
          <span className="text-[13px] text-[#111111] cursor-pointer font-medium">
            Forget password?
          </span>
        </div>

        {/* LOGIN BUTTON */}
        <button
          className="w-full bg-[#111111] text-white font-bold text-[15px] tracking-[1px] uppercase rounded-[10px] py-4 hover:bg-black transition-colors"
          onClick={handleLogin}
        >
          LOGIN
        </button>

        {/* DIVIDER */}
        <div className="flex items-center justify-center my-5">
          <div className="h-px bg-[#e0e0e0] w-full"></div>
          <span className="px-3 text-[12px] text-[#999] whitespace-nowrap">
            — OR CONTINUE WITH —
          </span>
          <div className="h-px bg-[#e0e0e0] w-full"></div>
        </div>

        {/* SOCIAL LOGIN BUTTONS */}
        <div className="flex flex-col items-center gap-3 mb-auto">
          <button
            className="w-[85%] border border-[#e0e0e0] rounded-[10px] py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            onClick={handleLogin}
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              <line x1="12" y1="5" x2="12" y2="13"></line>
              <line x1="8" y1="9" x2="16" y2="9"></line>
            </svg>
            <span className="text-[15px] text-[#333] font-medium">
              Login With Phone
            </span>
          </button>

          <button
            className="w-[85%] border border-[#e0e0e0] rounded-[10px] py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            onClick={handleLogin}
          >
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-[15px] text-[#333] font-medium">
              Login With Google
            </span>
          </button>

          <button
            className="w-[85%] border border-[#e0e0e0] rounded-[10px] py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            onClick={handleLogin}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#111">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-[15px] text-[#333] font-medium">
              Login With Apple
            </span>
          </button>
        </div>

        {/* BOTTOM LINK */}
        <div className="text-center mt-8 mb-4">
          <span className="text-[13px] text-[#666666]">
            Haven't any account?{" "}
          </span>
          <span
            className="text-[13px] text-[#4a6e1a] font-bold cursor-pointer"
            onClick={() => navigate(ROUTES.REGISTER)}
          >
            Sign Up
          </span>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
