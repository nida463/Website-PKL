import React from 'react';
import './Button.css';  // CSS khusus untuk ButtonAtom

const ButtonAtom = ({ text, onClick }) => {
  return (
    <button className="button-atom" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAtom;
