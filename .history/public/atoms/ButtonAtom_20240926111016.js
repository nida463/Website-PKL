import React from 'react';
import './Button.css';  // CSS khusus untuk ButtonAtom

const ButtonAtom = ({ text, onClick, variant }) => {
  return (
    <button className={`button-atom ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAtom;
