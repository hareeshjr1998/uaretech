import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, translateY: -4 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 p-4 rounded-full glass-card hover:bg-white/70 shadow-glow text-brand-primary z-40 border border-brand-primary/20 flex items-center justify-center cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
