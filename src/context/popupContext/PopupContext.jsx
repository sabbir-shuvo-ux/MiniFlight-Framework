"use client";
import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export function PopupContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <PopupContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </PopupContext.Provider>
  );
}

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error(
      "usePopupContext must be used within a PopupContextProvider"
    );
  }
  return context;
};
