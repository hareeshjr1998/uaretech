import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { teamData } from '../../data/siteData';

const Team = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section
      id="team"
      className="relative py-24 z-10 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Decorative Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-secondary to-brand-accent opacity-5 blur-[120px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            Meet Our <span className="text-gradient">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            We are powered by elite ex-FAANG engineers, dedicated software architects, design specialists, and cloud orchestration veterans.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-glass border border-slate-200/60 bg-white flex flex-col justify-end border-glow-card"
            >
              {/* Member Portrait Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent z-10 transition-all duration-300 group-hover:via-slate-950/50" />
              </div>

              {/* Static Content (Always visible name/role) */}
              <div className="relative p-6 z-20 text-left text-white translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                <h3 className="font-outfit font-extrabold text-xl tracking-tight mb-1">
                  {member.name}
                </h3>
                <span className="font-inter text-xs font-bold text-brand-accent tracking-widest uppercase mb-4 block">
                  {member.role}
                </span>

                {/* Sliding bio + socials visible on hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <p className="font-inter text-xs leading-relaxed text-text-secondary font-medium mb-6">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-xl border border-white/15 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-colors duration-300"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-xl border border-white/15 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-xl border border-white/15 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-colors duration-300"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
