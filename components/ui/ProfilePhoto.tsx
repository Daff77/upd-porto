import React, { useState } from 'react';
import { PROFILE } from '../../constants';

interface ProfilePhotoProps {
  variant?: 'avatar' | 'portrait';
  className?: string;
  frameReveal?: boolean;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  variant = 'avatar',
  className = '',
  frameReveal = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(PROFILE.photoUrl) && !imgError;

  const sizeClass =
    variant === 'portrait'
      ? 'w-full aspect-[4/5] max-w-[240px]'
      : 'w-14 h-14 sm:w-16 sm:h-16 shrink-0';

  if (showImage) {
    return (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-border-subtle dark:border-dark-border-subtle bg-card-hover dark:bg-dark-card ${sizeClass} ${className} ${frameReveal ? 'profile-frame-reveal' : ''}`}
        onPointerMove={frameReveal ? (event) => {
          if (event.pointerType !== 'mouse') return;
          const frame = event.currentTarget;
          const x = (event.nativeEvent.offsetX / frame.clientWidth - 0.5) * 4;
          const y = (event.nativeEvent.offsetY / frame.clientHeight - 0.5) * 4;
          frame.style.setProperty('--frame-x', `${x}px`);
          frame.style.setProperty('--frame-y', `${y}px`);
        } : undefined}
        onPointerLeave={frameReveal ? (event) => {
          event.currentTarget.style.removeProperty('--frame-x');
          event.currentTarget.style.removeProperty('--frame-y');
        } : undefined}
      >
        <img
          src={PROFILE.photoUrl}
          alt={PROFILE.name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-[center_32%] origin-[center_41%] scale-[2.2] transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[2.24]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${PROFILE.name} portrait space`}
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border-subtle dark:border-dark-border-subtle bg-card-hover dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary select-none transition-colors duration-200 ${sizeClass} ${className}`}
    >
      <span
        className={
          variant === 'portrait'
            ? 'font-display text-3xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.04]'
            : 'font-display text-base sm:text-lg font-medium tracking-tight text-text-primary dark:text-dark-text-primary transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.04]'
        }
      >
        {PROFILE.initials}
      </span>
      {variant === 'portrait' && (
        <span className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-placeholder dark:text-dark-text-placeholder">
          Add photo
        </span>
      )}
    </div>
  );
};
