import React from 'react';
import SingleWorkExperience, {
  SingleWorkExperienceProps,
} from '../components/SingleWorkExperience';

export interface WorkExperiencesProps {
  experiences: SingleWorkExperienceProps[];
}

const WorkExperiences: React.FC<WorkExperiencesProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-7 p-4 max-w-max">
      {experiences.map((exp, index) => (
        <SingleWorkExperience
          key={index}
          startDate={exp.startDate}
          endDate={exp.endDate}
          company={exp.company}
          position={exp.position}
          desc={exp.desc}
          skills={exp.skills}
        />
      ))}
    </div>
  );
};

export default WorkExperiences;
