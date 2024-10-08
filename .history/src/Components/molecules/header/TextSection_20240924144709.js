import React from "react";
import Title from "../../atoms/header/Title";
import Subtitle from "../../atoms/header/Subtitle";
import Description from "../../atoms/header/Description";
import ContactButton from "../../atoms/header/ContactButton";

const TextSection = () => {
  return (
    <div className="text-section">
      <Title />
      <Subtitle />
      <Description />
      <ContactButton />
    </div>
  );
};

export default TextSection;
