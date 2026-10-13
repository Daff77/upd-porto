import React from 'react';
import { ProjectsPageProps } from '../types';
import { RapidMindCaseStudy } from './RapidMindCaseStudy';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ email, setCurrentPage }) => {
  return (
    <div className="space-y-12">
      <RapidMindCaseStudy
        onBack={() => setCurrentPage('home')}
        setCurrentPage={setCurrentPage}
        email={email}
      />
    </div>
  );
};
