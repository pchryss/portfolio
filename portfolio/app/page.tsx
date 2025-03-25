import SingleExperience, {
  SingleExperienceProps,
} from '../components/SingleExperience';

const exampleData: SingleExperienceProps = {
  startDate: 'August 2024',
  endDate: 'Present',
  company: 'Profisee',
  position: 'Software Engineer Intern',
  bullets: [
    'Automating Typescript based Playwright tests, reducing the average run time from 15.9min to 11.3s (98.8% faster)',
    'Building an internal C# API to streamline tedious CRUD operations on Profisee’s resources for developers',
    'Leading the development of Playwright test fixtures by connecting Playwright with our internal API to handle the setup/teardown of each automated test',
  ],
  skills: ['Typescript', 'C#', 'API Development'],
};

export default function Page() {
  return (
    <div className="bg-slate-800">
      <SingleExperience
        startDate={exampleData.startDate}
        endDate={exampleData.endDate}
        company={exampleData.company}
        position={exampleData.position}
        bullets={exampleData.bullets}
        skills={exampleData.skills}
      />
    </div>
  );
}
