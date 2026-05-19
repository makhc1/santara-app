import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { ArrowLeft, User, Mail, Phone } from "lucide-react";

const Profile = () => {
  return (
    <PageWrapper>
      <div className="pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <ArrowLeft size={24} className="cursor-pointer" />
          <h2 className="font-display font-bold text-[18px]">Profile</h2>
          <div className="w-6"></div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center p-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white shadow-md flex items-center justify-center mb-2 text-3xl">
            🧑
          </div>
          <h3 className="font-display font-bold text-[18px]">SANTARA</h3>
          <p className="text-muted text-[13px]">SANTARA@santara.com</p>
        </div>

        {/* Parent Information */}
        <div className="px-5 mb-6">
          <h3 className="font-display font-bold text-[18px] mb-3">
            Parent Information
          </h3>
          <div className="border border-border rounded-card p-4">
            <InputField icon={User} placeholder="Full name" />
            <InputField icon={Mail} placeholder="Email address" />
            <InputField icon={Phone} placeholder="Phone number" />
            <Button variant="orange" className="h-[48px]">
              Save
            </Button>
          </div>
        </div>

        {/* Connected Children */}
        <div className="px-5 mb-6">
          <h3 className="font-display font-bold text-[18px] mb-3">
            Connected Children
          </h3>
          <div className="border border-border rounded-card p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                👦
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold text-[15px]">
                  Charlie Christoper
                </h4>
                <p className="text-muted text-[13px]">7 years old</p>
              </div>
              <span className="text-muted text-[12px]">🤖 Santara Doll</span>
            </div>
            <button className="w-full h-12 border-2 border-dashed border-accent rounded-btn text-accent font-semibold hover:bg-orange-50 transition-colors">
              + Add Child
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="px-5">
          <Button variant="danger">🚪 LOG OUT</Button>
        </div>
      </div>
      <BottomNav />
    </PageWrapper>
  );
};
export default Profile;
