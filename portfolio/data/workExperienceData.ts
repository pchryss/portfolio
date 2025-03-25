import { SingleWorkExperienceProps } from '@/components/SingleWorkExperience';

const workExperiencesData: SingleWorkExperienceProps[] = [
  {
    startDate: 'Aug 2024',
    endDate: 'Present',
    company: 'Profisee',
    position: 'Software Engineer Intern',
    bullets: [
      'Automating Typescript based Playwright tests, reducing the average run time from 15.9min to 11.3s (98.8% faster)',
      'Building an internal C# API to streamline tedious CRUD operations on Profisee’s resources for developers',
      'Leading the development of Playwright test fixtures by connecting Playwright with our internal API to handle the setup/teardown of each automated test',
    ],
    skills: ['Typescript', 'C#', 'API Development'],
  },
  {
    startDate: 'Jan 2025',
    endDate: 'Present',
    company: 'Yellow Jacket Space Program',
    position: 'Backend Software Engineer',
    bullets: [
      'Building a rocket with the goal of becoming the first student-led team to reach space using liquid propulsion',
      'Developing YJSP’s control server in Rust to facilitate seamless communication between operators and flight systems',
    ],
    skills: ['Rust'],
  },
];

export default workExperiencesData;
