import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/common/PageTransition';
import AboutUs from '../components/sections/AboutUs';
import TechStack from '../components/sections/TechStack';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-white text-text-secondary">
        
        {/* Navigation */}
        <Navbar />

        {/* Reusable AboutUs split layout */}
        <AboutUs isPage={true} />

        {/* Cutting-edge Tech Stack */}
        <TechStack />

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
