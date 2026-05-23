import React, { useState, useEffect } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import BottomNav from "../components/layout/BottomNav";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { User, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAppContext } from "../context/AppContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

const Profile = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext();
  const [children, setChildren] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Controlled input state
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Load data dari Firestore (kalau ada) + fallback ke Google Auth
  useEffect(() => {
    const loadProfile = async () => {
      if (!auth.currentUser) return;

      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setDisplayName(data.displayName || userData?.displayName || "");
        setEmail(data.email || userData?.email || "");
        setPhoneNumber(data.phoneNumber || "");
      } else {
        // Belum ada di Firestore, pakai data Google
        setDisplayName(userData?.displayName || "");
        setEmail(userData?.email || "");
      }
    };

    loadProfile();
  }, [userData]);

  // Fetch children
  useEffect(() => {
    const fetchChildren = async () => {
      if (!auth.currentUser) return;
      const childrenRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "children",
      );
      const snapshot = await getDocs(childrenRef);
      setChildren(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchChildren();
  }, []);

  // Save ke Firestore
  const handleSave = async () => {
    if (!auth.currentUser) return;
    setSaving(true);
    setSaveMsg("");
    try {
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          displayName,
          email,
          phoneNumber,
        },
        { merge: true },
      ); // merge: true biar data lain ga ke-overwrite
      setSaveMsg("✅ Profile saved!");
    } catch (error) {
      console.error("Save Error:", error);
      setSaveMsg("❌ Failed to save. Try again.");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(""), 3000);
    }
  };

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
      <div className="h-full flex flex-col overflow-hidden bg-[#F2F2F7]">
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

          {/* Profile Info */}
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
              {displayName || "User"}
            </h3>
            <p className="text-[#6B7280] text-[13px]">
              {email || "email@example.com"}
            </p>
          </div>

          {/* Parent Information */}
          <div className="px-5 mb-6 mt-2">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Parent Information
            </h3>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
              <InputField
                icon={User}
                placeholder="Full name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <InputField
                icon={Mail}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                icon={Phone}
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {saveMsg && <p className="text-sm text-center mb-2">{saveMsg}</p>}
              <Button
                variant="orange"
                className="h-[48px]"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>

          {/* Connected Children */}
          <div className="px-5 mb-6">
            <h3 className="font-display font-bold text-[18px] text-[#111] mb-3">
              Connected Children
            </h3>
            <div className="bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
              {children.map((child) => (
                <div key={child.id} className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    👦
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-[15px] text-[#111]">
                      {child.name}
                    </h4>
                    <p className="text-[#6B7280] text-[13px]">
                      {child.gender} • {child.school || "No school"}
                    </p>
                  </div>
                  <span className="text-[#6B7280] text-[12px]">
                    Santara Doll
                  </span>
                </div>
              ))}
              {children.length === 0 && (
                <p className="text-center text-gray-400 text-sm py-4">
                  No children added yet.
                </p>
              )}
              <button
                onClick={() => navigate(ROUTES.REGISTER_CHILD)}
                className="w-full h-12 border-2 border-dashed border-[#F5A623] rounded-xl text-[#F5A623] font-semibold hover:bg-orange-50 transition-colors"
              >
                + Add Child
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="px-5 pb-6">
            <Button variant="danger" onClick={handleLogout}>
              LOG OUT
            </Button>
          </div>
        </div>
        <BottomNav />
      </div>
    </PageWrapper>
  );
};

export default Profile;
