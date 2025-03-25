import React from 'react';
import ExperienceSkill from './ExperienceSkill';

export interface SingleWorkExperienceProps {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  bullets: string[];
  skills: string[];
}

const SingleExperience: React.FC<SingleWorkExperienceProps> = ({
  startDate,
  endDate,
  company,
  position,
  bullets,
  skills,
}) => {
  return (
    <div className="flex">
      <div>
        <h1 className="text-white">
          {startDate} - {endDate}
        </h1>
      </div>
      <div>
        <h1 className="text-white">
          {position} - {company}
        </h1>
        <ul className="text-white">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <div className="flex">
          {skills.map((skill, index) => (
            <ExperienceSkill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
