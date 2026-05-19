import React from "react";
import { motion } from "framer-motion";
import NotificationPopup from "../ui/NotificationPopup"; // Import di sini sekarang

const PageWrapper = ({ children, className = "" }) => {
  return (
    // Background luar (abu-abu di desktop)
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      {/* Kontainer HP 390px - BATAS UTAMA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        // Tambahkan: relative, overflow-hidden, dan h-screen biar pas kayak HP
        className={`w-full max-w-[390px] h-screen bg-white relative shadow-xl overflow-hidden ${className}`}
      >
        {/* Area Konten yang bisa di-scroll */}
        <div className="h-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>

        {/* Notifikasi sekarang ada di dalam kotak 390px */}
        <NotificationPopup />
      </motion.div>
    </div>
  );
};

export default PageWrapper;
