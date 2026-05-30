import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/siteData';
import GlassCard from '../common/GlassCard';

const Services = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 z-10 overflow-hidden bg-white"
    >
      {/* Ambient background blob */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-accent to-brand-primary opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            Core <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            We deploy highly optimized production code bases, premium user interfaces, and automated AI configurations tailored to drive growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <GlassCard
                  hoverEffect={true}
                  className="h-full flex flex-col items-start text-left relative overflow-hidden group bg-white border border-slate-200/60 p-8"
                >
                  {/* Subtle Inner Glow */}
                  <div className={`absolute top-[-50px] right-[-50px] w-24 h-24 rounded-full bg-gradient-to-tr ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-[1.5px] mb-6 flex items-center justify-center shadow-glass`}>
                    <div className="w-full h-full rounded-[15px] bg-white flex items-center justify-center text-text-primary transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
                      <IconComponent className="w-5 h-5 transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="font-outfit font-bold text-xl text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-inter text-sm font-medium leading-relaxed text-text-tertiary flex-grow mb-6">
                    {service.description}
                  </p>

                  <button 
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-1 text-xs font-bold font-outfit text-brand-primary uppercase tracking-widest cursor-pointer group/btn"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
