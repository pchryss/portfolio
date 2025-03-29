import AllProjects from '@/components/AllProjects';
import AllWorkExperiences from '@/components/AllWorkExperiences';
import Header from '@/components/Header';
import AllWorkExperiencesData from '@/data/workExperienceData';
import AllProjectsData from '@/data/projectData';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <AllWorkExperiences experiences={AllWorkExperiencesData} />
        <AllProjects projects={AllProjectsData} />
      </div>
    </div>
  );
}
