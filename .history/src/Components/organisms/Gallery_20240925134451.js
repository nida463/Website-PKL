// src/components/organisms/Gallery.js
import React, { useState } from "react";
import GalleryTitle from "../atoms/gallery/GalleryTitle";
import Modal from "../molecules/gallery/Modal";
import GalleryItem from "../molecules/gallery/GalleryItem";
import "../../styles/Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="Gallery">
      <div className="gallery">
        <GalleryTitle title="Latest work" />
        <div className="gallery-content">
          {[...Array(6)].map((_, index) => (
            <GalleryItem
              key={index}
              src={`/img/gallery/Image (${index + 1}).png`}
              alt={`Gallery Item ${index + 1}`}
              title="Project title"
              description="UI, Art direction"
              
            />
          ))}
        </div>
      </div>

      {isModalOpen && <Modal imageSrc={selectedImage} />}
    </section>
  );
};

export default Gallery;
