import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import TechMarquee from '../components/sections/TechMarquee';
import Services from '../components/sections/Services';
import CTASection from '../components/sections/CTASection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import AboutUs from '../components/sections/AboutUs';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import useActiveSection from '../hooks/useActiveSection';

const Home = () => {
  const location = useLocation();

  // Sync scroll positioning with Redux navbar highlighting
  useActiveSection(['home', 'services', 'about', 'faq', 'contact']);

  useEffect(() => {
    const scrollToTarget = location.state?.scrollTo || (location.hash ? location.hash.substring(1) : null);
    if (scrollToTarget) {
      const element = document.getElementById(scrollToTarget);
      if (element) {
        if (location.state?.scrollTo) {
          // Clear state to avoid scrolling again on manual refresh
          window.history.replaceState({}, document.title);
        }

        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow w-full relative z-10">
        <Hero />
        <Highlights />
        <TechMarquee />
        <Services />
        <CTASection />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <AboutUs isPage={false} />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Directory */}
      <Footer />
    </div>
  );
};

export default Home;

