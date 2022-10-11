import { createContext } from "react";
interface Props {}
export const UserContext = createContext<Props>({} as any);
export const UserContextProvider = ({ children }: any) => {
  const contextValue: Props = {};
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
