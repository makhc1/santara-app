import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes";
// HAPUS: import NotificationPopup from './components/ui/NotificationPopup';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        {/* HAPUS: <NotificationPopup /> */}
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
