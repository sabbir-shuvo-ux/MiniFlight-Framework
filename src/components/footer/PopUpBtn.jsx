"use client";

import { useThemeContext } from "@/context/themeContext/ThemeContext";

const PopUpBtn = () => {
  const { setIsModalOpen } = useThemeContext();

  return (
    <div className="col-md-2 text-start text-md-end mt-3 mt-md-0">
      <button onClick={() => setIsModalOpen(true)} className="main_btn">
        Get Estimate
      </button>
    </div>
  );
};

export default PopUpBtn;
