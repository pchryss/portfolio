import React from 'react';
import SingleProject, { SingleProjectProps } from './SingleProject';

export interface AllProjectsProps {
  projects: SingleProjectProps[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-7 p-4 max-w-max">
      {projects.map((proj, index) => (
        <SingleProject
          key={index}
          name={proj.name}
          url={proj.url}
          img={proj.img}
          desc={proj.desc}
          skills={proj.skills}
        />
      ))}
    </div>
  );
};

export default AllProjects;
