import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { User, Mail, Calendar, Phone, Lock, ChevronDown } from "lucide-react";
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
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="focus:outline-none">
            ←
          </button>
          <Logo width="100px" />
          <div className="w-6"></div>
        </div>

        <h2 className="font-display font-bold text-[24px] text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-[13px] text-[#555] text-center mb-6">
          Set up your parent account to start protecting your child.
        </p>

        <div className="flex-1 overflow-y-auto space-y-[14px] mb-4">
          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4">
              <User size={18} className="text-[#999]" />
              <input
                type="text"
                placeholder="SAMMY"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium uppercase"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4">
              <Mail size={18} className="text-[#999]" />
              <input
                type="email"
                placeholder="SANTARA@santara.com"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Birth Date
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4 justify-between">
              <input
                type="text"
                placeholder="14/03/1996"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] font-medium"
              />
              <ChevronDown size={18} className="text-[#333]" />
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Phone Number
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4">
              <Phone size={18} className="text-[#999]" />
              <input
                type="tel"
                placeholder="085659085578"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Password
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4">
              <Lock size={18} className="text-[#999]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
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
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Confirm password
            </label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[48px] px-4">
              <Lock size={18} className="text-[#999]" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] ml-3 font-medium"
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
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="text-[12px] text-[#666] mb-4 text-center">
          By registering, you agree to the{" "}
          <span className="text-primary underline">Terms and Conditions</span>
        </p>

        <Button variant="filled" onClick={handleRegister}>
          AGREE & CONTINUE
        </Button>

        <p className="text-center text-muted text-[14px] mt-4 mb-2">
          Already Have an Account?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Log In
          </span>
        </p>
      </div>
    </PageWrapper>
  );
};

export default Register;
