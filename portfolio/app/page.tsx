import { SingleWorkExperienceProps } from '../components/SingleWorkExperience';
import WorkExperiences from '@/components/WorkExperiences';
import workExperiencesData from '@/data/workExperienceData';

export default function Page() {
  return (
    <div>
      <WorkExperiences experiences={workExperiencesData} />
    </div>
  );
}
