import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS, getProject } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { AppLink } from './navigation';
import { ProjectCover } from './ProjectCover';
import { ProjectPreview } from './ProjectPreview';
import { PhonePreview } from './PhonePreview';
import { Tag } from './ui/Tag';
import { ButtonLink } from './ui/Button';
import { ArrowLeftIcon, ArrowRightIcon, GithubIcon } from './icons';

export const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const activeIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = getProject(projectId);

  usePageMeta(
    project
      ? `${project.name} · Daffa Danendra Fairuzza`
      : 'Project not found · Daffa Danendra Fairuzza',
    project?.summary
  );

  if (!project) {
    return (
      <div className="text-center py-20 space-y-4">
        <h1 className="font-display text-3xl font-medium text-text-primary dark:text-dark-text-primary">
          Project not found
        </h1>
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-md mx-auto">
          The project case study you are looking for does not exist.
        </p>
        <div className="pt-2">
          <ButtonLink to="/projects" variant="primary">
            Back to projects
          </ButtonLink>
        </div>
      </div>
    );
  }

  const prevProject = PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(activeIndex + 1) % PROJECTS.length];
  const betterLifeScreen = project.id === 'better-life' ? project.media?.[0] : undefined;
  const repository = project.links.find((link) => link.kind === 'repo');

  return (
    <article className="space-y-12 md:space-y-16">
      {/* Top Breadcrumb */}
      <div className="rise-in flex items-center justify-between gap-4" style={{ '--n': 0 } as React.CSSProperties}>
        <AppLink
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
          />
          <span>All projects</span>
        </AppLink>

        <span className="font-mono text-xs text-text-secondary/70 dark:text-dark-text-secondary/70">
          Project {activeIndex + 1} of {PROJECTS.length}
        </span>
      </div>

      {betterLifeScreen ? (
        <header className="rise-in grid items-center gap-10 rounded-2xl border border-border-subtle bg-[#f2f1ee] px-6 py-10 dark:border-dark-border-subtle dark:bg-dark-card sm:px-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] md:py-14" style={{ '--n': 1 } as React.CSSProperties}>
          <div>
            <p className="font-display text-base font-semibold">{project.name}</p>
            <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
              Understand your daily calorie needs
            </h1>
            <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
              A mobile nutrition app that estimates how much energy you need each day using your personal inputs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              {repository && (
                <a href={repository.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-white hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white">
                  <GithubIcon aria-hidden="true" className="h-4 w-4" />
                  {repository.label}
                </a>
              )}
              <a href="#better-life-overview" className="inline-flex min-h-11 items-center rounded-lg border border-current px-4 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/10">
                Explore the project
              </a>
            </div>
          </div>
          <PhonePreview slides={project.media ?? []} />
        </header>
      ) : (
      <header className="rise-in space-y-6" style={{ '--n': 1 } as React.CSSProperties}>
        <div className="space-y-3 max-w-3xl">
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            {[project.category, project.context].filter(Boolean).join(' · ')}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-tight leading-[1.06] text-text-primary dark:text-dark-text-primary">
            {project.name}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-[64ch]">
            {project.summary}
          </p>
        </div>

        {/* Meta strip */}
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-border-subtle dark:border-dark-border-subtle font-mono text-xs">
          <div>
            <dt className="text-text-secondary dark:text-dark-text-secondary">Stage</dt>
            <dd className="mt-1 font-medium text-text-primary dark:text-dark-text-primary">
              {project.stage ?? 'In progress'}
            </dd>
          </div>
          <div>
            <dt className="text-text-secondary dark:text-dark-text-secondary">Context</dt>
            <dd className="mt-1 font-medium text-text-primary dark:text-dark-text-primary">
              {project.context}
            </dd>
          </div>
          <div>
            <dt className="text-text-secondary dark:text-dark-text-secondary">Stack</dt>
            <dd className="mt-1 font-medium text-text-primary dark:text-dark-text-primary">
              {project.stack.length > 0
                ? `${project.stack.length} technologies`
                : 'To be documented'}
            </dd>
          </div>
          <div>
            <dt className="text-text-secondary dark:text-dark-text-secondary">Links</dt>
            <dd className="mt-1">
              {project.links.length > 0 ? (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent-green dark:text-dark-accent-green hover:underline"
                >
                  <GithubIcon aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>{project.links[0].label}</span>
                </a>
              ) : (
                <span className="text-text-secondary dark:text-dark-text-secondary">
                  No public link yet
                </span>
              )}
            </dd>
          </div>
        </dl>
      </header>
      )}

      {betterLifeScreen ? null : project.media?.length ? (
        <ProjectPreview key={project.id} project={project} />
      ) : (
        <div className="rise-in w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border-subtle dark:border-dark-border-subtle bg-button-secondary-bg dark:bg-dark-card" style={{ '--n': 2 } as React.CSSProperties}>
          <ProjectCover project={project} variant="hero" />
        </div>
      )}

      {/* Main Content + Sticky Aside */}
      <div className="rise-in grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start" style={{ '--n': 3 } as React.CSSProperties}>
        {/* Main column */}
        <div className="space-y-10 min-w-0">
          {/* Overview */}
          <section id={betterLifeScreen ? 'better-life-overview' : undefined} className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
              Overview
            </h2>
            <div className="space-y-3 max-w-[64ch] text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
              {project.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* Problem & Goal */}
          {(project.problem || project.goal) && (
            <section className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle space-y-5">
              <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
                Problem &amp; goal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="space-y-1.5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                      Problem
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.goal && (
                  <div className="space-y-1.5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-accent-green dark:text-dark-accent-green">
                      Goal
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                      {project.goal}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Features */}
          {project.features.map((group) => (
            <section
              key={group.title}
              className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle space-y-4"
            >
              <div className="space-y-1">
                <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
                  {group.title}
                </h2>
                {group.note && (
                  <p className="text-xs italic text-text-secondary dark:text-dark-text-secondary">
                    {group.note}
                  </p>
                )}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary marker:text-text-placeholder dark:marker:text-dark-text-placeholder">
                {group.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Contribution (only when explicitly confirmed) */}
          {project.contribution && project.contribution.length > 0 && (
            <section className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle space-y-4">
              <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
                My contribution
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary marker:text-text-placeholder dark:marker:text-dark-text-placeholder">
                {project.contribution.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Work Areas */}
          {project.workAreas && (
            <section className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle space-y-4">
              <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
                {project.workAreas.title}
              </h2>
              {project.workAreas.intro && (
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {project.workAreas.intro}
                </p>
              )}
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary marker:text-text-placeholder dark:marker:text-dark-text-placeholder">
                {project.workAreas.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Takeaways */}
          {project.takeaways && project.takeaways.length > 0 && (
            <section className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle space-y-4">
              <h2 className="font-display text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
                What it demonstrates
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary marker:text-text-placeholder dark:marker:text-dark-text-placeholder">
                {project.takeaways.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Scope Note */}
          {project.scopeNote && (
            <aside className="rounded-xl bg-card-hover dark:bg-dark-card border border-border-subtle dark:border-dark-border-subtle p-4 space-y-1">
              <p className="font-mono text-xs text-text-primary dark:text-dark-text-primary font-medium">
                Scope note
              </p>
              <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                {project.scopeNote}
              </p>
            </aside>
          )}

        </div>

        {/* Aside */}
        <aside className="lg:sticky lg:top-8 space-y-8 border-t lg:border-t-0 lg:border-l border-border-subtle dark:border-dark-border-subtle pt-8 lg:pt-0 lg:pl-8">
          {/* Tech stack */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary dark:text-dark-text-secondary">
              Tech stack
            </h2>
            {project.stack.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                To be documented
              </p>
            )}
          </div>

          {/* Architecture */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary dark:text-dark-text-secondary">
              Architecture
            </h2>
            <ol className="space-y-3">
              {project.architecture.map((node, idx) => (
                <li key={node.label} className="flex items-baseline gap-3 text-sm">
                  <span className="font-mono text-xs text-accent-green dark:text-dark-accent-green shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-medium text-text-primary dark:text-dark-text-primary">
                      {node.label}
                    </div>
                    {node.detail && (
                      <div className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary">
                        {node.detail}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary dark:text-dark-text-secondary">
              Links
            </h2>
            {project.links.length > 0 ? (
              <div className="flex flex-col gap-2 items-start">
                {project.links.map((link) => (
                  <ButtonLink
                    key={link.url}
                    href={link.url}
                    variant="secondary"
                    icon={
                      link.kind === 'repo' ? (
                        <GithubIcon aria-hidden="true" className="w-4 h-4" />
                      ) : undefined
                    }
                  >
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                No public link yet
              </p>
            )}
          </div>
        </aside>
      </div>

      {/* Prev / Next Navigation */}
      <nav
        aria-label="Project pagination"
        className="pt-8 border-t border-border-subtle dark:border-dark-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <AppLink
          to={`/project/${prevProject.id}`}
          className="group flex items-center gap-3 p-4 rounded-xl border border-border-subtle dark:border-dark-border-subtle hover:border-border dark:hover:border-dark-border transition-colors text-left"
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover:text-accent-green dark:group-hover:text-dark-accent-green transition-transform group-hover:-translate-x-0.5 shrink-0"
          />
          <div className="min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
              Previous
            </div>
            <div className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
              {prevProject.name}
            </div>
            <div className="text-xs text-text-secondary dark:text-dark-text-secondary truncate">
              {prevProject.category}
            </div>
          </div>
        </AppLink>

        <AppLink
          to={`/project/${nextProject.id}`}
          className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border-subtle dark:border-dark-border-subtle hover:border-border dark:hover:border-dark-border transition-colors text-right sm:flex-row-reverse"
        >
          <ArrowRightIcon
            aria-hidden="true"
            className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover:text-accent-green dark:group-hover:text-dark-accent-green transition-transform group-hover:translate-x-0.5 shrink-0"
          />
          <div className="min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
              Next
            </div>
            <div className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
              {nextProject.name}
            </div>
            <div className="text-xs text-text-secondary dark:text-dark-text-secondary truncate">
              {nextProject.category}
            </div>
          </div>
        </AppLink>
      </nav>
    </article>
  );
};
