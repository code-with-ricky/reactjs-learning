import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = { name: "Alex Johnson", role: "Administrator" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
