"use client";
import { PHONE_NUMBER } from "@/AppData/appConfig";
import { useThemeContext } from "@/context/themeContext/ThemeContext";
const NavbarActions = () => {
  const { setIsModalOpen } = useThemeContext();

  return (
    <div className="actions_btns large_screen">
      <div className="phone_number">
        <span className="phone_number_small_text">CALL TOLL-FREE</span>
        <a
          className="phone_number_main"
          href={`tel:${PHONE_NUMBER}`}
          title="Call Automatic Door Supply Toll Free"
        >
          {PHONE_NUMBER}
        </a>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="main_btn"
        title="Get Estimate from Automatic Door Supply"
      >
        GET ESTIMATE
      </button>
    </div>
  );
};

export default NavbarActions;
