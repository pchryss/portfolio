import { SingleProjectProps } from '@/components/SingleProject';

const AllProjectsData: SingleProjectProps[] = [
  {
    name: 'StreetCleanr',
    img: '/images/streetcleanr.png',
    url: 'https://devpost.com/software/streetcleanr',
    bullets: [
      'Built a fully functional web application that provides cleanup volunteers with optimized cleaning routes of littered roads',
      'Utilized TensorFlow to create a Convolutional Neural Network (CNN) image classifier with a 90% classification accuracy',
      'Developed a ’Get Route’ feature that integrates Google Maps & Distance API’s with a database of littered roads to provide the user with an optimized cleaning route based on their current location',
      'Presented a demo to industry professionals that showcased StreetCleanr’s accurate CNN and robust business roadmap',
    ],
    skills: ['Python', 'Flask', 'Tensorflow'],
  },
  {
    name: 'GuessNFLPlayer',
    img: '/images/guessnflplayer.png',
    url: 'https://pchryss.pythonanywhere.com',
    bullets: [
      'Optimized a Python script that combines the Pandas library and Google Images API to create a database of 1500+ players',
      'Utilized OpenAI’s GPT-3.5-Turbo API to produce informative descriptions for each player in the database',
      'Created a ’Report Bug’ feature which triggers an AWS Lambda and uses AWS SES to notify admins of user issues',
      'Employed Flask and SQLite to implement a scalable and robust backend that ensures optimal application performance',
      'Created a seamless UI using HTML, CSS, and Bootstrap that enhanced user experience and accessibility',
    ],
    skills: ['Python', 'Flask', 'AWS', 'SQL'],
  },
];

export default AllProjectsData;
