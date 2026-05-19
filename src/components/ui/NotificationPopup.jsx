import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAppContext } from "../../context/AppContext";

const NotificationPopup = () => {
  const { showNotif, setShowNotif } = useAppContext();
  const navigate = useNavigate();

  // Auto-dismiss setelah 5 detik
  useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showNotif, setShowNotif]);

  const handleCheckNow = () => {
    setShowNotif(false);
    // Delay sedikit biar animasi exit keliatan sebelum pindah halaman
    setTimeout(() => navigate(ROUTES.EMERGENCY), 200);
  };

  const handleIgnore = () => {
    setShowNotif(false);
  };

  return (
    <AnimatePresence>
      {showNotif && (
        <>
          {/* BUG 5 FIX: Overlay Dimmed di belakang notifikasi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/25 z-[9998] backdrop-blur-[1px]"
            onClick={handleIgnore}
          />

          {/* BUG 1, 3, 4 FIX: Wrapper Notifikasi (Absolute, Left/Right 12px) */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }, // BUG 6 FIX: Bouncy cubic-bezier iOS
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.97,
              transition: { duration: 0.2, ease: "easeIn" }, // BUG 6 FIX: Smooth exit
            }}
            // absolute, top 12px, kiri 12px, kanan 12px (lebar otomatis menyesuaikan 390px-24px)
            className="absolute top-[12px] left-[12px] right-[12px] w-auto z-[9999] flex flex-col shadow-2xl rounded-[14px] overflow-hidden"
          >
            {/* Bagian Atas: Info Notifikasi */}
            <div className="bg-white/95 backdrop-blur-md p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E53935"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-[15px] text-[#111]">
                    Emergency Alert
                  </h4>
                  <p className="text-[13px] text-[#666] mt-0.5 leading-tight">
                    Unusual sound detected near your child.
                  </p>
                </div>
              </div>
            </div>

            {/* BUG 2 FIX: Tombol diposisikan Vertikal (iOS Style) */}
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 flex flex-col">
              <button
                onClick={handleIgnore}
                className="w-full h-[50px] text-[16px] font-semibold text-[#007AFF] hover:bg-gray-50 transition-colors border-b border-gray-200/80"
              >
                Ignore
              </button>
              <button
                onClick={handleCheckNow}
                className="w-full h-[50px] text-[16px] font-bold text-[#007AFF] hover:bg-gray-50 transition-colors"
              >
                Check Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;
