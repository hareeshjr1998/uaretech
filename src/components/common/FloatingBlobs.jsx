import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Blob */}
      <motion.div 
        className="absolute top-[10%] left-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-r from-brand-start to-brand-end opacity-20 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Middle Right Blob */}
      <motion.div 
        className="absolute top-[40%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent opacity-20 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.98, 1.05, 1],
        }}
        transition={{
          duration: 18,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Bottom Left Blob */}
      <motion.div 
        className="absolute bottom-[10%] left-[5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-gradient-to-r from-brand-accent to-brand-primary opacity-15 blur-[60px] md:blur-[100px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default FloatingBlobs;
