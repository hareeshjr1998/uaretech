import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ExternalLink, Github, X, Eye, Sparkles, Check } from 'lucide-react';
import { setCategory, setSelectedProject, clearSelectedProject } from '../redux/slices/portfolioSlice';
import { projectsData, portfolioCategories } from '../data/siteData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingBlobs from '../components/common/FloatingBlobs';
import PageTransition from '../components/common/PageTransition';

const PortfolioPage = () => {
  const dispatch = useDispatch();
  
  const activeCategory = useSelector((state) => state.portfolio.activeCategory);
  const selectedProject = useSelector((state) => state.portfolio.selectedProject);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  // Extend project features list for the details modal
  const projectDetailsMap = {
    1: {
      features: ['Real-time dashboard charting with Chart.js integration', 'Automated natural language summary pipelines', 'Safe LLM model execution benchmarks', 'Shared collaborative prompt nodes'],
      teamSize: '4 Experts',
      timeline: '8 Weeks'
    },
    2: {
      features: ['Automated carbon footprint tracking calculations', 'High efficiency micro-checkout screens with Stripe', 'Smart warehouse green logistic routing', 'Custom customer product reviews and stats'],
      teamSize: '3 Experts',
      timeline: '6 Weeks'
    },
    3: {
      features: ['Continuous telemetry heart rating curves', 'Cross platform sync via secure GraphQL API', 'Interactive dietary goals dashboards', 'Push notification workflow runs'],
      teamSize: '2 Experts',
      timeline: '4 Weeks'
    },
    4: {
      features: ['30+ reusable responsive UI glass components', 'Dynamic dark/light styling variables configuration', 'Detailed pixel-perfect typography tokens', 'Figma developer workspace layout assets'],
      teamSize: '1 Designer',
      timeline: '3 Weeks'
    },
    5: {
      features: ['Real time aircraft telemetry GPS mappings', 'Weather condition forecasting charts integration', 'Pilot hours monitoring lists', 'Automated horizontal emergency re-routing engines'],
      teamSize: '5 Experts',
      timeline: '10 Weeks'
    },
    6: {
      features: ['Algorithmic stock rebalancing analytics', 'Secure financial token encryption layers', 'Daily automated financial email pipelines', 'Intelligent buy/sell alarm notifications'],
      teamSize: '3 Experts',
      timeline: '7 Weeks'
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#EEF4FF] text-text-secondary">
        {/* Decorative elements */}
        <FloatingBlobs />
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Banner */}
        <section className="relative pt-36 pb-12 z-10 bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-6 shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>CASE STUDIES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary mb-6 leading-tight max-w-4xl mx-auto"
            >
              Our Engineering <br />
              <span className="text-gradient">Portfolio Showroom</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
            >
              Explore our record of high-performance custom applications, AI orchestration dashboards, and ergonomic user experience designs.
            </motion.p>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="relative py-8 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center">
            <div className="inline-flex flex-wrap gap-2.5 p-2 rounded-2xl bg-white border border-slate-200/60 shadow-glass max-w-full justify-center">
              {portfolioCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => dispatch(setCategory(cat))}
                    className={`px-4 py-2 rounded-xl font-outfit text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-brand-start to-brand-end text-white shadow-sm' 
                        : 'text-text-tertiary hover:text-text-primary hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Animated Projects Grid */}
        <section className="relative pb-24 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => (
                  <motion.div
                    layout
                    key={proj.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card border-glow-card overflow-hidden text-left flex flex-col justify-between group hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-300 bg-white border border-slate-200/60 shadow-glass"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-video overflow-hidden border-b border-slate-100">
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-bg-deep/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                          <button
                            onClick={() => dispatch(setSelectedProject(proj))}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-outfit text-xs font-bold tracking-wide cursor-pointer shadow-glow hover:brightness-105"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="font-inter text-[10px] font-black text-brand-secondary uppercase tracking-widest">
                          {proj.category}
                        </span>
                        <h3 className="font-outfit font-extrabold text-lg text-text-primary mt-1 mb-3">
                          {proj.title}
                        </h3>
                        <p className="font-inter text-xs text-text-tertiary leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Badges */}
                    <div className="p-6 pt-0 flex justify-between items-center border-t border-slate-100 mt-4">
                      <span className="font-inter text-[10px] font-bold text-text-tertiary">
                        Tech: {proj.category === 'AI Projects' ? 'LLM, RAG' : 'React, Node'}
                      </span>
                      <div className="flex gap-2.5">
                        <a 
                          href={proj.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-text-tertiary hover:text-brand-primary cursor-pointer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a 
                          href={proj.demoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-text-tertiary hover:text-brand-primary cursor-pointer"
                          aria-label="Live Demo Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dark Overlay Click Catcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => dispatch(clearSelectedProject())}
                className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200/60 p-6 sm:p-8 md:p-10 shadow-glass-hover max-h-[90vh] overflow-y-auto z-10 flex flex-col justify-between"
              >
                {/* Close Button */}
                <button
                  onClick={() => dispatch(clearSelectedProject())}
                  className="absolute top-5 right-5 p-2 rounded-full border border-slate-200/60 hover:border-slate-300 bg-slate-100 hover:bg-slate-200 text-text-primary cursor-pointer transition-all"
                  aria-label="Close details modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Grid Layout inside modal */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Mockup Image */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative group aspect-video">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta pills */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/50 text-left">
                        <span className="font-inter text-[9px] font-black text-text-tertiary uppercase tracking-widest">TEAM SIZE</span>
                        <h4 className="font-outfit font-extrabold text-sm text-text-primary mt-1">
                          {projectDetailsMap[selectedProject.id]?.teamSize || '3 Experts'}
                        </h4>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/50 text-left">
                        <span className="font-inter text-[9px] font-black text-text-tertiary uppercase tracking-widest">TIMELINE</span>
                        <h4 className="font-outfit font-extrabold text-sm text-text-primary mt-1">
                          {projectDetailsMap[selectedProject.id]?.timeline || '6 Weeks'}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Narrative */}
                  <div className="md:col-span-7 flex flex-col text-left">
                    <span className="font-inter text-[10px] font-black text-brand-secondary uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-outfit font-black text-2xl sm:text-3xl text-text-primary mt-1 mb-4">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="font-inter text-sm text-text-tertiary leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="font-outfit font-extrabold text-sm text-text-primary mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-primary" />
                      <span>Key Implementation Features</span>
                    </h4>
                    
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {(projectDetailsMap[selectedProject.id]?.features || [
                        'Clean, optimized components built in modular React JSX structure.',
                        'Fast compilation speeds achieved through dynamic asset sizing.',
                        'Highly accessible headings layout following semantic HTML guidelines.'
                      ]).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-inter text-xs sm:text-sm text-text-secondary leading-relaxed">
                          <Check className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white font-outfit text-xs font-bold tracking-wide cursor-pointer shadow-glow hover:brightness-105 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview Demo</span>
                      </a>
                      
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-100 hover:bg-slate-200 text-text-primary font-outfit text-xs font-bold tracking-wide cursor-pointer transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
