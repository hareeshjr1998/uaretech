import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingBlobs from '../components/common/FloatingBlobs';
import Hero from '../components/sections/Hero';
import TechMarquee from '../components/sections/TechMarquee';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Skills from '../components/sections/Skills';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import useActiveSection from '../hooks/useActiveSection';

const Home = () => {
  // Sync scroll positioning with Redux navbar highlighting
  useActiveSection(['home', 'about', 'services', 'portfolio', 'contact']);

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Dynamic Background Blurs */}
      <FloatingBlobs />
      
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow w-full relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <WhyChooseUs />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Directory */}
      <Footer />
    </div>
  );
};

export default Home;
