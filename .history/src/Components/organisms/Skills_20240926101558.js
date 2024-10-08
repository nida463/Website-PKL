import React from 'react';
import SkillCard from '../molecules/SkillCard';
import './Skills.css';  // CSS untuk Skills section

const Skills = () => {
  return (
    <div className="skills-section">
      <SkillCard 
        image="/img/Productimage.png"
        title="Product Design"
        description="Creating intuitive user experiences."
      />
      <SkillCard 
        image="/img/VisualDesign.png"
        title="Visual Design"
        description="Designing beautiful interfaces."
      />
      <SkillCard 
        image="/img/ArtDirection.png"
        title="Art Direction"
        description="Leading creative projects."
      />
    </div>
  );
};

export default Skills;
