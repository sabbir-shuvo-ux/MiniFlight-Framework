"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { faqHomeData } from "@/AppData/faqHomeData";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
const FaqHome = () => {
  return (
    <div className="accordion custom_accordion" id="accordionExample">
      <Accordion flush>
        {faqHomeData.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <FaPlus size={20} color="black" className="me-3" />
              {faq.title}
            </Accordion.Header>
            <Accordion.Body>
              {faq.des}

              <Link
                className="faq_content_btn"
                title={`See More About ${faq.title}`}
                href={`/${faq.url}`}
              >
                SEE MORE
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqHome;
