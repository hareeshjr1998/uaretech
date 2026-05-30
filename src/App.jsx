import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ScrollProgress from './components/common/ScrollProgress';
import CursorGlow from './components/common/CursorGlow';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';

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

      {/* Premium follow-me pointer spotlight glow */}
      <CursorGlow />

      {/* Screen Loader Intro */}
      <LoadingScreen />

      {/* Scroll-to-Top trigger */}
      <ScrollToTop />

      {/* Page Routing wrapped in AnimatePresence for transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
