import React from 'react';

interface ExperienceSkillProps {
  skill: string;
}

const ExperienceSkill: React.FC<ExperienceSkillProps> = ({ skill }) => {
  return (
    <div className="bg-emerald-900 max-w-max pt-2 pb-2 pl-4 pr-4 rounded-3xl min-w-12 flex justify-center h-10">
      <h1 className="text-emerald-300">{skill}</h1>
    </div>
  );
};

export default ExperienceSkill;
