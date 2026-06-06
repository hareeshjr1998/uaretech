import { useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.scrollTo) {
      if (location.pathname === '/') {
        const element = document.getElementById(item.scrollTo);
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
        navigate('/', { state: { scrollTo: item.scrollTo } });
      }
    } else {
      if (item.path === location.pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.path);
      }
    }
  };

  const companyLinks = [
    { name: 'Home', scrollTo: 'home', path: '/' },
    { name: 'Services', scrollTo: 'services', path: '/#services' },
    { name: 'About', scrollTo: 'about', path: '/#about' },
    { name: 'FAQ', scrollTo: 'faq', path: '/#faq' },
    { name: 'Contact', scrollTo: 'contact', path: '/#contact' },
  ];

  return (
    <footer className="relative bg-[#0F172A] border-t border-slate-800/50 overflow-hidden pt-20 pb-10 z-10 backdrop-blur-xl text-white">
      
      {/* Premium Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-start via-brand-accent to-brand-end opacity-80" />



      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Information */}
        <div className="flex flex-col gap-5 text-left">
          <div 
            onClick={() => handleNavClick({ scrollTo: 'home', path: '/' })} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <img src="/UTC.png" alt="UareTech Logo" className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105" />
            <span className="font-outfit font-extrabold text-xl tracking-tight text-white">
              Uare<span className="text-gradient">Tech</span>
            </span>
          </div>
          <p className="font-inter text-sm font-medium leading-relaxed text-slate-400">
            Innovating Technology. Accelerating Growth. Building Future-Ready Businesses.
          </p>
          
          {/* Social Channels */}
          <div className="flex items-center gap-3 mt-2">
            {[
              { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-primary/40 shadow-glass transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-outfit text-base font-bold !text-white">Company Links</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm font-medium text-slate-400">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(link)}
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
          <h4 className="font-outfit text-base font-bold !text-white">Core Services</h4>
          <ul className="flex flex-col gap-3 font-inter text-sm font-medium text-slate-400">
            {[
              'Web Development',
              'Mobile App Development',
              'UI/UX Prototyping',
              'Custom AI Pipelines',
              'Cloud Infrastructures',
            ].map((service, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick({ scrollTo: 'services' })}
                  className="hover:text-brand-primary flex items-center gap-1 group transition-colors duration-200 cursor-pointer text-left"
                >
                  <span>{service}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio Location */}
        <div className="flex flex-col gap-5 text-left">
          <h4 className="font-outfit text-base font-bold !text-white">Our Studio</h4>
          <p className="font-inter text-sm font-medium leading-relaxed text-slate-400">
            Madurai, Tamil Nadu, India
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-inter text-xs font-semibold text-slate-500">
          © {new Date().getFullYear()} UareTech. All rights reserved.
        </span>
        <div className="flex gap-6 font-inter text-xs font-semibold text-slate-500">
          <a href="#privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-brand-primary transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
