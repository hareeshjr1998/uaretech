import { motion } from 'framer-motion';
import { Shield, Target, Eye, Cpu, Code2, Globe, Database, Brain, Cloud } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingBlobs from '../components/common/FloatingBlobs';
import PageTransition from '../components/common/PageTransition';
import Team from '../components/sections/Team';
import { statsData } from '../data/siteData';

const AboutPage = () => {
  const milestones = [
    { year: '2018', title: 'Agency Foundation', desc: 'UareTech was established with the vision of assisting startups to scale operational infrastructures using modular React web systems.' },
    { year: '2020', title: 'Cloud Automation Launch', desc: 'Launched enterprise DevOps consulting services, facilitating automated Docker/Kubernetes container builds with 99.9% uptime.' },
    { year: '2022', title: 'AI Integration Division', desc: 'Formed a specialized machine learning engineering team to integrate custom LLM fine-tuning pipelines and neural networks.' },
    { year: '2024', title: 'Global Transformation Partner', desc: 'Supporting over 120 international clients across FinTech, E-Commerce, and SaaS sectors as their main engineering partner.' },
  ];

  const coreValues = [
    { icon: Target, title: 'Extreme Accuracy', desc: 'We deliver clean, optimized, production-ready code aligned with modern standards.' },
    { icon: Shield, title: 'Ironclad Security', desc: 'Data safety is our baseline. Every build receives complete encryption and security audits.' },
    { icon: Cpu, title: 'Modern Stack Focus', desc: 'We skip legacy systems, building exclusively on fast frameworks like Next.js, Redux, and Node.' },
  ];

  const techStack = [
    { name: 'React / Next.js', icon: Globe, color: 'from-brand-secondary to-brand-accent', category: 'Frontend' },
    { name: 'Redux Toolkit', icon: Cpu, color: 'from-brand-accent to-brand-primary', category: 'State Management' },
    { name: 'Tailwind CSS', icon: Code2, color: 'from-brand-secondary to-brand-primary', category: 'Styling' },
    { name: 'Node.js / Express', icon: Code2, color: 'from-brand-primary to-brand-accent', category: 'Backend' },
    { name: 'Python (AI/ML)', icon: Brain, color: 'from-brand-accent to-brand-secondary', category: 'AI Pipelines' },
    { name: 'Docker / K8s', icon: Cloud, color: 'from-brand-secondary to-brand-accent', category: 'DevOps' },
    { name: 'AWS & Cloud', icon: Cloud, color: 'from-brand-primary to-brand-accent', category: 'Infrastructure' },
    { name: 'PostgreSQL', icon: Database, color: 'from-brand-secondary to-brand-primary', category: 'Database' },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-white text-text-secondary">
        {/* Decorative elements */}
        <FloatingBlobs />
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Header Section */}
        <section className="relative pt-36 pb-20 z-10 bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-6 shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>WHO WE ARE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary mb-6 leading-tight max-w-4xl mx-auto"
            >
              We Build Modern <br />
              <span className="text-gradient">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
            >
              “We make businesses become tech-enabled.” UareTech is a premium global software agency specializing in high-performance web engineering, custom mobile apps, DevOps scale, and bespoke AI algorithms.
            </motion.p>
          </div>
        </section>

        {/* Company Narrative & Timeline */}
        <section className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Story narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-6">
                Our Technology <span className="text-gradient">Philosophy</span>
              </h2>
              <p className="text-sm sm:text-base text-text-tertiary mb-6 leading-relaxed">
                At UareTech, we believe that software should not just solve immediate problems—it should act as a durable engine for business acceleration. We focus heavily on modern microservice patterns, containerized deployments, robust Redux state management, and ergonomic responsive layout flows.
              </p>
              <p className="text-sm sm:text-base text-text-tertiary mb-8 leading-relaxed">
                Every line of code we write is optimized for performance, scalability, and security, ensuring your digital architecture is built to withstand massive traffic surges and complex market conditions.
              </p>

              {/* Core Values grid */}
              <div className="flex flex-col gap-5">
                {coreValues.map((val, i) => {
                  const Icon = val.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-200/50 shadow-glass">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-outfit font-bold text-sm text-text-primary text-left">{val.title}</h4>
                        <p className="font-inter text-xs text-text-tertiary text-left mt-1">{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Milestones timeline */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="text-2xl font-outfit font-extrabold text-text-primary mb-10 text-left">Our Evolution Journey</h3>
              
              <div className="relative border-l border-slate-200/50 ml-4 flex flex-col gap-10">
                {milestones.map((stone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-8 text-left group"
                  >
                    {/* Orb marker */}
                    <div className="absolute -left-[9.5px] top-1.5 w-[18px] h-[18px] rounded-full bg-white border-[3px] border-brand-primary group-hover:scale-125 transition-transform duration-300 shadow-glass-hover" />
                    
                    <span className="font-outfit font-extrabold text-sm text-brand-secondary">{stone.year}</span>
                    <h4 className="font-outfit font-bold text-base text-text-primary mt-1">{stone.title}</h4>
                    <p className="font-inter text-xs sm:text-sm text-text-tertiary mt-2 leading-relaxed">
                      {stone.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Mission & Vision cards */}
        <section className="relative py-20 z-10 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card border-glow-card p-8 sm:p-10 text-left flex flex-col justify-between bg-white border-slate-200/60"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-2xl text-text-primary mb-4">Our Mission</h3>
                <p className="font-inter text-sm sm:text-base text-text-tertiary leading-relaxed">
                  To empower global businesses by providing robust, enterprise-grade digital platforms, automating repetitive operations via custom AI models, and optimizing cloud infrastructures to fuel long-term organic growth.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card border-glow-card p-8 sm:p-10 text-left flex flex-col justify-between bg-white border-slate-200/60"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-2xl text-text-primary mb-4">Our Vision</h3>
                <p className="font-inter text-sm sm:text-base text-text-tertiary leading-relaxed">
                  To become the world's most trusted partner for end-to-end digital transformation, setting new visual and architectural standards for SaaS systems, custom AI integrations, and award-winning user interfaces.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Dynamic Statistics Panel */}
        <section className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="glass-card p-8 sm:p-12 bg-white border border-slate-200/60">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {statsData.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center justify-center text-center">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="font-outfit font-extrabold text-3xl sm:text-5xl text-gradient mb-2"
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                    <span className="font-inter text-xs sm:text-sm font-semibold text-text-tertiary uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="relative py-20 z-10 bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4">
                Our Cutting-Edge <span className="text-gradient">Tech Stack</span>
              </h2>
              <p className="text-sm sm:text-base text-text-tertiary">
                We design premium architectures utilizing exclusively high-performance frameworks and developer ecosystems.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:border-brand-primary/30 transition-all duration-300 bg-white border border-slate-200/60"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tech.color} flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-outfit font-bold text-sm sm:text-base text-text-primary">{tech.name}</span>
                    <span className="font-inter text-[10px] text-text-tertiary uppercase tracking-wider mt-1">{tech.category}</span>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Interactive Team Members */}
        <Team />

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
