import { motion } from 'framer-motion';

const Highlights = () => {
  const items = [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Apps & Websites Delivered' },
    { value: '8+', label: 'Happy Clients' },
    { value: 'Within 48 Hrs', label: 'Free Demo Turnaround' },
  ];

  return (
    <section className="relative z-20 px-6 md:px-12 -mt-10 sm:-mt-16 md:-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card bg-white border border-slate-200/60 shadow-glass rounded-[2rem] py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative z-10"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center flex-1 w-full ${
                idx !== items.length - 1 ? 'md:border-r border-slate-100/80' : ''
              } px-2`}
            >
              <span className="font-outfit font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gradient mb-1.5 tracking-tight leading-none whitespace-nowrap">
                {item.value}
              </span>
              <span className="font-inter text-[10px] sm:text-xs font-bold text-text-tertiary uppercase tracking-widest max-w-[190px] leading-relaxed">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
