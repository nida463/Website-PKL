import React from 'react';
import './Contact.css';
import Input from './atoms/Input';
import Button from '../atoms/Button';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Mari bekerja sama</h2>
      <div className="contact-form">
        <label htmlFor="name">Nama</label>
        <Input type="text" placeholder="Masukkan nama Anda" />
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Masukkan alamat email Anda" />
        <Button label="Kirim" onClick={() => alert('Form Submitted')} />
      </div>
    </div>
  );
};

export default Contact;
