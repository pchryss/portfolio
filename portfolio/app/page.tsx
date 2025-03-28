import AllProjects from '@/components/AllProjects';
import AllWorkExperiences from '@/components/AllWorkExperiences';
import Navbar from '@/components/Navbar';
import AllWorkExperiencesData from '@/data/workExperienceData';
import AllProjectsData from '@/data/projectData';
import NasaAPOD from '@/components/NasaAPOD';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="">
        <NasaAPOD />
        <AllWorkExperiences experiences={AllWorkExperiencesData} />
        <AllProjects projects={AllProjectsData} />
      </div>
    </div>
  );
}
