import { motion } from 'framer-motion';

const TechStack = () => {
  const techStack = [
    { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Python', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Hostinger', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Hostinger_logo_purple.svg' },
    { name: 'DigitalOcean', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg' },
    { name: 'Razorpay', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg' },
    { name: 'n8n', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg' },
    { name: 'Twilio API', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg' },
    { name: 'EmailJS', logoUrl: 'https://cdn.brandfetch.io/emailjs.com/icon' },
    { name: 'Nodemailer', logoUrl: 'https://cdn.brandfetch.io/nodemailer.com/icon' },
    { name: 'Meta Ads', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Google Ads', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
    { name: 'Meta Business Suite', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Canva', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Canva_logo.svg' },
    { name: 'CapCut', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/CapCut_logo.svg' },
    { name: 'Figma', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Adobe Premiere Pro', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Adobe_Premiere_Pro_Logo.svg' },
    { name: 'Filmora', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg' },
  ];

  return (
    <section className="relative py-20 z-10 bg-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4">
            Our Cutting-Edge <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-text-tertiary">
            We design premium architectures utilizing exclusively high-performance frameworks and developer ecosystems.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-50/40 border border-slate-100 hover:border-brand-primary/20 hover:bg-white hover:shadow-lg hover:shadow-slate-100/80 transition-[border-color,background-color,box-shadow] duration-300 rounded-2xl w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.logoUrl}
                  alt={`${tech.name} logo`}
                  className="w-12 h-12 object-contain"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </div>
              <span className="font-outfit font-bold text-xs sm:text-sm text-text-primary text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
