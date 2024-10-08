import React from 'react';
import './Description.css';  // CSS untuk teks

const DescriptionAtom = ({ text, size, color }) => {
  return (
    <p className={`description-atom ${size} ${color}`}>
      {text}
    </p>
  );
};

export default DescriptionAtom;
