/*
# TYPES # 
- data = array of object
  -- "data" property = title and des
- isHome = Boolean
*/

"use client";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import "@/assets/faqComoponent.scss";

const Faq = ({ data, isHome }) => {
  return (
    <div className="accordion custom_accordion" id="accordionExample">
      <Accordion flush>
        {data.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <FaPlus size={20} color="black" className="me-3" />
              {faq.title}
            </Accordion.Header>
            <Accordion.Body>
              {faq.des}

              {isHome && (
                <Link
                  className="faq_content_btn"
                  title={`See More About ${faq.title}`}
                  href={`/${faq.url}`}
                >
                  SEE MORE
                </Link>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
