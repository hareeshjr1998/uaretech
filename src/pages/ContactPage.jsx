import { useDispatch, useSelector } from 'react-redux';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { updateForm, resetForm, setSubmitStatus } from '../redux/slices/contactSlice';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingBlobs from '../components/common/FloatingBlobs';
import PageTransition from '../components/common/PageTransition';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import FAQ from '../components/sections/FAQ';

const ContactPage = () => {
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
        colors: ['#FF7A00', '#FF006E', '#0084FF']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF7A00', '#FF006E', '#0084FF']
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
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#FFF8F2] text-text-secondary">
        {/* Visual elements */}
        <FloatingBlobs />
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-36 pb-12 z-10 bg-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary font-outfit text-xs font-bold uppercase tracking-wider mb-6 shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span>GET IN TOUCH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary mb-6 leading-tight max-w-4xl mx-auto"
            >
              Start Your Digital <br />
              <span className="text-gradient">Transformation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
            >
              Submit your project scope or operational targets. Our lead software architect will review and reply within 12 hours.
            </motion.p>
          </div>
        </section>

        {/* Form and Map Grid */}
        <section className="relative pb-16 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Info & Map */}
              <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
                
                {/* Pills */}
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
                        className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50 shadow-glass transition-all duration-300 hover:translate-x-1"
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

                {/* Google Map */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[260px] sm:h-[300px] rounded-3xl overflow-hidden shadow-glass border border-slate-200/60 relative p-1.5 bg-white"
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

              {/* Right Column: Dynamic Form */}
              <div className="lg:col-span-7 w-full h-full">
                <GlassCard hoverEffect={false} className="h-full flex flex-col justify-center relative overflow-hidden bg-white border border-slate-200/60 shadow-glass p-8 sm:p-10">
                  
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      /* Success State */
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
                          Message Sent!
                        </h3>
                        
                        <p className="font-inter text-sm sm:text-base text-text-tertiary max-w-sm leading-relaxed">
                          Your proposal request has been logged. An expert engineering partner will contact you shortly with full cost estimations.
                        </p>
                      </motion.div>
                    ) : (
                      /* Main Form */
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                      >
                        <h3 className="font-outfit font-extrabold text-xl text-text-primary text-left mb-2">
                          Send Proposal Scope
                        </h3>

                        {/* Name */}
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

                        {/* Email */}
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

                        {/* Phone */}
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

                        {/* Message */}
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

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={status === 'sending'}
                          className="w-full py-4 text-base font-bold shadow-glow hover:shadow-glow/90"
                        >
                          {status === 'sending' ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending Proposal...</span>
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

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
