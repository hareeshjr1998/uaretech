import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Rocket, Award, Shield } from 'lucide-react';
import { statsData } from '../../data/siteData';
import GlassCard from '../common/GlassCard';

// Dynamic Counter Sub-component
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalDuration = 1500;
    let incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-outfit font-extrabold text-4xl sm:text-5xl md:text-6xl text-gradient">
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 z-10 overflow-hidden bg-[#F8FAFC]"
    >
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
            About <span className="text-gradient">UareTech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            We are a high-end digital solutions agency. We bridge the gap between complex engineering architectures and intuitive, consumer-delighting digital systems.
          </motion.p>
        </div>

        {/* Two Column Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Decorative Visual Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-white backdrop-blur-xl border border-slate-200/60 shadow-glass flex flex-col justify-between p-8 bg-gradient-to-tr from-white to-brand-accent/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-primary opacity-20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-outfit font-bold text-sm text-text-primary">Elite Standards</h4>
                  <span className="font-inter text-xs text-text-tertiary font-semibold">99.9% Uptime SLA</span>
                </div>
              </div>

              <div className="my-8 text-left">
                <p className="font-outfit font-extrabold text-2xl text-text-primary leading-tight">
                  “The best way to predict the future is to <span className="text-gradient">program it.</span>”
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="font-inter text-xs font-bold text-text-tertiary uppercase tracking-wider">Enterprise Ready</span>
                <Shield className="w-4 h-4 text-brand-secondary" />
              </div>
            </motion.div>
          </div>

          {/* Right: Vision & Mission Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h3 className="font-outfit font-bold text-2xl text-text-primary text-left mb-2 leading-snug">
              Revolutionizing operations with modern SaaS and artificial intelligence.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission Card */}
              <GlassCard hoverEffect={true} className="text-left flex flex-col gap-4 bg-white border border-slate-200/60 p-6">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-outfit font-bold text-lg text-text-primary">Our Mission</h4>
                <p className="font-inter text-sm font-medium text-text-tertiary leading-relaxed">
                  To democratize premium engineering. We install robust, automated, and secure enterprise software architectures inside startups and middle-market corporations.
                </p>
              </GlassCard>

              {/* Vision Card */}
              <GlassCard hoverEffect={true} className="text-left flex flex-col gap-4 bg-white border border-slate-200/60 p-6">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-outfit font-bold text-lg text-text-primary">Our Vision</h4>
                <p className="font-inter text-sm font-medium text-text-tertiary leading-relaxed">
                  To establish a globally recognized ecosystem where software handles manual inefficiencies, giving founders the focus to innovate and expand.
                </p>
              </GlassCard>

            </div>
          </div>

        </div>

        {/* Animated Statistics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200/50">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="font-inter text-xs sm:text-sm font-bold text-text-tertiary mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
