import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const phrases = [
  'Web Engineering',
  'App Development',
  'AI Chatbots',
  'WhatsApp Automation',
  'SaaS Products',
  'Meta Ads Campaigns',
  'Google Ads Solutions',
  'Workflow Automation',
  'CRM Systems',
  'E-Commerce Stores',
  'Mobile Apps',
  'Business Dashboards',
  'Cloud Solutions',
  'Cybersecurity Systems',
];

const TypingText = memo(() => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && typedText === currentPhrase) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 30);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <span className="text-gradient font-extrabold font-outfit border-r-[2.5px] border-brand-primary pr-1.5 animate-pulse">
      {typedText}
    </span>
  );
});

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden z-10 bg-grid"
      style={{
        backgroundColor: '#FFFFFF'
      }}
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center -translate-y-2 md:-translate-y-8">

        {/* Left Side: Brand Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-6 shadow-glass"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span>Digital Agency Transformation</span>
          </motion.div>

          {/* Heading with Elegant Fade-Up */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary leading-[1.1] mb-6"
          >
            Transforming Businesses <br className="hidden sm:inline" />
            Through <span className="text-gradient">Technology</span>
          </motion.h1>

          {/* Typing Text Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-inter font-semibold text-text-secondary mb-4 h-10 sm:h-12 flex items-center"
          >
            We build &nbsp;<TypingText />
          </motion.div>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg font-medium leading-relaxed text-text-tertiary max-w-xl mb-10"
          >
            “We make businesses become tech-enabled.” We engineer high-performance custom software, responsive client platforms, cloud microservices, and fine-tuned AI tools to scale your operations instantly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <Button variant="primary" onClick={() => navigate('/contact')}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              onClick={() => window.open("https://wa.me/918940105075?text=Hello%20UareTech%20Team%2C%0A%0AThank%20you%20for%20your%20time.%20I%20would%20like%20to%20discuss%20my%20project%20requirements%20and%20explore%20how%20your%20team%20can%20help%20with%20my%20business%20goals.%0A%0ALooking%20forward%20to%20hearing%20from%20you.", "_blank")}
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Fluid Interactive Graphic Canvas */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-square flex items-center justify-center"
          >
            {/* Background Dashed Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-white/5 pointer-events-none"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-brand-primary/10 pointer-events-none"
            />

            {/* Glowing Core Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[70%] h-[70%] glass-card p-6 flex items-center justify-center bg-gradient-to-tr from-white/90 to-brand-accent/5 overflow-hidden group border-slate-200/60"
            >
              {/* Inner animated vector */}
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-primary group-hover:scale-105 transition-transform duration-500">
                <path d="M15 50C15 30 30 15 50 15C70 15 85 30 85 50" stroke="url(#heroLogoGrad)" strokeWidth="8" strokeLinecap="round" />
                <path d="M30 65C30 55 40 45 50 45C60 45 70 55 70 65" stroke="url(#heroLogoGrad2)" strokeWidth="6" strokeLinecap="round" />
                <circle cx="50" cy="30" r="8" fill="#FFC857" />
                <circle cx="50" cy="58" r="6" fill="#FF6A88" />
                <circle cx="30" cy="65" r="4" fill="#06B6D4" />
                <circle cx="70" cy="65" r="4" fill="#7C3AED" />
                <defs>
                  <linearGradient id="heroLogoGrad" x1="15" y1="15" x2="85" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-gradient-start)" />
                    <stop offset="100%" stopColor="var(--color-gradient-end)" />
                  </linearGradient>
                  <linearGradient id="heroLogoGrad2" x1="30" y1="45" x2="70" y2="65" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>


            </motion.div>

            {/* Orbiting Tech Cards */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 sm:-top-4 sm:-right-4 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white shadow-glass border border-slate-200/60 text-[10px] sm:text-xs font-bold font-outfit text-text-primary flex items-center gap-1.5"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
              <span>AI Models Engaged</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-0 left-0 sm:-bottom-4 sm:-left-4 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white shadow-glass border border-slate-200/60 text-[10px] sm:text-xs font-bold font-outfit text-text-primary flex items-center gap-1.5"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-primary animate-pulse" />
              <span>Full Scale Architecture</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
