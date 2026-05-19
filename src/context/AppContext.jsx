import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [childData, setChildData] = useState(null);
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        childData,
        setChildData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
