import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import PaginationDots from "../components/ui/PaginationDots";
import Button from "../components/ui/Button";
import { ROUTES } from "../constants/routes";

const Onboarding2 = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="h-screen flex flex-col">
        {/* GANTI: Pakai gambar asli dari folder public/assets/images */}
        <div className="h-[60%] w-full relative overflow-hidden">
          <img
            src="/assets/images/onboarding-2.jpg"
            alt="Onboarding 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 flex flex-col justify-between relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div>
            <PaginationDots total={3} activeIndex={1} />
            <h2 className="font-display font-bold text-[20px] text-center mb-3">
              A Smart Companion for Everyday Safety
            </h2>
            <p className="text-muted text-[14px] text-center leading-relaxed">
              Santara works with a smart doll to support child safety. Helps
              parents monitor location, detect sounds, and receive alerts.
            </p>
          </div>
          <div>
            <div className="flex gap-3 mb-3">
              <Button
                variant="outline"
                onClick={() => navigate(ROUTES.ONBOARDING_1)}
              >
                Back
              </Button>
              <Button
                variant="filled"
                onClick={() => navigate(ROUTES.ONBOARDING_3)}
              >
                Continue
              </Button>
            </div>
            <p
              className="text-center text-muted text-[14px] cursor-pointer"
              onClick={() => navigate(ROUTES.ONBOARDING_4)}
            >
              Skip
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Onboarding2;
