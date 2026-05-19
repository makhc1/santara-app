import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { ROUTES } from "../constants/routes";
import PageWrapper from "../components/layout/PageWrapper";

const SplashScreen = React.lazy(() => import("../pages/SplashScreen"));
const Onboarding1 = React.lazy(() => import("../pages/Onboarding1"));
const Onboarding2 = React.lazy(() => import("../pages/Onboarding2"));
const Onboarding3 = React.lazy(() => import("../pages/Onboarding3"));
const Onboarding4 = React.lazy(() => import("../pages/Onboarding4"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const RegisterChild = React.lazy(() => import("../pages/RegisterChild"));
const Home = React.lazy(() => import("../pages/Home"));
const DetailTracking = React.lazy(() => import("../pages/DetailTracking"));
const EmergencyAlerts = React.lazy(() => import("../pages/EmergencyAlerts"));
const Profile = React.lazy(() => import("../pages/Profile"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <PageWrapper>
          <div className="h-screen flex items-center justify-center font-display text-primary">
            Loading...
          </div>
        </PageWrapper>
      }
    >
      <Routes>
        <Route path={ROUTES.SPLASH} element={<SplashScreen />} />
        <Route path={ROUTES.ONBOARDING_1} element={<Onboarding1 />} />
        <Route path={ROUTES.ONBOARDING_2} element={<Onboarding2 />} />
        <Route path={ROUTES.ONBOARDING_3} element={<Onboarding3 />} />
        <Route path={ROUTES.ONBOARDING_4} element={<Onboarding4 />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.REGISTER_CHILD} element={<RegisterChild />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DETAIL_TRACKING} element={<DetailTracking />} />
        <Route path={ROUTES.EMERGENCY} element={<EmergencyAlerts />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
