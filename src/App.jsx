import { BrowserRouter } from "react-router-dom";
import { AppProvider, useAppContext } from "./context/AppContext";
import AppRoutes from "./routes";

const AppWrapper = () => {
  const { loading } = useAppContext();

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
        <p className="font-display text-primary text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

function App() {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
}

export default App;
