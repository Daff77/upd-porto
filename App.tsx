import React, { useRef, useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useLenis } from 'lenis/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailsPage } from './components/ProjectDetailsPage';
import { HireMePage } from './components/HireMePage';
import { NavigationContext } from './components/navigation';
import { ButtonLink } from './components/ui/Button';
import { SmoothScrollProvider, SmoothScrollToTop } from './components/SmoothScrollProvider';
import { usePageMeta } from './hooks/usePageMeta';

const NotFoundPage: React.FC = () => {
  usePageMeta('Page not found · Daffa Danendra Fairuzza');

  return (
    <div className="text-center py-16 space-y-4">
      <h1 className="font-display text-3xl font-medium text-text-primary dark:text-dark-text-primary">
        Page not found
      </h1>
      <p className="text-text-secondary dark:text-dark-text-secondary">
        The page you are looking for does not exist.
      </p>
      <div className="pt-2">
        <ButtonLink to="/" variant="primary">
          Back to home
        </ButtonLink>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  // Theme state initialization
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectTransition = useRef(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const doc = document as unknown as {
        startViewTransition?: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const applyThemeDom = (targetTheme: 'light' | 'dark') => {
        if (targetTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        try {
          localStorage.setItem('theme', targetTheme);
        } catch {
          // ignore storage restrictions
        }
        setTheme(targetTheme);
      };

      if (!doc.startViewTransition || prefersReducedMotion) {
        applyThemeDom(nextTheme);
        return;
      }

      const btn = event?.currentTarget as HTMLElement | undefined;
      const rect = btn?.getBoundingClientRect();
      const x = rect
        ? rect.left + rect.width / 2
        : (event?.clientX ?? window.innerWidth / 2);
      const y = rect
        ? rect.top + rect.height / 2
        : (event?.clientY ?? 24);
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.setAttribute('data-theme-transition', nextTheme);

      const transition = doc.startViewTransition(() => {
        applyThemeDom(nextTheme);
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 520,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        })
        .catch(() => {
          // ignore aborted view transition
        });

      void transition.finished.finally(() => {
        document.documentElement.removeAttribute('data-theme-transition');
      });
    },
    [theme]
  );

  const go = useCallback(
    (path: string) => {
      if (path === location.pathname) return;
      const fromList = location.pathname === '/' || location.pathname === '/projects';
      const projectId = path.match(/^\/project\/([\w-]+)$/)?.[1];
      const opening = fromList && projectId && document.getElementById(`project-card-${projectId}`);
      const origin = location.state?.projectOrigin;
      const returning = location.pathname.startsWith('/project/') && origin?.path === path;

      if (opening || returning) {
        if (projectTransition.current) return;
        const options = opening
          ? { state: { projectOrigin: { path: location.pathname, scrollY: window.scrollY } } }
          : { replace: true, state: { restoreScrollY: origin.scrollY } };

        if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          navigate(path, options);
          return;
        }

        projectTransition.current = true;
        const root = document.documentElement;
        const mediaProperty = `--project-media-${projectId ?? location.pathname.split('/').pop()}`;
        root.style.setProperty(mediaProperty, 'project-media');
        root.setAttribute('data-project-transition', '');
        const transition = document.startViewTransition(() => {
          flushSync(() => navigate(path, options));
        });
        void transition.finished.finally(() => {
          root.removeAttribute('data-project-transition');
          root.style.removeProperty(mediaProperty);
          projectTransition.current = false;
        }).catch(() => {});
        return;
      }
      setIsTransitioning(true);
      setTimeout(() => {
        navigate(path);
        setIsTransitioning(false);
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 150);
    },
    [location.pathname, location.state, navigate, lenis]
  );

  // Swipe navigation tabs
  const menuTabs = ['/', '/about', '/projects', '/contact'];
  const currentTabIdx = menuTabs.indexOf(location.pathname);
  const swipeStartAllowedRef = useRef(true);

  const goToTab = (idx: number) => {
    if (idx >= 0 && idx < menuTabs.length) {
      go(menuTabs[idx]);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipeStart: (e) => {
      const [x] = e.initial;
      const w = window.innerWidth || 1;
      const startRatio = x / w;
      const withinMiddle = startRatio >= 0.22 && startRatio <= 0.78;

      const target = e.event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest('input, textarea, select, label, button, a, [role="button"]'));

      swipeStartAllowedRef.current = withinMiddle && !isInteractive;
    },
    onSwipedLeft: () => {
      if (!swipeStartAllowedRef.current) return;
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      if (isMobile && currentTabIdx !== -1 && !location.pathname.startsWith('/project/')) {
        goToTab(currentTabIdx + 1);
      }
    },
    onSwipedRight: () => {
      if (!swipeStartAllowedRef.current) return;
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      if (isMobile && currentTabIdx !== -1 && !location.pathname.startsWith('/project/')) {
        goToTab(currentTabIdx - 1);
      }
    },
    trackTouch: true,
    trackMouse: false,
    delta: 60,
    preventScrollOnSwipe: false,
  });

  return (
    <NavigationContext.Provider value={go}>
      <div
        className="min-h-screen flex flex-col bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary transition-colors duration-200"
        {...swipeHandlers}
      >
        <SmoothScrollToTop pathname={location.pathname} scrollY={location.state?.restoreScrollY} />

        <div className="w-full max-w-4xl xl:max-w-[1164px] flex flex-1 flex-col mx-auto px-5 sm:px-8 pt-4 sm:pt-6">
          <Header
            currentPath={location.pathname}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <main
            key={location.pathname}
            className={`w-full py-10 sm:py-14 space-y-16 md:space-y-24 flex-grow page-transition ${
              isTransitioning ? 'page-fade-exit-active' : 'page-fade-enter-active'
            }`}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
              <Route path="/contact" element={<HireMePage />} />

              {/* Redirects */}
              <Route path="/hire" element={<Navigate to="/contact" replace />} />
              <Route path="/products" element={<Navigate to="/projects" replace />} />
              <Route path="/product/:sideProjectId" element={<Navigate to="/projects" replace />} />
              <Route path="/focus" element={<Navigate to="/about" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <div className="w-full pb-12">
            <Footer />
          </div>
        </div>
      </div>
    </NavigationContext.Provider>
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
