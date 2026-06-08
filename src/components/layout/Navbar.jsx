import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleMenu, closeMenu } from '../../redux/slices/navSlice';
import Button from '../common/Button';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isOpen = useSelector((state) => state.nav.isOpen);
  const activeSection = useSelector((state) => state.nav.activeSection);
  
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'Services', id: 'services', path: '/#services', scrollTo: 'services' },
    { label: 'About', id: 'about', path: '/#about', scrollTo: 'about' },
    { label: 'FAQ', id: 'faq', path: '/#faq', scrollTo: 'faq' },
    { label: 'Contact', id: 'contact', path: '/#contact', scrollTo: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    dispatch(closeMenu());
    if (item.scrollTo) {
      if (location.pathname === '/') {
        const element = document.getElementById(item.scrollTo);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
        navigate('/', { state: { scrollTo: item.scrollTo } });
      }
    } else {
      if (item.path === location.pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.path);
      }
    }
  };

  const isItemActive = (item) => {
    if (location.pathname === '/') {
      if (item.id === 'services') {
        return activeSection === 'services';
      }
      if (item.id === 'faq') {
        return activeSection === 'faq';
      }
      if (item.id === 'about') {
        return activeSection === 'about';
      }
      if (item.id === 'contact') {
        return activeSection === 'contact';
      }
      if (item.id === 'home') {
        return (
          activeSection !== 'services' &&
          activeSection !== 'faq' &&
          activeSection !== 'about' &&
          activeSection !== 'contact'
        );
      }
    }
    return location.pathname === item.path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 py-4 ${
        scrolled 
          ? 'bg-white/75 border-b border-slate-200/40 shadow-glass' 
          : 'bg-white/0 border-b border-transparent shadow-none'
      }`}
      style={{ 
        backfaceVisibility: 'hidden',
        willChange: 'transform, background-color, border-color, box-shadow'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Crisp Interactive Brand SVG Logo */}
        <div 
          onClick={() => handleNavClick({ path: '/' })} 
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <img src="/uaretechlogo.png" alt="UareTech Logo" className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="font-outfit font-extrabold text-2xl tracking-tight text-text-primary group-hover:opacity-90 transition-opacity">
            Uare<span className="text-gradient">Tech</span>
          </span>
        </div>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative font-outfit text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-300 py-1 ${
                  active ? 'text-brand-primary font-bold' : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-brand-start to-brand-end"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Get Started) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="primary" onClick={() => handleNavClick({ scrollTo: 'contact' })}>
            Get Started
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Menu Toggle */}
          <button
            onClick={() => dispatch(toggleMenu())}
            className="p-2 rounded-full border border-slate-200/60 bg-bg-card text-text-primary shadow-glass cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-glass absolute top-full left-0 right-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`text-left font-outfit text-base font-bold py-2 transition-all ${
                      active ? 'text-brand-primary pl-2 border-l-2 border-brand-primary' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="h-[1px] bg-slate-100 my-2" />
              
              <Button variant="primary" className="w-full" onClick={() => {
                handleNavClick({ scrollTo: 'contact' });
              }}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
