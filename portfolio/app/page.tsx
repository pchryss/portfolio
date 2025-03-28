import AllProjects from '@/components/AllProjects';
import AllWorkExperiences from '@/components/AllWorkExperiences';
import Navbar from '@/components/Navbar';
import AllWorkExperiencesData from '@/data/workExperienceData';
import AllProjectsData from '@/data/projectData';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="">
        <AllWorkExperiences experiences={AllWorkExperiencesData} />
        <AllProjects projects={AllProjectsData} />
      </div>
    </div>
  );
}
