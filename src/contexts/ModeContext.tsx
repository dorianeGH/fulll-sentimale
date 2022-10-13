import { createContext, useState } from "react";

interface Props {
  editMode: string;
  toggleEditMode: () => void;
}
export const ModeContext = createContext<Props>({} as any);
export const ModeContextProvider = ({ children }: any) => {
  const [editMode, setEditMode] = useState("on");

  const toggleEditMode = () => {
    setEditMode((prev) => (prev === "off" ? "on" : "off"));
  };

  const contextValue: Props = {
    editMode,
    toggleEditMode,
  };
  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
};
