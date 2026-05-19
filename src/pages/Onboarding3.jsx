import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import PaginationDots from '../components/ui/PaginationDots';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';

const Onboarding3 = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="h-screen flex flex-col">
        <div className="h-[60%] bg-gradient-to-br from-green-100 to-teal-50 relative flex items-center justify-center">
          <div className="w-40 h-72 bg-gray-900 rounded-[30px] border-4 border-gray-800 shadow-xl flex items-center justify-center">
            <div className="w-36 h-64 bg-white rounded-[24px] overflow-hidden flex items-center justify-center text-muted text-xs">App Preview</div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 flex flex-col justify-between relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div>
            <PaginationDots total={3} activeIndex={2} />
            <h2 className="font-display font-bold text-[20px] text-center mb-3">Ready to Get Started?</h2>
            <p className="text-muted text-[14px] text-center leading-relaxed">Create your child's safety profile and start monitoring their well-being with Santara.</p>
          </div>
          <div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate(ROUTES.ONBOARDING_2)}>Back</Button>
              <Button variant="filled" onClick={() => navigate(ROUTES.ONBOARDING_4)}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Onboarding3;