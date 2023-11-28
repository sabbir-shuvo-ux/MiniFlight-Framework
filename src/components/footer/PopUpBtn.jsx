"use client";

import { usePopupContext } from "@/context/popupContext/PopupContext";

const PopUpBtn = () => {
  const { setIsModalOpen } = usePopupContext();

  return (
    <div className="col-md-2 text-start text-md-end mt-3 mt-md-0">
      <button onClick={() => setIsModalOpen(true)} className="main_btn">
        Get Estimate
      </button>
    </div>
  );
};

export default PopUpBtn;
