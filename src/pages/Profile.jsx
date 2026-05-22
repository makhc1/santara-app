import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { User, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAppContext } from "../context/AppContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <PageWrapper className="!bg-[#F2F2F7]">
      {/* MAIN CONTAINER: Sama persis kayak Home, Flex col biar navbar di bawah */}
      <div className="h-full flex flex-col overflow-hidden bg-[#F2F2F7]">
        {/* AREA KONTEN: Bisa di-scroll kalau layar kecil / konten panjang */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white flex-shrink-0">
            <button
              onClick={() => navigate(ROUTES.HOME)}
              className="focus:outline-none"
            >
              <svg
                width="24"
                height="24"
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
            <h2 className="font-display font-bold text-[18px] text-[#111]">
              Profile
            </h2>
            <div className="w-6"></div>
          </div>

          {/* Profile Info - Ambil data dari Google Auth (userData) */}
          <div className="flex flex-col items-center p-6 bg-white">
            <div className="w-20 h-20 bg-gray-100 rounded-full border-4 border-white shadow-md flex items-center justify-center mb-2 overflow-hidden">
              {userData?.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl">🧑</span>
              )}
            </div>
            <h3 className="font-display font-bold text-[18px] text-[#111]">
              {userData?.displayName || "User"}
            </h3>
            <p className="text-[#6B7280] text-[13px]">
              {userData?.email || "email@example.com"}
            </p>
          </div>

          {/* Parent Information */}
          <div className="px-5 mb-6 mt-2">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Parent Information
            </h3>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-none">
              <InputField
                icon={User}
                placeholder="Full name"
                defaultValue={userData?.displayName || ""}
              />
              <InputField
                icon={Mail}
                placeholder="Email address"
                defaultValue={userData?.email || ""}
              />
              <InputField icon={Phone} placeholder="Phone number" />
              <Button variant="orange" className="h-[48px]">
                Save
              </Button>
            </div>
          </div>

          {/* Connected Children */}
          <div className="px-5 mb-6">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Connected Children
            </h3>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                  👦
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-[15px] text-[#111]">
                    Charlie Christoper
                  </h4>
                  <p className="text-[#6B7280] text-[13px]">7 years old</p>
                </div>
                <span className="text-[#6B7280] text-[12px]">
                  🤖 Santara Doll
                </span>
              </div>
              <button className="w-full h-12 border-2 border-dashed border-[#F5A623] rounded-xl text-[#F5A623] font-semibold hover:bg-orange-50 transition-colors">
                + Add Child
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="px-5 pb-6">
            <Button variant="danger" onClick={handleLogout}>
              🚪 LOG OUT
            </Button>
          </div>
        </div>{" "}
        {/* End of Scroll Area */}
        {/* BOTTOM NAV - Di luar area scroll, nempel di bawah, ga nutupin apapun */}
        <BottomNav />
      </div>
    </PageWrapper>
  );
};

export default Profile;
