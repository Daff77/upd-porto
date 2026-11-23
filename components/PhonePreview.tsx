import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import type { ProjectMedia } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const button = 'grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current hover:bg-black/5 aria-disabled:opacity-35 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export function PhonePreview({ slides, transitionName }: { slides: ProjectMedia[]; transitionName?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const draggedControls = useRef(false);
  const swipeControls = useSwipeable({
    trackMouse: true,
    delta: 24,
    onTouchStartOrOnMouseDown: () => { draggedControls.current = false; },
    onSwipedLeft: () => {
      draggedControls.current = true;
      select(index + 1);
    },
    onSwipedRight: () => {
      draggedControls.current = true;
      select(index - 1);
    },
  });

  useEffect(() => () => clearTimeout(settleTimer.current), []);

  if (!slide) return null;

  function updateActiveSlide() {
    clearTimeout(settleTimer.current);
    const viewport = track.current;
    if (!viewport?.clientWidth) return;
    const position = Math.round(viewport.scrollLeft / viewport.clientWidth);
    setIndex(Math.max(0, Math.min(slides.length - 1, position)));
  }

  function select(position: number) {
    const viewport = track.current;
    const target = viewport?.children.item(position);
    if (!viewport || !(target instanceof HTMLElement)) return;
    viewport.scrollTo({
      left: target.offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  return (
    <figure className="mx-auto w-full max-w-[15rem] text-center" aria-label="Better Life screenshots">
      <div style={{ viewTransitionName: transitionName }} className="rounded-[1.75rem] bg-neutral-900 p-2 shadow-xl">
        <div
          ref={track}
          onScroll={() => {
            clearTimeout(settleTimer.current);
            settleTimer.current = setTimeout(updateActiveSlide, 150);
          }}
          onScrollEnd={updateActiveSlide}
          className="relative flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[1.25rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((item, position) => (
            <a key={item.src} href={item.src} target="_blank" rel="noopener noreferrer"
              tabIndex={position === index ? 0 : -1}
              className="block min-w-0 basis-full shrink-0 snap-start bg-[#ebf0ed] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
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
        <div
          {...swipeControls}
          onClickCapture={(event) => {
            if (!draggedControls.current || event.detail === 0) return;
            event.preventDefault();
            event.stopPropagation();
          }}
          className="mt-3 flex touch-pan-y select-none items-center justify-center gap-4"
        >
          <button type="button" className={button} aria-label="Previous screenshot" aria-disabled={index === 0} onClick={() => select(index - 1)}>
            <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
          </button>
          <span className="text-xs tabular-nums">{index + 1} / {slides.length}</span>
          <button type="button" className={button} aria-label="Next screenshot" aria-disabled={index === slides.length - 1} onClick={() => select(index + 1)}>
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      )}
    </figure>
  );
}
