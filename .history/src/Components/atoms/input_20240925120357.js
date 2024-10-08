import React from 'react';
import '../../styles/Atoms.css'; 

const Input = ({ type, placeholder }) => {
  return <input type={type} className="input" placeholder={placeholder} />;
};

export default Input;
