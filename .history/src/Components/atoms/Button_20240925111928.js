import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = "button", disabled = false }) => (
  <button className="button" type={type} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;
