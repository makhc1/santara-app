import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo"; // GUA BALIKIN PAKE LOGO LO LAGI
import { ROUTES } from "../constants/routes";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <PageWrapper className="!bg-white">
      <div className="h-screen flex flex-col relative px-8 pt-10 pb-8">
        {/* 1. LOGO SECTION - PAKAI LOGO LO */}
        <div className="flex flex-col items-center mb-6">
          <Logo width="140px" className="mt-4" />

          <h2 className="font-sans font-bold text-[22px] text-[#1A1A1A] mt-6">
            Welcome Back
          </h2>
          <p className="font-sans text-[13px] text-[#555] text-center mt-1">
            Log in to continue monitoring your child's safety.
          </p>
        </div>

        {/* 2. INPUT FIELDS */}
        <div className="space-y-4 mb-2">
          {/* Email/Phone */}
          <div>
            <label className="block text-[12px] text-[#888] mb-1 font-sans">
              Email\Phone Number
            </label>
            <div className="flex items-center border border-[#DADADA] rounded-[10px] h-[48px] px-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                placeholder="Santara@santara.com"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#1A1A1A] ml-3 font-sans placeholder:text-[#999]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[12px] text-[#888] mb-1 font-sans">
              Password
            </label>
            <div className="flex items-center border border-[#DADADA] rounded-[10px] h-[48px] px-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                value="•••••••••••"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#1A1A1A] ml-3 font-sans"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none ml-2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="text-[13px] text-black font-sans mt-2 cursor-pointer">
          Forget password?
        </p>

        {/* 3. LOGIN BUTTON */}
        <button className="w-full bg-[#1A1A1A] text-white font-sans font-bold uppercase tracking-widest text-[15px] rounded-[10px] py-4 mt-5 hover:bg-gray-900 transition-colors">
          LOGIN
        </button>

        {/* 4. DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-[11px] text-gray-400 font-sans uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* 5. SOCIAL LOGIN BUTTONS */}
        <div className="space-y-3">
          {/* Phone */}
          <button className="w-full border border-[#E0E0E0] rounded-xl py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              <line x1="14" y1="2" x2="22" y2="2"></line>
              <line x1="18" y1="6" x2="22" y2="2"></line>
            </svg>
            <span className="font-sans font-medium text-[15px] text-[#1A1A1A]">
              Login With Phone
            </span>
          </button>

          {/* Google - YANG BENERAN BERFUNGSI */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-[#E0E0E0] rounded-xl py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
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
            <span className="font-sans font-medium text-[15px] text-[#1A1A1A]">
              Login With Google
            </span>
          </button>

          {/* Apple */}
          <button className="w-full border border-[#E0E0E0] rounded-xl py-3.5 px-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#111">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="font-sans font-medium text-[15px] text-[#1A1A1A]">
              Login With Apple
            </span>
          </button>
        </div>

        {/* 6. BOTTOM SIGN UP LINK (Fixed bottom) */}
        <div className="absolute bottom-8 left-0 right-0 text-center px-8">
          <p className="font-sans text-[13px] text-gray-500">
            Haven't any account?{" "}
            <span
              className="font-bold text-[#F4A124] cursor-pointer"
              onClick={() => navigate(ROUTES.REGISTER)}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
