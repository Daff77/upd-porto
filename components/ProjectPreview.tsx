import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const control = 'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle dark:border-dark-border-subtle hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const [index, setIndex] = useState(0);
  const slides = project.media ?? [];
  const slide = slides[index];
  const useViewportCrop = project.id === 'pos-cafe';
  if (!slide) return null;

  const changeSlide = (direction: number) =>
    setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <section aria-label={`${project.name} preview`} className="rise-in overflow-hidden rounded-2xl border border-border-subtle bg-button-secondary-bg dark:border-dark-border-subtle dark:bg-dark-card">
      <div aria-live="polite" className="grid gap-5 p-5 sm:p-7 md:min-h-[350px] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-8 lg:p-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold">{project.name}</p>
          <h2 className="text-balance text-[clamp(1.65rem,4vw,2.7rem)] font-semibold leading-[1.05] tracking-tight">{slide.caption || slide.alt}</h2>
          {index === 0 && <p className="max-w-[42ch] text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">{project.summary}</p>}
        </div>
        <a
          href={slide.src}
          style={{ viewTransitionName: `var(--project-media-${project.id}, none)` }}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full-size screenshot. ${slide.alt}`}
          className={`flex min-w-0 items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-white dark:border-dark-border-subtle dark:bg-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${useViewportCrop ? 'aspect-[16/10]' : 'p-2'}`}
        >
          <img src={slide.src} alt={slide.alt} className={`block w-full ${useViewportCrop ? 'h-full object-cover object-top' : 'h-[220px] object-contain md:h-[285px]'}`} />
        </a>
      </div>
      {slides.length > 1 && (
        <div className="flex items-center justify-between gap-3 border-t border-border-subtle px-4 py-2 dark:border-dark-border-subtle sm:px-7">
          <div className="flex items-center">
            {slides.map((item, position) => (
              <button key={item.src} type="button" onClick={() => setIndex(position)} aria-label={`Slide ${position + 1}. ${item.caption || item.alt}`} aria-pressed={position === index} className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2">
                <span className={`h-2 rounded-full bg-current ${position === index ? 'w-5' : 'w-2 opacity-40'}`} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm tabular-nums">
            <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous slide" className={control}><ArrowLeftIcon className="h-4 w-4" /></button>
            <span className="whitespace-nowrap">{index + 1} / {slides.length}</span>
            <button type="button" onClick={() => changeSlide(1)} aria-label="Next slide" className={control}><ArrowRightIcon className="h-4 w-4" /></button>
          </div>
        </div>
      )}
    </section>
  );
};
