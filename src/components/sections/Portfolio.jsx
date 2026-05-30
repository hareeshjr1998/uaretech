import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ExternalLink, Github, X, Eye, Sparkles, Check } from 'lucide-react';
import { portfolioCategories, projectsData } from '../../data/siteData';
import { setCategory, setSelectedProject, clearSelectedProject } from '../../redux/slices/portfolioSlice';

const Portfolio = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.portfolio.activeCategory);
  const selectedProject = useSelector((state) => state.portfolio.selectedProject);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const projectDetailsMap = {
    1: {
      features: ['Real-time dashboard charting with Chart.js integration', 'Automated natural language summary pipelines', 'Safe LLM model execution benchmarks', 'Shared prompt nodes'],
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
    <section
      id="portfolio"
      className="relative py-24 z-10 overflow-hidden bg-[#EEF4FF]"
    >
      {/* Decorative Blob */}
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-brand-secondary to-brand-accent opacity-5 blur-[100px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            Our Featured <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            Explore our curated projects, featuring robust SaaS Dashboards, mobile trackers, optimized Figma systems, and neural networks.
          </motion.p>
        </div>

        {/* Filter Navigation Pills (Redux-backed) */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 p-2 rounded-2xl bg-white border border-slate-200/60 shadow-glass max-w-3xl mx-auto mb-16">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory.toLowerCase() === category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => dispatch(setCategory(category))}
                className={`relative px-5 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {/* Active Background Pill Layer */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBgHome"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-start to-brand-end z-0 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid with Layout Shifts */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => dispatch(setSelectedProject(project))}
                className="group relative h-[380px] rounded-3xl overflow-hidden shadow-glass border border-slate-200/60 bg-white cursor-pointer flex flex-col justify-end border-glow-card"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 transition-all duration-300 group-hover:via-slate-900/65" />
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-outfit bg-gradient-to-r ${project.color} text-white shadow-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="relative p-6 z-20 flex flex-col items-start text-left text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-outfit font-extrabold text-xl mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-xs leading-relaxed text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 max-w-sm">
                    {project.description}
                  </p>

                  {/* Actions (Demo / Details) */}
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(setSelectedProject(project));
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-start to-brand-end text-white hover:brightness-105 transition-all duration-300 font-outfit text-xs font-bold shadow-sm cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-xl border border-white/10 text-white hover:bg-white/10 hover:border-white transition-colors duration-300 cursor-pointer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(clearSelectedProject())}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200/60 p-6 sm:p-8 md:p-10 shadow-glass-hover max-h-[90vh] overflow-y-auto z-10 flex flex-col justify-between"
            >
              {/* Close icon */}
              <button
                onClick={() => dispatch(clearSelectedProject())}
                className="absolute top-5 right-5 p-2 rounded-full border border-slate-200/60 hover:border-slate-300 bg-slate-100 hover:bg-slate-200 text-text-primary cursor-pointer transition-all"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Layout Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Visuals */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200/60 aspect-video shadow-sm relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

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

                {/* Right Details */}
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

                  {/* Actions */}
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

    </section>
  );
};

export default Portfolio;
