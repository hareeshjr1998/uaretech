import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/siteData';

// Accordion Panel Sub-component
const FAQItem = ({ question, answer, isExpanded, onToggle }) => {
  return (
    <div className="glass-card mb-4 border border-slate-200/60 bg-white overflow-hidden">
      {/* Accordion header button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left outline-none cursor-pointer select-none font-outfit"
      >
        <span className="font-bold text-base sm:text-lg text-text-primary pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Collapsible content drawer */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 pt-2 font-inter text-sm font-medium leading-relaxed text-text-tertiary border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(1); // Keep the first FAQ expanded by default

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-24 z-10 overflow-hidden bg-white"
    >
      {/* Decorative Blob */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-start to-brand-accent opacity-5 blur-[120px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            Find immediate answers regarding our agency timelines, tech stacks, secure integrations, and ongoing platform maintenance.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
