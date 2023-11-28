"use client";
import React from "react";

const ContactForm = () => {
  return (
    <form>
      <input
        type="text"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Name"
        required
      />

      <input
        type="text"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Phone"
        required
      />
      <input
        type="email"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Email"
        required
      />
      <textarea
        type="text"
        className="form-control shadow-none rounded-0 custom_form_control my-3"
        placeholder="Message"
        required
        rows={6}
      />

      <button type="submit" className="main_btn">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
