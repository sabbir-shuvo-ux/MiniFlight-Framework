"use client";
import { PHONE_NUMBER } from "@/AppData/appConfig";
import { usePopupContext } from "@/context/popupContext/PopupContext";
import { BsTelephone } from "react-icons/bs";

const MobileTopNavbar = () => {
  const { setIsModalOpen } = usePopupContext();

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
