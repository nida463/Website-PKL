// src/components/molecules/kontak/ContactForm.js
import React from "react";
import InputField from "../../atoms/contact/InputField";
import Button from "../../atoms/header/Button";
import "../../../styles/Header.css"; // Mengimpor CSS dari Header

const ContactForm = () => {
  return (
    <div className="baris-2">
      <InputField type="text" placeholder="Name" className="input-field" />
      <InputField type="email" placeholder="Email" className="input-field" />
      <Button >Submit</Button>
    </div>
  );
};

export default ContactForm;
