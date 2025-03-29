import React from 'react';
import ExperienceSkill from './ExperienceSkill';
import Image from 'next/image';

export interface SingleProjectProps {
  name: string;
  img: string;
  url: string;
  bullets: string[];
  skills: string[];
}

const SingleProject: React.FC<SingleProjectProps> = ({
  name,
  img,
  url,
  bullets,
  skills,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{name}</h1>
      <div className="flex ">
        <div className="relative h-40 w-40">
          <Image src={img} alt="image of project" fill={true} />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <ul>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="flex">
            {skills.map((skill, index) => (
              <ExperienceSkill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
