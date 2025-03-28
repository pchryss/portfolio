import WorkExperiences from '@/components/WorkExperiences';
import Navbar from '@/components/Navbar';
import workExperiencesData from '@/data/workExperienceData';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="">
        <WorkExperiences experiences={workExperiencesData} />
      </div>
    </div>
  );
}
