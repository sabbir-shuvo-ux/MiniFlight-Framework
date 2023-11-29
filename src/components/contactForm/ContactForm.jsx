"use client";
import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

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
        setResult(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setState(initialState);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {result && <Alert variant={"danger"}>{result}</Alert>}
      <input
        type="text"
        name="name"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Name"
        required
        onChange={(e) => handleChange(e)}
        value={state.name}
      />

      <input
        type="text"
        name="phone"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Phone"
        required
        onChange={(e) => handleChange(e)}
        value={state.phone}
      />
      <input
        type="email"
        name="email"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Email"
        required
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
