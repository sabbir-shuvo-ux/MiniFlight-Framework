"use client";
import React, { useState } from "react";
import { Alert, CloseButton, Spinner } from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState({
    isSuccess: false,
    isMessage: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (data.suceess) {
        setMessage((prev) => ({
          ...prev,
          isSuccess: data.success,
          isMessage: data.message,
        }));
      } else {
        setMessage((prev) => ({
          ...prev,
          isSuccess: data.success,
          isMessage: data.message,
        }));
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setState(initialState);
      setIsLoading(false);
    }
  };

  // close Alert message
  const handleAlertClose = () => {
    setMessage((pre) => ({ ...pre, isMessage: "", isSuccess: false }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form submition message */}
      {message.isMessage && (
        <Alert variant={message.isSuccess ? "success" : "danger"}>
          {message.isMessage}
          <CloseButton
            className="float-end"
            onClick={handleAlertClose}
            aria-label="Hide"
          />
        </Alert>
      )}
      <input
        type="text"
        name="name"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Name"
        onChange={(e) => handleChange(e)}
        value={state.name}
      />

      <input
        type="text"
        name="phone"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Phone"
        onChange={(e) => handleChange(e)}
        value={state.phone}
      />
      <input
        type="email"
        name="email"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Email"
        onChange={(e) => handleChange(e)}
        value={state.email}
      />
      <textarea
        type="text"
        name="message"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Message"
        required
        onChange={(e) => handleChange(e)}
        value={state.message}
        rows={6}
      />

      <button type="submit" className="main_btn">
        {!isLoading ? "Submit" : <Spinner size="sm" animation="border" />}
      </button>
    </form>
  );
};

export default ContactForm;
