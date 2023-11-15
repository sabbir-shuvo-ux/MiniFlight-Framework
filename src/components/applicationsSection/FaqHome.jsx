import React from "react";
import { FaPlus } from "react-icons/fa6";
import { faqHomeData } from "@/AppData/faqHomeData";

const FaqHome = () => {
  return (
    <div className="accordion custom_accordion" id="accordionExample">
      {faqHomeData.map((faq, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq_id_${index}`}
              aria-expanded="false"
              aria-controls={`faq_id_${index}`}
            >
              <FaPlus size={20} color="black" className="me-3" />
              {faq.title}
            </button>
          </h2>
          <div
            id={`faq_id_${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{faq.des}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqHome;
