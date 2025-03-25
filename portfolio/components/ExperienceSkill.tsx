import React from 'react';

interface ExperienceSkillProps {
  skill: string;
}

const ExperienceSkill: React.FC<ExperienceSkillProps> = ({ skill }) => {
  return (
    <div className="bg-emerald-900 max-w-max p-1.5 rounded-3xl">
      <h1 className="text-emerald-300">{skill}</h1>
    </div>
  );
};

export default ExperienceSkill;
