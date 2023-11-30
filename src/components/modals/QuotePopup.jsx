"use client";
import { socialIcons } from "@/AppData/socialIcons";
import { useThemeContext } from "@/context/themeContext/ThemeContext";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCallOutline } from "react-icons/io5";

import "@/assets/popUp.scss";
import { PHONE_NUMBER } from "@/AppData/appConfig";
import ContactForm from "../contactForm/ContactForm";

const QuotePopup = () => {
  const { isModalOpen, setIsModalOpen } = useThemeContext();

  const handleClose = () => setIsModalOpen(false);
  return (
    <>
      <Modal
        className="custom_modal"
        size="lg"
        show={isModalOpen}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Request For a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-lg-5">
          <div className="row">
            <div className="col-lg-4 d-md-block d-none">
              <p className="left_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                quia deleniti, quam eligendi voluptas iusto!
              </p>
              <h3>Follow Us</h3>
              <ul className="list-unstyled socials_icons">
                {socialIcons.map((item, index) => (
                  <li key={index}>
                    <a title={item.title} href={item.link}>
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>

              <h3>CALL NOW </h3>
              <a
                className="text-decoration-none h5 phone_number"
                href={`tel:${PHONE_NUMBER}`}
              >
                <IoCallOutline />
                {PHONE_NUMBER}
              </a>
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuotePopup;
