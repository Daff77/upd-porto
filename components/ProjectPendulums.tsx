import { useCallback, useEffect, useRef, type PointerEvent } from 'react';
import pythonLogo from '../assets/pendulum-python.webp';
import reactLogo from '../assets/pendulum-react.webp';
import githubLogo from '../assets/pendulum-github.webp';

const logos = [
  { name: 'Python', length: 94, period: 3100, image: pythonLogo },
  { name: 'React', length: 131, period: 3600, image: reactLogo },
  { name: 'GitHub', length: 106, period: 3300, image: githubLogo },
];

type Point = { x: number; y: number };

function logoTransform({ x, y }: Point) {
  return `translate(${x}px, ${y}px)`;
}

function ropeTransform({ x, y }: Point, length: number) {
  return `rotate(${Math.atan2(-x, y)}rad) scaleY(${Math.hypot(x, y) / length})`;
}

function Pendulum({ name, length, period, image }: (typeof logos)[number]) {
  const logo = useRef<HTMLButtonElement>(null);
  const rope = useRef<HTMLSpanElement>(null);
  const animations = useRef<Animation[]>([]);
  const drag = useRef<{ pointer: number; start: Point; origin: Point; position: Point } | null>(null);

  const play = useCallback((points: Point[], options: KeyframeAnimationOptions) => {
    animations.current.forEach((animation) => animation.cancel());
    if (!logo.current || !rope.current) return [];
    animations.current = [
      logo.current.animate(points.map((point) => ({ transform: logoTransform(point), easing: options.iterations === Infinity ? 'ease-in-out' : 'linear' })), options),
      rope.current.animate(points.map((point) => ({ transform: ropeTransform(point, length), easing: options.iterations === Infinity ? 'ease-in-out' : 'linear' })), options),
    ];
    return animations.current;
  }, [length]);

  const idle = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    play([0, 6, 0, -6, 0].map((x) => ({ x, y: length })), { duration: period, iterations: Infinity });
  }, [length, period, play]);

  useEffect(() => {
    idle();
    return () => animations.current.forEach((animation) => animation.cancel());
  }, [idle]);

  function place(position: Point) {
    if (logo.current) logo.current.style.transform = logoTransform(position);
    if (rope.current) rope.current.style.transform = ropeTransform(position, length);
  }

  function settle(position: Point) {
    const rest = { x: 0, y: length };
    place(rest);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const points = Array.from({ length: 21 }, (_, index) => {
      const remaining = 1 - index / 20;
      return { x: position.x * remaining, y: length + (position.y - length) * remaining };
    });
    const [returning] = play(points, { duration: 460, easing: 'ease-out' });
    void returning?.finished.then(idle, () => {});
  }

  function start(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0 || drag.current) return;
    const transform = new DOMMatrixReadOnly(getComputedStyle(event.currentTarget).transform);
    const origin = { x: transform.e, y: transform.f };
    animations.current.forEach((animation) => animation.cancel());
    place(origin);
    drag.current = {
      pointer: event.pointerId,
      start: { x: event.clientX, y: event.clientY },
      origin,
      position: origin,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent<HTMLButtonElement>) {
    const active = drag.current;
    if (!active || active.pointer !== event.pointerId) return;
    const x = active.origin.x + event.clientX - active.start.x;
    const y = active.origin.y + event.clientY - active.start.y;
    active.position = {
      x: Math.max(-120, Math.min(120, x)),
      y: Math.max(26, Math.min(length + 100, y)),
    };
    place(active.position);
  }

  function release(event: PointerEvent<HTMLButtonElement>) {
    const active = drag.current;
    if (!active || active.pointer !== event.pointerId) return;
    drag.current = null;
    settle(active.position);
  }

  return (
    <div className="relative flex justify-center" style={{ height: length + 80 }}>
      <span ref={rope} aria-hidden="true" className="pointer-events-none absolute top-0 w-px origin-top bg-current opacity-35" style={{ height: length }} />
      <button
        ref={logo}
        type="button"
        aria-label={`${name} draggable logo`}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={release}
        onPointerCancel={release}
        onLostPointerCapture={release}
        onClick={(event) => { if (event.detail === 0) settle({ x: 18, y: length }); }}
        className="pointer-events-auto absolute -top-0.5 grid h-[80px] w-[80px] touch-none cursor-grab select-none place-items-center rounded-2xl active:cursor-grabbing"
        style={{ transform: logoTransform({ x: 0, y: length }) }}
      >
        <img src={image} alt="" width={80} height={80} draggable={false} className="pointer-events-none h-full w-full object-contain" />
      </button>
      <span aria-hidden="true" className="pointer-events-none absolute -top-0.5 h-1 w-1 rounded-full bg-current opacity-70" />
    </div>
  );
}

export function ProjectPendulums() {
  return (
    <div className="pointer-events-none absolute -top-14 right-0 z-10 hidden w-[300px] grid-cols-3 xl:grid" aria-label="Draggable technology logos">
      {logos.map((logo) => <Pendulum key={logo.name} {...logo} />)}
    </div>
  );
}
