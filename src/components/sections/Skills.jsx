import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData } from '../../data/siteData';
import GlassCard from '../common/GlassCard';

// Animated Progress Bar Component
const SkillProgressBar = ({ name, percentage, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="w-full flex flex-col items-start gap-2.5">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Icon className="w-4 h-4" />
            </div>
          )}
          <span className="font-outfit font-bold text-sm text-text-primary">{name}</span>
        </div>
        <span className="font-outfit font-extrabold text-sm text-brand-primary">{percentage}%</span>
      </div>

      {/* Outer Slideway */}
      <div className="w-full h-2.5 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm relative border border-slate-200/50">
        {/* Active slider bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-brand-start via-brand-primary to-brand-end rounded-full shadow-glow"
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${percentage}%` } : { width: '0%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 z-10 overflow-hidden bg-[#EEF4FF]"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-start to-brand-accent opacity-5 blur-[100px] pointer-events-none animate-pulse-subtle" />

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
            Our Technical <span className="text-gradient">Powerhouse</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            We master elite, highly scalable technology stacks. From reactive front-ends to microservices cloud grids and cognitive AI integrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Skill Summary */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h3 className="font-outfit font-bold text-2xl md:text-3xl text-text-primary leading-snug mb-6">
              Empowering scalable stacks for rapid market deployment.
            </h3>
            
            <p className="font-inter text-base font-medium text-text-tertiary leading-relaxed mb-8">
              We do not build simple disposable websites. Our engineering standards dictate robust architectural layers, structured state management via Redux, fluid animations via Framer Motion, and secure hosting infrastructure layouts.
            </p>

            {/* Micro-Features */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { title: 'Modular Architecture', desc: 'Saves 30% dev time' },
                { title: 'Clean ESLint Config', desc: 'No compiler warnings' },
                { title: 'Dynamic Theme States', desc: 'Highly personalized' },
                { title: 'SEO Optimized', desc: 'Search engine verified' },
              ].map((feature, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm text-left">
                  <h4 className="font-outfit font-bold text-sm text-text-primary mb-1">{feature.title}</h4>
                  <span className="font-inter text-xs font-semibold text-text-tertiary">{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Progressive Counters Grid */}
          <div className="lg:col-span-7 w-full">
            <GlassCard hoverEffect={false} className="flex flex-col gap-8 w-full bg-white border border-slate-200/60 p-8">
              {skillsData.map((skill) => (
                <SkillProgressBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
