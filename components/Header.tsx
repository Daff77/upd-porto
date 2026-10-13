import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS_MAIN } from '../constants';
import { SunIcon, MoonIcon, EnvelopeIcon } from './icons';
import { NavItem as NavItemType } from '../types';

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(({ item, isActive, onClick, onMouseEnter, onMouseLeave }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`px-3 py-2 min-h-[44px] min-w-[44px] rounded-full transition-colors text-xs font-semibold relative flex items-center justify-center
      ${isActive 
        ? 'text-text-primary dark:text-dark-text-primary' // Active icon and label color
        : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary' // Inactive and hover color
      }`}
    aria-label={item.name}
    aria-current={isActive ? 'page' : undefined}
  >
    <item.icon className="w-4 h-4 shrink-0" />
    <span className="hidden sm:inline ml-1.5 tracking-tight">{item.name}</span>
  </button>
));

export const Header: React.FC<{
  currentPage: string;
  setCurrentPage: (pageId: string) => void;
  theme: string;
  toggleTheme: (event?: React.MouseEvent) => void;
}> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const navContainerRef = useRef<HTMLElement>(null);
  const activePillRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  useEffect(() => {
    navItemRefs.current = navItemRefs.current.slice(0, NAV_ITEMS_MAIN.length);
  }, []);

  const updatePillStyles = (
    pillEl: HTMLDivElement | null,
    targetItemId: string | null,
    itemRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>,
    containerEl: HTMLElement | null,
    navItemsConfig: NavItemType[]
  ) => {
    if (!pillEl || !containerEl ) {
      if (pillEl) pillEl.style.opacity = '0';
      return;
    }

    if (!targetItemId) { 
        pillEl.style.opacity = '0';
        return;
    }

    const targetItemIndex = navItemsConfig.findIndex(navItem => navItem.id === targetItemId);
    const targetItemEl = itemRefs.current[targetItemIndex];

    if (targetItemEl) {
      const containerRect = containerEl.getBoundingClientRect();
      const targetItemRect = targetItemEl.getBoundingClientRect();
      
      pillEl.style.left = `${targetItemRect.left - containerRect.left}px`;
      pillEl.style.width = `${targetItemRect.width}px`;
      pillEl.style.height = `${targetItemRect.height}px`;
      pillEl.style.top = `${targetItemRect.top - containerRect.top}px`;
      pillEl.style.opacity = '1';
    } else {
      pillEl.style.opacity = '0';
    }
  };
  

  useEffect(() => {
    const calculatePillPositions = () => {
      // Determine the target for the active pill:
      // If an item is hovered, target that. Otherwise, target the current page.
      const targetItemIdForPill = hoveredItemId || currentPage;
      
      updatePillStyles(
        activePillRef.current, 
        targetItemIdForPill, 
        navItemRefs, 
        navContainerRef.current, 
        NAV_ITEMS_MAIN
      );
    };

    calculatePillPositions();

    window.addEventListener('resize', calculatePillPositions);
    return () => {
      window.removeEventListener('resize', calculatePillPositions);
    };
  }, [currentPage, hoveredItemId, theme]);


  const handleNavClick = (itemId: string) => {
    setCurrentPage(itemId);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav ref={navContainerRef} className="relative flex items-center">
            {NAV_ITEMS_MAIN.map((item, index) => (
              <NavItem 
                key={item.id}
                ref={el => { navItemRefs.current[index] = el; }}
                item={item} 
                isActive={currentPage === item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              />
            ))}
            <div ref={activePillRef} className="nav-active-pill"></div>
          </nav>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={(e) => toggleTheme(e)}
              aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
              className="group text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-colors hover:bg-card-hover dark:hover:bg-dark-card-hover active:scale-[0.96]"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180" />}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover text-xs font-semibold py-2.5 px-4 min-h-[44px] rounded-full transition-all duration-200 active:scale-[0.98]"
            >
              <EnvelopeIcon className="w-3.5 h-3.5 mr-1.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
