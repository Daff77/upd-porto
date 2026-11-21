import React, { createContext, useContext } from 'react';

export const NavigationContext = createContext<(path: string) => void>(() => {});

export const useGo = () => useContext(NavigationContext);

export interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const AppLink: React.FC<AppLinkProps> = ({
  to,
  onClick,
  children,
  ...rest
}) => {
  const go = useGo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    go(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
