import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo"; // Import komponen Logo
import { ROUTES } from "../constants/routes";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    navigate(ROUTES.REGISTER_CHILD);
  };

  return (
    <PageWrapper className="!bg-white">
      <div className="flex flex-col h-screen px-6 pt-8 pb-6">
        {/* BRAND & LOGO SECTION - PAKAI LOGO SVG LO */}
        <div className="mb-6 mt-4 flex justify-center">
          <Logo width="160px" />
        </div>

        {/* HEADER SECTION */}
        <h2 className="font-display font-bold text-[24px] text-[#111111] mb-2 text-center">
          Create Your Account
        </h2>
        <p className="text-[13px] text-[#555555] mb-6 text-center leading-relaxed">
          Set up your parent account to start protecting
          <br />
          your child with Santara.
        </p>

        {/* FORM FIELDS */}
        <div className="flex-1 overflow-y-auto space-y-[14px] mb-4">
          {/* Field 1: Full Name */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors">
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
                defaultValue="SAMMY"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium uppercase"
              />
            </div>
          </div>

          {/* Field 2: Email Address */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors">
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                type="email"
                defaultValue="SANTARA@santara.com"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          {/* Field 3: Birth Date */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Birth Date
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors justify-between">
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
                stroke="#111"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Field 4: Phone Number */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Phone Number
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <input
                type="tel"
                defaultValue="085659085578"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          {/* Field 5: Password */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Password
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="1234567890"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] font-medium"
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
                  stroke="#999"
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

          {/* Field 6: Confirm Password */}
          <div>
            <label className="block text-[12px] text-[#888888] mb-1">
              Confirm password
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 focus-within:border-[#4a6e1a] transition-colors">
              <input
                type={showConfirmPassword ? "text" : "password"}
                defaultValue="1234567890"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] font-medium"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus:outline-none ml-2"
              >
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
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* TERMS TEXT */}
        <div className="mb-4">
          <p className="text-[12px] text-[#666666]">
            By registering, you agree to the
          </p>
          <p className="text-[12px] text-[#4a6e1a] font-medium cursor-pointer">
            Terms and Conditions
          </p>
        </div>

        {/* AGREE & CONTINUE BUTTON */}
        <button
          className="w-[60%] mx-auto block h-[48px] bg-[#111111] text-white font-bold text-[14px] tracking-[1px] uppercase rounded-[10px] hover:bg-black transition-colors"
          onClick={handleRegister}
        >
          AGREE & CONTINUE
        </button>

        {/* BOTTOM LINK */}
        <div className="text-center mt-6 mb-4">
          <span className="text-[13px] text-[#666666]">
            Already Have an Account?{" "}
          </span>
          <span
            className="text-[13px] text-[#4a6e1a] font-bold cursor-pointer"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Sign Up
          </span>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Register;
