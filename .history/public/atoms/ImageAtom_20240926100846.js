import React from 'react';
import './Image.css';  // CSS untuk gambar

const ImageAtom = ({ src, alt, width, height }) => {
  return (
    <img className="image-atom" src={src} alt={alt} width={width} height={height} />
  );
};

export default ImageAtom;
