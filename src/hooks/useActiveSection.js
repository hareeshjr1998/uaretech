import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../redux/slices/navSlice';

const useActiveSection = (sectionIds) => {
  const dispatch = useDispatch();
  const sectionIdsKey = sectionIds.join(',');

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection(entry.target.id));
        }
      });
    };

    const observerOptions = {
      root: null,
      // Focus on the middle of the viewport (top 30% to bottom 40%)
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const ids = sectionIdsKey.split(',');

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
      observer.disconnect();
    };
  }, [dispatch, sectionIdsKey]);
};

export default useActiveSection;
