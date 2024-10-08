// src/Components/atoms/Text.js
import React from 'react';
import './Text.css'; // CSS untuk Text

const Text = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Text;