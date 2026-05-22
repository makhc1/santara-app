import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAppContext } from "../context/AppContext"; // tambahin ini

const RegisterChild = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext(); // ambil userData dari context
  const [childName, setChildName] = useState("");
  const [gender, setGender] = useState("Boy");
  const [birthDate, setBirthDate] = useState("");
  const [school, setSchool] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveChild = async () => {
    if (!childName) return alert("Masukkan nama anak");

    if (!userData?.uid) {
      alert("Kamu belum login!");
      navigate(ROUTES.LOGIN);
      return;
    }

    setIsSaving(true);
    try {
      const childrenRef = collection(db, "users", userData.uid, "children");

      await addDoc(childrenRef, {
        name: childName,
        gender: gender,
        birthDate: birthDate,
        school: school,
        createdAt: new Date(),
      });

      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Error saving child data:", error);
      alert("Gagal menyimpan data anak. Error: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageWrapper className="!bg-white">
      <div className="flex flex-col h-screen px-6 pt-8 pb-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="focus:outline-none text-[24px]"
          >
            ←
          </button>
          <Logo width="130px" />
          <div className="w-6"></div>
        </div>

        <h2 className="font-display font-bold text-[24px] text-center mb-2">
          Connect Your Kid
        </h2>
        <p className="text-[13px] text-[#555] mb-5 text-center">
          Connect your child's smart safety profile.
        </p>

        <div className="flex justify-center mb-5">
          <span className="text-6xl">🧒</span>
        </div>

        <div className="space-y-[14px] mb-4">
          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Child Name
            </label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="SANTARA"
              className="w-full border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 text-[14px] text-[#111] font-medium uppercase"
            />
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">Gender</label>
            <div className="flex items-center border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 justify-between">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full h-full bg-transparent outline-none text-[14px] text-[#111] font-medium appearance-none"
              >
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
              </select>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="1.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 text-[14px] text-[#111] font-medium"
            />
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
              School / Daycare (Optional)
            </label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="SMK Negeri 20 Jakarta"
              className="w-full border border-[#d0d0d0] rounded-[10px] h-[50px] px-4 text-[14px] text-[#111] font-medium"
            />
          </div>

          <div>
            <label className="block text-[12px] text-[#888] mb-1">
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

        <button
          onClick={handleSaveChild}
          disabled={isSaving}
          className="w-full h-[50px] bg-[#111111] text-white font-bold text-[14px] tracking-[1px] uppercase rounded-[10px] hover:bg-black transition-colors mt-1 disabled:opacity-50"
        >
          {isSaving ? "SAVING..." : "CONTINUE"}
        </button>
      </div>
    </PageWrapper>
  );
};

export default RegisterChild;
