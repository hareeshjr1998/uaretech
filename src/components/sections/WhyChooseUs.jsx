import { motion } from 'framer-motion';
import { whyChooseUsData } from '../../data/siteData';
import GlassCard from '../common/GlassCard';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-24 z-10 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Decorative Blob */}
      <div className="absolute bottom-[10%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-accent to-brand-secondary opacity-5 blur-[120px] pointer-events-none animate-pulse-subtle" />

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
            Why Choose <span className="text-gradient">UareTech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            We are dedicated to building systems that matter. We guarantee enterprise software practices, rapid delivery cycles, and lifetime security support.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.id} variants={cardVariants}>
                <GlassCard
                  hoverEffect={true}
                  className="h-full flex flex-col items-start text-left group overflow-hidden bg-white border border-slate-200/60 p-8"
                >
                  {/* Glowing background spot */}
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-brand-primary opacity-0 group-hover:opacity-5 blur-xl transition-all duration-300" />

                  {/* Icon Widget */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-start to-brand-end p-[1.5px] mb-6 flex items-center justify-center shadow-glass transition-transform duration-300 group-hover:rotate-6">
                    <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-outfit font-bold text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="font-inter text-sm font-medium leading-relaxed text-text-tertiary">
                    {item.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
