import { motion } from 'framer-motion';
import { Target, Eye, Award, Rocket } from 'lucide-react';

const AboutUs = ({ isPage = false }) => {
  return (
    <section
      id="about"
      className={`relative ${isPage ? 'pt-36' : 'pt-24'} pb-24 z-10 overflow-hidden bg-white`}
    >


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Visual Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-8 w-fit shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>ABOUT UARETECH</span>
            </motion.div>

            {/* Large bold premium heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black text-text-primary tracking-tight leading-[1.1] mb-8"
            >
              Three Minds.<br />
              <span className="text-gradient">One Vision.</span><br />
              Zero Boundaries.
            </motion.h1>

            {/* Narrative description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base sm:text-lg text-text-tertiary font-medium mb-12 leading-relaxed max-w-xl"
            >
              UareTech was founded with a single goal: to bridge the gap between technical complexity and business success. We're not just a studio; we're your specialized digital partners based in the heart of Madurai.
            </motion.p>

            {/* Mission & Vision grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl border-t border-slate-100 pt-8"
            >
              {/* Mission */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-glass">
                    <Target className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-outfit font-extrabold text-base sm:text-lg text-text-primary">Our Mission</h3>
                </div>
                <p className="font-inter text-sm text-text-tertiary leading-relaxed font-semibold">
                  To deliver high-end digital products that solve real problems.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shadow-glass">
                    <Eye className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-outfit font-extrabold text-base sm:text-lg text-text-primary">Our Vision</h3>
                </div>
                <p className="font-inter text-sm text-text-tertiary leading-relaxed font-semibold">
                  To become Madurai's leading engineering studio for global scale.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side Process Timeline Card Column */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full max-w-xl"
            >
              <div className="bg-white border border-slate-200/60 shadow-glass rounded-[2.5rem] p-8 sm:p-12 pb-12 md:pb-28 relative overflow-hidden text-left h-full">
                {/* Dotted grid pattern overlay inside card for premium SaaS style */}
                <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
                
                {/* Steps Timeline Container */}
                <div className="relative flex flex-col gap-12 z-10 pl-16 sm:pl-20">
                  
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent/30" />

                  {/* Step 1: Discovery Call */}
                  <div className="relative group md:pr-44">
                    <div className="absolute -left-[73px] sm:-left-[77px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative z-20 group-hover:scale-105 transition-all duration-300">
                        {/* Outer soft glow ring */}
                        <div className="absolute inset-[-4px] rounded-full border border-brand-primary/10 bg-brand-primary/5 group-hover:inset-[-6px] transition-all duration-300" />
                        <Target className="w-5 h-5 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-text-primary tracking-tight">
                        Discovery Call
                      </h4>
                      <p className="font-inter font-bold text-[10px] text-text-tertiary uppercase tracking-widest mt-1">
                        Strategy & business understanding
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Design & Plan */}
                  <div className="relative group md:pr-44">
                    <div className="absolute -left-[73px] sm:-left-[77px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative z-20 group-hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-[-4px] rounded-full border border-brand-secondary/10 bg-brand-secondary/5 group-hover:inset-[-6px] transition-all duration-300" />
                        <Eye className="w-5 h-5 text-brand-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-text-primary tracking-tight">
                        Design & Plan
                      </h4>
                      <p className="font-inter font-bold text-[10px] text-text-tertiary uppercase tracking-widest mt-1">
                        Wireframes in 48 hours
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Build & Test */}
                  <div className="relative group md:pr-44">
                    <div className="absolute -left-[73px] sm:-left-[77px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative z-20 group-hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-[-4px] rounded-full border border-brand-accent/10 bg-brand-accent/5 group-hover:inset-[-6px] transition-all duration-300" />
                        <Award className="w-5 h-5 text-brand-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-text-primary tracking-tight">
                        Build & Test
                      </h4>
                      <p className="font-inter font-bold text-[10px] text-text-tertiary uppercase tracking-widest mt-1">
                        Clean code & bug-free ops
                      </p>
                    </div>
                  </div>

                  {/* Step 4: Launch & Support */}
                  <div className="relative group md:pr-44">
                    <div className="absolute -left-[73px] sm:-left-[77px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative z-20 group-hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-[-4px] rounded-full border border-brand-primary/10 bg-brand-primary/5 group-hover:inset-[-6px] transition-all duration-300" />
                        <Rocket className="w-5 h-5 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-text-primary tracking-tight">
                        Launch & Support
                      </h4>
                      <p className="font-inter font-bold text-[10px] text-text-tertiary uppercase tracking-widest mt-1">
                        Scale-ready deployment
                      </p>
                    </div>
                  </div>

                </div>

                {/* Overlapping Bottom-Right Dark Card */}
                <div className="relative mx-auto mt-10 md:absolute md:bottom-6 md:right-6 md:mt-0 bg-slate-950 border border-slate-800 shadow-glass rounded-[2.5rem] p-6 py-7 flex flex-col items-center justify-center w-[160px] sm:w-[170px] h-[130px] sm:h-[140px] z-20 hover:scale-105 transition-all duration-300">
                  <div className="flex items-baseline">
                    <span className="font-outfit font-black text-4xl sm:text-5xl text-white tracking-tight relative pb-1">
                      10
                      <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-brand-start to-brand-end rounded-full" />
                    </span>
                    <span className="font-outfit font-black text-3xl text-brand-secondary ml-1">+</span>
                  </div>
                  <span className="font-inter font-bold text-[10px] text-slate-400 uppercase tracking-widest mt-4 text-center leading-none">
                    Projects Live
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
