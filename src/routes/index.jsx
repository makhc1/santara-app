import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "../constants/routes";
import PageWrapper from "../components/layout/PageWrapper";
import { useAppContext } from "../context/AppContext";

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

// Hanya bisa diakses kalau SUDAH login
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAppContext();
  if (loading) return null;
  if (!isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />;
  return children;
};

// Hanya bisa diakses kalau BELUM login (Login, Register)
const GuestRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAppContext();
  if (loading) return null;
  if (isLoggedIn) return <Navigate to={ROUTES.HOME} replace />;
  return children;
};

const AppRoutes = () => {
  const location = useLocation();

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public routes */}
          <Route path={ROUTES.SPLASH} element={<SplashScreen />} />
          <Route path={ROUTES.ONBOARDING_1} element={<Onboarding1 />} />
          <Route path={ROUTES.ONBOARDING_2} element={<Onboarding2 />} />
          <Route path={ROUTES.ONBOARDING_3} element={<Onboarding3 />} />
          <Route path={ROUTES.ONBOARDING_4} element={<Onboarding4 />} />

          {/* Guest only - kalau udah login redirect ke HOME */}
          <Route
            path={ROUTES.LOGIN}
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />

          {/* Protected - harus login dulu */}
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.DETAIL_TRACKING}
            element={
              <ProtectedRoute>
                <DetailTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.EMERGENCY}
            element={
              <ProtectedRoute>
                <EmergencyAlerts />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* RegisterChild - protected, hanya dari Profile */}
          <Route
            path={ROUTES.REGISTER_CHILD}
            element={
              <ProtectedRoute>
                <RegisterChild />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
