import React from 'react';
import ExperienceSkill from './ExperienceSkill';
import Image from 'next/image';

export interface SingleProjectProps {
  name: string;
  img: string;
  url: string;
  desc: string;
  skills: string[];
}

const SingleProject: React.FC<SingleProjectProps> = ({
  name,
  img,
  url,
  desc,
  skills,
}) => {
  return (
    <div className="flex gap-6">
      <div className=" text-white min-w-40">
        <h1>{name}</h1>
      </div>
      <div className="flex flex-col gap-5 max-w-4xl">
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

export default SingleProject;
