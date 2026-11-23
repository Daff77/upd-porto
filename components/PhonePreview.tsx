import { useRef, useState } from 'react';
import type { ProjectMedia } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const button = 'grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current hover:bg-black/5 disabled:opacity-35 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export function PhonePreview({ slides, transitionName }: { slides: ProjectMedia[]; transitionName?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  if (!slide) return null;

  function select(position: number) {
    const viewport = track.current;
    if (!viewport) return;
    viewport.scrollTo({
      left: position * viewport.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  return (
    <figure className="mx-auto w-full max-w-[15rem] text-center" aria-label="Better Life screenshots">
      <div style={{ viewTransitionName: transitionName }} className="rounded-[1.75rem] bg-neutral-900 p-2 shadow-xl">
        <div
          ref={track}
          onScroll={(event) => {
            const { scrollLeft, clientWidth } = event.currentTarget;
            if (clientWidth) setIndex(Math.min(slides.length - 1, Math.max(0, Math.round(scrollLeft / clientWidth))));
          }}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[1.25rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((item, position) => (
            <a key={item.src} href={item.src} target="_blank" rel="noopener noreferrer"
              tabIndex={position === index ? 0 : -1}
              className="block w-full shrink-0 snap-start bg-[#ebf0ed] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
              aria-label={`Open full-size screenshot: ${item.alt}`}>
              <img src={item.src} alt={item.alt} draggable={false} className="block aspect-[610/1356] w-full object-contain" />
            </a>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-text-secondary dark:text-dark-text-secondary" aria-live="polite">
        {slide.caption}
      </figcaption>
      {slides.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-4">
          <button type="button" className={button} aria-label="Previous screenshot" disabled={index === 0} onClick={() => select(index - 1)}>
            <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
          </button>
          <span className="text-xs tabular-nums">{index + 1} / {slides.length}</span>
          <button type="button" className={button} aria-label="Next screenshot" disabled={index === slides.length - 1} onClick={() => select(index + 1)}>
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      )}
    </figure>
  );
}
