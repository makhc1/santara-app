import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { User, Mail, Phone, Lock, ChevronDown } from "lucide-react";
import { ROUTES } from "../constants/routes";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    setError("");

    if (!fullName || !email || !password || !confirmPassword) {
      return setError("Semua field harus diisi");
    }
    if (password !== confirmPassword) {
      return setError("Password tidak cocok");
    }
    if (password.length < 6) {
      return setError("Password minimal 6 karakter");
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: fullName });

      await setDoc(doc(db, "users", user.uid), {
        displayName: fullName,
        email: email,
        phoneNumber: phone,
        birthDate: birthDate,
        photoURL: null,
        createdAt: new Date(),
      });

      // Logout dulu biar user harus login manual
      await signOut(auth);
      navigate(ROUTES.LOGIN, { replace: true });
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        setError("Email sudah terdaftar");
      else if (err.code === "auth/invalid-email")
        setError("Format email tidak valid");
      else if (err.code === "auth/weak-password")
        setError("Password terlalu lemah");
      else setError("Registrasi gagal, coba lagi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper className="!bg-white">
      <div className="flex flex-col h-screen px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="focus:outline-none text-[24px]"
          >
            ←
          </button>
          <Logo width="100px" />
          <div className="w-6"></div>
        </div>

        <h2 className="font-display font-bold text-[24px] text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-[13px] text-[#555] text-center mb-6">
          Set up your parent account to start protecting your child with
          Santara.
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  {showPassword ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  )}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                  {showConfirmPassword ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-[12px] text-center mb-2">{error}</p>
        )}

        <p className="text-[12px] text-[#666] mb-4 text-center">
          By registering, you agree to the{" "}
          <span className="text-primary underline cursor-pointer">
            Terms and Conditions
          </span>
        </p>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full h-[50px] bg-[#111111] text-white font-bold text-[14px] tracking-[1px] uppercase rounded-[10px] hover:bg-black transition-colors disabled:opacity-50"
        >
          {loading ? "LOADING..." : "AGREE & CONTINUE"}
        </button>

        <p className="text-center text-[14px] mt-4 mb-2 text-[#666]">
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
