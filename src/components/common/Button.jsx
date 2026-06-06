import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false 
}) => {
  const baseStyles = "relative px-6 py-3 rounded-full font-outfit font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none select-none";
  
  if (variant === 'primary') {
    return (
      <motion.button
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: 1.03, translateY: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} btn-cta-primary disabled:opacity-50 disabled:pointer-events-none ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  if (variant === 'secondary') {
    return (
      <motion.button
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: 1.03, translateY: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`relative rounded-full font-outfit font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center justify-center cursor-pointer outline-none select-none gradient-border-btn text-brand-primary disabled:opacity-50 disabled:pointer-events-none ${className}`}
      >
        <span className="relative z-10 px-6 py-3 flex items-center justify-center gap-2 bg-clip-text text-gradient">
          {children}
        </span>
      </motion.button>
    );
  }

  // Transparent link variant
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.05, x: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} bg-transparent text-slate-600 hover:text-brand-primary p-0 disabled:opacity-50 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
