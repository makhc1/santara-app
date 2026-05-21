import React from "react";
import { motion } from "framer-motion";
import NotificationPopup from "../ui/NotificationPopup";

const PageWrapper = ({ children, className = "" }) => {
  return (
    <div className="w-full min-h-dvh bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`bg-[#F2F2F7] relative flex flex-col 
           w-full h-dvh 
           md:max-w-[390px] md:mx-auto md:h-screen
           ${className}`}
      >
        {/* Area Konten - flex-1 biar bisa di-scroll kalau halaman panjang (kayak Profile) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F2F2F7]">
          {children}
        </div>

        <NotificationPopup />
      </motion.div>
    </div>
  );
};

export default PageWrapper;
