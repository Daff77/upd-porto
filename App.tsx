import React, { useRef, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SpeakingEventsSection } from './components/SpeakingEventsSection';
import { LatestVideosSection } from './components/LatestVideosSection';
import { GitHubContributionsGraph } from './components/GitHubContributionsGraph';
import { TechnicalFocusSection } from './components/TechnicalFocusSection';
import { TechnicalFocusPage } from './components/TechnicalFocusPage';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { HireMePage } from './components/HireMePage';
import { ProjectDetailsPage } from './components/ProjectDetailsPage';
import { PERSONAL_INFO, PROJECTS, SIDE_PROJECTS, SOCIAL_LINKS, SKILLS, DEVELOPER_CREDIT } from './constants';
import { IntroAnimation } from './components/IntroAnimation';
import { SmoothScrollProvider, SmoothScrollToTop } from './components/SmoothScrollProvider';
import { useLenis } from 'lenis/react';
import clickSound from './assets/click_sound.wav';

// Wrapper component to handle navigation and theme
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();
  const [showIntro, setShowIntro] = useState(false);
  
  // Theme state initialization
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    // Sync theme with HTML class and localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    // Global UI click sound for buttons/menus
    const audio = new Audio(clickSound);
    audio.preload = 'auto';
    audio.volume = 0.35;

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Skip form typing interactions
      if (target.closest('input, textarea, select, label')) return;

      // Play for interactive UI controls
      const interactive = target.closest('button, a, [role="button"], [data-click-sound="true"]');
      if (!interactive) return;
      if ((interactive as HTMLButtonElement).disabled) return;
      if (interactive.getAttribute('aria-disabled') === 'true') return;

      try {
        audio.currentTime = 0;
        void audio.play();
      } catch {
        // Ignore autoplay / platform restrictions
      }
    };

    document.addEventListener('click', onDocumentClick, true);
    return () => {
      document.removeEventListener('click', onDocumentClick, true);
      audio.pause();
    };
  }, []);

  const toggleTheme = useCallback(
    (_event?: React.MouseEvent) => {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      const doc = document as unknown as {
        startViewTransition?: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      document.documentElement.setAttribute('data-theme-transition', nextTheme);

      if (doc.startViewTransition) {
        const transition = doc.startViewTransition(() => {
          setTheme(nextTheme);
        });

        void transition.finished.finally(() => {
          document.documentElement.removeAttribute('data-theme-transition');
        });
        return;
      }

      // Fallback: plain state toggle
      setTheme(nextTheme);
      window.setTimeout(() => {
        document.documentElement.removeAttribute('data-theme-transition');
      }, 500);
    },
    [theme]
  );

  const handleSetPage = useCallback((page: string, projectId?: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (page === 'home') {
        navigate('/');
      } else if (page === 'project-detail' && projectId) {
        navigate(`/project/${projectId}`);
      } else if (page === 'hire') {
        navigate('/contact');
      } else {
        navigate(`/${page}`);
      }
      setIsTransitioning(false);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 150);
  }, [navigate, lenis]);

  // Menu tab order for swipe navigation: Home, About, Projects, Contact
  const menuTabs = ['home', 'about', 'projects', 'contact'];

  // Get current page from location
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/project/')) return 'project-detail';
    if (path === '/hire') return 'contact';
    return path.slice(1);
  };

  const currentPage = getCurrentPage();

  // Swipe gesture handlers
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const currentTabIdx = menuTabs.indexOf(currentPage);
  const swipeStartAllowedRef = useRef(true);
  const swipeStartAtRef = useRef<{ x: number; y: number } | null>(null);

  const goToTab = (idx: number) => {
    if (idx >= 0 && idx < menuTabs.length) {
      handleSetPage(menuTabs[idx]);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipeStart: (e) => {
      const touch = 'touches' in e && e.touches && e.touches[0] ? e.touches[0] : null;
      const x = touch?.clientX ?? 0;
      const y = touch?.clientY ?? 0;
      swipeStartAtRef.current = { x, y };

      const w = window.innerWidth || 1;
      const startRatio = x / w;
      const withinMiddle = startRatio >= 0.22 && startRatio <= 0.78;

      const target = e.target as HTMLElement | null;
      const isTyping = !!target?.closest('input, textarea, select, label');
      const isInteractive = !!target?.closest('button, a, [role="button"]');

      swipeStartAllowedRef.current = withinMiddle && !isTyping && !isInteractive;
    },
    onSwipedLeft: () => {
      if (!swipeStartAllowedRef.current) return;
      if (isMobile && currentTabIdx !== -1 && currentPage !== 'project-detail') {
        goToTab(currentTabIdx + 1);
      }
    },
    onSwipedRight: () => {
      if (!swipeStartAllowedRef.current) return;
      if (isMobile && currentTabIdx !== -1 && currentPage !== 'project-detail') {
        goToTab(currentTabIdx - 1);
      }
    },
    trackTouch: true,
    trackMouse: false,
    delta: 60,
    preventScrollOnSwipe: false,
  });

  if (showIntro) {
    return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div
      className="min-h-screen bg-canvas dark:bg-dark-canvas text-text-primary dark:text-dark-text-primary py-3 sm:py-8 px-2 sm:px-4 md:px-6 flex justify-center items-start transition-colors duration-200"
      {...swipeHandlers}
    >
      <SmoothScrollToTop pathname={location.pathname} />

      {/* The Signature Elevated Rounded Card Container from porto-export reference */}
      <div className="w-full max-w-[1150px] bg-background dark:bg-dark-background border border-border dark:border-dark-border rounded-[28px] sm:rounded-[48px] p-6 sm:p-10 md:p-16 shadow-[0px_1px_3px_#0000001a,0px_1px_1px_#0000001a] flex flex-col gap-12 sm:gap-20 overflow-hidden relative">
        <Header
          currentPage={currentPage}
          setCurrentPage={handleSetPage}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main 
          key={location.pathname}
          className={`w-full flex-grow page-transition ${isTransitioning ? 'page-fade-exit-active' : 'page-fade-enter-active'}`}
        >
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col gap-16 md:gap-24">
                <Hero
                  name={PERSONAL_INFO.name}
                  title={PERSONAL_INFO.title}
                  headline={PERSONAL_INFO.headline}
                  university={PERSONAL_INFO.university}
                  major={PERSONAL_INFO.major}
                  primaryFocus={PERSONAL_INFO.primaryFocus}
                  bio={PERSONAL_INFO.bio}
                  imageUrl={PERSONAL_INFO.imageUrl}
                  email={PERSONAL_INFO.email}
                  circularText={PERSONAL_INFO.circularText}
                  circularTextLetterSpacing={PERSONAL_INFO.circularTextLetterSpacing}
                  animatedNameEnglish={PERSONAL_INFO.animatedNameEnglish}
                  animatedNameJapanese={PERSONAL_INFO.animatedNameJapanese}
                  instagramUrl={SOCIAL_LINKS.find((link) => link.name === 'Instagram')?.url ?? 'https://instagram.com'}
                  setCurrentPage={handleSetPage}
                />
                <ProjectsSection 
                  projects={PROJECTS} 
                  onViewAllClick={() => handleSetPage('projects')} 
                  setCurrentPage={handleSetPage}
                  title="Featured Projects"
                />
                <SpeakingEventsSection />
                <LatestVideosSection />
                <GitHubContributionsGraph username={PERSONAL_INFO.githubUsername} theme={theme} />
              </div>
            } />
            
            <Route path="/about" element={
              <AboutPage 
                personalInfo={PERSONAL_INFO} 
                sideProjects={SIDE_PROJECTS} 
                email={PERSONAL_INFO.email} 
                setCurrentPage={handleSetPage} 
                theme={theme} 
                skills={SKILLS} 
              />
            } />
            
            <Route path="/projects" element={
              <ProjectsPage 
                projects={PROJECTS} 
                sideProjects={SIDE_PROJECTS} 
                email={PERSONAL_INFO.email} 
                setCurrentPage={handleSetPage} 
              />
            } />

            <Route path="/focus" element={
              <TechnicalFocusPage 
                setCurrentPage={handleSetPage}
                email={PERSONAL_INFO.email}
              />
            } />
            
            <Route path="/contact" element={
              <HireMePage 
                personalInfo={PERSONAL_INFO} 
                socialLinks={SOCIAL_LINKS} 
                setCurrentPage={handleSetPage} 
              />
            } />

            {/* Backwards compatibility redirects */}
            <Route path="/hire" element={<Navigate to="/contact" replace />} />
            <Route path="/products" element={<Navigate to="/projects" replace />} />
            <Route path="/product/:sideProjectId" element={<Navigate to="/projects" replace />} />
            
            <Route path="/project/:projectId" element={
              <ProjectDetailsPage 
                setCurrentPage={handleSetPage}
                email={PERSONAL_INFO.email}
              />
            } />
            
            <Route path="*" element={
              <div className="text-center py-16 space-y-4">
                <h1 className="text-3xl font-bold">Page Not Found</h1>
                <p className="text-text-secondary dark:text-dark-text-secondary">The page you are looking for does not exist.</p>
                <button
                  onClick={() => handleSetPage('home')}
                  className="px-5 py-2.5 bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  Go Home
                </button>
              </div>
            } />
          </Routes>
        </main>

        <Footer
          socialLinks={SOCIAL_LINKS}
          developerName={DEVELOPER_CREDIT.name}
          developerUrl={DEVELOPER_CREDIT.url}
          animatedNameEnglish={DEVELOPER_CREDIT.animatedNameEnglish}
          animatedNameJapanese={DEVELOPER_CREDIT.animatedNameJapanese}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <Router>
        <AppContent />
      </Router>
    </SmoothScrollProvider>
  );
};

export default App;