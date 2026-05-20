import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";
import { motion } from "framer-motion"; // Import Framer Motion

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.ONBOARDING_1);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageWrapper>
      <div className="h-full flex flex-col items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <Logo width="140px" />
          <div className="text-6xl mt-4">🦚</div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default SplashScreen;
