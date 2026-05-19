import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Logo from "../components/Logo";
import { ROUTES } from "../constants/routes";

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
      <div className="h-screen flex flex-col items-center justify-center animate-fade-in">
        <Logo width="440px" />
      </div>
    </PageWrapper>
  );
};
export default SplashScreen;
