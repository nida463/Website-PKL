import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, size = '50px' }) => (
  <img className="avatar" src={src} alt={alt} style={{ width: size, height: size }} />
);

export default Avatar;
