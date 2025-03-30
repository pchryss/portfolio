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
    <div className="flex flex-col items-center justify-center text-white gap-4">
      <h1 className="text-5xl">{name}</h1>
      <div className="flex gap-3 h-100">
        <div className="relative h-100 w-100 hover:opacity-65">
          <a href={url} target="_blank">
            <Image
              src={img}
              alt="image of project"
              fill={true}
              className=" border-white border-2 rounded-2xl "
            />
          </a>
        </div>
        <div className="flex flex-col gap-1 max-w-100 justify-center">
          <div className="pl-5">
            <ul>
              {bullets.map((bullet, index) => (
                <li className="list-disc list-outside " key={index}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 justify-center">
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
