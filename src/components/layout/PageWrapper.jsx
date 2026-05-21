import React from 'react';
import { motion } from 'framer-motion';
import NotificationPopup from '../ui/NotificationPopup';

const PageWrapper = ({ children, className = '' }) => {
  return (
    // Background abu-abu di belakang bingkai HP (hanya keliatan di PC)
    <div className="min-h-screen w-full h-screen bg-gray-100 flex justify-center items-center">
      
      {/* BINGKAI HP UTAMA (390px) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        // Hapus isolation-isolate, pakai flex-col biar konten dan navbar sejajar
        className={`w-full max-w-[390px] h-screen max-h-[844px] bg-[#F2F2F7] relative shadow-2xl flex flex-col overflow-hidden ${className}`}
      >
        
        {/* Area Konten yang bisa di-scroll (memakan sisa ruang) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F2F2F7]">
          {children}
        </div>

        {/* Notifikasi tetap di dalam kotak */}
        <NotificationPopup />

      </motion.div>
    </div>
  );
};

export default PageWrapper;