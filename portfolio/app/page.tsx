import AllProjects from '@/components/AllProjects';
import AllWorkExperiences from '@/components/AllWorkExperiences';
import Header from '@/components/Header';
import AllWorkExperiencesData from '@/data/workExperienceData';
import AllProjectsData from '@/data/projectData';
import NasaAPOD from '@/components/NasaAPOD';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="">
        <AllWorkExperiences experiences={AllWorkExperiencesData} />
        <AllProjects projects={AllProjectsData} />
      </div>
    </div>
  );
}
