import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Github, Youtube, Send, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200/50 overflow-hidden pt-20 pb-10 z-10 backdrop-blur-xl">
      
      {/* Premium Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-start via-brand-accent to-brand-end opacity-80" />

      {/* Background Decorative Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-gradient-to-tr from-brand-accent to-brand-end opacity-5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Information */}
        <div className="flex flex-col gap-5 text-left">
          <div 
            onClick={() => handleNavClick('/')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200/60 p-1.5 transition-transform duration-300 group-hover:scale-105 shadow-glass">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M25 75C25 50 35 30 50 30C65 30 75 50 75 75" stroke="url(#footerLogoGrad)" strokeWidth="12" strokeLinecap="round" />
                <circle cx="50" cy="42" r="10" fill="url(#footerLogoGradDot)" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="25" y1="30" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-gradient-start)" />
                    <stop offset="100%" stopColor="var(--color-gradient-end)" />
                  </linearGradient>
                  <linearGradient id="footerLogoGradDot" x1="40" y1="32" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-outfit font-extrabold text-xl tracking-tight text-text-primary">
              Uare<span className="text-gradient">Tech</span>
            </span>
          </div>
          <p className="font-inter text-sm font-medium leading-relaxed text-text-tertiary">
            “We make businesses become tech-enabled.” Transforming operations through modern software architectures and fine-tuned AI integration pipelines.
          </p>
          
          {/* Social Channels */}
          <div className="flex items-center gap-3 mt-2">
            {[
              { icon: Twitter, link: 'https://twitter.com' },
              { icon: Linkedin, link: 'https://linkedin.com' },
              { icon: Github, link: 'https://github.com' },
              { icon: Youtube, link: 'https://youtube.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200/60 text-text-tertiary hover:text-brand-primary hover:border-brand-primary/40 shadow-glass transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-outfit text-base font-bold text-text-primary">Company Links</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm font-medium text-text-tertiary">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Core Services', path: '/services' },
              { name: 'Featured Portfolio', path: '/portfolio' },
              { name: 'Get In Touch', path: '/contact' },
            ].map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="hover:text-brand-primary flex items-center gap-1 group transition-colors duration-200 cursor-pointer text-left"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services quick-links */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-outfit text-base font-bold text-text-primary">Core Services</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm font-medium text-text-tertiary">
            {[
              'Web Development',
              'Mobile App Development',
              'UI/UX Prototyping',
              'Custom AI Pipelines',
              'Cloud Infrastructures',
            ].map((service, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick('/services')}
                  className="hover:text-brand-primary flex items-center gap-1 group transition-colors duration-200 cursor-pointer text-left"
                >
                  <span>{service}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-outfit text-base font-bold text-text-primary">Stay Updated</h4>
          <p className="font-inter text-sm font-medium leading-relaxed text-text-tertiary">
            Subscribe to our monthly tech updates and receive case studies on digital transformations.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-4 pr-12 py-3 rounded-full bg-white border border-slate-200 focus:border-brand-primary/40 focus:bg-white outline-none text-sm font-inter font-medium text-slate-900 shadow-glass placeholder:text-text-tertiary"
            />
            <button
              type="submit"
              className="absolute right-1.5 p-2 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <span className="text-xs font-semibold text-brand-primary animate-pulse">
              🎉 Subscription successful! Welcome aboard.
            </span>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-inter text-xs font-semibold text-text-tertiary">
          © {new Date().getFullYear()} UareTech. All rights reserved.
        </span>
        <div className="flex gap-6 font-inter text-xs font-semibold text-text-tertiary">
          <a href="#privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-brand-primary transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
