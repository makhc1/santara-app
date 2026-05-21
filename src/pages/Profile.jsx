import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import BottomNav from '../components/layout/BottomNav';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import { User, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes'; // FIX: Pakai ../ bukan ../../
import { useAppContext } from '../context/AppContext';

const Profile = () => {
  const navigate = useNavigate();
  const { setShowNotif } = useAppContext();

  return (
    <PageWrapper className="!bg-[#F2F2F7]">
      {/* Padding bawah biar ga ketutupan navbar */}
      <div className="pb-28 min-h-screen bg-[#F2F2F7]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white">
          <button onClick={() => navigate(-1)} className="focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <h2 className="font-display font-bold text-[18px] text-[#111]">Profile</h2>
          <div className="w-6"></div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-20 h-20 bg-gray-100 rounded-full border-4 border-white shadow-md flex items-center justify-center mb-2 text-3xl">🧑</div>
          <h3 className="font-display font-bold text-[18px] text-[#111]">SANTARA</h3>
          <p className="text-[#6B7280] text-[13px]">SANTARA@santara.com</p>
        </div>

        {/* Parent Information */}
        <div className="px-5 mb-6 mt-2">
          <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">Parent Information</h3>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-none">
            <InputField icon={User} placeholder="Full name" />
            <InputField icon={Mail} placeholder="Email address" />
            <InputField icon={Phone} placeholder="Phone number" />
            <Button variant="orange" className="h-[48px]">Save</Button>
          </div>
        </div>

        {/* Connected Children */}
        <div className="px-5 mb-6">
          <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">Connected Children</h3>
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-none">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-xl">👦</div>
              <div className="flex-1">
                <h4 className="font-display font-bold text-[15px] text-[#111]">Charlie Christoper</h4>
                <p className="text-[#6B7280] text-[13px]">7 years old</p>
              </div>
              <span className="text-[#6B7280] text-[12px]">🤖 Santara Doll</span>
            </div>
            <button className="w-full h-12 border-2 border-dashed border-[#F5A623] rounded-xl text-[#F5A623] font-semibold hover:bg-orange-50 transition-colors">
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