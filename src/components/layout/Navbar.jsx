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
  
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'About', id: 'about', path: '/about' },
    { label: 'Services', id: 'services', path: '/services' },
    { label: 'Portfolio', id: 'portfolio', path: '/portfolio' },
    { label: 'Contact', id: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    dispatch(closeMenu());
    if (item.path === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(item.path);
    }
  };

  const isItemActive = (item) => {
    return location.pathname === item.path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/75 backdrop-blur-xl border-b border-slate-200/40 py-4 shadow-glass' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Crisp Interactive Brand SVG Logo */}
        <div 
          onClick={() => handleNavClick({ path: '/' })} 
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-card border border-slate-200/60 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-brand-primary/40 shadow-glass">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M25 75C25 50 35 30 50 30C65 30 75 50 75 75" stroke="url(#navLogoGrad)" strokeWidth="12" strokeLinecap="round" />
              <circle cx="50" cy="42" r="10" fill="url(#navLogoGradDot)" />
              <defs>
                <linearGradient id="navLogoGrad" x1="25" y1="30" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="var(--color-gradient-start)" />
                  <stop offset="100%" stopColor="var(--color-gradient-end)" />
                </linearGradient>
                <linearGradient id="navLogoGradDot" x1="40" y1="32" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-outfit font-extrabold text-2xl tracking-tight text-text-primary group-hover:opacity-90 transition-opacity">
            Uare<span className="text-gradient">Tech</span>
          </span>
        </div>

        {/* Desktop Menu Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" onClick={() => navigate('/contact')}>
            Get Started
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
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
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-glass absolute top-full left-0 right-0 z-40"
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
                dispatch(closeMenu());
                navigate('/contact');
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
