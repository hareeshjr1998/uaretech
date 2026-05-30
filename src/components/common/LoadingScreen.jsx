import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { finishLoading } from '../../redux/slices/loadingSlice';

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment loading progress simulatedly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            dispatch(finishLoading());
          }, 400); // Small delay for absolute smoothness
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1.000] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden"
        >
          {/* Background Decorative Blob */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-start to-brand-end opacity-20 blur-[100px]" />

          {/* UareTech Brand Logo Mark & Name */}
          <div className="relative flex flex-col items-center z-10">
            {/* Crisp Digital SVG Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-glass border border-white/80 p-3 mb-6 bg-gradient-to-tr from-white to-brand-accent/10"
            >
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path 
                  d="M25 75C25 50 35 30 50 30C65 30 75 50 75 75" 
                  stroke="url(#loadingLogoGrad)" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                />
                <circle 
                  cx="50" 
                  cy="42" 
                  r="10" 
                  fill="url(#loadingLogoGradDot)"
                />
                <defs>
                  <linearGradient id="loadingLogoGrad" x1="25" y1="30" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-gradient-start)" />
                    <stop offset="100%" stopColor="var(--color-gradient-end)" />
                  </linearGradient>
                  <linearGradient id="loadingLogoGradDot" x1="40" y1="32" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFC857" />
                    <stop offset="100%" stopColor="#FF6A88" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-outfit font-extrabold text-slate-900 tracking-tight"
            >
              Uare<span className="text-gradient">Tech</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm font-medium tracking-widest uppercase text-slate-400 mt-2 font-inter"
            >
              Innovating Futures
            </motion.p>

            {/* Simulated progress counter */}
            <div className="mt-12 w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-400 font-inter uppercase">Loading core modules</span>
                <span className="text-xs font-bold text-brand-primary font-inter">{progress}%</span>
              </div>
              
              {/* Outer Slider */}
              <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Active slider bar */}
                <motion.div 
                  className="h-full bg-gradient-to-r from-brand-start to-brand-end"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
