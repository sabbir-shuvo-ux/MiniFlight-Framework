"use client";
import { PHONE_NUMBER } from "@/AppData/appConfig";
import { useThemeContext } from "@/context/themeContext/ThemeContext";
import { BsTelephone } from "react-icons/bs";

const MobileTopNavbar = () => {
  const { setIsModalOpen } = useThemeContext();

  return (
    <div className="top_navbar_phone">
      <button
        onClick={() => setIsModalOpen(true)}
        className="col-6 get_started_btn"
      >
        GET ESTIMATE
      </button>
      <a className="col-6 top_nav_phone" href={`tel:${PHONE_NUMBER}`}>
        <BsTelephone />
        {PHONE_NUMBER}
      </a>
    </div>
  );
};

export default MobileTopNavbar;
