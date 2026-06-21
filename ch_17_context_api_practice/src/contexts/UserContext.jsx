import { createContext, useContext, useMemo } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = useMemo(() => ({ name: "Alex Johnson", role: "Administrator" }), []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
};
