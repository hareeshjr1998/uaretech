import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Code2, Brain, Megaphone, Palette, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateForm } from '../../redux/slices/contactSlice';
import { servicesData } from '../../data/siteData';
import GlassCard from '../common/GlassCard';

const categories = [
  { name: 'All Services', icon: Layers },
  { name: 'Development', icon: Code2 },
  { name: 'AI & Automation', icon: Brain },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Design & Branding', icon: Palette },
  { name: 'Tech Solutions', icon: Cloud },
];

const Services = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('All Services');

  const handleGetStarted = (serviceTitle) => {
    dispatch(updateForm({ service: serviceTitle }));
    if (window.location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate('/', { state: { scrollTo: 'contact' } });
    }
  };

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      if (activeCategory === 'All Services') return true;
      return service.categories.includes(activeCategory);
    });
  }, [activeCategory]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 z-10 overflow-hidden bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            What We <span className="text-gradient">Build For You</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg font-inter font-medium text-text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            From AI chatbots to WhatsApp automation, Meta Ads to custom software — we provide end-to-end tech solutions all under one roof.
          </motion.p>
        </div>

        {/* Category Filters (Mobile horizontal scrollable, Desktop flex-wrap) */}
        <div className="w-full flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-3 px-4 md:px-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-outfit font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${isActive
                      ? 'bg-gradient-to-r from-brand-start to-brand-end text-white shadow-lg shadow-brand-primary/10 scale-105'
                      : 'bg-white text-text-secondary border border-slate-200/60 hover:border-slate-300 hover:text-text-primary'
                    }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-text-tertiary'}`} />}
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid with Motion Stagger & Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard
                    hoverEffect={true}
                    className="h-full flex flex-col items-start text-left relative overflow-hidden group bg-white border border-slate-200/60 p-8 shadow-sm border-glow-card"
                  >
                    {/* Subtle Inner Glow Spot */}
                    <div className={`absolute top-[-50px] right-[-50px] w-24 h-24 rounded-full bg-gradient-to-tr ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                    {/* Service Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-[1.5px] mb-6 flex items-center justify-center shadow-glass`}>
                      <div className="w-full h-full rounded-[15px] bg-white flex items-center justify-center text-text-primary transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
                        <IconComponent className="w-5 h-5 transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="font-outfit font-bold text-lg md:text-xl text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="font-inter text-sm leading-relaxed text-text-tertiary flex-grow mb-6 font-medium">
                      {service.description}
                    </p>

                    <button
                      onClick={() => handleGetStarted(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-outfit text-brand-primary uppercase tracking-widest cursor-pointer group/btn mt-auto"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
