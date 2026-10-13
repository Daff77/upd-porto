import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { SectionTitle } from './SectionTitle';
import { CallToAction } from './CallToAction';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from './icons';
import { RapidMindCaseStudy } from './RapidMindCaseStudy';

export const ProjectDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, projectId?: string) => void;
  email: string;
}> = ({ setCurrentPage, email }) => {
  const { projectId } = useParams<{ projectId: string }>();

  // If viewing RAPID-MIND, render the complete technical case study
  if (projectId === 'rapid-mind' || !projectId) {
    return (
      <RapidMindCaseStudy
        onBack={() => setCurrentPage('projects')}
        setCurrentPage={setCurrentPage}
        email={email}
      />
    );
  }

  const project = PROJECTS.find((p) => p.id === projectId);
  const otherProjects = PROJECTS.filter(p => p.id !== projectId);

  if (!project) {
    return (
      <div className="text-center py-16 animated-item anim-fadeInUp space-y-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-md mx-auto">
          The requested project could not be found or has not yet been published.
        </p>
        <button
          onClick={() => setCurrentPage('projects')}
          className="px-5 py-2.5 bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const IconComponent = project.iconComponent || CodeBracketSquareIcon;

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Back Button */}
      <div className="animated-item anim-fadeInUp">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      {/* Project Header */}
      <div className="text-center animated-item anim-fadeInUp anim-delay-100 max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          {project.logoImageUrl ? (
            <img
              src={project.logoImageUrl}
              alt={`${project.name} logo`}
              className="w-20 h-20 rounded-2xl object-cover border-4 border-card dark:border-dark-card shadow-lg bg-card dark:bg-dark-card"
            />
          ) : (
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${project.iconBgColor || 'bg-emerald-600'}`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30">
              {project.projectType || "Featured Concept"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary font-medium">
              {project.tagline}
            </p>
          )}
        </div>
        
        {/* Project Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary py-2 border-y border-border dark:border-dark-border">
          {project.year && (
            <div>
              <span className="font-semibold text-text-primary dark:text-dark-text-primary">Year:</span> {project.year}
            </div>
          )}
          {project.projectType && (
            <div>
              <span className="font-semibold text-text-primary dark:text-dark-text-primary">Status:</span> {project.projectType}
            </div>
          )}
          {project.company && (
            <div>
              <span className="font-semibold text-text-primary dark:text-dark-text-primary">Domain:</span> {project.company}
            </div>
          )}
          {project.client && (
            <div>
              <span className="font-semibold text-text-primary dark:text-dark-text-primary">Context:</span> {project.client}
            </div>
          )}
        </div>

        {/* Technologies / Focus Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Link (if available) */}
        {project.liveLink && (
          <div className="pt-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green/90 transition-colors group text-sm font-medium shadow-md"
            >
              View Live Project
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        )}
      </div>

      {/* Project Overview */}
      {project.overview && (
        <div className="animated-item anim-fadeInUp anim-delay-300 p-6 sm:p-8 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-green mr-2.5"></span>
            Concept Overview
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed text-base sm:text-lg">
            {project.overview}
          </p>
        </div>
      )}

      {/* Problem Statement */}
      {project.problemStatement && (
        <div className="animated-item anim-fadeInUp anim-delay-400 p-6 sm:p-8 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="w-2 h-2 rounded-full bg-rose-500 mr-2.5"></span>
            {project.problemStatement.title || 'The Challenge'}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed text-base">
            {project.problemStatement.description}
          </p>
        </div>
      )}

      {/* Solution Statement */}
      {project.solutionStatement && (
        <div className="animated-item anim-fadeInUp anim-delay-500 p-6 sm:p-8 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-green mr-2.5"></span>
            {project.solutionStatement.title || 'The Solution Approach'}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed text-base">
            {project.solutionStatement.description}
          </p>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="space-y-6 animated-item anim-fadeInUp anim-delay-600">
          <SectionTitle title="Other Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onProjectSelect={(id) => setCurrentPage('project-detail', id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="animated-item anim-fadeInUp anim-delay-700">
        <CallToAction email={email} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};
