import AllProjects from '@/components/AllProjects';
import AllWorkExperiences from '@/components/AllWorkExperiences';
import Header from '@/components/Header';
import AllWorkExperiencesData from '@/data/workExperienceData';
import AllProjectsData from '@/data/projectData';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="pt-25">
        <div className="flex flex-col items-center">
          <Header />
          <AllWorkExperiences experiences={AllWorkExperiencesData} />
          <AllProjects projects={AllProjectsData} />
        </div>
      </div>
    </>
  );
}
