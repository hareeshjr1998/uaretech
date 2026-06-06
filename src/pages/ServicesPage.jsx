import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code2, Smartphone, Palette, Brain, Cloud, Megaphone, 
  Check, ArrowRight, Cpu
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/common/PageTransition';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'web',
      icon: Code2,
      title: 'Web Development',
      desc: 'Highly interactive, blazing fast, responsive modern web applications crafted with React, Next.js, Redux, and Node.js. Optimized for page speed, SEO, and horizontal scale.',
      features: ['Server-Side Rendering (SSR)', 'Incremental Static Regeneration', 'Redux State Hydration', 'End-to-End REST/GraphQL APIs'],
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Immersive native cross-platform iOS and Android applications built using React Native or Flutter, focusing on performance, smooth transitions, and hardware API integrations.',
      features: ['Haptic Feedback Integration', 'Offline Sync Capabilities', 'Biometric App Authentication', 'App Store / Play Store Deployment'],
      color: 'from-brand-accent to-brand-primary'
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Futuristic visual interfaces, style systems, high fidelity wireframes, and user journey flows mapped in Figma. Rooted in deep ergonomics and beautiful fluid micro-interactions.',
      features: ['Design Systems Creation', 'High-Fidelity Prototyping', 'User Usability Testing', 'Responsive Layout Hand-offs'],
      color: 'from-brand-accent to-brand-secondary'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Integration',
      desc: 'Empowering your operations with custom machine learning pipelines, Large Language Model (LLM) fine-tuning, automated cognitive agents, and intelligent semantic searching.',
      features: ['OpenAI / Anthropic Integrations', 'Retrieval-Augmented Generation (RAG)', 'Data Science Model Training', 'Neural NLP Pipelines'],
      color: 'from-brand-secondary to-brand-primary'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      desc: 'Enterprise-grade AWS / GCP cloud deployments, containerized Docker infrastructures, secure Kubernetes orchestration clusters, and automated zero-downtime CI/CD scripting.',
      features: ['Kubernetes Cluster Control', 'Auto-scaling Server Architecture', 'DevOps CI/CD Pipelines', 'E2EE Cloud Databases'],
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Digital Marketing',
      desc: 'Advanced search engine optimization, programmatic pay-per-click PPC campaigns, content syndication frameworks, and social amplification to grow your organic leads 10x.',
      features: ['Programmatic SEM Campaigns', 'Core Web Vitals SEO Audit', 'Automated Lead Conversion Funnels', 'Data Analytics Dashboards'],
      color: 'from-brand-primary to-brand-accent'
    }
  ];

  const steps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Deep dive into your operational bottlenecks, product specifications, and target timelines.' },
    { num: '02', title: 'Technical Planning', desc: 'Mapping database schemas, API contracts, cloud architecture patterns, and style tokens.' },
    { num: '03', title: 'UI/UX Design Prototype', desc: 'Creating wireframes and high-fidelity interactive Figma mockups with complete system grids.' },
    { num: '04', title: 'System Development', desc: 'Writing clean, typed, modular code backed by robust Redux states and continuous test runs.' },
    { num: '05', title: 'Validation & Testing', desc: 'Enforcing security audits, performance profiling, responsive view checks, and load trials.' },
    { num: '06', title: 'Deployment & Support', desc: 'Launching containerized environments with continuous telemetry monitoring and support.' }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$2,999',
      billing: 'per project launch',
      desc: 'Perfect for early stage startups looking to deploy a high-fidelity MVP or product prototype.',
      features: [
        'Custom Web App (up to 5 pages)',
        'React / Tailwind CSS Framework',
        'Basic SEO & Metadata Setup',
        'Figma UI/UX Mockup Design',
        '1 Month Post-Launch Support',
        'Vite/Vercel Cloud Deployment'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$5,999',
      billing: 'per month subscription',
      desc: 'Designed for scaling scale-ups needing recurring full-stack development and continuous AI scale.',
      features: [
        'Unlimited Web & App Pages',
        'Dedicated React Native / Next.js Stack',
        'Redux State & Database Integration',
        'Custom AI/LLM API Integrations',
        'DevOps Kubernetes & AWS Scale',
        '24/7 Priority Slack Support Channel',
        'Weekly Core Web Vitals Audits'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$11,999',
      billing: 'per month subscription',
      desc: 'High-end support for enterprise software suites requiring advanced security and custom models.',
      features: [
        'All Features in Professional Plan',
        'Bespoke Fine-Tuned LLM Pipelines',
        'E2EE Database Encryption Protocols',
        'Zero-Data-Retention Security Setup',
        'Custom Containerized DevOps Clusters',
        'Dedicated Lead Systems Architect',
        '99.9% Uptime SLA Agreement'
      ],
      recommended: false
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-white text-text-secondary">
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 z-10 bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-6 shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>ENGINEERING SOLUTIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary mb-6 leading-tight max-w-4xl mx-auto"
            >
              Enterprise-Grade <br />
              <span className="text-gradient">IT Agency Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
            >
              We ignore archaic templates. We build fast, beautiful, and secure software applications configured for modern scale.
            </motion.p>
          </div>
        </section>

        {/* Extensive Services Grid */}
        <section className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((ser, i) => {
                const IconComponent = ser.icon;
                return (
                  <motion.div
                    key={ser.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="glass-card border-glow-card p-8 flex flex-col justify-between text-left group transition-[border-color,background-color,box-shadow] duration-300 bg-white border-slate-200/60"
                  >
                    <div>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${ser.color} flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>

                      <h3 className="font-outfit font-extrabold text-xl text-text-primary mb-4">{ser.title}</h3>
                      <p className="font-inter text-xs sm:text-sm text-text-tertiary leading-relaxed mb-6">
                        {ser.desc}
                      </p>
                    </div>

                    {/* Bullet features */}
                    <ul className="flex flex-col gap-2 pt-4 border-t border-white/5">
                      {ser.features.map((feat, index) => (
                        <li key={index} className="flex items-center gap-2 font-inter text-xs text-text-secondary font-medium">
                          <Check className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Stepper Roadmap */}
        <section className="relative py-20 z-10 bg-[#F8FAFC] bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4">
                Our Development <span className="text-gradient">Workflow</span>
              </h2>
              <p className="text-sm sm:text-base text-text-tertiary">
                We enforce strict agile orchestration guidelines, taking projects from initial blueprints to production launch systematically.
              </p>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative p-6 rounded-2xl bg-white border border-slate-200/60 flex flex-col text-left group hover:border-brand-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-outfit font-black text-3xl sm:text-4xl text-brand-primary opacity-25 group-hover:opacity-100 transition-opacity">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-sm border border-brand-primary/10">
                      <Cpu className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                  <h4 className="font-outfit font-bold text-base sm:text-lg text-text-primary mb-2">{step.title}</h4>
                  <p className="font-inter text-xs text-text-tertiary leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Pricing CTA */}
        <section className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4">
                SaaS Startup <span className="text-gradient">Pricing Tiers</span>
              </h2>
              <p className="text-sm sm:text-base text-text-tertiary">
                Choose an implementation budget tailored to your startup's product scope and scaling targets.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`glass-card p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden bg-white ${
                    plan.recommended 
                      ? 'border-brand-primary/50 shadow-glow bg-white -translate-y-2 lg:-translate-y-3 z-20' 
                      : 'border-slate-200/60 z-10'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-start to-brand-end text-white font-outfit text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                      POPULAR
                    </div>
                  )}

                  <div>
                    <h3 className="font-outfit font-black text-xl text-text-primary mb-2">{plan.name}</h3>
                    <p className="font-inter text-xs text-text-tertiary mb-6">{plan.desc}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="font-outfit font-black text-4xl sm:text-5xl text-text-primary">{plan.price}</span>
                      <span className="font-inter text-xs text-text-tertiary">{plan.billing}</span>
                    </div>

                    <div className="h-[1px] bg-white/5 my-6" />

                    {/* Features checklist */}
                    <ul className="flex flex-col gap-3.5 mb-8">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="flex items-center gap-2.5 font-inter text-xs sm:text-sm text-text-secondary">
                          <Check className="w-4 h-4 text-brand-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3.5 rounded-xl font-outfit text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-brand-start to-brand-end text-white hover:brightness-105 shadow-md shadow-brand-primary/20' 
                        : 'border border-slate-200 hover:border-slate-300 bg-slate-100 text-text-primary hover:bg-slate-200'
                    }`}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
