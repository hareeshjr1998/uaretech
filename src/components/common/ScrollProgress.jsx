import { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (progressRef.current) {
            const h = document.documentElement;
            const b = document.body;
            const percent = ((h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) * 100;
            progressRef.current.style.width = `${percent}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-brand-start via-brand-primary to-brand-end z-50"
      style={{ width: '0%', willChange: 'width' }}
    />
  );
};

export default ScrollProgress;
