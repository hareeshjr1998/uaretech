import { useEffect, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lightweight CSS loading spinner
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full bg-transparent">
    <div className="w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  const activeTheme = useSelector((state) => state.theme.activeTheme);
  const location = useLocation();

  // Keep the document element's data-theme sync'd with Redux state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className="relative min-h-screen w-full selection:bg-brand-primary/20 bg-bg-deep text-text-secondary transition-colors duration-500 overflow-x-hidden">
      {/* Top Loading Scroll Indicator */}
      <ScrollProgress />

      {/* Scroll-to-Top trigger */}
      <ScrollToTop />

      {/* Page Routing wrapped in AnimatePresence for transitions */}
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
