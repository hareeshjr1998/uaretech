import { useDispatch, useSelector } from 'react-redux';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { updateForm, resetForm, setSubmitStatus } from '../../redux/slices/contactSlice';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';

const Contact = () => {
  const dispatch = useDispatch();
  const { formData, status } = useSelector((state) => state.contact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const fireConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#06B6D4', '#7C3AED', '#8B5CF6', '#0EA5E9']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#06B6D4', '#7C3AED', '#8B5CF6', '#0EA5E9']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    dispatch(setSubmitStatus({ status: 'sending' }));

    setTimeout(() => {
      dispatch(setSubmitStatus({ status: 'success' }));
      fireConfetti();
      
      setTimeout(() => {
        dispatch(resetForm());
      }, 4000);
    }, 1500);
  };

  const contactInfos = [
    { icon: Mail, label: 'Email Us', value: 'hello@uaretech.com', link: 'mailto:hello@uaretech.com' },
    { icon: Phone, label: 'Call Us', value: '+1 (555) 392-0941', link: 'tel:+15553920941' },
    { icon: MapPin, label: 'Visit Us', value: '72 S. Market St, San Jose, CA', link: 'https://maps.google.com' },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 z-10 overflow-hidden bg-[#FFF8F2]"
    >
      {/* Decorative Blob */}
      <div className="absolute bottom-[5%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-brand-start to-brand-accent opacity-5 blur-[120px] pointer-events-none animate-pulse-subtle" />

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
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            Have a project in mind or need assistance with a digital transformation? Submit your query and an expert will reply within 12 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Direct Info Pills */}
            <div className="flex flex-col gap-6">
              {contactInfos.map((info, i) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50 shadow-glass hover:border-brand-primary/20 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-outfit font-extrabold text-[10px] text-text-tertiary uppercase tracking-wider">{info.label}</h4>
                      <span className="font-inter text-sm sm:text-base font-bold text-text-primary">{info.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Styled Responsive Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-[250px] sm:h-[280px] rounded-3xl overflow-hidden shadow-glass border border-slate-200/60 relative p-1.5 bg-white"
            >
              <iframe
                title="UareTech San Jose HQ Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3385750275815!2d-121.89069502422774!3d37.33446867209932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca234a4d467%3A0x7dbe0d75cf78e6be!2s72%20S%20Market%20St%2C%20San%20Jose%2C%20CA%2095113!5e0!3m2!1sen!2sus!4v1716982845942!5m2!1sen!2sus"
                className="w-full h-full rounded-2xl border-none opacity-75 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>

          {/* Right Column: Dynamic Feedback Contact Form */}
          <div className="lg:col-span-7 w-full h-full">
            <GlassCard hoverEffect={false} className="h-full flex flex-col justify-center relative overflow-hidden bg-white border border-slate-200/60 p-8 sm:p-10">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Feedback Panel */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                      className="text-brand-primary mb-6"
                    >
                      <CheckCircle2 className="w-20 h-20 fill-brand-primary/10" />
                    </motion.div>
                    
                    <h3 className="font-outfit font-extrabold text-2xl text-text-primary mb-3">
                      Message Sent Successfully!
                    </h3>
                    
                    <p className="font-inter text-sm sm:text-base font-semibold leading-relaxed text-text-tertiary max-w-sm">
                      Thank you for contacting UareTech. Our lead systems architect has been notified and we will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  /* Standard Input Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="font-outfit font-extrabold text-xl text-text-primary text-left mb-2">
                      Send Us a Message
                    </h3>

                    {/* Form Input: Name */}
                    <div className="relative text-left">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder=" "
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm"
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none font-inter text-xs sm:text-sm font-semibold text-text-tertiary peer-placeholder-shown:text-text-tertiary peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:px-1.5 transition-all duration-300 origin-left"
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Form Input: Email */}
                    <div className="relative text-left">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm"
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none font-inter text-xs sm:text-sm font-semibold text-text-tertiary peer-placeholder-shown:text-text-tertiary peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:px-1.5 transition-all duration-300 origin-left"
                      >
                        Email Address *
                      </label>
                    </div>

                    {/* Form Input: Phone */}
                    <div className="relative text-left">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder=" "
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm"
                      />
                      <label 
                        htmlFor="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none font-inter text-xs sm:text-sm font-semibold text-text-tertiary peer-placeholder-shown:text-text-tertiary peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:px-1.5 transition-all duration-300 origin-left"
                      >
                        Phone Number (Optional)
                      </label>
                    </div>

                    {/* Form Input: Message */}
                    <div className="relative text-left">
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm resize-none"
                      />
                      <label 
                        htmlFor="message"
                        className="absolute left-4 top-4 pointer-events-none font-inter text-xs sm:text-sm font-semibold text-text-tertiary peer-placeholder-shown:text-text-tertiary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:px-1.5 transition-all duration-300 origin-left"
                      >
                        Tell us about your project *
                      </label>
                    </div>

                    {/* Form submit status controls */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === 'sending'}
                      className="w-full py-4 text-base font-bold shadow-glow hover:shadow-glow/90"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Query...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </Button>

                  </motion.form>
                )}
              </AnimatePresence>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
