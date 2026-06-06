import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 z-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card bg-white border border-slate-200/60 shadow-glass rounded-3xl py-10 px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10"
        >
          {/* Left Text Column */}
          <div className="text-center lg:text-left flex-grow max-w-3xl">
            <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-text-primary leading-snug">
              Need a custom solution?{' '}
              <span className="text-gradient">
                We build tailored technology, automation, and marketing systems designed specifically for your business goals.
              </span>
            </h3>
          </div>

          {/* Right Button Column */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Button
              variant="primary"
              onClick={() => window.open("https://wa.me/918940105075?text=Hello%20UareTech%20Team%2C%0A%0AThank%20you%20for%20your%20time.%20I%20would%20like%20to%20discuss%20my%20project%20requirements%20and%20explore%20how%20your%20team%20can%20help%20with%20my%20business%20goals.%0A%0ALooking%20forward%20to%20hearing%20from%20you.", "_blank")}
              className="w-full lg:w-auto shadow-lg shadow-brand-primary/10"
            >
              <span>Talk To Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
