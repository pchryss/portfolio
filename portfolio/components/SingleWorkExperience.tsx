import React from 'react';
import ExperienceSkill from './ExperienceSkill';

export interface SingleWorkExperienceProps {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  desc: string;
  skills: string[];
}

const SingleExperience: React.FC<SingleWorkExperienceProps> = ({
  startDate,
  endDate,
  company,
  position,
  desc,
  skills,
}) => {
  return (
    <div className="flex gap-6">
      <div className=" text-white min-w-40">
        <h1>
          {startDate} - {endDate}
        </h1>
      </div>
      <div className="flex flex-col gap-5 max-w-4xl">
        <h1 className="text-white">
          {position} - {company}
        </h1>
        <h1 className="text-white">{desc}</h1>
        <div className="flex gap-1">
          {skills.map((skill, index) => (
            <ExperienceSkill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
