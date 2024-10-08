import React from 'react';
import ImageAtom from '../atoms/ImageAtom';
import DescriptionAtom from '../atoms/DescriptionAtom';
import './Skills.css';  // CSS untuk skill card

const SkillCard = ({ image, title, description }) => {
  return (
    <div className="skill-card">
      <ImageAtom src={image} alt={title} width="100" height="100" />
      <DescriptionAtom text={title} size="large" color="black" />
      <DescriptionAtom text={description} size="small" color="gray" />
    </div>
  );
};

export default SkillCard;
