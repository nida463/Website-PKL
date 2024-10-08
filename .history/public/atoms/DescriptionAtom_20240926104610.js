import React from 'react';
import './Description.css';  // CSS untuk teks

// Object untuk menyimpan teks dari template portfolio
export const description = {
  header: "This is a template header",
  contact: "Contact us at: email@example.com",
  skills: "Our skills include React, CSS, and more.",
  testimonial: "Our clients say we're the best in the industry!",
  about: "About us: We are a creative and dynamic team."
};

// Komponen untuk menampilkan teks berdasarkan size dan color
const DescriptionAtom = ({ text, size, color }) => {
  return (
    <p className={`description-atom ${size} ${color}`}>
      {text}
    </p>
  );
};

// Fungsi untuk menentukan ukuran teks berdasarkan SIZE
const getSizeClass = (SIZE) => {
  switch (SIZE) {
    case 'small':
      return 'text-small';
    case 'medium':
      return 'text-medium';
    case 'large':
      return 'text-large';
    default:
      return 'text-default';
  }
};

// Komponen untuk memilih deskripsi berdasarkan VARIANT dan SIZE
export const descriptionAtom = ({ VARIANT, SIZE }) => {
  let selectedText = "";
  let sizeClass = getSizeClass(SIZE);

  // Switch untuk memilih teks berdasarkan VARIANT
  switch (VARIANT) {
    case 'header':
      selectedText = description.header;
      break;
    case 'contact':
      selectedText = description.contact;
      break;
    case 'skills':
      selectedText = description.skills;
      break;
    case 'testimonial':
      selectedText = description.testimonial;
      break;
    case 'about':
      selectedText = description.about;
      break;
    default:
      selectedText = "No description available for this variant.";
  }

  // Mengembalikan komponen DescriptionAtom dengan teks yang dipilih dan ukuran yang sesuai
  return <DescriptionAtom text={selectedText} size={sizeClass} color="default-color" />;
};

// Komponen lain untuk menggunakan text dekripsi varian baru
export const TextDescription = ({ VARIANT, SIZE, COLOR }) => {
  const selectedDescription = descriptionAtom({ VARIANT, SIZE });
  
  return (
    <div className={`text-description ${COLOR}`}>
      {selectedDescription}
    </div>
  );
};

// Ekspor default untuk TextDescription
export default TextDescription;
