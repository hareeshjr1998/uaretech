import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', onClick, delay = 0, hoverEffect = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { 
        y: -6, 
        boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
        borderColor: '#E2E8F0',
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
      } : {}}
      onClick={onClick}
      className={`glass-card p-6 md:p-8 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
