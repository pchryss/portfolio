import WorkExperiences from '@/components/WorkExperiences';
import Header from '@/components/Header';
import workExperiencesData from '@/data/workExperienceData';

export default function Page() {
  return (
    <div className="">
      <Header />
      <WorkExperiences experiences={workExperiencesData} />
    </div>
  );
}
