import { ExperienceItem, EducationItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'hima-kominfo',
    organization: 'Hima Kominfo',
    role: 'Website Development Division',
    type: 'Student organization',
    description: "Part of the website development division, supporting the organization's digital needs around building and maintaining its website.",
  },
  {
    id: 'proksi-2025',
    organization: 'PROKSI UINSA 2025',
    role: 'Public Relations & Speaker Liaison Officer',
    type: 'Event committee',
    period: '2025',
    description: 'Handled communication and coordination with speakers to help the event run smoothly.',
  },
  {
    id: 'commit',
    organization: 'UINSA × UiTM COMMIT',
    role: 'Member, Publication, Documentation & Design',
    type: 'Collaboration program',
    description: "Supported the program's publication, documentation, and design needs.",
  },
  {
    id: 'prisma',
    organization: 'PRISMA UINSA',
    role: 'Member, Finance',
    type: 'Student organization',
    description: "Took part in the finance division, supporting administrative and financial needs for the organization's activities.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'uinsa',
    institution: 'UIN Sunan Ampel Surabaya',
    credential: "Bachelor's in Information Systems",
    detail: 'Faculty of Science and Technology',
    areas: [
      {
        title: 'Programming & app development',
        detail: 'Object-oriented programming in Java, desktop applications, and web and mobile development.',
      },
      {
        title: 'Databases',
        detail: 'SQL, relational design, CRUD operations, PostgreSQL and MySQL.',
      },
      {
        title: 'Systems analysis & design',
        detail: 'Requirements, process flows, and connecting business processes to technical solutions.',
      },
      {
        title: 'Data analytics & visualization',
        detail: 'RStudio, Looker Studio, and Python data and ML libraries.',
      },
      {
        title: 'IT governance & audit',
        detail: 'COBIT 2019, IT governance, and mapping security controls to ISO/IEC 27001 Annex A.',
      },
      {
        title: 'Infrastructure & data processing',
        detail: 'Hadoop, HDFS, Spark, and Linux/WSL environments.',
      },
    ],
  },
  {
    id: 'sman3',
    institution: 'SMAN 3 Surabaya',
    credential: 'Senior high school',
  },
];
